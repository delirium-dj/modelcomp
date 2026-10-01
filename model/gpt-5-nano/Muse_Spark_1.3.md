# GPT-5 Nano — findings by Muse Spark 1.3

- Source: OpenAI/GPT-5 nano (`gpt-5-nano`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Nano
- **Short description:** OpenAI's fastest, cheapest GPT-5 tier (Aug 2025): small reasoning model for summarization, classification, and high-volume coding assistance at roughly 1/25th the flagship price; trades frontier accuracy for speed and cost.
- **Provider / access:** OpenAI API (`gpt-5-nano`, Responses + Chat Completions APIs, reasoning effort minimal/low/medium/high); Azure (`$0.055/$0.44`); OpenRouter `openai/gpt-5-nano`. OpenCode Zen `opencode/gpt-5-nano`.
- **Release / knowledge:** Released 2025-08-07 (OpenAI "Introducing GPT-5" + "for developers" posts). Knowledge cutoff May 2024 (Artificial Analysis model page).
- **IDs:** `gpt-5-nano` (OpenAI API); `opencode/gpt-5-nano` (Zen catalogue / meta.json)
- **Context window:** 400,000 total (272,000 max input + 128,000 max reasoning & output) — verified via OpenAI dev post and llm-stats provider table (400.0K/128.0K)
- **Modalities:** Text and image in; text out; reasoning yes (effort-parameterized, 97-155 tok/s depending on effort); tool calls yes (Berkeley Function-Calling 51.5%)
- **Pricing (as of 2026-10-01):** $0.05 per 1M input / $0.40 per 1M output; cached input $0.005; batch $0.025/$0.20 (ai-atlas provider table from OpenAI + OpenRouter listings). No $0 tier — scored on paid pricing.
- **Architecture:** Proprietary closed reasoning model (undisclosed parameters)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench Hard (AA): **17.4%** medium-effort with tools (llmlearner.com + benchmarklist.com, Artificial Analysis evaluator; vs Fable 5 62.9% field lead)
- Tau2-Bench Telecom: **36.5%** (benchmarklist.com, rank 164/332, 51st percentile)
- GDPval-AA: **756** (benchmarklist.com, rank 153/340, 55th percentile)
- Berkeley Function-Calling Leaderboard: **51.5%** (benchmarklist.com, rank 20/85, 77th percentile)
- AndroidWorld: **91.4%** (benchmarklist.com, rank 4/21, 85th percentile — mobile-agent outlier, harness-specific)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** (MCPMark 6.3% adjacent per benchmarklist, not the Atlas harness — not scored)

Reasoning / knowledge:

- GPQA Diamond: **67.6%** high-effort no-tools (llmlearner.com + ai-atlas.co, Artificial Analysis evaluator; 66.97% medium alongside; api.llm-stats vendor compilation 71.2% noted as alternate)
- HLE (text-only): **9.5%** high-effort (llmlearner.com + benchmarklist.com, rank 145/218 and 199/466)
- AIME 2025: **85.2%** (vectorwire.ai citing api.llm-stats.com vendor-compiled scores; matharena verified 46.15% high/low is a different harness — listed for context, not scored)
- MATH 500: **93.8%** (benchmarklist.com, rank 16/58, 74th percentile)
- Artificial Analysis Intelligence Index: **13** high-effort estimated (artificialanalysis.ai model page, v4.3.2 composite over 10 evals; above price-tier median 8, below mid 20-35 band)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **54.7%** high-effort (OpenAI "for developers" post table; vs GPT-5 74.9% / mini 71.0% / o3 69.1% / GPT-4.1 54.6% alongside; independent mini-SWE-agent board 34.8% medium is a different harness — noted, not scored)
- Aider Polyglot (diff): **48.4%** high-effort (OpenAI dev post table; vs GPT-5 88.0% / mini 71.6%)
- LiveCodeBench: **70.2%** high-effort (benchleader.com, Vals AI source; llmlearner alternate harness 78.9% noted, not scored)
- SWE-Lancer IC SWE Diamond: **$49K** high-effort (OpenAI dev post table; vs GPT-5 $112K / mini $75K)
- SciCode / AA-SciCode: **no verified public score found** (SciCode is inside the AA Index composite but no standalone nano number published)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- OpenAI-MRCR 2-needle: **43.2%** at 128K / **34.9%** at 256K high-effort (OpenAI dev post Long Context table; vs GPT-5 95.2%/86.8%)
- Graphwalks: **64.0%** bfs / **43.8%** parents <128K high-effort (OpenAI dev post table)
- BrowseComp Long Context: **80.4%** at 128K / **68.4%** at 256K high-effort (OpenAI dev post table)

### Normalized scores (1–100)

- **Tool use: 52/100.** BFCL 51.5% and Tau2 36.5% show usable function-calling; capped hard by Terminal-Bench Hard 17.4% and GDPval-AA 756 (below the 900-1200 mid band) plus missing Claw/Atlas harnesses.
- **Reasoning: 55/100.** GPQA 67.6% and MATH 93.8% show mid-band graduate reasoning; capped by HLE 9.5% and AA Index 13 (below the 20-35 mid band) with missing LCR/CritPt/Omniscience.
- **Context window: 72/100.** 400K total (272K in / 128K out) sits mid-way in the 200K-500K 65-84 tier; capped by weak measured retention (MRCR 43.2% at 128K, 34.9% at 256K vs flagship 95.2%/86.8%).
- **Multimodal: 65/100.** Text + image in to text out fits the +image-in 60-70 band; RealWorldQA 74.1% / MMMU Pro 70.9% support the middle; no video/audio in or non-text out.
- **Coding: 62/100.** SWE-bench Verified 54.7% and LiveCodeBench 70.2% show competent small-model coding at the GPT-4.1 line; capped by Aider 48.4% and missing SciCode/Vibe/DeepSWE, far below flagship 74.9%/88.0%.
- **Cost efficiency: 98/100.** $0.05/$0.40 per 1M (cache $0.005, batch $0.025/$0.20) sits just under the ~$0.10/$0.20 97-99 band on input; cheapest GPT-5 tier by ~25x vs flagship.
- **Overall Score: 61/100.** Mean of the five quality dims (52+55+72+65+62)/5 = 61.2; best fit as high-volume summarization/classification and draft-code nano tier, escalate to Mini/GPT-5 for hard reasoning.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-01
- Method: public internet research (OpenAI GPT-5 + for-developers posts 2025-08-07, artificialanalysis.ai GPT-5 nano High page, benchleader.com + benchmarklist.com + llmlearner.com + vectorwire.ai + ai-atlas.co compilations, llm-stats.com pricing/context table, swebench.com leaderboards); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
