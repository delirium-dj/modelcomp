# Gemini 3 Pro — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Gemini 3 Pro (Google DeepMind)
- Short description: Google DeepMind's frontier Pro model with 2M context (per BenchLM) / 1M context (per repo meta) and Deep Think mode available via a sibling variant.
- Provider / access: Google API / Vertex AI; ID `gemini-3-pro`. Also available through multiple providers. No Free ID on Zen (noFreeId per repo `meta.json`).
- Release: 2026 (Gemini 3 series). Knowledge cutoff: not published.
- IDs: `google/gemini-3-pro` (repo meta). noFreeId per repo `meta.json`.
- Context window: **2,000,000** (BenchLM canonical page); repo `meta.json` lists 1M / 65K out. BenchLM is the more authoritative measured value; scoring uses 2M as the measured context window. Discrepancy noted.
- Modalities: **Text, image, audio, video, PDF in; text out** (repo `meta.json`). Reasoning: BenchLM lists type "Non-Reasoning" (base variant); a sibling "Gemini 3 Pro Deep Think" variant supports reasoning. Reasoning yes (via Deep Think variant); tool/function calls yes; JSON mode yes.
- Pricing (as of 2026-10-01): "Paid-tier pricing" (repo `meta.json`). No concrete numbers in verified sources.
- Architecture: Proprietary dense transformer (Google DeepMind). No parameter count disclosed.

### Raw benchmarks found

> Verified public numbers from BenchLM (`https://benchlm.ai/models/gemini-3-pro`, overall 61.55, rank #48/637) and Artificial Analysis (referenced from BenchLM).

Agent / tool use:

- τ²-bench results: **87.1%** (AA model benchmarks)
- Gert Labs: **63.23** (Gert Labs rankings)
- JobBench: **11.4%** (JobBench paper)
- Terminal-Bench 2.1: **no verified public score found** for this exact ID
- GDPval-AA: **no verified public score found** for this exact ID
- OSWorld-Verified: **no verified public score found** for this exact ID

Reasoning / knowledge:

- AA-LCR: **76.0%** (AA leaderboard)
- CritPt: **9.1%** (AA leaderboard — poor physics reasoning)
- AA Intelligence Index: **28.0%** (AA model benchmarks — low)
- AA-GPQA Diamond: **90.8%** (AA leaderboard)
- AA-HLE: **39.7%** (AA leaderboard)
- AA-Omniscience Index: **15.3%** (AA leaderboard — low reliability)
- AA-Omniscience Accuracy: **55.8%** (AA model benchmarks)
- AA-Omniscience Hallucination Rate: **91.5%** (AA leaderboard — very high)
- AA MMLU-Pro: **89.8%** (AA leaderboard)
- AA Global-MMLU-Lite: **92.2%** (AA leaderboard)
- AA-IFBench: **70.4%** (AA model benchmarks — instruction following)
- ARC-AGI-2: **31.1%** (Google DeepMind Gemini Pro model card)
- FrontierMath v2 (Tiers 1-3): **37.6%** (Epoch AI)
- FrontierMath v2 (Tier 4): **18.75%** (Epoch AI)
- GPQA Diamond: **no verified public score found** for this exact ID (only AA-GPQA-D 90.8%)
- HLE: **no verified public score found** for this exact ID (only AA-HLE 39.7%)

Coding:

- AA LiveCodeBench: **91.7%** (AA leaderboard — excellent)
- Vibe Code Bench: **14.30%** (Vals AI — very poor)
- SWE-bench Verified: **no verified public score found** for this exact ID
- DeepSWE: **no verified public score found** for this exact ID
- AA-SciCode: **no verified public score found** for this exact ID

Multimodal:

- MMMU-Pro: **81%** (Google Gemini 3 blog)
- MathVision: **86.6%** (Qwen3.6 multimodal comparison table)
- VideoMMMU: **87.6%** (Google Gemini 3 blog)
- ScreenSpot Pro: **72.7%** (Google DeepMind Gemini Flash)
- CharXiv: **81.4%** (Qwen3.6 multimodal comparison table)
- V*: **88.0%** (Qwen3.6 multimodal comparison table)
- AA-MMMU-Pro: **80.2%** (AA leaderboard)

Long context:

- AA-LCR: **76.0%** (AA leaderboard — moderate long-context reasoning)
- **no MRCR / RULER / GraphWalks** retrieval figure published

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Benchmarks verified from BenchLM (overall 61.55, #48/637) and AA as of 2026-10-01.

- **Tool use: 68/100.** τ²-bench 87.1% is strong, but limited tool-use benchmark coverage (no TB-2.1, GDPval, OSWorld-Verified published for this exact ID); JobBench 11.4% is poor. Capped by sparse agentic benchmark data.
- **Reasoning: 78/100.** AA-GPQA-D 90.8% (at frontier), AA-HLE 39.7% (near 40% frontier), AA-MMLU-Pro 89.8%, AA Global-MMLU-Lite 92.2%, AA-LCR 76.0%. Capped by AA Intelligence Index 28.0% (well below ~60 frontier), CritPt 9.1% (poor), AA Omniscience Index 15.3% (low reliability, 91.5% hallucination rate), and BenchLM "Non-Reasoning" type (base variant).
- **Context window: 97/100.** BenchLM-verified **2,000,000** tokens (≥1M tier = 95-100 per methodology); note: repo `meta.json` lists 1M / 65K out (discrepancy with BenchLM 2M — scored on BenchLM's measured value). No MRCR/RULER retrieval curve published.
- **Multimodal: 95/100.** Verified text+image+audio+video+PDF input, text output (repo `meta.json`, methodology "any non-text out = 90-100"); strong vision benchmarks: MMMU-Pro 81%, MathVision 86.6%, VideoMMMU 87.6%, V* 88.0%, CharXiv 81.4%, AA-MMMU-Pro 80.2%.
- **Coding: 78/100.** AA LiveCodeBench 91.7% (at frontier), but Vibe Code Bench only 14.3% (poor), and no SWE-bench Verified / DeepSWE / SWE-Pro / AA-SciCode published for this exact ID. Capped by sparse coding benchmark coverage and poor Vibe Code Bench.
- **Cost efficiency: 65/100.** Paid-tier per repo `meta.json` but no concrete pricing numbers published in verified sources; no Free ID on Zen. Provisional estimate.
- **Overall Score: 83.2/100.** (68 + 78 + 97 + 95 + 78) / 5 = 416 / 5 = 83.2 → 83. **Best-fit:** multimodal frontier model with elite knowledge benchmarks (GPQA-D 90.8%, MMLU-Pro 89.8%) and excellent LiveCodeBench (91.7%); cap: low Intelligence Index (28.0), poor CritPt (9.1%) and Vibe Code Bench (14.3%), severe hallucination rate (91.5%), and sparse tool/coding benchmark coverage; non-reasoning base variant (Deep Think is a separate sibling).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public-internet research (BenchLM `https://benchlm.ai/models/gemini-3-pro` for overall rank/score (#48/637, 61.55) and benchmark tables; AA leaderboard/model pages for GPQA-D 90.8%, HLE 39.7%, Omniscience data, AAA-MMMU-Pro 80.2%, LCR 76.0%; Google Gemini 3 blog for MMMU-Pro 81%, VideoMMMU 87.6%, ScreenSpot Pro 72.7%; repo `meta.json` for modalities/context/pricing). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.
- Discrepancy note: BenchLM lists context window as 2M; repo `meta.json` lists 1M. Scored on BenchLM's measured 2M value.
- Future sources: add a new file next to this one, e.g. `Gemini_3_1.md`, using the same headings.
