import React from 'react';
import NavBar from './NavBar'
import ArtistProfileCreate from '../ArtistProfile/ArtistProfileCreate'
import ArtistIndex from '../ArtistProfile/ArtistIndex'
import ShopIndex from '../Shop/ShopIndex'

//add router

export interface HomePageProps {
    token: string
    // clearToken: Function
    
}
 
export interface HomePageState {
    
}
 
class HomePage extends React.Component<HomePageProps, HomePageState> {
    constructor(props: HomePageProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div>
                <NavBar/>
                <ArtistIndex token={this.props.token}/>
                <ShopIndex token={this.props.token}/>
            </div>
          );
    }
}
 
export default HomePage;