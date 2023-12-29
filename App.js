import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import {
  StyleSheet,
  StatusBar,
  View,
  SafeAreaView,
} from "connect-history-api-fallback";
import { Searchbar } from "react-native-paper";

export default function App() {
  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.list}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      // <ExpoStatusBar style="auto" />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: "green",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
