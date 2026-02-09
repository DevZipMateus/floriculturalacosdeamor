
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const CoroasPage = lazy(() => import("./pages/CoroasPage"));
const BuquesPage = lazy(() => import("./pages/BuquesPage"));
const CestasPage = lazy(() => import("./pages/CestasPage"));
const SobreNosPage = lazy(() => import("./pages/SobreNosPage"));

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/coroas" element={<CoroasPage />} />
              <Route path="/buques" element={<BuquesPage />} />
              <Route path="/cestas" element={<CestasPage />} />
              <Route path="/sobre" element={<SobreNosPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
