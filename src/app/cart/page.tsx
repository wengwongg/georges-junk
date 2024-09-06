import PageWrapper from "@/components/layout/page-wrapper";
import CartSection from "@/components/layout/pages/cart/cart-section";
import ClearCartButton from "@/components/layout/pages/cart/clear-cart-button";
import TemplateSection from "@/components/template-section";

export default function CartPage() {
  return (
    <PageWrapper>
      <TemplateSection>
        <div className="mb-5 flex justify-between min-w-[17rem]">
          <h2 className="font-bold text-2xl">Cart</h2>
          <ClearCartButton />
        </div>

        <CartSection />
      </TemplateSection>
    </PageWrapper>
  );
}
