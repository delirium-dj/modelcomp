# GPT-6.1 Sol — findings by Laguna S 2.1

- Source: poolside/laguna-s-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- Name: GPT-6.1 Sol (max) (OpenAI)
- Short description: OpenAI's September 2026 frontier reasoning model, the most capable variant of the GPT-6.1 family. Positioned at the top of the intelligence rankings with a 1M-token context window, text+image input, and strong performance across agentic, coding, and multimodal benchmarks.
- Provider / access: OpenAI API via Chat Completions / Responses API; ID `gpt-6.1-sol`. No verified Free ID on Zen (noFreeId per repo meta).
- Release: September 29, 2026 (per AA). Knowledge cutoff: not published by vendor.
- IDs: `gpt-6.1-sol` (repo meta). noFreeId per repo `meta.json` (`opencode/gpt-6.1-sol`).
- Context window: **1.05M** (BenchLM) / **1,000,000 (1.0M)** (AA — "Context window: 1M"). Scoring uses the AA-verified 1M figure.
- Modalities: **Text and image input; text output** (AA confirms). Reasoning yes; tool/function calls yes; JSON mode yes.
- Pricing (as of 2026-10-01): **$2.00 in / $10.00 out per 1M tokens**; 95% cache discount (AA confirmed). $0.125 cached input. Paid-tier only; no Free ID on Zen.
- Architecture: Proprietary dense transformer. No parameter count disclosed.

### Raw benchmarks found

> Verified public numbers sourced from BenchLM (`https://benchlm.ai/models/gpt-6-1-sol`) and Artificial Analysis (`https://artificialanalysis.ai/models/gpt-6-1-sol`).

Agent / tool use:

- AutomationBench: 36.1% (OpenAI launch blog, TB harness)
- Terminal-Bench-Science 0.1: 57.0% (OpenAI launch blog)
- ExploitGym: 35.1% (OpenAI system card addendum PDF)
- GDPval-AA: 53.8% (AA model page)
- AA Briefcase (Elo): 1564 (AA leaderboard)
- AA AutomationBench: 64.9% (AA leaderboard)
- GDPval-AA (Elo): 1575 (AA leaderboard)
- AA Terminal-Bench 4.0: 56.1% (AA leaderboard)
- GDP.pdf: 31.0% (AA leaderboard)
- TB-2.1: 91.0% (BenchLM cross-model reference)

Reasoning / knowledge:

- AA-LCR: 83.0% (AA leaderboard)
- CritPt: 31.7% (AA leaderboard)
- MLCR-AA: 33.9% (AA leaderboard)
- HealthBench (raw): 56.7% (OpenAI system card)
- HealthBench (length-adjusted): 58.5% (OpenAI system card)
- HealthBench Professional: 64.2% (OpenAI system card)
- HealthBench Professional (raw): 67.2% (OpenAI system card)
- HealthBench Hard: 36.2% (OpenAI system card)
- AA Intelligence Index: **52** (AA — #11 of 223 among reasoning models)
- AA-HLE: 52.9% (AA leaderboard)
- AA-Omniscience Index: 41.5 (AA leaderboard)
- AA-Omniscience Accuracy: 62.1% (AA model page)
- AA-Omniscience Hallucination Rate: 54.3% (AA model page)
- GPQA Diamond: **no verified public score found** (not in TB, AA page, or OpenAI docs)

Coding:

- DeepSWE: 71.9% (OpenAI launch blog)
- AA-SciCode: 54.2% (AA leaderboard)
- SWE-bench Verified: **no verified public score found** for this exact ID
- LiveCodeBench: **no verified public score found** for this exact ID
- SciCode: **no verified public score found** for this exact ID

Long context:

- **no MRCR / RULER / GraphWalks** retrieval figure published

Multimodal:

- AA-MMMU-Pro: 86.0% (AA leaderboard — visual reasoning with images)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Benchmarks verified from BenchLM and AA as of 2026-10-10.

- **Tool use: 88/100.** AA Terminal-Bench 4.0 56.1% (rank within frontier cluster), AA AutomationBench 64.9%, GDPval-AA 53.8% (Elo 1575), AA Briefcase Elo 1564, plus TB-Science 57.0% and ExploitGym 35.1%; AA Intelligence Index #11/223 confirms top-tier agentic placement. Capped by GDP.pdf 31% and lack of OSWorld-Verified.
- **Reasoning: 84/100.** AA-Omniscience Accuracy 62.1% with 41.5 Index, AA-LCR 83.0% (long-context reasoning), AA-HLE 52.9%, CritPt 31.7%, MLCR 33.9%, HealthBench Prof. 64.2%; AA Intelligence Index 52 (#11/223). No GPQA Diamond published → capped.
- **Context window: 97/100.** AA-verified **1,000,000** tokens (1.0M; ≥1M tier, ≥1500 A4 pages). BenchLM reports 1.05M. Clear top-tier; no retrieval-curve figure published.
- **Multimodal: 86/100.** Verified text+image input, text output (AA confirms) + AA-MMMU-Pro 86.0% (visual reasoning) → strong multimodal evidence.
- **Coding: 79/100.** DeepSWE 71.9% + AA-SciCode 54.2%; no SWE-bench Verified / LiveCodeBench / SWE-Pro published for this exact ID → capped.
- **Cost efficiency: 78/100.** $2.00 in / $10.00 out is paid-tier (>$1 per 1M token band) but 95% cache discount + $0.125 cached input offsets; no Free ID on Zen. Per-token value is mid-to-poor for a flagship, capped by high absolute price.
- **Overall Score: 87/100.** (88 + 84 + 97 + 86 + 79) / 5 = 434 / 5 = 86.8 → 87. Ranked among top frontier reasoning models (AA Intelligence Index #11/223). Strong text+image multimodal + 1M context; cap: no published GPQA Diamond and no SWE-bench Verified/LiveCodeBench scores.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public-internet research (BenchLM `https://benchlm.ai/models/gpt-6-1-sol` and AA `https://artificialanalysis.ai/models/gpt-6-1-sol` for Intelligence Index, agentic/coding/reasoning/multimodal/long-context benchmarks; OpenAI launch blog and system-card PDF for HealthBench/DeepSWE/ExploitGym/TB-Science). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research (Cost line preserved verbatim from prior signed file).
- Future sources: add a new file next to this one, e.g. `GPT_6_1.md`, using the same headings.

---

