import 'kleur/colors';
import { n as decodeKey } from './chunks/astro/server_Ce4Nkgvr.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DDCfDluM.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/","cacheDir":"file:///C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/node_modules/.astro/","outDir":"file:///C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/dist/","srcDir":"file:///C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/src/","publicDir":"file:///C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/public/","buildClientDir":"file:///C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/dist/client/","buildServerDir":"file:///C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/lastfm","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/lastfm\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"lastfm","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/lastfm.ts","pathname":"/api/lastfm","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.3jJ_i8iD.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/lastfm@_@ts":"pages/api/lastfm.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_jacZAZVd.mjs","C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Dxla4yS3.mjs","C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/src/components/Background":"_astro/Background.DKmYoan0.js","C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/src/components/Sidebar":"_astro/Sidebar.CfW1rnQo.js","C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/src/components/Navbar":"_astro/Navbar.CjMAsFB0.js","C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/src/components/Home":"_astro/Home.B-VqwV25.js","C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/src/components/About":"_astro/About.CseyMl-s.js","C:/Users/ishpr/Documents/GitHub/Personal-Website-V2/src/components/Projects":"_astro/Projects.BJTGI4-w.js","@astrojs/react/client.js":"_astro/client.BscV2rgy.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/roboto-mono-cyrillic-600-normal.D6hakBNs.woff2","/_astro/roboto-mono-vietnamese-600-normal.C8KrKmbj.woff2","/_astro/roboto-mono-greek-600-normal.CdJGv13f.woff2","/_astro/outfit-latin-400-normal.CQm_KAGb.woff2","/_astro/roboto-mono-latin-600-normal.BUtagfHg.woff2","/_astro/roboto-mono-latin-ext-600-normal.CklGa-lP.woff2","/_astro/roboto-mono-cyrillic-ext-600-normal.BoRslbSc.woff2","/_astro/outfit-latin-ext-400-normal.7-alf5FM.woff2","/_astro/roboto-mono-cyrillic-600-normal.D05qSnPV.woff","/_astro/outfit-latin-400-normal.DodQBVgl.woff","/_astro/roboto-mono-greek-600-normal.Cw_aDk4G.woff","/_astro/roboto-mono-vietnamese-600-normal.D1b2BIa8.woff","/_astro/roboto-mono-latin-600-normal.CymxQhCL.woff","/_astro/roboto-mono-latin-ext-600-normal.BZRT7f0k.woff","/_astro/roboto-mono-cyrillic-ext-600-normal.DfO2df9e.woff","/_astro/outfit-latin-ext-400-normal.B56Gh2nA.woff","/_astro/index.3jJ_i8iD.css","/images/astro-icon-light-gradient.svg","/images/hand_waving.png","/images/Last-Laugh.jpg","/images/mail-64.png","/images/python_arcade.JPG","/images/right_arrow.svg","/images/room_booking_portal.png","/images/tempestuous_turrets.png","/images/website_homepage.png","/images/website_projectspage.png","/files/Ishpreet_Nagi_Resume.pdf","/_astro/About.CseyMl-s.js","/_astro/Background.DKmYoan0.js","/_astro/client.BscV2rgy.js","/_astro/Home.B-VqwV25.js","/_astro/index.BeZtTlr-.js","/_astro/index.CanFVZEd.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/Navbar.CjMAsFB0.js","/_astro/Projects.BJTGI4-w.js","/_astro/proxy.DBhAmvQF.js","/_astro/Sidebar.CfW1rnQo.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"2jZ22PyD0fjuo/wEphM6vyuDoLa6MUY+JLpcX2Et958="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
