import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import Stock from "./modules/stock.js";

export default class App extends Component {
  render() {
    return (
      <Stock></Stock>
      /*<ScrollView style={styles.container}>
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Lorem Ipsum</Text>
          <Text style={styles.postDescription}>dolor sit amet</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Lorem Ipsum</Text>
          <Text style={styles.postDescription}>dolor sit amet</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Lorem Ipsum</Text>
          <Text style={styles.postDescription}>dolor sit amet</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Lorem Ipsum</Text>
          <Text style={styles.postDescription}>dolor sit amet</Text>
        </View>
      </ScrollView>*/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#531382',
  },
  postContainer: {
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 3
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  postDescription: {
    color: "#666"
  }
});
