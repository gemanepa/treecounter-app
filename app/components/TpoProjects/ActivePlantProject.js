import React from 'react';
import PropTypes from 'prop-types';
import ActivePlantProjectData from './ActivePlantProjectData';
import * as constants from '../../SupportedLanguages/en';
import { Link } from 'react-router-dom';
import { selectPlantProjectAction } from '../../actions/selectPlantProjectAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const ActivePlantProject = props => {
  const handleDonateTreesButton = (event, id) => {
    selectPlantProjectAction(id);
  };
  let route = `/payment/project/${props.id}`;
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <ActivePlantProjectData
          userTpos={props.userTpos}
          plantProjects={props.plantProjects}
          id={props.id}
        />
      </div>
      <div className="bottomBtn col-md-12">
        <a className="col-md-6 leftBtn" href="#">
          {constants.formStrings.seeMore}
        </a>{' '}
        <Link
          className="col-md-6 rightBtn"
          to={route}
          onClick={e => handleDonateTreesButton(e, props.id)}
        >
          {constants.formStrings.donateTrees}
        </Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectPlantProjectAction }, dispatch);
};

export default connect(null, mapDispatchToProps)(ActivePlantProject);

ActivePlantProject.propTypes = {
  userTpos: PropTypes.any.isRequired,
  plantProjects: PropTypes.any.isRequired,
  id: PropTypes.number.isRequired
};
