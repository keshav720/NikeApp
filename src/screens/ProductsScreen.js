import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { productsSlice } from "../store/ProductsSlice";
import { useGetProductsQuery } from "../store/apiSlice";
import products from "../data/products";

const ProductsScreen = ({ navigation }) => {
 //   const dispatch = useDispatch();
  
    // const { data, isLoading, error } = useGetProductsQuery();
  
    // if (isLoading) {
    //   return <ActivityIndicator />;
    // }
  
    // if (error) {
    //   return <Text>No data available Error fetching products: {error.error}</Text>;
    // }
  
    // // Check if data is not undefined
    // if (!data) {
    //   return <Text>No data available</Text>;
    // }
  
    // const products = data.data;
  //console.log("aaaaaa",products);
    return (
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("Product Details", { id: item._id });
            }}
            style={styles.itemContainer}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
          </Pressable>
        )}
        numColumns={2}
      />
    );
  };
  
const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductsScreen;
