/**
 *
 * ExperimentsPage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import IntroBanner from './components/introBanner';
import ExperimentsList from './components/experimentsList';

import makeSelectExperimentsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

export function ExperimentsPage() {
  useInjectReducer({ key: 'experimentsPage', reducer });
  useInjectSaga({ key: 'experimentsPage', saga });

  return (
    <div>
      <Helmet>
        <title>ExperimentsPage</title>
        <meta name="description" content="Description of ExperimentsPage" />
        <meta
          name="monetization"
          content="$pay.stronghold.co/1a12aee8ba62131431d9a39cf3caac44269"
        />
      </Helmet>
      {/*
      TO DO:
      - experimentsList should be show cased as a card and linked to
      - create placeholder experiment
      */}
      <IntroBanner />
      <ExperimentsList />
    </div>
  );
}

// ExperimentsPage.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  experimentsPage: makeSelectExperimentsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ExperimentsPage);
