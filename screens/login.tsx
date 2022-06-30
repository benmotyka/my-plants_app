import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Formik } from "formik";
import React from "react";
import { RootStackParamList } from "../App";
import BasicButton from "../components/BasicButton/BasicButton";
import BasicTextInput from "../components/BasicTextInput/BasicTextInput";
import { FooterText, FooterWrapper } from "../styles/screens/login.styles";
import {
  ColumnCenterWrapper,
  Header,
  InputsWrapper,
  MarginTopView,
  ScreenContainer,
} from "../styles/shared";

type LoginProps = NativeStackScreenProps<RootStackParamList, "login">;

const Login = ({ navigation }: LoginProps): JSX.Element => {
  return (
    <ScreenContainer>
      <ColumnCenterWrapper>
      <Header>Login</Header>
        <Formik
          initialValues={{ name: "", password: "" }}
          onSubmit={(values, {resetForm}) => {
            console.log(values);
            navigation.navigate("home");
            resetForm()
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <InputsWrapper>
              <BasicTextInput
                label="Username"
                placeholder="Enter your username..."
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              <BasicTextInput
                label="Password"
                placeholder="Enter your password..."
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                hideInput={true}
              />
              <MarginTopView>
              <BasicButton
                onPress={handleSubmit as (values: any) => void}
                text="Submit"
              />
              </MarginTopView>
            </InputsWrapper>
          )}
        </Formik>
      </ColumnCenterWrapper>
      <FooterWrapper>
            <FooterText onPress={() => navigation.navigate('register')}>Register now</FooterText>
      </FooterWrapper>
    </ScreenContainer>
  );
};

export default Login;
