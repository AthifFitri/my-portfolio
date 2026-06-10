import type { SVGProps } from 'react'

export function Claude(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="size-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.39 0 4.58-.84 6.3-2.25L14 15.45A4.98 4.98 0 1 1 12 7v2a3 3 0 1 0 2.12 5.12l4.95 4.95A9.96 9.96 0 0 0 22 12C22 6.48 17.52 2 12 2" />
    </svg>
  )
}
