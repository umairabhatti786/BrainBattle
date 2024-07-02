import {
  Image,
  SafeAreaView,
  StyleSheet,
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

const GroupPartiesContainer = ({ navigation, item }: any) => {
  const isiPad = DeviceInfo.getModel().includes("iPad");

  return (
    <View
      style={{
        ...appStyles.row,
        gap: isiPad ? horizontalScale(20) : horizontalScale(30),
        marginVertical: verticalScale(10),
        // backgroundColor:"red",
        alignSelf: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <View>
        <View style={{...appStyles.row,backgroundColor:"#51B5FD",paddingVertical:verticalScale(4),borderRadius:moderateScale(22),paddingLeft:horizontalScale(2),}}>
          {item?.Parties.slice(0, 4).map((it: any, index: any) => (
            <View
              key={index}
              style={[
                styles.avatarContainer,
                { marginHorizontal: index>0? isiPad?horizontalScale(-15):  horizontalScale(-25):0 },
              ]}
            >
              <Image source={it.img} style={{width:"100%",height:"100%"}} />
            </View>
          ))}

<CustomText
          size={15}
          fontFam={fonts.semiBold}
          fontWeight="700"
          style={{marginLeft:isiPad ?horizontalScale(20):horizontalScale(35),marginRight:horizontalScale(10)}}
          color={colors.white}
          text={"+5"}
        />
        </View>

        {/* <View
            style={{
              width: moderateScale(50),
              height: moderateScale(50),
              borderRadius: moderateScale(50),
              overflow: "hidden",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={item?.image}
            />
  
          </View>
          <View style={{width:moderateScale(17),height:moderateScale(17),backgroundColor:"#49D65B",borderRadius:moderateScale(15),position:"absolute",bottom:verticalScale(5),right:horizontalScale(-3),zIndex:999}}/>
  
  
          <View
            style={{
              position: "absolute",
              top: verticalScale(-8),
              paddingVertical: horizontalScale(1),
              backgroundColor: "#E5E5E5",
              width: moderateScale(53),
              // zIndex: 999,
              borderRadius: horizontalScale(30),
              alignItems:"center",
              // justifyContent:"center"
              // paddingHorizontal:moderateScale(20)
            }}
          >
            <CustomText
              size={11}
              fontFam={fonts.bold}
              fontWeight="bold"
              color={colors.black}
              text={item?.friend}
            />
          </View> */}
      </View>

      <View style={{ gap: verticalScale(10), }}>
        <CustomText
          size={17}
          fontFam={fonts.regular}
          fontWeight="500"
          color={colors.gray}
          text={item?.title}
        />
        <CustomText
          size={15}
          fontFam={fonts.regular}
          fontWeight="500"
          color={colors.gray}
          text={item?.des}
        />
      </View>
    </View>
  );
};
export default GroupPartiesContainer;

const styles = StyleSheet.create({
  avatarContainer: {
    width: moderateScale(47),
    height: moderateScale(47),
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: moderateScale(3),
    borderColor: colors.black,
    overflow: "hidden",
  },
  avatarImage: {
    width: 42,
    height: 42,
  },
});
