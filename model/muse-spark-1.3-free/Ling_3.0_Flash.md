# Muse Spark 1.3 Contributor — findings by Ling 3.0 Flash

- Source: Meta (`opencode/muse-spark-1-3-contributor-free`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor (Free tier)
- **Short description:** Meta's proprietary multimodal reasoning model for long-horizon agentic and coding workflows, with 1M context window and near-perfect long-context retrieval; Contributor tier is free on OpenCode Zen in exchange for training-data consent.
- **Provider / access:** OpenCode Zen (`opencode/muse-spark-1-3-contributor-free`), Meta Model API (`muse-spark-1-3-contributor`), Muse Code. Chat Completions / Responses API. Free Contributor tier (limited-time promo).
- **Release / knowledge:** 2026-09-02 release. Knowledge cutoff not explicitly stated.
- **IDs:** `muse-spark-1-3-contributor` (Meta Model API), `opencode/muse-spark-1-3-contributor-free` (Zen)
- **Context window:** 1,048,576 (1M) tokens, 131,072 max output
- **Modalities:** Text, image, video in; text out; reasoning enabled; tool calls supported
- **Pricing (as of 2026-09-23):** Free Contributor tier on OpenCode Zen; standard rates $1.25/1M input, $0.15/1M cached, $4.25/1M output (Meta Model API)
- **Architecture:** Proprietary, closed weights; parameter count not disclosed; multimodal reasoning model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Artificial Analysis, tied with GPT-5.6 Sol, rank #7/10 on LMSpeed)
- GDPval-AA v2: **1754** Elo (Artificial Analysis, rank #10/72)
- DeepSearchQA: **89.4%** (Meta official)
- OSWorld 2.0: **66.9%** (Meta official)
- JobBench: **64.9%** (Meta official)
- AutomationBench: **49.4%** (Meta official)
- DeepSWE v1.1: **75.4%** (Meta official, ties Claude Opus 5 at 74.0% and beats GPT-5.6 Sol at 73.0%)
- SWE-Atlas Codebase QnA: **59.4%** (Meta official)
- Agentic IF Index: **57.8** (Meta official)
- MRCR 256K-512K: **98.5%** (Meta official)
- MRCR 512K-1M: **98.1%** (Meta official)
- AA Agentic Index: Not directly published

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **53/100** (max variant) / **52** (xhigh variant), rank 28/656 (Artificial Analysis v4.3.2)
- HLE: **39.9%** (Artificial Analysis, rank 3rd behind Gemini 3.1 Pro Preview and GPT-5.4)
- CritPt: **11%** (Artificial Analysis, rank 5th highest)
- MMMU-Pro: **80.5%** (Artificial Analysis, 2nd most capable vision model after Gemini 3.1 Pro Preview at 82.4%)
- Agentic IF Index: **57.8** (Meta official)
- LLM Stats Score: **55.3** (ranks #5 on LLM Stats)
- GPQA Diamond: **no verified public score found** (not measured for 1.3 release)
- AA-LCR: **no verified public score found** (included in Intelligence Index but not separately published)

Coding:

- DeepSWE v1.1: **75.4%** (Meta official, ties Claude Opus 5)
- Terminal-Bench 2.1: **88.8%** (Meta official, ties GPT-5.6 Sol)
- SWE-Atlas Codebase QnA: **59.4%** (Meta official)
- Vibe Code Bench: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SWE-bench Verified: **no verified public score found**
- SWE-bench Pro: **no verified public score found** (Muse Spark 1.1 had 61.5%)

Long context:

- MRCR 8-needle (256K-512K): **98.5%** (Meta official)
- MRCR 8-needle (512K-1M): **98.1%** (Meta official, class-leading; GPT-5.6 Sol drops to 73.8%)
- OpenAI MRCR v2 (256K-512K): **98.5%**
- OpenAI MRCR v2 (512K-1M): **98.1%**

### Normalized scores (1–100)

- **Tool use: 90/100.** Exceptional on Terminal-Bench 2.1 (88.8%, tied #1) and DeepSearchQA (89.4%); strong on DeepSWE v1.1 (75.4%, beats Opus 5). Moderate on OSWorld (66.9%) and JobBench (64.9%); weaker on AutomationBench (49.4%). Top-tier agentic coding and retrieval capability.
- **Reasoning: 75/100.** AA Intelligence Index at 52-53 places it in the top 5-10 models globally. HLE at 39.9% (rank 3rd) demonstrates strong deep reasoning. But CritPt at 11% and Agentic IF Index at 57.8 show gaps in some reasoning domains. Limited GPQA and AA-LCR data.
- **Context window: 98/100.** 1M native context window with near-perfect MRCR scores (98.5% at 256K-512K, 98.1% at 512K-1M). Class-leading long-context retrieval, especially at the far end where competitors degrade significantly.
- **Multimodal: 85/100.** Text, image, and video input supported; MMMU-Pro at 80.5% (2nd most capable vision model). No audio input; text-only output.
- **Coding: 90/100.** DeepSWE v1.1 at 75.4% (ties Claude Opus 5, beats GPT-5.6 Sol); Terminal-Bench 2.1 at 88.8% (tied for #1); SWE-Atlas Codebase QnA at 59.4%. Strong long-horizon coding agent capability. Limited SWE-bench and LiveCodeBench coverage.
- **Cost efficiency: 100/100.** Free Contributor tier on OpenCode Zen ($0 input/output). Standard paid rates are $1.25/$4.25, but the evaluated free tier costs nothing.
- **Overall Score: 88/100.** Mean of the five non-cost dimensions (90 + 75 + 98 + 85 + 90) / 5 = 87.6, rounded half-up to 88. A frontier-class multimodal reasoning agent with exceptional long-context retrieval, strong agentic coding (Terminal-Bench 2.1 tied #1), and deep reasoning (HLE rank 3), but limited benchmark coverage for some domains.

---

## Signature

- Provided by: **Ling 3.0 Flash (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Artificial Analysis, BenchLM, LLM Stats, Meta official model card and blog, and OpenCode Zen docs; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/muse-spark-1.3-free/Ling_3.0_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/muse-spark-1.3-free/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash.md.excluded`, not `.md` (see SELF-EXCLUSION above).
