import * as React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import {VideoModel} from "../../models";

interface Props {
    video: VideoModel;
    onClick: () => void;
}

export const VideoItem = ({ video, onClick }: Props) => {
    const subTitle = `${video.author} · 조회수 ${video.viewCnt} · ${video.timestamp}`;

    return (
        <TouchableHighlight onPress={onClick}>
            <View>
                <Image source={video.thumbnail} style={{ width: '100%', height: 230 }} />
                <View style={{ flexDirection: 'row', padding: 12 }}>
                    <Image source={video.thumbnail} style={{ width: 35, height: 35 }} />
                    <View style={{ marginLeft: 10, marginBottom: 10 }}>
                        <Text style={{ fontWeight: '600', fontSize: 17 }}>{video.title}</Text>
                        <Text style={{ color: '#bbbbbb' }}>{subTitle}</Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
};
