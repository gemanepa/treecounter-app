import React, { Component } from 'react';
import t from 'tcomb-form-native';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import i18n from '../../locales/i18n.js';

import {
  schemaOptions,
  targetFormSchema
} from '../../server/parsedSchemas/target';

import styles from '../../styles/login';
import CardLayout from '../Common/Card';

let Form = t.form.Form;

export default class Target extends Component {
  render() {
    let { treecounter } = this.props;
    return (
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <View style={styles.container}>
          <CardLayout style={styles.inputContainer}>
            <Form
              ref={'setTargetForm'}
              type={targetFormSchema}
              options={schemaOptions}
            />
            <TouchableHighlight
              onPress={this.props.onSubmitTarget}
              style={styles.button}
            >
              <Text style={styles.buttonText}>
                {i18n.t('label.set_target')}
              </Text>
            </TouchableHighlight>
          </CardLayout>
        </View>
      </ScrollView>
    );
  }
}

Target.propTypes = {
  treecounter: PropTypes.object.isRequired,
  onSubmitTarget: PropTypes.func.isRequired
};

// export const styles = StyleSheet.create({
//   ...loginStyles,
//   titleText: { ...loginStyles.titleText, width: 129 },
//   titleTextUnderline: { ...loginStyles.titleTextUnderline, width: 119 }
// });
