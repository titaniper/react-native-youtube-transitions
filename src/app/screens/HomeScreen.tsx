import * as React from "react";
import {View, StyleSheet} from "react-native";
import {TopBar} from "../components/TopBar";
import {VideoList} from "../components/VideoList";
import {TabBar} from "../components/TabBar";
import {useEffect, useState} from "react";
import {videoService} from "../service";
import {VideoModel} from "../models";

interface Props {
    video?: VideoModel
}

export const HomeScreen = ({video}: Props) => {
    const [videos, setVideo] = useState(null);

    useEffect(() => {
        const videos = videoService.videos();
        setVideo(videos);
    });

    return (
        <View style={StyleSheet.absoluteFill}>
            <TopBar logoPath={require('../../assets/logo.png')} height={50}/>
            <VideoList videos={videos} onClick={()=>{}}/>
            <TabBar height={40}/>
            {video && <View/>}
        </View>
    );
};
