import { useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { colors } from '../utils/colors'
import CustomText from './CustomText'
import { images } from '../assets'
import { fonts } from '../utils/fonts'

const DropDown = ({
  data,
  value,
  placeholderColor,
  placeholder,
  dropWidth,
  borderWidth,
  onChangeDropDown,
  setValue
}:any) => {
  const [open, setOpen] = useState(false)


  const renderRightIcon = () => (
    <View style={styles.iconStyle}>
      <Image
        style={{ width: '100%', height: '100%' }}
        source={images.dropdown}
        resizeMode="contain"
      />

      {/* Your custom right icon component */}
      {/* Example: <Icon name="arrow-down" type="font-awesome" color="#000" /> */}
    </View>
  )

  return (
    <View style={styles.container}>
      <Dropdown
        style={{
          ...styles.dropdown,
          width: dropWidth || '100%',
          borderWidth: borderWidth || 1,
          
          // backgroundColor:"red"
        }}
        containerStyle={{
          backgroundColor: colors.white25,
          minHeight: 100,
          borderWidth: -1,
        

          width:"90%",
         
        }}
        placeholderStyle={{
          ...styles.placeholderStyle,
          color: placeholderColor || colors.black,
        }}
        // itemContainerStyle={{borderRadius:10,borderBottomWidth:1,borderColor:colors.placeholdeColor,marginVertical:5}}

        selectedTextStyle={{
          fontSize:16,
          color: colors.black,
          fontWeight:"bold",
          fontFamily:fonts.bold,
          alignSelf:"center"
        }}
        inputSearchStyle={styles.inputSearchStyle}
        // iconStyle={styles.iconStyle}
        renderRightIcon={renderRightIcon}
        itemTextStyle={styles.inputTextStyle}
        renderItem={(item) => {
          console.log('Itemdata', item)
          return (
            <View
              style={{
                height: 45,
                justifyContent: 'center',
                paddingHorizontal: 10,
                backgroundColor:colors.white25
              }}
            >
              <CustomText
                text={item.label}
                fontWeight={'400'}
                size={15}
                color={colors.black}
              />
            </View>
          )
        }}
        data={data}
        // search
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder={placeholder || 'Select'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        
        onChange={(item) => {
          console.log("AllValcnd",item)
          setValue(item.label);



        
          setOpen(false)
        }}
      />
    </View>
  )
}

export default DropDown
const styles = StyleSheet.create({
  container: {
    // width:300,

    backgroundColor: colors.white25,
    borderRadius: 10,
    height:45,
    width:"100%",
    alignItems:"center",
    justifyContent:"center"
  },
  dropdown: {
    // borderColor: colors.superLightGray,
    // borderColor: '#A0A2B1',
    borderRadius:10,
    height: 45,
    paddingHorizontal: 16,
    alignItems:"center",
    justifyContent:"center"
  },
  icon: {
    marginRight: 5,
  },
  iconStyle: {
    height:20,
    width:20,
  },
  inputSearchStyle: {
    color: colors.white,
    fontSize: 16,
    height: 40,
  },
  inputTextStyle: {
    // backgroundColor: 'red',
    color: colors.black,
    fontSize: 16,
  },
  label: {
    backgroundColor: colors.black,
    color: colors.black,
    fontSize: 14,
    left: 22,
    paddingHorizontal: 8,
    position: 'absolute',
    top: 8,
    zIndex: 999,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    color: colors.black,
    fontSize: 16,
  },
})
