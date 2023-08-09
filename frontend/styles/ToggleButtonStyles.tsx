import { StyleSheet } from 'react-native';

const ToggleButtonStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    toggle: {
        flexDirection: 'row',
        width: 220,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#1b1e21',
        position: 'relative',
    },
    option: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'blue',
    },
    optionText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },

    highlight: {
        position: 'absolute',
        top: 0,
        width: '50%',
        height: '100%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    highlightText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#141716',
    },
    activeHighlightText: {
        color: '#141716',
    },
    highlightMonthly: {
        left: 0,
        backgroundColor: '#14c74a',
    },
    highlightAnnually: {
        left: '50%',
        backgroundColor: '#14c74a',
    },
});

export default ToggleButtonStyles;