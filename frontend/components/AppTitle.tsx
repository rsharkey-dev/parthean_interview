import React from 'react';
import { View, Text, } from 'react-native';
import AppTitleStyles from '../styles/AppTitleStyle'

interface AppTitleProps {
    title: string;
    subtitle: string;
}

const AppTitle: React.FC<AppTitleProps> = ({ title, subtitle }) => {
    return (
        <View style={AppTitleStyles.container}>
            <Text style={AppTitleStyles.title}>{title}</Text>
            <Text style={AppTitleStyles.subtitle}>{subtitle}</Text>
        </View>
    );
};



export default AppTitle;
