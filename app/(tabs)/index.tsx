import { Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function HomeTab() {

  const posts = [
    {
      title: 'A Title', 
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      title: 'A Title', 
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      title: 'A Title', 
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.`
    },
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Unsolved Case Files Announcements!</Text>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {posts.map(post=>(
            <View style={styles.post}>
              <Text style={styles.title}>{ post.title }</Text>
              <Image
                style={styles.postImage}
                source={'https://www.unsolvedcasefiles.com/uploads/1/2/2/8/122835582/published/final-logo1.png?1568915038'}
              />
              <Text>{ post.content }</Text>
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
    marginTop:'5%'
  },
  post: {
    width: '95%',
    maxWidth: 800,
    border: '1px solid #fff',
    borderRadius:'15px',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding:'5%',
    margin: '20px',
  },
  postImage: {
    margin: '50px',
    height: 300,
    width: 500,
    // objectFit: 'scale-down',
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 20,
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
