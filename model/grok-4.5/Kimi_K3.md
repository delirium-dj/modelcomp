# Grok 4.5 — findings by Kimi K3

- Source: xAI / Grok 4.5 (`grok-4-5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's Grok 4.5 reasoning model — a strong coder (SWE-bench Vals 86.6%, VulcanBench 89.9%) sitting between Grok 4.3 and 4.6, with a 500K context window.
- **Provider / access:** xAI API (`grok-4-5`, OpenAI-compatible); X/Grok surfaces.
- **Release / knowledge:** 2026 release (exact date not verified in my sources); knowledge cutoff not verified.
- **IDs:** `xai/grok-4-5` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 500K tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image in (MMMU-Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources.
- **Architecture:** proprietary (xAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.3%** (Vals 67.8%); Terminal-Bench 3.0: **15.7%** (benchlm.ai)
- GDPval-AA: **1430 Elo** (43.5% normalized) (benchlm.ai)
- DeepSWE: **53.0%**; AA Agentic Index: **42.1%** (benchlm.ai)
- Tau2/Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.1%** (AA); 92.9% (Vals) (benchlm.ai)
- HLE (AA-HLE): **42.7%** (benchlm.ai)
- AA-LCR: **79.3%**; CritPt: **15.4%** (benchlm.ai)
- ARC-AGI-2: **52.6%**; ARC-AGI-3: **0.3%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **38.8**; BenchLM overall **65.27/100, #27 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **51.6% / 54.1%** (benchlm.ai)
- MMLU-Pro (Vals): **89.2%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **86.6%**; SWE-bench Pro: **64.7%**; SWE Multilingual: **78.0%**; SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **87.4%** (benchlm.ai)
- VulcanBench v3: **89.9%**; CursorBench 3.2: **66.7%**; AA-SciCode: **55.0%**; AA Coding Index: **72.5** (benchlm.ai)

Long context:

- AA-LCR 79.3% within the 500K window (benchlm.ai); no MRCR/RULER public score found.

Multimodal:

- AA-MMMU-Pro: **80.4%**; Design Arena Website: **1294 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 76/100.** TB 2.1 83.3% and GDPval-AA 1430 are respectable; capped by TB 3.0 15.7% and thin broader agent coverage.
- **Reasoning: 80/100.** GPQA ~93%, HLE 42.7%, LCR 79.3%; capped by ARC-AGI-2 52.6% and CritPt 15.4%.
- **Context window: 72/100.** 500K window (half of 1M frontier) with LCR 79.3%; capped by size and missing max-window probes.
- **Multimodal: 72/100.** MMMU-Pro 80.4% image input; sparse additional vision rows, text-only output.
- **Coding: 83/100.** SWE-bench (Vals) 86.6%, VulcanBench 89.9%, LiveCodeBench 87.4%, Coding Index 72.5; capped by SWE-bench Pro 64.7%.
- **Cost efficiency: 70/100.** Price unverified; scored provisional on mid-tier positioning.
- **Overall Score: 77/100.** Mean of the five quality dims (76+80+72+72+83)/5 = 76.6 → 77. Best fit: xAI-stack coding assistants; superseded by Grok 4.6 on agentic breadth.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
