import {AsyncStorage} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

export const SAVE_SESSION_ID = (data) => {
    AsyncStorage.setItem('session_id', data);
};

export const GET_SESSION_ID = async () => {
    const value = await AsyncStorage.getItem('session_id');
    return value || '';
};

export const CLEAR_ASYNC_STORAGE = () => {
    // AsyncStorage.clear();
};


export const SAVE_FULL_NAME = (data) => {
    AsyncStorage.setItem('full_name', data);
};

export const GET_FULL_NAME = async () => {
    const value = await AsyncStorage.getItem('full_name');
    return value || '';
};

export const SAVE_FIRST_NAME = (data) => {
    AsyncStorage.setItem('first_name', data);
};

export const GET_FIRST_NAME = async () => {
    const value = await AsyncStorage.getItem('first_name');
    return value || '';
};

export const SAVE_LAST_NAME = (data) => {
    AsyncStorage.setItem('last_name', data);
};

export const GET_LAST_NAME = async () => {
    const value = await AsyncStorage.getItem('last_name');
    return value || '';
};

export const SAVE_PENDING_TRANSFER = (value) => {
    AsyncStorage.setItem('save_pending_transfer', JSON.stringify(value));
};

export const GET_PENDING_TRANSFER = async () => {
    const value = await AsyncStorage.getItem('save_pending_transfer');
    return value ? JSON.parse(value) : {};
};



export const SAVE_AWAITING_TRANSFER = (value) => {
    AsyncStorage.setItem('save_awaiting_transfer', JSON.stringify(value));
};

export const GET_AWAITING_TRANSFER = async () => {
    const value = await AsyncStorage.getItem('save_awaiting_transfer');
    return value ? JSON.parse(value) : {};
};
  


export const SAVE_MESSAGES = (value) => {
    AsyncStorage.setItem('save_messages', JSON.stringify(value));
};

export const GET_MESSAGES = async () => {
    const value = await AsyncStorage.getItem('save_messages');
    return value ? JSON.parse(value) : {};
};

// export async function setEmailAddress(userName){
//     try {
//         await AsyncStorage.setItem('userName', userName);
//     } catch (error) {
//         // Error saving data
//     }
// };
//
// export async function getUserName() {
//     try {
//         const value = await AsyncStorage.getItem('userName');
//         if (value !== null) {
//             return value
//             // We have data!!
//             console.log(value);
//         }
//     } catch (error) {
//         // Error retrieving data
//     }
// };
//
//
//
//
// export async function  setCompanyId(customerID) {
//     try {
//         await AsyncStorage.setItem('customerID', customerID);
//     } catch (error) {
//
//     }
// };
//
// export async function  getCustomerID() {
//     try {
//         const value = await AsyncStorage.getItem('customerID');
//
//         if (value !== null) {
//             return value
//             console.log(value);
//
//         }
//     } catch (error) {
//
//     }
// };
//
//
//
//
//
//
//
// export async function saveSessionId(sessionId) {
//     try {
//         await AsyncStorage.setItem('sessionId', sessionId);
//     } catch (error) {
//
//     }
// };
//
// export async function getSessionId()  {
//     try {
//         const value = await AsyncStorage.getItem('sessionId');
//         if (value !== null) {
//             return value;
//         }
//     } catch (error) {
//
//     }
// };
//
//
//
//
//
// export async function  saveName(saveName) {
//     try {
//         await AsyncStorage.setItem('saveName', saveName);
//     } catch (error) {
//
//     }
// };
//
// export async function  getSaveName() {
//     try {
//         const value = await AsyncStorage.getItem('saveName');
//         if (value !== null) {
//
//             console.log(value);
//         }
//     } catch (error) {
//
//     }
// };
//
//
//
//
//
// export const SAVE_PENDING_TRANSFER = (value) => {
//     AsyncStorage.setItem('save_pending_transfer', JSON.stringify(value));
// };
//
// export const GET_PENDING_TRANSFER = async () => {
//     const value = await AsyncStorage.getItem('save_pending_transfer');
//     return value ? JSON.parse(value) : {};
// };
//
//
//
//
//
//
// export async function removeItems(){
//     try {
//         await AsyncStorage.removeItem('email')
//     }
//     catch (error) {
//
//     }
// };
//
// export async function getRemoveItems() {
//     try {
//         await AsyncStorage.removeItem('companyId')
//     }
//     catch (error) {
//
//     }
// };







