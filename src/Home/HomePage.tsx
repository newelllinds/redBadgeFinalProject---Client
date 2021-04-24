import React from 'react';
import NavBar from './NavBar'
import ArtistProfileCreate from '../ArtistProfile/ArtistProfileCreate'
import ArtistIndex from '../ArtistProfile/ArtistIndex'

//add router

export interface HomePageProps {
    token: string
    
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
                <NavBar />
                <ArtistIndex token={this.props.token}/>
            </div>
          );
    }
}
 
export default HomePage;