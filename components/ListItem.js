import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  item: {
    height: 100,
    width: "100%",
    borderWidth: 1,
    flexDirection: "row",
  },
  leftItem: {
    width: 100,
  },
  rightItem: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
    paddingTop: 12,
  },
});

const ListItem = ({ imageUrl, title, author, onPress }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.leftItem}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: imageUrl }} />
      </View>
      <View style={styles.rightItem}>
        <View>
          <Text numberOfLines={3} style={styles.Text}>
            {title}
          </Text>
          <Text style={styles.subText}>{author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
