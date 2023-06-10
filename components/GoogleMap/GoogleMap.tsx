import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { useMemo } from "react";
import { Hotel } from "../../types/hotel";
import Map from "../Map";
import Marker from "../CustomMarker";
import {HealthProvider} from "../../services/fetchHealthProviders/types";

const render = (status: Status) => {
  if (status === Status.FAILURE) {
    return <p>failed</p>;
  }
  return <p>loading...</p>;
};

interface GoogleMapProps {
  onIdle?: (map: google.maps.Map) => void;
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onMarkerClick: (payload: HealthProvider) => void;
  markers?: HealthProvider[];
  center: google.maps.LatLngLiteral;
  zoom: number;
  apiKey: string;
  highlightedMarkerId?: string;
}

export default function GoogleMap({
  apiKey,
  onClick,
  onIdle,
  zoom,
  center,
  markers,
  onMarkerClick,
  highlightedMarkerId,
}: GoogleMapProps) {
  const filtered = useMemo(() => {
    return markers?.filter((m) => m.coordinates.lat && m.coordinates.long);
  }, [markers]);

  return (
    <div className="flex h-full">
      <Wrapper apiKey={apiKey} render={render}>
        <Map
          className="grow h-full"
          center={center}
          zoom={zoom}
          minZoom={2}
          maxZoom={18}
          onIdle={onIdle}
          onClick={onClick}
          fullscreenControl={false}
          streetViewControl={false}
          mapTypeControl={false}
          zoomControl={false}
          clickableIcons={false}
        >
          {filtered?.map((healthProvider) => (
            <Marker
              key={healthProvider.id}
              healthProvider={healthProvider}
              onClick={onMarkerClick}
              highlight={healthProvider.id === highlightedMarkerId}
            />
          ))}
        </Map>
      </Wrapper>
    </div>
  );
}
