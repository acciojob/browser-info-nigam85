//your JS code here. If required.
window.onload = function() {
  displayBrowserInfo();
};

function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName = "";
  let version = "";

  if (userAgent.indexOf("Firefox") > -1) {
    browserName = "Firefox";
    version = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Chrome") > -1) {
    browserName = "Chrome";
    version = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Edge") > -1) {
    browserName = "Edge";
    version = userAgent.match(/Edge\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Safari") > -1) {
    browserName = "Safari";
    version = userAgent.match(/Version\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
    browserName = "Opera";
    version = userAgent.match(/(?:Opera|OPR)\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Trident") > -1) {
    browserName = "Internet Explorer";
    const rvPos = userAgent.indexOf("rv:");
    version = userAgent.substring(rvPos + 3, userAgent.indexOf(".", rvPos));
  } else {
    browserName = "Unknown";
    version = "N/A";
  }

  return { browserName, version };
}

function displayBrowserInfo() {
  const browserInfoElement = document.getElementById("browser-info");
  const { browserName, version } = getBrowserInfo();

  const infoMessage = `You are using ${browserName} version ${version}`;
  browserInfoElement.textContent = infoMessage;
}
