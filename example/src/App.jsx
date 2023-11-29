import React from 'react';
import ReactDOM from 'react-dom';

import StyledFirebaseAuth from './MyFirebaseAuth';

// Styles
import styles from './app.css'; // This uses CSS modules.

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
          <i className={styles.logoIcon + ' material-icons'}>photo</i> My App
        </div>
        <div className={styles.caption}>This is a cool demo app 2</div>
        {true &&
          <div>
            <StyledFirebaseAuth />
          </div>
        }
      </div>
    );
  }
}

// Load the app in the browser.
ReactDOM.render(<App/>, document.getElementById('app'));
