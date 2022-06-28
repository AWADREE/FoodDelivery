import React, { useState } from 'react'
import { View, Text } from 'react-native'

import {Price, Title} from './SubInfo'
import {COLORS, SIZES, FONTS} from '../constants'

const DetailesDesc = ({data}) => {
  return (
    <>
        <View>
            <Title 
                title={data.name}
                subTitle={data.creator}
                titleSize={SIZES.extraLarge}
                subTitleSize={SIZES.font}
            />
        </View>
    </>
  )
}

export default DetailesDesc