import React from 'react';
import { Text } from 'react-native';
import {DARK_COLOR} from "../../shared/Colors";

export const BoldText = (props) => {
    const textStyle = {
        color: props.color || DARK_COLOR,
        fontFamily: 'Lato-Bold',
        fontSize: props.size || 16
    };

    return (
        <Text style={[textStyle, props.style]}>{props.label}</Text>
    );
};