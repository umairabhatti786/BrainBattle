import {
  Image,
  SafeAreaView,
  ScrollView,
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
import {RNCamera} from 'react-native-camera';
import {useRef, useEffect, useState} from 'react';
import {CameraPermissions} from '../../../utils/CameraPermissions';
import {appStyles} from '../../../utils/appStyles';
import CustomText from '../../../components/CustomText';

const Capture = ({navigation}: any) => {
  const cameraRef = useRef<RNCamera>();
  const [isCamera, setIsCamera] = useState(true);
  const {
    requestcameraPermission,
    hasPermission,
    checkCamPermission,
    checkGalleryPermission,
  } = CameraPermissions();

  useEffect(() => {
    requestcameraPermission();
  }, []);
  const [tellMeMore, setTellMeMore] = useState(false);
  const takePicture = async () => {
    if (cameraRef?.current) {
      try {
        const options = {
          quality: 0.5,
          height: 1620,
          width: 3072,
          // base64: true,
        };
        const data = await cameraRef?.current?.takePictureAsync(options);
        const {uri, width, height} = data;
        // const stats = await RNFS?.stat(uri);
        const type = uri?.substring(uri?.lastIndexOf('.') + 1);
        const fileName = uri?.split('/').pop();
        setIsCamera(!isCamera);

        // const imageData = {
        //   fileName: fileName,
        //   fileSize: stats?.size,
        //   width: height,
        //   height: width,
        //   name: fileName,
        //   path: stats?.path,
        //   type: type,
        //   uri: stats?.path,
        //   size: stats?.size,
        // };

        // setPath(stats.path);
        // setCaptured(true);
        // setData(imageData);
        // setIsPaused(false);
      } catch (e) {
        // alert(e.message);
      }
    }
  };

  return (
    <GradientLayout>
      {isCamera && (
        <RNCamera
          ref={cameraRef}
          style={{flex: 1}}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          // captureAudio={true}
          onRecordingEnd={() => console.log('EndRecord')}
        />
      )}

      {tellMeMore && (
        <Image
          resizeMode="contain"
          style={{
            width: 140,
            height: 140,
            position: 'absolute',
            top: 0,
            alignSelf: 'center',
          }}
          source={images.venlitext}
        />
      )}

      <View
        style={{
          position: 'absolute',
          bottom: '11.5%',
          width: '100%',
          flexDirection: 'row',
          height: windowHeight,
          gap: 4,
          left: 0,
          alignItems: 'flex-end',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: 30,
            left:5,
            gap:2
          }}>
          <Image
            resizeMode="contain"
            style={{
              width: 35,
              height: 35,
              position: 'absolute',
              right: -3,
              top: -22,
            }}
            source={images.tts}
          />

          <Image
            resizeMode="contain"
            style={{width: 90, height: 90}}
            source={images.logo}
          />

          <Image
            resizeMode="contain"
            style={{width: 40, height: 40}}
            source={images.cccaption}
          />
          <Image
            resizeMode="contain"
            style={{width: 35, height: 35, marginTop: 10}}
            source={images.headphone}
          />
        </View>
        <View></View>
        <View style={{width: '100%'}}>
          <View
            style={{
              minHeight: !tellMeMore ? '18%' : '55%',
              width: '72%',
              borderRadius: 15,
              backgroundColor: tellMeMore?colors.black:colors.black+"90",
              marginBottom: 10,
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}>
            <ScrollView>
              {!tellMeMore ? (
                <CustomText
                  fontFam={fonts.regular}
                  fontWeight="700"
                  lineHeight={21}
                  label="You’re looking at Vor Frue Kirke (The Church of Our Lady) in Copenhagen, a neoclassical masterpiece completed in 1829. 

                The tower features a distinctive.."
                  size={14}
                  color={colors.white}
                />
              ) : (
                <>
                  <View style={{gap: 20}}>
                    <CustomText
                      fontFam={fonts.regular}
                      fontWeight="700"
                      lineHeight={21}
                      label="You’re looking at Vor Frue Kirke (The Church of Our Lady) in Copenhagen, a neoclassical masterpiece completed in 1829. 

                The tower features a distinctive.."
                      size={14}
                      color={colors.white}
                    />

                    <CustomText
                      fontFam={fonts.regular}
                      fontWeight="700"
                      lineHeight={21}
                      label="It has a rich history dating back to its original construction in 1191. The current neoclassical structure was completed in 1829 after the previous building was destroyed by the British bombardment in 1807."
                      size={14}
                      color={colors.white}
                    />

                    <CustomText
                      fontFam={fonts.regular}
                      fontWeight="700"
                      lineHeight={21}
                      label="Inside, you'll find notable sculptures by Bertel Thorvaldsen, including a renowned statue of Christ and the Twelve Apostles. The church's minimalist yet grand design reflects the neoclassical architectural principles of harmony, clarity, and simplicity."
                      size={14}
                      color={colors.white}
                    />
                  </View>
                </>
              )}
            </ScrollView>

            {!tellMeMore && (
              <CustomButton
                text="Tell Me More"
                width={'40%'}
                borderRadius={30}
                height={30}
                size={12}
                onPress={() => {
                  setTellMeMore(true);
                }}

                fontWeight={'bold'}
                fontFam={fonts.bold}
                style={{alignSelf: 'flex-end'}}
              />
            )}
          </View>
          {tellMeMore && (
            <View
              style={{
                width: '72%',
                paddingHorizontal: 10,
                paddingVertical: 10,
                backgroundColor: colors.white20,
                borderWidth: 2,
                borderRadius: 12,
                marginBottom: 10,
              }}>
              <CustomText
                fontFam={fonts.regular}
                lineHeight={21}
                label="How many people lived in Copenhagen then? Why did Britain bomb them?."
                size={14}
                color={colors.black}
              />

              <CustomButton
                text="Send"
                width={'32%'}
                borderRadius={7}
                height={35}
                // size={12}
                onPress={() => {
                  setTellMeMore(true);
                }}
                fontWeight={'600'}
                // fontFam={fonts.bold}
                style={{alignSelf: 'flex-end', marginTop: 10}}
              />
            </View>
          )}
        </View>
      </View>

      <View
        style={{
          ...appStyles.row,
          position: 'absolute',
          bottom: 10,
          alignSelf: 'center',
          left:"40%",
          gap: 25,
        }}>
        <TouchableOpacity
          onPress={() => {
            if (!hasPermission) {
              checkCamPermission();
            }
            setIsCamera(!isCamera);
            takePicture();
          }}
          style={{
            width: 78,
            height: 78,
          }}>
          <Image
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
            source={images.camerarecording}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            if (!hasPermission) {
              checkCamPermission();
            }

            takePicture();
          }}
          style={{
            width: 78,
            height: 78,
          }}>
          <Image
            resizeMode="contain"
            style={{width: '100%', height: '100%'}}
            source={images.voicerecording}
          />
        </TouchableOpacity>
      </View>
    </GradientLayout>
  );
};
export default Capture;
