# Solar Pro 4 — findings by Kimi K3

- Source: Upstage / Solar Pro 4 (`solar-pro-4`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's 2026 flagship — strong AIME (95.3%) and Korean-language performance (KMMLU-Pro 79.2%) with 512K context; low hallucination (24.4%) at low knowledge accuracy (18.9%).
- **Provider / access:** Upstage Solar API (`solar-pro-4`, OpenAI-compatible); launch post: upstage.ai/blog/en/solar-pro-4.
- **Release / knowledge:** 2025–2026 (exact date not verified in my sources); cutoff not verified.
- **IDs:** `upstage/solar-pro-4` (no Zen Free ID verified).
- **Context window:** 512K tokens (benchlm.ai).
- **Modalities:** text in/out (single Design Arena row); reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources.
- **Architecture:** proprietary (Upstage).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **57.0%** (benchlm.ai)
- MCP Atlas: **61.4%**; BrowseComp: **49.2%**; APEX-Agents: **18.7%** (benchlm.ai)
- Tau2/Tau3 / GDPval / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.0–89.1%** (GPQA-D / AA) (benchlm.ai)
- HLE (AA-HLE): **29.2%** (benchlm.ai)
- AA-LCR: **71.0%**; CritPt: **5.4%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **28.1**; BenchLM unranked (partial coverage)
- AA-Omniscience Accuracy / Hallucination Rate: **18.9% / 24.4%** (benchlm.ai)
- AIME 2026: **95.3%**; MMLU-Pro: **86.3%**; KMMLU-Pro: **79.2%** (benchlm.ai)

Coding:

- SWE-bench Verified: **70.6%** (benchlm.ai)
- LiveCodeBench: **87.8%** (benchlm.ai)
- AA-SciCode: **44.6%** (benchlm.ai)
- DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 71.0% within 512K (benchlm.ai); no MRCR/RULER rows.

Multimodal:

- Design Arena Website: **1187 Elo** (benchlm.ai); otherwise text-only.

### Normalized scores (1–100)

- **Tool use: 64/100.** MCP Atlas 61.4%, TB 2.1 57.0%; capped by APEX 18.7% and missing τ²/GDPval rows.
- **Reasoning: 72/100.** AIME 95.3%, GPQA ~89%, MMLU-Pro 86.3%; capped by HLE 29.2%, CritPt 5.4%, AA Index 28.1.
- **Context window: 74/100.** 512K window with LCR 71.0%.
- **Multimodal: 50/100.** Effectively text-first; one Design Arena row only.
- **Coding: 74/100.** LiveCodeBench 87.8%, SWE-bench Verified 70.6%; capped by SciCode 44.6%.
- **Cost efficiency: 65/100.** Price unverified; Solar models historically value-oriented — provisional.
- **Overall Score: 67/100.** Mean of the five quality dims (64+72+74+50+74)/5 = 66.8 → 67. Best fit: Korean-market + math-heavy text workloads; coding decent at 512K.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, upstage.ai launch reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
