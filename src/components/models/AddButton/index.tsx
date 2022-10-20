import React, { FunctionComponent, ReactElement } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { ImageSource } from 'react-native/Libraries/Image/ImageSource';
import NavigationService from '../../../navigation/NavigationService';
import { styles } from './styles';
import { icons } from '../../../icons/pngs'
import Entypo from 'react-native-vector-icons/Entypo'
import { calcWidth } from '../../../config/metrics';
import { colors } from '../../../config/appStyles';
type AddButtonProps = {
  onPress?: Function,
}

const AddButton: FunctionComponent<AddButtonProps> = ({
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => { if (onPress) onPress() }}
      style={styles.container}>
      <Entypo name={'plus'} color={colors.white} size={calcWidth(28)} />
      <Text style={styles.buttonText} >{'Add city'}</Text>
    </TouchableOpacity>
  )
}

export { AddButton };