import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Post({ navigation }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [selectedMedia, setSelectedMedia] = useState(null);

    const handlePost = async () => {
        try {
            const apiUrl = 'https://your-api-endpoint.com/apartment';

            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('location', location);

            if (selectedMedia) {
                const mediaType = selectedMedia.type.startsWith('video') ? 'video' : 'image';
                formData.append('media', {
                    uri: selectedMedia.uri,
                    type: selectedMedia.type,
                    name: `media.${mediaType}`,
                });
            }

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: formData,
            });
            if (response.status === 201) {
                Alert.alert('Success', 'Apartment post successful!');
                resetForm();
            } else {
                Alert.alert('Error', 'Failed to post. Please try again.');
            }
        } catch (error) {
            console.error('Error posting content:', error);
            Alert.alert('Error', 'An unexpected error occurred. Please try again.');
        }
    };

    const resetForm = () => {
        setTitle('');
        setDescription('');
        setLocation('');
        setSelectedMedia(null);
    };

    const pickMedia = () => {
        const options = {
            mediaType: 'mixed',
            storageOptions: {
                skipBackup: true,
                path: 'media',
            },
        };

        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled media picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                setSelectedMedia(response);
            }
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Upload Apartment</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Description"
                    multiline
                    numberOfLines={4}
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Location"
                    value={location}
                    onChangeText={(text) => setLocation(text)}
                />
            </View>

            <TouchableOpacity onPress={pickMedia} style={styles.iconContainer}>
                <Icon name="image" size={30} color="#ff69b4" />
                <Text style={styles.iconText}>Add Photos or Videos</Text>
            </TouchableOpacity>

            {selectedMedia && (
                <View style={styles.mediaContainer}>
                    {selectedMedia.type.startsWith('image') ? (
                        <Image source={{ uri: selectedMedia.uri }} style={styles.mediaPreview} />
                    ) : (
                        <Text>{selectedMedia.fileName}</Text>
                    )}
                </View>
            )}

            <TouchableOpacity onPress={handlePost} style={styles.postButton}>
                <Text style={styles.postButtonText}>Post</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f8ff',
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
    },
    input: {
        height: 40,
        borderColor: '#666',
        borderWidth: 1,
        padding: 10,
        width: '100%',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    iconText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#666',
    },
    mediaContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    mediaPreview: {
        width: 200,
        height: 200,
        marginVertical: 15,
    },
    postButton: {
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 10,
        marginTop: 25,
        width: '100%',
        alignItems: 'center',
    },
    postButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
