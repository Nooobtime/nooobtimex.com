"use client";

import { ReactNode, useEffect, useMemo, useRef, useState } from "react";

function useOnceVisible<T extends HTMLElement>(
  options: IntersectionObserverInit = {}
) {
  const ref = useRef<T>(null);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  const memoizedOptions = useMemo(() => options, [JSON.stringify(options)]);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasBeenVisible(true);
        observer.disconnect();
      }
    }, memoizedOptions);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [memoizedOptions]);

  return { ref, hasBeenVisible };
}

interface SectionTransitionProps {
  children: ReactNode;
}

const SectionTransition = ({ children }: SectionTransitionProps) => {
  const { ref, hasBeenVisible } = useOnceVisible<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 transform py-4 ${
        hasBeenVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
};

export default SectionTransition;
