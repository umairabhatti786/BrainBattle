import {
    FlatList,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import GradientLayout from "../../../components/GradientLayout";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../utils/Mertics";
import { appStyles } from "../../../utils/appStyles";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { fonts } from "../../../utils/fonts";
import DeviceInfo from "react-native-device-info";
import { useState } from "react";
import { images } from "../../../assets";
import FrinedContainer from "./FrinedContainer";
import GroupPartiesContainer from "./GroupPartiesContainer";
import RequestChallengeContainer from "./RequestChallengeContainer";
import CustomSearch from "../../../components/CustomSearch";
import FindFriendsContainer from "./FindFriendsContainer";

const Home = ({ navigation }: any) => {
  const isiPad = DeviceInfo.getModel().includes("iPad");
  const [selectedTab, setSelected] = useState("All");

  const onlineFriends = [
    {
      image: images.user3,
      friend: "3374",
      name: "Justine R.",
      des: "In AP US History ",
      inOnline: true,
    },
    {
      image: images.user2,
      friend: " 802",
      name: " Jacob S.",
      des: "In Home Screen",
      inOnline: true,
    },
  ];
  const groupParties = [
    {
      image: images.user3,
      friend: "3374",
      title: "3rd Period Calc 😃",
      des: "In Calculus II",
      inOnline: true,
      Parties: [
        {
          img: images.user3,
        },
        {
          img: images.user2,
        },
      ],
    },
    {
      image: images.user2,
      friend: " 802",
      title: "SAT Study Group",
      des: "In SAT Prep",
      inOnline: true,
      Parties: [
        {
          img: images.user4,
        },
        {
          img: images.user5,
        },
      ],
    },
  ];

  const FindFriends=[
    {name:"Community Name here",followers:"1.1M",rooseveltBadge:images.roosevelt,monsterBadge:images.monsterBadge,image:images.user6},
    {name:"Community Name here",followers:"1.1M",rooseveltBadge:images.roosevelt,tagBadge:images.sashBadge,image:images.user7},
    {name:"Community Name here",followers:"1.1M",rooseveltBadge:images.roosevelt,image:images.user8},
    {name:"Community Name here",followers:"1.1M",rooseveltBadge:images.roosevelt,image:images.user9},
    {name:"Community Name here",followers:"1.1M",rooseveltBadge:images.roosevelt,image:images.user10},
    {name:"Community Name here",followers:"1.1M",rooseveltBadge:images.roosevelt,image:images.user11},
    {name:"Community Name here",followers:"1.1M",rooseveltBadge:images.roosevelt,image:images.user12},
    {name:"Community Name here",followers:"1.1M",rooseveltBadge:images.roosevelt,image:images.user13},
    {name:"Community Name here",followers:"1.1M",rooseveltBadge:images.roosevelt,image:images.user14},


  ]

  const renderFindFriendsList = ({ item, index }:any) => {
    return (
      <>
        <View>
            <FindFriendsContainer
            item={item}
            />
         
        </View>
      </>
    );
  };

  return (
    <GradientLayout>
      <View style={{ flex: 1, paddingLeft: horizontalScale(20) }}>
        <View
          style={{
            ...appStyles.row,
            marginVertical: isiPad
              ? verticalScale(20)
              : Platform.OS == "ios"
              ? verticalScale(17)
              : verticalScale(20),
            gap: horizontalScale(10),
            paddingTop: isiPad
              ? verticalScale(10)
              : Platform.OS == "android"
              ? verticalScale(10)
              : 0,
            // backgroundColor:"red"

            // marginTop:Platform.OS=="android"&&verticalScale(20)
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setSelected("All")}
            style={
              isiPad
                ? {
                    ...styles.isPadTabContainer,
                    backgroundColor:
                      selectedTab == "All" ? "#51B5FD" : "transparent",
                  }
                : {
                    ...styles.tabContainer,
                    backgroundColor:
                      selectedTab == "All" ? "#51B5FD" : "transparent",
                  }
            }
          >
            <CustomText
              fontFam={fonts.medium}
              fontWeight="600"
              label="All"
              size={16}
              color={selectedTab == "All" ? colors.white : colors.black}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setSelected("Find Friends")}
            style={
              isiPad
                ? {
                    ...styles.isPadTabContainer,
                    backgroundColor:
                      selectedTab == "Find Friends" ? "#51B5FD" : "transparent",
                  }
                : {
                    ...styles.tabContainer,
                    backgroundColor:
                      selectedTab == "Find Friends" ? "#51B5FD" : "transparent",
                  }
            }
          >
            <CustomText
              fontFam={fonts.medium}
              fontWeight="600"
              label="Find Friends"
              size={16}
              color={
                selectedTab == "Find Friends" ? colors.white : colors.black
              }
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            borderTopLeftRadius: 25,
            paddingHorizontal: horizontalScale(15),
          }}
        >
          {selectedTab == "All" && (
            <View style={{ paddingTop: verticalScale(20) }}>
              <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label="Online (2)"
                size={18}
                style={{ marginBottom: verticalScale(15) }}
                color={colors.gray}
              />
              {onlineFriends.map((item, index) => {
                return <FrinedContainer key={index} item={item} />;
              })}

              <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label="Group Parties"
                size={18}
                style={{ marginBottom: verticalScale(10) }}
                color={colors.gray}
              />
              {groupParties.map((item, index) => {
                return <GroupPartiesContainer key={index} item={item} />;
              })}

              <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label="Request Challenge"
                size={18}
                style={{
                  marginBottom: verticalScale(5),
                  marginTop: verticalScale(15),
                }}
                color={colors.gray}
              />
              <RequestChallengeContainer />
            </View>
          )}

          {selectedTab == "Find Friends" && (
            <View
              style={{
                flex: 1,
                paddingHorizontal: horizontalScale(20),
                paddingTop: verticalScale(15),
              }}
            >
              <CustomSearch placeholder="search" />

              <FlatList
              data={FindFriends}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item,index) => index.toString()}
              contentContainerStyle={{ gap: 10, }}
              renderItem={renderFindFriendsList}
            //   ListHeaderComponent={<OrderDetailCon />}
            />

            </View>
          )}
        </View>
      </View>
    </GradientLayout>
  );
};
export default Home;

const styles = StyleSheet.create({
  isPadTabContainer: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(5),
    // backgroundColor: "#51B5FD",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  tabContainer: {
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(5),
    // backgroundColor: "#51B5FD",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
