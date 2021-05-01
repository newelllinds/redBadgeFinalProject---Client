export interface IArtistProfileResponse {
    id: number,
    about_the_artist: string,
    mediums: string,
    inspiration: string,
    achievements: string,
    website: string
}

export interface IShopListingResponse {
    id: number,
    image: string,
    description: string,
    price: number,
    pickup_info: string
}