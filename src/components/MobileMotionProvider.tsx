"use client";

import { MotionConfig } from "framer-motion";

export default function MobileMotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="never">{children}</MotionConfig>;
}
