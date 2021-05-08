import * as React from 'react';
import { IShopListingResponse } from '../ArtistProfile/Interfaces';
import DisplayAllShopListingsMapper from './DisplayAllShopListingsMapper';
import APIURL from '../helpers/environment'

export interface FetchAllShopListingsProps {
    token: string;
}
 
export interface FetchAllShopListingsState {
    shopListing: IShopListingResponse[]
    
}
 
class FetchAllShopListings extends React.Component<FetchAllShopListingsProps, FetchAllShopListingsState> {
    constructor(props: FetchAllShopListingsProps) {
        super(props);
        this.state = {
            shopListing: []
        };
    }

    fetchAllShopListings = () => {
        let token = this.props.token ? this.props.token : localStorage.getItem('token')
        fetch(`${APIURL}/listing/view-all-listings`, {
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
                shopListing: data
            })
        })   
    }

    componentDidMount() {
        this.fetchAllShopListings()
    }
    
    render() { 
        return (
        <div>
            <DisplayAllShopListingsMapper token={this.props.token} shopListing={this.state.shopListing} fetchAllShopListings={this.fetchAllShopListings}/>
        </div>  
        );
    }
}
 
export default FetchAllShopListings;