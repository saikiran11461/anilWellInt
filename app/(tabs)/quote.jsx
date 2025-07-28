import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, Mail, Phone, Chrome as Home, MessageCircle, Send } from 'lucide-react-native';
import { useState } from 'react';

const serviceTypes = [
  'Complete Home Design',
  'Room Renovation',
  'Design Consultation',
  'Kitchen Remodel',
  'Bathroom Remodel',
  'Living Room Design',
  'Bedroom Design',
  'Office Design',
];

const budgetRanges = [
  'Under $1,000',
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  'Over $50,000',
];

export default function QuoteScreen() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    budget: '',
    timeline: '',
    description: '',
  });

  const handleSubmit = () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.serviceType) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    // Simulate form submission
    Alert.alert(
      'Quote Request Submitted',
      'Thank you for your interest! Our team will review your request and get back to you within 24 hours.',
      [{ text: 'OK', onPress: () => console.log('Quote submitted') }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Request a Quote</Text>
          <Text style={styles.subtitle}>Tell us about your project and we'll provide a personalized quote</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          {/* Personal Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            
            <View style={styles.inputGroup}>
              <View style={styles.inputContainer}>
                <User size={20} color="#6B7280" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Full Name *"
                  value={formData.name}
                  onChangeText={(text) => setFormData({...formData, name: text})}
                  placeholderTextColor="#9CA3AF"
                />
              </View>
              
              <View style={styles.inputContainer}>
                <Mail size={20} color="#6B7280" style={styles.inputIcon} />
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
                <Phone size={20} color="#6B7280" style={styles.inputIcon} />
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
                <Home size={20} color="#6B7280" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Project Address"
                  value={formData.address}
                  onChangeText={(text) => setFormData({...formData, address: text})}
                  placeholderTextColor="#9CA3AF"
                />
              </View>
            </View>
          </View>

          {/* Service Type */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Service Type *</Text>
            <View style={styles.optionsGrid}>
              {serviceTypes.map((service, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    formData.serviceType === service && styles.selectedOption
                  ]}
                  onPress={() => setFormData({...formData, serviceType: service})}
                >
                  <Text style={[
                    styles.optionText,
                    formData.serviceType === service && styles.selectedOptionText
                  ]}>
                    {service}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Budget */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Budget Range</Text>
            <View style={styles.optionsGrid}>
              {budgetRanges.map((budget, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    formData.budget === budget && styles.selectedOption
                  ]}
                  onPress={() => setFormData({...formData, budget: budget})}
                >
                  <Text style={[
                    styles.optionText,
                    formData.budget === budget && styles.selectedOptionText
                  ]}>
                    {budget}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Timeline */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Timeline</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="When would you like to start?"
                value={formData.timeline}
                onChangeText={(text) => setFormData({...formData, timeline: text})}
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>

          {/* Project Description */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Project Description</Text>
            <View style={styles.inputContainer}>
              <MessageCircle size={20} color="#6B7280" style={styles.inputIcon} />
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Tell us about your project, style preferences, and any specific requirements..."
                value={formData.description}
                onChangeText={(text) => setFormData({...formData, description: text})}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Send size={20} color="#FAFAFA" />
            <Text style={styles.submitButtonText}>Submit Quote Request</Text>
          </TouchableOpacity>
        </View>

        {/* Contact Info */}
        <View style={styles.contactInfo}>
          <Text style={styles.contactTitle}>Need Help?</Text>
          <Text style={styles.contactText}>
            Our team is here to help you with any questions about your project.
          </Text>
          <View style={styles.contactButtons}>
            <TouchableOpacity style={styles.contactButton}>
              <Phone size={16} color="#8B7355" />
              <Text style={styles.contactButtonText}>Call Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactButton}>
              <Mail size={16} color="#8B7355" />
              <Text style={styles.contactButtonText}>Email Us</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 4,
    lineHeight: 24,
  },
  form: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  inputGroup: {
    gap: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#E5E7EB',
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
    height: 100,
    paddingTop: 12,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  optionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 8,
  },
  selectedOption: {
    backgroundColor: '#E85A00',
    borderColor: '#E85A00',
  },
  optionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  selectedOptionText: {
    color: '#FAFAFA',
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E85A00',
    borderRadius: 8,
    paddingVertical: 16,
    marginTop: 12,
  },
  submitButtonText: {
    color: '#FAFAFA',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  contactInfo: {
    marginHorizontal: 20,
    marginTop: 32,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  contactText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 16,
  },
  contactButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#E85A00',
  },
  contactButtonText: {
    color: '#E85A00',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
});