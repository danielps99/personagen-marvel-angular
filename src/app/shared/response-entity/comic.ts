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
