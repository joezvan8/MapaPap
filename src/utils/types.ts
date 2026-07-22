// Used for nominatim url to avoid typing errors when getting specific fields
export interface Place {
    place_id: number,
    license: string,
    osm_type: string,
    osm_id: number,
    lat: string,
    lon: string,
    category: string,
    type: string,
    place_rank: number,
    importance: number,
    addresstype: string,
    name: string,
    display_name: string,
    boundingbox: string[]
}

