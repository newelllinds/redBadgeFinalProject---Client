import React from 'react';
import ArtistIndex from '../ArtistProfile/ArtistIndex'
import ShopIndex from '../Shop/ShopIndex'

export interface ArtistHomePageProps {
    token: string
    
}
 
export interface ArtistHomePageState {
    
}
 
class ArtistHomePage extends React.Component<ArtistHomePageProps, ArtistHomePageState> {
    constructor(props: ArtistHomePageProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div>
                <ArtistIndex token={this.props.token}/>
                <ShopIndex token={this.props.token}/>

            </div>

          );
    }
}
 
export default ArtistHomePage;