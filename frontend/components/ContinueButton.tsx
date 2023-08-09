import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import ContinueButtonStyles from '../styles/ContinueButtonStyles';

interface ContinueButtonProps {
    onPress: () => void;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity style={ContinueButtonStyles.button} onPress={onPress}>
            <Text style={ContinueButtonStyles.buttonText}>Continue</Text>
        </TouchableOpacity>
    );
};


export default ContinueButton;
