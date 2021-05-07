import * as React from 'react';
import { CardColumns } from 'reactstrap';
import DisplayArtistShop from './DisplayArtistShop';
import { IArtistShopResponse, IShopListingResponse } from '../ArtistProfile/Interfaces'

export interface ArtistShopMapperProps {
    token: string,
    fetchArtistShop: Function,
    artistShop: IArtistShopResponse[]
}
 
export interface ArtistShopMapperState {
    
}
 
class ArtistShopMapper extends React.Component<ArtistShopMapperProps, ArtistShopMapperState> {
    constructor(props: ArtistShopMapperProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <CardColumns>
            {this.props.artistShop.length > 0 ? (
                this.props.artistShop.map(
                    (artistShop: IArtistShopResponse, index: number) => (
                        <DisplayArtistShop fetchArtistShop={this.props.fetchArtistShop} token={this.props.token} artistShop={artistShop} key={index}/>
                    )
                )
            ) : (
                <></>
            )}
        </CardColumns>
          );
    }
}
 
export default ArtistShopMapper;