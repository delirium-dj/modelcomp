# Grok 4.20 — findings by Mercury 3

- Source: xAI/Grok 4.20
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (0309 reasoning; `grok-4.20-beta` alias family)
- **Short description:** xAI's 2025-2026 high-performance model (0309 snapshot) with industry-leading speed and agentic tool calling: 1M context (BenchLM lists 2M), strong reasoning (GPQA 88.5%, ARC-AGI-2 53.3%), SWE-bench Verified 76.7%, $1.25/$2.50; superseded by Grok 4.3+.
- **Provider / access:** xAI API (`grok-4.20-0309-reasoning`; many aliases incl. `grok-4.20`, `grok-4.20-beta`), x.ai; Batch API −20%.
- **Release / knowledge:** 0309 snapshot (Grok 4.20 era 2025–2026); knowledge cutoff not published.
- **IDs:** `grok-4.20-0309-reasoning` (canonical; `grok-4.20` queue slug; reasoning).
- **Context window:** 1,000,000 tokens (docs) — BenchLM lists 2M; conflict flagged; max output not disclosed.
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; structured outputs.
- **Pricing (as of 2026-11-03):** $1.25 input / $2.50 output per 1M tokens (<200K prompts; $2.50/$5.00 above), cached input $0.20.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **47.1%**; DeepSearchQA: **62.8%**; GERT Labs: 38.36%; TB2.1 (Vals): 44.2%; MazeBench ASCII: 0%

Reasoning / knowledge:

- GPQA Diamond: **88.5%** (88.6% Vals); HLE: **31.6%** (w/o tools); MMLU-Pro: 86.3% (Vals)
- ARC-AGI-2: **53.3%**; ARC-AGI-3: 0.1%; HealthBench Hard: 20.3%; MedXpertQA (Text): 50.2%

Coding:

- SWE-bench Verified: **76.7%**; SWE-bench Pro: 51.8%; LiveCodeBench Pro: 74.2%; LiveCodeBench (Vals): **84.3%**; SWE-bench (Vals): 72.2%; Vibe Code Bench: 4.06%

Long context:

- 1M window (2M per BenchLM — conflict flagged); no MRCR/LCR figure verified.

Multimodal:

- text/image in, text out; MMMU-Pro 75.2%; CharXiv 60.9%; ERQA 54.1%; SimpleVQA 57.4%; MedXpertQA (MM) 65.8%; Design Arena 1228 Elo.

### Normalized scores (1–100)

- **Tool use: 74/100.** TB2.0 47.1%, DeepSearchQA 62.8%, GERT 38.36% — mid; capped by MazeBench 0% and TB2.1-Vals 44.2%.
- **Reasoning: 82/100.** GPQA 88.5%, ARC-AGI-2 53.3%, HLE 31.6%; capped by ARC-AGI-3 0.1% and HealthBench Hard 20.3%.
- **Context window: 88/100.** 1M (2M per BenchLM) with no retrieval figure verified.
- **Multimodal: 82/100.** image input with solid MMMU-Pro 75.2%; text-only output.
- **Coding: 80/100.** SWE Verified 76.7%, LCB 84.3%, SWE Pro 51.8%; capped by Vibe 4.06%.
- **Cost efficiency: 85/100.** $1.25/$2.50 with $0.20 cached — good value.
- **Overall Score: 81/100.** Mean of (74+82+88+82+80)/5 = 81.2 → 81. A strong mid-Grok generation; the 4.20 beta lineage and MazeBench 0% are the main caveats.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (xAI model docs, BenchLM aggregation, Vals AI, ARC Prize, Meta Muse Spark comparison table); scores are normalized 1–100 interpretations, not official vendor scores. Context-window conflict (1M docs vs 2M BenchLM) flagged.
- Reference URLs:
  - [Grok 4.20 model docs (xAI)](https://docs.x.ai/docs/models/grok-4.20)
  - [Grok 4.20 — BenchLM benchmark aggregation](https://benchlm.ai/models/grok-4-20-beta)
  - [Grok 4.20 — Vals AI model page](https://www.vals.ai/models/grok_grok-4.20-0309-reasoning)
  - [ARC Prize leaderboard](https://arcprize.org/leaderboard)
