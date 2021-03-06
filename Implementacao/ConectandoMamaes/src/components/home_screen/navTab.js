import React, { Component } from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { getColor } from '../config';

export default class NavigationTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.tabs}>
        <View style={styles.titleContainer}>
          <Image style={{ flex: 1, resizeMode: 'contain' }} source={require('../../assets/images/iniciaisBranco.png')} />
        </View>

        {this.props.tabs.map((tab, i) => {
          return (
            <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
              <Icon
                name={tab}
                size={30}
                color={this.props.activeTab === i ?
                getColor('#ffffff') : getColor('rgba(255,255,255,.4)')}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabs: {
    height: 100,
    flexDirection: 'row',
    backgroundColor: getColor('orange57'),
    elevation: 5
  },
  titleContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20
  },
  tab: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
