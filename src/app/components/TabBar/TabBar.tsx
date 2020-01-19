import * as React from "react";
import { View, Text} from "react-native";

interface Props {
    height: number;
}

export const TabBar = ({ height }: Props) => {
    return <View
        style={{
            flexDirection: 'row',
            height: height,
            justifyContent: 'space-around',
            alignItems: 'center',
        }}
    >
        <Text style={{ textAlign: 'center', alignContent: 'center' }}>{'홈'}</Text>
        <Text style={{ textAlign: 'center' }}>{'인기'}</Text>
        <Text style={{ textAlign: 'center' }}>{'구독'}</Text>
        <Text style={{ textAlign: 'center' }}>{'수신함'}</Text>
        <Text style={{ textAlign: 'center' }}>{'보관함'}</Text>
    </View>;
};