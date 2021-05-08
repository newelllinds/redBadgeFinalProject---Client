import React from 'react';
import ArtistProfileCreate from './ArtistProfileCreate'
import ArtistProfileTable from './ArtistProfileTable'
import { IArtistProfileResponse } from './Interfaces';
import APIURL from '../helpers/environment'

export interface IndexProps {
    token: string;    
}
 
export interface IndexState {
    artistProfile: IArtistProfileResponse[]    
}
 
class Index extends React.Component<IndexProps, IndexState> {
    constructor(props: IndexProps) {
        super(props);
        this.state = {
            artistProfile: [
            ]
        };
        this.fetchArtistProfile=this.fetchArtistProfile.bind(this)
    }

    fetchArtistProfile = () => {
        let token = this.props.token ? this.props.token : localStorage.getItem('token')
        fetch(`${APIURL}/artist/view-profile`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': token? token: ''
            })
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            this.setState({
                artistProfile: data
            })
        })   
    }

    componentDidMount() {
        this.fetchArtistProfile()
    }

    render() { 
        console.log(this.state.artistProfile)
        return (
            <div>
                {/* <ArtistProfileCreate token={this.props.token} fetchArtistProfile={this.fetchArtistProfile}/> */}
                {this.state.artistProfile.length > 0 ? 
                <ArtistProfileTable token={this.props.token} artistProfile={this.state.artistProfile} fetchArtistProfile={this.fetchArtistProfile}/> : <ArtistProfileCreate token={this.props.token} fetchArtistProfile={this.fetchArtistProfile}/>}
                {/* <ShopIndex token={this.props.token}/> */}
            </div>
          );
    }
}

export default Index;