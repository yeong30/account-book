import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ORANGE, WHITE} from '../../constants/colors';
import Button from '../UI/Button';
interface Props {
  onPress?: () => void;
}
const Header: FC<Props> = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>category</Text>
      <Button
        title="close"
        onPress={props.onPress!}
        color={WHITE}
        style={styles.btn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: ORANGE,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 30,
    color: WHITE,
  },
  btn: {
    borderWidth: 1,
    borderColor: WHITE,
    borderRadius: 10,
    position: 'absolute',
    right: 20,
    zIndex: 1,
  },
});

export default Header;
