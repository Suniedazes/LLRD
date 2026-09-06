import type {MetadataRoute} from "next";
import {company} from "@/content/company";
import {products} from "@/content/products";
import {campaigns} from "@/content/campaigns";
import {publicCampaign} from "@/lib/campaigns";
export default function sitemap():MetadataRoute.Sitemap{
 const routes=["","/products","/about","/impact","/support","/privacy","/security","/legal","/contact"];
 for(const p of products){routes.push("/products/"+p.slug);for(const section of ["privacy","security","support","delete-account","legal"])routes.push("/products/"+p.slug+"/"+section);}
 for(const c of campaigns.filter(publicCampaign))routes.push("/campaigns/"+c.slug);
 return routes.map(route=>({url:company.domain+route}));
}export const dynamic="force-dynamic";
