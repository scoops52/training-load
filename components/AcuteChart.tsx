import { View, Dimensions, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { userData } from '../constants/userData';
import { colors } from '../theme/Colors';
import { Line } from 'react-native-svg';

const AcuteChart = () => {
    const screenWidth = Dimensions.get('window').width;
    const chartWidth = screenWidth - 16;

    const chartData = userData.map((dataPoint) => ({
        date: new  Date(dataPoint.date),
        acuteWorkload: dataPoint.acuteWorkload,
      }));

      const chartLabels = userData.map((dataPoint) => {
        const date = new Date(dataPoint.date);
        return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
      });

    const filteredChartData = chartData
    .filter((data, index) => index % 7 === 0)
    .map((data) => data.acuteWorkload);
      const filteredChartLabels = chartLabels.filter((label, index) => index % 7 === 0);

      const chartConfig = {
        backgroundGradientFrom: colors.black,
        backgroundGradientTo: colors.lightBlack,
        color: (opacity = 1) => colors.white,
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
                Acute Workload Over Time
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

export default AcuteChart