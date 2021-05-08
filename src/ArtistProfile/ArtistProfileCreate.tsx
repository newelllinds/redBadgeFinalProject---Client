import React from 'react';
import APIURL from '../helpers/environment'

export interface ArtistProfileCreateProps {
    token: string;
    fetchArtistProfile: Function
    
}
 
export interface ArtistProfileCreateState {
    about_the_artist: string,
    mediums: string,
    inspiration: string,
    achievements: string,
    website: string
}
 
class ArtistProfileCreate extends React.Component<ArtistProfileCreateProps, ArtistProfileCreateState> {
    constructor(props: ArtistProfileCreateProps) {
        super(props);
        this.state = {
            about_the_artist: '',
            mediums: '',
            inspiration: '',
            achievements: '',
            website: ''
        };
    }

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(this.props.token)
        let token = this.props.token ? this.props.token : localStorage.getItem('token')
        fetch(`${APIURL}/artist/create-profile`, {
            method: 'POST',
            body: JSON.stringify({artist: {about_the_artist: this.state.about_the_artist, mediums: this.state.mediums, inspiration: this.state.inspiration, achievements: this.state.achievements, website: this.state.website}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: token? token: '',
            })
        })
        .then(response => response.json())
        .then((createData) => {
            console.log(createData);
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

    render() { 
        return (
            <div className='profile-create-wrapper'>
                <div className='profile-create-form-wrapper'>
                    <h2>Create Your Artist Profile</h2>
                    <form onSubmit={this.handleSubmit} >
                        <div className='about_the_artist'>
                            <label htmlFor='about_the_artist'>About The Artist</label>
                            <br></br>
                            <input type='text' name='about_the_artist' onChange={(e) => this.setState({about_the_artist: e.target.value})}/>
                        </div>
                        <div className='mediums'>
                            <label htmlFor='mediums'>Mediums</label>
                            <br></br>
                            <input type='text' name='mediums' onChange={(e) => this.setState({mediums: e.target.value})}/>
                        </div>
                        <div className='inspiration'>
                            <label htmlFor='inspiration'>Inspiration</label>
                            <br></br>
                            <input type='text' name='inspiration' onChange={(e) => this.setState({inspiration: e.target.value})}/>
                        </div>
                        <div className='achievements'>
                            <label htmlFor='achievements'>Achievements</label>
                            <br></br>
                            <input type='text' name='achievements' onChange={(e) => this.setState({achievements: e.target.value})}/>
                        </div>
                        <div className='website'>
                            <label htmlFor='website'>Website</label>
                            <br></br>
                            <input type='text' name='website' onChange={(e) => this.setState({website: e.target.value})}/>
                        </div>
                        <br></br>
                        <div className='submit'>
                            <button>Create My Profile</button>
                        </div>
                    </form>
                </div>
            </div>
          );
    }
}
 
export default ArtistProfileCreate;