import {Platform, SafeAreaView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientLayout = ({children,color}:any) => {
  return(

    <View style={{flex:1,}}>
        <LinearGradient colors={[ color|| '#FFF1E3',color || '#FFF1E3',color || '#FFCD9B']} style={{flex:1,paddingTop:Platform.OS=="ios"?50:10,}}>

            {children}

</LinearGradient>
    

    </View>

  )
  
  
}
export default GradientLayout;
