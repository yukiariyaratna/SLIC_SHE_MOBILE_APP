import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
  Linking,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
// import Login from './login'
import { router } from 'expo-router';


export default function LoginRequestOTP({ navigation }) {
  const [nic, setNIC] = useState('');
  const [mobile, setMobile] = useState('');
  const [savePassword, setSavePassword] = useState(false);

  const makePhoneCall = () => {
    Linking.openURL('tel:0112252596').catch(err => {
      console.error('Phone call error:', err);
    });
  };

  const handlePress = () => {
    router.push("/login")
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#6DD3D3', '#FAFAFA']}
        style={styles.gradient}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Welcome</Text>

            <View style={styles.box}>
              <Text style={styles.subtitle}>SHE Digital</Text>
            </View>

            <TextInput
              placeholder="NIC"
              style={styles.input}
              value={nic}
              onChangeText={setNIC}
              placeholderTextColor="#666"
            />
            <TextInput
              placeholder="Mobile Number"
              keyboardType="numeric"
              style={styles.input}
              value={mobile}
              onChangeText={setMobile}
              placeholderTextColor="#666"
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('OTPVerification')}
            >
              <Text style={styles.buttonText}>Request OTP</Text>
            </TouchableOpacity>

     
           
     
            <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
              <Text style={styles.link} >
                <Text style={{ color: 'rgba(23,171,183,1)' }}>Already Registered?</Text>

                {/* <Link href='/login' style={{ marginHorizontal: 'auto' }} asChild> */}
                  <Pressable  onPress={handlePress}>
                    <Text  >Login</Text>
                  </Pressable>
                {/* </Link> */}
                
              </Text>
            </TouchableOpacity>

       
            <View style={styles.footerContainer}>
              <Text style={styles.troubleText}>Having Trouble?</Text>
              <TouchableOpacity onPress={makePhoneCall}>
                <Text style={styles.footer}>
                  <Text style={{ color: 'rgba(23,171,183,1)' }}>Contact us through</Text> 0112252596
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#6DD3D3',
  },
  gradient: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    padding: 20,
    alignItems: 'center',
    marginTop:120
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'rgba(19,100,109,1)',
    marginBottom: 16,
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Abhaya Libre ExtraBold',
  },
  box: {
    width: 269,
    height: 54,
    backgroundColor: 'rgba(255,0,0,1)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 32,
    color: 'white',
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Abhaya Libre ExtraBold',
  },
  input: {
    width: 300,
    height: 48,
    borderColor: '#6DD3D3',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 14,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'rgba(23,171,183,1)',
    paddingVertical: 14,
    borderRadius: 15,
    width: 300,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  
  link: {
    fontSize: 16,
    color: 'rgba(19,100,109,1)',
    textAlign: 'center',
    marginBottom: 30,
  },
  footerContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  troubleText: {
    fontSize: 15,
    color: 'rgba(23,171,183,1)',
    marginTop:135
  },
  footer: {
    marginTop: 5,
    fontSize: 16,
    color: 'rgba(19,100,109,1)',
  },
});