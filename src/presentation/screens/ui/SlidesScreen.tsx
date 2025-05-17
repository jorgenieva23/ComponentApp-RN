import {
  View,
  Text,
  ImageSourcePropType,
  useWindowDimensions,
  Image,
  NativeSyntheticEvent,
  NativeScrollEvent,
  LayoutAnimation,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { colors, globalStyles } from '../../../config/theme/theme';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from '../../components/ui/Button';
import { useNavigation } from '@react-navigation/native';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/slide-3.png'),
  },
];

export const SlidesScreen = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const FlatListRef = useRef<FlatList>(null);
  const navigate = useNavigation();

  function onScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);
  }

  const scrollToSlice = (index: number) => {
    if (!FlatListRef.current) return;
    FlatListRef.current.scrollToIndex({ index: index, animated: true });
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <FlatList
        ref={FlatListRef}
        data={items}
        keyExtractor={item => item.title}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        onScroll={onScroll}
      />
      {currentSlideIndex === items.length - 1 ? (
        <Button
          text="Finalizar"
          onPress={() => navigate.goBack()}
          styles={{ position: 'absolute', bottom: 60, right: 30, width: 100 }}
        />
      ) : (
        <Button
          text="siguiente"
          onPress={() => scrollToSlice(currentSlideIndex + 1)}
          styles={{ position: 'absolute', bottom: 60, right: 30, width: 100 }}
        />
      )}
    </View>
  );
};

interface SlideProps {
  item: Slide;
}

const SlideItem = ({ item }: SlideProps) => {
  const { width } = useWindowDimensions();
  const { title, desc, img } = item;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 40,
        justifyContent: 'center',
        width: width,
      }}>
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: 'center',
          alignContent: 'center',
        }}
      />
      <Text style={[globalStyles.title, { color: colors.primary }]}>
        {title}
      </Text>
      <Text style={{ color: colors.text, marginTop: 20 }}>{desc}</Text>
    </View>
  );
};
