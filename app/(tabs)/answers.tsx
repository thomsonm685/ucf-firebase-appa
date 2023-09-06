import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function AnswersTab() {

    const cases = [
        {
            name: 'Heist on a train',
            case: 'Case Name', 
            date: '8/9/2023'
        }
    ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Answer Keys</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.subText}>Find the answers to your case below!</Text>
      <SafeAreaView style={styles.container}>
        <ScrollView>
        {cases.map(thisCase=>(
            <View style={styles.caseItem}>
                <Text>{thisCase.name}</Text>
            </View>
        ))}

        </ScrollView>
      </SafeAreaView>
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
  caseItem: {
    border: '1px solid #fff',
    borderRadius:'15px',
    padding: '10px',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px'
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
