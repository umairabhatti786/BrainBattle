import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../utils/colors";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../utils/Mertics";
import Home from "../../screens/main/Home";
import Rewards from "../../screens/main/Rewards";
import LeaderBoard from "../../screens/main/LeaderBoard";
import Friends from "../../screens/main/Friends";
import Play from "../../screens/main/Play";
import { images } from "../../assets";
import { fonts } from "../../utils/fonts";
import CustomText from "../../components/CustomText";
import DeviceInfo from "react-native-device-info";

const Tab = createBottomTabNavigator();
const isiPad = DeviceInfo.getModel().includes("iPad");

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 1,
          borderColor: "#D8D6FF",
          paddingTop: isiPad
            ? verticalScale(0)
            : Platform.OS == "ios"
            ? verticalScale(12)
            : verticalScale(3),
          height: Platform.OS == "ios" ? verticalScale(80) : verticalScale(70),
          paddingHorizontal: isiPad ? horizontalScale(10) : horizontalScale(15),
        },
        tabBarLabelStyle: {
          lineHeight: 18,
          fontWeight: "500",
          fontSize: verticalScale(9),
        },
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: () => null, // Disables the label

          tabBarIcon: ({ color, focused }: any) => (
            <View style={{ ...styles.container, opacity: !focused ? 0.5 : 1 }}>
              <Image source={images.brain} style={styles.imageContainer} />

              <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label="Home"
                size={11}
                color={colors.gray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={"Play"}
        component={Play}
        options={{
          headerShown: false,
          tabBarLabel: () => null, // Disables the label

          tabBarIcon: ({ color, focused }: any) => (
            <View style={{ ...styles.container, opacity: !focused ? 0.5 : 1 }}>
              <Image source={images.play} style={styles.imageContainer} />

              <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label="Home"
                size={11}
                color={colors.gray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={"Rewards"}
        component={Rewards}
        options={{
          headerShown: false,
          tabBarLabel: () => null, // Disables the label

          tabBarIcon: ({ color, focused }: any) => (
            <View style={{ ...styles.container, opacity: !focused ? 0.5 : 1 }}>
              <Image source={images.reward} style={styles.imageContainer} />

              <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label="Home"
                size={11}
                color={colors.gray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={"Friends"}
        component={Friends}
        options={{
          headerShown: false,
          tabBarLabel: () => null, // Disables the label

          tabBarIcon: ({ color, focused }: any) => (
            <View
              style={{
                ...styles.container,
                marginTop: verticalScale(3),
                opacity: !focused ? 0.5 : 1,
              }}
            >
              <Image
                source={images.faceEmoji}
                resizeMode="contain"
                style={
                  isiPad
                    ? styles.imageContainer
                    : {
                        width: moderateScale(22),
                        height: moderateScale(23),
                        marginBottom: verticalScale(15),
                      }
                }
              />

              <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label="Friends"
                size={11}
                color={colors.gray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={"LeaderBoard"}
        component={LeaderBoard}
        options={{
          headerShown: false,
          tabBarLabel: () => null, // Disables the label

          tabBarIcon: ({ color, focused }: any) => (
            <View
              style={{
                width: horizontalScale(70),
                alignItems: "center",
                opacity: !focused ? 0.5 : 1,
              }}
            >
              <Image
                source={images.leaderboard}
                style={styles.imageContainer}
                resizeMode="contain"
              />

              <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label="Leaderboard"
                size={10}
                color={colors.gray}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(50),
    alignItems: "center",
    // marginBottom: verticalScale(10),
  },
  imageContainer: {
    width: moderateScale(30),
    height: moderateScale(30),
    marginBottom: verticalScale(10),
  },
});
