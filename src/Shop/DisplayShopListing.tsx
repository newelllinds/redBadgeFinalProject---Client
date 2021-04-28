import * as React from 'react';
import {Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody} from 'reactstrap';
import CreateShopListing from '../Shop/CreateShopListing'

export interface DisplayShopListingProps {
    
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
                
            </div>
        );
    }
}
 
export default DisplayShopListing;