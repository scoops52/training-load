import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../theme/Colors";

const HorZoneBar = ({ userRatio }) => {
  const getOpacity = (userRatio, threshold) => {
    if (userRatio < threshold) {
      return 0.1;
    } else {
      return 1;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <View
          style={[
            styles.bar,
            {
              backgroundColor: colors.green,
              opacity: getOpacity(userRatio, 0.7),
            },
          ]}
        />
        <View
          style={[
            styles.bar,
            {
              backgroundColor: colors.green,
              opacity: getOpacity(userRatio, 0.8),
            },
          ]}
        />
        <View
          style={[
            styles.bar,
            {
              backgroundColor: colors.lightBlue,
              opacity: getOpacity(userRatio, 0.9),
            },
          ]}
        />
        <View
          style={[
            styles.bar,
            {
              backgroundColor: colors.lightBlue,
              opacity: getOpacity(userRatio, 1.0),
            },
          ]}
        />
        <View
          style={[
            styles.bar,
            {
              backgroundColor: colors.lightBlue,
              opacity: getOpacity(userRatio, 1.1),
            },
          ]}
        />
        <View
          style={[
            styles.bar,
            {
              backgroundColor: colors.lightBlue,
              opacity: getOpacity(userRatio, 1.2),
            },
          ]}
        />
        <View
          style={[
            styles.bar,
            {
              backgroundColor: colors.lightBlue,
              opacity: getOpacity(userRatio, 1.3),
            },
          ]}
        />
        <View
          style={[
            styles.bar,
            {
              backgroundColor: colors.orange,
              opacity: getOpacity(userRatio, 1.4),
            },
          ]}
        />
        <View
          style={[
            styles.bar,
            {
              backgroundColor: colors.orange,
              opacity: getOpacity(userRatio, 1.49),
            },
          ]}
        />
        <View
          style={[
            styles.bar,
            {
              backgroundColor: colors.red,
              opacity: getOpacity(userRatio, 1.5),
            },
          ]}
        />
      </View>
      <View style={styles.labelContainer}>
        <View style={[styles.label, { height: 36, borderColor: colors.green }]}>
          <Text style={styles.labelText}> Undertraining</Text>
          <Text style={styles.labelSubText}> Below 0.8</Text>
        </View>
        <View
          style={[styles.label, { height: 91, borderColor: colors.lightBlue }]}
        >
          <Text style={styles.labelText}> Optimal</Text>
          <Text style={styles.labelSubText}> 0.8 - 1.3</Text>
        </View>
        <View
          style={[styles.label, { height: 36, borderColor: colors.orange }]}
        >
          <Text style={styles.labelText}> Overreaching</Text>
          <Text style={styles.labelSubText}> 1.3 - 1.49</Text>
        </View>
        <View style={[styles.label, { height: 18, borderColor: colors.red }]}>
          <Text style={styles.labelText}> Overtraining</Text>
          <Text style={styles.labelSubText}> 1.5+</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    margin: 10,
    gap: 4,
  },
  barContainer: {
    flexDirection: "row",
    gap: 4,
    borderColor: colors.gray,
    borderWidth: 2,
    padding: 2,
    width: 250
  },
  bar: {
    flex: 1,
    height: 40,
  },
  labelContainer: {
    flexDirection: "row",
    gap: 4,
    padding: 2,
  },
  label: {
    borderTopWidth: 2,
    width: 85,
    paddingLeft: 2,
  },
  labelText: {
    color: colors.gray,
    fontSize: 12,
  },
  labelSubText: {
    color: colors.gray,
    fontSize: 8,
  },
});

export default HorZoneBar;
