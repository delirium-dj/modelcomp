# Gemini 3 Pro — findings by Big Pickle

- Source: Google/Gemini 3 Pro (`gemini-3-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's November 2025 frontier Pro model (pre-3.1 generation) — flagship reasoning/multimodal model with 1M context and Deep Think mode. Superseded by Gemini 3.1 Pro (Feb 2026, 2M context). Distinct entry from `gemini-3.1-pro`, `gemini-2.5-pro`, and the Flash line.
- **Provider / access:** Google Gemini API / AI Studio / Vertex (`gemini-3-pro`, preview ~Nov–Dec 2025); on OpenCode Zen `opencode/gemini-3-pro` (Chat Completions-style endpoint).
- **Release / knowledge:** 2025-11-18 (anotherwrapper / AI Flash Report); knowledge cutoff ~2025-01-31 (2025-11 per some trackers).
- **IDs:** `google/gemini-3-pro`, `opencode/gemini-3-pro`
- **Context window:** 1,000,000 tokens input (~1M; Artificial Analysis lists 1000k; some later trackers show 2M — 1M is the launch spec), max output ~65.5K (family spec).
- **Modalities:** text + image + audio + video + PDF input; text output; extended reasoning + Deep Think mode; native tool calling / function use; no non-text output.
- **Pricing (as of 2026-09-24):** ~$2.00 / $12.00 per 1M input/output tokens (AnotherWrapper snapshot; Google list pricing varies by region/route). Paid only.
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **69.4%** (AnotherWrapper chart, harness unspecified; TB 2.0 rows vary 22.8–54.2% by harness)
- Tau2-Bench (τ²-bench): **87.1%** (BenchLM)
- OSWorld / OSWorld-Verified: **47.5%** (AnotherWrapper)
- Claw-Eval / GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (Google self-reported; AA-GPQA 90.8% BenchLM)
- HLE: **45.8%** (AnotherWrapper) / **39.7%** (AA-harness, BenchLM)
- ARC-AGI-2: **31.1%** (45.1% in Deep Think mode)
- Artificial Analysis Intelligence Index: **40.6%** (BenchLM)
- AA-LCR: **73.0%** / CritPt: **9.1%** / AA-Omniscience Accuracy: **55.8%** (BenchLM)

Coding:

- SWE-bench Verified: **76.2%** (Google; SWE-bench Pro 84.8% public)
- LiveCodeBench: **86.4%** (AnotherWrapper) / **91.7%** (AA, pricepertoken)
- AA-SciCode: **56.1%** (BenchLM)
- Vibe Code Bench: **14.3%** (BenchLM/AnotherWrapper)
- MMLU-Pro: **90.1%** (AnotherWrapper)

Long context:

- MRCR v2: **26.3%** (AnotherWrapper — harness/window ambiguous; Google's card does report MRCR for its models). Long-context retrieval at 1M independently verified ≥98% not established.

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 69.4% plus Tau2-bench 87.1% and OSWorld 47.5% put it at the frontier agent tier; no GDPval/Claw-Eval rows and harness-shifted TB numbers keep it just below the 90+ band.
- **Reasoning: 92/100.** GPQA 91.9%, HLE 39.7–45.8%, and ARC-AGI-2 31.1% are all frontier-tier (≥90%-GPQA per methodology); Deep Think extends it further (ARC-AGI-2 45.1%).
- **Context window: 90/100.** Full 1M window (≥1M tier); not 95+ because MRCR v2 retrieval evidence is ambiguous (26.3% row, harness unspecified) and no ≥98%-at-512K+ verification.
- **Multimodal: 88/100.** Text + image + audio + video + PDF input with strong vision rows (MMMU-Pro 81%, VideoMMMU 87.6%, MathVision 86.6%); text-only output keeps it below 90.
- **Coding: 84/100.** SWE-bench Verified 76.2%, SWE-bench Pro 84.8%, LiveCodeBench 86.4–91.7%, AA-SciCode 56.1% — strong all-round coder; Vibe Code Bench 14.3% caps it below the DeepSWE-74%+ frontier tier.
- **Cost efficiency: 72/100.** ~$2.00/$12.00 per 1M (methodology ~$3/$15 ≈ 60, ~$1.25/$4.25 ≈ 88) — mid-premium pricing, cheap-ish input.
- **Overall Score: 88/100.** Mean of five quality dims (86+92+90+88+84)/5 = 88.0. Best fit: frontier multimodal reasoning with strong agentic/coding breadth at premium pricing.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-24
- Method: public internet research (Google/DeepMind cards, BenchLM, Artificial Analysis, AnotherWrapper, AI Flash Report, UC Strategies); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.