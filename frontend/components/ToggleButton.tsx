import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ToggleButtonStyles from '../styles/ToggleButtonStyles';

interface ToggleSwitchProps {
    onValueChange: (value: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onValueChange }) => {
    const [isAnnually, setIsAnnually] = useState(false);

    const handleToggleChange = () => {
        const newValue = !isAnnually;
        setIsAnnually(newValue);
        onValueChange(newValue);
    };

    return (
        <TouchableOpacity style={ToggleButtonStyles.container} onPress={handleToggleChange}>
            <View style={ToggleButtonStyles.toggle}>
                <View style={ToggleButtonStyles.option}>
                    <Text style={ToggleButtonStyles.optionText}>
                        Monthly
                    </Text>
                </View>

                <View style={ToggleButtonStyles.option}>
                    <Text style={[ToggleButtonStyles.optionText,]}>
                        Annually
                    </Text>
                </View>

                <View style={[ToggleButtonStyles.highlight, isAnnually ? ToggleButtonStyles.highlightAnnually : ToggleButtonStyles.highlightMonthly]}>
                    <Text style={[ToggleButtonStyles.highlightText, !isAnnually && ToggleButtonStyles.activeHighlightText]}>
                        {isAnnually ? 'Annually' : 'Monthly'}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};



export default ToggleSwitch;
