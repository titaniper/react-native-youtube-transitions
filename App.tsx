import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>{'Hello, world'}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
