/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar, View, SafeAreaView, Platform } from 'react-native';
import { DARK_PRIMARY_COLOR, PRIMARY_COLOR } from './src/shared/Colors';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Page from './src/Routes';
import OneSignal from "react-native-onesignal";
import {NetworkProvider} from "./src/components/General/NetworkProvider";
import {applyMiddleware, createStore} from "redux";
import Thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import reducers from './src/store/reducers';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: PRIMARY_COLOR
    }
};

const store = createStore(reducers, {}, applyMiddleware(Thunk));

export default class App extends React.Component {

    constructor(properties) {
        super(properties);
        OneSignal.init("21ece760-341b-454b-9242-f4375ab58b1c");
        // OneSignal.addEventListener('received', this.onReceived);
    }

    statusBarIOS() {
        if (Platform.OS === 'ios') {
            return <View style={{ backgroundColor: PRIMARY_COLOR, height: 22 }} />
        }

        return null
    }

    render() {
        return (
            <Provider store={store}>
                <PaperProvider theme={theme}>
                    <View style={{ flex: 1 }}>
                        {this.statusBarIOS()}

                        <SafeAreaView style={{ flex: 1 }}>
                            <StatusBar backgroundColor={DARK_PRIMARY_COLOR} barStyle={'light-content'} />
                            <NetworkProvider>
                                <Page />
                            </NetworkProvider>
                        </SafeAreaView>
                    </View>
                </PaperProvider>
            </Provider>
        );
    }
}

console.disableYellowBox = true;