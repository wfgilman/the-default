import React from 'react';
import Layout from './components/Layout'
import DesktopContainer from './components/DesktopContainer'
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Layout>
      <DesktopContainer />
    </Layout>
  );
}

export default App;
