import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function DetailsCity({ route, navigation }) {
  const { info } = useRoute.params;
  console.log(info)
  return (
    <View>
      <Text>DetailsCity</Text>
    </View>
  )
}