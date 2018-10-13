export class Thumbnail {
  public path: string;
  public extension: string;
  }

  export class ItemComic {
  public resourceURI: string;
  public name: string;
  }

  export class Comics {
  public available: number;
  public collectionURI: string;
  public items: ItemComic[];
  public returned: number;
  }

  export class ItemSerie {
  public resourceURI: string;
  public name: string;
  }

  export class Series {
  public available: number;
  public collectionURI: string;
  public items: ItemSerie[];
  public returned: number;
  }

  export class ItemStories {
  public resourceURI: string;
  public name: string;
  public type: string;
  }

  export class Stories {
  public available: number;
  public collectionURI: string;
  public items: ItemStories[];
  public returned: number;
  }

  export class ItemEvent {
  public resourceURI: string;
  public name: string;
  }

  export class Events {
  public available: number;
  public collectionURI: string;
  public items: ItemEvent[];
  public returned: number;
  }

  export class Url {
  public type: string;
  public url: string;
  }

  export class Personagem {
  public id: number;
  public name: string;
  public description: string;
  public modified: Date;
  public thumbnail: Thumbnail;
  public resourceURI: string;
  public comics: Comics;
  public series: Series;
  public stories: Stories;
  public events: Events;
  public urls: Url[];
  }

  export class Data {
  public offset: number;
  public limit: number;
  public total: number;
  public count: number;
  public results: Personagem[];
  }

  export class ResponseBody {
  public code: number;
  public status: string;
  public copyright: string;
  public attributionText: string;
  public attributionHTML: string;
  public etag: string;
  public data: Data;
  }
