// jest.config.js

module.exports = {
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js', '<rootDir>/setupTests.js'], // Tambahkan setupTests.js di sini
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '^@/components/(.*)$': '<rootDir>/components/$1',
      '^@/store/(.*)$': '<rootDir>/store/$1',
      '^@/lib/(.*)$': '<rootDir>/lib/$1', // Sesuaikan dengan kebutuhan Anda
    },
  };
  