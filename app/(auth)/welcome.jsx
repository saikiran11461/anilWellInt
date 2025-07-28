import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRight, Users, LogIn } from 'lucide-react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

const { height } = Dimensions.get('window');

export default function WelcomeScreen() {
  const handleLoginPress = () => {
    router.push('/login');
  };

  const handleGuestPress = () => {
    router.push('/(tabs)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800' }}
        style={styles.background}
      >
        <View style={styles.overlay}>
          {/* Header */}
          <Animated.View entering={FadeInDown.delay(200)} style={styles.header}>
            <Text style={styles.logo}>ANIWELL</Text>
            <Text style={styles.tagline}>INTERIOR DESIGN</Text>
          </Animated.View>

          {/* Main Content */}
          <View style={styles.content}>
            <Animated.View entering={FadeInUp.delay(400)} style={styles.welcomeSection}>
              <Text style={styles.welcomeTitle}>Welcome to</Text>
              <Text style={styles.welcomeSubtitle}>Your Dream Space</Text>
              <Text style={styles.description}>
                Transform your home with our award-winning interior designers. 
                Create spaces that inspire and reflect your unique style.
              </Text>
            </Animated.View>

            {/* Action Buttons */}
            <Animated.View entering={FadeInUp.delay(600)} style={styles.buttonContainer}>
              <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
                <LinearGradient
                  colors={['#E85A00', '#FF8C42']}
                  style={styles.loginButtonGradient}
                >
                  <LogIn size={20} color="#FFFFFF" />
                  <Text style={styles.loginButtonText}>Login to Account</Text>
                  <ArrowRight size={20} color="#FFFFFF" />
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={styles.guestButton} onPress={handleGuestPress}>
                <Users size={20} color="#FFFFFF" />
                <Text style={styles.guestButtonText}>Continue as Guest</Text>
                <ArrowRight size={20} color="#FFFFFF" />
              </TouchableOpacity>
            </Animated.View>

            {/* Features */}
            <Animated.View entering={FadeInUp.delay(800)} style={styles.features}>
              <View style={styles.feature}>
                <Text style={styles.featureNumber}>500+</Text>
                <Text style={styles.featureLabel}>Projects</Text>
              </View>
              <View style={styles.featureDivider} />
              <View style={styles.feature}>
                <Text style={styles.featureNumber}>4.9★</Text>
                <Text style={styles.featureLabel}>Rating</Text>
              </View>
              <View style={styles.featureDivider} />
              <View style={styles.feature}>
                <Text style={styles.featureNumber}>15+</Text>
                <Text style={styles.featureLabel}>Designers</Text>
              </View>
            </Animated.View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 3,
  },
  tagline: {
    fontSize: 12,
    color: '#FFB627',
    letterSpacing: 2,
    marginTop: 4,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeSection: {
    alignItems: 'center',
    marginBottom: 60,
  },
  welcomeTitle: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '300',
    textAlign: 'center',
  },
  welcomeSubtitle: {
    fontSize: 42,
    color: '#FFFFFF',
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 8,
    letterSpacing: -1,
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24,
    opacity: 0.9,
    marginTop: 16,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
    marginBottom: 40,
  },
  loginButton: {
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#E85A00',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  loginButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    gap: 12,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  guestButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 16,
    paddingVertical: 18,
    gap: 12,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  guestButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  features: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 32,
    paddingVertical: 20,
    borderRadius: 20,
    gap: 24,
  },
  feature: {
    alignItems: 'center',
  },
  featureNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  featureLabel: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.8,
    marginTop: 4,
    fontWeight: '500',
  },
  featureDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
});