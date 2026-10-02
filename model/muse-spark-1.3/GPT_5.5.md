# Muse Spark 1.3 — findings by GPT-5.5

- Source: Meta/Muse Spark 1.3 (`muse-spark-1.3`; OpenCode Zen free alias `muse-spark-1.3-contributor-free`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3; includes paid Standard `muse-spark-1.3`, paid Contributor `muse-spark-1.3-contributor`, and OpenCode Zen **Muse Spark 1.3 Contributor Free** `opencode/muse-spark-1.3-contributor-free` alias.
- **Short description:** Muse Spark 1.3 is Meta’s proprietary multimodal reasoning model for long-horizon agentic workflows, tool use, and coding. The OpenCode Zen “Contributor Free” listing appears to be a free gateway/alias to the contributor tier; I found no separate verified benchmark run for the Zen free alias, so benchmark rows below refer to the published `muse-spark-1.3` / `Muse Spark 1.3 (max)` evaluation tier where stated.
- **Provider / access:** Meta Model API `meta/muse-spark-1.3` via OpenAI-compatible Responses API and Chat Completions; Meta Contributor `meta/muse-spark-1.3-contributor`; OpenCode Zen `opencode/muse-spark-1.3-contributor-free` via `https://opencode.ai/zen/v1/responses`; Cursor also lists model ID `muse-spark-1.3`.
- **Release / knowledge:** Released 2026-09-02; public knowledge cutoff not disclosed.
- **IDs:** `meta/muse-spark-1.3`, `meta/muse-spark-1.3-contributor`, `opencode/muse-spark-1.3-contributor-free`; a Free ID exists on OpenCode Zen, but no separate verified public benchmark score was found for that exact Zen free ID.
- **Context window:** 1,048,576 tokens total; max output 131,072 tokens reported by models.dev/Pi-derived model metadata; Meta docs verify the 1,048,576-token context for both Standard and Contributor Muse Spark 1.3.
- **Modalities:** Text, image, video, audio\*, and PDF input; text output; reasoning yes; tool calls supported; structured output / JSON-schema style output supported. Meta notes Muse Spark 1.3 audio understanding is “not fully supported” and may be degraded.
- **Pricing (as of 2026-09-30):** Meta Standard `muse-spark-1.3`: $1.25/M input, $0.15/M cached input, $4.25/M output; prompts/completions not used for Meta training. Meta Contributor `muse-spark-1.3-contributor`: $0.10/M input, $0.002/M cached input, $0.20/M output, in exchange for permission to use prompts/completions to train future Meta models. OpenCode Zen `muse-spark-1.3-contributor-free`: $0/M input, $0/M cache, $0/M output, limited-time free model; privacy/training caveat follows the Contributor/free-feedback nature of the offering.
- **Architecture:** Proprietary; parameter count and active parameters not disclosed; weights are not publicly available.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta launch scorecard; Muse Code/native coding harness; Terminal-Bench 2.1, 89 tasks, mean pass@1)
- Tau3-Banking / Tau2-Bench: **50.5%** (Artificial Analysis 𝜏³-Banking independent leaderboard; page text places Muse Spark 1.3 (max) after Qwen3.8 Max 51.3% and Grok 4.6 (high) 50.7%)
- GDPval-AA: **1754 Elo** (Meta launch scorecard; GDPval-AA v2; Artificial Analysis Stirrup harness described in Meta methodology)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **59.4%** (SWE-Atlas Codebase QnA, public QnA split, mini-swe-agent harness)
  Reasoning / knowledge:
- GPQA Diamond: **94%** (Artificial Analysis launch article, rounded GPQA Diamond result for Muse Spark 1.3; legacy AA index context)
- HLE: **49%** (Artificial Analysis current comparison table for Muse Spark 1.3 (max))
- LCR / MLCR: **83%** (AA-LCR v1.1, Artificial Analysis current comparison table for Muse Spark 1.3 (max))
- CritPt: **25%** (Artificial Analysis current comparison table for Muse Spark 1.3 (max))
- Artificial Analysis Intelligence Index / BenchLM overall: **48 / #25 of 686** (Artificial Analysis Intelligence Index v4.3.2); BenchLM says Muse Spark 1.3 has 13 source-displayable rows but does not qualify for a public overall rank.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
  Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **59%** (Artificial Analysis current comparison table for Muse Spark 1.3 (max))
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **75.4%** DeepSWE v1.1 pass@1 (Meta launch scorecard; mini-swe-agent harness, 113 tasks)
  Long context:
- MRCR v2 8-needle: **98.5%** mean sequence-match ratio at 256K–512K and **98.1%** at 512K–1M (Meta launch scorecard; 100 examples per band)

### Normalized scores (1-100)

- **Tool use: 97/100.** Frontier evidence: Terminal-Bench 2.1 88.8%, Tau3-Banking 50.5%, GDPval-AA 1754 Elo, plus OSWorld 2.0 66.9% partial / 32.0% binary and AutomationBench 49.6%; capped below 100 because several rows are first-party or harness-specific and the OpenCode Zen free alias has no separate verified score.
- **Reasoning: 92/100.** Frontier GPQA/HLE profile: GPQA Diamond 94% and HLE 49%, with AA-LCR 83% and CritPt 25%; capped because current Artificial Analysis Intelligence Index v4.3.2 is 48 rather than 60+ on the newer scale.
- **Context window: 100/100.** Verified 1,048,576-token context plus MRCR v2 512K–1M retrieval at 98.1%; this meets the methodology’s 1M-window tier and the >=98% retrieval condition for a 100.
- **Multimodal: 90/100.** Supports text, image, video, audio\*, and PDF input with text output, tool calls, reasoning, and structured output; capped at 90 because audio input is explicitly marked not fully supported/degraded and no non-text output is provided.
- **Coding: 96/100.** Frontier coding evidence: DeepSWE v1.1 75.4%, Terminal-Bench 2.1 88.8%, SciCode 59%, and SWE-Atlas Codebase QnA 59.4%; capped below 100 because SWE-bench Verified/SWE-Pro and LiveCodeBench exact public scores were not verified.
- **Cost efficiency: 88/100.** Scored on the evaluated paid Standard tier at $1.25/M input, $0.15/M cached input, and $4.25/M output, matching the methodology’s ~$1.25/$4.25 ≈ 88 band; OpenCode Zen Free would be $0, but it has no separate verified benchmark run and is therefore not the evaluated tier.
- **Overall Score: 95.0/100.** Mean of Tool use 97, Reasoning 92, Context window 100, Multimodal 90, and Coding 96; best fit is long-context agentic coding and tool-heavy workflows where paid Standard privacy is acceptable or Contributor/Zen Free data-use terms are acceptable.

---

## Signature

- Provided by: **GPT-5.5 (`openai/gpt-5.5`)** — 2026-09-30
- Method: Fresh public internet research across Meta docs/blog/methodology, OpenCode Zen docs, Artificial Analysis, BenchLM/BenchmarkList/models.dev-style public catalogs, and benchmark pages; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
