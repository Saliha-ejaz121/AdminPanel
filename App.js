import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Image,
  useColorScheme,
  ImageBackground,
  View,
  Button,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default function App() {
  const [setImge, getImge] = useState('');
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const ProductList = [
  {
    id: 1,
    name: 'VO5337S',
    link:
      'https://assets.vogue-eyewear.com/is/image/Vogue/8056597297158_TOP_shad_qt.png?impolicy=HB_parameters_transp&sclw=1&sclh=1',
    price: '130$',
    framecolor: 'Gold',
    Lenscolor: 'Grey',
    Framematerial: 'Metal',
    Measurements: '55-17-135',
  },
  {
    id: 2,
    name: 'VO4106SM',
    link:
      'https://assets.vogue-eyewear.com/is/image/Vogue/8056597238007__002.png?impolicy=HB_parameters_transp&sclw=0.25&sclh=0.25',
    price: '170$',
    framecolor: 'Brown',
    Lenscolor: 'Brown',
    Framematerial: 'Metal',
    Measurements: '55-17-135',
  },
  {
    id: 3,
    name: 'VO5377SZ',
    link:
      'https://assets.vogue-eyewear.com/is/image/Vogue/8056597450546__002.png?impolicy=HB_parameters_transp&sclw=0.25&sclh=0.25',
    price: '230$',
    framecolor: 'Brown',
    Lenscolor: 'Blue',
    Framematerial: 'Metal',
    Measurements: '55-18-132',
  },
  {
    id: 2,
    name: 'VO5222S',
    link:
      'https://assets.vogue-eyewear.com/is/image/Vogue/8053672911428__002.png?impolicy=HB_parameters_transp&sclw=0.25&sclh=0.25&bg=eeeeee',
    price: '138$',
    framecolor: 'Black',
    Lenscolor: 'Black',
    Framematerial: 'Metal',
    Measurements: '55-18-132',
  },
];

const EmployeeList = [
  {
    id: 12345,
    name: 'Sarah Terese',
    link:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRG7U6wkOJSyHrFIiUTWO5GGElzTpGtJZOw&usqp=CAU',
    age: 25,
    designation: 'CEO',
    DOJ: '23-4-2017',
  },
  {
    id: 23456,
    name: 'Adam Reves',
    link:
      'https://www.seekpng.com/png/small/350-3509606_business-avatar-14-powerpoint-avatar-faces.png',
    designation: 'Manager',
    age: 25,
    DOJ: '23-4-2016',
  },
  {
    id: 3,
    name: 'Mell John',
    link:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCefjCLmE-w6O6yxEeeZcfJXDTou5AEK594Q&usqp=CAU',
    designation: 'Assistant',
    age: 34,
    DOJ: '23-4-2016',
  },
  {
    id: 34567,
    name: 'Elizbeth Dave',
    link:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXVFXO6--MmMUpQyeQkIJMUasPcgNsA8eQw&usqp=CAU',
    designation: 'Sales Person',
    age: 28,
    DOJ: '13-7-2016',
  },
];

const OrderList = [
  { id: 'D7H49', name: 'Sarah Terese', date: '12-09-2021', product: 'VO5337S' },
  {
    id: 'H8J30',
    name: 'Hope McCrea',
    date: '12-09-2021',
    product: 'FO5M37S',
  },
  {
    id: '8JO80',
    name: 'Boland Jack',
    date: '12-09-2021',
    product: 'KO537S',
  },
  { id: 'NHW703', name: 'Jack Jonas', date: '12-09-2021', product: 'VO5U37S' },
];

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fae6ff',
      }}>
      <Text style={styles.title}>Admin Panel</Text>
      <Text style={styles.tagline}>
        Welcome! you can manage your store from here
      </Text>
      <TouchableOpacity
        style={[styles.button, styles.dark]}
        onPress={() => navigation.navigate('Product')}
        activeOpacity={0.7}>
        <Text>Manage Products</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.medium]}
        onPress={() => navigation.navigate('Employee')}
        activeOpacity={0.7}>
        <Text>Manage Employees</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.light]}
        onPress={() => navigation.navigate('Order')}
        activeOpacity={0.7}>
        <Text>Manage Orders</Text>
      </TouchableOpacity>
    </View>
  );
}

