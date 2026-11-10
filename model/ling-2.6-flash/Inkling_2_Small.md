# Ling 2.6 Flash — findings by Fledge Alpha

- Source: inclusionAI / Ant Group (`inclusionai/ling-2.6-flash`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 Flash
- **Short description:** Ant Group's efficiency-first instant model — a 104B/7.4B-active hybrid linear MoE that completes the full Artificial Analysis suite in ~15M output tokens (~7x leaner than Nemotron-3-Super) while leading agent benchmarks for its size. Flag: was the stealth "Elephant Alpha" on OpenRouter before its 2026-04-22 reveal.
- **Provider / access:** OpenRouter `inclusionai/ling-2.6-flash`, Alipay Tbox, Novita AI, Zeplik; open weights (MIT) on Hugging Face / ModelScope in BF16/FP8/INT4. Chat Completions.
- **Release / knowledge:** 2026-04-22 (Ant Group PR; weights open-sourced 2026-04-29).
- **IDs:** `inclusionai/ling-2.6-flash` (also `opencode/ling-2.6-flash`)
- **Context window:** 262K (256K) tokens.
- **Modalities:** text in; text out; tool calling; no extended reasoning mode; no vision.
- **Pricing (as of 2026-10-08):** $0.10 input / $0.30 output per 1M; cache read $0.02 (Ant Ling developer pricing). Open weights free.
- **Architecture:** 104B total / 7.4B active highly sparse MoE with 1:7 MLA + Lightning Linear hybrid attention; MIT license.

### Raw benchmarks found

Agent / tool use:

- BFCL-V4: **67.04** (leads comparison set; Novita/Ling blog)
- PinchBench: **81.10** (leads; Novita/Ling blog)
- Tau2-Bench Telecom: **86.0%** (72nd pct, #94/332, BenchmarkList)
- IFBench: **58.10**; Multi-IF Turn-3: **74.85** (Ling blog)
- GDPval-AA: **545 Elo** (#120/332, BenchmarkList)
- Terminal-Bench Hard: **21.2%**; Tau3-Banking: **2.9%**; ClawProBench: **27.04** (BenchmarkList)

Reasoning / knowledge:

- AIME 2026: **73.85%** (Gate News / Ling blog)
- AA Intelligence Index: **26** (Ant PR, launch) / **14.05** (BenchmarkList snapshot) — index version drift, both cited
- HLE: **6.2%** (BenchmarkList)

Coding:

- SWE-bench Verified: **61.2%** (Gate News / Ling blog)
- Terminal-Bench 2.1: **24.3%**; SciCode: **27.1%** (BenchmarkList)

Long context:

- AA-LCR: **25.0%** (BenchmarkList); 262K window.

Speed:

- 215 tok/s sustained output (up to 340 tok/s on 4×H20); prefill 2.2× Nemotron-3-Super (Ant PR)

### Normalized scores (1–100)

- **Tool use: 76/100.** BFCL-V4 67.04 and PinchBench 81.10 lead its class, Tau2 Telecom 86%; capped by weak Tau3-Banking (2.9%) and TB-Hard (21.2%).
- **Reasoning: 50/100.** AIME 73.85% is respectable; HLE 6.2% and the modest AA index cap it — an instant model, not a reasoner.
- **Context window: 55/100.** 262K window but AA-LCR only 25%.
- **Multimodal: 15/100.** Text-only.
- **Coding: 62/100.** SWE-bench Verified 61.2% is strong for 7.4B active; TB 2.1 24.3% and SciCode 27.1% cap it.
- **Cost efficiency: 90/100.** $0.10/$0.30 with ~7x token-efficiency advantage and MIT open weights — among the cheapest capable agents per completed task.
- **Overall Score: 52/100.** Mean of (76, 50, 55, 15, 62) = 51.6 → 52. Best fit: high-volume production agent workloads where token economics and tool-call reliability beat peak intelligence.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (Ant Group PR, Ling developer blog, Novita AI blog, BenchmarkList, Gate News, Zeplik); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
