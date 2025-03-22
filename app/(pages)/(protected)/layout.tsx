interface CustomLayoutProps {
  children: React.ReactNode;
}

export default function ProtectedLayout({ children }: CustomLayoutProps) {
  return <div>{children}</div>;
}
