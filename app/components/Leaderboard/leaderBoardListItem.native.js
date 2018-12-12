import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TouchableItem from '../Common/TouchableItem.native';
import { PropTypes } from 'prop-types';
import PlantedProgressBar from '../PlantProjects/PlantedProgressbar.native';
import styles from '../../styles/leaderboard/leader_board';

export default class LeaderboardItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.itemView}>
        <View>
          <Text style={styles.itemViewText}>{this.props.index + 1}</Text>
        </View>
        <View style={[{ marginLeft: 10 }]}>
          <TouchableItem
            onPress={() =>
              this.props.onPress(this.props.treeCounterId, this.props.uri)
            }
            style={{ justifyContent: 'center' }}
          >
            <Text style={styles.itemViewText}>{this.props.title}</Text>
            <PlantedProgressBar
              countPlanted={this.props.planted}
              countTarget={this.props.target}
              hideTargetImage
            />
          </TouchableItem>
        </View>
      </View>
    );
  }
}

LeaderboardItem.propTypes = {
  index: PropTypes.any,
  onClick: PropTypes.func,
  planted: PropTypes.any,
  target: PropTypes.any,
  iconUrl: PropTypes.any,
  title: PropTypes.string,
  treeCounterId: PropTypes.any,
  onPress: PropTypes.func,
  uri: PropTypes.any
};
