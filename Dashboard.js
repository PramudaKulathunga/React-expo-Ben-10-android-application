import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
import { Video } from 'expo-av';
import React from 'react';
import Globles from './Globles';

const Dashboard = ({ navigation }) => {

  const video = React.useRef(null);
  const name = ["Heatblast", "Wildmutt", "Diamondhead", "XLR8", "Gray Matter", "Four Arms", "Stinkfly", "Ripjaws", "Upgrade", "Ghostfreak"];

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name[Globles.tempname],
    });
  }, [navigation])

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'rgb(2,122,0)' }}>
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          //source={{ uri: name }}
          source={Globles.tempname == 0 ? require('../assets/HeatblastMp4.mp4') :
            (Globles.tempname == 0 ? require('../assets/WildmuttMp4.mp4') :
              (Globles.tempname == 0 ? require('../assets/DiamondheadMp4.mp4') :
                (Globles.tempname == 0 ? require('../assets/XLR8Mp4.mp4') :
                  (Globles.tempname == 0 ? require('../assets/GrayMatterMp4.mp4') :
                    Globles.tempname == 0 ? require('../assets/FourArmsMp4.mp4') :
                      (Globles.tempname == 0 ? require('../assets/StinkflyMp4.mp4') :
                        (Globles.tempname == 0 ? require('../assets/RipjawsMp4.mp4') :
                          (Globles.tempname == 0 ? require('../assets/UpgradeMp4.mp4') :
                            require('../assets/GhostfreakMp4.mp4'))))))))}
          useNativeControls
          resizeMode="contain"
          isLooping={false}
          shouldPlay={true}
        />

      </View >

      <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
        <View style={{ width: 10 }} />
        <Pressable style={styles.buttons} onPress={() => video.current.playFromPositionAsync(0)} >
          <Text style={styles.btnText}>
            Play again
          </Text>
        </Pressable>
        <View style={{ width: 10 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  video: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'rgb(230,230,230)'
  },
  buttons: {
    margin: 16,
    height: 40,
    width: 150,
    backgroundColor: 'rgb(230,235,8)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 16,
  }

});

export default Dashboard