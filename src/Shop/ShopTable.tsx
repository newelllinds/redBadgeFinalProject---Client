import * as React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import { IShopListingResponse } from '../ArtistProfile/Interfaces'

export interface ShopTableProps {
    token: string,
    fetchShopListings: Function,
    shopListing: IShopListingResponse[]
    // image: string,
    // description: string,
    // // price: Number,
    // pickup_info: string
}
 
export interface ShopTableState {
    
}
 
class ShopTable extends React.Component<ShopTableProps, ShopTableState> {
    constructor(props: ShopTableProps) {
        super(props);
        this.state = {};
    }

    //fetch

    //map below

    //separate component to display
    render() { 
        return (
            <div className='wrapper'>
            <Card className='profile-display-form-wrapper'>
              <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
              <CardBody>
                {/* <CardTitle tag="h5">Artist Profile</CardTitle> */}
                {/* <CardSubtitle tag="h6" className="mb-2 text-muted">{this.props.price}</CardSubtitle> */}
                <CardText>Description: {this.props.shopListing[0].description}<br></br>
                Pick Up Information: {this.props.shopListing[0].pickup_info}</CardText>
                <Button>Visit Artist's Shop</Button>
                {/* <ArtistProfileEdit token = {this.props.token} profile = {this.props.artistProfile[0]} fetchArtistProfile = {this.props.fetchArtistProfile}/>
                <Button onClick={(e) => this.deleteArtistProfile()}>Delete Artist Profile</Button> */}
              </CardBody>
            </Card>
          </div>
          );
    }
}
 
export default ShopTable;