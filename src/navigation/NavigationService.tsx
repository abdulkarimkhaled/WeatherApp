import { CommonActions, NavigationContainerRef } from '@react-navigation/native';

//declare the navigation functions that will be needed
let _navigator: NavigationContainerRef<ReactNavigation.RootParamList> | null;

function setTopLevelNavigator(navigatorRef: NavigationContainerRef<ReactNavigation.RootParamList> | null) {
    _navigator = navigatorRef;
}

//navigate from a screen to another and send params option
function navigate(routeName: string, params?: object) {
    _navigator?.dispatch(
        CommonActions.navigate(routeName, params)
    );
}
//navigate back from a screen to another 
function goBack() {
    _navigator?.dispatch(CommonActions.goBack());
}

export default {
    navigate,
    goBack,
    setTopLevelNavigator,
};
