import React, { Component } from 'react'

import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native'

import api from '../../services/api'

const searchTerm = 'react'
const perPage = 5

export default class App extends Component {
  state = {
    data: [],
    page: 1,
    loading: false
  }

  componentDidMount () {
    this.loadRepositories()
  }

  loadRepositories = async () => {
    if (this.state.loading) return

    const { page } = this.state

    this.setState({ loading: true })

    const response = await api.get(`/meetups/unsigned/${page}`)
    // `${baseURL}/search/repositories?q=${searchTerm}&per_page=${perPage}&page=${page}`
    console.tron.log(response.data.data)
    // `${baseURL}/search/repositories?q=${searchTerm}&per_page=${perPage}&page=${page}`
    const repositories = await response.data.data

    this.setState({
      data: [...this.state.data, ...repositories],
      page: page + 1,
      loading: false
    })
  }

  renderFooter = () => {
    if (!this.state.loading) return null

    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    )
  }

  renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text>{item.title}</Text>
    </View>
  )

  render () {
    return (
      <FlatList
        style={{ marginTop: 30 }}
        contentContainerStyle={styles.list}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={(item) => String(item.id)}
        onEndReached={this.loadRepositories}
        onEndReachedThreshold={0.1}
        ListFooterComponent={this.renderFooter}
      />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20
  },

  listItem: {
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 30
  },

  loading: {
    alignSelf: 'center',
    marginVertical: 20
  }
})
// import React from 'react'
// import { View, Text, FlatList, StyleSheet, AsyncStorage } from 'react-native'
// import { ListItem } from 'react-native-elements'
// import api from '../../services/api'

// class Users extends React.Component {
//   state = {
//     seed: 1,
//     page: 1,
//     users: [],
//     isLoading: false,
//     isRefreshing: false
//   }

//   loadUsers = async () => {
//     const { users, seed, page } = this.state
//     this.setState({ isLoading: true })

//     const { data } = await api.get(`/meetups/unsigned/${this.state.page}`)
//     console.tron.log(this.state.page)
//     this.setState({
//       users: page === 1 ? data.data : [...users, ...data.data],
//       isRefreshing: false
//     })
//   }

//   handleRefresh = () => {
//     this.setState(
//       {
//         seed: this.state.seed + 1,
//         isRefreshing: true
//       },
//       () => {
//         this.loadUsers()
//       }
//     )
//   }

//   handleLoadMore = () => {
//     console.tron.log('paginando')
//     this.setState(
//       {
//         page: this.state.page + 1
//       },
//       () => {
//         this.loadUsers()
//       }
//     )
//   }

//   componentDidMount () {
//     this.loadUsers()
//   }

//   render () {
//     const { users, isRefreshing } = this.state

//     return (
//       <View style={s.scene}>
//         {users && (
//           <FlatList
//             data={users}
//             renderItem={({ item }) => (
//               <ListItem
//                 roundAvatar
//                 title={item.title}
//                 subtitle={item.description}
//                 avatar={{ uri: item.image }}
//               />
//             )}
//             keyExtractor={(i) => i.title}
//             refreshing={isRefreshing}
//             onRefresh={this.handleRefresh}
//             onEndReached={this.handleLoadMore}
//             onEndThreshold={0}
//             horizontal
//           />
//         )}
//       </View>
//     )
//   }
// }

// const s = StyleSheet.create({
//   scene: {
//     flex: 1,
//     paddingTop: 25
//   },
//   user: {
//     width: '60%',
//     backgroundColor: '#333',
//     marginBottom: 10,
//     paddingLeft: 25
//   },
//   userName: {
//     fontSize: 17,
//     paddingVertical: 20,
//     color: '#fff'
//   }
// })

// export default Users
