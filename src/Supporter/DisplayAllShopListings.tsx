import * as React from 'react';
import {Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody} from 'reactstrap';
import { IShopListingResponse } from '../ArtistProfile/Interfaces';

export interface DisplayAllShopListingsProps {
    token: string,
    fetchAllShopListings: Function,
    listing: IShopListingResponse
}
 
export interface DisplayAllShopListingsState {
    
}
 
class DisplayAllShopListings extends React.Component<DisplayAllShopListingsProps, DisplayAllShopListingsState> {
    constructor(props: DisplayAllShopListingsProps) {
        super(props);
        this.state = {};
    }


    render() { 
        return (
            <div>
            <div className='shop-listing-wrapper'>
<Card className='shop-listing-form-wrapper'>
<CardImg top width="100%" src={this.props.listing.image} alt="Card image cap" />
<CardBody>
{/* <CardTitle tag="h5">Artist Profile</CardTitle> */}
<CardSubtitle tag="h6" className="mb-2 text-muted">${this.props.listing.price}</CardSubtitle>
<CardText>Description: {this.props.listing.description}<br></br>
Pick Up Information: {this.props.listing.pickup_info}</CardText>
{/* <Button>Visit Artist's Profile</Button> */}
</CardBody>
</Card>
</div>
</div>
);
    }
}
 //Visit Artist's Shop - get user id from shop listing and put user id in the fetch to fetch info
 //View Artist Profile - get user id from modal to open
 //use a modal to open the results
export default DisplayAllShopListings;