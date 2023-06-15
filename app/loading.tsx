import React from "react";
import Image from "next/image";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-3/4">
      <Image
        className="mb-5 animate-bounce"
        src="/rocket.svg"
        width={50}
        height={50}
        alt="planet"
      />
      <p className="text-lg">Loading...</p>
    </div>
  );
}

export default Loading;
