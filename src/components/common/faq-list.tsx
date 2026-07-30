"use client"

import { FaqItem } from "@/components/common/faq-item"
import { Accordion } from "@/components/ui/accordion"
import type { FaqItem as FaqItemType } from "@/config/faqs"

type FaqListProps = {
  items: FaqItemType[]
  idPrefix?: string
  className?: string
}

export function FaqList({
  items,
  idPrefix = "faq",
  className,
}: FaqListProps) {
  return (
    <Accordion className={className}>
      {items.map((item, index) => (
        <FaqItem
          answer={item.answer}
          key={item.question}
          question={item.question}
          value={`${idPrefix}-${index}`}
        />
      ))}
    </Accordion>
  )
}
