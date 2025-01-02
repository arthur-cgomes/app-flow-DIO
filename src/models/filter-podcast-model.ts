import { Podcast } from './podcast.interface';

export interface FilterPodCastModel {
  statusCode: number;
  body: Podcast[];
}