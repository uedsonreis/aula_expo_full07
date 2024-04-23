import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        height: '100%',
        backgroundColor: '#DCDCDC',
    },

    image: {
        marginBottom: 5,
        height: Dimensions.get('screen').width,
    },

    text: {
        fontSize: 16,
        paddingVertical: 5,
        textAlign: 'justify',
        paddingHorizontal: 10,
    },

});