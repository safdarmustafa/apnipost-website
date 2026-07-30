import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

type FaqItemProps = {
  value: string
  question: string
  answer: string
  className?: string
}

export function FaqItem({ value, question, answer, className }: FaqItemProps) {
  return (
    <AccordionItem
      className={cn("border-border px-1", className)}
      value={value}
    >
      <AccordionTrigger className="py-4 text-base font-medium text-foreground hover:no-underline">
        {question}
      </AccordionTrigger>
      <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground">
        <p>{answer}</p>
      </AccordionContent>
    </AccordionItem>
  )
}
