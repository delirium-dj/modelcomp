# Gemini 3.6 Flash — findings by Big Pickle

- Source: Google DeepMind (`gemini-3.6-flash`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's 2026-07 workhorse Flash release — more token-efficient (~17% cheaper than 3.5 Flash), better coding, knowledge and computer-control than its predecessor, and the named replacement for Gemini 2.0 Flash in agentic, multimodal workloads. A live, streaming audio/video-capable option across the Gemini lineup.
- **Provider / access:** Gemini API (`gemini-3.6-flash`), Google AI Studio, Vertex AI / Google Cloud; proprietary, closed weights.
- **Release / knowledge:** 2026-07-21 (anotherwrapper) / announced 2026-07-22; knowledge cutoff 2026-03-31.
- **IDs:** `gemini-3.6-flash` (Google; proprietary).
- **Context window:** 1,000,000 input tokens; max output ~65,536–66,000 tokens depending on channel.
- **Modalities:** text, image, video, audio inputs; text output; native tool / function calling; always-on or switchable reasoning.
- **Pricing (as of 2026-09-20):** Gemini API $0.75 in / $3.75 out per 1M; Google Cloud list $1.50 / $7.50 per 1M; high throughput (~189 tokens/s measured by anotherwrapper).
- **Architecture:** Proprietary; Gemini-family multimodal transformer (undisclosed).

### Raw benchmarks found

Agent / tool use:

- OSWorld / OSWorld Verified: **83%** (anotherwrapper).
- Terminal-Bench / Terminal-Bench 2.1: **78%** both.
- MLE-bench: **63.9%**; GDPval-AA v2: **1,421 Elo**.
- FinanceAgent v2: **56.3%**; EMB: **65.4%** (EMB row per benchgen-style aggregators).
- Arena Text Elo: 1,484 (16th-place calibre); HAL / CyberBench / APEX: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **86.4%**; MMLU-Pro: **89.3%**; SimpleQA: **68.7%**.
- ARC-AGI-1 Verified: **91.2%**; ARC-AGI 2: **60.4%**; AIME 2025: **82.2%**.
- HLE: not independently listed for 3.6 on the compared boards (Thai press noted 3.6 trails 3.5 on HLE-style graded reasoning).

Coding:

- SWE-bench Verified: **79.6%**; SWE-bench Pro (Public): **58.7%** (both anotherwrapper; SWE-bench Pro trails the Anthropic 80s frontier).
- LiveCodeBench: **88.1%**; SciCode: **52.7%**; Vibe Code Bench: **64.0%**; Arena Code Elo: **1,527.83**.
- ProofBench: 36.0%; MMLU sync (MMMLU): 91.8% (anotherwrapper stack).

Long context:

- 1M window; MRCR v2 8-needle: **91.8% average @128K** and **54% @1M pointwise** (anotherwrapper) — strong below 128K, softer at the 1M edge.
- Tau3-Banking / GraphWalks: **no verified public score found**.

Multimodal:

- CharXiv-R: **89.4%** (reasoning with tools); Arena Vision Elo: **1,295**; audio+video intake confirmed (getdeploying).
- MMMU-Pro: not listed on the compared rows for this model; MMMU-class results strong via 3.5-flash-family reporting.

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld 83%, Terminal-Bench 78%, MLE-bench 63.9% and GDPval 1,421 make it a solid mid-frontier agent; below the 85%+ terminal leaders.
- **Reasoning: 85/100.** GPQA 86.4%, MMLU-Pro 89.3% and ARC-AGI-2 60.4% are strong general reasoning; no published HLE keeps it mid-80s.
- **Context window: 83/100.** 1M window with strong @128K retrieval (91.8%) but reproducible drop at the 1M edge (54% pointwise).
- **Multimodal: 84/100.** Full text/image/video/audio intake plus 89.4 CharXiv-R reasoning — genuinely omni input, text-only output.
- **Coding: 82/100.** SWE-bench Verified 79.6% and LiveCodeBench 88.1% are respectable; SWE-bench Pro 58.7% trails the frontier tier.
- **Cost efficiency: 86/100.** $0.75/$3.75 with ~189 tokens/s throughput — one of the faster cheap-frontier options in 2026.
- **Overall Score: 83/100.** Mean of the five quality dims (82+85+83+84+82)/5 = 83.2 → 83. The dependable workhorse Flash — very well-rounded value, outpaced only by 3.7/3.8 Flash and the Anthropic frontier.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (anotherwrapper comparison sheets, getdeploying, pricepertoken, Blognone Thai coverage, Gemini API pricing docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.