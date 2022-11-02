/** @type {import('next').NextConfig} */
const intercept = require('intercept-stdout');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
};

function interceptStdout(text) {
  if (text.includes('Duplicate atom key')) {
    return '';
  }
  return text;
}

// Intercept in dev and prod
intercept(interceptStdout);

module.exports = nextConfig;
