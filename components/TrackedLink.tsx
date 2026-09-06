"use client";
import {useEffect} from "react";
import type {ReactNode} from "react";
import {track,type AnalyticsEvent} from "@/lib/analytics";
import {withAttribution} from "@/lib/attribution";
export function TrackedLink({href,event,productId,campaignId,origins=[],children}:{href:string;event:AnalyticsEvent;productId?:string;campaignId?:string;origins?:string[];children:ReactNode}) {
 return <a className="button" href={href} onClick={e=>{track(event,{productId,campaignId});e.currentTarget.href=withAttribution(href,window.location.search,origins);}}>{children}<span aria-hidden="true">↗</span></a>;
}
export function ViewEvent({event,productId,campaignId}:{event:"product_viewed"|"campaign_viewed";productId?:string;campaignId?:string}){useEffect(()=>{track(event,{productId,campaignId});},[event,productId,campaignId]);return null;}
