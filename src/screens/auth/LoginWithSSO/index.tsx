import {Image, SafeAreaView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GradientLayout from '../../../components/GradientLayout';
import {images} from '../../../assets';
import CustomButton from '../../../components/CustomButtom';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';
import {windowHeight, windowWidth} from '../../../utils/Dimensions';
import {appStyles} from '../../../utils/appStyles';
import CustomText from '../../../components/CustomText';
import CustomInput from '../../../components/CustomInput';
const LoginWithSSO = ({navigation}:any) => {
  return (
    <GradientLayout>
      <View style={{flex: 1, alignItems: 'center', padding: 20}}>
        <View style={{marginTop:"10%"}}>
          <Image
            style={{width: windowWidth / 2, height: windowHeight / 5}}
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
          <CustomButton
            text="Continue with Apple"
            width={'100%'}
            fontWeight={'700'}
            fontFam={fonts.bold}
            onPress={()=>navigation.navigate("ChooseGuide")}
            icon={images.apple}
            textColor={colors.black}
            bgColor={colors.white}
          />
          <CustomButton
            text="Continue with Google"
            width={'100%'}
            fontWeight={'700'}
            fontFam={fonts.bold}
            icon={images.google}
            bgColor={colors.gray}
          />
          <CustomButton
            text="Continue with Facebook"
            width={'100%'}
            fontWeight={'700'}
            fontFam={fonts.bold}
            icon={images.facebook}
            bgColor={colors.gray}
          />
          <View style={{...appStyles.rowjustify, gap: 15,marginHorizontal:20}}>
            <View style={{flex: 1, backgroundColor: colors.gray, height: 1}} />
            <CustomText label="or" size={18} 
            color={colors.gray}
            />
            <View style={{flex: 1, backgroundColor: colors.gray, height: 1}} />
          </View>

          <CustomInput
              placeholder="Email Address"
              value={""}
            //   onChangeText={(txt: string) => {
            //     setValues({ ...values, password: txt });
            //   }}
            //   isPassword={showPassword}
            //   onShowPassword={() => setShowPAssword(!showPassword)}
            //   source={showPassword ? images.eyeclose : images.eye}
            />

<CustomButton
            text="Continue with Email"
            width={'100%'}
            onPress={()=>navigation.navigate("LoginWithEmail")}
            fontWeight={'700'}
            fontFam={fonts.bold}
            bgColor={colors.gray}
          />
        </View>
      </View>
    </GradientLayout>
  );
};
export default LoginWithSSO;
