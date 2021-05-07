import * as React from 'react';
import { IArtistShopResponse } from '../ArtistProfile/Interfaces'
import ArtistShopMapper from './ArtistShopMapper'

export interface FetchArtistShopProps {
    token: string,
    artistShop: IArtistShopResponse
}
 
export interface FetchArtistShopState {
    artistShop: IArtistShopResponse[]
}
 
class FetchArtistShop extends React.Component<FetchArtistShopProps, FetchArtistShopState> {
    constructor(props: FetchArtistShopProps) {
        super(props);
        this.state = {
            artistShop: [] 
        };
    }

    fetchArtistShop = () => {
        let token = this.props.token ? this.props.token : localStorage.getItem('token')
        fetch(`http://localhost:3000/listing/view-artist-shop/${this.props.artistShop.userId}`, {
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
                artistShop: data
            })
        }) 
    }

    componentDidMount() {
        this.fetchArtistShop()
    }

    render() { 
        return (
            <div>
                <ArtistShopMapper token={this.props.token} artistShop={this.state.artistShop} fetchArtistShop={this.fetchArtistShop}/>
            </div>
          );
    }
}
 
export default FetchArtistShop;