import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import AppNavigator from './navigation';
import { persistor, store } from './redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//app entrypoint
const EntryPoint = () => {
    LogBox.ignoreAllLogs(true)
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <StatusBar
                    backgroundColor="transparent"
                    translucent={true}
                    barStyle="light-content" />
                <PersistGate loading={null} persistor={persistor}>
                    <AppNavigator />
                </PersistGate>
            </Provider>
        </SafeAreaProvider>
    );
};


export default EntryPoint;