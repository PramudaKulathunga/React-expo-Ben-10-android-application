import {
    StyleSheet,
    SafeAreaView,
    Platform,
    ScrollView,
    StatusBar,
    Text,
    Pressable,
    View
} from 'react-native';

import Ben10card from '../Components/Ben10card';
import Globles from './Globles';

const names = ["Heatblast", "Wildmutt", "Diamondhead", "XLR8", "Gray Matter", "Four Arms", "Stinkfly", "Ripjaws", "Upgrade", "Ghostfreal"];

const HomeScreen = ({ navigation }) => {

    const HeatBlastData = {
        name: "Heatblast",
        image: require("../assets/Heatblast.jpg"),
        species: "Pyronite",
        home: "Pyros",
        body: "Fiery Humanoid",
        ability: ["Fire absorption", "Fire constructs", "Fire transportation"],
    };

    const WildmuttData = {
        name: "Wildmutt",
        image: require("../assets/Wildmutt.jpg"),
        species: "Vulpimancer",
        home: "Vulpin",
        body: "Animalistic",
        ability: ["Sightless sensing", "Enhanced smelling", "Enhanced hearing"],
    };

    const DiamondheadData = {
        name: "Diamondhead",
        image: require("../assets/Diamondhead.jpg"),
        species: "Petrosapien",
        home: "Petropia",
        body: "Crystalline Humanoid",
        ability: ["Crystallokinesis", "Crystal entrapment", "Body alteration"],
    };

    const XLR8Data = {
        name: "XLR8",
        image: require("../assets/XLR8.jpg"),
        species: "Kineceleran",
        home: "Kinet",
        body: "Humanoid Velociraptor",
        ability: ["Tribokinesis", "Enhanced speed", "Enhanced agility"],
    };

    const GreyMatterData = {
        name: "Grey Matter",
        image: require("../assets/GreyMatter.jpg"),
        species: "Galvan",
        home: "Galvan Prime",
        body: "Humanoid Frog",
        ability: ["Enhanced intelligence", "Technological expertise", "Small space maneuvering"],
    };

    const FourArmsData = {
        name: "Four Arms",
        image: require("../assets/FourArms.jpg"),
        species: "Tetramand",
        home: "Khoros",
        body: "Four-Armed Humanoid",
        ability: ["Enhanced strength", "Shock wave generation", "Sonic clap"],
    };

    const StinkflyData = {
        name: "Stinkfly",
        image: require("../assets/Stinkfly.jpg"),
        species: "Lepidopterran",
        home: "Lepidopterra",
        body: "Winged Insectoid",
        ability: ["Slime projectiles", "Fire suppression", "Fire amplification"],
    };

    const RipjawsData = {
        name: "Ripjaws",
        image: require("../assets/Ripjaws.jpg"),
        species: "Piscciss Volann",
        home: "Piscciss",
        body: "Humanoid Anglerfish",
        ability: ["Strong bit force", "Sharp teeth", "Mouth expansion"],
    };

    const UpgradeData = {
        name: "Upgrade",
        image: require("../assets/Upgrade.jpg"),
        species: "Galvanic Mechamorph",
        home: "Galvan B",
        body: "Technological Humanoid",
        ability: ["Technological possession", "Technokinesis", "Body alteration"],
    };

    const GhostfreakData = {
        name: "Ghostfreak",
        image: require("../assets/Ghostfreak.jpg"),
        species: "Ectonurite",
        home: "Anur Phaetos",
        body: "Ghost",
        ability: ["Intangibility", "Chill inducement", "Incapacitation"],
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle={"defalt"}
            />
            <ScrollView>
                <Ben10card {...HeatBlastData} />
                <View style={styles.homeContainer}>
                    <Pressable onPress={() => { navigation.navigate('Dash'), Globles.tempname = 0 }}>
                        <Text style={[styles.homeText, { color: 'blue', fontSize: 18 }]}>See more..</Text>
                    </Pressable>
                </View>
                <Ben10card {...WildmuttData} />
                <View style={styles.homeContainer}>
                    <Pressable onPress={() => { navigation.navigate('Dash'), Globles.tempname = 1 }}>
                        <Text style={[styles.homeText, { color: 'blue', fontSize: 18 }]}>See more..</Text>
                    </Pressable>
                </View>
                <Ben10card {...DiamondheadData} />
                <View style={styles.homeContainer}>
                    <Pressable onPress={() => { navigation.navigate('Dash'), Globles.tempname = 2 }}>
                        <Text style={[styles.homeText, { color: 'blue', fontSize: 18 }]}>See more..</Text>
                    </Pressable>
                </View>
                <Ben10card {...XLR8Data} />
                <View style={styles.homeContainer}>
                    <Pressable onPress={() => { navigation.navigate('Dash'), Globles.tempname = 3 }}>
                        <Text style={[styles.homeText, { color: 'blue', fontSize: 18 }]}>See more..</Text>
                    </Pressable>
                </View>
                <Ben10card {...GreyMatterData} />
                <View style={[styles.homeContainer,{marginBottom:27}]}>
                    <Pressable onPress={() => { navigation.navigate('Dash'), Globles.tempname = 4 }}>
                        <Text style={[styles.homeText, { color: 'blue', fontSize: 18,marginTop:18 }]}>See more..</Text>
                    </Pressable>
                </View>
                <Ben10card {...FourArmsData} />
                <View style={styles.homeContainer}>
                    <Pressable onPress={() => { navigation.navigate('Dash'), Globles.tempname = 5 }}>
                        <Text style={[styles.homeText, { color: 'blue', fontSize: 18 }]}>See more..</Text>
                    </Pressable>
                </View>
                <Ben10card {...StinkflyData} />
                <View style={styles.homeContainer}>
                    <Pressable onPress={() => { navigation.navigate('Dash'), Globles.tempname = 6 }}>
                        <Text style={[styles.homeText, { color: 'blue', fontSize: 18 }]}>See more..</Text>
                    </Pressable>
                </View>
                <Ben10card {...RipjawsData} />
                <View style={styles.homeContainer}>
                    <Pressable onPress={() => { navigation.navigate('Dash'), Globles.tempname = 7 }}>
                        <Text style={[styles.homeText, { color: 'blue', fontSize: 18 }]}>See more..</Text>
                    </Pressable>
                </View>
                <Ben10card {...UpgradeData} />
                <View style={styles.homeContainer}>
                    <Pressable onPress={() => { navigation.navigate('Dash'), Globles.tempname = 8 }}>
                        <Text style={[styles.homeText, { color: 'blue', fontSize: 18 }]}>See more..</Text>
                    </Pressable>
                </View>
                <Ben10card {...GhostfreakData} />
                <View style={styles.homeContainer}>
                    <Pressable onPress={() => { navigation.navigate('Dash'), Globles.tempname = 9 }}>
                        <Text style={[styles.homeText, { color: 'blue', fontSize: 18 }]}>See more..</Text>
                    </Pressable>
                </View>
                <View style={{ height: 60 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(2,122,0)',
        paddingTop: Platform.OS === "android" ? 25 : 0,
    },
    homeContainer: {
        marginLeft: 40,
        marginTop: -70,
        marginBottom: 45
    },
    homeText: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default HomeScreen