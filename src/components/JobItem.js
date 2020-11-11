import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

import {jobItem} from '../styles'

const JobItem = (props) => {
    console.log(props.item)
    return (
        <TouchableOpacity onPress={props.onSelect}>
            <View style={[jobItem.container,{flex:1}]}>
            <Text style={[jobItem.textTitle,{flex:1}]}>
                {props.item.title}
            </Text>
            <Text style={jobItem.textLocation}>{props.item.location} / {props.item.company}</Text>
        </View>
        </TouchableOpacity>
    )
}

export {JobItem}