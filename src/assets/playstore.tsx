import React from "react"

interface PlaystoreProps {
  className?: string
}

const Playstore: React.FC<PlaystoreProps> = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    width="800px"
    height="800px"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{"ionicons-v5_logos"}</title>
    <path d="M48,59.49v393a4.33,4.33,0,0,0,7.37,3.07L260,256,55.37,56.42A4.33,4.33,0,0,0,48,59.49Z" />
    <path d="M345.8,174,89.22,32.64l-.16-.09c-4.42-2.4-8.62,3.58-5,7.06L285.19,231.93Z" />
    <path d="M84.08,472.39c-3.64,3.48.56,9.46,5,7.06l.16-.09L345.8,338l-60.61-57.95Z" />
    <path d="M449.38,231l-71.65-39.46L310.36,256l67.37,64.43L449.38,281C468.87,270.23,468.87,241.77,449.38,231Z" />
  </svg>
)
export default Playstore
