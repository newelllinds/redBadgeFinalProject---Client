import * as React from 'react';
import FetchAllShopListings from '../Supporter/FetchAllShopListings'

export interface SupporterHomePageProps {
    token: string
    
}
 
export interface SupporterHomePageState {
    
}
 
class SupporterHomePage extends React.Component<SupporterHomePageProps, SupporterHomePageState> {
    constructor(props: SupporterHomePageProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div>
                <FetchAllShopListings token={this.props.token}/>
            </div>
          );
    }
}
 
export default SupporterHomePage;