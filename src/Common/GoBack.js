import { TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import {useNavigation} from '@react-navigation/native';

const GoBack = ({style}) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation.goBack()}
     style={{marginTop:responsiveHeight(2),marginLeft:responsiveWidth(3)}}>
      <Ionicons name="arrow-back-outline" color="#535353" size={34} />
    </TouchableOpacity>
  )
}

export default GoBack