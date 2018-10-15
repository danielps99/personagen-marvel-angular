import { Url } from './url';
import { Stories } from './storie';
import { Comics } from './comic';
import { Events } from './event';
import { Series } from './serie';
import { Thumbnail } from './thumbnail';
export class Personagem {
  constructor() {
    this.thumbnail = new Thumbnail();
    this.series = new Series();
    this.events = new Events();
    this.comics = new Comics();
    this.stories = new Stories();
  }
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

export class ResponseBodyPersonagem {
  public code: number;
  public status: string;
  public copyright: string;
  public attributionText: string;
  public attributionHTML: string;
  public etag: string;
  public data: Data;
}
