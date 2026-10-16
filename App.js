import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import PortfolioHome from './src/components/PortfolioHome';
import usePersistentTheme from './src/hooks/usePersistentTheme';

const Tab = createBottomTabNavigator();

function AboutScreen({ theme, toggle }) {
  const backgroundColor = theme === 'dark' ? '#000' : '#f2f2f2';
  const cardColor = theme === 'dark' ? '#1f1f1f' : '#ffffff';
  const textColor = theme === 'dark' ? '#ffffff' : '#111111';
  const mutedColor = theme === 'dark' ? '#d1d5db' : '#4b5563';

  return (
    <SafeAreaView style={[styles.screen, { backgroundColor }]}> 
      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.headerCard, { backgroundColor: cardColor }]}> 
          <Text style={[styles.eyebrow, { color: mutedColor }]}>About</Text>
          <Text style={[styles.title, { color: textColor }]}>Jefferson T. Daniel</Text>
          <Text style={[styles.subtitle, { color: mutedColor }]}>BSIT Student • Aspiring App Developer</Text>
          <TouchableOpacity onPress={toggle} style={styles.themeButton}>
            <Text style={styles.themeButtonText}>{theme === 'dark' ? '🌙 Dark Theme' : '☀️ Light Theme'}</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.sectionCard, { backgroundColor: cardColor }]}> 
          <Text style={[styles.sectionTitle, { color: textColor }]}>My Story</Text>
          <Text style={[styles.text, { color: textColor }]}> 
            I’m from Zone 3 Carnation St., Surallah, South Cotabato, and I’m currently studying at Holy
            Child Central Colleges Inc. I chose BSIT because it connects closely with my dream of becoming
            a game developer and building digital experiences that feel immersive and meaningful.
          </Text>
        </View>

        <View style={[styles.sectionCard, { backgroundColor: cardColor }]}> 
          <Text style={[styles.sectionTitle, { color: textColor }]}>Education</Text>
          <View style={styles.list}>
            <Text style={[styles.listItem, { color: textColor }]}>• Surallah Central Elementary School</Text>
            <Text style={[styles.listItem, { color: textColor }]}>• Libertad National High School</Text>
            <Text style={[styles.listItem, { color: textColor }]}>• Holy Child Central Colleges, Inc.</Text>
          </View>
        </View>

        <View style={[styles.sectionCard, { backgroundColor: cardColor }]}> 
          <Text style={[styles.sectionTitle, { color: textColor }]}>Interests</Text>
          <View style={styles.tagsRow}>
            {['Photography', 'Videography', 'Game Dev', 'App Design', 'Vibe Coding'].map(item => (
              <View key={item} style={[styles.tag, { backgroundColor: theme === 'dark' ? '#2b2b2b' : '#f3f4f6' }]}>
                <Text style={[styles.tagText, { color: textColor }]}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  const { theme, toggle } = usePersistentTheme();
  const tabBackground = theme === 'dark' ? '#252525' : '#f5f5f5';

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme === 'dark' ? '#fff' : '#111',
          tabBarInactiveTintColor: theme === 'dark' ? '#d7d7d7' : '#666',
          tabBarStyle: {
            backgroundColor: tabBackground,
            borderTopWidth: 0,
            paddingBottom: 8,
            paddingTop: 8,
            height: 64,
          },
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: '600',
          },
        }}
      >
        <Tab.Screen name="Profile">
          {() => <PortfolioHome theme={theme} toggle={toggle} />}
        </Tab.Screen>
        <Tab.Screen name="About">
          {() => <AboutScreen theme={theme} toggle={toggle} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 36,
  },
  headerCard: {
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 14,
  },
  themeButton: {
    alignSelf: 'flex-start',
    backgroundColor: 'orange',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
  },
  themeButtonText: {
    color: '#000',
    fontWeight: '700',
  },
  sectionCard: {
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
  },
  list: {
    gap: 6,
  },
  listItem: {
    fontSize: 15,
    lineHeight: 24,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 999,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
