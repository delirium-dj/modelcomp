# GLM 5.2 — findings by Muse Spark 1.2

- Source: Z.ai/GLM 5.2 (`z-ai/glm-5.2`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2
- **Short description:** Z.ai (Zhipu AI) flagship open-weights MoE (~753B total / 40–42B active) for long-horizon agentic coding — 1M stable context, frontier SWE/Terminal/MCP performance at ~1/6 GPT-5.5 cost. Successor to GLM-5.1.
- **Provider / access:** Z.ai API `z-ai/glm-5.2` (`zai-org/GLM-5.2` on HuggingFace, MIT open-weights), OpenRouter `z-ai/glm-5.2` ($0.97/$3.04 via Alibaba), OpenCode Zen `opencode/glm-5.2` free tier. Claude Code/ Cline / Vibe compatible.
- **Release / knowledge:** 2026-06-16 (Z.ai blog, VentureBeat); knowledge cutoff March 2026 per Benchgen
- **IDs:** `z-ai/glm-5.2`, `zai-org/GLM-5.2` (Free tier exists via Zen)
- **Context window:** 1,000,000 (1M) / 131,072 max output — verified via Z.ai blog, HuggingFace, Models.dev (204K in curated meta is prior-generation value — 1M verified for 5.2)
- **Modalities:** text in; text out; reasoning yes (High/Max thinking effort, 85K tokens max mode); tool calls yes; JSON/structured yes; multilingual text; no image/audio/video per spec (Benchgen text-only)
- **Pricing (as of 2026-06-16):** Z.ai $1.40 in / $4.40 out per 1M ($0.26 cached) — paid; OpenRouter cheapest $0.97/$3.04; Coding Plan $12.60–$112/mo; ~1/6 GPT-5.5 cost per VentureBeat
- **Architecture:** MoE ~753B total / ~40–42B active, MIT open-weights, DeepSeek sparse-attention lineage, 1M context stable

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas Public Set: **76.8%** (Z.ai 2026-06-16) / 77.8% Opus 4.8 leader (77.0 VentureBeat rounding) — vs GPT-5.5 75.3%
- Terminal-Bench 2.1: **81.0%** Terminus-2 (Z.ai) / **82.7%** Claude Code best harness (vs Opus 4.8 85.0/78.9, GPT-5.5 84.0/83.4, Gemini 3.1 Pro 74.0/70.7)
- Tool-Decathlon: **48.2%** (Z.ai) vs Opus 59.9%, GPT-5.5 55.6%
- FrontierSWE: **74.4% Dominance** (Z.ai 2026-06-16) — trails Opus 4.8 75.1% by 1%, beats GPT-5.5 72.6% and Opus 4.7 11%; highest open-source via Proximal 1M eval
- Tau3-Banking / Tau2 Bench: **no verified public score found** (τ²-bench 99.1% is different telecom suite)
- τ²-bench: **99.1%** telecom per ModelBeat (different benchmark — strong telecom tool use)
- Claw-Eval / Toolathon: **no verified public score found** (Tool-Decathlon is proxy)

Reasoning / knowledge:

- HLE (no tools): **40.5%** (Z.ai) — vs Opus 49.8*, GPT-5.5 41.4*
- HLE with tools: **54.7%** (Z.ai) — beats GPT-5.5 52.2%, tracks Opus 57.9*; Benchgen 54.7% highest public HLE
- CritPt: **20.9%** (Z.ai) vs Opus 20.9 tied, GPT-5.5 27.1%
- AIME 2026: **99.2%** (Z.ai) vs Opus 95.7, GPT-5.5 98.3, Gemini 98.2 — near-perfect
- HMMT Nov 2025: **94.4%**, Feb 2026 **92.5%** (Z.ai)
- GPQA Diamond: **91.2%** (Z.ai) vs Opus 93.6, GPT-5.5 93.6, Gemini 94.3; ModelBeat 91.9%
- ARC-AGI: **77.0%** Benchgen (vs Gemini 98%)
- Artificial Analysis Intelligence Index: **51** (DataLLM Lab 2026-07-10) — #1 open-weights (#4 overall behind Fable 5/Opus 4.8/GPT-5.5)
- Omniscience: **no verified public score found** for 5.2 specific
- LCR / MLCR: **no verified public score found** beyond FrontierSWE long-horizon proxy

Coding:

- SWE-bench Pro: **62.1%** (Z.ai) vs GPT-5.5 58.6, Opus 69.2, Gemini 54.2 — strongest open-source per Z.ai, beats GPT-5.5
- NL2Repo: **48.9%** (Z.ai) vs Opus 69.7
- DeepSWE: **46.2%** (Z.ai) vs Opus 58, GPT-5.5 70 — trails hardest scratch
- ProgramBench: **63.7%** (Z.ai) vs Opus 71.9
- SWE-bench Verified 78.7% via ModelBeat (standardized eval) / SWE-Marathon **13.0%** (Z.ai) vs Opus 26%, GPT 12%
- PostTrainBench: **34.3%** vs Opus 37.2, GPT 28.4
- SciCode / LiveCodeBench: **no verified public score found** beyond these

Long context:

- FrontierSWE / PostTrainBench / SWE-Marathon all evaluated at **1M context, max effort, 128K output** per Z.ai footnotes — practical 1M delivery capability vs Opus 4.8; **no independent MRCR/RULER needle 1M pointwise reported** beyond these long-horizon benches

### Normalized scores (1–100)

- **Tool use: 84/100.** MCP-Atlas 76.8%, Terminal 81.0% (82.7% best), FrontierSWE 74.4% (trails Opus by 1% but beats GPT-5.5) demonstrate frontier-adjacent long-horizon tool use; Tool-Decathlon 48.2% caps below 90 vs Opus 59.9%.
- **Reasoning: 86/100.** HLE 40.5% (54.7% with tools highest public), AIME 99.2%, GPQA 91.2%, CritPt 20.9% tied Opus, and AA Index 51 (#1 open) place it mid-80s; below GPT-5.5/HLE 49.8 frontier and ARC 77% vs Gemini 98% caps.
- **Context window: 96/100.** 1M verified stable (evaluated at 1M on three long-horizon suites with 128K output) — open-source long-horizon leader; only below perfect 100 by not-quite-Opus 75.1 dominance.
- **Multimodal: 15/100.** Text-only per Benchgen and curated meta (no image/video in for 5.2) — text-only anchor.
- **Coding: 85/100.** SWE-bench Pro 62.1%, DeepSWE 46.2%, Terminal 81%, FrontierSWE 74.4% plus AA verified coding strength support top open coding; capped below 90 by Opus 69.2 Pro and DeepSWE 70 frontier.
- **Cost efficiency: 85/100.** $1.40/$4.40 via Z.ai (~1/6 GPT-5.5) or $0.97/$3.04 via gateway plus MIT self-host and free cached input $0.26; Coding Plan $12.60/mo highly competitive; capped below free tier by still-paid.
- **Overall Score: 73/100.** Mean of the five non-cost dims (84+86+96+15+85)/5 = 73.2 → 73; best-fit as top open-weights long-horizon coding pick where 1M and cost matter — multimodal tasks need separate vision model.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (Z.ai GLM-5.2 blog 2026-06-16, VentureBeat, HuggingFace zai-org/GLM-5.2, DataLLM Lab 2026-07-10 AA Index 51, Benchgen 54.7 HLE, Models.dev pricing, TheModelBeat); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
