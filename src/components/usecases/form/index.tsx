import { InputProps } from "@/components/ui/input"
import { labelVariants } from "@/components/ui/label"
import { createField } from "hookform-field"
import dynamic from "next/dynamic"

const LazyInput = dynamic(() =>
  import("@/components/ui/input").then((modifier) => ({
    default: modifier.Input,
  }))
)

const Field = createField(
  {
    text: (props: InputProps) => <LazyInput {...props} type="text" />,
  },
  {
    suspenseFallback: (
      <div className="h-9 w-full rounded-md bg-muted animate-pulse" />
    ),
    classNames: {
      label: labelVariants({ className: "mb-2 block" }),
      description: "text-sm text-muted-foreground",
      message: "text-sm text-destructive",
    },
  }
)

export default Field
