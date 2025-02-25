import type { FC, SVGAttributes } from "react"
import { useId } from "react"

export type HumeLogoProps = SVGAttributes<SVGSVGElement>

export default function MedTrainLogo({ className }: { className?: string }) {
  return (
    <div className={`flex items-baseline ${className}`}>
      <span
        className="
          text-2xl 
          font-extrabold 
          text-emerald-500 
          tracking-tight 
          mr-0.5
          animate-fade-in
        "
      >
        ADHD
      </span>
      <span
        className="
          text-2xl 
          font-light 
          text-gray-500 
          tracking-wider
          animate-slide-in
          opacity-0
        "
        style={{ animationDelay: "500ms" }}
      >
        MedTrainer
      </span>
    </div>
  )
}
