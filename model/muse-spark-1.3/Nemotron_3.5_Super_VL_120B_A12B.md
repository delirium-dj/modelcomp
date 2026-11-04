# Muse Spark 1.3 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Meta (`dev.meta.ai/models/muse-spark`), Meta AI Research blog (`research.meta.ai/blog/introducing-muse-spark-1-3`), Artificial Analysis (`artificialanalysis.ai/articles/muse-spark-1-3`), BenchGap (`benchgap.net/model/muse-spark-1-3`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's proprietary reasoning model (released 2 Sept 2026) trained for long-horizon agentic workflows and competitive coding; native multimodal perception (video/images/documents); 1M-token context; same weights across Contributor/Standard/Max tiers — only price and training-data consent differ.
- **Provider / access:** Meta Model API (OpenAI-compatible Chat Completions); also available on OpenRouter (`meta/muse-spark-1.2` route family). Contributor tier $0 (Meta trains on prompts); Standard tier $1.25/$4.25.
- **Release / knowledge:** Released 2026-09-02; proprietary, parameter count not disclosed.
- **IDs:** `meta/muse-spark-1.3` (Standard/paid), `meta/muse-spark-1.3-contributor` (Free/Contributor). No separate Free ID on Zen beyond the Contributor tier.
- **Context window:** 1M tokens (verified on Meta model card Model Summary and Artificial Analysis); prompt, visual inputs, conversation history share this window.
- **Modalities:** Text, image, and video in; text out; reasoning yes (max reasoning mode for challenging tasks); tool calls yes (agentic workflows, computer use, GitHub agent, search grounding); JSON mode not explicitly advertised.
- **Pricing (as of 2026-11-04):** muse-spark-1.3: $1.25/M input, $0.15/M cached input, $4.25/M output; muse-spark-1.3-contributor: $0.10/M input, $0.002/M cached, $0.20/M output (up to 21x cheaper; Meta trains on your prompts). Pricing unchanged from Meta Model API page; Pricing for Muse Spark 1.3 (max) limited preview not yet publicly available per Artificial Analysis.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model with extended thinking. Muse Spark 1.3 (max) is a limited-preview variant with higher reasoning effort; Muse Spark 1.3 (xhigh) is the publicly available variant.

### Raw benchmarks found

Meta official model card (dev.meta.ai/models/muse-spark) benchmark table unless noted; Artificial Analysis Intelligence Index v5 independent analysis; BenchGap independent benchmark aggregation (data as of 2026-11-03).

Agent / tool use:
- GDPVal-AA v2 (Knowledge work, Elo): **1754** (xhigh, Meta card) / **1854** (max, Meta card) vs 1824 Opus 5 (max)
- JobBench (Professional tool use): **64.9%** (Meta card)
- OSWorld 2.0 (Agentic computer use): **66.9% partial / 32.0% binary** (Meta card)
- DeepSearchQA (Agentic browsing): **90.3%** (Meta card)
- Agentic IF Index (Instruction following): **57.8%** (Meta card, internal)
- AutomationBench (E2E business workflows): **49.6%** (Meta card); AA AutomationBench **70.7%** estimated (BenchGap)
- SWEAtlas CodeBase QnA (Codebase understanding): **59.4%** (Meta card)
- Terminal-Bench 2.1 (Agentic terminal coding): **88.8%** (Meta card) / **85-86%** (AA: xhigh 85%, max 86%)
- BFCL v4: **77.2%** estimated (BenchGap)
- Toolathlon-Verified: **79.7%** estimated (BenchGap)
- AA Coding Index: **75.8%** measured (BenchGap)
- OSWorld-Verified: **66.9%** estimated (BenchGap) / **73.3%** estimated (BenchGap)
- AA Agentic Index: **55.7%** measured (BenchGap)

Reasoning / knowledge:
- Artificial Analysis Intelligence Index v5: **61** (xhigh) / **62** (max) — up from v4.3.2 score of 48; #2 of non-frontier models behind Claude Fable 5.1 (66) and Claude Opus 5 (63)
- HLE: **47%** (xhigh) / **48%** (max) (AA) / **48.7%** measured AA-HLE / **51.8%** estimated (BenchGap)
- GPQA Diamond: **94%** (AA) / **93.5%** measured / **92.6%** estimated (BenchGap)
- CritPt: **24.9%** measured (BenchGap)
- SciCode: **59%** (AA) / **58.8%** measured / **58.4%** estimated (BenchGap)
- MMLU: **94.2%** estimated (BenchGap)
- MMLU-Pro: **86.2%** estimated / **87.7%** AA estimated (BenchGap)
- AA-Omniscience Accuracy: **43.6%** measured (BenchGap)
- MRCR 256K–512K: **98.5%** (Meta card); MRCR 512K–1M: **98.1%** (Meta card)
- MRCRv2: **85.9%** estimated (BenchGap)

