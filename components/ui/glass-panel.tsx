import React from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassPanel({ className, children, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "bg-white/50 backdrop-blur-[40px] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)] rounded-[32px] overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
