import PageWrapper from "@/components/layout/page-wrapper";
import CartSection from "@/components/layout/pages/cart/cart-section";
import ClearCartButton from "@/components/layout/pages/cart/clear-cart-button";
import TemplateSection from "@/components/template-section";

export default function CartPage() {
  return (
    <PageWrapper>
      <TemplateSection>
        <h2 className="font-bold text-2xl mb-3">Cart</h2>

        <CartSection />
      </TemplateSection>
    </PageWrapper>
  );
}
