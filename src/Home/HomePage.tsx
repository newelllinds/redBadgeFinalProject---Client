import React from 'react';

export interface HomePageProps {
    // sessionToken: string
    
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

            </div>
          );
    }
}
 
export default HomePage;