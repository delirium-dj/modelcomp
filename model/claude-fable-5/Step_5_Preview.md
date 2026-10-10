# Claude Fable 5 — findings by Step 5 Preview

- Source: Anthropic `claude-fable-5`
- Date: 2026-10-10 (UTC) — second-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5 (`claude-fable-5`; Anthropic's first generally available Mythos-class model)
- **Short description:** Anthropic's first GA Mythos-class model, sitting above the Opus tier for autonomous coding, research, and long-horizon agentic tasks. The publicly accessible configuration of a shared Mythos-class architecture (the same weights power the Project Glasswing-gated Claude Mythos 5). Superseded by Fable 5.1 but still a strong frontier agentic-coding model.
- **Provider / access:** Anthropic Claude API, AWS Bedrock, Google Vertex AI, Microsoft Foundry; also in GitHub Copilot (added launch day). Adaptive thinking always on (effort-controlled). No free tier.
- **Release / knowledge:** Released 2026-06-09. Knowledge cutoff not explicitly disclosed.
- **IDs:** `claude-fable-5` (+ `-low/-medium/-high/-xhigh/-max`). No free/contributor ID.
- **Context window:** 1,000,000 (1M) total; 128,000 max output. Full 1M context billed at the same per-token rate as shorter requests — NO long-context surcharge.
- **Modalities:** Text, image, PDF in; text + tool-calls out. No audio/video input; no non-text output. Reasoning yes (always-on adaptive); tool calls yes; JSON yes.
- **Pricing (as of 2026-10-08):** $10.00/M in · $50.00/M out (the highest Claude tier, >95% of models). Cache writes $12.50 (5-min) / $20 (1-hr); cache reads a fraction of input. Batch 50% off. No free tier.
- **Architecture:** Proprietary Mythos-class; parameter count and architecture undisclosed.

### Raw benchmarks found

> Cross-referenced hokai.io (Anthropic) and vectorwire.ai (155 results/97 benchmarks, 31 independent, capability profile). Independent runs noted where available.

Agent / tool use:

- GDPval-AA preference (Elo): **1,932** (Anthropic; vs Opus 4.8 1,890, GPT-5.5 1,769) — clears the ~1750 frontier threshold
- τ²-Bench Telecom: **98.54%** (max, Artificial Analysis)
- τ³-Bench Banking: **26.8%**
- Toolathlon Verified: **77.9%**
- WideSearch: **81.2%**
- Vector Wire capability: **Agentic "Frontier"** (−3.7% vs leader, 7/7)

Reasoning / knowledge:

- MMLU-Pro: **91.5%** (Anthropic)
- HealthBench Professional: **66.0%** (vs Opus 4.8 56.9%, GPT-5.5 51.8%)
- GDP.pdf (visual document reasoning, no tools): **29.8%** (vs GPT-5.5 24.9%, Opus 4.8 22.5%)
- Vector Wire capability: **Reasoning "Strong"** (−3.4% vs leader, 6/6); **Factuality "Strong"** (−4.4%)
- GPQA Diamond / AIME 2025 / ARC-AGI-2: Anthropic did NOT publish these at launch — left blank, not estimated

Coding:

- SWE-bench Verified: **95.0%** (Anthropic; rank #3/32)
- SWE-bench Pro: **80.3%** (Anthropic; leads generally available models — ahead of Opus 4.8 69.2%, GPT-5.5 58.6%, Gemini 3.1 Pro 54.2%)
- FrontierCode Diamond (harder multi-step coding): **29.3%** (vs Opus 4.8 13.4%, GPT-5.5 5.7%)
- Vector Wire capability: **Coding "Frontier"** (leads 9/10) — its standout capability
- LiveCodeBench / SciCode exact rows: not surfaced live for Fable 5 — treated as provisional

Multimodal:

- Text + image + PDF in; text out. No audio/video input, no non-text output.
- GDP.pdf 29.8% (visual document reasoning, no tools) — leads GPT-5.5 and Opus 4.8
- Vector Wire: **Multimodal "Capable"** (−16.4% vs leader, 2/6)

- **Tool use: 90/100.** GDPval-AA 1,932 Elo (clears the ~1750 frontier threshold), τ²-Bench Telecom 98.54%, Toolathlon 77.9%, and a Vector Wire Agentic "Frontier" (−3.7%, 7/7) rating. Capped by τ³-Bench Banking 26.8% and the vendor-heavy reporting.
- **Reasoning: 90/100.** MMLU-Pro 91.5%, HealthBench Pro 66.0%, and Reasoning "Strong" (−3.4%, 6/6) with Factuality "Strong" (−4.4%). Capped by the unpublished GPQA/AIME/ARC-AGI-2 (left blank, not estimated) and Math "Capable" (−12.0%) — reasoning is strong but the missing frontier-reasoning benchmarks keep it from a higher mark.
- **Context window: 92/100.** 1M input / 128K output with the full window at one flat rate (no long-context surcharge) and Long Context "Strong" (−7.9%). Not a full 100 because no explicit MRCR ≥98%-at-512K retrieval figure was published to confirm the top sub-tier.
- **Multimodal: 78/100.** Text + image + PDF in (text out), no audio/video input and no non-text output → the 75–90 "video/PDF in" band, held to 78 by the missing audio/video and Multimodal "Capable" (−16.4%); GDP.pdf 29.8% leads peers but is still a modest absolute number.
- **Coding: 93/100.** SWE-bench Verified 95.0% (rank #3/32), SWE-bench Pro 80.3% (leads GA models), FrontierCode Diamond 29.3% (2×+ Opus 4.8), and a Vector Wire Coding "Frontier" (leads 9/10) rating — a top coding model. Capped only by the vendor-only reporting and missing live LiveCodeBench/SciCode rows.
- **Cost efficiency: 30/100.** Paid-only at $10/$50 per 1M (the highest Claude tier, >95% of models); the 1M flat-rate (no surcharge) and Batch 50% off soften it, but there is no free tier and it is the priciest option in Anthropic's lineup.
- **Overall Score: 89/100.** Mean of the five non-cost dims (90+90+92+78+93)/5 = 88.6. Best fit for autonomous long-horizon coding agents that need the strongest available benchmark performance (it leads GA models on SWE-bench Pro) and large-document reasoning at a 1M flat-rate context; the always-on reasoning adds latency, so cost-sensitive teams running many short queries should look to cheaper models.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-10
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (40 primary-source results, updated 2026-10-07 — Vibe Code 90.4%, τ³-bench Banking 39.7%, Vals Index 61.4%, BrowseComp 82.5%, APEX-Agents 63.6%, TB4.0 Claude Code 44.6%) — no score change warranted. Prior pass (2026-10-08) used Anthropic (via hokai.io) and vectorwire.ai.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

Long context:

- 1M input / 128K output, full window at one flat rate (no surcharge). Vector Wire: Long Context **"Strong"** (−7.9% vs leader, 1/3). No explicit MRCR ≥98%-at-512K figure published.

### Normalized scores (1–100)
