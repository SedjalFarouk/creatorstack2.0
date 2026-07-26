window.trackAffiliateClick = function (tool, location) {
  if (typeof gtag === "function") {
    gtag("event", "affiliate_click", {
      tool: tool,
      button_location: location,
    });
  }
};