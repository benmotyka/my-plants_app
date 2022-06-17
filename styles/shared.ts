import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const screenWidth = Dimensions.get("screen").width;
export const screenHeight = Dimensions.get("screen").height;

export const Container = styled.View`
  flex: 1;
  align-items: center;

`;

export const ScreenContainer = styled.View`
height: 100%;
width: 100%;
position: relative;
`

export const ColumnCenterWrapper = styled.View`
display: flex;
align-items: center;
justify-content: center;
padding-top: 100px;
`

export const InputsWrapper = styled.View`
display: flex;
align-items: center;
width: 100%;
padding: 0 20px;
`