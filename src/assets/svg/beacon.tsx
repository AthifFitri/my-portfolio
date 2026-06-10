import type { SVGProps } from 'react'

export function Beacon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="size-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2l4 7h-8zm-4 9h8v11H8zm10 0h2v11h-2zm-14 0h2v11H4z" />
    </svg>
  )
}
