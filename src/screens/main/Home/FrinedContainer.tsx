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

const FrinedContainer = ({ navigation, item }: any) => {
  const isiPad = DeviceInfo.getModel().includes("iPad");

  return (
    <View
      style={{
        ...appStyles.row,
        gap: isiPad?  horizontalScale(20):horizontalScale(30),
        marginVertical: verticalScale(15),
        // backgroundColor:"red",
        alignSelf:"flex-start",
        alignItems:"flex-start"
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
        </View>

      </View>
    

        <View style={{gap:verticalScale(10),marginTop:verticalScale(-5)}}>
        <CustomText
            size={17}
            fontFam={fonts.regular}
            fontWeight="500"
            color={colors.gray}
            text={item?.name}
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
export default FrinedContainer;
