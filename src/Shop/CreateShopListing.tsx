import React from 'react';
import { IShopListingResponse } from '../ArtistProfile/Interfaces'
import DisplayShopListing from './DisplayShopListing';
import { CardColumns } from 'reactstrap';


export interface CreateShopListingProps {
    token: string;
    fetchShopListings: Function
    
}
 
export interface CreateShopListingState {
    // shopListing: IShopListingResponse[]
    image: string,
    description: string,
    price: Number,
    pickup_info: string
}
 
class CreateShopListing extends React.Component<CreateShopListingProps, CreateShopListingState> {
    constructor(props: CreateShopListingProps) {
        super(props);
        this.state = {
            // shopListing: []
            image: '',
            description: '',
            price: 0,
            pickup_info: ''
        };
    }

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(this.props.token)
        let token = this.props.token ? this.props.token : localStorage.getItem('token')
        fetch('http://localhost:3000/listing/create-listing', {
            method: 'POST',
            body: JSON.stringify({listing: {image: this.state.image, description: this.state.description, 
                price: this.state.price, 
                pickup_info: this.state.pickup_info}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: token? token: '',
            })
        })
        .then(response => response.json())
        .then((createData) => {
            console.log(createData);
            this.setState({
                // shopListing: createData

                image: '',
                description: '',
                price: 0,
                pickup_info: ''
            })
        this.props.fetchShopListings()
        })

        // displayCards = (event: any) => {
        //     return this.state.shopListing.length > 0 ? this.state.shopListing.map((shopListing) => DisplayShopListing displayListing={shopListing} /> : null;)
        // }

    }

    render() { 
        return (
            <div className='profile-create-wrapper'>
                <div className='profile-create-form-wrapper'>
                    <h2>Create Your Sale Listing</h2>
                    <form onSubmit={this.handleSubmit} >
                        <div className='about_the_artist'>
                            <label htmlFor='about_the_artist'>Image</label>
                            <br></br>
                            <input type='text' name='about_the_artist' onChange={(e) => this.setState({image: e.target.value})}/>
                        </div>
                        <div className='mediums'>
                            <label htmlFor='mediums'>Description</label>
                            <br></br>
                            <input type='text' name='mediums' onChange={(e) => this.setState({description: e.target.value})}/>
                        </div>
                        <div className='inspiration'>
                            <label htmlFor='inspiration'>Price</label>
                            <br></br>
                            <input type='number' name='inspiration' onChange={(e) => this.setState({price: e.target.valueAsNumber})}/>
                        </div>
                        <div className='achievements'>
                            <label htmlFor='achievements'>Pick Up Information</label>
                            <br></br>
                            <input type='text' name='achievements' onChange={(e) => this.setState({pickup_info: e.target.value})}/>
                        </div> 
                        <br></br>
                        <div className='submit'>
                            <button>Create My Sale Listing</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default CreateShopListing;