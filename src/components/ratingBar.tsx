"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Rating from "@mui/material/Rating";
import createRating from "@/libs/createRating";

export default function RatingBar({ did, token, uid }: { did: string; token: string; uid: string }) {
  const [rate, setRate] = useState<number>(0);
  const router = useRouter();

  const makeRating = async () => {
    try {
      const res = await createRating({
        uid: uid,
        did: did,
        token: token,
        rating: rate,
      });
      router.refresh();
      alert("Rated successfully");
    } catch (error) {
      alert("Failed to rate");
    }
  };

  const handleSubmit = () => {
    if (did && rate !== null) {
      makeRating();
    } else {
      alert("Please select the rating");
    }
  };

  return (
    <div className="mt-10">
      <Rating
        name="rating"
        value={rate}
        precision={0.5}
        size="large"
        onChange={(e, newValue) => {
          if (newValue !== null) {
            setRate(newValue);
          }
        }}
      />
      <button
        className="w-full w-[70%] block my-10 rounded-xl bg-[#0e2f5f] font-bold text-white hover:bg-[#c5d9f3] px-3 py-1 hover:text-[#0e2f5f] shadow-sm"
        onClick={handleSubmit}
      >
        Rate Dentist
      </button>
    </div>
  );
}