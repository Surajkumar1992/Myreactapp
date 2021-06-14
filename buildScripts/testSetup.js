// This file isn't transpilled, so must use CommonJs and ESS

// Register babel to transpile before our test runs.
require('@babel/register')();

// Disable webpack features that mocha doesn't understand
require.extensions['.css'] = function() {};

