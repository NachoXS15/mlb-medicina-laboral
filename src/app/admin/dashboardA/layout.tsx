import HeaderA from "@/app/components/HeaderA";

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <>
        <HeaderA />
        {children}
    </>
  )
}