function Product({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffe6ff',
      }}>
      <Text>
        {ProductList.map((item) => (
          <TouchableOpacity
            style={styles.widget}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('Details', {
                id: item.id,
                link: item.link,
                name: item.name,
                price: item.price,
                framecolor: item.framecolor,
                Framematerial: item.Framematerial,
                Lenscolor: item.Lenscolor,
                Measurements: item.Measurements,
              })
            }>
            <View style={styles.listitem}>
              <View style={styles.detailPanel}>
                <Text>{item.name}</Text>
                <Text style={{ color: '#ff00ff' }}>{item.price}</Text>
              </View>
              <View>
                <Image
                  style={styles.imgIcon}
                  source={{
                    uri: item.link,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </Text>
    </View>
  );
}
function Details({ navigation, route }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#ffe6ff',
      }}>
      <View style={styles.detailView}>
        <Image
          style={styles.img}
          source={{
            uri: route.params.link,
          }}
        />

        <Text style={styles.name}>{route.params.name}</Text>
        <Text style={styles.price}>Price : {route.params.price}</Text>
        <Text style={styles.price}>Lens Color : {route.params.Lenscolor}</Text>
        <Text style={styles.price}>
          Frame Color : {route.params.framecolor}
        </Text>
        <Text style={styles.price}>
          Frame Material : {route.params.Framematerial}
        </Text>
        <Text style={styles.price}>
          Measurements : {route.params.Measurements}
        </Text>
      </View>

      <TouchableOpacity style={styles.widget}>
        <Text
          style={styles.backbtn}
          onPress={() => navigation.navigate('Home')}>
          Go Back Home{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function Employee({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffe6ff',
      }}>
      <Text>
        {EmployeeList.map((item) => (
          <TouchableOpacity
            style={styles.widget}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('EmployeeDetails', {
                id: item.id,
                name: item.name,
                link: item.link,
                DOJ: item.DOJ,
                age: item.age,
                designation: item.designation,
              })
            }>
            <View style={styles.listitem}>
              <View style={styles.detailPanel}>
                <Text>{item.name}</Text>
                <Text style={{ color: '#ff00ff' }}>{item.designation}</Text>
              </View>
              <View>
                <Image
                  style={styles.imgIconEmployee}
                  source={{
                    uri: item.link,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </Text>
    </View>
  );
}
function EmployeeDetails({ navigation, route }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#ffe6ff',
      }}>
      <View style={styles.detailView}>
        <Image
          style={styles.imgEmp}
          source={{
            uri: route.params.link,
          }}
        />

        <Text style={styles.name}>{route.params.name}</Text>
        <Text style={styles.price}>Employee ID : {route.params.id}</Text>
        <Text style={styles.price}>age : {route.params.age}</Text>
        <Text style={styles.price}>
          Designation : {route.params.designation}
        </Text>
        <Text style={styles.price}>Date of joining : {route.params.DOJ}</Text>
      </View>

      <TouchableOpacity style={styles.widget}>
        <Text
          style={styles.backbtn}
          onPress={() => navigation.navigate('Home')}>
          Go Back Home{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
function Order({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffe6ff',
      }}>
      <Text>
        {OrderList.map((item) => (
          <TouchableOpacity
            style={styles.widget}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('OrderDetails', {
                id: item.id,
                name: item.name,
                date: item.date,
                product: item.product,
              })
            }>
            <View style={styles.listitem}>
              <View style={styles.detailPanel}>
                <Text>Order ID. {item.id}</Text>
                <Text style={{ color: '#ff00ff' }}>
                  Ordered By : {item.name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </Text>
    </View>
  );
}
function OrderDetails({ navigation, route }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#ffe6ff',
      }}>
      <View style={styles.detailView}>
        <Image
          style={styles.imgEmp}
          source={{
            uri: route.params.link,
          }}
        />

        <Text style={styles.name}>Order ID{route.params.id}</Text>
        <Text style={styles.price}>Ordered By : {route.params.name}</Text>
        <Text style={styles.price}>Date : {route.params.date}</Text>
        <Text style={styles.price}>Product : {route.params.product}</Text>
      </View>

      <TouchableOpacity style={styles.widget}>
        <Text
          style={styles.backbtn}
          onPress={() => navigation.navigate('Home')}>
          Go Back Home{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Product" component={Product} />

      <Stack.Screen
        name="Details"
        component={Details}
        options={({ navigation, route }) => ({
          headerTitle: route.params.name,
        })}
      />
      <Stack.Screen
        name="EmployeeDetails"
        component={EmployeeDetails}
        options={({ navigation, route }) => ({
          headerTitle: route.params.name,
        })}
      />
      <Stack.Screen name="Employee" component={Employee} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={({ navigation, route }) => ({
          headerTitle: route.params.id,
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    paddingBottom: 50,
  },
  button: {
    padding: 10,
    borderRadius: 15,
    marginBottom: 15,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  dark: {
    backgroundColor: '#d24dff',
  },
  medium: {
    backgroundColor: '#d580ff',
  },
  light: {
    backgroundColor: '#e6b3ff',
  },
  detailPanel: {
    flexDirection: 'column',
  },
  imgIcon: {
    width: 100,
    height: 60,
  },
  imgIconEmployee: {
    width: 80,
    height: 70,
    borderColor: '#ff66ff',
    borderWidth: 1,
  },
  listitem: {
    flex: 1,
    marginLeft: 30,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ff99ff',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#ffccff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0.5,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  widget: {
    width: '100%',
  },
  img: {
    paddingBottom: 30,
    paddingLeft: 20,
    width: '200%',
    height: '120%',
  },
  imgEmp: {
    marginTop: 60,
    paddingBottom: 30,
    paddingLeft: 20,
    width: '100%',
    height: '100%',
  },
  detailView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 25,
    color: '#e600e6',
  },
  price: {
    fontSize: 15,
    color: '#800080',
    paddingBottom: 5,
  },
  tagline: {
    width: '70%',
    textAlign: 'center',
    fontSize: 15,
    color: '#800080',
    paddingBottom: 30,
  },
  backbtn: {
    backgroundColor: '#ff99ff',
    padding: 10,
    borderRadius: 20,
    margin: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
