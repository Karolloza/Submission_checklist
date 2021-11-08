import React from 'react';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import Toast from './components/Toast'
function App() {
  return (
    <Layout>
      <Dashboard />
      <Toast />
    </Layout>
  );
}

export default App;
