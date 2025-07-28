import { ArrowRight, Award, Clock, Heart, Mail, MapPin, MessageCircle, Phone, Play, Sparkles, Star, TrendingUp, User, Users, X } from 'lucide-react-native';
import { useState } from 'react';
import { Platform } from 'react-native';
import { Alert, Dimensions, Image, ImageBackground, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, { BounceIn, FadeInDown, FadeInUp, SlideInLeft, SlideInRight } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { decorators } from '../../utils/decorators';
import { featuredProjects } from '../../utils/featuredProjects';
const { width, height } = Dimensions.get('window');

const trendingStyles = [
  { name: 'Maximalist', trend: '+45%', color: '#FF6B35', emoji: '🎨' },
  { name: 'Biophilic', trend: '+38%', color: '#4ECDC4', emoji: '🌿' },
  { name: 'Art Deco', trend: '+29%', color: '#FFD93D', emoji: '✨' },
  { name: 'Industrial', trend: '+22%', color: '#6C5CE7', emoji: '🏭' },
];

const testimonials = [
  {
    id: 1,
    name: 'Jennifer Martinez',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Absolutely transformed our home! The attention to detail was incredible.',
    project: 'Modern Kitchen Renovation',
  },
  {
    id: 2,
    name: 'David Thompson',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Professional, creative, and delivered beyond our expectations.',
    project: 'Luxury Living Room',
  },
];

const stats = [
  { icon: '🏆', number: '500+', label: 'Projects Completed', color: '#E85A00' },
  { icon: '⭐', number: '4.9', label: 'Average Rating', color: '#FFB627' },
  { icon: '👥', number: '15+', label: 'Expert Designers', color: '#4ECDC4' },
  { icon: '🎯', number: '98%', label: 'Client Satisfaction', color: '#6C5CE7' },
];

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleCardPress = (item, type) => {
    setSelectedItem({ ...item, type });
    setModalVisible(true);
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }
    Alert.alert('Success', 'Your request has been submitted!');
    setModalVisible(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Simple Modern Header */}
        <View style={styles.simpleHeader}>
          <ImageBackground
            source={{ uri: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800' }}
            style={styles.headerBackground}
          >
            <View style={styles.headerOverlay}>
              {/* Navigation */}
              <View style={styles.headerNav}>
                <Text style={styles.headerLogo}>ANIWELL</Text>
                <TouchableOpacity style={styles.menuButton}>
                  <View style={styles.menuDot} />
                  <View style={styles.menuDot} />
                  <View style={styles.menuDot} />
                </TouchableOpacity>
              </View>

              {/* Hero Content */}
              <View style={styles.heroContent}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>✨ AWARD WINNING DESIGNS</Text>
                </View>
                
                <Text style={styles.mainTitle}>Create Your</Text>
                <Text style={styles.accentTitle}>Dream Space</Text>
                <Text style={styles.subtitle}>
                  Transform your home with our expert interior designers. 
                  From concept to completion, we bring your vision to life.
                </Text>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.primaryButton}>
                    <Text style={styles.primaryButtonText}>Get Started</Text>
                    <ArrowRight size={18} color="#E85A00" />
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.secondaryButton}>
                    <Play size={16} color="#FFFFFF" />
                    <Text style={styles.secondaryButtonText}>Watch Demo</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.statsRow}>
  <View style={styles.statItem}>
    <Text style={[styles.statNumber, { color: 'white' }]}>500+</Text>
    <Text style={[styles.statLabel, { color: 'white' }]}>Projects</Text>
  </View>
  <View style={styles.statDivider} />
  <View style={styles.statItem}>
    <Text style={[styles.statNumber, { color: 'white' }]}>4.9★</Text>
    <Text style={[styles.statLabel, { color: 'white' }]}>Rating</Text>
  </View>
  <View style={styles.statDivider} />
  <View style={styles.statItem}>
    <Text style={[styles.statNumber, { color: 'white' }]}>15+</Text>
    <Text style={[styles.statLabel, { color: 'white' }]}>Designers</Text>
  </View>
