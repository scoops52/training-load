


export const colors = {
    blue: "#007AFF",
    lightBlue: "#56CCF2",
    black: "#0A0A0A",
    offSetBlack: "#121214",
    lightBlack: "#232323",
    gray: "#a6a6a6",
    // gray: "rgba(255,255,255,0.40)",
    white: "#ffffff",
    green: "#6FCF97",
    red: "#EB5757",
    orange: "#F2994A",
}

export const getColorByZone = (zone) => {
    const zoneColors = {
      'Under Training': colors.green,
      'Overreaching': colors.orange,
      'Over Training': colors.red,
    };
  
    return zoneColors[zone] || colors.lightBlue;
  };