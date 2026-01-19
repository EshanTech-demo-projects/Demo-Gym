// Temporary JSX global types to satisfy TS in VS Code tooling
// Note: Next.js with @types/react should normally provide these.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
export {};
