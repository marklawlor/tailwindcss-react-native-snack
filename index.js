const { Platform } = require("react-native")

if (Platform.OS === "web") {
  if (!document.getElementById("tailwind-cdn")) {
    let script = document.createElement("script");
    script.id = "tailwind-cdn";
    script.type = "text/javascript";
    script.src = "https://cdn.tailwindcss.com";
    document.getElementsByTagName("head")[0].appendChild(script);
  }
}

module.exports = require("./tailwindcss-react-native-output")
