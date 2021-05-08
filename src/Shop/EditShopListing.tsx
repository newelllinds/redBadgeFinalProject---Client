import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { IShopListingResponse } from '../ArtistProfile/Interfaces';
import APIURL from '../helpers/environment'



export interface EditShopListingProps {
    listing: IShopListingResponse,
    token: string,
    fetchShopListings: Function
}
 
export interface EditShopListingState {
    modal: boolean,
    image: string,
    description: string,
    price: Number,
    pickup_info: string

    
}
 
class EditShopListing extends React.Component<EditShopListingProps, EditShopListingState> {
    constructor(props: EditShopListingProps) {
        super(props);
        this.state = { 
            image: this.props.listing.image,
            description: this.props.listing.description,
            price: this.props.listing.price,
            pickup_info: this.props.listing.pickup_info,
            modal: true
        };
    }

    UpdateShopListing = (event: any) => {
        event.preventDefault()
        console.log(this.props.listing)
        let token = this.props.token ? this.props.token : localStorage.getItem('token')
        fetch(`${APIURL}/listing/update-listing/${this.props.listing.id}`, {
            method: 'PUT',
            body: JSON.stringify({listing: {image: this.state.image, description: this.state.description, price: this.state.price, pickup_info: this.state.pickup_info}}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': token? token: '',
            })
        })
            .then(response => response.json())
            .then((updateData) => {
                console.log(updateData);
                this.setState({
                    image: '',
                    description: '',
                    price: 0,
                    pickup_info: '',
                })
            this.props.fetchShopListings()
            })
    }

    toggle = () => this.setState({modal: !this.state.modal});
    
    render() { 
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>Edit Your Shop Listing</Button>
                <Modal isOpen={!this.state.modal} toggle={this.toggle} >
                    <ModalHeader >Edit Your Shop Listing</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.UpdateShopListing}>
                            <FormGroup>
                                <Label htmlFor="about-the-artist">Edit Image:</Label>
                                <Input name="about-the-artist" value={this.state.image} onChange={(e) => this.setState({image: e.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="mediums">Edit Description:</Label>
                                <Input name="mediums"  value={this.state.description} onChange={(e) => this.setState({description: e.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="inspiration">Edit Price:</Label>
                                <Input name="inspiration"  valueAsNumber={this.state.price} onChange={(e) => this.setState({price: e.target.valueAsNumber})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="achievements">Edit Pick Up Info:</Label>
                                <Input name="achievements"  value={this.state.pickup_info} onChange={(e) => this.setState({pickup_info: e.target.value})}/>
                        </FormGroup> 
            <Button color="primary" type='submit' onClick={this.toggle}>Submit Changes</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </Form>
                    </ModalBody>
                </Modal>

            </div>
          );
    }
}
 
export default EditShopListing;