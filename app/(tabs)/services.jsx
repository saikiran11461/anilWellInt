import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Clock, CircleCheck as CheckCircle, ArrowRight, Star } from 'lucide-react-native';

const services = [
  {
    id: 1,
    title: 'Complete Home Design',
    description: 'Full-service interior design for your entire home',
    price: 'Starting at $5,000',
    duration: '4-8 weeks',
    features: ['3D Renderings', 'Furniture Selection', 'Project Management', 'Installation'],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    reviews: 127,
  },
  {
    id: 2,
    title: 'Room Renovation',
    description: 'Transform a single room with expert design',
    price: 'Starting at $1,500',
    duration: '2-4 weeks',
    features: ['Design Consultation', 'Mood Board', 'Shopping List', 'Layout Planning'],
    image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 3,
    title: 'Design Consultation',
    description: 'Professional advice for your design project',
    price: 'Starting at $200',
    duration: '1-2 hours',
    features: ['Design Assessment', 'Color Consultation', 'Space Planning', 'Style Guide'],
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    reviews: 203,
  },
];

const process = [
  { step: 1, title: 'Consultation', description: 'We discuss your vision, needs, and budget' },
  { step: 2, title: 'Design', description: 'Our team creates custom designs for your space' },
  { step: 3, title: 'Review', description: 'Review and refine designs until perfect' },
  { step: 4, title: 'Implementation', description: 'We handle everything from ordering to installation' },
];

export default function ServicesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      
        <View style={styles.header}>
          <Text style={styles.title}>Our Services</Text>
          <Text style={styles.subtitle}>Professional interior design services tailored to your needs</Text>
        </View>

  
        <View style={styles.servicesSection}>
          {services.map((service) => (
            <TouchableOpacity key={service.id} style={styles.serviceCard}>
              <Image source={{ uri: service.image }} style={styles.serviceImage} />
              <View style={styles.serviceContent}>
                <View style={styles.serviceHeader}>
                  <Text style={styles.serviceTitle}>{service.title}</Text>
                  <View style={styles.serviceRating}>
                    <Star size={12} color="#D4AF37" fill="#D4AF37" />
                    <Text style={styles.ratingText}>{service.rating}</Text>
                    <Text style={styles.reviewsText}>({service.reviews})</Text>
                  </View>
                </View>
                <Text style={styles.serviceDescription}>{service.description}</Text>
                
                <View style={styles.serviceDetails}>
                  <View style={styles.priceRow}>
                    <Text style={styles.servicePrice}>{service.price}</Text>
                    <View style={styles.duration}>
                      <Clock size={12} color="#6B7280" />
                      <Text style={styles.durationText}>{service.duration}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.features}>
                  {service.features.map((feature, index) => (
                    <View key={index} style={styles.feature}>
                      <CheckCircle size={12} color="#10B981" />
                      <Text style={styles.featureText}>{feature}</Text>
                    </View>
                  ))}
                </View>

                <TouchableOpacity style={styles.serviceButton}>
                  <Text style={styles.serviceButtonText}>Get Quote</Text>
                  <ArrowRight size={16} color="#8B7355" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>

      
        <View style={styles.processSection}>
          <Text style={styles.processTitle}>Our Design Process</Text>
          <Text style={styles.processSubtitle}>How we bring your vision to life</Text>
          
          <View style={styles.processSteps}>
            {process.map((step, index) => (
              <View key={step.step} style={styles.processStep}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>{step.step}</Text>
                </View>
                <View style={styles.stepContent}>
                  <Text style={styles.stepTitle}>{step.title}</Text>
                  <Text style={styles.stepDescription}>{step.description}</Text>
                </View>
                {index < process.length - 1 && <View style={styles.stepConnector} />}
              </View>
            ))}
          </View>
        </View>

        
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to Get Started?</Text>
          <Text style={styles.ctaSubtitle}>Contact us today for a free consultation</Text>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Schedule Consultation</Text>
          </TouchableOpacity>
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
  servicesSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  serviceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  serviceImage: {
    width: '100%',
    height: 160,
  },
  serviceContent: {
    padding: 16,
  },
  serviceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    flex: 1,
  },
  serviceRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    color: '#1F2937',
    marginLeft: 4,
    fontWeight: '600',
  },
  reviewsText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  serviceDetails: {
    marginBottom: 16,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#E85A00',
  },
  duration: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  features: {
    marginBottom: 16,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  featureText: {
    fontSize: 14,
    color: '#1F2937',
    marginLeft: 8,
  },
  serviceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E85A00',
  },
  serviceButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E85A00',
    marginRight: 8,
  },
  processSection: {
    paddingHorizontal: 20,
    paddingTop: 32,
  },
  processTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
  },
  processSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  processSteps: {
    position: 'relative',
  },
  processStep: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
    position: 'relative',
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E85A00',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    zIndex: 1,
  },
  stepNumberText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FAFAFA',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  stepDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  stepConnector: {
    position: 'absolute',
    left: 15,
    top: 32,
    width: 2,
    height: 24,
    backgroundColor: '#E5E7EB',
  },
  ctaSection: {
    marginHorizontal: 20,
    marginTop: 32,
    marginBottom: 20,
    backgroundColor: '#E85A00',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FAFAFA',
    textAlign: 'center',
  },
  ctaSubtitle: {
    fontSize: 16,
    color: '#FAFAFA',
    textAlign: 'center',
    marginTop: 8,
    opacity: 0.9,
    lineHeight: 24,
  },
  ctaButton: {
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  ctaButtonText: {
    color: '#E85A00',
    fontSize: 16,
    fontWeight: '600',
  },
});