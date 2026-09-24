# Grok 4 — findings by Muse Spark 1.2

- Source: xAI/Grok 4 (`grok-4-0709`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's flagship reasoning model with native tool use and real-time X/web search, optimized for deep science/math reasoning and tool-augmented agentic tasks. Heavy variant runs same weights as parallel agents for higher scores but is excluded here.
- **Provider / access:** xAI API `https://api.x.ai/v1` (`grok-4-0709`, `x-ai/grok-4` on OpenRouter), Consumer SuperGrok $30/mo and SuperGrok Heavy $300/mo. OpenAI-compatible Chat Completions API with tool calling and structured outputs.
- **Release / knowledge:** 2025-07-09 release; knowledge cutoff December 2024
- **IDs:** `x-ai/grok-4`, `grok-4-0709` (no Free ID exists on Zen — paid only)
- **Context window:** 256,000 total (256K in / 8,000 max output) — verified via xAI launch post 2025-07-09, xAI docs, and eval indexes
- **Modalities:** text + image in; text out; reasoning yes (extended thinking via tool use); tool calls yes (parallel tool calling, code execution, live X/web search); JSON/structured outputs yes; no image/audio/video generation via API
- **Pricing (as of 2025-07-09):** $3.00 in / $15.00 out per 1M, $0.75 cached in per 1M — paid only, no free tier; price rises above 128K tokens per pricingTiers
- **Architecture:** proprietary (MoE architecture estimates unverified), trained on Colossus (~200K H100s) with large-scale reasoning RL; Grok 4 Heavy uses same weights in multi-agent collaboration, not separate weights

### Raw benchmarks found

Agent / tool use:

- Berkeley Function Calling Leaderboard: **62.97%** accuracy (evals.report, official, 2025-07-09)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Vending-Bench (long-horizon agentic business simulation, avg 5 runs): **$4,694.15 net worth, 4,569 units** (xAI launch report — frontier-leading at launch vs Claude Opus 4 $2,077 and humans $844)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (evals.report official 2025-07-09; Sophon lists 87.7%, xAI launch corroborates 87–88% range, Heavy variant 88.9%)
- HLE: **24.52%** standard without tools (evals.report official), **26.7%** on some aggregators (Sophon/ShawnHack); **38.6% with Python + internet**, **50.7% text-only Heavy variant** (xAI launch — Heavy excluded as multi-agent)
- ARC-AGI-1: **66.67%** accuracy (evals.report official 2025-07-09)
- ARC-AGI-2: **15.9%** (xAI launch — nearly double prior SOTA ~8.6%, frontier-leading at launch)
- AIME 2025: **95%** Heavy / **~91.7%** standard proxy (xAI launch table, community tests)
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (proxies: LiveBench 67.4% per Sophon, MMLU 92.4%, MMLU-Pro 79.7%, USAMO 2025 37.5% standard / 61.9% Heavy per xAI)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **57.8%** standard single-attempt (ModelBeats/xAI launch proxy for standard slice; Heavy marketing cites 72–75% on tools-enabled slice — excluded as Heavy-only; ShawnHack lists 68.4% on different eval slice)
- LiveCodeBench: **81.9%** Pass@1 (evals.report unverified 2025-07-09; Sophon confirms 81.9%, xAI Jan–May slice 79.0–79.4%)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **Aider 79.6%** Heavy excluded; standard LiveBench Coding 73.1%, Language 76.4%, Reasoning 79.1% (Sophon)

Long context:

- **No MRCR / RULER / GraphWalks value at window length — no long-context retrieval reported** (256K window verified; retrieval quality at full length unmeasured in public sources)

### Normalized scores (1–100)

- **Tool use: 83/100.** Berkeley Function Calling 62.97% plus native parallel tool calling with live X/web search and code execution, corroborated by frontier-leading Vending-Bench long-horizon result; capped below 90 by no verified Terminal-Bench/Tau/GDPval harness numbers.
- **Reasoning: 87/100.** GPQA 87.0% with HLE 24.5–26.7% (38.6% with tools) and launch-leading ARC-AGI-2 15.9% place it just under frontier anchor (GPQA 90%+, HLE 40%+ → 90–100); AIME 95% Heavy proxy supports strong quantitative reasoning but capped by sub-frontier HLE no-tools.
- **Context window: 74/100.** 256K lands in the 200K–500K tier (200K=70 benchmark); 8K max output and no verified full-length MRCR/RULER caps it below 1M-tier.
- **Multimodal: 65/100.** Text + image in with vision understanding and voice/camera in consumer app covers image-in band (60–70); capped with no video ingest or non-text output via API, below full omni models.
- **Coding: 81/100.** SWE-bench Verified 57.8% with LiveCodeBench 81.9% maps to mid-strong coding band; capped by no SciCode/DeepSWE and Heavy-only 72–75% figures excluded, but well above open-weight baseline.
- **Cost efficiency: 60/100.** $3 in / $15 out anchors near methodology midpoint for paid frontier models (~$3/$15 → ~60); no free tier and price increase above 128K caps it below free/ultra-cheap tier.
- **Overall Score: 78/100.** Mean of the five non-cost dims (83+87+74+65+81)/5 = 78.0; best-fit as strong reasoning/tool-augmented pick where 256K suffices — escalate to 1M-context models or Heavy for maximal HLE/arc-pattern work.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (xAI Grok 4 launch post 2025-07-09, xAI docs/pricing, evals.report, Sophon, Smythos launch table, ShawnHack/LLMStats aggregates); Heavy-variant numbers cited only to exclude them; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
