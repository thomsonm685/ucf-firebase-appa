import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TimerTab() {

  const times = [
    {
      duration: '01:28:25',
      case: 'Case Name', 
      date: '8/9/2023'
    },
    {
      duration: '01:28:25',
      case: 'Case Name', 
      date: '8/9/2023'
    },
    {
      duration: '01:28:25',
      case: 'Case Name', 
      date: '8/9/2023'
    }
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Case Timer</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
      <Text style={styles.subTitle}>Previous Times:</Text>
      {times.map(time=>(
        <View style={styles.times}>
          <Text>Completion Time: {time.duration}</Text>
          <Text>Case: {time.case}</Text>
          <Text>Date: {time.date}</Text>
        </View>
      ))}
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  times: {
    padding: '10px', 
    border: '1px solid #fff',
    margin: '10px'
  },
  subTitle: {
    fontSize: 17,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
