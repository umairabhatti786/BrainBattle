import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { appStyles } from "../../../utils/appStyles";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../utils/Mertics";
import { images } from "../../../assets";
import CustomText from "../../../components/CustomText";
import { fonts } from "../../../utils/fonts";
import { colors } from "../../../utils/colors";
import DeviceInfo from "react-native-device-info";
import { ShadowedView } from 'react-native-fast-shadow';

const FindFriendsContainer = ({ navigation, item }: any) => {
  const isiPad = DeviceInfo.getModel().includes("iPad");

  return (
    <View
      style={{
        ...appStyles.row,
        marginVertical: verticalScale(10),
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingLeft: horizontalScale(10),
        //   backgroundColor:"red"
      }}
    >
      <View
        style={{
          ...appStyles.row,
          gap: isiPad ? horizontalScale(10) : horizontalScale(10),
        }}
      >
        <View>
          <View
            style={{
              width: moderateScale(50),
              height: moderateScale(50),
              borderRadius: moderateScale(50),

              overflow: "hidden",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
              source={item.image}
            />
          </View>
          {item.monsterBadge && (
            <ShadowedView
            style={{
              shadowOpacity: 0.5,
              shadowRadius: 10,
              elevation:5,
              shadowColor:"#530182",
              shadowOffset: {
                width: 5,
                height: 5,
              },
            }}
          >
                      <Image
              style={{
                width: moderateScale(35),
                height: moderateScale(35),
                position: "absolute",
                left: horizontalScale(-10),
                bottom: verticalScale(-14),
             
                
              }}
              resizeMode="contain"
              source={item.monsterBadge}
            />
            </ShadowedView>
            // <View
            // style={{
            //     elevation: 5,
            //     shadowColor:  "#bf90db",
            //     shadowOffset: { width: 0, height: 30 },
            //     shadowOpacity: 0.5,
            //     shadowRadius: 3,
            // }}
            // >
            //          <Image
            //   style={{
            //     width: moderateScale(35),
            //     height: moderateScale(35),
            //     position: "absolute",
            //     left: horizontalScale(-10),
            //     bottom: verticalScale(-14),
             
                
            //   }}
            //   resizeMode="contain"
            //   source={item.monsterBadge}
            // />
            //     </View>
       
          )}

          {item?.tagBadge && (
            <View
              style={{
                width: moderateScale(25),
                height: moderateScale(25),
                position: "absolute",
                left: isiPad ? horizontalScale(-8) : horizontalScale(-10),
                bottom: verticalScale(-8),
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                // resizeMode="contain"
                source={item.tagBadge}
              />
              <View
                style={{
                  position: "absolute",
                  bottom: verticalScale(5),
                  left: isiPad ? horizontalScale(5) : horizontalScale(6),
                }}
              >
                <CustomText
                  size={7}
                  fontFam={fonts.regular}
                  fontWeight="400"
                  color={colors.black}
                  text={"#52"}
                />
              </View>
            </View>
          )}
          <Image
            style={{
              width: moderateScale(30),
              height: moderateScale(30),
              position: "absolute",
              right: horizontalScale(-8),
              bottom: verticalScale(-12),
            }}
            resizeMode="contain"
            source={item.rooseveltBadge}
          />
        </View>

        <View style={{ gap: verticalScale(5) }}>
          <View style={{ ...appStyles.row, gap: horizontalScale(5) }}>
            <CustomText
              size={14}
              fontFam={fonts.semiBold}
              fontWeight="600"
              color={colors.black}
              text={"Community Name here"}
            />
            <Image
              style={{ width: moderateScale(15), height: moderateScale(15) }}
              resizeMode="contain"
              source={images.verified}
            />
          </View>

          <CustomText
            size={15}
            fontFam={fonts.regular}
            fontWeight="400"
            color={colors.black}
            text={"1.1M followers"}
          />
        </View>
      </View>
      <Image
        style={{ width: moderateScale(15), height: moderateScale(15) }}
        resizeMode="contain"
        source={images.add}
      />

      {/* <View style={{ gap: verticalScale(10),marginRight:"20%",alignItems:"center" }}>
          <View style={{paddingHorizontal:horizontalScale(22),backgroundColor:"#E5E5E5",paddingVertical:verticalScale(10),borderRadius:moderateScale(30)}}>
          <CustomText
            size={17}
            fontFam={fonts.medium}
            fontWeight="600"
            color={colors.black}
            text={"VS"}
          />
  
          </View>
        
          <View
            style={{
              paddingVertical: horizontalScale(1),
              backgroundColor: "#E5E5E5",
              // paddingHorizontal:horizontalScale(-20),
              width: moderateScale(60),
              // zIndex: 999,
              borderRadius: horizontalScale(30),
              alignItems:"center",
              // justifyContent:"center"
              // paddingHorizontal:moderateScale(20)
            }}
          >
            <CustomText
              size={13}
              fontFam={fonts.medium}
              fontWeight="600"
              color={colors.black}
              text={"4-2"}
            />
          </View>
        </View> */}
    </View>
  );
};
export default FindFriendsContainer;
