import {  Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = (title,className,textClassName, onPress ) => {
  return (
    <TouchableOpacity className={className} onPress={onPress}>
      <Text className={textClassName}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button