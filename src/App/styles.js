import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #c4c4c4;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin: 5px;
`;

export const Subtitle = styled(Title)`
  font-size: 16px;
  margin-bottom: 50px;
`;

export const Form = styled.View`
  background: #444;
  width: 75%;
  padding: 15px;
  border-radius: 4px;
`;

export const Button = styled.TouchableOpacity`
  width: 60px;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  border-radius: 5px;
`;

export const ButtonLabel = styled.Text`
  font-size: 16px;
  color: #000;
  background: #c4c4c4;
  padding: 10px 5px;
  border-radius: 5px;
`;
