import {Logo} from "./ui";
import Link from "next/link";
import {footerLinks} from "@/content/navigation";
export function Footer(){return <footer className="footer"><div className="container"><div className="footer-top"><div><Logo/><p>Technology that connects<br/>what matters.</p></div><nav aria-label="Footer navigation">{footerLinks.map(n=><Link key={n.href} href={n.href}>{n.label}</Link>)}</nav></div><div className="footer-bottom"><span>© {new Date().getFullYear()} LLRD Technologies</span><span>People. Possibilities. Progress. Purpose.</span></div></div></footer>;}