import { createStackNavigator } from 'react-navigation';

import Login from './pages/Login/Login.page';
import Home from './pages/Home/Home.page';
import Encontros from './pages/AcheiPessoas/AcheiPessoas.page';

const Routes = createStackNavigator({
    Login,
    Home,
    Encontros
});

export default Routes;


