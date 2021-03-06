/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ExperimentsPage from 'containers/ExperimentsPage/Loadable';
import BlogPost from 'containers/Experiments/BlogPost/Loadable';
import MojiPay from 'containers/Experiments/MojiPay/Loadable';

import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from 'styles/global-styles';
import ContentWrapper from '../../components/ContentWrapper';

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Webiterate" defaultTitle="Webiterate">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <ContentWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/experiments" component={ExperimentsPage} />
          <Route exact path="/experiment/blog_post" component={BlogPost} />
          <Route exact path="/experiment/moji_pay" component={MojiPay} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </ContentWrapper>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
