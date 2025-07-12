import { useState } from "react"
import { Map, Marker } from "pigeon-maps"

export function Mapa () {
  const [hue, setHue] = useState(0)
  const color = `hsl(${hue % 360}deg 39% 70%)`

  return (
    <Map height={200} defaultCenter={[10.4069, -75.5015]} defaultZoom={18}>
      <Marker 
        width={50}
        anchor={[10.4070, -75.5015]} 
        color={color} 
        onClick={() => setHue(hue + 20)} 
      />
      <Marker 
        width={50}
        anchor={[10.4070, -75.5015]} 
        color={color} 
        onClick={() => setHue(hue + 20)} 
      >
      </Marker>
    </Map>
  )
}