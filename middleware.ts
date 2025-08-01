
import { createServerClient } from "@supabase/ssr";
import { NextResponse, NextRequest } from "next/server";
export default async function middleware(req: NextRequest) {

    console.log("redireccionando"); //al principio para ver si el middleware funciona
    
    const res = NextResponse.next()
    const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => {
          return req.cookies.getAll().map(cookie => ({
            name: cookie.name,
            value: cookie.value,
          }));
        },
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            res.cookies.set(name, value, options);
          });
        },
      },
    }
  );
    
    //searchs user_id
    const { data } = await supabase.auth.getUser();

    const user_id = data.user?.id;

    if (!user_id) {
        return NextResponse.redirect(new URL('/admin/login', req.url))
    }
    
    //search profile that matches user_id
    const {data: profile, error} = await supabase.from('profiles').select('role').eq('id', user_id).single();

    if (error || !profile) {
        return NextResponse.redirect(new URL('/admin/login', req.url))
    }
    
    if (req.nextUrl.pathname == "/redirect") {
        const dbPath = profile.role === "admin" ? '/admin/dashboardA' : '/admin/dasboardU';
        return NextResponse.redirect(new URL(dbPath, req.url))
    }

    return res;
}

export const config = {
  matcher: ['/redirect']
};
