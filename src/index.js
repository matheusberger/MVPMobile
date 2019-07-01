import Login from './Login';
import QRCode from './QRCode';
import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Login: Login,
    QRCode: QRCode
  })
);

export default Routes