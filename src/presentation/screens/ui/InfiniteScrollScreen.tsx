import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Image, View } from 'react-native';
import { Title } from '../../components/ui/Title';
import { CustomView } from '../../components/ui/CustomView';
import { colors } from '../../../config/theme/theme';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const loadMore = () => {
    const newArray = Array.from({ length: 9 }, (_, i) => numbers.length + i);
    setNumbers([...numbers, ...newArray]);
  };
  return (
    <View style={{ backgroundColor: 'black' }}>
      <Title text="infinite Scroll" safe />
      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        keyExtractor={item => item.toString()}
        renderItem={({ item }) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View style={{ height: 150, justifyContent: 'center' }}>
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

interface ListProps {
  number: number;
}

const ListItem = ({ number }: ListProps) => {
  return (
    <Image
      source={{ uri: `https://picsum.photos/id/${number}/237/200` }}
      style={{ height: 400, width: '100%' }}
    />
  );
};
