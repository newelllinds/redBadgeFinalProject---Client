import * as React from 'react';
import {Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody} from 'reactstrap';
import CreateShopListing from '../Shop/CreateShopListing'
import { IShopListingResponse } from '../ArtistProfile/Interfaces';
// import { ShopTable } from './ShopTable'


export interface DisplayShopListingProps {
    // token: string,
    // fetchShopListings: Function,
    // shopListing: IShopListingResponse[]
    listing: IShopListingResponse
    
}
 
export interface DisplayShopListingState {
    
}
 
class DisplayShopListing extends React.Component<DisplayShopListingProps, DisplayShopListingState> {
    constructor(props: DisplayShopListingProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return ( 
            <div>
                            <div className='shop-listing-wrapper'>
            <Card className='shop-listing-form-wrapper'>
              <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
              <CardBody>
                {/* <CardTitle tag="h5">Artist Profile</CardTitle> */}
                {/* <CardSubtitle tag="h6" className="mb-2 text-muted">{this.props.price}</CardSubtitle> */}
                <CardText>Description: {this.props.listing.description}<br></br>
                Pick Up Information: {this.props.listing.pickup_info}</CardText>
                <Button>Visit Artist's Shop</Button>
                {/* <ArtistProfileEdit token = {this.props.token} profile = {this.props.artistProfile[0]} fetchArtistProfile = {this.props.fetchArtistProfile}/>
                <Button onClick={(e) => this.deleteArtistProfile()}>Delete Artist Profile</Button> */}
              </CardBody>
            </Card>
          </div>
            </div>
        );
    }
}
 
export default DisplayShopListing;