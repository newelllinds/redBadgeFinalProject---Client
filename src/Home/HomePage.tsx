import React from 'react';
import NavBar from './NavBar'

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
                Hello From Home Page
            </div>
          );
    }
}
 
export default HomePage;