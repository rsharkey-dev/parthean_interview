import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardTitleStyles from '../styles/CardTitleStyles';

interface CardTitleProps {
    title: string;
    subtitle: string;
    subsubtitle?: string
}

const CardTitle: React.FC<CardTitleProps> = ({ title, subtitle, subsubtitle }) => {
    return (
        <View style={CardTitleStyles.container}>
            <Text style={CardTitleStyles.title}>{title}</Text>
            <View style={CardTitleStyles.subtitleContainer}>
                <Text style={CardTitleStyles.subtitle}>{subtitle}</Text>
                {subsubtitle && <Text style={CardTitleStyles.subsubtitle}>{subsubtitle}</Text>}
            </View>
        </View>
    );
};



export default CardTitle;
