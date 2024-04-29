import { View, Text, StyleSheet, FlatList } from 'react-native';
import categories from '../../assets/data/categories.json';
import CategoryListItem from '../components/CategoryListItem';

const category = categories.categories;

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        data={category}
        renderItem={({ item }) => <CategoryListItem item={item} />}
      />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9cdad',
  },
});
