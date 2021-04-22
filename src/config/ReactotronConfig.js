import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

// change it for your local ip machine
const IP_ADDRESS = '127.0.0.1';

if (__DEV__) {
  const tron = Reactotron.configure({ host: IP_ADDRESS })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
