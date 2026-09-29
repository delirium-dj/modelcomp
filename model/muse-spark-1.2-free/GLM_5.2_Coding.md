# Muse Spark 1.2 Contributor Free — findings by GLM 5.2 Coding

- Source: Meta / OpenCode Zen (`muse-spark-1.2-contributor-free`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Contributor Free
- **Short description:** Free OpenCode Zen tier of Meta's Muse Spark 1.2 coding/agentic model (launched alongside the Muse Code agent), served under contributor data-use terms. Same weights as paid `muse-spark-1.2`; predecessor of Muse Spark 1.3.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/responses` — `opencode/muse-spark-1.2-contributor-free`; underlying model on Meta Model API (`muse-spark-1.2`) and in Muse Code (Responses-style API).
- **Release / knowledge:** Released 2026-08-05 (Meta/llm-stats.com); knowledge cutoff not published.
- **IDs:** `opencode/muse-spark-1.2-contributor-free`; paid twin `opencode/muse-spark-1.2`.
- **Context window:** 1,048,576 input / 131,072 output tokens (verified: llm-stats.com provider table, Sept 2026).
- **Modalities:** input text, images, audio, video; output text; reasoning yes; tool calls yes (Muse Code agent harness); JSON mode via API.
- **Pricing (as of 2026-09-17):** Free on OpenCode Zen (contributor data-use terms — Meta may use prompts/completions for product improvement; mirrors Meta's $0.10/$0.20 contributor rate). Paid: $1.25/$4.25 per 1M (Meta Model API).
- **Architecture:** proprietary closed-weights Meta model, co-trained with the Muse Code harness; parameters/MoE unpublished.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (llm-stats.com, sourced from Meta scorecard)
- JobBench: **1615** (Meta launch scorecard via Threads OCR snippet; vs GPT-5.6 Sol 1710)
- GDPval-AA: **1523.3 Elo** (AskClash leaderboard table; vs Claude Opus 4.8 1889.8)
- OSWorld-2.0: no verified public score found (not run per AskClash table)
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- LLM Stats aggregate score: **38.4** (#70, only 2 evals tracked — thin coverage; llm-stats.com)
- GPQA Diamond / HLE / ARC-AGI: no verified public score found

Coding:

- DeepSWE 1.1: **59.3%** (llm-stats.com; described at launch as second only to frontier leaders)
- Meta Internal Coding Bench: **70.6%** (Meta-designed/curated in-house harness; Claude Opus 5 scores 79.4% on the same)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found

Long context:

- 1M-token input verified (llm-stats provider table); no MRCR/RULER/GraphWalks retrieval values published — no long-context retrieval score found

Multimodal (input-side):

- Documented input modalities text + images + audio + video (llm-stats.com capability table); no per-modality benchmark values published — no verified public score found

### Normalized scores (1-100)

- **Tool use: 78/100.** Terminal-Bench 2.1 82.9% is strong for its tier and JobBench 1615 respectable vs Sol 1710; capped by GDPval-AA 1523 trailing frontier (Opus 4.8 1889.8) and missing OSWorld/MCP tool-suite evidence.
- **Reasoning: 70/100.** Coding-agent orientation leaves thin general-reasoning coverage (LLM Stats tracks only 2 evals, aggregate 38.4); capped by zero public GPQA/HLE values.
- **Context window: 94/100.** Verified 1,048,576-token input / 131,072 output — top-tier capacity; capped marginally by unpublished long-context retrieval evidence.
- **Multimodal: 80/100.** Text/image/audio/video input documented, text out; capped by no published multimodal benchmark values and text-only output.
- **Coding: 82/100.** DeepSWE 1.1 59.3% (second-best at launch), Terminal-Bench 2.1 82.9%, Meta internal bench 70.6% vs Opus 5's 79.4%; capped by missing SWE-bench Verified / LiveCodeBench absolutes.
- **Cost efficiency: 100/100.** $0 on OpenCode Zen free tier; only cost is the contributor data-use terms.
- **Overall Score: 81/100.** Mean of five quality dims (78+70+94+80+82)/5 = 80.8 → 81. Best-fit: free-tier agentic coding on a budget, accepting data-use terms and the 131K output cap.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-09-17
- Method: public internet research (llm-stats.com provider/benchmark tables, AskClash leaderboard, Meta launch coverage incl. Threads scorecard and trycodus.com analysis, OpenCode Zen docs/pricing); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.