import * as React from "react";
import {FlatList, ScrollView, View} from "react-native";
import {VideoItem} from "../ViewItem/VideoItem";
import {VideoModel} from "../../models";

interface Props {
    videos: VideoModel[],
    onClick: (item: VideoModel) => void;
}

export const VideoList = ({ videos, onClick }: Props) => {
    const handelVideoClick = (item: VideoModel) => () => {
        onClick(item);
    };

    return <View style={{flex:1}}>
        <FlatList data={videos} renderItem={({ item }) => <VideoItem video={item} onClick={handelVideoClick(item)} />} />
    </View>;
};