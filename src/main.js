// POLAR styles (bundled by Vite straight from the package)
import '@polar/polar/polar.css'
import './style.css'

import { createMap } from '@polar/polar/client'
import { addPlugin, updateState } from '@polar/polar'
// plugins not covered by mapConfiguration keys are added as plugin containers
import pluginZoom from '@polar/polar/plugins/zoom'

// Layer ids from the Hamburg service register (services-internet.json)
const basemapId = '23420' // Basemap.de (Farbe)
const basemapGreyId = '23421' // Basemap.de (Grau)

const map = await createMap(
  // id of the div the map renders into
  'polarstern',
  // service register: URL (or local array of service description objects)
  'https://geoportal-hamburg.de/lgv-config/services-internet.json',
  // map configuration
  {
    startCenter: [565874, 5934140], // Hamburg, EPSG:25832 (POLAR default)
    layers: [
      {
        id: basemapId,
        visibility: true,
        type: 'background',
        name: 'Basemap.de (Farbe)',
      },
      {
        id: basemapGreyId,
        visibility: false,
        type: 'background',
        name: 'Basemap.de (Grau)',
      },
    ],
    layout: 'nineRegions',
    // some bundled plugins, enabled via mapConfiguration keys
    fullscreen: {},
    scale: {
      showScaleSwitcher: true,
    },
  }
)

// further plugins (e.g. zoom) are attached as plugin containers
addPlugin(map, pluginZoom())

// The map instance can be manipulated via updateState, e.g. switch language:
updateState(map, 'core', 'language', 'de')
