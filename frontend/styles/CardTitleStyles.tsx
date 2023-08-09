import { StyleSheet } from 'react-native';


const CardTitleStyles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginBottom: 25,
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'flex-start',
        color: '#14c74a'
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    subtitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    subsubtitle: {
        fontSize: 12,
        color: 'gray',
        marginLeft: 5,
    },

});

export default CardTitleStyles;