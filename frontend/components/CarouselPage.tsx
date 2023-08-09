import React, { useState } from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import CardItem from './CardItem';
import Carousel from 'react-native-reanimated-carousel';
import CardItems from '../constants/CardItems';
import CarouselPageStyles from '../styles/CarouselPageStyles';



interface CarouselPage {
    data: number[];
    toggle: boolean;

}

const CarouselPage: React.FC<CarouselPage> = ({ data, toggle }) => {
    const width = Dimensions.get('window').width * 0.75;
    const height = Dimensions.get('window').height * 0.5;
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const cardItems = CardItems();


    const renderDot = (index: number) => {
        return (
            <View key={index} style={[CarouselPageStyles.dot, { backgroundColor: index === activeIndex ? '#007AFF' : '#C0C0C0' },]} />
        );
    };
    const renderCardItem = ({ index }: { index: number }) => {
        var subtitle = index === 0 ? '$9.99/mo' : '$79.99/mo';
        var subsubtitle = "";
        if (toggle === true) {
            subtitle = index === 0 ? '$5.83/mo' : '$66.67/mo';
            subsubtitle = index === 0 ? '($69.99 year)' : '($879.99 year)';
        }

        const title = index === 0 ? 'Parthean Pro' : 'Parthean Pro + Coaching';

        return <CardItem items={cardItems[index]} title={title} subtitle={subtitle} subsubtitle={subsubtitle} />;
    };


    return (
        <View style={CarouselPageStyles.container}>
            <Carousel
                loop={false}
                width={width}
                height={height}
                autoPlay={false}
                data={data}
                scrollAnimationDuration={250}
                onSnapToItem={(index) => setActiveIndex(index)}
                renderItem={renderCardItem}

            />
            <View style={CarouselPageStyles.dotsContainer}>{data.map(renderDot)}</View>
        </View>
    );
}



export default CarouselPage;
