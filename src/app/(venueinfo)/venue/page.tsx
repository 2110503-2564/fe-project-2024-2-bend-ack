import CardPanel from "@/components/CardPanel";
import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";
import { Suspense } from "react";
import { LinearProgress } from '@mui/material';

export default function Venue() {
  const venuesPromise = getVenues();
  return (
    <main>
      <div className="text-center p-5">
        <Suspense fallback={<p className="m-20"><LinearProgress /></p>}>
          <VenueCatalog venuesJson={venuesPromise} />
        </Suspense>
      </div>
    </main>
  );
}