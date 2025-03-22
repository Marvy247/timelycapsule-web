"use client";

interface CustomLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: CustomLayoutProps) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
