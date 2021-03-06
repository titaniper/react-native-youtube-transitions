import {VideoModel} from "../models";
import moment, * as moments from 'moment';

const videoList: VideoModel[] = [
    {
        id: 1,
        title: '고품격 벤츠',
        videoURL: require('../../assets/videos/benz.mp4'),
        author: '벤츠코리아',
        thumbnail: require('../../assets/thumbnails/benz.jpg'),
        viewCnt: 2630000,
        timestamp: moment(new Date())
            .add(-1, 'days')
            .toISOString(),
    },
    {
        id: 2,
        title: '최고의 스포츠 세단 BMW m3',
        videoURL: require('../../assets/videos/bmwm3.mp4'),
        author: 'BMW 코리아',
        thumbnail: require('../../assets/thumbnails/bmwm3.jpg'),
        viewCnt: 1320000,
        timestamp: moment(new Date())
            .add(-2, 'days')
            .toISOString(),
    },
    {
        id: 3,
        title: '새로 출시한 GV80, SUV',
        videoURL: require('../../assets/videos/gv80.mp4'),
        author: '제네시스 코리아',
        thumbnail: require('../../assets/thumbnails/gv80.jpeg'),
        viewCnt: 1,
        timestamp: moment(new Date()).toISOString(),
    },
    {
        id: 4,
        title: '포르쉐 박스터 한번 타봅시다',
        videoURL: require('../../assets/videos/porsche.mp4'),
        author: '포르쉐 코리아',
        thumbnail: require('../../assets/thumbnails/porsche.jpg'),
        viewCnt: 14448784112,
        timestamp: moment(new Date())
            .add(-10, 'days')
            .toISOString(),
    },
];

export const videoService = {
    videos(): VideoModel[] {
        return videoList;
    }
};