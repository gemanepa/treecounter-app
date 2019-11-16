import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { ScrollView } from 'react-native-gesture-handler';
import AddRatingSection from './AddRatingSection';
const { width } = Dimensions.get('window');
import { forward } from './../../../assets';
import { connect } from 'react-redux';
import { addReview, updateReview } from '../../../actions/reviews';
import { bindActionCreators } from 'redux';
import { selectedPlantProjectSelector } from '../../../selectors';
import i18n from '../../../locales/i18n.js';
import { NotificationManager } from '../../../notification/PopupNotificaiton/notificationManager.native';
class AddReview extends Component {
  constructor(props) {
    super(props);
    console.log(props, Icon);
    this.state = {
      review:
        (props.navigation.state.params &&
          props.navigation.state.params.review) ||
        {}
    };
    this.create = this.create.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }
  onUpdate(data) {
    this.setState({ review: data });
  }

  async create() {
    console.log('creating', this.props.selectedPlantProject, this.state.review);
    const { review } = this.state;
    if (!review.summary) {
      return NotificationManager.error(
        i18n.t('label.summary_missing'),
        i18n.t('label.error'),
        5000
      );
    }
    console.log('review before submitting', review);
    try {
      if (this.state.review.id) {
        let {
          id,
          reviewIndexScores,
          summary,
          pdfFile,
          reviewImages
        } = this.state.review;
        const plantProject = this.props.selectedPlantProject.id;
        await this.props.updateReview(
          {
            id,
            plantProject,
            summary,
            reviewIndexScores,
            pdfFile,
            reviewImages
          },
          this.props.selectedPlantProject
        );
      } else {
        await this.props.addReview(
          this.state.review,
          this.props.selectedPlantProject
        );
      }
      this.props.navigation.navigate('app_reviews');
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    console.log('state', this.state);
    return (
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 80,
          backgroundColor: '#fff',
          flexGrow: 1
        }}
      >
        {/*Header*/}
        <View
          style={{
            backgroundColor: 'white',
            paddingTop: 30
          }}
        >
          <View
            style={{
              width: width * 0.88,
              marginLeft: width * 0.06,
              backgroundColor: 'white'
            }}
          >
            <Text style={styles.reviewPageTitle}>
              {this.props.selectedPlantProject.name}
            </Text>
            <Text style={styles.reviewPageSubTitle}>
              {' '}
              {i18n.t('label.add_project_review')}
            </Text>
          </View>
        </View>

        {/*All Reviews*/}
        <View>
          <AddRatingSection
            review={this.state.review}
            selectedPlantProject={this.props.selectedPlantProject}
            onUpdate={this.onUpdate}
          />
        </View>

        {/* All Reviews Ended */}

        {/*Write Review*/}
        <TouchableOpacity
          style={styles.pledgeSmallButton}
          onPress={() => {
            console.log('plant project', this.props.selectedPlantProject);
            this.create();
          }}
        >
          <Image
            source={forward}
            resizeMode="cover"
            style={{ height: 32, width: 32 }}
          />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  reviewPageTitle: {
    fontSize: 27,
    lineHeight: 40,
    color: '#4d5153',
    fontWeight: '800',
    fontStyle: 'normal'
  },
  reviewPageSubTitle: {
    fontSize: 18,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#4d5153',
    marginTop: 7,
    marginBottom: 45
  },
  totalRating: {
    opacity: 0.8,
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    color: '#4d5153',
    marginRight: 5
  },
  writeReviewButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#27ae60',
    borderRadius: 72,
    marginTop: 10,
    alignContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 24
  },
  pledgeSmallButton: {
    backgroundColor: '#89b53a',
    height: 54,
    width: 54,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    marginLeft: '80%'
  }
});

const mapStateToProps = state => {
  return {
    selectedPlantProject: selectedPlantProjectSelector(state)
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addReview,
      updateReview
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
