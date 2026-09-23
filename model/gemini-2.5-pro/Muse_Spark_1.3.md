# Gemini 2.5 Pro — findings by Muse Spark 1.3

- Source: Google/Gemini 2.5 Pro, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's flagship reasoning model of the 2.5 generation (stable release June 2025). Strong long-context reasoning and multimodal understanding; best fit for document-heavy analysis and complex multi-step reasoning.
- **Provider / access:** Google AI (Gemini API / AI Studio, Vertex AI); OpenCode Zen `opencode/gemini-2.5-pro`. Chat Completions-compatible via third-party gateways; native API is responses-style generateContent.
- **Release / knowledge:** Stable June 2025 (public preview March 2025); knowledge cutoff 2025-01-31 (per Artificial Analysis model page and Neura Market comparison)
- **IDs:** `opencode/gemini-2.5-pro` (paid tier; cost scored on paid pricing)
- **Context window:** 1M total tokens (1,048,576), max output ~64–66K tokens — verified via Artificial Analysis model pages, llm-stats model card, and CloudPrice specs
- **Modalities:** Text, image, audio, video, PDF/file in; text out; reasoning yes; tool calls and JSON mode yes
- **Pricing (as of 2026-09-23):** $1.25/$10.00 per 1M in/out (prompts above 200K tokens $2.50/$15.00); cached reads ~$0.13/1M (verified via Artificial Analysis, Simon Willison's pricing notes, llm-stats). No $0 tier — paid only.
- **Architecture:** Proprietary (undisclosed params), reasoning model with invisible thinking tokens counted as output

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found (BenchLM lists Terminal-Bench 2.0 for this model as not measured)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- SWE-bench Verified (agentic coding proxy): **63.8%** (Google official figures via DataCamp roundup; llm-stats lists 63.2–63.8% across snapshots)
- Aider Polyglot whole-file editing: **74.0%** (Google official figures via DataCamp)

Reasoning / knowledge:

- GPQA Diamond: **84.0%** pass@1 (Google official figures via DataCamp; Neura Market lists 83%)
- HLE: **18.8%** no-tools (Google official figures via DataCamp; Neura Market lists 17.8%)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **26** (Artificial Analysis comparison pages) / BenchLM provisional est. 63 (#51/124, estimated — provisional, not verified-leaderboard)
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- AIME 2024 / 2025 (math proxy): **92.0% / 86.7%** pass@1 (Google official figures via DataCamp)
- SimpleQA: **50.8** (Neura Market comparison table)

Coding:

- SWE-bench Verified / SWE-Pro: **63.8%** Verified (Google via DataCamp); SWE-Pro: no verified public score found
- LiveCodeBench: **70.4%** v5 (Google official figures via DataCamp; llm-stats lists 75.6% on another LiveCodeBench snapshot — harness differs, both cited)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: **0.40%** (BenchLM comparison row — anomalously low, likely harness mismatch; noted, not used for scoring)
- DeepSWE / Coding Index / other: no verified public score found
- Aider Polyglot: **74.0%** whole-file, 76.5% / 72.7% edit splits (Google via DataCamp; llm-stats)

Long context:

- MRCR **91.5%** at 128K (Google official figures via DataCamp); third-party snapshots list MRCR 93.0% and MRCR-1M pointwise 82.9% (llm-stats) — strong at 128K, good-not-perfect at the full 1M window

### Normalized scores (1–100)

- **Tool use: 70/100.** SWE-bench Verified 63.8% plus Aider 74% show solid agentic coding, but zero verified Terminal-Bench/Tau3/GDPval numbers caps it at mid-tier.
- **Reasoning: 80/100.** GPQA 84% and HLE 18.8% beat the mid band but trail the 90%+/40%+ frontier bar; AA Index 26 confirms upper-mid placement.
- **Context window: 96/100.** Full 1M window with 91.5% MRCR at 128K; 1M-pointwise retrieval (~83%) keeps it just short of a perfect 100.
- **Multimodal: 85/100.** Text/image/audio/video/PDF in with MMMU 79.6%; text-only output keeps it below the 90+ omni-output tier.
- **Coding: 72/100.** SWE-V 63.8% and LiveCodeBench ~70–76% sit squarely mid-pack against today's 80%+ frontier.
- **Cost efficiency: 75/100.** Paid-only $1.25/$10.00 (output-heavy workloads cost ~2x the $1.25/$4.25 tier); cheap input, punishing output.
- **Overall Score: 81/100.** Mean of (70 + 80 + 96 + 85 + 72) / 5 = 80.6 → 81; best fit as a long-context reasoning/analysis pick, not a first-choice coder.

---

## Signature

- Provided by: **Muse Spark 1.3 (muse-spark-1.3-contributor-free)** — 2026-09-23
- Method: public internet research (Google official figures via DataCamp roundup, Artificial Analysis model/comparison pages, BenchLM model page and comparisons, llm-stats, Neura Market); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
