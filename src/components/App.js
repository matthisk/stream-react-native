/**
 * React Native Webpack Starter Kit
 * https://github.com/jhabdas/react-native-webpack-starter-kit
 */

window.streamConfig = {
  apiKey: '2f9urhurukh2',
  appId: 6230,
};

import React, {Component, PropTypes} from 'react-native';
import stream from 'getstream';
import {Feed} from './Feed';

const {
  Platform,
  StyleSheet,
  Text,
  View,
} = React;


// var request = new XMLHttpRequest();

// request.onreadystatechange = function(e) {
//   if (request.readyState !== 4) {
//     return;
//   }

//   if (request.status === 200) {
//     console.log('success', request.responseText);
//   } else {
//     console.warn('error', request);
//   }
// };

// var headers = { 
//   'stream-auth-type': 'jwt',
//   Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZXNvdXJjZSI6IioiLCJhY3Rpb24iOiJyZWFkIiwiZmVlZF9pZCI6InVzZXJtYXR0aGlzayJ9.ClVjjMCWwe6pNgyuAUZiZcNbAMNd3U8BnP0Zqo73dQ4',
//   'X-Stream-Client': 'stream-javascript-client-browser-unknown',
//   accept: 'application/json' 
// };
// var req_seq = 0;
// request.seq_id = req_seq
// request.id = req_seq + ': ' + 'GET' + ' ' + 'https://api.getstream.io/api/v1.0/feed/user/matthisk/?api_key=2f9urhurukh2&location=unspecified'
// request._id = request.id // I know I will type "_id" from habit all the time.

// request.open('GET', 'https://api.getstream.io/api/v1.0/feed/user/matthisk/?api_key=2f9urhurukh2&location=unspecified', true);
// for (var key in headers) {
//   request.setRequestHeader(key, headers[key])
// }
// request.send('null');






class App extends Component {

  static propTypes = {
    instructions: PropTypes.string,
  };

  static defaultProps = {
    ...Component.defaultProps,
    instructions: 'Usage instructions not provided.',
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      platform: Platform.OS,
    };
  }

  render() {
    const { instructions } = this.props;
    let { platform } = this.state;

    return (
      <View style={styles.container}>
        <Feed feedGroup="user" feedId="matthisk" token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZXNvdXJjZSI6IioiLCJhY3Rpb24iOiJyZWFkIiwiZmVlZF9pZCI6InVzZXJtYXR0aGlzayJ9.ClVjjMCWwe6pNgyuAUZiZcNbAMNd3U8BnP0Zqo73dQ4">
        </Feed>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
