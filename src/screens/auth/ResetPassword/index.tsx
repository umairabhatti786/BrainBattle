import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import GradientLayout from '../../../components/GradientLayout';
import {images} from '../../../assets';
import CustomButton from '../../../components/CustomButtom';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';
import {windowHeight, windowWidth} from '../../../utils/Dimensions';
import CustomInput from '../../../components/CustomInput';
const ResetPassword = ({navigation}: any) => {
  return (
    <GradientLayout>
      <View style={{flex: 1, padding: 20}}>
        <View style={{marginTop: '2%'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{width: 55, height: 55}}
              resizeMode="contain"
              source={images.back}
            />
          </TouchableOpacity>
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
        <View style={{gap: 17, width: '100%', marginTop: -20}}>
          <CustomInput placeholder="Email Address" value={''} />

          <CustomButton
            text="Reset Password"
            width={'100%'}
            fontWeight={'700'}
            fontFam={fonts.bold}
            bgColor={colors.gray}
          />
        </View>
      </View>
    </GradientLayout>
  );
};
export default ResetPassword;
