import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import NavigationService from './NavigationService';
import NavigationStack from './NavigationStack';


//Navigator container
function AppNavigator() {
    return (
        <NavigationContainer
            ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }}
        >
            <NavigationStack />
        </NavigationContainer>
    );
}

export default AppNavigator;
