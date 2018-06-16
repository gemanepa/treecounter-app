import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextHeading from '../Common/Heading/TextHeading';
import CardLayout from '../Common/Card/CardLayout';
import Tabs from '../Common/Tabs';
import i18n from '../../locales/i18n';
import UserProfileImage from '../Common/UserProfileImage';
import {
  country,
  education,
  company,
  tree_outline,
  organization
} from '../../assets';

const data = {
  tabs: [
    {
      name: i18n.t('label.treecount_map'),
      id: 'direct'
    },
    {
      name: i18n.t('label.treecount_leaderboard'),
      id: 'invitation'
    }
  ]
};

export default class Leaderboard extends Component {
  handleCategoryChange = category => {
    console.log('clicked' + category);
  };
  constructor() {
    super();
    this.handleTabChange = this.handleTabChange.bind(this);
    this.state = {
      modeMap: '',
      sortValue: ''
    };
  }

  handleTabChange(tab) {
    console.log('Tab change' + tab);
    this.setState({
      modeMap: tab
    });
  }

  getCategoryView = () => {
    let categoryUI = null;
    if (this.props.exploreData) {
      let categories = this.props.exploreData.categories;
      let categoryArray = Object.keys(categories);
      categoryUI = categoryArray.map((category, index) => {
        return (
          <React.Fragment key={index}>
            <div
              className="leaderboard_image__container"
              onCLick={() => {
                this.handleCategoryChange(category);
              }}
            >
              <UserProfileImage iconUrl={country} />
              <div>{categories[category]}</div>
            </div>
          </React.Fragment>
        );
      });
    }
    return categoryUI;
  };

  render() {
    let listItemsUI;
    if (this.props.mapData)
      listItemsUI = this.props.mapData.map((d, index) => {
        return (
          <React.Fragment key={index}>
            <div className="row-container">
              <div key={d.countryCode} className="col-container country">
                {d.country}
              </div>
              <div key={d.planted} className="col-container target">
                {d.planted}
              </div>
              <div key={d.target} className="col-container planted">
                {d.target}
              </div>
            </div>
          </React.Fragment>
        );
      });

    return (
      <div className="app-container__content--center sidenav-wrapper">
        <TextHeading>{'Explore'}</TextHeading>
        <CardLayout className="leader-board__container">
          <Tabs data={data.tabs} onTabChange={this.handleTabChange}>
            {this.state.modeMap === data.tabs[0].id ? (
              <div>
                <div className="leaderboard_images__container">
                  <div
                    className="leaderboard_image__container"
                    onCLick={this.handleCategoryChange}
                  >
                    <UserProfileImage iconUrl={country} />
                    <div>Countries</div>
                  </div>
                  <div className="leaderboard_image__container">
                    <UserProfileImage iconUrl={organization} />
                    <div>Demo Text</div>
                  </div>
                  <div className="leaderboard_image__container">
                    <UserProfileImage iconUrl={company} />
                    <div>Companies</div>
                  </div>
                  <div className="leaderboard_image__container">
                    <UserProfileImage iconUrl={tree_outline} />
                    <div>Tree-Planting</div>
                  </div>
                  <div className="leaderboard_image__container">
                    <UserProfileImage iconUrl={education} />
                    <div>Education</div>
                  </div>
                  <div className="leaderboard_image__container">
                    <UserProfileImage iconUrl={education} />
                    <div>Education</div>
                  </div>
                </div>
                <div className="leaderboard-list__sort">
                  <div className="sort-container">
                    <span>Sort By: </span>
                    <span>
                      <select value={this.state.sortValue}>
                        <option value="1">planted</option>
                        <option value="0">Desc</option>
                      </select>
                    </span>
                  </div>
                  <div className="sort-container">
                    <span>Time Period: </span>
                    <span>
                      <select value={this.state.sortValue}>
                        <option value="1">all time</option>
                        <option value="0">Desc</option>
                      </select>
                    </span>
                  </div>
                </div>

                <div className="leaderboard-list__table">
                  <div className="row-header-container">
                    <div className="col-header">Country</div>
                    <div className="col-header">Planted</div>
                    <div className="col-header">Target</div>
                  </div>
                  {listItemsUI}
                </div>
              </div>
            ) : (
              <CardLayout>Leaderboard Selected</CardLayout>
            )}
          </Tabs>
        </CardLayout>
      </div>
    );
  }
}

Leaderboard.propTypes = {
  exploreData: PropTypes.object.isRequired,
  mapData: PropTypes.array
};