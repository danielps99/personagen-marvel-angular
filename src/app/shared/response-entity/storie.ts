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
