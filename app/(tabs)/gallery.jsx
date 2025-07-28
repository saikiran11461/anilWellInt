import { useState } from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { allTags } from "../../utils/allTags";
import { galleryItems } from "../../utils/galleryItems";
import GalleryModal from '../components/GalleryModal';

const { width } = Dimensions.get('window');

const categories = [
  'All', 'Living Room', 'Bedroom', 'Kitchen', 'Bathroom', 
  'Office', 'Dining Room', 'Balcony', 'Study', 'Meditation'
];

export default function GalleryScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = galleryItems.filter(item => {
    const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
    const tagMatch = selectedTag === 'All' || item.tags.includes(selectedTag);
    return categoryMatch && tagMatch;
  });

  const handleCardPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView showsVerticalScrollIndicator={false}>

        <View className="px-5 pt-5 pb-2.5">
          <Text className="text-2xl font-bold text-gray-800">Design Gallery</Text>
          <Text className="text-base text-gray-500 mt-1 leading-6">
            Explore our curated collection of interior designs
          </Text>
        </View>

  
        <View className="px-5 mt-5">
          <Text className="text-base font-semibold text-gray-800 mb-3">Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
            {categories.map((category, index) => (
              <TouchableOpacity 
                key={index} 
                className={`px-4 py-2 rounded-full bg-white mr-2 border border-gray-200 ${selectedCategory === category ? 'bg-orange-600 border-orange-600' : ''}`}
                onPress={() => setSelectedCategory(category)}
              >
                <Text className={`text-sm font-semibold ${selectedCategory === category ? 'text-gray-100' : 'text-gray-500'}`}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

   
        <View className="px-5 mt-5">
          <Text className="text-base font-semibold text-gray-800 mb-3">Style Tags</Text>
          <View className="flex-row flex-wrap gap-2">
            {allTags.slice(0, 12).map((tag, index) => (
              <TouchableOpacity 
                key={index} 
                className={`px-3 py-1.5 rounded-full bg-white border border-gray-200 ${selectedTag === tag ? 'bg-yellow-400 border-yellow-400' : ''}`}
                onPress={() => setSelectedTag(tag)}
              >
                <Text className={`text-xs font-medium ${selectedTag === tag ? 'text-gray-100' : 'text-gray-500'}`}>
                  {tag}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

    
        <View className="px-5 pt-5 pb-2.5">
          <Text className="text-sm text-gray-500 font-medium">
            {filteredItems.length} design{filteredItems.length !== 1 ? 's' : ''} found
          </Text>
        </View>


        <View className="flex-row flex-wrap px-5 justify-between">
          {filteredItems.map((item, index) => {
            
            const overlayHeight = 90 + (item.title.length > 20 ? 12 : 0) + (item.tags.length > 0 ? 18 : 0);
            return (
              <TouchableOpacity 
                key={item.id} 
                className="mb-6 rounded-2xl overflow-hidden bg-white shadow-lg"
                style={{ width: (width - 52) / 2, elevation: 5 }}
                onPress={() => handleCardPress(item)}
                activeOpacity={0.9}
              >
              
                <View style={{ position: 'relative' }}>
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: '100%',
                      height: 220,
                      borderTopLeftRadius: 18,
                      borderTopRightRadius: 18,
                      resizeMode: 'cover',
                    }}
                  />
          
                  <View
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: overlayHeight,
                      borderBottomLeftRadius: 18,
                      borderBottomRightRadius: 18,
                    
                      backgroundColor: 'rgba(0,0,0,0.55)',
                      justifyContent: 'flex-end'
                    }}
                  >
                    <View style={{
                      paddingHorizontal: 14,
                      paddingVertical: 12,
                      borderBottomLeftRadius: 18,
                      borderBottomRightRadius: 18,
                    }}>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: 'bold',
                          color: '#fff',
                          marginBottom: 2,
                          textShadowColor: '#000',
                          textShadowRadius: 2,
                          textShadowOffset: { width: 0, height: 1 },
                          lineHeight: 22,
                        }}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                      >
                        {item.title}
                      </Text>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                        <Text style={{ fontSize: 12, color: '#e5e7eb', fontWeight: '600', textShadowColor: '#000', textShadowRadius: 1 }}>
                          {item.category}
                        </Text>
                        <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold', textShadowColor: '#000', textShadowRadius: 1 }}>
                          {item.price}
                        </Text>
                      </View>
                      {item.tags.length > 0 && (
                        <View style={{ flexDirection: 'row', marginTop: 4 }}>
                          {item.tags.slice(0, 1).map((tag, tagIndex) => (
                            <View
                              key={tagIndex}
                              style={{
                                backgroundColor: 'rgba(253, 224, 71, 0.82)',
                                paddingHorizontal: 7,
                                paddingVertical: 2,
                                borderRadius: 6,
                                marginRight: 3,
                              }}
                            >
                              <Text style={{ fontSize: 10, color: '#92400e', fontWeight: '600' }}>{tag}</Text>
                            </View>
                          ))}
                        </View>
                      )}
                    </View>
                  </View>
             
                  <View style={{
                    position: 'absolute',
                    top: 14,
                    left: 14,
                    backgroundColor: 'rgba(234,88,12,0.95)',
                    paddingHorizontal: 7,
                    paddingVertical: 3,
                    borderRadius: 30,
                    zIndex: 10,
                  }}>
                    <Text style={{ fontSize: 10, color: '#fff', fontWeight: 'bold' }}>by {item.decorator}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

      
        <TouchableOpacity className="bg-orange-600 mx-5 mt-5 mb-5 rounded-lg py-3 items-center">
          <Text className="text-gray-100 text-base font-semibold">Load More Designs</Text>
        </TouchableOpacity>
      </ScrollView>


      <GalleryModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        item={selectedItem}
      />
    </SafeAreaView>
  );
}