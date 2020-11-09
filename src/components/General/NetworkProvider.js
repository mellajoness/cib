import React from 'react';
import NetInfo from '@react-native-community/netinfo';
import Toast, {DURATION} from 'react-native-easy-toast';

export const NetworkContext = React.createContext({ isConnected: true });

export class NetworkProvider extends React.PureComponent {
    state = {
        isConnected: true
    };

    componentDidMount() {
        NetInfo.addEventListener(state => {
            this.setState({ isConnected: state.isConnected });
            console.log("Is connected? did", state.isConnected);
            if(!state.isConnected)
                this.refs.toast.show('Internet Connection Error', 5000);
                // this.refs.toast.show('Internet Connection Error', DURATION.FOREVER);
            else
                this.refs.toast.close();
        });
    }

    componentWillUnmount() {
        NetInfo.removeEventListener(state => {
            this.setState({ isConnected: state.isConnected });
            console.log("Is connected? will", state.isConnected);
            if(!state.isConnected)
                this.refs.toast.show('Internet Connection Error', 5000);
            else
                this.refs.toast.close();
        });
    }

    render() {
        return (
            <NetworkContext.Provider value={this.state}>
                {this.props.children}

                <Toast
                    ref="toast"
                    style={{backgroundColor:'red'}}
                    opacity={0.8}
                />
            </NetworkContext.Provider>
        );
    }
}