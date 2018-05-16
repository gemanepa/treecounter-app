import React, { Component } from 'react';
import t from 'tcomb-form-native';
import PropTypes from 'prop-types';

import {
  forgotPasswordFormSchema,
  schemaOptions
} from '../../server/formSchemas/forgotpassword';
import { TextInputTemplate } from '../Common/Templates/TextInputTemplate';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ImageBackground
} from 'react-native';

let Form = t.form.Form;

let allSchemaOptions = {
  fields: {
    email: {
      ...schemaOptions.fields.email,
      template: TextInputTemplate,
      config: { iconUrl: require('../../images/login/mail.png') },
      error: 'required'
    }
  }
};

export default class ForgotPassword extends Component {
  onLoginClicked = () => {
    this.props.updateRoute('app_login');
  };

  onPress = () => {
    let result = this.refs.forgotPasswordForm.validate();
    if (result.isValid()) {
      let value = this.refs.forgotPasswordForm.getValue();
      if (value) {
        this.props.onClick(value);
      }
    } else if (this.props.onError) {
      this.props.onError(result.errors);
    }
  };

  render() {
    return (
      <ImageBackground style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleText}>Forgot your password?</Text>
          <View style={styles.titleTextUnderline} />
        </View>
        <View style={styles.inputContainer}>
          <Form
            ref={'forgotPasswordForm'}
            type={forgotPasswordFormSchema}
            options={allSchemaOptions}
          />
          <TouchableHighlight onPress={this.onPress} style={styles.button}>
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableHighlight>
          <View style={styles.bottomRow}>
            <Text
              onPress={this.onLoginClicked}
              style={styles.bottomTextHighlight}
            >
              Try to login again.
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

ForgotPassword.propTypes = {
  onClick: PropTypes.func.isRequired,
  onError: PropTypes.func,
  updateRoute: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowRadius: 12
  },
  button: {
    height: 50,
    backgroundColor: '#b9d384',
    borderColor: '#b9d384',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 21,
    marginTop: 30,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 29,
    color: 'white',
    alignSelf: 'center'
  },
  titleText: {
    fontSize: 30,
    color: '#575756',
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    marginBottom: 20
  },
  titleTextUnderline: {
    height: 3,
    width: 117,
    backgroundColor: '#b9d384',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center'
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomTextHighlight: {
    fontSize: 11,
    color: '#ec6453'
  },
  header: {
    marginBottom: 60
  }
});
