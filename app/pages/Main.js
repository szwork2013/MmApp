import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar
} from 'react-native';
import _ from 'lodash';
import TabNavigator from 'react-native-tab-navigator';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import UI from '../common/UI';
import ViewPages from '../components/ViewPages'
import Home from './Home';
import List from './List';
import Category from './Category';
import SplashScreen from 'react-native-splash-screen'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }

  componentDidMount() {
    SplashScreen.hide();
  }
  
  render() {

    const { dispatch, router} = this.props;

    return (
      <View style={{flex:1}}>
      
        <TabNavigator tabBarStyle={UI.CommonStyles.tabBar}>
          <TabNavigator.Item
            title="首页"
            selected={this.state.selectedTab === 'home'}
            selectedTitleStyle={UI.CommonStyles.tabBarTextSelected}
            titleStyle={UI.CommonStyles.tabBarTextSelected}
            renderIcon={() => <Image source={require("../images/icon/home@2x.png")} style={UI.CommonStyles.tabBarIcon}/>}
            renderSelectedIcon={() => <Image source={require("../images/icon/home_on@2x.png")} style={UI.CommonStyles.tabBarIcon}/>}
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <Home {...this.props}/>
          </TabNavigator.Item>
          <TabNavigator.Item
            title="分类"
            selected={this.state.selectedTab === 'category'}
            selectedTitleStyle={UI.CommonStyles.tabBarTextSelected}
            titleStyle={UI.CommonStyles.tabBarTextSelected}
            renderIcon={() => <Image source={require("../images/icon/category@2x.png")} style={UI.CommonStyles.tabBarIcon}/>}
            renderSelectedIcon={() => <Image source={require("../images/icon/category_on@2x.png")} style={UI.CommonStyles.tabBarIcon}/>}
            onPress={() => this.setState({ selectedTab: 'category' })}>
            <Category {...this.props}/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={false}
            renderIcon={() => <Image source={require("../images/icon/plus@2x.png")} style={UI.CommonStyles.tabBarIconPlus}/>}
            onPress={() => router.push(ViewPages.selectCar()) }>
          </TabNavigator.Item>
          <TabNavigator.Item
            title="消息"
            selected={this.state.selectedTab === 'message'}
            selectedTitleStyle={UI.CommonStyles.tabBarTextSelected}
            titleStyle={UI.CommonStyles.tabBarTextSelected}
            renderIcon={() => <Image source={require("../images/icon/message@2x.png")} style={UI.CommonStyles.tabBarIcon}/>}
            renderSelectedIcon={() => <Image source={require("../images/icon/message_on@2x.png")} style={UI.CommonStyles.tabBarIcon}/>}
            onPress={() => router.push(ViewPages.product()) }
          >
          </TabNavigator.Item>
          <TabNavigator.Item
            title="我的"
            selected={this.state.selectedTab === 'my'}
            selectedTitleStyle={UI.CommonStyles.tabBarTextSelected}
            titleStyle={UI.CommonStyles.tabBarTextSelected}
            renderIcon={() => <Image source={require("../images/icon/my@2x.png")} style={UI.CommonStyles.tabBarIcon}/>}
            renderSelectedIcon={() => <Image source={require("../images/icon/my_on@2x.png")} style={UI.CommonStyles.tabBarIcon}/>}
            onPress={() => router.push(ViewPages.shopCart()) }>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

export default connect((state, props) => ({

}), dispatch => ({

}), null, {
  withRef: true
})(Main);