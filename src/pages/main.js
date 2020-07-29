import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import api from '../services/api';

export default class Main extends Component {
  state = {
    products: [],
    productInfo: [],
    page: 1,
  };

  componentDidMount() {
    this.loadProduct();
  }

  loadProduct = async (page = 1) => {
    try {
      const response = await api.get(`/products?page=${page}`);
      const {docs, ...productInfo} = response.data;
      this.setState({
        products: [...this.state.products, ...docs],
        productInfo,
        page,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  loadMore = () => {
    const {product, productInfo, page} = this.state;

    if (page === productInfo.pages) return;

    const pageNumber = page + 1;
    this.loadProduct(pageNumber);
  };

  renderItem = ({item}) => (
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <TouchableOpacity style={styles.productButton} onPress={() => {}}>
        <Text style={styles.productButtonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    const {products} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text
            onPress={() => this.refs.flatList.scrollToEnd()}
            style={styles.titlePage}>
            Curso React Native - Rocketseat
          </Text>
        </View>
        
        <FlatList
          contentContainerStyle={styles.list}
          data={products}
          keyExtractor={(item) => item._id}
          renderItem={this.renderItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
          ref="flatList"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  titlePage: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  list: {
    padding: 20,
  },
  productContainer: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    padding: 20,
    marginBottom: 20,
  },

  productTitle: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 18,
  },

  productDescription: {
    color: '#999',
    lineHeight: 24,
    marginBottom: 10,
    marginTop: 5,
    fontSize: 16,
  },

  productButton: {
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: 'transparent',
    borderColor: '#DA552F',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    height: 42,
  },
  productButtonText: {
    color: '#DA552F',
    fontWeight: 'bold',
  },
});
