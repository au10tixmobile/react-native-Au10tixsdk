import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { prepareSdk } from 'react-native-au10tixsdk';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    const token = 'eyJraWQiOiJTUWhzTHV4SGdtdjd5cEk3TXRWbW9icGxPNEhSRVJVRzU4ZmMycjI1dFVvIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULmlkYlVlanRUUk00YWlPTV9IN3V0blBfUnFZY3ZYTWVRV01ZQ0M4aUhxUDAiLCJpc3MiOiJodHRwczovL2xvZ2luLmF1MTB0aXguY29tL29hdXRoMi9hdXMzbWx0czVzYmU5V0Q4VjM1NyIsImF1ZCI6ImF1MTB0aXgiLCJpYXQiOjE2NjE5MDMyOTgsImV4cCI6MTY2MTk4OTY5OCwiY2lkIjoiMG9hNG1kaTNwNHJzYWt5MlMzNTciLCJzY3AiOlsib2NzL3Njb3BlOm1vYmlsZXNkayIsInNkYyIsIm1lZGlhIiwicGZsIiwibW9iaWxlc2RrIl0sInN1YiI6IjBvYTRtZGkzcDRyc2FreTJTMzU3IiwiYXBpVXJsIjoiaHR0cHM6Ly9ldXMtYXBpLmF1MTB0aXhzZXJ2aWNlc3N0YWdpbmcuY29tIiwiYm9zVXJsIjoiaHR0cHM6Ly9ib3MtZXVzLXdlYi5hdTEwdGl4c2VydmljZXNzdGFnaW5nLmNvbSIsImNsaWVudE9yZ2FuaXphdGlvbk5hbWUiOiJBVTEwVElYIiwiY2xpZW50T3JnYW5pemF0aW9uSWQiOjMyNn0.qaLtfwwbVoNWvwyjCFT8Dc_QjJpT4rgFeIYVZkzsDR2q86pizte6MGwL9NPq10CYTMnTohEYc-r-Ymu-bd-PS6q06DynLhYUzVR3camKuzYAo4OQ64q18Xps-420WGsVUSAgXa0_CeZz3C6LhZzynK27XY3cnAq3D09gK4_Yv7c1boAyWo9dcP-2UFaJFOZoUwyUy722kim-GnAQ39Y1aonqw9AgEA_cyKZiszhBjJpCuwY8Dd83cSO8Z0HUfcT20WGtfNoPKZRi3vLx3U0G2suWeQKT4JRVL7xcG-bR89IFW_ht6ew5PZkLjGFo6ik8I2EohLkwKpBN8lR0Wir_ag'
    prepareSdk(token).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
