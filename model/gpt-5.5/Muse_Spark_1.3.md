# GPT-5.5 — findings by Muse Spark 1.3

- Source: OpenAI/GPT-5.5 (`gpt-5.5`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's smartest general work model at its April 2026 release, built for real-world agentic coding, computer use, and knowledge work. Top use case is multi-step coding and tool-calling agent loops via Codex and API.
- **Provider / access:** OpenAI API + ChatGPT (Plus/Pro/Business/Enterprise) + Codex (`gpt-5.5` / `gpt-5.5-pro`); Chat Completions and Responses API.
- **Release / knowledge:** 2026-04-23 release (Pro same day; API 2026-04-24); knowledge cutoff not officially published — say how verified: no verified cutoff found.
- **IDs:** `openai/gpt-5.5` (state explicitly if no Free ID exists on Zen — paid only)
- **Context window:** 1M tokens API (1.05M reported), 400K in Codex — verified via OpenAI launch post and release trackers (April 2026).
- **Modalities:** text/image in; text out; reasoning yes (none/low/medium/high/xhigh effort dial); tool calls yes (function calling, browsing, code execution, computer use); JSON mode yes (structured outputs).
- **Pricing (as of 2026-09-19):** $5 / $30 per 1M input/output tokens, cached input $0.50; Batch/Flex half rate; Pro $30 / $180 per 1M; paid tier only ($).
- **Architecture:** proprietary (reported MoE, community estimate 100-200B active — unverified; vendor discloses natively omnimodal co-design with NVIDIA GB200/GB300, unconfirmed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI launch post 2026-04-23 vendor run; SOTA at release vs Opus 4.7 69.4%)
- Terminal-Bench 2.1: **78.2%** (release tracker aggregation of vendor figures, April 2026)
- Tau2-bench Telecom (original prompts): **98.0%** (OpenAI launch post 2026-04-23)
- GDPval (wins or ties): **84.9%** (OpenAI launch post); GDPval-AA Elo **1785 xhigh** (Artificial Analysis April 2026, #1)
- GDPval-AA v2: **1494 Elo** (release tracker, April 2026)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathlon: **55.6%** (OpenAI launch post 2026-04-23); MCP Atlas: **75.3%** (OpenAI launch post); BrowseComp: **84.4%** (OpenAI launch post)
- OSWorld-Verified: **78.7%** (OpenAI launch post 2026-04-23; vs Opus 4.7 78.0%)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (OpenAI launch post 2026-04-23; vs Opus 4.7 94.2%)
- HLE no tools: **41.4%** / with tools: **52.2%** (OpenAI launch post 2026-04-23; vs Opus 4.7 46.9% / 54.7%)
- LCR / MLCR: **AA-LCR runner-up to other OpenAI models** (Artificial Analysis April 2026 qualitative; no verified public numeric score found for exact LCR %)
- CritPt: **no verified public score found** (AA notes top-tier placement behind other OpenAI models, no number published)
- Artificial Analysis Intelligence Index / BenchLM overall: **60 (AA Index, #1 at release, April 2026)** (Artificial Analysis); BenchLM coding sub-arena 1507 / overall 1474 #3 (BenchLM via aggregator)
- Omniscience Accuracy / Hallucination Rate: **57% / 86%** (AA-Omniscience xhigh via Artificial Analysis April 2026; highest accuracy but high hallucination vs Opus 4.7 36%)
- FrontierMath Tier 1-3: **51.7%** / Tier 4: **35.4%** (OpenAI launch post; leads Opus 4.7 43.8% / 22.9%); ARC-AGI-2 Verified: **85.0%** (OpenAI launch post; 84.6% tracker variant)

Coding:

- SWE-bench Pro (public): **58.6%** (OpenAI launch post 2026-04-23; vs Opus 4.7 64.3%)
- SWE-bench Verified: **88.7%** (aggregator citing vendor/July 2026 BenchLM; provisional — no official leaderboard entry verified)
- SWE-bench Multilingual: **77.8%** (release tracker, April 2026)
- LiveCodeBench: **no verified public score found** (closest proxy: DeepSWE 1.0 64.3% below)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **DeepSWE 1.0 64.3%** (release tracker); **Expert-SWE internal 73.1%** (OpenAI launch post)

Long context:

- OpenAI MRCR v2 8-needle avg **94.8% at 128K, 74.0% at 512K-1M** (OpenAI launch post); Graphwalks BFS 1M F1 **45.4%**, parents 1M F1 **58.5%** (OpenAI launch post); no verified RULER score found.

### Normalized scores (1–100)

- **Tool use: 87/100.** TB 2.0 82.7% SOTA plus Tau2 98.0%, MCP Atlas 75.3% and GDPval 84.9% show elite tool orchestration; capped by Toolathlon 55.6% mid-range.
- **Reasoning: 86/100.** GPQA 93.6% plus FrontierMath T1-3 51.7% lead and ARC-AGI-2 85.0% show strong math/reasoning; capped by HLE 41.4%/52.2% trailing Opus 4.7 and AA hallucination 86%.
- **Context window: 88/100.** 1M window with MRCR 94.8% at 128K and 74.0% at 1M plus Graphwalks 45-58% at 1M show strong retention; capped below perfect 1M recall.
- **Multimodal: 82/100.** MMMU-Pro 81.2-83.2% plus CharXiv 84.1% show solid vision-text; capped by Blueprint-Bench 36.2% spatial weakness and text-only output.
- **Coding: 84/100.** Expert-SWE 73.1% plus SWE-Verified 88.7% proxy and TB 2.0 82.7% show strong coding; capped by SWE-Pro 58.6% loss to Opus 4.7 64.3% and DeepSWE 64.3%.
- **Cost efficiency: 55/100.** $5/$30 is 2x GPT-5.4 and $5 above Opus 4.7 output; paid frontier premium with only token-efficiency offset, capped well below cheap Flash tiers.
- **Overall Score: 85/100.** Mean of the five non-cost dims (87+86+88+82+84)/5 = 85.4 → 85; best-fit agentic coding and computer-use foundation where accuracy outweighs price.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-19
- Method: public internet research (OpenAI launch post 2026-04-23, system card, Artificial Analysis April 2026, release trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
