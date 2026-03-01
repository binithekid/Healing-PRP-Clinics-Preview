import { ReactNode } from "react";

export default function BirminghamOShotLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="birmingham-oshot-route-wrapper">
      {children}
    </div>
  );
}
