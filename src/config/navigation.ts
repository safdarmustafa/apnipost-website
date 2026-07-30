export type NavItem = {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
}

export type NavGroup = {
  title: string
  items: NavItem[]
}

export type NavigationConfig = {
  main: NavItem[]
  footer: NavItem[]
  footerGroups: NavGroup[]
}

const legalItems: NavItem[] = [
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms & Conditions", href: "/terms" },
  { title: "Account Deletion", href: "/delete-account" },
]

export const navigationConfig: NavigationConfig = {
  main: [
    { title: "Features", href: "/#features" },
    { title: "About", href: "/#about" },
    { title: "FAQ", href: "/#faq" },
    { title: "Support", href: "/support" },
  ],
  footer: [...legalItems, { title: "Support", href: "/support" }],
  footerGroups: [
    {
      title: "Product",
      items: [
        { title: "Features", href: "/#features" },
        { title: "About", href: "/#about" },
        { title: "Screenshots", href: "/#screenshots" },
        { title: "FAQ", href: "/#faq" },
      ],
    },
    {
      title: "Legal",
      items: legalItems,
    },
    {
      title: "Help",
      items: [{ title: "Support", href: "/support" }],
    },
  ],
}
