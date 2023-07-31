import { Dimensions } from 'react-native';

const{width, height} = Dimensions.get("screen");

export const Colors = {
    light: "#f1f7f8",
    lightSecondary: "rgba(200, 200, 200, 0.15)",
    lightGray: "#ccc",
    gray: "#78746D",
    dark: "black",
    primary: "#1D3A70",
    // primary: "#120F3E",
    secondary: "#FFAEBC",
    success: "green",
    off: "#c75121"
}

export const fontSizes = {
    small: width / 30,
    default: width / 24,
    medium: width / 19,
    large: width / 15,
    xLarge: height / 21
}

export const Spaces = {
    small: width / 30,
    default: width / 24,
    medium: width / 18,
    large: width / 15,
    xLarge: height / 5
}
