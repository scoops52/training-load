import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { colors } from '../../theme/Colors'
import { Ionicons } from '@expo/vector-icons';


function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.offSetBlack, borderTopWidth: 0},
        tabBarActiveTintColor: colors.lightBlue,
        headerShadowVisible: false,
        headerTintColor: colors.gray,
        headerStyle: { backgroundColor: colors.offSetBlack}
      }}
    >
        <Tabs.Screen 
          name="summary"
          options={{
            title: "Daily Summary",
            tabBarIcon: ({ color }) => <TabBarIcon name="today-outline" color={color} />,
          }}
        />
        <Tabs.Screen 
        name="data" 
        options={{
          title: "Fit Data",

          tabBarIcon: ({ color }) => <TabBarIcon name="md-stats-chart-outline" color={color} />,
        }}
        />
        <Tabs.Screen 
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="person-circle-outline" color={color} />,
        }}
        />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  
})

export default _layout