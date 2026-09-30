import type { MetadataRoute } from "next";

const SITE_URL = "https://www.mlb-medicinalaboral.com.ar";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/admin/", "/api/", "/error", "/disabled-user"],
		},
		sitemap: `${SITE_URL}/sitemap.xml`,
	};
}
