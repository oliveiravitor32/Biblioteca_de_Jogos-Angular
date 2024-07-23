import { IGameOverview } from './game-overview.interface';

export interface IDetailedGame extends IGameOverview {
  name_original: string;
  description: string;
  description_raw: string;
  metacritic_platforms: [
    {
      metascore: number;
      url: string;
    }
  ];
  genres: [
    {
      id: number;
      name: string;
      slug: string;
      games_count: number;
      image_background: string;
    }
  ];
  publishers: [
    | {
        games_count: number;
        id: number;
        image_background: string;
        name: string;
        slug: string;
      }
    | undefined
  ];
  developers: [
    | {
        id: number;
        name: string;
        slug: string;
        games_count: number;
        image_background: string;
      }
    | undefined
  ];
  stores: [
    {
      id: number;
      store: {
        domain: string;
        games_count: number;
        id: number;
        image_background: string;
        name: string;
        slug: string;
      };
      url: string;
    }
  ];
  background_image_additional: string;
  website: string;
  reactions: {};
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: string;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: string;
  youtube_count: string;
  reviews_text_count: string;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: [string];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
}
