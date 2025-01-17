import { useCallback, useMemo } from "react";
import { Hotel } from "../../types/hotel";
import OverlayView from "../OverlayView";
import { motion } from "framer-motion";
import {HealthProvider} from "../../services/fetchHealthProviders/types";

interface CustomMarkerProps {
  healthProvider: HealthProvider;
  map?: google.maps.Map;
  onClick: (payload: HealthProvider) => void;
  highlight?: boolean;
}

export default function CustomMarker({
  healthProvider,
  map,
  onClick,
  highlight,
}: CustomMarkerProps) {
  const price = useMemo(() => {
    return healthProvider.fees.min;
  }, [healthProvider]);

  const handleClick = useCallback(() => {
    onClick(healthProvider);
  }, [onClick, healthProvider]);

  return (
    <>
      {map && (
        <OverlayView
          position={{
            lat: healthProvider.coordinates.lat as number,
            lng: healthProvider.coordinates.long as number,
          }}
          map={map}
          zIndex={highlight ? 99 : 0}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: Math.random() * 0.3 } }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
          >
            <button
              className={`rounded-full bg-zinc-600 py-1.5 px-2 drop-shadow text-xs text-white ${
                highlight && "text-black bg-zinc-50 font-bold py-2 px-2.5"
              }`}
              onClick={handleClick}
            >{`$ ${price}`}</button>
          </motion.div>
        </OverlayView>
      )}
    </>
  );
}
