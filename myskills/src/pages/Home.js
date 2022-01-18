import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreetings] = useState('');

  function handleAddNewSkill() {
    setMySkills(oldSkill => [...oldSkill, newSkill]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreetings('Good morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreetings('Good Afternoon');
    } else {
      setGreetings('Good night');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.greetings}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddNewSkill} />
      <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>
      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => <SkillCard skill={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  greetings: {
    color: '#fff',
  },
});
