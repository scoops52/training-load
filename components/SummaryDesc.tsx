import { View, Text, StyleSheet } from 'react-native'
import { colors, getColorByZone } from '../theme/Colors'
import { useEffect, useState } from 'react';

const SummaryDesc = ({userZone}) => {
    const [desc, setDesc] = useState('');
    const [title, setTitle] = useState('')
    
    const zoneColor = getColorByZone(userZone)

    const undertrainingDesc = "Your recent workouts have not been a difficult enough load for your body to continue creating positive adaptations.  This is not an issue in the short term and may be beneficial when recovery is needed (i.e, after periods of overreaching or when sick/overly stressed). However if you stay in this zone too long, your training capacity will decrease, which will show as your chronic workload decreasing.";

    const optimalDesc = "You are in the sweet spot. Your recent workouts are difficult enough to elicit positive adaptaions, while not pushing your body to the point of diminishing returns. Continuing to operate in this zone will lead to consistent progress in your fitness goals. As your training capacity increases over time, you may need to slowly increase the level of your workouts to match this increased capacity."

    const overreachingDesc = "You are nearing a point of overload for your body. This can be from workouts that exceed your capacity, or physical/mental/emotional stress. This is not an issue in the short term, and may be beneficial to elicit certain training adaptations. However, staying in this zone for too long will lead to overtraining and your body breakingdown."

    const overtrainingDesc = "Your recent workouts have put your body is in a state of breakdown, due to exceeding your trainig capacity by too much. More is not always better when it comes to fitness, and you can acutally lose progress by pushing too hard. This can lead to physical, mental, and emotional symptoms. It is recomended you lower the level of your workouts and recover until you are in an optimal or undertraining zone."

    useEffect(() => {
        if (userZone === 'Under Training') {
            setDesc(undertrainingDesc);
        } else if (userZone === 'Overreaching') {
            setDesc(overreachingDesc)
        } else if (userZone === 'Over Training') {
            setDesc(overtrainingDesc);
        } else {
            setDesc(optimalDesc)
        };
        setTitle(userZone)
    }, [userZone])



  return (
    <View style={styles.summaryContainer}>
        <Text style={[styles.summaryTitle, { color: zoneColor}]}>{title}</Text>
        <Text style={styles.summary}>
            {desc}
        </Text>
      </View>
  )
}

const styles = StyleSheet.create({
    summaryContainer: {
        padding: 10,
        borderColor: colors.white,
        borderRadius: 5,
        borderLeftWidth: 2,
        borderRightWidth: 2,
      },
      summaryTitle: {
        fontSize: 22,
        marginBottom: 10,
      },
      summary: {
        color: colors.gray
      },
})

export default SummaryDesc