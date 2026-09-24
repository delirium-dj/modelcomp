# Grok 4 — findings by Muse Spark 1.3

- Source: xAI/Grok 4 (`grok-4-0709`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 (standard single-agent; Heavy multi-agent variant excluded from this file)
- **Short description:** xAI's flagship reasoning model with native tool use and real-time X/web search. Top use case is deep science/math reasoning and tool-augmented research tasks.
- **Provider / access:** xAI API `https://api.x.ai/v1` (`grok-4-0709`, `x-ai/grok-4` on OpenRouter), SuperGrok ($30/mo) and SuperGrok Heavy ($300/mo) consumer tiers. OpenAI-SDK-compatible Chat Completions API.
- **Release / knowledge:** 2025-07-09 release; knowledge cutoff December 2024 (July 2025 reported by some API indexes)
- **IDs:** `x-ai/grok-4`, `grok-4-0709` (no Free ID exists on OpenCode Zen — scored on paid xAI pricing)
- **Context window:** 256,000 tokens total with 8,000 max output — verified via xAI launch post (2025-07-09), xAI docs, and LLMIndex/bench indexes
- **Modalities:** text + image in, text out; native tool use (parallel tool calling, code execution, live X/web search), structured outputs/JSON mode; Voice Mode with camera input in consumer app; no image/audio/video generation via API
- **Pricing (as of 2025-07-09):** $3.00 / 1M input ($0.75 cached) and $15.00 / 1M output for `grok-4-0709` — paid tier only
- **Architecture:** proprietary (MoE estimates unverified); trained on Colossus cluster (~200K H100s) with large-scale reasoning RL; Grok 4 Heavy is the same weights run as parallel collaborating agents, not separate weights

### Raw benchmarks found

Agent / tool use:

- Vending-Bench (long-horizon business simulation, avg of 5 runs): **$4,694.15 net worth** (xAI, frontier-leading at launch vs Claude Opus and human baselines)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.5%** (xAI launch report; corroborated 87.5% ModelBeats, ~89% Heavy variant)
- HLE: **25–27% no-tools, 38.6% with Python + internet** (xAI; Heavy clears 50.7% text-only with tools — excluded here as Heavy-only)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (closest proxies: AIME 2025 91.7%, ARC-AGI-2 15.9% launch-leading, USAMO 2025 37.5% standard per xAI)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **57.8%** (ModelBeats; standard-slice figure — Heavy marketing cites 72–75% on a tools-enabled slice, excluded as Heavy-only)
- LiveCodeBench: **79.0%** (xAI, Jan–May slice; corroborated 79.4% Heavy slice)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No MRCR/RULER/GraphWalks at 256K reported — **no long-context retrieval reported** (window size 256K verified; retrieval quality at full length unmeasured in public sources)

### Normalized scores (1–100)

- **Tool use: 82/100.** Native parallel tool calling plus live X/web search baked into training, with a frontier-leading Vending-Bench long-horizon result; capped below 90 by zero verified Terminal-Bench/Tau/GDPval scores.
- **Reasoning: 86/100.** GPQA 87.5% with HLE 25–27% (38.6% with tools) and launch-leading ARC-AGI-2 15.9% sit just under the frontier anchor (GPQA 90%+, HLE 40%+ → 90–100); capped by sub-frontier abstract-pattern performance.
- **Context window: 74/100.** 256K lands in the 200K–500K tier (200K = 70); capped by the small 8,000-token max output and no verified full-length retrieval measurement.
- **Multimodal: 65/100.** Text + image input with vision understanding and app-level voice/camera covers the +image-in band (60–70); capped with no video ingest or non-text output via API.
- **Coding: 80/100.** SWE-bench Verified 57.8% with LiveCodeBench 79.0% matches the mid-to-strong band; capped by no SciCode/DeepSWE evidence and Heavy-only 72–75% figures excluded.
- **Cost efficiency: 60/100.** $3.00/$15.00 maps to the ~$3/$15 → ~60 methodology anchor; paid only with no free tier.
- **Overall Score: 77/100.** Mean of the five non-cost dims (82 + 86 + 74 + 65 + 80) / 5 = 77.4 → 77; best-fit as a strong reasoning/tool-augmented pick where 256K suffices — escalate for 1M-context or abstract-pattern-heavy work.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-24
- Method: public internet research (xAI Grok 4 launch post, xAI docs/pricing, ModelBeats, Benchgen, Awesome Agents, AI/TLDR aggregates); Heavy-variant numbers cited only to exclude them; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
