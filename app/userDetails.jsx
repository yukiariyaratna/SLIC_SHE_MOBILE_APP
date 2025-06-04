import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function UserDetailsScreen() {
  const menuItems = [
    { icon: 'person', label: 'View / Edit Profile', route: '/profile' },
    { icon: 'settings', label: 'Settings', route: '/settings' },
    { icon: 'help', label: 'Help', route: '/help' },
    { icon: 'shield', label: 'Privacy Policy', route: '/privacy-policy' },
    { icon: 'call', label: 'Contact Us', route: '/contact' },
    { icon: 'newspaper', label: 'Corporate News', route: '/news' },
    { icon: 'log-out', label: 'Logout', route: '/loginRequestOTP' }
  ];

  return (
    <LinearGradient
      colors={['#FFFFFF', '#B2EBF2', '#80DEEA']}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <IconSymbol name="arrow-back" size={24} color="#006A5B" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.profileImage}>
          <Image
            source={require('@/assets/images/default-avatar.png')}
            style={styles.avatar}
          />
        </View>
        
        <ThemedText style={styles.userName}>Mr. Sanjeewa De Silva</ThemedText>
      </View>

      <View style={styles.menuList}>
        {menuItems.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.menuItem}
            onPress={() => {
              if (item.label === 'Logout') {
                router.replace(item.route);
              } else {
                router.push(item.route);
              }
            }}
          >
            <View style={styles.iconContainer}>
              <IconSymbol name={item.icon} size={24} color="#006A5B" />
            </View>
            <ThemedText style={styles.menuItemText}>{item.label}</ThemedText>
          </TouchableOpacity>
        ))}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  backButton: {
    padding: 8,
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 106, 91, 0.1)',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#B2EBF2',
    overflow: 'hidden',
    marginBottom: 12,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#006A5B',
  },
  menuList: {
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 106, 91, 0.1)',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(178, 235, 242, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuItemText: {
    fontSize: 16,
    color: '#006A5B',
  }
});