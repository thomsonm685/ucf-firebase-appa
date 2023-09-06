import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function WhichCaseTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Which Case</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.subText}>Submit the quiz below to find your next, or first, case!</Text>
      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '5%'
  },
  subText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
