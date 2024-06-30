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
const ChooseLanguage = ({navigation}: any) => {
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
            alignItems: 'center',
          }}>
          <CustomText
            fontFam={fonts.regular}
            fontWeight="700"
            label="Choose Your Language"
            size={27}
            style={{marginBottom: 10}}
            color={colors.gray}
          />

          <DropDown
            placeholder={'Make a Selection'}
            dropWidth={'100%'}
            setValue={setSelectedLanguage}
            value={selectedLanguage}
            //   data={data}
            data={languageData.map((item, _index) => {
              return {
                id: item?.id,
                label: item?.value,
                value: item?.value,
              };
            })}
          />
        </View>
      </View>

      <CustomButton
        text="Lets go!"
        width={'40%'}
        borderRadius={15}
        size={16}
        onPress={()=>navigation.navigate("EnablePermissions")}

        fontWeight={"bold"}
        fontFam={fonts.bold}
        style={{alignSelf: 'center'}}
      />
      <View style={{marginBottom: 40}} />
    </GradientLayout>
  );
};
export default ChooseLanguage;

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
