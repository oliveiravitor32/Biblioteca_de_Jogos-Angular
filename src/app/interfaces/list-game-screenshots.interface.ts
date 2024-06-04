export interface IListGameScreenshots {
  count: number;
  next: string;
  previous: string;
  results: [
    {
      image: string;
      hidden: boolean;
    }
  ];
}
