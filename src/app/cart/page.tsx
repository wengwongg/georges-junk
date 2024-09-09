import PageWrapper from "@/components/layout/page-wrapper";
import CartSection from "@/components/pages/cart/cart-section";
import TemplateSection from "@/components/template-section";

export default function CartPage() {
  return (
    <PageWrapper>
      <TemplateSection>
        <h2 className="font-bold text-2xl mb-4">your cart</h2>
        <CartSection />
      </TemplateSection>
    </PageWrapper>
  );
}
