import React, {FC} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {ORANGE, WHITE} from '../../constants/colors';
interface Props {
  content: string;
  id: string;
  onRemoveCategory: (id: string) => void;
}

const CategoryItem: FC<Props> = props => {
  const {content, onRemoveCategory, id} = props;

  return (
    <View style={styles.categoryItem}>
      <Pressable onPress={onRemoveCategory.bind(null, id)}>
        <Text style={styles.categoryItemText}>{content}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: ORANGE,
    margin: 10,
  },
  categoryItemText: {
    color: WHITE,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default CategoryItem;
