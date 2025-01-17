import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import React from "react";
interface CategoriesProps {
  children: React.ReactNode;
}

const CategoriesLayout: React.FC<CategoriesProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default CategoriesLayout;
