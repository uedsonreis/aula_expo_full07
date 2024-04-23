export interface Planet {

    id: number;
    name: string;
    description: string;
    basicDetails: {
        volume: string;
        mass: string;
    };
    imgSrc: {
        img: string;
    };

}