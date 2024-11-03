import Sidebar from "@/components/sidebar/page"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex">
        {/* SIDEBAR */}
        <div className="w-[20%]">
            <Sidebar />
        </div>

        {/* MAIN */}
        <div className="w-[80%]">
            {children}
        </div>
    </main>
  );
}
