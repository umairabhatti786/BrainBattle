import { Pressable, Text, TouchableOpacity, View,ActivityIndicator, Image } from "react-native";
import { colors } from "../utils/colors";
import CustomText from "./CustomText";
import { fonts } from "../utils/fonts";
import { appStyles } from "../utils/appStyles";


type Props = {
  text?: string;
  onPress?: any;
  width?: any;
  height?: number;
  size?: number;
  fontFam?: any;
  elevation?: number;
  borderRadius?: number;
  style?: any;
  bgColor?: any;
  textColor?: any;
  borderColor?: any;
  notRequiredShadow?: boolean;
  disable?: boolean;
  isLoading?: boolean;
  paddingHorizontal?:any
  fontWeight?:any
  borderWidth?:number
  icon?:any
  alignItems?:any
};

const CustomButton = ({
  text,
  onPress,
  width,
  height,
  size,
  fontFam,
  elevation,
  borderRadius,
  style,
  bgColor,
  textColor,
  borderColor,
  notRequiredShadow,
  disable,
  isLoading,
  paddingHorizontal,
  fontWeight,
  borderWidth,
  icon,
  alignItems
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      activeOpacity={0.9}
      style={{
        ...style,
        width: width,
        height:   height||45,
        backgroundColor: bgColor || colors.black,
        justifyContent: "center",
        alignItems:alignItems || "center",
        paddingHorizontal:paddingHorizontal,
        borderRadius:borderRadius || 7,
        borderWidth:borderWidth ,
        borderColor: borderColor ,
        // paddingTop:5
      }}
    >
      {isLoading ? (
        <>
              <ActivityIndicator size={"large"} color={colors.white} />

        </>
      ) : (
        <View style={{...appStyles.row,gap:10}}>
            {
                icon&&(
                    <Image
                    source={icon}
                    style={{width:20,height:20}}
                    resizeMode="contain"
                    />

                )
            }
              <CustomText
          text={text}
          color={textColor || colors.white}
          fontWeight={ fontWeight ||"600"}
          size={size || 15}
          fontFam={fontFam ||fonts.medium}
        />

        </View>

      
      )}
    </TouchableOpacity>
  );
};
export default CustomButton;
