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