Coding:
- DeepSWE v1.1 (Long-horizon agentic coding): **75.4%** (Meta card) / **75.4%** measured (BenchGap)
- Terminal-Bench 2.1 (Agentic terminal coding): **88.8%** (Meta card) / **85-86%** (AA)
- LiveCodeBench v6: **88.8%** estimated (BenchGap)
- SWE-bench Verified: **94.3%** estimated ± 4.6 pp (BenchGap)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 85/100.** Strong on GDPVal-AA v2 (1754 Elo xhigh / 1854 max), Terminal-Bench 2.1 (85-86%), DeepSearchQA (90.3%), Toolathlon-Verified (79.7% est), BFCL v4 (77.2% est), OSWorld (66.9-73.3% est). Capped by moderate JobBench (64.9%), AutomationBench (49.6% Meta / 70.7% est), Agentic IF (57.8%), SWEAtlas (59.4%). Tier-leading agentic tool use.
- **Reasoning: 85/100.** AA Intelligence Index v5 61/62 (major jump from v4.3.2's 48), HLE 47-48%, GPQA Diamond 94%, SciCode 59%, MMLU 94.2% est. Capped by CritPt 24.9% measured, AA-Omniscience 43.6% measured, minor regressions in AA-LCR (83%→79%) and AA-Omniscience accuracy vs Muse Spark 1.2.
- **Context window: 90/100.** Declared 1M tokens (verified on Meta card + AA), MRCR retrieval measured at 256K–512K and 512K–1M (98.5%/98.1%), MRCRv2 85.9% est, GraphWalks BFS 256K–1M 71.9% est. Capped because no full-depth needle recall is published at the full 1M window.
- **Multimodal: 85/100.** Text + image + video in, text out; visual reasoning runs through a real execution environment (screenshots/clips → build). MMMU-Pro 69.1% measured, MMMU 79.3% est, MathVision 76.7% measured, AI2D_TEST 90.1% est. Capped by text-only output and no image/audio output.
- **Coding: 88/100.** SWE-bench Verified 94.3% est, LiveCodeBench v6 88.8% est, AA Coding Index 75.8% measured, DeepSWE 75.4%, Terminal-Bench 85-86%, FrontierCode 2.0 25.1% est. Elite verified SWE coding confirmed; capped by FrontierCode 2.0 and FrontierCode 1.1 Main (54.9% est).
- **Cost efficiency: 90/100.** $1.25/$4.25 Standard ($0.55 per Intelligence Index task — lowest cost per task at 59+ Intelligence per AA); Contributor tier $0.10/$0.20 up to 21x cheaper. Not counted toward Overall.
- **Overall Score: 87/100.** Half-up mean of (85 + 85 + 90 + 85 + 88) / 5 = 86.6 → 87. Up from 82 (previous AA Intelligence Index v4.3.2 score of 48; now v5 score of 61/62 with extensive BenchGap coverage including SWE-bench Verified 94.3% est and LiveCodeBench v6 88.8% est). Best-fit recommendation: strong all-round agentic coding and long-horizon workflow model; Contributor tier offers exceptional value if training-data consent is acceptable.

---

## Signature
- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-11-04
- Method: second-pass public internet research (official Meta dev page + Meta AI Research blog + Artificial Analysis Intelligence Index v5 independent analysis + BenchGap independent benchmark aggregation); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting values reported where sources differ: Meta model card reports GDPVal-AA v2 1754 (xhigh)/1854 (max) while AA reports GDPval-AA v2 1709 (xhigh)/1754 (max); Terminal-Bench 2.1 88.8% (Meta) vs 85-86% (AA); HLE 47-48% (AA) vs 48.7% measured / 51.8% est (BenchGap); AA Intelligence Index v5 61/62 vs v4.3.2's 48 — methodology change accounts for the jump.
- Reference URLs:
  - [Meta — dev.meta.ai/models/muse-spark (official model card)](https://dev.meta.ai/models/muse-spark)
  - [Meta AI Research — Introducing Muse Spark 1.3 (official announcement)](https://research.meta.ai/blog/introducing-muse-spark-1-3)
  - [Artificial Analysis — Muse Spark 1.3: Meta reaches the frontier (Intelligence Index v5)](https://artificialanalysis.ai/articles/muse-spark-1-3)
  - [BenchGap — Muse Spark 1.3 benchmark scores](https://benchgap.net/model/muse-spark-1-3) (data as of 2026-11-03)
- SWE-bench Pro: **69.6%** estimated ± 4.3 pp (BenchGap)
- DeepSWE: **75.4%** measured (BenchGap)
- FrontierCode 2.0: **25.1%** estimated (BenchGap)
- Vibe Code Bench: **70.9%** estimated (BenchGap)

Long context:
- MRCR 256K–512K: **98.5%**; MRCR 512K–1M: **98.1%** (Meta card)
- MRCRv2: **85.9%** estimated (BenchGap); GraphWalks BFS 256K–1M: **71.9%** estimated (BenchGap)
- Declared 1M-token context; long-context retrieval measured via MRCR up to 1M window; GraphWalks measured at 256K–1M.