export interface Location {

    id: string;
    /**
     * The name of location
     */
    name: string;

    coverPhotoUrl: string;
    /**
     * The number of likes the location has.
     */
    likes?: number;
    /**
     * The distance away in KM the location is.
     */
    distance?: string;
    /**
     * The description of the location
     */
    description?: string;

    relatedImages?: string[];

    rating?: number;

    liked?: boolean;



}
