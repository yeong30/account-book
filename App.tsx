import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import CategoryItem from './src/components/Category/CategoryItem';
import CategoryInputModal from './src/components/Category/CategoryInputModal';
import Header from './src/components/UI/Header';

export interface Category {
  content: string;
  id: string;
}

const App = () => {
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const addCategoryHandler = (enteredCategory: Category) => {
    setCategories(current => [...current, enteredCategory]);
    closeAddModalHandler();
  };

  const removeCategoryHandler = (id: string) => {
    setCategories(current => current.filter(category => category.id !== id));
  };
  const openAddModalHandler = () => {
    setModalIsVisible(true);
  };
  const closeAddModalHandler = () => {
    setModalIsVisible(false);
  };
  return (
    <View style={styles.sectionContainer}>
      <Header onPress={openAddModalHandler} />
      <CategoryInputModal
        onAdd={addCategoryHandler}
        visible={modalIsVisible}
        onClose={closeAddModalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={categories}
          renderItem={({item}) => (
            <CategoryItem
              content={item.content}
              id={item.id}
              onRemoveCategory={removeCategoryHandler}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingTop: 50,
    flex: 1,
  },

  goalsContainer: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 24,
    borderBottomColor: '#cccccc',
    boarderWidth: 1,
  },
});

export default App;

{
  /* <ScrollView>
          {categories.map((categoriy, i) => (
            <View style={styles.categoryItem}>
              <Text style={styles.categoryItemText} key={`${categoriy}_${i}`}>
                {categoriy}
              </Text>
            </View>
          ))}
        </ScrollView> */
}
