import * as React from 'react';
import {Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody} from 'reactstrap';
import CreateShopListing from '../Shop/CreateShopListing'
import { IShopListingResponse } from '../ArtistProfile/Interfaces';
// import { ShopTable } from './ShopTable'
import EditShopListing from './EditShopListing'
import APIURL from '../helpers/environment'


export interface DisplayShopListingProps {
    token: string,
    fetchShopListings: Function,
    // shopListing: IShopListingResponse[]
    listing: IShopListingResponse,
    
}
 
export interface DisplayShopListingState {
    
}
 
class DisplayShopListing extends React.Component<DisplayShopListingProps, DisplayShopListingState> {
    constructor(props: DisplayShopListingProps) {
        super(props);
        this.state = {};
    }

    deleteShopListing = () => {
      let token = this.props.token ? this.props.token : localStorage.getItem('token')
      fetch(`${APIURL}/listing/delete-listing/${this.props.listing.id}`,
      {
      method: 'DELETE',
      headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': token? token: ''
      })
  }).then(() => this.props.fetchShopListings())
  console.log(this.props.listing.id)
}
      

    render() { 
        return ( 
            <div>
                            <div className='shop-listing-wrapper'>
            <Card className='shop-listing-form-wrapper'>
              <CardImg top width="100%" src={this.props.listing.image} alt="Card image cap" />
              <CardBody>
                {/* <CardTitle tag="h5">Artist Profile</CardTitle> */}
                <CardSubtitle tag="h6" className="mb-2 text-muted">{this.props.listing.price}</CardSubtitle>
                <CardText>Description: {this.props.listing.description}<br></br>
                Pick Up Information: {this.props.listing.pickup_info}</CardText>
                {/* <Button>Visit Artist's Shop</Button> */}
                <EditShopListing token = {this.props.token} listing = {this.props.listing} fetchShopListings = {this.props.fetchShopListings}/>
                <Button onClick={(e) => this.deleteShopListing()}>Delete Shop Listing</Button>
          
              </CardBody>
            </Card>
          </div>
            </div>
        );
    }
}
 
export default DisplayShopListing;