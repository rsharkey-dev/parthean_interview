import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CardTitle from './CardTitle';
import CardItemStyles from '../styles/CardItemStyles'


interface CardItemProps {
    items: Array<{ imageSource: string; headline: string; details: string }>;
    title: string;
    subtitle: string;
    subsubtitle?: string;
}

const CardItem: React.FC<CardItemProps> = ({ items, title, subtitle, subsubtitle }) => {


    return (
        <View style={CardItemStyles.cardItem}>
            <CardTitle title={title} subtitle={subtitle} subsubtitle={subsubtitle} />
            <View style={CardItemStyles.itemContainer}>
                <View style={CardItemStyles.itemText}>
                    {items.slice(0).map((item, index) => (
                        <View key={index} style={CardItemStyles.itemSubContainer}>
                            <View style={CardItemStyles.itemImageContainer}>
                                <Image source={{ uri: item.imageSource }} style={CardItemStyles.itemImage} />
                            </View>
                            <View style={CardItemStyles.itemTextContainer}>
                                <Text style={CardItemStyles.headline}>{item.headline}</Text>
                                <Text style={CardItemStyles.details}>{item.details}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}

export default CardItem;
