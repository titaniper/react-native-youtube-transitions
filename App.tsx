import * as React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import {HomeScreen} from "./src/app/screens/HomeScreen";

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <HomeScreen/>
            </View>
        </SafeAreaView>
    );
};

export default App;
