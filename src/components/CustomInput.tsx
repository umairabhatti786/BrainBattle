import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import CustomText from "./CustomText";
import { colors } from "../utils/colors";
import { windowWidth } from "../utils/Dimensions";
import { fonts } from "../utils/fonts";
type Props = {
  label?: string;
  placeholder?: string;
  error?: string;
  isPassword?: boolean;
  source?: any;
  keyboard?: any;
  props?: any;
  value?: any;
  onChangeText?: any;
  onBlur?: any;
  isCenter?: boolean;
  onShowPassword?: any;
  editable?: boolean;
  color?: string;
  maxLength?: number;
  leftSource?: any;
  fontWeight?: any;
  marginTop?: any;
  multiline?: boolean;
  height?: any;
  dropdown?: boolean;
  items?: any;
  setItems?: any;
  dropdownValue?: any;
  setDropdownValue?: any;
  open?: any;
  setOpen?: any;
  zIndex?: any;
  onOpen?: any;
  onClose?: any;
  disabled?: boolean;
  labelSize?:any
};

const CustomInput = ({
  label,
  placeholder,
  keyboard,
  isPassword,
  source,
  props,
  isCenter,
  fontWeight,
  marginTop,
  multiline,
  height,
  dropdown,
  open,
  value,
  onChangeText,
  onBlur,
  error,
  onShowPassword,
  editable,
  color,
  maxLength,
  leftSource,
  items,
  setItems,
  dropdownValue,
  setDropdownValue,
  setOpen,
  zIndex,
  onOpen,
  onClose,
  disabled,
  labelSize,
}: Props) => {

  return (
    <View style={{ ...props, }}>
     

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
         height: 55,

          alignItems:"center",
          borderRadius: 7,
          borderWidth:1.3,
          borderColor:colors.black
        }}
      >
      
        <View style={{ flex: 1 }}>
          {dropdown ? (
            <DropDownPicker
              zIndex={zIndex}
              style={{
                width: windowWidth / 1.1,
                marginTop: 4,
                alignSelf: "center",
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
              dropDownContainerStyle={{
                width: windowWidth / 1.1,
                alignSelf: "center",
                borderColor: colors.black,
                opacity:1,
                backgroundColor: colors.white20,
              }}
              open={open}
              
              disabled={disabled}
              onOpen={onOpen}
              onClose={onClose}
              value={dropdownValue}
              items={items}
              setOpen={setOpen}
              setValue={setDropdownValue}
              setItems={setItems}
              textStyle={{ color: colors.white,fontSize:15 }}
            //   ArrowDownIconComponent={CustomArrowIcon}
            />
          ) : (
            <TextInput
              value={value}
              editable={editable}
              style={{
                fontSize:15,
                width: windowWidth / 1.2,
                alignItems:"center",
                // paddingTop:20,
                fontFamily:fonts.regular,
                fontWeight: fontWeight,
                color: color || colors.black,
                ...(isCenter && { alignSelf: "center" }),
              }}
              placeholder={placeholder}
              multiline={multiline}
              placeholderTextColor={colors.black}
              keyboardType={keyboard}
              maxLength={maxLength}
              secureTextEntry={isPassword || false}
              onChangeText={onChangeText}
              onBlur={onBlur}
              autoCapitalize="none"
            />
          )}
        </View>
      
      </View>
    </View>
  );
};
export default CustomInput;
