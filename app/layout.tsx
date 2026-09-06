import type {Metadata} from "next";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {company} from "@/content/company";
import {brand} from "@/content/brand";
import "./globals.css";
export const metadata:Metadata={metadataBase:new URL(company.domain),title:{default:company.name,template:"%s | LLRD Technologies"},description:company.description,robots:{index:process.env.SITE_INDEXABLE==="true",follow:process.env.SITE_INDEXABLE==="true"},icons:brand.favicon?{icon:brand.favicon}:undefined};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-scroll-behavior="smooth"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>;}