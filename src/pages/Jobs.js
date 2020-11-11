import Axios from 'axios';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

import {JobItem} from '../components';
import {jobs, jobItem} from '../styles';


const Jobs = (props) => {
  const {language} = props.route.params;
  const [data, setData] = useState([]);
  const [selectedJob, setSelectedJob] = useState('');
  const [modalFlag, setModalFlag] = useState(false);
  const [favList, setFavList] = useState([])

  const fetchData = async () => {
    const response = await Axios.get(
      `https://jobs.github.com/positions.json?search=${language.toLowerCase()}`,
    );
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onJobSelect = (job) => {
    setModalFlag(true);
    setSelectedJob(job);
  };

  const renderJobs = ({item}) => {
    return <JobItem item={item} onSelect={() => onJobSelect(item)} />;
  };

  const hideModal = () => {
    setModalFlag(false);
  };

  const onFav = async () => {

    let savedJobList = await AsyncStorage.getItem("@FAVORITE_JOBS");

    savedJobList = savedJobList == null ? [] : JSON.parse(savedJobList)

    const updatedJobList = [...savedJobList, selectedJob];

    AsyncStorage.setItem("@FAVORITE_JOBS", JSON.stringify(updatedJobList))
    setModalFlag(false);

  }

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1}}>
        <View style={jobs.titleContainer}>
            <Text style={jobs.title}>JOBS FOR {language.toUpperCase()}</Text>
        </View>
        <FlatList data={data} renderItem={renderJobs}  />

        <TouchableOpacity
          style={jobs.favs}
            onPress={() => props.navigation.navigate('SavedJobs')}
        >
          <Image
            style={jobs.favsIcon}
            source={require('../components/images/heart.png')}
          />
        </TouchableOpacity>

        <Modal isVisible={modalFlag} onBackdropPress={hideModal}>
          <View style={jobs.modalBackGround}>
            <Text style={jobItem.textTitle}>{selectedJob.title}</Text>
            <Text style={jobItem.textLocation}>
              {selectedJob.location} / {selectedJob.company}
            </Text>
            <View style={jobs.container}>
              <TouchableOpacity onPress={onFav}>
                <Image
                  style={jobs.unLiked}
                  source={require('../components/images/heart.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={hideModal}>
                <Image
                  style={jobs.exit}
                  source={require('../components/images/X.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export {Jobs};
