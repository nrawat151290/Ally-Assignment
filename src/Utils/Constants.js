export const BASE_APP_PATH = "/ally";
export const ROUTES = {
  WELCOME: "/welcome",
  HOME: "/home"
};
export const FILTER_KEY = "category";
export const ALPHABETS = Array(26)
  .fill(null)
  .map((item, index) => String.fromCharCode(index + 65).toLowerCase());

export const MESSAGES = {
  API_ERROR: `It's not you, it's us! Please try refreshing the page...`,
  NO_KEY_RESULTS: "No key results to display",
  LOADING_MESSAGE: "Sit back and relax. OKRs are on their way..."
};