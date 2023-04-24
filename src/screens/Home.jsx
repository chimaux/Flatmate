import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView, Pressable } from "react-native";
import { NOTIFY, SHOWER } from "../assets/svgs/auth_svg";
import { TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { screenWidth } from "./Welcome";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const Home = ({ navigation }) => {
  const availableApartments = [
    {
      img: "https://www.shutterstock.com/image-photo/interior-small-apartment-living-room-260nw-2154108011.jpg",
      price: 500000,
      type: "Apartment",
      location: "Lagos Island",
    },
    {
      img: "https://exej2saedb8.exactdn.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-04-at-2.28.40-PM.png?strip=all&lossy=1&ssl=1",
      price: 650000,
      type: "Home",
      location: "Lagos Mainland",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZKiP_n9gPuCJkFTg7NFbnGLK9Mf1J28o8r7cY8XBGgMQcnHlA_vRB5QJ-iM02QCZkgC4&usqp=CAU",
      price: 200000,
      type: "Roomate",
      location: "Oshodi",
    },
    {
      img: "https://i.pinimg.com/originals/7d/81/4e/7d814eee185496be2b2f5795e7e31fe7.jpg",
      price: 900000,
      type: "Home",
      location: "Ikeja",
    },
    {
      img: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/6/23/2/Nathalie-Milazzo_Master-Retreat_4.jpg.rend.hgtvcom.616.462.suffix/1445968491002.jpeg",
      price: 350000,
      type: "Apartment",
      location: "Ajah",
    },
  ];
  const verticalFlatData = [
    {
      id:"1",
      img: "https://www.shutterstock.com/image-photo/interior-small-apartment-living-room-260nw-2154108011.jpg",
      price: 500000,
      type: "Apartment",
      location: "Lagos Island",
      detailedAddress:"12 Harmony street, Ogba, Lagos"
    },
    {
      id:"2",
      img: "https://exej2saedb8.exactdn.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-04-at-2.28.40-PM.png?strip=all&lossy=1&ssl=1",
      price: 650000,
      type: "Home",
      location: "Lagos Mainland",
      detailedAddress:"12 Harmony street, Ogba, Lagos"
    },
    {
      id:"3",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZKiP_n9gPuCJkFTg7NFbnGLK9Mf1J28o8r7cY8XBGgMQcnHlA_vRB5QJ-iM02QCZkgC4&usqp=CAU",
      price: 200000,
      type: "Roomate",
      location: "Oshodi",
      detailedAddress:"12 Harmony street, Ogba, Lagos"
    },
    {
      id:"4",
      img: "https://i.pinimg.com/originals/7d/81/4e/7d814eee185496be2b2f5795e7e31fe7.jpg",
      price: 900000,
      type: "Home",
      location: "Ikeja",
      detailedAddress:"12 Harmony street, Ogba, Lagos"
    },
    {
      id:"5",
      img: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/6/23/2/Nathalie-Milazzo_Master-Retreat_4.jpg.rend.hgtvcom.616.462.suffix/1445968491002.jpeg",
      price: 350000,
      type: "Apartment",
      location: "Ajah",
      detailedAddress:"12 Harmony street, Ogba, Lagos"
    },
  ];

  const [notify, setNotify] = useState(true);

  const [tabIndex, setTabIndex] = useState(0);
  const [likes, setLikes] = useState([])

  return (
    <View
      style={{
        flex: 1,
        //  paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: "#ffffff",
      }}
    >
      <SafeAreaView
        style={{
          backgroundColor: "#ffffff",
        }}
      />

      <View>
        <FlatList
          // horizontal
          contentContainerStyle={
            {
              // paddingVertical:30,
              // paddingHorizontal:15
            }
          }
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            // LIST COMPONENT HEADER
            <>
              <View style={styles.header}>
                <View>
                  <Text style={styles.headText}>Find Your Best</Text>
                  <Text style={styles.headText}>Apartment, Roomate..</Text>
                </View>
                {notify === true ? <NOTIFY /> : ""}
              </View>

              <View
                style={{
                  marginVertical: 20,
                  marginHorizontal: 20,
                }}
              >
                <AntDesign
                  name="search1"
                  size={24}
                  color="#000000"
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 15,
                  }}
                />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search home, roomate.."
                  placeholderTextColor={"#8D8D8D"}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginHorizontal: 20,
                }}
              >
                {["Home", "Roomate", "Apartment"].map((item, index) => {
                  return (
                    <Pressable
                      key={index.toString()}
                      style={[
                        styles.tabs,
                        {
                          backgroundColor:
                            tabIndex === index ? "#9D69FC" : "#ffffff",
                        },
                      ]}
                      onPress={() => {
                        setTabIndex(index);
                      }}
                    >
                      <Text
                        style={[
                          styles.tabText,
                          {
                            color: tabIndex === index ? "#ffffff" : "#000000",
                          },
                        ]}
                      >
                        {item}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 500,
                    marginTop: 23,
                    marginHorizontal: 20,
                  }}
                >
                  Recommended for you
                </Text>

                <FlatList
                snapToAlignment="start"
                snapToInterval={(screenWidth * 0.7)+10}
                decelerationRate={"fast"}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    // paddingHorizontal:2,
                    paddingVertical: 30,
                  }}
                  data={availableApartments}
                  renderItem={({ item }) => {
                    return (
                      <View style={styles.sectionTab1}>
                        <Image
                          style={{
                            width: "100%",
                            height: "70%",
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                          }}
                          source={{
                            uri: item.img,
                          }}
                        />
                        <View
                          style={{
                            marginLeft: 15,
                          }}
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              marginTop: 10,
                            }}
                          >
                            <Text
                              style={{
                                fontWeight: 700,
                                fontSize: 16,
                                color: "#9D69FC",
                                alignItems: "center",
                              }}
                            >
                              {item.price.toLocaleString()}
                            </Text>
                            <Text
                              style={{
                                color: "#000000",
                                fontSize: 15,
                              }}
                            >
                              /
                            </Text>
                            <Text
                              style={{
                                color: "#848484",
                                fontWeight: 500,
                                fontSize: 16,
                              }}
                            >
                              {" "}
                              year{" "}
                            </Text>
                            <Text
                              style={{
                                color: "#848484",
                                fontWeight: 500,
                                fontSize: 16,
                              }}
                            >
                              . {item.type}
                            </Text>
                          </View>
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: 600,
                              marginTop: 5,
                            }}
                          >
                            {item.location}
                          </Text>
                        </View>
                      </View>
                    );
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 500,
                  marginBottom: 20,
                  marginHorizontal: 20,
                }}
              >
                Popular
              </Text>
            </>
          }
          data={verticalFlatData}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  marginBottom:40
                }}
              >
                <View style={styles.sectionTab2}>
                  <Pressable
                  onPress={()=>{
                    if(likes.length === 0){
                      setLikes(item.id)
                    }
                    else {
                        setLikes([...likes,item.id])
                        console.log(likes)
                    }
                  }}
                  style={{
                    position:"absolute",
                    width:45,
                    height:45,
                    backgroundColor:"#fff",
                    top:20,
                    right:20,
                    zIndex:10,
                    borderRadius:"50%",
                    alignItems:"center",
                    justifyContent:"center"
                  }}
                  >
