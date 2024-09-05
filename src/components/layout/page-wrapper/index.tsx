interface Props {
  children: React.ReactNode;
  center?: boolean;
}

export default function PageWrapper({ center, children }: Props) {
  return (
    <main
      className={`mb-auto ${
        center && "mt-auto"
      } flex flex-col justify-center items-center text-center`}
    >
      {children}
    </main>
  );
}
