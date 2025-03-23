import { classMerge } from "../utils/classMerge"

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean
  variant?: "base" | "icon" | "iconSmall"
}
const variants = {
  button: {
    base: "h-12",
    icon: "h-12 w-12",
    iconSmall: "h-8 w-8"
  },
}

export function Button({children, className, isLoading, variant="base", type = "button", ...rest}:Props){
  return(
    <button
    disabled={isLoading}
    className={
      classMerge(["flex items-center justify-center bg-green-700 rounded-lg text-white cursor-pointer [hover:bg-green-800 transition ease-initial disabled:opacity-50", 
      variants.button[variant],
      isLoading && "cursor-progress",
      className
    ])}
    type={type} 
    {...rest}
    >
      {children}
    </button>
  )
}