<FontAwesome name="heart-o" size={24} color="#848484" />
                  </Pressable>
                  
                  <Image
                    style={{
                      width: "100%",
                      height: "70%",
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                    source={{
                      uri: item.img,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 15,
                    }}
                  >
                    {/* AMOUNT, YEAR, AND LOCATION */}
           <View style={{
            flexDirection:"row",
            justifyContent:"space-between"
           }}>
  <View>
             <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: 700,
                          fontSize: 16,
                          color: "#9D69FC",
                          alignItems: "center",
                        }}
                      >
                        {item.price.toLocaleString()}
                      </Text>
                      <Text
                        style={{
                          color: "#000000",
                          fontSize: 15,
                        }}
                      >
                        /
                      </Text>
                      <Text
                        style={{
                          color: "#848484",
                          fontWeight: 500,
                          fontSize: 16,
                        }}
                      >
                        {" "}
                        year{" "}
                      </Text>
                      <Text
                        style={{
                          color: "#848484",
                          fontWeight: 500,
                          fontSize: 16,
                        }}
                      >
                        . {item.type}
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 600,
                        marginTop: 5,
                      }}
                    >
                      {item.location}
                    </Text>
             </View>
<View>

<View 
style={{
  flexDirection:"row",
  alignItems:"flex-start",
  justifyContent:"flex-end",
marginTop:10,

 
}}
>
<FontAwesome name="star" size={24} 
color="#FFBC5A" />
<Text style={{
  marginLeft:5,
  color:"#FFBC5A",
  fontWeight:700,
  fontSize:18
  }}>4.0</Text>
</View>


 <View
 style={{
  flexDirection:"row",
  justifyContent:"space-between",
  marginTop:5
 }}
 >
<View 
style={{
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"center",
  
}}
>
<Image
source={require("../assets/icons/shower.png")}
style={{
  width:20,
  height:20
}}
/>
 <Text
 style={{
  marginLeft:4,
  color:"#848484",
  fontSize:16
 }}
 >2</Text>
</View>  
<View 
style={{
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"center",
marginLeft:15,
// paddingHorizontal:1
}}
>
<Image
source={require("../assets/icons/bed.png")}
style={{
  width:20,
  height:20
}}
/>
 <Text
 style={{
  marginLeft:4,
  color:"#848484",
  fontSize:16
 }}
 >3</Text>
</View>  

</View> 
</View>
           </View>
                    
                  </View>
                  <View
                  style={{
                    flexDirection:"row",
                    alignItems:"center"
                  }}
                  >
<Ionicons name="ios-location-sharp" size={24} color="#A0A8B0" />
<Text
style={{
  marginTop:2
}}
>{item.detailedAddress}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  headText: {
    fontSize: 20,
    fontWeight: 500,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#8d8d8d",
    height: 50,
    borderRadius: 10,
    paddingLeft: 50,
    paddingRight: 10,
    fontSize: 16,
    color: "#8D8D8D",
  },
  tabs: {
    // backgroundColor:"#9D69FC",
    backgroundColor: "#ffffff",
    height: 50,
    // width:"31%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#c4c4c4",
    marginRight: 10,
    paddingHorizontal: 20,
  },
  tabText: {
    fontSize: 16,
    // fontWeight:400
  },
  sectionTab2: {
    marginHorizontal: 8,
    marginVertical: 8,
    width: screenWidth * 0.9,
    height: 250,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    //overflow: "hidden",
  },
  sectionTab1: {
    marginHorizontal: 8,
    marginVertical: 8,
    width: screenWidth * 0.7,
    height: 250,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.1,
    shadowRadius: 11.0,

    elevation: 24,
  },
});
