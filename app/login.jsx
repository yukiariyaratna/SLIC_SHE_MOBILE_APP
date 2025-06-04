import React, { useState } from 'react';
import {
  Linking,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LoginAPI from '@/apis/loginApi';
// import { LoginAPI } from '../apis/login.js'

export default function Login() {
  const [nic, setNIC] = useState('');
  const [mobile, setMobile] = useState('');
  const [savePassword, setSavePassword] = useState(false);

  const makePhoneCall = () => {
    Linking.openURL('tel:0112252596').catch(err => {
      console.error('Phone call error:', err);
    });
  };

  const handleRequestOTP = () => {
    LoginAPI();
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
              placeholder="User Name"
              style={styles.input}
              value={nic}
              onChangeText={setNIC}
              placeholderTextColor="#666"
            />
            <TextInput
              placeholder="Password"
              keyboardType="numeric"
              style={styles.input}
              value={mobile}
              onChangeText={setMobile}
              placeholderTextColor="#666"
            />

            <TouchableOpacity
              style={styles.button}
              onPress={handleRequestOTP}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* Save Password */}
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => setSavePassword(!savePassword)}
            >
              <View style={[styles.checkbox, savePassword && styles.checkboxChecked]}>
                {savePassword && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.checkboxText}>Save Password</Text>
            </TouchableOpacity>



            {/* Footer */}
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
    alignItems: 'center',marginTop:120
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
    marginBottom:100,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'rgba(23,171,183,1)',
    borderRadius: 3,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: 'rgba(23,171,183,1)',
  },
  checkmark: {
    color: '#fff',
    fontSize: 12,
  },
  checkboxText: {
    fontSize: 16,
    color: 'rgba(19, 100, 109, 0.75)',
  },
  footerContainer: {
    alignItems: 'center',
    // marginTop: 10,
  },
  troubleText: {
    marginTop:100,
    fontSize: 15,
    color: 'rgba(23,171,183,1)',
  },
  footer: {
    marginTop: 5,
    fontSize: 16,
    color: 'rgba(19,100,109,1)',
   
  },
});