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

const RequestChallengeContainer = ({ navigation, item }: any) => {
  const isiPad = DeviceInfo.getModel().includes("iPad");

  return (
    <View
      style={{
        ...appStyles.row,
        marginVertical: verticalScale(15),
        alignItems: "center",
        justifyContent:"space-between",
        width:"100%"
      }}
    >
      <View style={{...appStyles.row,
             gap: isiPad ? horizontalScale(20) : horizontalScale(30),

      }}>
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
            source={images.user4}
          />
        </View>
      </View>

      <View style={{ gap: verticalScale(10),  }}>
        <CustomText
          size={17}
          fontFam={fonts.medium}
          fontWeight="500"
          color={colors.gray}
          text={"Zakerrrr"}
        />
        <CustomText
          size={15}
          fontFam={fonts.regular}
          fontWeight="400"
          color={colors.gray}
          text={"@zakerr"}
        />
      </View>

     

      </View>

      <View style={{ gap: verticalScale(10),marginRight:"20%",alignItems:"center" }}>
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
      </View>
     
    </View>
  );
};
export default RequestChallengeContainer;
