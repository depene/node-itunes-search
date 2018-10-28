import { ItunesMedia } from "../media";

export class ItunesSearchOptions {
  // A query to search for.
  term: string;

  // TODO: Add ISO 3166 2 npm package to compare entry to valid countries.
  // A valid ISO 3166-1-alpha-2 country code.
  country?: string;

  // The type of media to search for, the default is 'all'
  media?: ItunesMedia;

  // Maximum number of results to return.
  limit?: number;

  // JS object with any extra search parameters not found in this class.
  extras?: {};

  constructor(options: {
    term: string;
    country?: string;
    media?: ItunesMedia;
    limit?: number;
    extras?: object;
  }) {
    this.term = options.term;
    this.country = options.country;
    this.media = options.media;
    this.limit = options.limit;
    this.extras = options.extras;
  }

  // Converts object to URI safe parameters
  toURI() {
    const searchTerm: string = "term=" + this.term;
    const searchCountry: string = this.country
      ? "&country=" + this.country
      : "";
    const searchMedia: string = this.media ? "&media=" + this.media : "";
    const searchLimit: string = this.limit ? "&limit=" + this.limit : "";

    // Converting passed extra parameters
    const searchExtras = this.extras
      ? (() => {
          let extraParams = "";

          for (let param in this.extras) {
            extraParams += "&" + param + "=" + (this.extras as any)[param];
          }

          return extraParams;
        })()
      : "";

    return (
      searchTerm + searchCountry + searchMedia + searchLimit + searchExtras
    );
  }
}