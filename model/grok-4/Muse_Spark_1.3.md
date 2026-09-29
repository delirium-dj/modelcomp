# Grok 4 — findings by Muse Spark 1.3

- Source: xAI/Grok 4 (`grok-4-0709`)
- Date: 2026-09-24 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: deprecation + index gap-fills added, Reasoning 86 → 87, Overall 77 → 78); re-verified 2026-09-29 (UTC, user-signed-off re-research: Aider 79.6 + Omni splits + AA-HLE variant added, launch figures reconfirmed; Tool 82 → 83, Coding 80 → 81 — Overall holds 78)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 (standard single-agent; Heavy multi-agent variant excluded from this file)
- **Short description:** xAI's flagship reasoning model with native tool use and real-time X/web search. Top use case is deep science/math reasoning and tool-augmented research tasks.
- **Provider / access:** xAI API `https://api.x.ai/v1` (`grok-4-0709`, `x-ai/grok-4` on OpenRouter), SuperGrok ($30/mo) and SuperGrok Heavy ($300/mo) consumer tiers. OpenAI-SDK-compatible Chat Completions API.
- **Release / knowledge:** 2025-07-09 release; knowledge cutoff December 2024 (July 2025 reported by some API indexes); **DEPRECATED 2026-05-15** (CloudPrice status — amended 2026-09-27).
- **IDs:** `x-ai/grok-4`, `grok-4-0709` (no Free ID exists on OpenCode Zen — scored on paid xAI pricing)
- **Context window:** 256,000 tokens total with 8,000 max output — verified via xAI launch post (2025-07-09), xAI docs, and LLMIndex/bench indexes
- **Modalities:** text + image in, text out; native tool use (parallel tool calling, code execution, live X/web search), structured outputs/JSON mode; Voice Mode with camera input in consumer app; no image/audio/video generation via API
- **Pricing (as of 2025-07-09):** $3.00 / 1M input ($0.75 cached) and $15.00 / 1M output for `grok-4-0709` — paid tier only; prompts above 128K tokens billed $6/$30 (Benchgen)
- **Architecture:** proprietary (MoE estimates unverified); trained on Colossus cluster (~200K H100s) with large-scale reasoning RL; Grok 4 Heavy is the same weights run as parallel collaborating agents, not separate weights

### Raw benchmarks found

Agent / tool use:

- Vending-Bench (long-horizon business simulation, avg of 5 runs): **$4,694.15 net worth** (xAI, frontier-leading at launch vs Claude Opus and human baselines)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **TAU2 0.7 (#137)** (CloudPrice index row — weak tail); Tau3-Banking: **no verified public score found**
- Terminal-Bench Hard: **0.4 (#53)** (CloudPrice index row — weak tail)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.5%** (xAI launch report; corroborated 87.5% ModelBeats, ~89% Heavy variant)
- HLE: **25–27% no-tools, 38.6% with Python + internet** (xAI; Heavy clears 50.7% text-only with tools — excluded here as Heavy-only); **26.69%** AA-HLE text-no-tools lane (BenchLM — re-verified 2026-09-29)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **34.1 Intelligence Index (#108)** and **92.7 Math Index (#19)** (CloudPrice rows); **MMLU-Pro 0.9 (#18), MATH-500 1.0 (#8), AIME 0.9 (#2), HMMT 2025 90%** (CloudPrice/xAI rows); **LCR 0.7 (#132)** (CloudPrice — weak tail); Vals suite: **CorpFin SOTA #1, LegalBench 2nd, MMLU-Pro 85.3% top-10, MMMU Pro 76.5%** (closest proxies: AIME 2025 91.7%, ARC-AGI-2 15.9% launch-leading, USAMO 2025 37.5% standard per xAI)
- Omniscience Accuracy: **40.5%** / Hallucination Rate: **64.5%** (BenchLM AA-Omniscience lanes — re-verified 2026-09-29)

Coding:

- SWE-bench Verified / SWE-Pro: **57.8%** (ModelBeats; standard-slice figure — Heavy marketing cites 72–75% on a tools-enabled slice, excluded as Heavy-only)
- Aider polyglot: **79.6%** high-aider-diff (modelbenchmark third-party — re-verified 2026-09-29)
- LiveCodeBench: **79.0%** (xAI, Jan–May slice; corroborated 79.4% Heavy slice)
- SciCode: **0.5 (#70)** (CloudPrice index row — weak tail)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No MRCR/RULER/GraphWalks at 256K reported — **no long-context retrieval reported** (window size 256K verified; retrieval quality at full length unmeasured in public sources)

### Normalized scores (1–100)

- **Tool use: 83/100.** Native parallel tool calling plus live X/web search with frontier-leading Vending-Bench and Aider 79.6% tool-editing; capped below 90 by zero verified Terminal-Bench/Tau/GDPval scores.
- **Reasoning: 87/100.** GPQA 87.5% with HLE 25–27% (38.6% with tools), MMLU-Pro/HMMT/MATH-500 strength and Vals CorpFin #1 sit just under the frontier anchor; capped by ARC-AGI-2 15.9% and the LCR 0.7 tail.
- **Context window: 74/100.** 256K lands in the 200K–500K tier (200K = 70); capped by the small 8,000-token max output and no verified full-length retrieval measurement.
- **Multimodal: 65/100.** Text + image input with vision understanding and app-level voice/camera covers the +image-in band (60–70); capped with no video ingest or non-text output via API.
- **Coding: 81/100.** SWE-bench Verified 57.8% plus Aider 79.6% and LiveCodeBench 79.0% show solid coding; capped by no SciCode/DeepSWE evidence and Heavy-only 72–75% figures excluded.
- **Cost efficiency: 60/100.** $3.00/$15.00 maps to the ~$3/$15 → ~60 methodology anchor; paid only with no free tier.
- **Overall Score: 78/100.** Mean of the five non-cost dims (83 + 87 + 74 + 65 + 81) / 5 = 78.0 → 78; best-fit as a strong reasoning/tool-augmented pick where 256K suffices — escalate for 1M-context or abstract-pattern-heavy work.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-24
- Method: public internet research (xAI Grok 4 launch post, xAI docs/pricing, ModelBeats, Benchgen, Awesome Agents, AI/TLDR aggregates); Heavy-variant numbers cited only to exclude them; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
