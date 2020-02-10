import { ImageSourcePropType } from 'react-native';

export interface VideoModel {
  id: number;
  title: string;
  thumbnail: ImageSourcePropType;
  videoURL: ImageSourcePropType;
  author: string;
  viewCnt: number;
  timestamp: string;
}
