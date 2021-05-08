import * as React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import { IArtistProfileResponse } from './Interfaces';
  import ArtistProfileEdit from './ArtistProfileEdit'
  import APIURL from '../helpers/environment'

export interface ArtistProfileTableProps {
    token: string,
    fetchArtistProfile: Function;
    artistProfile: IArtistProfileResponse[],
}
 
export interface ArtistProfileTableState {
    // editArtistProfile: Function,
    // updateActive: boolean,
    // artistProfiletoUpdate: {};
}
 
class ArtistProfileTable extends React.Component<ArtistProfileTableProps, ArtistProfileTableState> {
    constructor(props: ArtistProfileTableProps) {
        super(props);
        this.state = {};
    }

    deleteArtistProfile = () => {
      let token = this.props.token ? this.props.token : localStorage.getItem('token')
        fetch(`${APIURL}/artist/delete-profile/${this.props.artistProfile[0].id}`,
        {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': token? token: ''
        })
    }).then(() => this.props.fetchArtistProfile())
    console.log(this.props.artistProfile[0].id)
  
  }

    render() { 
      console.log(this.props.artistProfile)
        // console.log(this.props.artistProfile[0].about_the_artist)
        return (
            <div className='wrapper'>
            <Card className='profile-display-form-wrapper'>
              {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
              <CardBody>
                <CardTitle tag="h2">Artist Profile</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{this.props.artistProfile[0].mediums}</CardSubtitle>
                <CardText>About the Artist: {this.props.artistProfile[0].about_the_artist}<br></br>
                Inspiration: {this.props.artistProfile[0].inspiration}<br></br>Achievements: {this.props.artistProfile[0].achievements}<br></br>Website: {this.props.artistProfile[0].website}</CardText>
                <Button>Visit Artist's Shop</Button>
                <ArtistProfileEdit token = {this.props.token} profile = {this.props.artistProfile[0]} fetchArtistProfile = {this.props.fetchArtistProfile}/>
                <Button onClick={(e) => this.deleteArtistProfile()}>Delete Artist Profile</Button>
              </CardBody>
            </Card>
          </div>
          );
    }
}

//have to pass the fetch function to the create in order to have the table automatically update


 
export default ArtistProfileTable;