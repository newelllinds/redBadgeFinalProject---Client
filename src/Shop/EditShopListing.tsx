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
    editImage: string,
    editDescription: string,
    editPrice: Number,
    editPickup_info: string,
    loading: boolean
}
 
class EditShopListing extends React.Component<EditShopListingProps, EditShopListingState> {
    constructor(props: EditShopListingProps) {
        super(props);
        this.state = { 
            editImage: this.props.listing.image,
            editDescription: this.props.listing.description,
            editPrice: this.props.listing.price,
            editPickup_info: this.props.listing.pickup_info,
            modal: true,
            loading: false
        };
    }

    uploadNewImage = async (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>) => {
        const target = (e.target as HTMLInputElement)
        const files: File = (target.files as FileList) [0];
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
            editImage: file.secure_url
        })
        console.log(file.secure_url)
        this.setState({
            loading: false
        })
    }

    UpdateShopListing = (event: any) => {
        event.preventDefault()
        console.log(this.props.listing)
        let token = this.props.token ? this.props.token : localStorage.getItem('token')
        fetch(`${APIURL}/listing/update-listing/${this.props.listing.id}`, {
            method: 'PUT',
            body: JSON.stringify({listing: {image: this.state.editImage, description: this.state.editDescription, price: this.state.editPrice, pickup_info: this.state.editPickup_info}}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': token? token: '',
            })
        })
            .then(response => response.json())
            .then((updateData) => {
                console.log(updateData);
                this.setState({
                    editImage: '',
                    editDescription: '',
                    editPrice: 0,
                    editPickup_info: '',
                })
            this.props.fetchShopListings()
            })
    }

    toggle = () => this.setState({modal: !this.state.modal});
    
    render() { 
        return (
            <div>
                <Button className='editbtn' onClick={this.toggle}>Edit Your Shop Listing</Button>
                <Modal isOpen={!this.state.modal} toggle={this.toggle} >
                    <ModalHeader >Edit Your Shop Listing</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.UpdateShopListing}>
                            <FormGroup>
                                <Label htmlFor="about-the-artist">Edit Image:</Label>
                                <Input type='file' name="about-the-artist" onChange={this.uploadNewImage}/>
                                { this.state.loading ? (
                                    <h3>Loading...</h3>
                                ) : (
                                    <img src={this.state.editImage} alt='' style={{width: '100px'}}/>
                                )}
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="mediums">Edit Description:</Label>
                                <Input name="mediums"  value={this.state.editDescription} onChange={(e) => this.setState({editDescription: e.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="inspiration">Edit Price:</Label>
                                <Input name="inspiration"  valueAsNumber={this.state.editPrice} onChange={(e) => this.setState({editPrice: e.target.valueAsNumber})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="achievements">Edit Pick Up Info:</Label>
                                <Input name="achievements"  value={this.state.editPickup_info} onChange={(e) => this.setState({editPickup_info: e.target.value})}/>
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