import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AboutPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.topicText}>Developer:</Text>
      <Text style={styles.subTopicText}>Kulathunga K.M.P.S.</Text>
      <Text style={styles.subTopicText}>Bsc.Engineering, (UG)</Text>
      <Text style={styles.subTopicText}>Faculty of Engineering,</Text>
      <Text style={styles.subTopicText}>University of Jaffna.</Text>

      <Text style={[styles.topicText, styles.para]}>
        <Text style={styles.topicText}>IMPORTANT!</Text>
        {"\n"}This app is for only practising purpose only. In this app, sometimes there are copyrightable pictures or details.
      </Text>

      <Text style={[styles.subTopicText, styles.para, { fontSize: 22, textAlign: 'center' }]}>
        {"\n"}Copyright <MaterialIcons name="copyright" size={24} color="black" />
      </Text>
      <Text style={[styles.subTopicText, styles.para, { fontSize: 20, marginTop: 10, textAlign: 'center' }]}>
        Version 0.0.1
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(2,122,0)'
  },
  topicText: {
    marginTop: 20,
    marginLeft: '5%',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  subTopicText: {
    fontSize: 16,
    color: 'black',
    marginLeft: '8%'
  },
  para: { 
    marginRight: '5%',
    fontWeight: 'normal'
  }
});

export default AboutPage