import React from 'react';
import ArtistProfileCreate from './ArtistProfileCreate'
import ArtistProfileTable from './ArtistProfileTable'
import { IArtistProfileResponse } from './Interfaces';
// import ShopIndex from '../Shop/CreateShopListing'

//need to add ternary to not show create form if there's already an artist table

export interface IndexProps {
    // artistProfile: IArtistProfileResponse,
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
        fetch('http://localhost:3000/artist/view-profile', {
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

    // updateArtistProfile = (artistProfile) => {
    //     this.setState({
    //         artistProfile
    //     })

    // }

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
 
//if sttement to check artistprofile.length again to show table, i

//if this.state.artistProfile.length > 0 ?
//return <ArtistProfileTable>
//else 
//return <ArtistProfileCreate>
export default Index;