import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Easing, Image } from 'react-native';
import i18n from '../../locales/i18n';

import { trillionCampaign } from '../../actions/trillionAction';
import SvgContainer from '../Common/SvgContainer';
import svgStyles from '../../styles/common/treecounter_svg';

import TreecounterGraphicsText from './TreecounterGraphicsText';

export default class Trillion extends Component {
  constructor() {
    super();
    this.state = {
      svgData: null,
      displayName: '',
      loading: true
    };
  }
  componentDidMount() {
    trillionCampaign()
      .then(({ data }) => {
        this.setState({
          svgData: {
            id: 1,
            target: data.countTarget,
            planted: data.countPlanted,
            community: data.countCommunity,
            personal: data.countPersonal
          },
          displayName: data.displayName,
          loading: false
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <View>
        <View style={svgStyles.svgContainer}>
          <SvgContainer {...this.state.svgData} />>
        </View>
      </View>
    );
  }
}
