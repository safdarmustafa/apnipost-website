import type { LucideIcon } from "lucide-react"
import {
  Cake,
  Compass,
  MessageCircle,
  Music2,
  UserRound,
  Video,
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
      "Browse Good Morning status, trending posts, festivals, and more content made for daily sharing.",
    icon: Compass,
  },
  {
    title: "Share to WhatsApp",
    description:
      "Share personalized posts to WhatsApp in one tap—ready for family groups and friends.",
    icon: MessageCircle,
  },
  {
    title: "Birthday Wish Videos",
    description:
      "Create birthday wish videos with your photo and name for a more personal greeting.",
    icon: Cake,
  },
  {
    title: "Name Ringtones",
    description:
      "Set special ringtones and audio styles, including name-based options for a unique call experience.",
    icon: Music2,
  },
  {
    title: "Your Photo & Name",
    description:
      "Add your profile photo and name to templates so every share feels branded and personal.",
    icon: UserRound,
  },
  {
    title: "Video Templates",
    description:
      "Use ready-made video templates for wishes, devotion, and daily moments—then download or share.",
    icon: Video,
  },
]
