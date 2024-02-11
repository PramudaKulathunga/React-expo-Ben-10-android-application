import { View, Text, StyleSheet, Platform, Image, Pressable, Alert } from "react-native";

const getDetails = (name) => {
    switch (name.toLowerCase()) {
        case "heatblast":
            return { borderColor: 'rgb(255,255,87)' };
        case "diamondhead":
            return { borderColor: 'rgb(188,247,207)' };
        case "four arms":
            return { borderColor: 'rgb(197,7,39)' };
        case "ghostfreak":
            return { borderColor: 'rgb(178,168,169)' };
        case "grey matter":
            return { borderColor: 'rgb(123,140,148)' };
        case "ripjaws":
            return { borderColor: 'rgb(6,6,6)' };
        case "stinkfly":
            return { borderColor: 'rgb(99,110,15)' };
        case "upgrade":
            return { borderColor: 'rgb(140,218,44)' };
        case "wildmutt":
            return { borderColor: 'rgb(252,147,36)' };
        case "xlr8":
            return { borderColor: 'rgb(79,168,182)' };
    }
};

export default function Ben10card({
    navigation,
    name,
    image,
    species,
    home,
    body,
    ability
}) {
    const { borderColor } = getDetails(name);
    return (
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
            </View>

            <Image source={image} s
                style={styles.image}
                accessibilityLabel={`${name} ben10`}
                resizeMode="contain"
            />

            <View style={styles.speciesContainer}>
                <View style={[styles.box, { borderColor }]}>
                    <Text style={styles.speciesText1}>Species</Text>
                    <Text style={styles.speciesText2}>{species}</Text>
                </View>
            </View>

            <View style={styles.homeContainer}>
                <Text style={styles.homeText}>Home world: {home}</Text>
            </View>

            <View style={styles.homeContainer}>
                <Text style={styles.homeText}>Body: {body}</Text>
            </View>

            <View style={styles.homeContainer}>
                <Text style={styles.homeText}>Abilities: {ability.join(", ")}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgb(230,230,230)',
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        height:630,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: "#333",
                shadowOpacity: "0.3",
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            },
        }),
    },

    nameContainer: {
        alignItems: "center",
        marginBottom: 32,
    },
    name: {
        fontSize: 35,
        fontWeight: "bold",
    },
    image: {
        width: "100%",
        height: 250,
        marginBottom: 16
    },
    speciesContainer: {
        alignItems: "center",
        marginBottom: 30,
    },
    box: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 4,
    },
    speciesText1: {
        paddingHorizontal: 8,
        fontSize: 15,
    },
    speciesText2: {
        fontSize: 22,
        fontWeight: "bold",
    },
    homeContainer: {
        marginBottom: 8,
    },
    homeText: {
        fontSize: 20,
        fontWeight: "bold"
    }
});