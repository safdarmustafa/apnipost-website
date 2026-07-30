import type { LucideIcon } from "lucide-react"
import {
  Compass,
  Layers,
  MessageCircle,
  Search,
  UserRound,
  Zap,
} from "lucide-react"

export type Feature = {
  title: string
  description: string
  icon: LucideIcon
}

export const features: Feature[] = [
  {
    title: "Explore Categories",
    description:
      "Browse curated posts across categories built for local communities, students, and everyday sharing.",
    icon: Compass,
  },
  {
    title: "Share to WhatsApp",
    description:
      "Share any post to WhatsApp in one tap—fast, familiar, and ready for your conversations.",
    icon: MessageCircle,
  },
  {
    title: "Personalized Templates",
    description:
      "Shared content is branded with your profile photo and name for a polished, personal touch.",
    icon: Layers,
  },
  {
    title: "Fast Experience",
    description:
      "A lightweight Android experience designed to feel instant from discovery to share.",
    icon: Zap,
  },
  {
    title: "User Profiles",
    description:
      "Create your profile once and let every share carry your identity across WhatsApp.",
    icon: UserRound,
  },
  {
    title: "Easy Discovery",
    description:
      "Find relevant posts quickly with a clean layout built for Hindi, Urdu, and local audiences.",
    icon: Search,
  },
]
