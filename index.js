import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-vector-icons';

class PasswordInputText extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      icEye: 'eye-off',
      password: true
    }
  }
  
  changePwdType = () => {
    let newState;
    if (this.state.password) {
      newState = {
        icEye: 'eye',
        password: false
      }
    } else {
      newState = {
        icEye: 'eye-off',
        password: true
      }
    }
    
    // set new state value
    this.setState(newState)
  };

  render() {
    return (
        <TextInput {...this.props} secureTextEntry={this.state.password}/>
        <Icon style={styles.icon}
          name={this.state.icEye}
          size={this.props.iconSize}
          color={this.props.iconColor}
          onPress={this.changePwdType} />
    )
  }
}


export const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 15,
    right: 0
  }  
});

PasswordInputText.defaultProps = {
  iconSize: 25,
  label: 'Password',
}

export default PasswordInputText

