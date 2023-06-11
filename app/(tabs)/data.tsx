import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../theme/Colors';
import ChronicChart from '../../components/ChronicChart';
import ZoneBar from '../../components/ZoneBar';
import { userData } from '../../constants/userData';
import HorZoneBar from '../../components/HorZoneBar';
import RatioChart from '../../components/RatioChart';
import AcuteChart from '../../components/AcuteChart';

const data = () => {
  return (
    <ScrollView style={{backgroundColor: colors.black, flex: 1}}>
      <View>
      <RatioChart />
      <ChronicChart />
      <AcuteChart />
      </View>
    </ScrollView>
    
  )
}

export default data