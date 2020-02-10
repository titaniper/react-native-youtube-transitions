import * as React from "react";
import {ImageSourcePropType, View, Image} from "react-native";

interface Props {
    logoPath: ImageSourcePropType;
    height: number;
}

export const TopBar = ({ logoPath, height }: Props) => {
    return <View>
        <Image
            resizeMethod="auto"
            source={logoPath}
            style={{ width: 120, height: height, margin:10 }}
        />
    </View>;
};