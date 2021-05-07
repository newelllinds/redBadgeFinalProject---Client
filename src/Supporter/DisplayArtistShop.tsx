import * as React from 'react';
import {Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody} from 'reactstrap';
import { IShopListingResponse } from '../ArtistProfile/Interfaces'

export interface DisplayArtistShopProps {
    token: string,
    fetchArtistShop: Function,
    artistShop: IShopListingResponse
}
 
export interface DisplayArtistShopState {
    
}
 
class DisplayArtistShop extends React.Component<DisplayArtistShopProps, DisplayArtistShopState> {
    constructor(props: DisplayArtistShopProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div>
            <div className='shop-listing-wrapper'>
<Card className='shop-listing-form-wrapper'>
<CardImg top width="100%" src={this.props.artistShop.image} alt="Card image cap" />
<CardBody>
{/* <CardTitle tag="h5">Artist Profile</CardTitle> */}
{/* <CardSubtitle tag="h6" className="mb-2 text-muted">{this.props.price}</CardSubtitle> */}
<CardText>Description: {this.props.artistShop.description}<br></br>
Pick Up Information: {this.props.artistShop.pickup_info}</CardText>
{/* <Button>Visit Artist's Shop</Button> */}
</CardBody>
</Card>
</div>
</div>
          );
    }
}
 
export default DisplayArtistShop;