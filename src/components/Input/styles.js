import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

const input = {
  backgroundColor: '#c4c4c4',
  width: '100%',
  marginBottom: 15,
  height: 50,
  fontSize: 16,
  paddingLeft: 10,
  paddingRight: 10,
  borderRadius: 5,
  borderWidth: 2,
  borderSytle: 'solid',
  borderColor: '#66f',
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  label: {
    color: 'white',
    marginBottom: 5,
  },
  input,
  passwordInput: {
    ...input,
    borderColor: '#f66',
  },
});

export const Label = styled.Text`
  color: white;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  background: #c4c4c4;
  width: 100%;
  margin-bottom: 15px;
  height: 50px;
  font-size: 16px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  ${props => props.secureTextEntry && 'border: 2px solid #f66'};
  ${props => !props.secureTextEntry && 'border: 2px solid #66F'};
`;

export const Container = styled.SafeAreaView`
  background: transparent;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
