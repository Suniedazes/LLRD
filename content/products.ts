export const statuses = ["AVAILABLE","BETA","TESTING","COMING_SOON","NOT_OFFERED"] as const;
export type PlatformStatus = typeof statuses[number];
export type Channel = "web" | "ios" | "android";
export interface Product {
 id:string; name:string; slug:string; logo?:string; tagline:string; shortDescription:string;
 longDescription:string; category:string; heroImage?:string; brandColors?:{background:string;foreground:string};
 websiteUrl?:string; webAppUrl?:string; webStatus:PlatformStatus;
 appleAppStoreUrl?:string; iosStatus:PlatformStatus; googlePlayUrl?:string; androidStatus:PlatformStatus;
 featured:boolean; displayOrder:number; supportUrl?:string; privacyUrl?:string; legalUrl?:string;
 securityUrl?:string; campaignLinks:string[]; comingSoonMessage?:string; waitlistEnabled:boolean;
 waitlistUrl?:string; platformNotes?:Partial<Record<Channel,string>>;
 features:{title:string;description:string}[]; media:{src:string;alt:string}[];
 attributionOrigins?:string[];
}
export const products: readonly Product[] = [];
export const orderedProducts = () => [...products].sort((a,b)=>a.displayOrder-b.displayOrder);
export const getProduct = (slug:string) => products.find(p=>p.slug===slug);
