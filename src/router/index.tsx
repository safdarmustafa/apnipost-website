import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { MarketingLayout } from "@/layouts/marketing-layout"
import { DeleteAccountPage } from "@/pages/delete-account"
import { HomePage } from "@/pages/home"
import { NotFoundPage } from "@/pages/not-found"
import { PrivacyPage } from "@/pages/privacy"
import { SupportPage } from "@/pages/support"
import { TermsPage } from "@/pages/terms"
import { ScrollToHash } from "@/router/scroll-to-hash"

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route element={<MarketingLayout />}>
          <Route index element={<HomePage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="delete-account" element={<DeleteAccountPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="home" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
