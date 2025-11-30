/// <reference types="vite/client" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY?: string;
    }
  }
  
  var process: {
    env: {
      API_KEY?: string;
    };
  };
}

export {};
