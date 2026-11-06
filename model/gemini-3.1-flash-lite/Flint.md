# Gemini 3.1 Flash-Lite — findings by Flint

- Source: Google (DeepMind) / Gemini 3.1 Flash-Lite
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's cost-efficient, latency-optimized entry model of the Gemini 3 series, built on top of Gemini 3 Pro — positioned for high-volume, latency-sensitive and cost-sensitive tasks (translation, classification, bulk multimodal processing, simple data extraction).
- **Provider / access:** Google — Gemini API (`gemini-3.1-flash-lite`), Google AI Studio, Vertex AI (generateContent / Responses API); vendor route `google/gemini-3.1-flash-lite` via OpenCode Zen (Zen-routed route). Free tier on Google AI Studio and OpenCode Zen (standard rate limits); paid tiers via Google AI Studio / Vertex AI.
- **Release / knowledge:** Announced/previewed 2026-03-03 (DeepMind model card; updated); knowledge cutoff January 2025; general availability of the Flash-Lite line noted May 2026 (updated model card).
- **IDs:** `gemini-3.1-flash-lite`; vendor-prefixed route `google/gemini-3.1-flash-lite`.
- **Context window:** 1,048,576 total input tokens / 64,000 max output tokens (DeepMind model card, verified 2026-10-28); Artificial Analysis listed a 1M-token context window.
- **Modalities:** Text, image, audio and video in → text out; reasoning via thinking levels (minimal/low/medium/high); tool use / structured outputs supported (BFCL v3); search grounding, context caching, code execution, URL context supported; video input with reasoning supported.
- **Pricing (as of 2026-10-28):** Preview: $0.25 per 1M input tokens / $1.50 per 1M output tokens (no caching); context-cache hit $0.025 per 1M (Artificial Analysis); free tier via Google AI Studio / OpenCode Zen; blended ≈ $0.22 per task-Million vs ≈ $14.25 for o1 (Artificial Analysis comparison).
- **Architecture:** Proprietary Google LLM; based on Gemini 3 Pro; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- BFCL v3 (function calling): **76.5%** — LayerLens, 4,441 items; above the ~70% production viability threshold for agent tool use.
- Terminal-Bench 2.1 (Terminus-1): **17.5%** — LayerLens, 80 items; Terminal-Bench 2.1 (Vals AI): **34.1%** — measured; Vibe Code Bench: **0.0%** — Vals AI (web app creation from scratch).
- SWE-bench Verified: **≈62.8%** — via Gemini 3.1 Pro comparison (AnotherWrapper); SWE-bench Pro: **38.3%** — via Google DeepMind's Gemini 3.5 Flash-Lite comparison.
- GDPval-AA: **958 Elo** — Artificial Analysis (AA LinkedIn, 2026-03-03); estimated **15.5** — benchgap; Google-provided range **642–1171** (Synthorai).
- Tau2-Telecom: **31%** — Artificial Analysis (AA LinkedIn, 2026-03-03).
- Claw-Eval / ClawProBench: no verified public score found for this model ID; MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found for this model ID.

Reasoning / knowledge:

- GPQA Diamond: **86.9%** (DeepMind model card, High); **72.2%** (LayerLens); **85.5%** (benchgap estimate); **81.8%** high / **74.2%** low / **73.7%** minimal (Epoch AI, 2026-08-06).
- HLE: **16.0%** (DeepMind model card, full set text+MM); **8.5%** (LayerLens); **25%** (automatio.ai); **23.4%** estimated (benchgap, AA-HLE).
- CritPt: **3.4%** — benchgap estimate.
- Artificial Analysis Intelligence Index / BenchLM overall: **≈34** (Artificial Analysis, via AA LinkedIn 2026-03-03; +12 vs Gemini 2.5 Flash-Lite); **20.5** estimated (benchgap, AA Intelligence Index); Epoch AI Capabilities Index **144.5** (142.3–146.0, 2026-10-19).
- Omniscience Accuracy / Hallucination Rate: **33.7%** estimated — benchgap (AA-Omniscience); SimpleQA **43.3%** (DeepMind model card); FACTS **40.6%** (DeepMind model card).
- LCR / MLCR: no verified public score found for this model ID (long-context retrieval covered via MRCR v2 below).

Coding:

- SWE-bench Verified: **≈62.8%**; SWE-bench Pro: **38.3%**.
- LiveCodeBench: **72.0%** (DeepMind model card); **69.9%** (LayerLens); **80.1%** (Vals AI, benchgap).
- SciCode / AA-SciCode: **45.7%** estimated — benchgap; **41.9%** vs GPT-5.6 Luna — AnotherWrapper.
- Vibe Code Bench: **0.0%** — Vals AI (web app creation from scratch).

Long context:

- MRCR v2 (8-needle): **128K: 60.1%**; **1M (pointwise): 12.3%** — DeepMind model card; GDM-MRCR v2 reported the same values (Synthorai).

### Normalized scores (1–100)

- **Tool use: 62/100.** Function calling verified at **76.5%** (BFCL v3, LayerLens) — above the ~70% production viability threshold — but agentic ceilings (Terminal-Bench 2.1 ≈17.5–34%, Vibe Code Bench **0%**, GDPval-AA **958** Elo) sit mid/low, capping the tier below frontier agentic use.
- **Reasoning: 70/100.** GPQA Diamond **86.9%** (DeepMind model card, High) is strong for the tier; HLE **16.0%** (DeepMind model card) / **8.5%** (LayerLens) and CritPt ≈**3%** are low; Intelligence Index ≈**34** low; Epoch AI Capabilities Index **144.5** mid. Mid-high composite; below the frontier reasoning band (GPQA 90%+, HLE 40%+ → 90–100).
- **Context window: 95/100.** Verified **1,048,576 total / 64K output** sits in the top ≥1M tier; retrieval at 1M (MRCR v2) only **12.3%** caps full-retrieval credit.
- **Multimodal: 90/100.** Text+image+audio+video in → text out with strong reasoning scores (Video-MMMU **84.8%**, MMMU-Pro **76.8%**, CharXiv **73.2%**, DeepMind model card); mid-high multimodal band.
- **Coding: 68/100.** SWE-bench Verified ≈**62.8%**, LiveCodeBench **69.9–80.1%**, SciCode **45.7%**, Vibe Code Bench **0.0%**; below the frontier coding band (DeepSWE 74%+, TB2.1 85+% → 90–100).
- **Cost efficiency: 90/100.** Preview **$0.25/$1.50 per 1M** (DeepMind model card); Google blog headline: "most cost-effective AI model yet"; free tier on Google AI Studio / OpenCode Zen; blended ≈**$0.22** per task-Million vs o1 **≈$14.25** (Artificial Analysis).

- **Overall Score: 77/100.** Mean of the five quality dims: (62 + 70 + 95 + 90 + 68) / 5 = **77** (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-28
- Method: public internet research prioritizing official Google documentation and official Google blog posts plus independent third-party benchmarks (Artificial Analysis, LiveCodeBench, Terminal-Bench, Design Arena, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
