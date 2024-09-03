interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function TemplateSection({ children, className }: Props) {
  return (
    <section className={`w-full flex justify-center py-10 ${className}`}>
      <div className="mx-4">{children}</div>
    </section>
  );
}
