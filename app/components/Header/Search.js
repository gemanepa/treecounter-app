import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { updateRoute } from '../../helpers/routerHelper';
import SearchAutosuggest from './SearchAutosuggest';
import * as constants from '../../SupportedLanguages/en';

class SearchBar extends React.Component {
  suggestionClicked = (context, event) => {
    this.props.route('app_treecounter', null, {
      treecounter: event.suggestion.id
    });
  };

  render() {
    return (
      <form>
        <div className="search-bar">
          <SearchAutosuggest onSuggestionClicked={this.suggestionClicked} />
          <span className="search-bar__button">
            <i className="material-icons header-icons">
              {constants.formStrings.search}
            </i>
          </span>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      route: (routeName, id, params) => dispatch =>
        updateRoute(routeName, dispatch, id, params)
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(SearchBar);

SearchBar.propTypes = {
  route: PropTypes.func
};
