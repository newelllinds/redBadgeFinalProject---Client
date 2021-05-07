import * as React from 'react';
import { CardColumns } from 'reactstrap';
import DisplayAllArtistProfiles from './DisplayAllArtistProfiles'
import { IArtistProfileResponse } from '../ArtistProfile/Interfaces';

export interface ArtistProfileMapperProps {
    token: string,
    fetchAllArtistProfiles: Function,
    artistProfile: IArtistProfileResponse[]
}
 
export interface ArtistProfileMapperState {
    
}
 
class ArtistProfileMapper extends React.Component<ArtistProfileMapperProps, ArtistProfileMapperState> {
    constructor(props: ArtistProfileMapperProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <CardColumns>
                {this.props.artistProfile.length > 0 ? (
                    this.props.artistProfile.map(
                        (artistProfiles: IArtistProfileResponse, index: number) => (
                            <DisplayAllArtistProfiles fetchAllArtistProfiles={this.props.fetchAllArtistProfiles} token={this.props.token} profile={artistProfiles} key={index}/>
                        )
                    )
                ) : (
                    <></>
                )}
            </CardColumns>
          );
    }
}
 
export default ArtistProfileMapper;