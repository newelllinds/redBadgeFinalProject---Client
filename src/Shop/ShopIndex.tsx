import * as React from 'react';
import ShopCreate from '../Shop/CreateShopListing'
import ShopTable from './ShopTable';
import { IShopListingResponse } from '../ArtistProfile/Interfaces'

export interface ShopIndexProps {
    token: string;
}
 
export interface ShopIndexState {
    shopListing: IShopListingResponse[],
    // image: string,
    // description: string,
    // // price: Number,
    // pickup_info: string
}
 
class ShopIndex extends React.Component<ShopIndexProps, ShopIndexState> {
    constructor(props: ShopIndexProps) {
        super(props);
        this.state = {
            shopListing: []


        };
    }

    fetchShopListings = () => {
        let token = this.props.token ? this.props.token : localStorage.getItem('token')
        fetch('http://localhost:3000/listing/view-my-listings', {
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
        this.fetchShopListings()
    }

    render() { 
        return (
            <div>
                <ShopCreate token={this.props.token} fetchShopListings={this.fetchShopListings}/>
                {this.state.shopListing.length > 0 ?
                <ShopTable token={this.props.token} shopListing={this.state.shopListing} fetchShopListings={this.fetchShopListings}/> : null}
                
            </div>
          );
    }
}
 
export default ShopIndex;