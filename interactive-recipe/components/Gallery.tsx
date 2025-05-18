import React, { useState } from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';

const Gallery = () => {
    const images = [
        {
            id: 1,
            url: 'https://picsum.photos/id/429/300/200',
            description: 'Cup of raspberries',
        },
        {
            id: 2,
            url: 'https://picsum.photos/id/493/300/200',
            description: 'Bowl of granola and fruit',
        },
        {
            id: 3,
            url: 'https://picsum.photos/id/889/300/200',
            description: 'Frozen fruit mix'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    
    const currentImage = images[currentIndex];

    return (
        <View style={styles.container}>
            <Image source={{ uri: currentImage.url }} style={styles.image} />
            <Text style={styles.description}>{currentImage.description}</Text>
            <View style={styles.buttonRow}>
                <Button title="Previous" onPress={handlePrevious} />
                <Button title="Next" onPress={handleNext} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop: 50,
      padding: 10,
    },
    image: {
      width: 300,
      height: 200,
      borderRadius: 10,
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      marginBottom: 20,
      textAlign: 'center',
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 250,
    },
  });

export default Gallery;