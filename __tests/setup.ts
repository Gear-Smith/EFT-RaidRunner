import { afterEach, vitest } from 'vitest';
import { cleanup } from '@testing-library/react';
import "@testing-library/jest-dom";
import "react";

// expect.extend(matchers);

// Used for the Theme-Provider, as JSDOM does not support watchMedia
Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vitest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vitest.fn(), // deprecated
      removeListener: vitest.fn(), // deprecated
      addEventListener: vitest.fn(),
      removeEventListener: vitest.fn(),
      dispatchEvent: vitest.fn(),
    })),
  });

afterEach(() => {
  cleanup();
});