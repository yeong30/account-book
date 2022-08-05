import React, {FC, useState} from 'react';
import {Modal, StyleSheet, TextInput, View} from 'react-native';
import {Category} from '../../../App';
import {ORANGE, WHITE} from '../../constants/colors';
import Button from '../UI/Button';
interface Props {
  onAdd: (category: Category) => void;
  onClose: () => void;
  visible: boolean;
}

const CategoryInputModal: FC<Props> = props => {
  const [enteredCategory, setEnteredCategory] = useState<string>('');
  const changeInputHandler = (text: string) => {
    setEnteredCategory(text);
  };

  const addCategoryHandler = () => {
    if (enteredCategory.trim() === '') return;
    props.onAdd({content: enteredCategory, id: Math.random().toString()});
    setEnteredCategory('');
  };

  return (
    <Modal visible={props.visible} animationType={'slide'}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.addInput}
          onChangeText={changeInputHandler}
          value={enteredCategory}
        />
        <View style={styles.btnContainer}>
          <Button
            title="add"
            onPress={addCategoryHandler}
            color={ORANGE}
            style={styles.btn}
          />
          <Button
            title="close"
            onPress={props.onClose}
            color={ORANGE}
            style={styles.btn}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    backgroundColor: ORANGE,
  },
  addInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginRight: 8,
    color: WHITE,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btn: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 8,
    backgroundColor: WHITE,
  },
});
export default CategoryInputModal;
