import * as React from 'react';
import { IArtistShopResponse } from '../ArtistProfile/Interfaces'
import ArtistShopMapper from './ArtistShopMapper'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import APIURL from '../helpers/environment'

export interface FetchArtistShopProps extends RouteComponentProps<{id: string}> {
    token: string
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

    fetchArtistShop = (id: string) => {
        debugger
        let token = this.props.token ? this.props.token : localStorage.getItem('token')
        fetch(`${APIURL}/listing/view-artist-shop/${id}`, {
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
        const id = this.props.match.params.id
        this.fetchArtistShop(id)
    }

    render() { 
        return (
            <div>
                <ArtistShopMapper token={this.props.token} artistShop={this.state.artistShop} fetchArtistShop={this.fetchArtistShop}/>
            </div>
          );
    }
}
 
export default withRouter (FetchArtistShop);