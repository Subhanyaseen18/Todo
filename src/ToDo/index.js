import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';

export default function Home() {
  const [search, setsearch] = useState([]);
  const [title, settitle] = useState([]);
  const [discription, setdiscription] = useState([]);
  const [index, setindex] = useState([]);
  const [showdata, setshowdata] = useState([]);
  const [showupdatedata, setshowupdatedata] = useState([]);
  const [showmodal, setshowmodal] = useState(false);
  const [showmodal1, setshowmodal1] = useState(false);

  const handleData = (title, discription) => {
    let senddata = {title, discription};

    showdata.push(senddata);

    showupdatedata.push(senddata);
  };
  const handleUpdate = () => {
    showdata[index].title = title;
    showdata[index].discription = discription;
  };
  const onSearch = text => {
    console.log('text', text);
    const tempdata = showupdatedata.filter(item => {
      console.log('itemaaaaaaaaaa', item.title)
      return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
    });

    setshowdata(tempdata);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.Container1}>
        <Image
          style={styles.Container1img}
          source={require('../../assets/Img/pe.jpg')}
        />
      </View>
      <View style={styles.mainContainer1}>
        <View style={styles.Container2}>
          <Image
            style={styles.Container2img1}
            source={require('../../assets/Img/serch.png')}
          />
          <TextInput
            onChangeText={e => {
              setsearch(e), onSearch(e);
            }}
            style={styles.Container2Input}
            placeholder="Search"></TextInput>
        </View>
        <View>
          <TouchableOpacity onPress={() => setshowmodal(true)}>
            <Image
              style={styles.Container2img2}
              source={require('../../assets/Img/plus1.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Modal transparent={true} visible={showmodal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalstyle}>
              <View style={styles.stylecrosimg}>
                <TouchableOpacity onPress={() => setshowmodal(false)}>
                  <Image
                    style={styles.showimg}
                    source={require('../../assets/Img/crose.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.modalinput1}>
                <TextInput
                  placeholder="Title"
                  onChangeText={e => settitle(e)}></TextInput>
              </View>
              <View style={styles.modalinput2}>
                <TextInput
                  onChangeText={e => setdiscription(e)}
                  placeholder="Discription"></TextInput>
              </View>

              <TouchableOpacity
                onPress={() => {
                  handleData(title, discription), setshowmodal(false);
                }}>
                <View style={styles.btntouch}>
                  <Text style={styles.btntext}>save</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <FlatList
        data={showdata}
        keyExtractor={index => index}
        renderItem={({item, index}) => {
          setindex(index);

          return (
            <TouchableOpacity onPress={() => setshowmodal1(true)}>
              <View style={styles.Container3}>
                <Text style={styles.Container3title}>Title :{item.title} </Text>
                <Text style={styles.Container3dis}>
                  Discription :{item.discription}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      <View>
        <Modal transparent={true} visible={showmodal1}>
          <View style={styles.modalContainer}>
            <View style={styles.modalstyle}>
              <View style={styles.stylecrosimg}>
                <TouchableOpacity onPress={() => setshowmodal1(false)}>
                  <Image
                    style={styles.showimg}
                    source={require('../../assets/Img/crose.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.modalinput1}>
                <TextInput
                  placeholder="Title"
                  value={title}
                  onChangeText={e => settitle(e)}></TextInput>
              </View>
              <View style={styles.modalinput2}>
                <TextInput
                  value={discription}
                  onChangeText={e => setdiscription(e)}
                  placeholder="Discription"></TextInput>
              </View>

              <TouchableOpacity
                onPress={() => {
                  setshowmodal1(false), handleUpdate(title, discription);
                }}>
                <View style={styles.btntouch}>
                  <Text style={styles.btntext}>UpDate</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
