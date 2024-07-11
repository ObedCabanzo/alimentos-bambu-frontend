import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./map-component.tsx'), {
  ssr: false,
});

export { MapComponent };