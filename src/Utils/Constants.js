export const BASE_APP_PATH = "/ally";
export const ROUTES = {
  WELCOME: "/welcome",
  HOME: "/home"
};
export const FILTER_KEY = "category";
export const ALPHABETS = Array(26)
  .fill(null)
  .map((item, index) => String.fromCharCode(index + 65).toLowerCase());

export const ERROR_MESSAGES = {
  API_ERROR: "It's not you, it's us. We'll be back shortly..."
}