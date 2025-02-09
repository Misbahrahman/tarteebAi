import type React from "react"

interface TarteebLogoProps {
  className?: string
}

const TarteebLogo: React.FC<TarteebLogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>
      </defs>
      {/* Background circle */}
      <circle cx="50" cy="50" r="48" fill="#0A2463" />
      {/* Arabic-inspired calligraphy for "Tarteeb" */}
      <path
        d="M30 70C30 70 40 60 50 60C60 60 70 70 70 70"
        stroke="url(#goldGradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M25 50C25 50 35 40 50 40C65 40 75 50 75 50"
        stroke="url(#goldGradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M30 30C30 30 40 20 50 20C60 20 70 30 70 30"
        stroke="url(#goldGradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Data points and connections */}
      <circle cx="30" cy="70" r="3" fill="#FFD700" />
      <circle cx="50" cy="60" r="3" fill="#FFD700" />
      <circle cx="70" cy="70" r="3" fill="#FFD700" />
      <circle cx="25" cy="50" r="3" fill="#FFD700" />
      <circle cx="75" cy="50" r="3" fill="#FFD700" />
      <circle cx="30" cy="30" r="3" fill="#FFD700" />
      <circle cx="50" cy="20" r="3" fill="#FFD700" />
      <circle cx="70" cy="30" r="3" fill="#FFD700" />
      <path d="M30 70L50 60L70 70M25 50L50 40L75 50M30 30L50 20L70 30" stroke="#FFD700" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

export default TarteebLogo

