import React from 'react';

/**
 * React Component wrapper for the FirebaseUI Auth widget.
 */
export default class FirebaseAuth extends React.Component {
  render() {
    return (
      <div>
        <h1>THIS IS SAMPLE FirebaseAuth component</h1>
      </div>
    );
  }
}

export function AnotherComp() {
  return (
    <h1>THIS IS A SIMPLE FUNCTIONAL COMPONENT</h1>
  )
}

export function getFirebaseui() {
  const firebaseui = require('firebaseui');
  return firebaseui;
}