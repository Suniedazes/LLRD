const keys=["utm_source","utm_medium","utm_campaign","utm_content","utm_term"];
export function withAttribution(destination:string,search:string,allowedOrigins:readonly string[]=[]):string {
 let url:URL;
 try{url=new URL(destination);}catch{return destination;}
 if(url.protocol!=="https:"||!allowedOrigins.includes(url.origin)) return destination;
 const params=new URLSearchParams(search);
 for(const key of keys){const value=params.get(key);if(value && value.length<=200) url.searchParams.set(key,value);}
 return url.href;
}