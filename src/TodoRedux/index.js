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
import {useSelector, useDispatch} from 'react-redux';
import {additem, updateitem, delitem} from './Action';
export default function Index() {
  const [search, setsearch] = useState([]);
  const [title, settitle] = useState('');
  const [discription, setdiscription] = useState('');
  const [index, setindex] = useState('');
  const [showdata1, setshowdata1] = useState([]);
  const [showdata, setshowdata] = useState(data);
  const [showmodal, setshowmodal] = useState(false);
  const [showmodal1, setshowmodal1] = useState(false);
  // console.log('showdata', showdata)
  const dispatch = useDispatch();
  const data = useSelector(state => state.Item);
  // console.log('Itemaaaaa::::::::', data);

  const handleData = (title, discription) => {
    let senddata = {title: title, discription: discription};
    dispatch(additem(senddata));

   
  };
  const handleUpdate = (title, discription, index) => {
    const updAte = {title, discription, index};
    dispatch(updateitem(updAte));
    //   data[index].title = title;
    //   data[index].discription = discription;
  };
  const onSearch = text => {
    console.log('text', text);
    const tempdata = data.filter(item => {
      console.log('itemaaaaaaaaaa', item.title);
      return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
    });

    // setshowdata(tempdata);
  };
  const delhandle = () => {
    const del = {title: title, discription: discription, index: index};
    dispatch(delitem(del));
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
        data={data}
        keyExtractor={index => index}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setshowmodal1(true);
                setindex(index);
                settitle(item.title);
                setdiscription(item.discription);
              }}>
              <View style={styles.Container3}>
                <View>
                  <Text style={styles.Container3title}>
                    Title :{item.title}{' '}
                  </Text>
                  <Text style={styles.Container3dis}>
                    Discription :{item.discription}
                  </Text>
                </View>
                <View style={styles.delcontainer}>
                  <TouchableOpacity onPress={() => delhandle()}>
                    <Image
                      style={styles.delimg}
                      source={require('../../assets/Img/del.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      {console.log('title', title)}
      {console.log('discription', discription)}
      {console.log('index', index)}

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
                  setshowmodal1(false), handleUpdate(title, discription, index);
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
