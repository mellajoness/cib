import 'react-native-gesture-handler'
import {createAppContainer} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import DrawerComponent from "./Drawer";
import TransferScreen from "./views/transfers/Transfer";   
import TransferRequestScreen from "./views/transfers/TransferRequest";
import ProfileScreen from './views/Profile'
import MessageScreen from './views/Message'
import LoanScreen from './views/Loan'
import ChequeScreen from './views/Cheque'
import MessageComponent from './views/messagecomponent'

const TransferRoute = createStackNavigator({
    Transfer: TransferScreen,
    TransferReq: TransferRequestScreen,
}, {
    initialRouteName: 'Transfer',
    headerMode: 'none'
});

const DrawerRoute = createDrawerNavigator({
    Transfer: TransferRoute,
    Profile: ProfileScreen,
     Message: MessageScreen,
    //  MessageComponent:MessageComponent,
    Loan: LoanScreen,
    Cheque: ChequeScreen,
}, {
    initialRouteName: 'Transfer',
    contentComponent: DrawerComponent,
    navigationOptions: {
        gestureDirection: 'inverted'
    }
});

export default createAppContainer(DrawerRoute);
