import React from 'react';
import { IShopListingResponse } from '../ArtistProfile/Interfaces'
import DisplayShopListing from './DisplayShopListing';
import { CardColumns } from 'reactstrap';
import APIURL from '../helpers/environment'


export interface CreateShopListingProps {
    token: string;
    fetchShopListings: Function
    
}
 
export interface CreateShopListingState {
    // shopListing: IShopListingResponse[]
    image: string,
    description: string,
    price: Number,
    pickup_info: string,
    loading: boolean
}
 
class CreateShopListing extends React.Component<CreateShopListingProps, CreateShopListingState> {
    constructor(props: CreateShopListingProps) {
        super(props);
        this.state = {
            // shopListing: []
            image: '',
            description: '',
            price: 0,
            pickup_info: '',
            loading: false
        };
    }

    uploadImage = async (e: React.ChangeEvent<HTMLInputElement>|React.FormEvent<HTMLFormElement>) => {
        let target = (e.target as HTMLInputElement)
        const files: File = (target.files as FileList)[0]
        const data = new FormData()
        data.append('file', files)
        data.append('upload_preset', 'artapp')
        this.setState({
            loading: true
        })
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/dzbspjqw7/image/upload',
            {
                method: 'POST',
                body: data
            }
        ) 
        const file = await res.json()
            // console.log(res)
        this.setState({
            image: file.secure_url
        })
        console.log(file.secure_url)
        this.setState({
            loading: false
        })


        // async componentDidMount() {
        //     const res = await fetch(
        //         'https://api.cloudinary.com/v1_1/dzbspjqw7',
        //         {
        //             method: 'POST',
        //             body: data
        //         }
        //     ) 
        //     const file = await res.json
        //     this.setState({
        //         image: file.secure_url
        //         console.log(file.secure_url)
        //     })
        //     this.setState({
        //         loading: false
        //     })
            
        // }


    }

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(this.props.token)
        let token = this.props.token ? this.props.token : localStorage.getItem('token')
        fetch(`${APIURL}/listing/create-listing`, {
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
                            <label htmlFor='about_the_artist'>Upload Image</label>
                            <br></br>
                            <input type='file' name='about_the_artist' onChange={this.uploadImage}/>
                            { this.state.loading ? (
                            <h3>Loading...</h3>
                            ) : (
                                <img src={this.state.image} alt='' style={{ width: '100px'}} />
                            )}
                        </div>
                        {/* <div className='about_the_artist'>
                            <label htmlFor='about_the_artist'>Image</label>
                            <br></br>
                            <input type='text' name='about_the_artist' onChange={(e) => this.setState({image: e.target.value})}/>
                        </div> */}
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