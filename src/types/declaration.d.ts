declare module '*.svg?url' {
  const content: any;
  export default content;
}

declare global {
  namespace NodeJS {
    interface Global {
      _db: Db;
    }
  }
}
