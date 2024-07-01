import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { images } from "../assets";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../utils/Mertics";
import { appStyles } from "../utils/appStyles";
import CustomText from "./CustomText";
import { fonts } from "../utils/fonts";
import DeviceInfo from "react-native-device-info";
import { colors } from "../utils/colors";

const GradientLayout = ({ children, color }: any) => {
  const isiPad = DeviceInfo.getModel().includes("iPad");

  return (
    <LinearGradient
      colors={[color || "#ECF6FF", color || "#FFFFFF"]}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={
            isiPad
              ? styles.iPadCircleContainer
              : {
                  position: "absolute",
                  width: horizontalScale(200),
                  height: verticalScale(180),
                  left: horizontalScale(-40),
                  // top: Platform.OS == "ios" ? 50 : 0,
                  alignItems: "flex-end",
                }
          }
        >
          <Image
            resizeMode="contain"
            style={{ width: "100%", height: "100%", position: "absolute" }}
            source={images.circle}
          />
          <View
            style={
              isiPad
                ? {
                    ...appStyles.row,
                    ...styles.iPadInnerTextContainer,
                  }
                : {
                    ...appStyles.row,
                    ...styles.innerTextContainer,
                  }
            }
          >
            <Image
              resizeMode="contain"
              style={{ width: moderateScale(25), height: moderateScale(25) }}
              source={images.faceEmoji}
            />
            <CustomText
              size={29}
              fontFam={fonts.medium}
              color="#3D3131"
              text={"Friends"}
            />
          </View>
        </View>

        <View
          style={{
           
            alignSelf: "flex-end",
            marginRight: horizontalScale(30),
            gap: horizontalScale(12),
            ...appStyles.row,
            marginTop:  isiPad? verticalScale(20):Platform.OS=="ios"?verticalScale(60):verticalScale(10),
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: colors.black,
              borderRadius: 50,
              paddingHorizontal: horizontalScale(17),
              paddingVertical: verticalScale(3),
              flexDirection: "row",
              alignItems: "center",
              gap: horizontalScale(7),
              backgroundColor: colors.white,
              elevation: 5,
              shadowColor:  colors.black,
              shadowOffset: { width: 0, height: isiPad?  5:2 },
              shadowOpacity: 0.5,
              shadowRadius: 3,
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: moderateScale(25), height: moderateScale(25) }}
              source={images.user1}
            />
            <CustomText
              size={18}
              fontFam={fonts.medium}
              color={colors.black}
              text={"1235"}
            />
          </View>

          <View>
            <Image
              resizeMode="contain"
              style={{ width: moderateScale(23), height: moderateScale(23) }}
              source={images.notification}
            />
            <View
              style={{
                width: moderateScale(22),
                height: moderateScale(22),
                borderRadius: 999,
                backgroundColor: colors.red,
                position: "absolute",
                top: verticalScale(-8),
                right: horizontalScale(-7),
                alignItems:"center",
                justifyContent:"center"
              }}
            >
              <CustomText
              size={12}
           
              color={colors.white}
              text={"12"}
            />


            </View>
          </View>
        </View>

        {children}
      </View>
    </LinearGradient>
  );
};
export default GradientLayout;

const styles = StyleSheet.create({
  innerTextContainer: {
    gap: 10,
    marginTop: Platform.OS == "ios"?verticalScale(65):verticalScale(25),
    paddingRight: Platform.OS == "ios" ? "9%" : horizontalScale(18),
  },
  iPadInnerTextContainer: {
    gap: 20,
    marginTop: verticalScale(35),
    paddingRight: "22%",
  },
  iPadCircleContainer: {
    position: "absolute",
    width: horizontalScale(185),
    height: verticalScale(185),
    left: horizontalScale(-40),
    // top: 20,
    alignItems: "flex-end",
  },
});

// const
