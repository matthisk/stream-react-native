/**
 * React Native Webpack Starter Kit
 * https://github.com/jhabdas/react-native-webpack-starter-kit
 */
import React, {Component, PropTypes} from 'react-native';
import stream from 'getstream';

const {
  Text,
  StyleSheet
} = React;

// var FeedDecorator = (Component, feedGroup) => {
//   return class extends Component {
//     componentDidMount() {
//       try {
//         var { apiKey, appId } = window.streamConfig;
//       } catch(e) {
//         throw new Error('Provide an object named streamConfig in the global scope, with properties apiKey and appId');    
//       }

//       this.client = stream.connect(apiKey, null, appId);
//       this.feed = client.feed(feedGroup, this.props.feedId, this.props.token);

//       this.feed.get()
//         .then(({ results }) => this.setState({ loading: false, activities: results }))
//         .catch(err => err);
//     }

//     onScroll(event) {
//       var [offset, limit] = this.detectOffsetLimit(event);

//       this.feed.get({ offset, limit })
//         .then({ results } => this.setState({ }))
//     }

//     render() {
//       return (
//         <Component activities={this.state.activities}></Component>
//       )
//     }
//   };
// };

// export var FlatFeed = FeedDecorator(Feed, 'flat');
// export var AggFeed = FeedDecorator(Feed, 'aggregated');

let styles = StyleSheet.create({
  activity: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export class Feed extends Component {
  static propTypes = {
    ...Component.DefaultProps,
    feedGroup: PropTypes.string,
    feedId: PropTypes.string,
    token: PropTypes.string,
  }

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      activities: []
    };
  }

  componentDidMount() {
    try {
      var { apiKey, appId } = window.streamConfig;
    } catch(e) {
      throw new Error('Provide an object named streamConfig in the global scope, with properties apiKey and appId');    
    }

    this.client = stream.connect(apiKey, null, appId);
    this.feed = this.client.feed(this.props.feedGroup, this.props.feedId, this.props.token);

    this.feed.get()
      .then(({ results }) => {
        this.setState({ loading: false, activities: results })
      })
      .catch(({error}) => { console.log('Failed with error', error) });
  }

  render() {
    var body;

    if (this.state.loading) {
      body = [];

      for (let i = 0; i < 25; i++) {
        body[i] = <PreviewActivity key={i} />;
      }
    } else {
      body = this.state.activities.map(activity => <Activity key={activity.id} {...activity} />);
    }

    return (
      <Text style={styles.activity}>
        { body }
      </Text>
    );
  }
}

class Activity extends Component {
  static propTypes = {
    ...Component.DefaultProps,
    actor: PropTypes.string,
    object: PropTypes.string,
    verb: PropTypes.string,
  }

  render() {
    return (
      <Text style={styles.activity}>
        {`User ${this.props.actor} ${this.props.verb}ed ${this.props.object}\n`}
      </Text>
    );
  }
}

var PreviewActivity = props => (
  <Text style={styles.activity}>
  {'User ... tweeted ...\n'}
  </Text>  
);