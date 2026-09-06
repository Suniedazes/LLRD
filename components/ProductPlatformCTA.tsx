import type {Product} from "@/content/products";
import {platformActions,waitlistHref} from "@/lib/platforms";
import {TrackedLink} from "./TrackedLink";
import {Badge} from "./ui";
const names={web:"Web app",ios:"iOS",android:"Android"};
const events={web:"open_web_clicked",ios:"app_store_clicked",android:"play_store_clicked"} as const;
export function ProductPlatformCTA({product,campaignId}:{product:Product;campaignId?:string}){
 const waitlist=waitlistHref(product);
 return <div><div className="platform-grid">{platformActions(product).map(a=><div className="platform" key={a.channel}><div className="platform-title"><h3>{names[a.channel]}</h3><Badge>{a.status.replaceAll("_"," ").toLowerCase()}</Badge></div>{a.href?<TrackedLink href={a.href} event={events[a.channel]} productId={product.id} campaignId={campaignId} origins={product.attributionOrigins}>{a.label}</TrackedLink>:<p className="channel-state">{a.label}</p>}{product.platformNotes?.[a.channel]&&<p>{product.platformNotes[a.channel]}</p>}</div>)}</div>{waitlist&&<div className="waitlist"><TrackedLink href={waitlist} event="waitlist_clicked" productId={product.id} campaignId={campaignId} origins={product.attributionOrigins}>Join waitlist</TrackedLink></div>}</div>;
}