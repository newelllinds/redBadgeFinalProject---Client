export interface IArtistProfileResponse {
    id: number,
    about_the_artist: string,
    mediums: string,
    inspiration: string,
    achievements: string,
    website: string,
    userId: number
}

export interface IShopListingResponse {
    id: number,
    image: string,
    description: string,
    price: number,
    pickup_info: string
}

export interface IArtistShopResponse {
    id: number,
    image: string,
    description: string,
    price: number,
    pickup_info: string,
    userId: number
}