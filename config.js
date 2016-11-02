const {
  REQUEST_THROTTLE_MS,
  REQUEST_TIMEOUT_MS,
} = process.env;

export default {
  REQUEST_THROTTLE_MS: Number(REQUEST_THROTTLE_MS) || 5000,
  REQUEST_TIMEOUT_MS: Number(REQUEST_TIMEOUT_MS) || 5000,
  CACHE_LIFETIME_IN_SECONDS: 2592000, // 30 days
};