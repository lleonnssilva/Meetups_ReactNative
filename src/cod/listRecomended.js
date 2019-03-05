import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native'
import MeetupItem from '../../../components/MeetupItem'
// import Orientation from 'react-native-orientation'

class List extends Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
    // Orientation.lockToPortrait()
  }
  _renderSeparator () {
    return <View style={{ width: 20, backgroundColor: 'black' }} />
  }
  renderListItemProximos = ({ item }) => (
    <MeetupItem
      props={this.props}
      meetup={item}
      registered={false}
      subscriptions={item.__meta__.subscriptions_count}
    />
  )
  renderListItemRecomendados = ({ item }) => (
    <MeetupItem
      props={this.props}
      meetup={item}
      registered={false}
      subscriptions={item.__meta__.subscriptions_count}
    />
  )
  renderListItemInscritos = ({ item }) => (
    <MeetupItem
      props={this.props}
      meetup={item}
      registered
      subscriptions={item.__meta__.subscriptions_count}
    />
  )
  render () {
    const { listInscritos, listProximos, listRecomendados } = this.props
    console.tron.log(this.props)
    return (
      <View style={{ flex: 1 }}>
        {/* <View>
          <Text style={styles.text}>My List</Text>
          <FlatList
            keyExtractor={(item) => String(item.id)}
            horizontal
            SeparatorComponent={() => <View style={{ width: 5 }} />}
            renderItem={({ item }) => this._renderItem(item)}
            data={listInscritos}
          />
        </View>
        <View>
          <Text style={styles.text}>Top Picks For You</Text>
          <FlatList
            keyExtractor={(item) => String(item.id)}
            horizontal
            SeparatorComponent={() => <View style={{ width: 5 }} />}
            renderItem={({ item }) => this._renderItem(item)}
            data={listProximos}
          />
        </View>
        <View>
          <Text style={styles.text}>Top Picks For You</Text>
          <FlatList
            keyExtractor={(item) => String(item.id)}
            horizontal
            SeparatorComponent={() => <View style={{ width: 5 }} />}
            renderItem={({ item }) => this._renderItem(item)}
            data={listRecomendados}
          />
        </View> */}
        <View style={{ padding: 0 }}>
          <Text style={{ color: 'white', padding: 20 }}>Inscrições</Text>
          <FlatList
            data={listInscritos}
            keyExtractor={(item) => String(item.id)}
            ItemSeparatorComponent={this._renderSeparator}
            renderItem={this.renderListItemInscritos}
            style={styles.listContainer}
            horizontal
          />
          <Text style={{ color: 'white', padding: 20 }}>Próximos meetups</Text>
          <FlatList
            data={listProximos}
            keyExtractor={(item) => String(item.id)}
            renderItem={this.renderListItemProximos}
            ItemSeparatorComponent={this._renderSeparator}
            style={styles.listContainer}
            horizontal
          />
          <Text style={{ color: 'white', padding: 20 }}>Recomnados</Text>
          <FlatList
            data={listRecomendados}
            keyExtractor={(item) => String(item.id)}
            renderItem={this.renderListItemRecomendados}
            ItemSeparatorComponent={this._renderSeparator}
            style={styles.listContainer}
            horizontal
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white'
  }
})

export default List
