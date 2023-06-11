import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { colors } from "../theme/Colors";
import { Svg, Polygon, Text } from "react-native-svg";
import { userData } from "../constants/userData";

const RatioDisplay = ({userData}) => {
  const windowWidth = Dimensions.get("window").width;
  const ratio = windowWidth / 400; // Calculate the ratio between current width and desired width (400)

  const color = {
    'Under Training': colors.green,
    'Overreaching': colors.orange,
    'Over Training': colors.red,
  };

  const zoneColor= color[userData.zone] || colors.lightBlue;


  const adjustPoints = (points) => {
    return points
      .split(" ")
      .map((point) => {
        const [x, y] = point.split(",");
        const adjustedX = parseFloat(x) * ratio + 5; // Adjust x-coordinate based on the ratio
        const adjustedY = parseFloat(y);
        return `${adjustedX},${adjustedY}`;
      })
      .join(" ");
  };

  const adjustedPointsTopLeft = adjustPoints(
    "0,16.67 143.67,16.67 114.33,63.33 26.66,63.33"
  );
  const adjustedPointsBottomLeft = adjustPoints(
    "0,116.67 143.67,116.67 114.33,70 26.66,70"
  );
  const adjustedPointsHex = adjustPoints(
    "160,13.33 226.67,13.33 260,66.67 226.67,120 160,120 126.67,66.67"
  );
  const adjustedPointsTopRight = adjustPoints(
    "243.34,16.67 387.01,16.67 357.67,63.33 270,63.33"
  );
  const adjustedPointsBottomRight = adjustPoints(
    "243.34,116.67 387.01,116.67 357.67,70 270,70"
  );

  const calculateCenter = (points) => {
    const coordinates = points.split(" ").map((point) => point.split(","));
    const centerX =
      coordinates.reduce((sum, [x]) => sum + parseFloat(x), 0) /
      coordinates.length;
    const centerY =
      coordinates.reduce((sum, [, y]) => sum + parseFloat(y), 0) /
      coordinates.length;
    return [centerX, centerY];
  };

  const getPolygonCenter = (points) => {
    
    return calculateCenter(points);
  };

  const [centerX1, centerY1] = getPolygonCenter(adjustedPointsTopLeft);
  const [centerX2, centerY2] = getPolygonCenter(adjustedPointsBottomLeft);
  const [centerX3, centerY3] = getPolygonCenter(adjustedPointsHex);
  const [centerX4, centerY4] = getPolygonCenter(adjustedPointsTopRight);
  const [centerX5, centerY5] = getPolygonCenter(adjustedPointsBottomRight);

  return (
    
      <Svg width={windowWidth} height={150}>
        <Polygon
          id="date"
          points={adjustedPointsTopLeft}
          stroke={colors.gray}
          strokeWidth={2}
          strokeLinejoin="round"
        />
        <Text
          fill={colors.gray}
          stroke="none"
          fontSize="12"
          x={centerX1}
          y={centerY1 - 10}
          textAnchor="middle"
        >
          Date
        </Text>
        <Text
          fill={zoneColor}
          stroke="none"
          fontSize="15"
          fontWeight="bold"
          x={centerX1}
          y={centerY1 + 10}
          textAnchor="middle"
        >
          {userData.date}
        </Text>
        <Polygon
          id="zone"
          points={adjustedPointsBottomLeft}
          fill="none"
          stroke={colors.gray}
          strokeWidth={2}
          strokeLinejoin="round"
        />
        <Text
          fill={colors.gray}
          stroke="none"
          fontSize="12"
          x={centerX2}
          y={centerY2 - 10}
          textAnchor="middle"
        >
          Zone
        </Text>
        <Text
          fill={zoneColor}
          stroke="none"
          fontSize="15"
          fontWeight="bold"
          x={centerX2}
          y={centerY2 + 10}
          textAnchor="middle"
        >
          {userData.zone}
        </Text>
        <Polygon
          id="ratio"
          points={adjustedPointsHex}
          stroke={zoneColor}
          strokeWidth={4}
          strokeLinejoin="round"
        />
        <Text
          fill={zoneColor}
          stroke="none"
          fontSize="12"
          x={centerX3}
          y={centerY3 - 30}
          textAnchor="middle"
        >
          Ratio
        </Text>
        <Text
          fill={zoneColor}
          stroke="none"
          fontSize="42"
          x={centerX3}
          y={centerY3 + 15}
          textAnchor="middle"
        >
          {userData.ratio.toFixed(2)}
        </Text>
        <Polygon
          id="acute"
          points={adjustedPointsTopRight}
          stroke={colors.gray}
          strokeWidth={2}
          strokeLinejoin="round"
        />
        <Text
          fill={colors.gray}
          stroke="none"
          fontSize="12"
          x={centerX4}
          y={centerY4 - 10}
          textAnchor="middle"
        >
          Acute
        </Text>
        <Text
          fill={zoneColor}
          stroke="none"
          fontSize="15"
          fontWeight="bold"
          x={centerX4}
          y={centerY4 + 10}
          textAnchor="middle"
        >
          {userData.acuteWorkload}
        </Text>
        <Polygon
          id="chronic"
          points={adjustedPointsBottomRight}
          fill="none"
          stroke={colors.gray}
          strokeWidth={2}
          strokeLinejoin="round"
        />
        <Text
          fill={colors.gray}
          stroke="none"
          fontSize="12"
          x={centerX5}
          y={centerY5 - 10}
          textAnchor="middle"
        >
          Chronic
        </Text>
        <Text
          fill={zoneColor}
          stroke="none"
          fontSize="15"
          fontWeight="bold"
          x={centerX5}
          y={centerY5 + 10}
          textAnchor="middle"
        >
          {userData.chronicWorkload}
        </Text>
      </Svg>
    
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  ratioText: {
    flexDirection: "column",
  },
});

export default RatioDisplay;
