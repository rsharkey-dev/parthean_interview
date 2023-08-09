import { StyleSheet } from "react-native";

const CardItemStyles = StyleSheet.create({
    cardItem: {
        marginBottom: 15,
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#1b1e21',
    },
    itemContainer: {
        flexDirection: 'row',
        marginLeft: 15,
    },
    itemSubContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    itemImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    itemText: {
        flex: 1,
    },
    itemTextContainer: {
        flex: 1,
        marginRight: 10
    },
    itemImage: {
        width: 40,
        height: 40,
        borderRadius: 5,
    },
    headline: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    details: {
        fontSize: 14,
        marginTop: 5,
        color: 'white',
    },
});

export default CardItemStyles;
