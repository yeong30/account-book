import React, {FC} from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';

interface Props {
  title: string;
  onPress: (params?: any) => void;
  color: string;
  style: object;
}
const Button: FC<Props> = props => {
  const {onPress, title, color, style} = props;
  console.log(style);
  const mergedStyle = {...styles.container, ...style, borderColor: color};
  return (
    <Pressable
      style={({pressed}) => {
        if (pressed) {
          return {
            ...mergedStyle,
            ...styles.presed,
          };
        } else return mergedStyle;
      }}
      onPress={onPress}>
      <Text style={(styles.title, {color: color})}> {title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  presed: {
    opacity: 0.5,
  },
  title: {
    fontSize: 20,
  },
});
export default Button;
