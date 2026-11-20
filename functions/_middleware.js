/**
 * Cloudflare Pages Middleware for elitesoftwaretech-coming-soon
 * Redirects any staged/unfinished subdomain attached to this Pages project
 * cleanly to https://coming-soon.elitesoftwaretech.cc/?from=<host> (HTTP 302).
 */
export async function onRequest(context) {
    const url = new URL(context.request.url);
    const host = url.hostname.toLowerCase();

    if (host !== "coming-soon.elitesoftwaretech.cc" && !host.endsWith(".pages.dev")) {
        const target = `https://coming-soon.elitesoftwaretech.cc/?from=${encodeURIComponent(host)}`;
        return Response.redirect(target, 302);
    }

    return context.next();
}
