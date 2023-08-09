import { StyleSheet } from "react-native";

const CarouselPageStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5,
    },
});

export default CarouselPageStyles;