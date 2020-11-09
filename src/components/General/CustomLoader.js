import React from 'react';
import { View, Modal } from 'react-native';
import {LineDotsLoader} from 'react-native-indicator';
import {PRIMARY_COLOR} from "../../shared/Colors";

export const CustomLoader = (props) => {
    return (
        <Modal
            transparent
            visible={props.visible}
            animationType='fade'
            onRequestClose={() => null}
        >
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255,255,255,0.9)'
            }}>
                <LineDotsLoader size={15} color={PRIMARY_COLOR} />
            </View>
        </Modal>
    );
};
