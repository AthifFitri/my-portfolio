import type { SVGProps } from 'react'

export function Hulu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="size-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M5 7h2v4h4V7h2v10h-2v-4H7v4H5zm10 0h2v8h4v2h-6z" />
    </svg>
  )
}
