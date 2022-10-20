import React, { FunctionComponent, ReactElement } from 'react';
import { View, Image, Text, Touchable, TouchableOpacity } from 'react-native';
import { ImageSource } from 'react-native/Libraries/Image/ImageSource';
import NavigationService from '../../../navigation/NavigationService';
import { styles } from './styles';

type HeaderProps = {
  back?: ImageSource,
  title?: String,
}

const Header: FunctionComponent<HeaderProps> = ({
  back,
  title,
}) => {
  return (
    <View style={styles.container}>
      {back ? <TouchableOpacity onPress={() => NavigationService.goBack()} >
        <Image source={back} style={styles.backIcon} />
      </TouchableOpacity> : <View style={styles.backIcon} />}
      {title ? <Text style={styles.titleText} >{title}</Text> : null}
    </View>
  )
}

export { Header };