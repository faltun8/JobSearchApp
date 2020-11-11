import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList, ScrollView} from 'react-native';

import {JobItem} from '../components';
import {jobs} from '../styles'

const SavedJobs = (props) => {
  const [jobList, setJobList] = useState([]);

  AsyncStorage.getItem('@FAVORITE_JOBS')
  .then(res => {
    const list = JSON.parse(res);
    setJobList(list);
  });

  const renderJobs = ({item}) => {
    return <JobItem item={item}/>;
  };



  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={jobs.titleContainer}>
            <Text style={jobs.title}>SAVED JOBS</Text>
        </View>
        <FlatList
          data={jobList}
          renderItem={renderJobs}
        />
    </SafeAreaView>
  );
};

export {SavedJobs};
