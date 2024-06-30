import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GradientLayout from '../../../components/GradientLayout';
import {images} from '../../../assets';
import CustomButton from '../../../components/CustomButtom';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';
import {windowHeight, windowWidth} from '../../../utils/Dimensions';
import CustomInput from '../../../components/CustomInput';
import CustomText from '../../../components/CustomText';
import DropDown from '../../../components/DropDown';
import {useState} from 'react';
import {languageData} from '../../../utils/Data';
import {appStyles} from '../../../utils/appStyles';
const EnablePermissions = ({navigation}: any) => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  return (
    <GradientLayout>
      <View style={{flex: 1, padding: 20}}>
        <View style={{marginTop: '10%'}}>
          <Image
            style={{
              width: windowWidth / 2,
              height: windowHeight / 5,
              alignSelf: 'center',
              marginTop: -30,
            }}
            resizeMode="contain"
            source={images.logo}
          />

          <Image
            style={{
              width: windowWidth / 2.5,
              height: windowHeight / 5,
              marginTop: -30,
              alignSelf: 'center',
            }}
            resizeMode="contain"
            source={images.venlitext}
          />
        </View>
        <View
          style={{
            gap: 25,
            width: '100%',
            marginTop: -20,
          }}>
          <CustomText
            fontFam={fonts.regular}
            fontWeight="700"
            label="Enable Permissions"
            size={27}
            style={{marginBottom: 10, textAlign: 'center'}}
            color={colors.gray}
          />

          <View style={appStyles.row}>
            <View
              style={{
                gap: 20,
                height: windowHeight / 4.5,
                justifyContent:"space-around"
    
              }}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                }}
                resizeMode="contain"
                source={images.microphone}
              />
              <Image
                style={{
                  width: 60,
                  height: 60,
                  marginLeft: -10,
                }}
                resizeMode="contain"
                source={images.camera}
              />

              <Image
                style={{
                  width: 35,
                  height: 35,
                }}
                resizeMode="contain"
                source={images.send}
              />
            </View>

            <View
              style={{
                height: windowHeight / 4.5,
                borderRadius: 15,
                backgroundColor: colors.white20,
                width: '75%',
                marginLeft:20,
                paddingHorizontal:15,
                paddingVertical:10,
                gap:20,
                justifyContent:"space-around"

              }}>
                 <CustomText
            fontFam={fonts.regular}
            fontWeight="700"
            label="Ask Venli Questions"
            size={16}
            // style={{ textAlign: 'center'}}
            color={colors.black}
          />
               <CustomText
            fontFam={fonts.regular}
            fontWeight="700"
            label="Show Venli the world & what you want information on"
            size={16}
            style={{ marginTop:20}}
            color={colors.black}
          />
             <CustomText
            fontFam={fonts.regular}
            fontWeight="700"
            label="Let Venli know where in the world you are"
            size={16}
            // style={{ textAlign: 'center'}}
            color={colors.black}
          />

              </View>
          </View>
        </View>
      </View>

      <CustomButton
        text="Lets go!"
        width={'40%'}
        borderRadius={15}
        size={16}
        fontWeight={'bold'}
        onPress={() => navigation.navigate('Capture')}
        fontFam={fonts.bold}
        style={{alignSelf: 'center'}}
      />
      <View style={{marginBottom: 40}} />
    </GradientLayout>
  );
};
export default EnablePermissions;

const styles = StyleSheet.create({
  chooseGuideContainer: {
    width: '67%',
    paddingHorizontal: 15,
    backgroundColor: colors.white20,
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
