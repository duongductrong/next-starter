import { routing } from "@/i18n/routing"
import createMiddleware from "next-intl/middleware"

export default createMiddleware(routing)

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(vi|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
}
