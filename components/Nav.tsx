"use client"

import Logo from "./logos/Logo"

export const Nav = () => {
  return (
    <div
      className={
        "px-4 py-2 flex items-center justify-center h-14 z-50 bg-card border-b border-border"
      }
    >
      <div>
        <Logo className={"h-5 w-auto"} />
        <div className="text-sm text-center pt-2 opacity-25">Demo Booth</div>
      </div>
    </div>
  )
}
