interface Props {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: Props) {
  return (
    <main className="mb-auto flex flex-col justify-center items-center text-center">
      {children}
    </main>
  );
}
