import * as React from 'react';
import { CardColumns } from 'reactstrap';
import { IShopListingResponse } from '../ArtistProfile/Interfaces';
import FetchAllShopListings from './FetchAllShopListings';
import DisplayAllShopListings from './DisplayAllShopListings'

export interface DisplayAllShopListingsMapperProps {
    token: string,
    fetchAllShopListings: Function,
    shopListing: IShopListingResponse[]
}
 
export interface DisplayAllShopListingsMapperState {
    
}
 
class DisplayAllShopListingsMapper extends React.Component<DisplayAllShopListingsMapperProps, DisplayAllShopListingsMapperState> {
    constructor(props: DisplayAllShopListingsMapperProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <CardColumns>
            {this.props.shopListing.length > 0 ? (
              this.props.shopListing.map(
                (listing: IShopListingResponse, index: number) => (
                  <DisplayAllShopListings fetchAllShopListings={this.props.fetchAllShopListings} token={this.props.token} listing={listing} key={index}/>
                )
              )
            ) : (
              <></>
            )}
          </CardColumns>
          );
    }
}
 
export default DisplayAllShopListingsMapper;