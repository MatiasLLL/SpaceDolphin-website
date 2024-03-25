/// <reference types="vite/client" />

// declare module '*.svg' {
//     import * as React from 'react';
//     export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
//     const src: string;
//     export default src;
// }

declare module '*.svg' {
    import React from 'react';
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}