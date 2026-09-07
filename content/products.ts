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
export const products: readonly Product[] = [{id:"sonie",name:"SONIE",slug:"sonie",tagline:"Family lives here.",shortDescription:"A thoughtful place for family history, stories and the connections that shape us.",longDescription:"SONIE is an LLRD product concept centered on the people, memories and stories that make a family feel connected.",category:"Family connection",webStatus:"COMING_SOON",iosStatus:"COMING_SOON",androidStatus:"COMING_SOON",featured:true,displayOrder:1,campaignLinks:[],comingSoonMessage:"SONIE is coming soon. More details and access options will be published here as they are ready.",waitlistEnabled:false,features:[{title:"Family stories",description:"A future home for the memories and stories families want to keep close."},{title:"Shared connection",description:"Thoughtful ways to bring people and generations together."}],media:[]}];
export const orderedProducts = () => [...products].sort((a,b)=>a.displayOrder-b.displayOrder);
export const getProduct = (slug:string) => products.find(p=>p.slug===slug);
