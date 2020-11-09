import 'react-native-gesture-handler'
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignInScreen from './views/SignIn'
import ForgotPasswordScreen from './views/ForgotPassword'
import ComponentInactivity from "./ComponentInactivity";
import SwiperScreen from './views/Swiper'

const LandingRoute = createStackNavigator({
    SignIn: SignInScreen,
    ForgotPassword: ForgotPasswordScreen,
    // // SecurityQuestion: SecurityQuestionScreen,
    // // OtpConfirmation: OtpConfirmationScreen,
    // // PasswordResetSuccessful: PasswordResetSuccessfulScreen,
    // Overview: OverviewScreen,
    // // TransferReqOverview: TransferReqOverviewScreen,
    // // OverviewPending: OverviewPendingScreen,
    // Cheque: ChequeScreen,
  
    // Loan: LoanScreen,
    // ChequeRequest: ChequeRequestScreen,
    // Message: MessageScreen,
    Swiper: SwiperScreen
}, {
    initialRouteName: 'Swiper',
    headerMode: 'none'
});



const MainRoute = createSwitchNavigator({
    LandingRoute: LandingRoute,
    Drawer: ComponentInactivity,
}, {
    initialRouteName: 'LandingRoute'
});


export default createAppContainer(MainRoute);