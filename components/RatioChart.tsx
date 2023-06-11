import { View, Dimensions, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { userData } from '../constants/userData';
import { colors } from '../theme/Colors';
import { Line } from 'react-native-svg';

const RatioChart = () => {
    const screenWidth = Dimensions.get('window').width;
    const chartWidth = screenWidth - 16;

    const chartData = userData.map((dataPoint) => ({
        date: new  Date(dataPoint.date),
        ratio: dataPoint.ratio,
      }));

      const chartLabels = userData.map((dataPoint) => {
        const date = new Date(dataPoint.date);
        return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
      });
      
        
    const getDotColor = (dataPoint) => {
        if (dataPoint < 0.8 ) {
            return colors.green;
        } else if (dataPoint > 1.3 && dataPoint < 1.5) {
            return colors.orange
        } else if (dataPoint > 1.49) {
            return colors.red
        } else {
            return colors.lightBlue
        };
    };

    const filteredChartData = chartData
    .filter((data, index) => index % 7 === 0)
    .map((data) => data.ratio);
      const filteredChartLabels = chartLabels.filter((label, index) => index % 7 === 0);

      const chartConfig = {
        backgroundGradientFrom: colors.black,
        backgroundGradientTo: colors.lightBlack,
        color: (opacity = 1) => colors.lightBlue,
        labelColor: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2,
        propsForBackgroundLines: {
            stroke: colors.white,
            strokeOpacity: 0.25
        }
      }

  return (
     <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>
                ACWR Ratio Over Time
            </Text>
        </View>
      <LineChart
        data={{
          labels: filteredChartLabels,
          datasets: [
            {
              data: filteredChartData,
            },
          ],
        }}
        width={chartWidth}
        height={220} // Adjust the height as per your needs
        chartConfig={chartConfig}
        bezier
        getDotColor={getDotColor}
        
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        gap: 15,
    },
    titleContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
      color: colors.gray,
      fontSize: 18,
      fontWeight: "bold"
    },
  });

export default RatioChart