import { Mail, MessageCircle, Phone, User, X } from 'lucide-react-native';
import React, { useState, useEffect } from 'react';
import { Alert, Dimensions, Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function GalleryModal({ visible, onClose, item }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [selectedImage, setSelectedImage] = useState(item?.image);


  useEffect(() => {
    if (visible && item) {
      setSelectedImage(item.image);
      setShowForm(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  }, [visible, item]);

  if (!item) return null;


  const allImages = [item.image, ...(item.additionalImages || [])];

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }
    Alert.alert(
      'Request Submitted',
      `Thank you for your interest in "${item?.title}"! We'll contact you within 24 hours.`,
      [{ text: 'OK', onPress: () => {
        setShowForm(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
        onClose();
      }}]
    );
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View className="flex-1 bg-black/50 justify-end">
        <View className="bg-white rounded-t-2xl max-h-[90%] pt-5">
          <View className="flex-row justify-between items-center px-5 pb-4 border-b border-gray-200">
            <Text className="text-lg font-semibold text-gray-800">{showForm ? "Request Quote" : "Gallery Details"}</Text>
            <TouchableOpacity onPress={() => { setShowForm(false); onClose(); }}>
              <X size={24} color="#6B7280" />
            </TouchableOpacity>
          </View>
          {!showForm ? (
            <ScrollView className="px-5 pb-5">
           
              <Image
                source={{ uri: selectedImage }}
                style={{
                  width: width - 40,
                  height: 220,
                  borderRadius: 18,
                  marginBottom: 10,
                  alignSelf: 'center',
                }}
              />
        
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
                {allImages.map((img, idx) => (
                  <TouchableOpacity key={idx} onPress={() => setSelectedImage(img)}>
                    <Image
                      source={{ uri: img }}
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 10,
                        marginRight: 10,
                        borderWidth: selectedImage === img ? 2 : 1,
                        borderColor: selectedImage === img ? '#f59e42' : '#eee',
                        opacity: selectedImage === img ? 1 : 0.6,
                      }}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
         
              <Text className="text-xl font-bold text-gray-800">{item.title}</Text>
              <Text className="text-base text-gray-600 mt-1">{item.category} · {item.style}</Text>
              <Text className="text-sm text-gray-500 mt-1">by <Text className="font-bold">{item.decorator}</Text></Text>
              <Text className="text-lg text-orange-600 font-semibold mt-2">{item.price}</Text>
              <View className="flex-row mt-2 gap-1 flex-wrap">
                {item.tags.map((tag, tagIndex) => (
                  <View key={tagIndex} className="bg-yellow-400/30 px-2 py-1 rounded mb-1 mr-1">
                    <Text className="text-xs text-yellow-800 font-medium">{tag}</Text>
                  </View>
                ))}
              </View>
              <TouchableOpacity className="bg-orange-600 rounded-lg py-4 items-center mt-6 mb-2" onPress={() => setShowForm(true)}>
                <Text className="text-gray-100 text-base font-semibold">Request Quotation</Text>
              </TouchableOpacity>
            </ScrollView>
          ) : (
            <ScrollView className="px-5 pb-5">
              <View className="flex-row px-3 py-3 items-center">
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 60, height: 60, borderRadius: 8, marginRight: 12 }}
                />
                <View className="flex-1">
                  <Text className="text-base font-semibold text-gray-800">{item.title}</Text>
                  <Text className="text-sm text-gray-500 mt-0.5">{item.category}</Text>
                  <Text className="text-sm text-orange-600 font-semibold mt-0.5">{item.price}</Text>
                </View>
              </View>
              <View className="flex-row items-center bg-gray-100 rounded-lg px-3 py-1 border border-gray-200 mb-4">
                <User size={20} color="#6B7280" style={{ marginRight: 12 }} />
                <TextInput
                  className="flex-1 text-base text-gray-800 py-3"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChangeText={(text) => setFormData({...formData, name: text})}
                  placeholderTextColor="#9CA3AF"
                />
              </View>
              <View className="flex-row items-center bg-gray-100 rounded-lg px-3 py-1 border border-gray-200 mb-4">
                <Mail size={20} color="#6B7280" style={{ marginRight: 12 }} />
                <TextInput
                  className="flex-1 text-base text-gray-800 py-3"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChangeText={(text) => setFormData({...formData, email: text})}
                  keyboardType="email-address"
                  placeholderTextColor="#9CA3AF"
                />
              </View>
              <View className="flex-row items-center bg-gray-100 rounded-lg px-3 py-1 border border-gray-200 mb-4">
                <Phone size={20} color="#6B7280" style={{ marginRight: 12 }} />
                <TextInput
                  className="flex-1 text-base text-gray-800 py-3"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChangeText={(text) => setFormData({...formData, phone: text})}
                  keyboardType="phone-pad"
                  placeholderTextColor="#9CA3AF"
                />
              </View>
              <View className="flex-row items-center bg-gray-100 rounded-lg px-3 py-1 border border-gray-200 mb-4">
                <MessageCircle size={20} color="#6B7280" style={{ marginRight: 12 }} />
                <TextInput
                  className="flex-1 text-base text-gray-800 py-3"
                  style={{ height: 80, paddingTop: 12 }}
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChangeText={(text) => setFormData({...formData, message: text})}
                  multiline
                  numberOfLines={4}
                  textAlignVertical="top"
                  placeholderTextColor="#9CA3AF"
                />
              </View>
              <TouchableOpacity className="bg-orange-600 rounded-lg py-4 items-center mt-2" onPress={handleSubmit}>
                <Text className="text-gray-100 text-base font-semibold">Submit Request</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center mt-4" onPress={() => setShowForm(false)}>
                <Text className="text-orange-600 text-sm font-medium">Back to Gallery</Text>
              </TouchableOpacity>
            </ScrollView>
          )}
        </View>
      </View>
    </Modal>
  );
}