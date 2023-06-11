import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { background } from 'native-base/lib/typescript/theme/styled-system';
import { colors } from '../../theme/Colors';
import ShapeDisplay from '../../components/ShapeDisplay'
import ZoneBar from '../../components/ZoneBar';
import { userData } from '../../constants/userData';
import SummaryDesc from '../../components/SummaryDesc';




const Summary = () => {
  // const data = userData[1];
  const data = userData[userData.length - 1];
  // const data = userData[userData.length - 3]

  return (
    <ScrollView style={styles.container}>
      <View style={styles.summaryDisplayContainer}>
        <ShapeDisplay userData={data} />
      </View>
      <SummaryDesc userZone={data.zone} />
      <View style={styles.zoneBarContainer}>
          <ZoneBar userRatio={data.ratio} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black, 
    flex: 1,  
    
    gap: 30
  },
  summaryDisplayContainer: {
    marginTop: 30,
    borderColor: colors.lightBlack,
    borderBottomWidth: 2,
  },
  zoneBarContainer: {
    width: '100%'
  }
})

export default Summary