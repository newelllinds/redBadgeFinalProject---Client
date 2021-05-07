import * as React from 'react';
import { IArtistProfileResponse } from '../ArtistProfile/Interfaces'
import ArtistProfileMapper from './ArtistProfileMapper'

export interface FetchAllArtistProfilesProps {
    token: string
}
 
export interface FetchAllArtistProfilesState {
    artistProfile: IArtistProfileResponse[]
}
 
class FetchAllArtistProfiles extends React.Component<FetchAllArtistProfilesProps, FetchAllArtistProfilesState> {
    constructor(props: FetchAllArtistProfilesProps) {
        super(props);
        this.state = {
            artistProfile: []
        };
    }

    fetchAllArtistProfiles = () => {
        let token = this.props.token ? this.props.token : localStorage.getItem('token')
        fetch('http://localhost:3000/artist/view-artist-profiles', {
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
        this.fetchAllArtistProfiles()
    }
        
    render() { 
        return (
            <div>
                <ArtistProfileMapper token={this.props.token} artistProfile={this.state.artistProfile} fetchAllArtistProfiles={this.fetchAllArtistProfiles}/>
            </div>
          );
    }
}
 
export default FetchAllArtistProfiles;