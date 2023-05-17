import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import { db } from './config';
import { ref, onValue } from 'firebase/database';

const search = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const starCountRef = ref(db, 'posts/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newPosts = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
      setData(newPosts);
    });
  }, []);

  const filteredData = data.filter(item => {
    const regex = new RegExp(searchQuery, 'gi');
    return (
      regex.test(item.FirstName) ||
      regex.test(item.lastname) ||
      regex.test(item.gender) ||
      regex.test(item.phonenumber)
    );
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Fetch Data</Text>
      <TextInput
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search With Cr.No "
      />
      {filteredData.map(item => (
        <View style={styles.item} key={item.id}>
          <Text>FirstName : {item.FirstName}</Text>
          <Text> lastname:  {item.lastname}</Text>
          <Text>gender: {item.gender}</Text>
          <Text>Phonenumber: {item.phonenumber}</Text>
          
    
          <Text></Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#66cdaa',
    borderRadius: 20,
    margin: 20,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    width: '100%',
  },
  item: {
    backgroundColor: '#6495ed',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default search;