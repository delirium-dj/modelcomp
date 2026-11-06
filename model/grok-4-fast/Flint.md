# Grok 4 Fast — findings by Flint

- Source: xAI / Grok 4 Fast
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast (xAI; Grok family — Fast tier).
- **Short description:** xAI's cost-efficient reasoning model ("Pushing the Frontier of Cost-Efficient Intelligence"), built on Grok 4 learnings; unified architecture blending reasoning and non-reasoning modes in one model; 2M token context; frontier-level performance with exceptional token efficiency; state-of-the-art cost-to-intelligence ratio per Artificial Analysis.
- **Provider / access:** xAI API (`grok-4-fast-reasoning`, `grok-4-fast-non-reasoning`); proprietary (closed weights); also via OpenRouter / Vercel AI Gateway / grok.com.
- **Release / knowledge:** Released September 19, 2025 (xAI blog; Epoch AI); knowledge cutoff not stated in verified sources.
- **IDs:** `grok-4-fast-reasoning` / `grok-4-fast-non-reasoning` under the `grok-4-fast` family.
- **Context window:** 2,000,000 tokens (xAI blog; Artificial Analysis).
- **Modalities:** Text + image input, text output; unified reasoning + non-reasoning modes (steered via system prompts); tool use yes (end-to-end tool-use RL, web/X search).
- **Pricing (as of 2026-10-28):** xAI: input $0.20 / 1M tokens (<128k), $0.40 / 1M (≥128k); output $0.50 / 1M (<128k), $1.00 / 1M (≥128k); cached input $0.05 / 1M. Artificial Analysis: $0.20 in / $0.50 out per 1M (blended ≈ $0.23 / 1M).
- **Architecture:** Proprietary (closed weights); unified reasoning/non-reasoning weights; parameter count not disclosed.

### Raw benchmarks found

- Reasoning / knowledge:
  - GPQA Diamond: **85.7%** (Grok 4 Fast); 87.5% (Grok 4); 79.0% (Grok 3 Mini); 85.7% (GPT-5); 82.3% (GPT-5 Mini).
  - AIME 2025 (no tools): **92.0%** (Grok 4 Fast); 91.7% (Grok 4); 83.0% (Grok 3 Mini); 94.6% (GPT-5); 91.1% (GPT-5 Mini).
  - HMMT 2025 (no tools): **93.3%**.
  - HLE (no tools): **20.0%** (Grok 4 Fast); 25.4% (Grok 4); 11.0% (Grok 3 Mini); 24.8% (GPT-5); 16.7% (GPT-5 Mini).
  - LiveCodeBench (Jan-May): **80.0%** (Grok 4 Fast); 79.0% (Grok 4); 70.0% (Grok 3 Mini); 86.8% (GPT-5); 77.4% (GPT-5 Mini).
- Agentic / tool use:
  - BrowseComp: **44.9%** (Grok 4 Fast); 43.0% (Grok 4); SimpleQA: **95.0%** (Grok 4 Fast); 94.0% (Grok 4); Reka Research Eval: **66.0%**.
  - LMArena: Search Arena `grok-4-fast-search` **#1** (1163 Elo, +17 over o3-search); Text Arena `grok-4-fast` **#8** (on par with Grok 4; all comparable-size peers ≤18th).
- Cost efficiency: Grok 4 Fast matched Grok 4 performance with **40% fewer thinking tokens**; **98% price reduction** vs Grok 4 to achieve the same frontier performance (per Artificial Analysis independent review) → SOTA cost-to-intelligence.

### Cross-source comparison

- Reasoning: xAI (Grok 4 Fast) vs Epoch AI (ECI **144**, #94/253; at release **#8** of 153 tracked) and Artificial Analysis (Intelligence Index SOTA cost-to-intelligence) vs Grok 4 (ECI 146, #78) — Fast tier sits just below flagship Grok 4 on raw capability but far below in cost.
- Benchmark conflicts: xAI reported Grok 4 Fast numbers vs Grok 4 / Grok 3 Mini / GPT-5 / GPT-5 Mini — consistent direction; SimpleQA 95.0 vs 94.0 shows strong absolute performance; BrowseComp 44.9 vs 43.0.

### Normalized scores (1-100)

- **Tool use: 65/100.** BrowseComp **44.9%**, SimpleQA **95.0%**, Reka Research Eval **66.0%**; native tool-use RL + SOTA search → strong cost-efficient agentic tier; capped below flagship Grok 4 tool numbers.
- **Reasoning: 70/100.** GPQA Diamond **85.7%**, AIME 2025 **92.0%**, HMMT 2025 **93.3%**, LiveCodeBench **80.0%** → capable reasoning; ECI **144** below flagship Grok 4 (**146**) → mid-high frontier band; capped by closed weights + cost-efficient positioning.
- **Context window: 90/100.** 2M tokens (xAI blog; Artificial Analysis) → top-tier context band.
- **Multimodal: 65/100.** Text + image input, text output (Artificial Analysis); multimodal capability limited vs dedicated vision models.
- **Coding: 70/100.** LiveCodeBench **80.0%**, GPQA Diamond **85.7%**, HMMT 2025 **93.3%** → mid-high coding band; strong for its tier.
- **Cost efficiency: 85/100.** Grok 4 Fast $0.20/$0.50 per 1M (blended ≈ $0.23) with 98% price reduction vs Grok 4 → very high cost-efficient value.

- **Overall Score: 72/100.** Mean of the five quality dims (Tool 65 + Reasoning 70 + Context 90 + Multimodal 65 + Coding 70) / 5 = 72; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-28
- Method: public web research prioritizing official model card/docs (xAI blog / Grok 4 Fast) plus independent benchmarks/reviews (Artificial Analysis, Epoch AI) — official-first with independent benchmark comparison.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
