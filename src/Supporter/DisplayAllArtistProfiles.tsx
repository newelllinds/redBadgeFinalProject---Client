import * as React from 'react';
import {Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody} from 'reactstrap';
import { IArtistProfileResponse, IArtistShopResponse } from '../ArtistProfile/Interfaces';
import {Link} from 'react-router-dom';

export interface DisplayAllArtistProfilesProps {
    token: string,
    fetchAllArtistProfiles: Function,
    profile: IArtistProfileResponse    
}
 
export interface DisplayAllArtistProfilesState {
    
}
 
class DisplayAllArtistProfiles extends React.Component<DisplayAllArtistProfilesProps, DisplayAllArtistProfilesState> {
    constructor(props: DisplayAllArtistProfilesProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div className='shop-listing-wrapper'>
            <Card className='shop-listing-form-wrapper'>
              {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
              <CardBody>
                <CardTitle tag="h5">Artist Profile</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{this.props.profile.mediums}</CardSubtitle>
                <CardText>About the Artist: {this.props.profile.about_the_artist}<br></br>
                Inspiration: {this.props.profile.inspiration}<br></br>Achievements: {this.props.profile.achievements}<br></br>Website: {this.props.profile.website}</CardText>
                <Link to={`/listing/view-artist-shop/${this.props.profile.userId}`}>
                <Button>Visit Artist's Shop</Button>
                </Link>
                {/* //pass id to new component and place it in the fetch {this.props.profile.id} do an interface for the info unless I can use the one I used for the cards - fetch component and map component - cards */}
              </CardBody>
            </Card>
            </div>
          );
    }
}
 
export default DisplayAllArtistProfiles;