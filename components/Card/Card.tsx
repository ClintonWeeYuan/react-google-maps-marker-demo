import { motion } from "framer-motion";

interface CardProps {
  name: string;
  address: string;
  maxFee: number;
  minFee: number;
}

export default function Card({ name, address,maxFee, minFee }: CardProps) {
  return (
    <motion.div
      className="absolute bottom-6 left-0 right-0 mx-auto my-0 w-80"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      <div className="flex gap-2 py-2 px-6 rounded-lg shadow-xl bg-zinc-800 text-white">
        <div className="grow">
          <h1 className="font-bold">
            {name}
          </h1>
          <p className="text-sm">{address}</p>
          <div className="flex items-center gap-1 text-sm text-amber-400">

            <span className="text-white">Max: ${maxFee}, Min: ${minFee} </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
