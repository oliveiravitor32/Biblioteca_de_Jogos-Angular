export interface IListGameGenres {
  count: number;
  next: string;
  previous: string;
  results: [
    {
      id: number;
      name: string;
      slug: string;
      games_count: number;
      image_background: string;
    }
  ];
}
