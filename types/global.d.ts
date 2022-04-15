declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MS_COEFF: string
    }
  }
}

export {}
