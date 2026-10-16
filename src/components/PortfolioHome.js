import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Linking,
  Animated,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import useResponsive from '../hooks/useResponsive';

const profileImage = require('../../assets/Profile.jpeg');

export default function PortfolioHome({ theme, toggle }) {
  const { isSmall } = useResponsive();
  const scale = useRef(new Animated.Value(1)).current;

  const showPersonalInfo = () => {
    Alert.alert(
      'Personal Info',
      `Name: Jefferson T. Daniel\nCourse: BSIT\nSchool: Holy Child Central Colleges Inc.\nLocation: Zone 3 Carnation St., Surallah, South Cotabato\nPhone: 09056437339\nEmail: jeffkaneki121@gmail.com`,
    );
  };

  const openLink = async url => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) await Linking.openURL(url);
      else Alert.alert('Cannot open link', url);
    } catch (e) {
      Alert.alert('Error', String(e));
    }
  };

  const onPressIn = () => {
    Animated.spring(scale, { toValue: 1.08, useNativeDriver: true }).start();
  };
  const onPressOut = () => {
    Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
  };

  const cardScale = useRef(new Animated.Value(1)).current;
  const cardPressIn = () => Animated.spring(cardScale, { toValue: 1.03, useNativeDriver: true }).start();
  const cardPressOut = () => Animated.spring(cardScale, { toValue: 1, useNativeDriver: true }).start();

  const containerBg = theme === 'dark' ? '#000' : '#f2f2f2';
  const textColor = theme === 'dark' ? '#fff' : '#111';

  const nameSize = isSmall ? 22 : 32;
  const titleSize = isSmall ? 14 : 16;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: containerBg }]}> 
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.homeSection}>
          <View style={styles.homeText}>
            <Text style={[styles.smallGreeting, { color: textColor }]}>Hi, I'm</Text>
            <Text style={[styles.mainName, { color: textColor }]}>Jefferson <Text style={styles.highlight}>Daniel.</Text></Text>
            <Text style={[styles.subTitle, { color: textColor }]}>A BSIT student from Holy Child Central Colleges Inc.</Text>
            <Text style={[styles.role, { color: textColor }]}>Aspiring App Developer</Text>

            <View style={styles.heroActions}>
              <TouchableOpacity onPress={toggle} style={styles.actionBtn}>
                <Text style={styles.actionBtnText}>{theme === 'dark' ? '🌙 Theme' : '☀️ Theme'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={showPersonalInfo} style={styles.actionBtn}>
                <Text style={styles.actionBtnText}>👤 Info</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut} onPress={() => {}}>
            <Animated.Image source={profileImage} style={[isSmall ? styles.avatarSmall : styles.avatar, { transform: [{ scale }] }]} />
          </TouchableWithoutFeedback>
        </View>

        <View style={[styles.sectionCard, { backgroundColor: theme === 'dark' ? '#222' : '#fff' }] }>
          <Text style={[styles.sectionTitle, { color: textColor }]}>About Me</Text>
          <Text style={[styles.paragraph, { color: textColor }]}>I'm from Zone 3 Carnation St., Surallah, South Cotabato. Studying at Holy Child Central Colleges Inc. I chose BSIT because it's connected to my dream on becoming a game developer. I want to develop a First Person Shooter games that fits my expectations.</Text>
          <Text style={[styles.subTitle, { color: textColor }]}>Educational Background</Text>
          <View style={styles.list}> 
            <Text style={[styles.listItem, { color: textColor }]}>• Surallah Central Elementary School</Text>
            <Text style={[styles.listItem, { color: textColor }]}>• Libertad National High School</Text>
            <Text style={[styles.listItem, { color: textColor }]}>• Holy Child Central Colleges, Inc</Text>
          </View>
        </View>

        <View style={[styles.sectionCard, { backgroundColor: theme === 'dark' ? '#222' : '#fff' }] }>
          <Text style={[styles.sectionTitle, { color: textColor }]}>My Skills:</Text>
          <View style={styles.list}>
            <Text style={[styles.listItem, { color: textColor }]}>• Photo/Video Editing</Text>
            <Text style={[styles.listItem, { color: textColor }]}>• Videography</Text>
            <Text style={[styles.listItem, { color: textColor }]}>• Photography</Text>
            <Text style={[styles.listItem, { color: textColor }]}>• Vibe Coding</Text>
          </View>
        </View>

        <View style={[styles.sectionCard, { backgroundColor: theme === 'dark' ? '#222' : '#fff' }] }>
          <Text style={[styles.sectionTitle, { color: textColor }]}>My Projects</Text>
          <Animated.View style={{ transform: [{ scale: cardScale }] }}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPressIn={cardPressIn}
              onPressOut={cardPressOut}
              style={styles.projectCard}
              onPress={() => openLink('https://jeffkaneki.github.io/RestoHub/loginUI.html')}
            >
              <Text style={[styles.cardTitle, { fontSize: titleSize }]}>RESTAURANT MANAGEMENT SYSTEM</Text>
              <Text style={[styles.cardDesc, { color: textColor }]}>A system that handles most of the restaurant tasks to help ease their lives.</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{ transform: [{ scale: cardScale }] }}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPressIn={cardPressIn}
              onPressOut={cardPressOut}
              style={styles.projectCard}
              onPress={() => openLink('https://jeffkaneki.github.io/Portfolio/')}
            >
              <Text style={[styles.cardTitle, { fontSize: titleSize }]}>PORTFOLIO</Text>
              <Text style={[styles.cardDesc, { color: textColor }]}>A Project that shows my portfolio, projects, skills, and descriptions about me.</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{ transform: [{ scale: cardScale }] }}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPressIn={cardPressIn}
              onPressOut={cardPressOut}
              style={styles.projectCard}
              onPress={() => openLink('https://jeffkaneki.github.io/JeffPhotography/')}
            >
              <Text style={[styles.cardTitle, { fontSize: titleSize }]}>JEFF PHOTOGRAPHY</Text>
              <Text style={[styles.cardDesc, { color: textColor }]}>A Website for my photography business showing the photos that I have taken.</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        <View style={[styles.sectionCard, { backgroundColor: theme === 'dark' ? '#222' : '#fff' }] }>
          <Text style={[styles.sectionTitle, { color: textColor }]}>Contact Me</Text>
          <Text style={[styles.paragraph, { color: textColor }]}>Phone Number: 09056437339</Text>
          <Text style={[styles.paragraph, { color: textColor }]}>Facebook: Jefferson T. Daniel</Text>
          <Text style={[styles.paragraph, { color: textColor }]}>Email: jeffkaneki121@gmail.com</Text>
        </View>

        <View style={styles.footer}>
          <Text style={{ color: textColor }}>© 2026 Jefferson T. Daniel. All rights reserved.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heroActions: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 8,
  },
  actionBtn: {
    backgroundColor: 'orange',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
  },
  actionBtnText: { color: '#000', fontWeight: '700' },
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  homeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  homeText: {
    flex: 1,
    paddingRight: 12,
  },
  smallGreeting: { fontSize: 16 },
  mainName: { fontSize: 32, fontWeight: '800' },
  highlight: { backgroundColor: 'orange', color: '#000', paddingHorizontal: 6, borderRadius: 6 },
  subTitle: { fontSize: 14, marginTop: 6 },
  role: { fontSize: 16, marginTop: 4 },
  avatar: { width: 160, height: 160, borderRadius: 80 },
  avatarSmall: { width: 110, height: 110, borderRadius: 55 },
  sectionCard: {
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  sectionTitle: { fontSize: 20, fontWeight: '700', marginBottom: 8 },
  paragraph: { fontSize: 14, lineHeight: 20 },
  list: { marginTop: 8 },
  listItem: { fontSize: 14, marginBottom: 4 },
  projectCard: {
    backgroundColor: 'orange',
    padding: 14,
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: { fontWeight: '700', color: '#000' },
  cardDesc: { fontSize: 13 },
  footer: { alignItems: 'center', paddingVertical: 18 },
});
