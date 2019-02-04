import { ItunesEntityMovie, ItunesEntityPodcast, ItunesEntityMusic, ItunesEntityMusicVideo, ItunesEntityAudioBook, ItunesEntityShortFilm, ItunesEntityTvShow, ItunesEntitySoftware, ItunesEntityEbook, ItunesEntityAll } from "../media/entity";
export declare enum ItunesLookupType {
    Id = "id",
    AmgArtistId = "amgArtistId",
    AmgAlbumId = "amgAlbumId",
    AmgVideoId = "amgVideoId",
    Upc = "upc",
    Isbn = "isbn"
}
export declare function toLookupUri(options: ILookupOptions): string;
export interface ILookupOptions {
    keys: Array<string>;
    keyType: ItunesLookupType;
    entity?: ItunesEntityMovie | ItunesEntityPodcast | ItunesEntityMusic | ItunesEntityMusicVideo | ItunesEntityAudioBook | ItunesEntityShortFilm | ItunesEntityTvShow | ItunesEntitySoftware | ItunesEntityEbook | ItunesEntityAll;
    limit?: number;
    extras?: {};
    toURI?: () => string;
}
export declare class ItunesLookupOptions implements ILookupOptions {
    keys: Array<string>;
    keyType: ItunesLookupType;
    entity?: ItunesEntityMovie | ItunesEntityPodcast | ItunesEntityMusic | ItunesEntityMusicVideo | ItunesEntityAudioBook | ItunesEntityShortFilm | ItunesEntityTvShow | ItunesEntitySoftware | ItunesEntityEbook | ItunesEntityAll;
    limit?: number;
    extras?: {};
    constructor(options: {
        keys: Array<string>;
        keyType: ItunesLookupType;
        entity?: ItunesEntityMovie | ItunesEntityPodcast | ItunesEntityMusic | ItunesEntityMusicVideo | ItunesEntityAudioBook | ItunesEntityShortFilm | ItunesEntityTvShow | ItunesEntitySoftware | ItunesEntityEbook | ItunesEntityAll;
        limit?: number;
        extras?: {};
    });
    toURI: () => string;
    static from: (options: ILookupOptions) => ItunesLookupOptions;
}
