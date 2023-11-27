import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import styles from './app.css'; // This uses CSS modules.
import './firebaseui-styling.global.css'; // Import globally.

// debug
import doDebug from './adebug';
import F1 from 'tmp-abhishek-debug/dd18_wp5_njx_nolibname/StyledFirebaseAuth';

class App extends React.Component {
  componentDidMount() {
    doDebug();
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
          <i className={styles.logoIcon + ' material-icons'}>photo</i> My App
        </div>
        <div className={styles.caption}>This is a cool demo app</div>
        {true &&
          <div>
            <span>TESTING!</span>
            <F1 />
          </div>
        }
      </div>
    );
  }
}

// Load the app in the browser.
ReactDOM.render(<App/>, document.getElementById('app'));
