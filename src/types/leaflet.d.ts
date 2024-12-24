declare module 'leaflet' {
  export * from '@types/leaflet';
}

declare module '*.png' {
  const value: string;
  export default value;
}