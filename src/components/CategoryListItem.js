import { View, Text, StyleSheet, Image } from 'react-native';

const CategoryListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.strCategoryThumb }}
        style={styles.categoryImage}
      />
      <Text style={styles.categoryTitle}>{item.strCategory}</Text>
    </View>
  );
};

export default CategoryListItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
  },

  categoryImage: {
    width: 100,
    aspectRatio: 1,
    margin: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1c422d',
  },
});
