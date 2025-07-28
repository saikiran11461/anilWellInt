import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, ArrowRight } from 'lucide-react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
   
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert(
        'Login Successful',
        'Welcome back! Redirecting to your dashboard...',
        [{ text: 'OK', onPress: () => router.push('/(tabs)') }]
      );
    }, 1500);
  };

  const handleBack = () => {
    router.back();
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Password reset link will be sent to your email');
  };

  const handleSignUp = () => {
    Alert.alert('Sign Up', 'Sign up functionality coming soon!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800' }}
        style={styles.background}
      >
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <View style={styles.overlay}>
       
            <Animated.View entering={FadeInDown.delay(200)} style={styles.header}>
              <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <ArrowLeft size={24} color="#FFFFFF" />
              </TouchableOpacity>
              <View style={styles.headerContent}>
                <Text style={styles.logo}>ANIWELL</Text>
                <Text style={styles.tagline}>INTERIOR DESIGN</Text>
              </View>
              <View style={styles.placeholder} />
            </Animated.View>

        
            <View style={styles.formContainer}>
              <Animated.View entering={FadeInUp.delay(400)} style={styles.formCard}>
                <View style={styles.formHeader}>
                  <Text style={styles.formTitle}>Welcome Back</Text>
                  <Text style={styles.formSubtitle}>Sign in to your account</Text>
                </View>

                <View style={styles.form}>
            
                  <Animated.View entering={FadeInUp.delay(600)} style={styles.inputContainer}>
                    <Mail size={20} color="#6B7280" style={styles.inputIcon} />
                    <TextInput
                      style={styles.input}
                      placeholder="Email Address"
                      value={email}
                      onChangeText={setEmail}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      placeholderTextColor="#9CA3AF"
                    />
                  </Animated.View>

           
                  <Animated.View entering={FadeInUp.delay(700)} style={styles.inputContainer}>
                    <Lock size={20} color="#6B7280" style={styles.inputIcon} />
                    <TextInput
                      style={styles.input}
                      placeholder="Password"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry={!showPassword}
                      placeholderTextColor="#9CA3AF"
                    />
                    <TouchableOpacity 
                      style={styles.eyeButton}
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff size={20} color="#6B7280" />
                      ) : (
                        <Eye size={20} color="#6B7280" />
                      )}
                    </TouchableOpacity>
                  </Animated.View>

                  <Animated.View entering={FadeInUp.delay(800)} style={styles.forgotContainer}>
                    <TouchableOpacity onPress={handleForgotPassword}>
                      <Text style={styles.forgotText}>Forgot Password?</Text>
                    </TouchableOpacity>
                  </Animated.View>

             
                  <Animated.View entering={FadeInUp.delay(900)} style={styles.loginButtonContainer}>
                    <TouchableOpacity 
                      style={[styles.loginButton, isLoading && styles.loginButtonDisabled]} 
                      onPress={handleLogin}
                      disabled={isLoading}
                    >
                      <LinearGradient
                        colors={['#E85A00', '#FF8C42']}
                        style={styles.loginButtonGradient}
                      >
                        <Text style={styles.loginButtonText}>
                          {isLoading ? 'Signing In...' : 'Sign In'}
                        </Text>
                        {!isLoading && <ArrowRight size={20} color="#FFFFFF" />}
                      </LinearGradient>
                    </TouchableOpacity>
                  </Animated.View>

            
                  <Animated.View entering={FadeInUp.delay(1000)} style={styles.signupContainer}>
                    <Text style={styles.signupText}>Don't have an account? </Text>
                    <TouchableOpacity onPress={handleSignUp}>
                      <Text style={styles.signupLink}>Sign Up</Text>
                    </TouchableOpacity>
                  </Animated.View>
                </View>
              </Animated.View>

        
              <Animated.View entering={FadeInUp.delay(1100)} style={styles.features}>
                <View style={styles.feature}>
                  <Text style={styles.featureNumber}>500+</Text>
                  <Text style={styles.featureLabel}>Happy Clients</Text>
                </View>
                <View style={styles.featureDivider} />
                <View style={styles.feature}>
                  <Text style={styles.featureNumber}>4.9★</Text>
                  <Text style={styles.featureLabel}>Rating</Text>
                </View>
                <View style={styles.featureDivider} />
                <View style={styles.feature}>
                  <Text style={styles.featureNumber}>15+</Text>
                  <Text style={styles.featureLabel}>Expert Designers</Text>
                </View>
              </Animated.View>
            </View>
          </View>
        </KeyboardAvoidingView>
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
  keyboardView: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContent: {
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  tagline: {
    fontSize: 10,
    color: '#FFB627',
    letterSpacing: 1,
    marginTop: 2,
    fontWeight: '600',
  },
  placeholder: {
    width: 44,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  formCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 24,
    padding: 32,
    marginBottom: 32,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  formHeader: {
    alignItems: 'center',
    marginBottom: 32,
  },
  formTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  formSubtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  form: {
    gap: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderWidth: 2,
    borderColor: '#F3F4F6',
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
    paddingVertical: 16,
  },
  eyeButton: {
    padding: 4,
  },
  forgotContainer: {
    alignItems: 'flex-end',
    marginTop: -8,
  },
  forgotText: {
    fontSize: 14,
    color: '#E85A00',
    fontWeight: '600',
  },
  loginButtonContainer: {
    marginTop: 8,
  },
  loginButton: {
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#E85A00',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  loginButtonDisabled: {
    opacity: 0.7,
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
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  signupText: {
    fontSize: 14,
    color: '#6B7280',
  },
  signupLink: {
    fontSize: 14,
    color: '#E85A00',
    fontWeight: '600',
  },
  features: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 20,
    gap: 20,
  },
  feature: {
    alignItems: 'center',
  },
  featureNumber: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  featureLabel: {
    fontSize: 10,
    color: '#FFFFFF',
    opacity: 0.8,
    marginTop: 2,
    fontWeight: '500',
  },
  featureDivider: {
    width: 1,
    height: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
});