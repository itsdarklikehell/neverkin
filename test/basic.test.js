// Basic tests for Neverkin
const { describe, it, expect } = require('@jest/globals');

describe('Neverkin', () => {
  it('should have a valid manifest', () => {
    const manifest = require('../app/styx-frontend/public/manifest.json');
    expect(manifest.name).toBe('Neverkin');
    expect(manifest.display).toBe('standalone');
  });

  it('should have a service worker', () => {
    const fs = require('fs');
    const path = require('path');
    const swPath = path.join(__dirname, '../app/styx-frontend/public/sw.js');
    expect(fs.existsSync(swPath)).toBe(true);
  });

  it('should have dark mode CSS', () => {
    const fs = require('fs');
    const path = require('path');
    const cssPath = path.join(__dirname, '../app/styx-frontend/src/dark-mode.css');
    expect(fs.existsSync(cssPath)).toBe(true);
  });
});
