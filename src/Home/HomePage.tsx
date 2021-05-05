import React from 'react';
import NavBar from './NavBar'
import ArtistHomePage from './ArtistHomePage'
import SupporterHomePage from './SupporterHomePage';
// import ArtistIndex from '../ArtistProfile/ArtistIndex'
// import ShopIndex from '../Shop/ShopIndex'

//add router

// Artist:
// Artist Profile
// Shop

//Supporter:
// View Artist Profiles
// View Shop Listings

export interface HomePageProps {
    token: string,
    role: Number
        // clearToken: Function
    
}
 
export interface HomePageState {
    
}
 
class HomePage extends React.Component<HomePageProps, HomePageState> {
    constructor(props: HomePageProps) {
        super(props);
        this.state = {};
    }

    roleChecker() {
        if (localStorage.getItem('role') === '2') {
            return <ArtistHomePage token={this.props.token}/>
        } else if (localStorage.getItem('role') === '3') {
            return <SupporterHomePage token={this.props.token}/>
        }
    }

    // protectedViews = () => {
    //     return localStorage.getItem('role') === '2' ? (
    //       (<ArtistIndex token={this.props.token}/> <ShopIndex token={this.props.token}/>)
    //     ) : (
    //       <Auth updateToken={this.updateToken} updateRole={this.updateRole}/>
    //     )
    //   }

    // create an if statement in the ArtistIndex to check if there's an artist profile. if not, it will you to the artistprofilecreate, if so, it will display the artistprofiletable

    render() { 
        return (
            <div>
                <NavBar/>
                {this.roleChecker()}

                {/* <ArtistIndex token={this.props.token}/>
                <ShopIndex token={this.props.token}/> */}
            </div>
          );
    }
}
 
export default HomePage;