import ReactLenis from "lenis/react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <div className="flex flex-col min-h-screen font-sans relative text-black overflow-auto style-scrollbar bg-[#f2f2f2]">
        <main className="flex-1">{children}</main>
      </div>
    </ReactLenis>
  );
}
