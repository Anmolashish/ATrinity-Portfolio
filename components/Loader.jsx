"use client";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";

export default function Loader() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start the loading bar when the pathname changes
    setProgress(30);

    // Complete the loading bar after a short delay
    const timeout = setTimeout(() => {
      setProgress(100);
    }, 500); // Adjust the delay as needed

    // Clean up the timeout when the component unmounts or the pathname changes
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <LoadingBar
      color="#1A44C9"
      progress={progress}
      onLoaderFinished={() => setProgress(0)} // Reset progress when finished
      height={4} // Customize the height of the bar
    />
  );
}
