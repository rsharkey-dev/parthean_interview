import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('window').width * 0.75;
const AppTitleStyles = StyleSheet.create({
    container: {
        width: width,
        marginTop: 45,
        alignItems: 'center',
        marginBottom: 0,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    subtitle: {
        fontSize: 15,
        color: 'lightgray',
        marginTop: 5,
    },
});

export default AppTitleStyles;