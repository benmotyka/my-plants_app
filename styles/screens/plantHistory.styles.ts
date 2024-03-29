import styled from "styled-components/native";
import { Description, ScrollableHeader, SmallHeader } from "styles/shared";

export const ItemDateHeader = styled.Text`
  background-color: ${({ theme }) => theme.neutralLight};
  padding: 10px 25px;
  font-size: 18px;
  font-family: "Inter_300Light";
  color: ${({ theme }) => theme.text};
`;

export const ScrollableListOfItems = styled.ScrollView`
    margin: 0 30px;
    height: 50px;
`;

export const ActionText = styled.Text`
  font-size: 14px;
  font-family: "Inter_300Light";
  color: ${({ theme }) => theme.text};
`;

export const NameContainer = styled.View`
  display: flex;
  justify-content: center;
  width: 90%;
  padding: 15px 20px;
`;

export const ItemWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 40px;
`;

export const HistoryIcon = styled.Image`
  width: 10px;
  height: 15px;
  margin-right: 5px;
`;

export const HistoryImage = styled.Image`
  width: 200px;
  height: 200px;
  margin: 0 20px;
  border-radius: 5px;
`;

export const SectionContainer = styled.ScrollView`
  width: 100%;
  display: flex;
  overflow-y: auto;
  height: 70%;
`;

export const ScrollableImagesContainer = styled(ScrollableHeader)`
  padding: 30px 10px;
  margin-bottom: 0;
`;

export const SectionHeaderWrapper = styled.TouchableOpacity`
  margin: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export const InfoText = styled(Description)`
  margin-top: 10px;
  text-align: center;
`;

export const ButtonWrapper = styled.View`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const SectionHeader = styled(SmallHeader)<{
  active: boolean;
}>`
  opacity: ${(props) => (props.active ? 1 : 0.3)};
`;
