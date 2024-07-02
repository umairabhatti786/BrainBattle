import {
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import GradientLayout from "../../../components/GradientLayout";
import { horizontalScale, verticalScale } from "../../../utils/Mertics";
import { appStyles } from "../../../utils/appStyles";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { fonts } from "../../../utils/fonts";
import DeviceInfo from "react-native-device-info";
import { useState } from "react";
import FrinedContainer from "./FrinedContainer";
import GroupPartiesContainer from "./GroupPartiesContainer";
import RequestChallengeContainer from "./RequestChallengeContainer";
import CustomSearch from "../../../components/CustomSearch";
import FindFriendsContainer from "./FindFriendsContainer";
import { FindFriends, groupParties, onlineFriends } from "../../../utils/Data";

const Friends = ({ navigation }: any) => {
  const isiPad = DeviceInfo.getModel().includes("iPad");
  const [selectedTab, setSelected] = useState("All");

  const renderFindFriendsList = ({ item, index }: any) => {
    return (
      <>
        <View>
          <FindFriendsContainer item={item} />
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
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ gap: 10 }}
                renderItem={renderFindFriendsList}
              />
            </View>
          )}
        </View>
      </View>
    </GradientLayout>
  );
};
export default Friends;

const styles = StyleSheet.create({
  isPadTabContainer: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(5),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  tabContainer: {
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(5),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
