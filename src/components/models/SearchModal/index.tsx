import React, { FunctionComponent, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import Modal from 'react-native-modal';
import { colors } from '../../../config/appStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { calcWidth } from '../../../config/metrics';


type AddModalProps = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>,
  onPress: Function
}

const AddModal: FunctionComponent<AddModalProps> = ({
  visible,
  setVisible,
  onPress
}) => {
  const [city, setCity] = useState('')
  return (
    <Modal
      testID={'modal'}
      isVisible={visible}
      statusBarTranslucent={true}
      style={{ alignItems: "center" }}
      backdropColor={colors.grey}
      backdropOpacity={0.6}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
      onBackdropPress={() => {
        setVisible(false)
      }}
    >
      <View
        style={styles.container}>
        <View style={styles.inputContainer} >
          <FontAwesome name='search' size={calcWidth(20)} color={colors.mainColor} />
          <TextInput
            value={city}
            onChangeText={(text) => { setCity(text) }}
            style={styles.inputStyle}
            placeholder={'Type city name'}
          />
        </View>
        <TouchableOpacity onPress={() => {
          if (onPress) {
            setCity('')
            onPress(city)
          }
        }} style={styles.addButton} >
          <Text style={styles.addText}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export { AddModal };