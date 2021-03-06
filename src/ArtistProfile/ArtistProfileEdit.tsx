import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../helpers/environment'
import { IArtistProfileResponse } from './Interfaces'

export interface ArtistProfileEditProps {
    token:string,
    fetchArtistProfile: Function,
    profile: IArtistProfileResponse
}
 
export interface ArtistProfileEditState {
    modal: boolean,
    about_the_artist: string,
    mediums: string,
    inspiration: string,
    achievements: string,
    website: string
}

class ArtistProfileEdit extends React.Component<ArtistProfileEditProps, ArtistProfileEditState> {
    constructor(props: ArtistProfileEditProps) {
        super(props);
        this.state = {
            about_the_artist: this.props.profile.about_the_artist,
            mediums: this.props.profile.mediums,
            inspiration: this.props.profile.inspiration,
            achievements: this.props.profile.achievements,
            website: this.props.profile.website,
            modal: true
        };
    }

    UpdateProfile = (event: any) => {
        event.preventDefault();
        console.log(this.props.profile)
        let token = this.props.token ? this.props.token : localStorage.getItem('token')
        fetch(`${APIURL}/artist/update-profile/${this.props.profile.id}`, {
            method: 'PUT',
            body: JSON.stringify({artist: {about_the_artist: this.state.about_the_artist, mediums: this.state.mediums, inspiration: this.state.inspiration, achievements: this.state.achievements, website: this.state.website}}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': token? token: '',
            })
        })
            .then(response => response.json())
            .then((updateData) => {
                console.log(updateData);
                this.setState({
                    about_the_artist: '',
                    mediums: '',
                    inspiration: '',
                    achievements: '',
                    website: '',
                })
            this.props.fetchArtistProfile()
            })
    }

    toggle = () => this.setState({modal: !this.state.modal});

    render() { 
        return (
            <div>
                <Button className='editbtn' onClick={this.toggle}>Edit Your Profile</Button>
                <Modal isOpen={!this.state.modal} toggle={this.toggle} >
                    <ModalHeader >Edit Your Profile</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.UpdateProfile}>
                            <FormGroup>
                                <Label htmlFor="about-the-artist">Edit About the Artist:</Label>
                                <Input name="about-the-artist" value={this.state.about_the_artist} onChange={(e) => this.setState({about_the_artist: e.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="mediums">Edit Mediums:</Label>
                                <Input name="mediums"  value={this.state.mediums} onChange={(e) => this.setState({mediums: e.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="inspiration">Edit Inspiration:</Label>
                                <Input name="inspiration"  value={this.state.inspiration} onChange={(e) => this.setState({inspiration: e.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="achievements">Edit Achievements:</Label>
                                <Input name="achievements"  value={this.state.achievements} onChange={(e) => this.setState({achievements: e.target.value})}/>
                            <FormGroup>
                                <Label htmlFor="website">Edit Website:</Label>
                                <Input name="inspiration"  value={this.state.website} onChange={(e) => this.setState({website: e.target.value})}/>
                            </FormGroup>
                        </FormGroup> 
            <Button className='editbtn' type='submit' onClick={this.toggle}>Submit Changes</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
 
export default ArtistProfileEdit;