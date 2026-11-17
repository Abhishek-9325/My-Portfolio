"use client";

import React, { useState } from "react";
import { BsDiagram3, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowDown } from "react-icons/hi";

const diagrams = {
  "shopify-invoice": {
    title: "System Flow & Queue Architecture",
    steps: [
      {
        step: "01",
        label: "Store Trigger",
        desc: "Shopify Admin Action / Webhook Event",
        tag: "Ingestion",
        color: "text-[#16f2b3] border-[#16f2b3]/40 bg-[#16f2b3]/10",
      },
      {
        step: "02",
        label: "Next.js App Service",
        desc: "HMAC Validation & Payload Normalization",
        tag: "Middleware",
        color: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10",
      },
      {
        step: "03",
        label: "Background Job Queue",
        desc: "Batch Worker Queue & Rate Limiting",
        tag: "Async Queue",
        color: "text-violet-400 border-violet-500/40 bg-violet-500/10",
      },
      {
        step: "04",
        label: "Batch Invoice Engine",
        desc: "PDF Generation & Tax Calculation",
        tag: "Processor",
        color: "text-amber-400 border-amber-500/40 bg-amber-500/10",
      },
      {
        step: "05",
        label: "Shopify API Dispatch",
        desc: "Status Update & Retry-Backoff Handler",
        tag: "Resilience",
        color: "text-pink-400 border-pink-500/40 bg-pink-500/10",
      },
    ],
    resilienceNote: "Automated retry mechanism with exponential backoff handles transient API limits and queue failures.",
  },
  "kylas-delhivery": {
    title: "Integration & Dispatch Pipeline",
    steps: [
      {
        step: "01",
        label: "Kylas CRM Trigger",
        desc: "Lead / Order Dispatch Request",
        tag: "CRM Event",
        color: "text-[#16f2b3] border-[#16f2b3]/40 bg-[#16f2b3]/10",
      },
      {
        step: "02",
        label: "Next.js Integration Core",
        desc: "Address Verification & Payload Mapping",
        tag: "Transformation",
        color: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10",
      },
      {
        step: "03",
        label: "Delhivery Logistics API",
        desc: "Single & Bulk Waybill Creation",
        tag: "Logistics API",
        color: "text-violet-400 border-violet-500/40 bg-violet-500/10",
      },
      {
        step: "04",
        label: "Label & Barcode Engine",
        desc: "Thermal / A4 Barcode PDF Generation",
        tag: "Print Engine",
        color: "text-amber-400 border-amber-500/40 bg-amber-500/10",
      },
      {
        step: "05",
        label: "Status & Tracking Sync",
        desc: "AWB Callback to CRM + Error Queue",
        tag: "Sync & Fallback",
        color: "text-pink-400 border-pink-500/40 bg-pink-500/10",
      },
    ],
    resilienceNote: "Fail-safe error logging and automated re-submission for shipping API exceptions and bulk shipment edge cases.",
  },
  "seo-dashboard": {
    title: "Audit Automation & Reporting Architecture",
    steps: [
      {
        step: "01",
        label: "QA / Admin Dashboard",
        desc: "Next.js Client & URL Portfolio Manager",
        tag: "Control Panel",
        color: "text-[#16f2b3] border-[#16f2b3]/40 bg-[#16f2b3]/10",
      },
      {
        step: "02",
        label: "Audit Scheduler",
        desc: "Automated Cron Trigger & Batch Dispatch",
        tag: "Job Scheduler",
        color: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10",
      },
      {
        step: "03",
        label: "PageSpeed Insights API",
        desc: "Lighthouse & Core Web Vitals Extraction",
        tag: "Google API",
        color: "text-violet-400 border-violet-500/40 bg-violet-500/10",
      },
      {
        step: "04",
        label: "Metrics Aggregator",
        desc: "FCP, LCP, CLS & Performance Analysis",
        tag: "Data Pipeline",
        color: "text-amber-400 border-amber-500/40 bg-amber-500/10",
      },
      {
        step: "05",
        label: "Automated Reporting",
        desc: "Trend Export (Reduced 1 Workday to 1 Hr)",
        tag: "Value Delivery",
        color: "text-pink-400 border-pink-500/40 bg-pink-500/10",
      },
    ],
    resilienceNote: "Asynchronous parallel query batching ensures audit runs never exceed PageSpeed rate limits or drop metric records.",
  },
};

export default function ArchitectureDiagram({ diagramId }) {
  const [isOpen, setIsOpen] = useState(false);
  const data = diagrams[diagramId];

  if (!data) return null;

  return (
    <div className="mt-4 rounded-lg border border-violet-500/30 bg-[#090d24]/90 overflow-hidden shadow-inner">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3.5 py-2.5 flex items-center justify-between text-left hover:bg-violet-950/30 transition-colors cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-violet-300 group-hover:text-violet-200 tracking-wider uppercase">
          <BsDiagram3 className="text-[#16f2b3] text-sm" />
          <span>System Architecture Flow</span>
          <span className="text-[10px] text-gray-400 lowercase font-normal">
            ({isOpen ? "click to hide" : "click to expand diagram"})
          </span>
        </span>
        <span className="text-violet-400 text-xs">
          {isOpen ? <BsChevronUp /> : <BsChevronDown />}
        </span>
      </button>

      {isOpen && (
        <div className="p-3.5 sm:p-4 border-t border-violet-500/20 bg-[#070a1e]/95">
          <p className="text-xs font-semibold text-gray-200 mb-3 tracking-wide flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16f2b3]"></span>
            {data.title}
          </p>

          {/* Responsive Flow Pipeline */}
          <div className="flex flex-col md:flex-row md:items-stretch justify-between gap-2.5 md:gap-1.5">
            {data.steps.map((node, index) => (
              <React.Fragment key={index}>
                <div className="flex-1 rounded-md border border-[#252c54] bg-[#0d1330] p-2.5 flex flex-col justify-between shadow-sm hover:border-[#16f2b3]/50 transition-colors">
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[10px] font-mono text-gray-400 font-bold">
                      {node.step}
                    </span>
                    <span
                      className={`text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded border ${node.color}`}
                    >
                      {node.tag}
                    </span>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white tracking-wide leading-tight mb-1">
                      {node.label}
                    </h5>
                    <p className="text-[11px] text-gray-300 leading-snug">
                      {node.desc}
                    </p>
                  </div>
                </div>

                {index < data.steps.length - 1 && (
                  <div className="flex items-center justify-center text-violet-400 my-0.5 md:my-0">
                    <span className="hidden md:inline">
                      <HiOutlineArrowNarrowRight size={18} />
                    </span>
                    <span className="md:hidden">
                      <HiOutlineArrowNarrowDown size={16} />
                    </span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Resilience / Reliability Highlight */}
          {data.resilienceNote && (
            <div className="mt-3 pt-2.5 border-t border-[#1f2649] flex items-start gap-2">
              <span className="text-[10px] uppercase font-bold text-pink-400 tracking-wider whitespace-nowrap bg-pink-500/10 px-1.5 py-0.5 rounded border border-pink-500/30">
                Reliability &amp; Scale
              </span>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                {data.resilienceNote}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
