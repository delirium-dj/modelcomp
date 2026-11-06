# GPT-5.4 Mini — findings by Flint

- Source: OpenAI / GPT-5.4 Mini
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 mini (Xhigh) (OpenAI; GPT-5.4 family — mini tier).
- **Short description:** OpenAI's most capable small models yet (GPT-5.4 mini and nano, released March 17, 2026), optimized for coding and subagents; GPT-5.4 mini approaches GPT-5.4-level pass rates on several evaluations (SWE-Bench Pro, OSWorld-Verified) while running more than 2x faster, delivering a strong performance-per-latency tradeoff.
- **Provider / access:** OpenAI API (`gpt-5.4-mini`); proprietary (closed weights); also via Codex (app/CLI/IDE/web) and ChatGPT (Free and Go via the "Thinking" feature; GPT-5.4 Thinking rate-limit fallback).
- **Release / knowledge:** Released March 17, 2026 (OpenAI blog; Artificial Analysis; Epoch AI); knowledge cutoff August 2025 (Artificial Analysis; OpenAI System Card addendum).
- **IDs:** `gpt-5.4-mini` (OpenAI API); GPT-5.4 mini (Xhigh) reasoning variant.
- **Context window:** 400K tokens (OpenAI API; Artificial Analysis).
- **Modalities:** Text + image input, text output; reasoning yes (Xhigh / extended thinking); tool use yes (tool use, function calling, web search, file search, computer use, skills — per OpenAI API docs).
- **Pricing (as of 2026-10-28):** $0.75 per 1M input tokens / $4.50 per 1M output tokens (OpenAI API; Artificial Analysis); cache discount 90%; blended ≈ $0.65 per 1M; GPT-5.4 nano: $0.20 in / $1.25 out per 1M.
- **Architecture:** Proprietary (closed weights); parameter count not disclosed.

### Raw benchmarks found

- Coding:
  - SWE-bench Pro (Public): **54.4%** (GPT-5.4 mini xhigh); GPT-5.4 57.7%, GPT-5 mini 45.7% (OpenAI blog).
  - Terminal-Bench 2.0: **60.0%** (mini xhigh); GPT-5.4 75.1%, GPT-5 mini 38.2% (OpenAI blog).
  - Toolathlon: **42.9%** (mini xhigh); GPT-5.4 54.6%, GPT-5 mini 26.9% (OpenAI blog).
  - MCP Atlas: **57.7%** (mini xhigh); GPT-5.4 67.2%, GPT-5 mini 47.6% (OpenAI blog).
  - GPQA Diamond: **88.0%** (mini xhigh); GPT-5.4 93.0%, GPT-5 mini 81.6% (OpenAI blog).
  - OSWorld-Verified: **72.1%** (mini xhigh); GPT-5.4 75.0%, GPT-5 mini 42.0% (OpenAI blog).
  - τ2-bench (telecom): **93.4%** (mini xhigh); GPT-5.4 98.9%, GPT-5 mini 74.1% (OpenAI blog).

- Reasoning / knowledge:
  - GPQA Diamond: **88.0%** (GPT-5.4 mini xhigh); 93.0% (GPT-5.4); 81.6% (GPT-5 mini) (OpenAI blog).
  - HLE w/ tool: **41.5%**; HLE w/o tools: **28.2%** (GPT-5.4 mini xhigh) (OpenAI blog).
  - ARC-AGI-2: **19%** (best score 95%) (Epoch AI).
  - ARC-AGI-1: **64%** (best score 99%) (Epoch AI).
  - FrontierMath T1-3 (v2): **51%**; Tier 4: **10%** (Epoch AI).
  - OTIS Mock AIME 2024-2025: **89%** (Epoch AI).
  - SimpleQA Verified: **29%** (Epoch AI).

- Long context:
  - OpenAI MRCR v2, 8 needles, 64K–128K: **47.7%**; 128K–256K: **33.6%** (GPT-5.4 mini xhigh) (OpenAI blog).
  - Graphwalks BFS 0K–128K: **76.3%**; Graphwalks parents 0–128K: **71.5%** (GPT-5.4 mini xhigh) (OpenAI blog).

- Multimodal / computer use:
  - MMMUPro w/ Python: **78.0%**; MMMUPro: **76.6%** (GPT-5.4 mini xhigh) (OpenAI blog).
  - OSWorld-Verified (computer use): **72.1%** (GPT-5.4 mini xhigh) (OpenAI blog).

### Cross-source comparison

- Official (OpenAI blog / GPT-5.4 mini announcement) vs independent (Artificial Analysis, Epoch AI): OpenAI reported GPT-5.4 mini (Xhigh) released March 17, 2026; Artificial Analysis independently confirmed proprietary closed weights, reasoning (Xhigh), 400K context, multimodal text+image, knowledge cutoff Aug 2025, $0.75/$4.50 pricing, 225.8 t/s, TTFT 115.18s; Epoch AI tracked ECI **149** (#67/253, #16/186 at release). Benchmark overlap on GPQA Diamond (88.0% vs 87%) and coding pass rates is consistent; ARC-AGI-2 numbers diverge by source (OpenAI did not report it for mini; Epoch AI measured 19%).

### Normalized scores (1-100)

- **Tool use: 70/100.** MCP Atlas **57.7%**, Toolathlon **42.9%**, τ2-bench telecom **93.4%** → mini-tier agentic strength is real (τ2) but below frontier proprietary tool tiers → capped below GPT-5.4-class tool numbers.
- **Reasoning: 70/100.** GPQA Diamond **88.0%**, OTIS Mock AIME **89%**, HLE w/o tools **28.2%** → solid reasoning; ARC-AGI-2 **19%** pulls the absolute ceiling down; closed weights + mini-tier positioning → capped below proprietary frontier reasoning.
- **Context window: 85/100.** 400K tokens (OpenAI API; Artificial Analysis) → mid-high context band; strong for the small-model class; long-context MRCR/Graphwalks retrieval results moderate.
- **Multimodal: 72/100.** Text + image input, text out; MMMUPro **76.6%**, OSWorld-Verified **72.1%** (computer use) → upper-mid multimodal band for the mini tier.
- **Coding: 75/100.** SWE-bench Pro **54.4%**, Terminal-Bench 2.0 **60.0%**, GPQA Diamond **88.0%** → mid-high coding band; approaches GPT-5.4 while running more than 2x faster.

- **Cost efficiency: 80/100.** $0.75/$4.50 per 1M with 225.8 t/s output and >2x speed advantage vs GPT-5.4 → strong cost-efficient value for high-volume coding / subagent workloads.

- **Overall Score: 74/100.** Mean of the five quality dims (Tool 70 + Reasoning 70 + Context 85 + Multimodal 72 + Coding 75) / 5 = 74.4 → half-up **74**; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-28
- Method: public web research prioritizing official model card/docs (OpenAI blog / GPT-5.4 mini) plus independent benchmarks/reviews (Artificial Analysis, Epoch AI) — official-first with independent benchmark comparison.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
