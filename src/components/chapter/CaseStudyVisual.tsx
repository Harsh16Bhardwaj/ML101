"use client";

import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { CaseStudyVisual as CaseStudyVisualId } from "@/content/chapters/types";

type CaseStudyVisualProps = {
  visual: CaseStudyVisualId;
};

const ruleDecayData = [
  { label: "Week 1", rules: 91, model: 90 },
  { label: "Week 2", rules: 82, model: 89 },
  { label: "Week 3", rules: 69, model: 88 },
  { label: "Week 4", rules: 55, model: 87 },
  { label: "Retrain", rules: 52, model: 92 },
];

const learningTypesData = [
  { label: "Labeled", value: 72, color: "#7dd3fc" },
  { label: "Unlabeled", value: 58, color: "#86efac" },
  { label: "Rewards", value: 42, color: "#f0abfc" },
  { label: "Hybrid", value: 51, color: "#fbbf24" },
];

const representativeData = [
  { x: 10, y: 17, type: "train" },
  { x: 22, y: 25, type: "train" },
  { x: 28, y: 31, type: "train" },
  { x: 42, y: 42, type: "train" },
  { x: 55, y: 53, type: "train" },
  { x: 64, y: 58, type: "train" },
  { x: 73, y: 67, type: "train" },
  { x: 82, y: 76, type: "production" },
  { x: 88, y: 81, type: "production" },
  { x: 94, y: 89, type: "production" },
];

const fitData = [
  { label: "Tiny", training: 42, validation: 39 },
  { label: "Simple", training: 68, validation: 66 },
  { label: "Good", training: 85, validation: 82 },
  { label: "Complex", training: 96, validation: 70 },
  { label: "Memorized", training: 100, validation: 54 },
];

export function CaseStudyVisual({ visual }: CaseStudyVisualProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-56 items-center justify-center rounded-[8px] border border-white/10 bg-black/20 p-3 text-xs uppercase tracking-[0.2em] text-zinc-600">
        Loading visual
      </div>
    );
  }

  return (
    <div className="flex h-56 items-center justify-center overflow-hidden rounded-[8px] border border-white/10 bg-black/20 p-3">
      {visual === "ruleDecay" ? (
        <LineChart width={300} height={210} data={ruleDecayData} margin={{ left: -18, right: 10, top: 10, bottom: 0 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
          <XAxis dataKey="label" stroke="#71717a" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
          <YAxis stroke="#71717a" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Line type="monotone" dataKey="rules" stroke="#fca5a5" strokeWidth={2} dot={false} name="Rules" />
          <Line type="monotone" dataKey="model" stroke="#7dd3fc" strokeWidth={2} dot={false} name="Model" />
        </LineChart>
      ) : null}

      {visual === "learningTypes" ? (
        <BarChart width={300} height={210} data={learningTypesData} margin={{ left: -18, right: 10, top: 10, bottom: 0 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
          <XAxis dataKey="label" stroke="#71717a" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
          <YAxis stroke="#71717a" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Bar dataKey="value" radius={[4, 4, 0, 0]} name="Signal">
            {learningTypesData.map((entry) => (
              <Cell key={entry.label} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      ) : null}

      {visual === "dataRepresentativeness" ? (
        <ScatterChart width={300} height={210} margin={{ left: -18, right: 10, top: 10, bottom: 0 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.08)" />
          <XAxis type="number" dataKey="x" stroke="#71717a" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} name="Input" />
          <YAxis type="number" dataKey="y" stroke="#71717a" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} name="Target" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} contentStyle={tooltipStyle} />
          <Scatter
            name="Training"
            data={representativeData.filter((point) => point.type === "train")}
            fill="#7dd3fc"
          />
          <Scatter
            name="Production"
            data={representativeData.filter((point) => point.type === "production")}
            fill="#fbbf24"
          />
        </ScatterChart>
      ) : null}

      {visual === "fitGeneralization" ? (
        <LineChart width={300} height={210} data={fitData} margin={{ left: -18, right: 10, top: 10, bottom: 0 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
          <XAxis dataKey="label" stroke="#71717a" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
          <YAxis stroke="#71717a" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Line type="monotone" dataKey="training" stroke="#86efac" strokeWidth={2} dot={false} name="Training score" />
          <Line type="monotone" dataKey="validation" stroke="#f0abfc" strokeWidth={2} dot={false} name="Validation score" />
        </LineChart>
      ) : null}
    </div>
  );
}

const tooltipStyle = {
  background: "#090b10",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 8,
  color: "#f4f4f5",
};
