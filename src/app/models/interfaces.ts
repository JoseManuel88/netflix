
export interface ISection{
section: string,
    films:IFilms[]
}


export interface IFilms{

    title:string,
    image: IImage
}

export interface IImage{

    src: string,
    alt:string
}