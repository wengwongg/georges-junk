interface Props {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: Props) {
  return (
    <div className="flex flex-col px-2 mb-auto mt-10 text-center">
      {children}
    </div>
  );
}