</View>




              </View>
            </View>
          </ImageBackground>
        </View>

        {/* Hero Video Section */}
        <Animated.View entering={FadeInUp.delay(200)} style={styles.heroVideoSection}>
          <ImageBackground
            source={{ uri: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800' }}
            style={styles.heroVideo}
            imageStyle={styles.heroVideoImage}
          >
            <LinearGradient
              colors={['rgba(0,0,0,0.3)', 'rgba(232,90,0,0.8)']}
              style={styles.heroOverlay}
            >
              <Animated.View entering={BounceIn.delay(400)} style={styles.playButton}>
                <Play size={24} color="#FFFFFF" fill="#FFFFFF" />
              </Animated.View>
              <Text style={styles.heroVideoTitle}>See Our Magic in Action</Text>
              <Text style={styles.heroVideoSubtitle}>Watch how we transform spaces</Text>
            </LinearGradient>
          </ImageBackground>
        </Animated.View>

        {/* Trending Styles */}
        <Animated.View entering={FadeInUp.delay(300)} style={styles.trendingSection}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <Sparkles size={20} color="#E85A00" />
              <Text style={styles.sectionTitle}>Trending Now</Text>
            </View>
            <TouchableOpacity style={styles.trendingViewAll}>
              <TrendingUp size={16} color="#E85A00" />
              <Text style={styles.trendingViewAllText}>View Trends</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.trendingScroll}>
            {trendingStyles.map((style, index) => (
              <Animated.View 
                key={index} 
                entering={SlideInRight.delay(400 + index * 100)}
                style={[styles.trendingCard, { borderLeftColor: style.color }]}
              >
                <Text style={styles.trendingEmoji}>{style.emoji}</Text>
                <Text style={styles.trendingName}>{style.name}</Text>
                <View style={styles.trendingMeta}>
                  <Text style={[styles.trendingPercent, { color: style.color }]}>{style.trend}</Text>
                  <Text style={styles.trendingLabel}>popularity</Text>
                </View>
              </Animated.View>
            ))}
          </ScrollView>
        </Animated.View>

        {/* Premium Stats Grid */}
        <Animated.View entering={FadeInUp.delay(200)} style={styles.premiumStatsSection}>
          <Text style={styles.statsTitle}>Why Choose Aniwell</Text>
          <Text style={styles.statsSubtitle}>Trusted by hundreds of clients across the globe</Text>
          <View style={styles.premiumStatsGrid}>
            {stats.map((stat, index) => (
              <Animated.View 
                key={index} 
                entering={BounceIn.delay(300 + index * 100)}
                style={[styles.premiumStatCard, { borderTopColor: stat.color }]}
              >
                <LinearGradient
                  colors={[stat.color + '20', stat.color + '05']}
                  style={styles.statCardGradient}
                >
                  <Text style={styles.statIcon}>{stat.icon}</Text>
                  <Text style={[styles.statNumber, { color: stat.color }]}>{stat.number}</Text>
                  <Text style={styles.statLabel}>{stat.label}</Text>
                </LinearGradient>
              </Animated.View>
            ))}
          </View>
        </Animated.View>

        {/* Featured Projects with Enhanced Design */}
        <Animated.View entering={FadeInDown.delay(600)} style={styles.featuredSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Masterpieces</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
              <ArrowRight size={16} color="#E85A00" />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.projectsScroll}>
            {featuredProjects.map((project, index) => (
              <Animated.View 
                key={project.id} 
                entering={SlideInRight.delay(700 + index * 100)}
              >
                <TouchableOpacity 
                  style={styles.premiumProjectCard}
                  onPress={() => handleCardPress(project, 'project')}
                >
                  <View style={styles.projectImageContainer}>
                    <Image source={{ uri: project.image }} style={styles.projectImage} />
                    <LinearGradient
                      colors={['transparent', 'rgba(0,0,0,0.7)']}
                      style={styles.projectImageOverlay}
                    />
                    <TouchableOpacity style={styles.favoriteButton}>
                      <Heart size={16} color="#E85A00" />
                      <Text style={styles.likesCount}>{project.likes}</Text>
                    </TouchableOpacity>
                    <View style={styles.projectBadge}>
                      <Text style={styles.projectBadgeText}>FEATURED</Text>
                    </View>
                  </View>
                  
                  <View style={styles.projectInfo}>
                    <Text style={styles.projectTitle}>{project.title}</Text>
                    <View style={styles.projectMeta}>
                      <MapPin size={12} color="#6B7280" />
                      <Text style={styles.projectLocation}>{project.location}</Text>
                    </View>
                    
                    <View style={styles.projectDetails}>
                      <View style={styles.projectDetailItem}>
                        <Clock size={12} color="#E85A00" />
                        <Text style={styles.projectDetailText}>{project.completedDate}</Text>
                      </View>
                      <View style={styles.projectDetailItem}>
                        <Star size={12} color="#FFB627" fill="#FFB627" />
                        <Text style={styles.projectDetailText}>{project.rating}</Text>
                      </View>
                    </View>
                    
                    <Text style={styles.decoratorName}>by {project.decorator}</Text>
                    <Text style={styles.projectPrice}>{project.price}</Text>
                  </View>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </ScrollView>
        </Animated.View>

        {/* Premium Decorators Section */}
        <Animated.View entering={SlideInLeft.delay(800)} style={styles.decoratorsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Master Designers</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>Meet All</Text>
              <Users size={16} color="#E85A00" />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.decoratorsScroll}>
            {decorators.map((decorator, index) => (
              <Animated.View 
                key={decorator.id} 
                entering={SlideInLeft.delay(900 + index * 100)}
              >
                <TouchableOpacity 
                  style={styles.premiumDecoratorCard}
                  onPress={() => handleCardPress(decorator, 'decorator')}
                >
                  <View style={styles.decoratorImageContainer}>
                    <Image source={{ uri: decorator.image }} style={styles.decoratorImage} />
                    {decorator.verified && (
                      <View style={styles.verifiedBadge}>
                        <Award size={12} color="#FFFFFF" />
                      </View>
                    )}
                    <View style={[styles.availabilityBadge, 
                      { backgroundColor: decorator.availability === 'Available' ? '#10B981' : '#F59E0B' }
                    ]}>
                      <Text style={styles.availabilityText}>{decorator.availability}</Text>
                    </View>
                  </View>
                  
                  <View style={styles.decoratorInfo}>
                    <View style={styles.decoratorHeader}>
                      <Text style={styles.decoratorName}>{decorator.name}</Text>
                      <Text style={styles.decoratorBadge}>{decorator.badge}</Text>
                    </View>
                    <Text style={styles.decoratorSpeciality}>{decorator.speciality}</Text>
                    <Text style={styles.decoratorPrice}>{decorator.price}</Text>
                    
                    <View style={styles.decoratorStats}>
                      <View style={styles.decoratorStat}>
                        <Award size={12} color="#E85A00" />
                        <Text style={styles.decoratorStatText}>{decorator.experience}</Text>
                      </View>
                      <View style={styles.decoratorStat}>
                        <Users size={12} color="#E85A00" />
                        <Text style={styles.decoratorStatText}>{decorator.projects}</Text>
                      </View>
                      <View style={styles.decoratorStat}>
                        <Star size={12} color="#FFB627" fill="#FFB627" />
                        <Text style={styles.decoratorStatText}>{decorator.rating}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </ScrollView>
        </Animated.View>

        {/* Client Testimonials */}
        <Animated.View entering={FadeInUp.delay(1000)} style={styles.testimonialsSection}>
          <Text style={styles.sectionTitle}>What Our Clients Say</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.testimonialsScroll}>
            {testimonials.map((testimonial, index) => (
              <Animated.View 
                key={testimonial.id} 
                entering={FadeInUp.delay(1100 + index * 100)}
                style={styles.testimonialCard}
              >
                <View style={styles.testimonialHeader}>
                  <Image source={{ uri: testimonial.image }} style={styles.testimonialImage} />
                  <View style={styles.testimonialInfo}>
                    <Text style={styles.testimonialName}>{testimonial.name}</Text>
                    <Text style={styles.testimonialProject}>{testimonial.project}</Text>
                    <View style={styles.testimonialRating}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={12} color="#FFB627" fill="#FFB627" />
                      ))}
                    </View>
                  </View>
                </View>
                <Text style={styles.testimonialText}>"{testimonial.text}"</Text>
              </Animated.View>
            ))}
          </ScrollView>
        </Animated.View>

        {/* Premium CTA Section */}
        <Animated.View entering={BounceIn.delay(1200)} style={styles.premiumCtaSection}>
          <LinearGradient
            colors={['#E85A00', '#FF8C42']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.ctaGradient}
          >
            <Sparkles size={24} color="#FFFFFF" style={styles.ctaIcon} />
            <Text style={styles.ctaTitle}>Ready to Transform Your Space?</Text>
            <Text style={styles.ctaSubtitle}>Join 500+ satisfied clients who trusted us with their dream homes</Text>
            <TouchableOpacity style={styles.premiumCtaButton}>
              <Text style={styles.ctaButtonText}>Start Your Journey</Text>
              <ArrowRight size={20} color="#E85A00" />
            </TouchableOpacity>
            <Text style={styles.ctaNote}>Free consultation • No commitment required</Text>
          </LinearGradient>
        </Animated.View>
      </ScrollView>

      {/* Enhanced Modal */}
      <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  {Platform.OS === 'ios' ? (
    <BlurView intensity={20} style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        <LinearGradient
          colors={['#E85A00', '#FF8C42']}
          style={styles.modalHeader}
        >
          <Text style={styles.modalTitle}>
            {selectedItem?.type === 'decorator' ? 'Contact Designer' : 'Request Project Quote'}
          </Text>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalCloseButton}>
            <X size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </LinearGradient>

        {selectedItem && (
          <View style={styles.selectedItemInfo}>
            <Image 
              source={{ uri: selectedItem.image }} 
              style={selectedItem.type === 'decorator' ? styles.selectedDecoratorImage : styles.selectedProjectImage} 
            />
            <View style={styles.selectedItemDetails}>
              <Text style={styles.selectedItemTitle}>
                {selectedItem.title || selectedItem.name}
              </Text>
              <Text style={styles.selectedItemSubtitle}>
                {selectedItem.category || selectedItem.speciality}
              </Text>
              {selectedItem.price && (
                <Text style={styles.selectedItemPrice}>{selectedItem.price}</Text>
              )}
            </View>
          </View>
        )}

        <ScrollView style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <User size={20} color="#E85A00" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Full Name *"
              value={formData.name}
              onChangeText={(text) => setFormData({...formData, name: text})}
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View style={styles.inputContainer}>
            <Mail size={20} color="#E85A00" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Email Address *"
              value={formData.email}
              onChangeText={(text) => setFormData({...formData, email: text})}
              keyboardType="email-address"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View style={styles.inputContainer}>
            <Phone size={20} color="#E85A00" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Phone Number *"
              value={formData.phone}
              onChangeText={(text) => setFormData({...formData, phone: text})}
              keyboardType="phone-pad"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View style={styles.inputContainer}>
            <MessageCircle size={20} color="#E85A00" style={styles.inputIcon} />
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Tell us about your dream project..."
              value={formData.message}
              onChangeText={(text) => setFormData({...formData, message: text})}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <LinearGradient
              colors={['#E85A00', '#FF8C42']}
              style={styles.submitButtonGradient}
            >
              <Text style={styles.submitButtonText}>Submit Request</Text>
              <ArrowRight size={16} color="#FFFFFF" />
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </BlurView>
  ) : (
    <View style={[styles.modalOverlay, { backgroundColor: 'rgba(0,0,0,0.3)' }]}>
      <View style={styles.modalContent}>
        <LinearGradient
          colors={['#E85A00', '#FF8C42']}
          style={styles.modalHeader}
        >
          <Text style={styles.modalTitle}>
            {selectedItem?.type === 'decorator' ? 'Contact Designer' : 'Request Project Quote'}
          </Text>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalCloseButton}>
            <X size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </LinearGradient>

        {selectedItem && (
          <View style={styles.selectedItemInfo}>
            <Image 
              source={{ uri: selectedItem.image }} 
              style={selectedItem.type === 'decorator' ? styles.selectedDecoratorImage : styles.selectedProjectImage} 
            />
            <View style={styles.selectedItemDetails}>
              <Text style={styles.selectedItemTitle}>
                {selectedItem.title || selectedItem.name}
              </Text>
              <Text style={styles.selectedItemSubtitle}>
                {selectedItem.category || selectedItem.speciality}
              </Text>
              {selectedItem.price && (
                <Text style={styles.selectedItemPrice}>{selectedItem.price}</Text>
              )}
            </View>
          </View>
        )}

        <ScrollView style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <User size={20} color="#E85A00" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Full Name *"
              value={formData.name}
              onChangeText={(text) => setFormData({...formData, name: text})}
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View style={styles.inputContainer}>
            <Mail size={20} color="#E85A00" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Email Address *"
              value={formData.email}
              onChangeText={(text) => setFormData({...formData, email: text})}
              keyboardType="email-address"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View style={styles.inputContainer}>
            <Phone size={20} color="#E85A00" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Phone Number *"
              value={formData.phone}
              onChangeText={(text) => setFormData({...formData, phone: text})}
              keyboardType="phone-pad"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View style={styles.inputContainer}>
            <MessageCircle size={20} color="#E85A00" style={styles.inputIcon} />
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Tell us about your dream project..."
              value={formData.message}
              onChangeText={(text) => setFormData({...formData, message: text})}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <LinearGradient
              colors={['#E85A00', '#FF8C42']}
              style={styles.submitButtonGradient}
            >
              <Text style={styles.submitButtonText}>Submit Request</Text>
              <ArrowRight size={16} color="#FFFFFF" />
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )}
</Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  simpleHeader: {
    height: height * 0.7,
    overflow: 'hidden',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30
  },
  headerBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  headerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 24,
    paddingTop: 50,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  headerNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLogo: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  menuButton: {
    flexDirection: 'row',
    gap: 4,
    padding: 8,
  },
  menuDot: {
    width: 6,
    height: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
  },
  heroContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 24,
  },
  badgeText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '700',
    letterSpacing: 1,
  },
  mainTitle: {
    fontSize: 48,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: -1,
  },
  accentTitle: {
    fontSize: 48,
    fontWeight: '900',
    color: '#FFD93D',
    textAlign: 'center',
    letterSpacing: -1,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24,
    opacity: 0.9,
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 30,
    gap: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#E85A00',
  },
  secondaryButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 30,
    gap: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 25,
    gap: 20,
  },
  statItem: {
    alignItems: 'center',
   
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  statLabel: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.8,
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  heroVideoSection: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  heroVideo: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroVideoImage: {
    borderRadius: 16,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  heroVideoTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  heroVideoSubtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 4,
    opacity: 0.9,
  },
  trendingSection: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2937',
  },
  trendingViewAll: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  trendingViewAllText: {
    fontSize: 14,
    color: '#E85A00',
    fontWeight: '600',
  },
  trendingScroll: {
    marginTop: 8,
  },
  trendingCard: {
    width: 120,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    borderLeftWidth: 4,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop:10,
    marginBottom:15,
    marginLeft:5
  },
  trendingEmoji: {
    fontSize: 24,
    marginBottom: 8,
  },
  trendingName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
  },
  trendingMeta: {
    alignItems: 'center',
    marginTop: 8,
  },
  trendingPercent: {
    fontSize: 16,
    fontWeight: '700',
  },
  trendingLabel: {
    fontSize: 10,
    color: '#6B7280',
    marginTop: 2,
  },
  premiumStatsSection: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  statsTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 20,
  },
  statsSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
    marginTop: -12,
  },
  premiumStatsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  premiumStatCard: {
    width: (width - 56) / 2,
    borderRadius: 16,
    overflow: 'hidden',
    borderTopWidth: 4,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  statCardGradient: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  statIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
    textAlign: 'center',
    fontWeight: '500',
  },
  featuredSection: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewAllText: {
    fontSize: 14,
    color: '#E85A00',
    fontWeight: '600',
  },
  projectsScroll: {
    marginTop: 16,
  },
  premiumProjectCard: {
    width: 300,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginRight: 16,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    marginTop:10,
    marginBottom:15,
    marginLeft:5
  },
  projectImageContainer: {
    position: 'relative',
  },
  projectImage: {
    width: '100%',
    height: 200,
  },
  projectImageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    elevation: 2,
  },
  likesCount: {
    fontSize: 12,
    color: '#E85A00',
    fontWeight: '600',
  },
  projectBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#E85A00',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  projectBadgeText: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  projectInfo: {
    padding: 16,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  projectMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 8,
  },
  projectLocation: {
    fontSize: 12,
    color: '#6B7280',
  },
  projectDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  projectDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  projectDetailText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  decoratorName: {
    fontSize: 12,
    color: '#E85A00',
    fontWeight: '600',
    marginBottom: 4,
  },
  projectPrice: {
    fontSize: 16,
    color: '#1F2937',
    fontWeight: '700',
  },
  decoratorsSection: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  decoratorsScroll: {
    marginTop: 16,
  },
  premiumDecoratorCard: {
    width: 220,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginRight: 16,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    marginBottom:15,
    marginTop:6,
    marginLeft:5
  },
  decoratorImageContainer: {
    position: 'relative',
  },
  decoratorImage: {
    width: '100%',
    height: 140,
  },
  verifiedBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#10B981',
    borderRadius: 12,
    padding: 4,
  },
  availabilityBadge: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  availabilityText: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  decoratorInfo: {
    padding: 16,
  },
  decoratorHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  decoratorName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    flex: 1,
  },
  decoratorBadge: {
    fontSize: 10,
    color: '#E85A00',
    fontWeight: '600',
    backgroundColor: '#FFE5D9',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  decoratorSpeciality: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  decoratorPrice: {
    fontSize: 14,
    color: '#E85A00',
    fontWeight: '700',
    marginBottom: 8,
  },
  decoratorStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  decoratorStat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  decoratorStatText: {
    fontSize: 10,
    color: '#6B7280',
    fontWeight: '500',
  },
  testimonialsSection: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  testimonialsScroll: {
    marginTop: 16,
  },
  testimonialCard: {
    width: 280,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginTop:10,
    marginBottom:10,
    marginLeft:10
  },
  testimonialHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  testimonialImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  testimonialInfo: {
    flex: 1,
  },
  testimonialName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  testimonialProject: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  testimonialRating: {
    flexDirection: 'row',
    marginTop: 4,
    gap: 2,
  },
  testimonialText: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
    fontStyle: 'italic',
  },
  premiumCtaSection: {
    marginHorizontal: 20,
    marginTop: 32,
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#E85A00',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  ctaGradient: {
    padding: 32,
    alignItems: 'center',
  },
  ctaIcon: {
    marginBottom: 12,
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  ctaSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: 24,
    marginBottom: 20,
  },
  premiumCtaButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  ctaButtonText: {
    color: '#E85A00',
    fontSize: 16,
    fontWeight: '700',
  },
  ctaNote: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 12,
    opacity: 0.8,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '85%',
    overflow: 'hidden',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  modalCloseButton: {
    padding: 4,
  },
  selectedItemInfo: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  selectedProjectImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  selectedDecoratorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  selectedItemDetails: {
    flex: 1,
  },
  selectedItemTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
  },
  selectedItemSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  selectedItemPrice: {
    fontSize: 14,
    color: '#E85A00',
    fontWeight: '600',
    marginTop: 2,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginBottom: 16,
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
    paddingVertical: 12,
  },
  textArea: {
    height: 80,
    paddingTop: 12,
  },
  submitButton: {
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 8,
    elevation: 4,
    shadowColor: '#E85A00',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  submitButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});