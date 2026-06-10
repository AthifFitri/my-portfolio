import type { SVGProps } from 'react'

export function Bolt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="size-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M13 2L4 14h6l-1 8 9-12h-6z" />
    </svg>
  )
}
