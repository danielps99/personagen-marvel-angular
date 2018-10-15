import { Thumbnail } from './thumbnail';
import { Stories } from './storie';
import { Comics } from './comic';
import { Events } from './event';
import { Url } from './url';
export class ItemSerie {
  public id: number;
  public title: string;
  public description: string;
  public resourceURI: string;
  public urls: Url[];
  public startYear: number;
  public endYear: number;
  public rating: string;
  public type: string;
  public modified: any;
  public thumbnail: Thumbnail;
  // public creators: Creators;
  // public characters: Characters;
  public stories: Stories;
  public comics: Comics;
  public events: Events;
  // public next: Next;
  // public previous?: any;
}

export class Series {
  public available: number;
  public collectionURI: string;
  public items: ItemSerie[];
  public returned: number;
}

export class Data {
  public offset: number;
  public limit: number;
  public total: number;
  public count: number;
  public results: Series[];
}

export class ResponseBodySerie {
  public code: number;
  public status: string;
  public copyright: string;
  public attributionText: string;
  public attributionHTML: string;
  public etag: string;
  public data: Data;
}
