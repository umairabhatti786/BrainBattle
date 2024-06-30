import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
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
const LoginWithEmail = ({navigation}: any) => {
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

          <CustomInput placeholder="Password" value={''} />

          <View style={{...appStyles.row, marginHorizontal: 10,}}>
            <TouchableOpacity
              style={{
                width: 17,
                height: 17,
                backgroundColor: colors.white,
                marginRight:10
              }}></TouchableOpacity>

            <CustomText
              fontFam={fonts.regular}
              fontWeight="400"
              label="I agree with Venli’s"
              size={16}
              color={colors.gray}
            />
            <CustomText
              fontFam={fonts.regular}
              fontWeight="400"
              label="Terms & Conditions"
              size={16}
              color={colors.blue}
            />
          </View>

          <CustomButton
            text="Continue with Email"
            width={'100%'}
            fontWeight={'700'}
            fontFam={fonts.bold}
            bgColor={colors.gray}
          />
           <CustomButton
            text="Forgot Password?"
            alignItems="flex-start"
            textColor={colors.blue}
            width={windowWidth/2.5}
            onPress={()=>navigation.navigate("ResetPassword")}
            fontWeight={'400'}
            fontFam={fonts.bold}
            bgColor={"transparent"}
          />
        </View>
      </View>
    </GradientLayout>
  );
};
export default LoginWithEmail;
