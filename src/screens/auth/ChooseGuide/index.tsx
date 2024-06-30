import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import GradientLayout from '../../../components/GradientLayout';
import {images} from '../../../assets';
import CustomButton from '../../../components/CustomButtom';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';
import {windowHeight, windowWidth} from '../../../utils/Dimensions';
import CustomInput from '../../../components/CustomInput';
import CustomText from '../../../components/CustomText';
const ChooseGuide = ({navigation}: any) => {
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
            label="Choose Your Guide"
            size={27}
            style={{marginBottom:10}}
            color={colors.gray}
          />

          <TouchableOpacity
                      onPress={()=>navigation.navigate("ChooseLanguage")}

            style={{...styles.chooseGuideContainer,    paddingVertical: 10,
            }}>
                <Image
            style={{
              width: 80,
              height: 80,
              alignSelf: 'center',
            }}
            resizeMode="contain"
            source={images.leo}
          />
          <View style={{gap:5,justifyContent:"center"}}>
           
          <CustomText
            fontFam={fonts.regular}
            fontWeight="700"
            label="Leo"
            style={{textAlign:"right"}}
            size={25}
            color={colors.lightwhite}
          />
            <CustomText
            fontFam={fonts.regular}
            fontWeight="700"
            label="History Buff"
            size={15}
            color={colors.lightwhite}
          />


          </View>

            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>navigation.navigate("ChooseLanguage")}
            style={{...styles.chooseGuideContainer,    paddingVertical: 3,
            }}>
                <Image
            style={{
              width: 80,
              height: 80,
              alignSelf: 'center',
            }}
            resizeMode="contain"
            source={images.luna}
          />
            <View style={{gap:5,justifyContent:"center"}}>
           
           <CustomText
             fontFam={fonts.regular}
             fontWeight="700"
             label="Luna"
             style={{textAlign:"right"}}
             size={25}
             color={colors.lightwhite}
           />
             <CustomText
             fontFam={fonts.regular}
             fontWeight="700"
             label="City Guide"
             size={15}
             color={colors.lightwhite}
           />
 
 
           </View>

            </TouchableOpacity>
        </View>
      </View>
    </GradientLayout>
  );
};
export default ChooseGuide;

const styles=StyleSheet.create({
    chooseGuideContainer:{   
    width: '67%',
    paddingHorizontal: 15,
    backgroundColor: colors.white20,
    borderRadius: 7,
    flexDirection:"row",
    justifyContent:"space-between"}

})
