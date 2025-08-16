{
  /*se importa "useState": Hook de React para manejar estado (en este caso, el color del marcador)*/
}
import { useState } from "react";
import { Map, Marker } from "pigeon-maps";

{
  /*Mapa, componente utilizado para crear los mapas interactivos con la herramienta Pingeon-maps*/
}

export function Mapa() {
  {
    /*"hue" -> valor numérico que representa el matiz del color en el modelo HSL
    "setHue" -> función para cambiar el valor de hue
    "color" -> cadena con el color calculado, usando HSL para que el color cambie gradualmente.
    "% 360" -> asegura que el matiz siempre esté en el rango de 0° a 359°*/
  }
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;

  {
    /*height={200} -> altura del mapa en píxeles.
    defaultCenter -> coordenadas [latitud, longitud]
    defaultZoom={18} -> nivel de zoom inicial. 
    

    En "Marker"
    width={50} → tamaño del marcador.
    anchor={[50.879, 4.6997]} → coordenadas del marcador.
    color={color} → color dinámico calculado con hue.
    onClick={() => setHue(hue + 20)} → cada clic aumenta el matiz en 20°, cambiando el color.*/
  }

  return (
    <Map height={200} defaultCenter={[10.4069, -75.5015]} defaultZoom={18}>
      <Marker
        width={50}
        anchor={[10.407, -75.5015]}
        color={color}
        onClick={() => setHue(hue + 20)}
      />
      <Marker
        width={50}
        anchor={[10.407, -75.5015]}
        color={color}
        onClick={() => setHue(hue + 20)}
      ></Marker>
    </Map>
  );
}
