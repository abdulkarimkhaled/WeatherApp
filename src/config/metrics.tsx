/*
 *application wide metrics for proper styling
*/
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');


//check for orientation
const metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
};

//get the relative ratio of the screen width
export const calcWidth = (target: number | 360) => {

    return metrics.screenWidth * (target / 360)
}

//get the relative ratio of the screen height
export const calcHeight = (target: number | 720) => {
    return metrics.screenHeight * (target / 720)
}

export default metrics;
