import React, {useMemo} from 'react';
import {Text, TextInput, View} from 'react-native';

import {Container, Label, Input as StyledInput, styles} from './styles';

export const Input = ({label, required = false, ...rest}) => {
  const labelText = useMemo(() => {
    const requiredText = required ? '*:' : ':';
    return `${label || ''}${requiredText}`;
  }, [label, required]);

  const inputStyle = useMemo(
    () => (required ? styles.passwordInput : styles.input),
    [required],
  );

  return (
    <>
      <Container>
        {label && <Label>{labelText}</Label>}
        <StyledInput {...rest} />
      </Container>
      <View style={styles.container}>
        {label && <Text style={styles.label}>{labelText}</Text>}
        <TextInput style={inputStyle} {...rest} />
      </View>
    </>
  );
};
