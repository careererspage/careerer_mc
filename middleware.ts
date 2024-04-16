import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const nextIntlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "es", "ar", "pt", "ph"],
  // Used when no locale matches
  localePrefix: "never",
  // localePrefix: "as-needed",

  defaultLocale: "en",
});

export default function (req: NextRequest): NextResponse {
  return nextIntlMiddleware(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)", "/([\\w-]+)?/servers/(.+)"],
};
