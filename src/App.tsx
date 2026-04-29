import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { KPICards, CoreCharts } from "@/components/dashboard/Module1";
import { BusinessModuleDashboard } from "@/components/dashboard/Module2";
import { AlertsCenter } from "@/components/dashboard/Module3";
import { TrendAnalysis } from "@/components/dashboard/Module4";
import { Rankings } from "@/components/dashboard/Module5";
import { FunnelResources } from "@/components/dashboard/Module6";
import AISelection from "@/components/AISelection";
import AICustomerService from "@/components/AICustomerService";
import InventoryWarning from "@/components/InventoryWarning";
import DataMonitoring from "@/components/DataMonitoring";
import AdAnalysis from "@/components/AdAnalysis";

function Dashboard() {
  return (
    <div className="flex flex-col gap-5">
      {/* Module 1: Super Data Dashboard */}
      <section className="flex flex-col gap-5">
        <KPICards />
        <CoreCharts />
      </section>

      {/* Module 2: Full Business Module Dashboard */}
      <section>
        <BusinessModuleDashboard />
      </section>

      {/* Module 3: Real-time & Alerts */}
      <section>
        <AlertsCenter />
      </section>

      {/* Module 4: Trends Analysis */}
      <section>
        <TrendAnalysis />
      </section>

      {/* Module 5: Rankings */}
      <section>
        <Rankings />
      </section>

      {/* Module 6: Funnel & Resources */}
      <section>
        <FunnelResources />
      </section>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 font-sans">
        {/* Main Content Area */}
        <main className="max-w-[1920px] mx-auto w-full">
          <Routes>
            <Route path="/" element={<div className="p-6"><Dashboard /></div>} />
            <Route path="/ai-selection" element={<AISelection />} />
            <Route path="/ai-customer-service" element={<AICustomerService />} />
            <Route path="/inventory-warning" element={<InventoryWarning />} />
            <Route path="/data-monitoring" element={<DataMonitoring />} />
            <Route path="/ad-analysis" element={<AdAnalysis />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}
