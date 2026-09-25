# Gemini 3 Pro — findings by Muse Spark 1.2

- Source: Google DeepMind / Gemini 3 Pro (google/gemini-3-pro-preview)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro (Preview)
- **Short description:** Google DeepMind flagship reasoning and natively multimodal MoE model; excels at science, math and competitive coding with Deep Think inference-time scaling. Flagship predecessor superseded by Gemini 3.1 Pro (deprecated 2026-03-09).
- **Provider / access:** Google Gemini API / Vertex AI / AI Studio — API ID `google/gemini-3-pro-preview` (Chat Completions-compatible via Gemini API generateContent). Deprecated 2026-03-09, migrated to `gemini-3.1-pro-preview` (deepmind.google, o10.io).
- **Release / knowledge:** Released 2025-11-18 (pricepertoken.com, o10.io snapshot 2026-06-27); knowledge cutoff 2025 (not explicitly disclosed, inferred from Nov 2025 launch).
- **IDs:** `google/gemini-3-pro-preview` (also listed as `google/gemini-3-pro`); no OpenCode Zen Free ID — paid only (meta.json noFreeId:true)
- **Context window:** 1,048,576 tokens total input, 64K–65,536 max output — verified via Google AI docs, pricepertoken.com (1,048,576), TokenRate/layer3labs; 1M MRCR v2 supported.
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes (Thinking/Deep Think mode); tool calls (function calling, code execution, screenshot tool); JSON mode via Gemini API.
- **Pricing (as of 2026-09-25):** $2.00 / $12.00 per 1M input/output (prompts ≤200K tokens); $4.00 / $18.00 per 1M for prompts >200K tokens; cached input $0.20 / $0.40 per 1M; no Free tier — paid only. Source: ai.google.dev Gemini pricing, o10.io, pricepertoken.com, libertify model card.
- **Architecture:** Proprietary Sparse Mixture-of-Experts (MoE) transformer, natively multimodal; parameter count not disclosed by Google (third-party trillion+ estimates unverified).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Tau2-bench (τ2-bench, avg of 3 categories): **85.4% avg** (85.3% Retail, 73.0% Airline, 98.0% Telecom) (source: deepmind.google evals-methodology/gemini-3-pro, Gemini 3.1 Pro model card sierra framework)
- τ-bench overall: **85.4%** (airank.dev, deepmind methodology)
- MCP Atlas (multi-step MCP workflows): **54.1%** (deepmind.google Gemini 3.1 Pro comparison table, gemini-3-pro column)
- BrowseComp (agentic search + Python + Browse): **59.2%** (deepmind.google, theresanaiforthat.com)
- Terminal-Bench 2.0 (Terminus-2 harness, agentic terminal coding): **56.9%** (deepmind.google Gemini 3.1 Pro table: Gemini 3 Pro Thinking High); alternate harness reports 54.2% Terminal-Bench Hard (theresanaiforthat.com)
- Vending-Bench 2: **mean net worth $5,478.16** (libertify model card summary of DM results)
- GDPval-AA (Elo, expert tasks): **1195 Elo** (deepmind Gem 3.1 Pro table; airank lists 1201 Elo — same ballpark, self-reported)
- Toolathon / SWE Atlas Codebase QnA: **no verified public score found** for this exact ID
- Tau3-Banking / Tau2-Bench banking subset: see Tau2-bench above; no separate Tau3-Banking leaderboard entry found

Reasoning / knowledge:

- GPQA Diamond (scientific knowledge, no tools): **91.9%** (deepmind.google, libertify, awesomeagents.ai, airank.dev — Thinking High, pass@1, Gemini API)
- HLE (Humanity's Last Exam, full set text+MM): **37.5% no tools / 45.8% with Search+Code** (deepmind.google; 37.5% self-computed, 45.8% with blocklist search+code)
- LCR / MLCR: **no verified public score found** for gemini-3-pro-preview on MRCR v2 except below; RULER not reported separately
- CritPt: **no verified public score found**
- ARC-AGI-2 (abstract reasoning, ARC Prize Verified, semi-private set): **31.1%** (deepmind.google, arcprize.org via libertify/awesomeagents)
- Artificial Analysis Intelligence Index: **no verified Intelligence Index score disclosed for 3 Pro** (AA reported Index 61/62 for Muse Spark 1.3, not for Gemini 3 Pro)
- MMMU-Pro (multimodal reasoning): **81.0%** (deepmind.google, averaged Standard+Vision; theresanaiforthat 81.0%)
- MMMLU (multilingual Q&A): **91.8%** (deepmind Gem 3.1 Pro table)
- AIME 2025 (competition math): **95.0% no tools / 100% with code execution (Deep Think mode)** (libertify, theresanaiforthat 95.0%)
- MathArena Apex (competition math): **23.4%** (libertify model card, Google deepmind)
- SimpleQA Verified: **72.1%** (theresanaiforthat.com)
- MMLU-Pro: **89.8%** (awesomeagents.ai, citing Google launch numbers)

Coding:

- SWE-bench Verified (agentic coding, single-attempt bash+file-tools harness, 10x avg): **76.2%** (deepmind.google, airank, theresanaiforthat — 76.2-78% range; 78% on airank unverified)
- SWE-bench Pro (public, diverse tasks): **43.3%** (deepmind Gem 3.1 Pro table)
- LiveCodeBench Pro (Codeforces/ICPC/IOI competitive coding, Elo): **2439 Elo** (deepmind Gem 3.1 Pro table; libertify notes 2,439 leading GPT-5.1's 2,243)
- SciCode (scientific research coding): **56%** (deepmind Gem 3.1 Pro table: 56% vs 59% for 3.1 Pro)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found for this ID** (Codex variants reported separately)

Long context:

- MRCR v2 (8-needle, long-context retrieval): **77.0% at 128K (average) / 26.3% at 1M (pointwise)** (deepmind.google Gem 3.1 Pro table, cumulative vs pointwise); 1M supported (vs Claude/GPT not supported at 1M per same table)
- RULER / GraphWalks: no verified RULER score reported; MRCR v2 is primary long-context proxy

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 86/100.** Strong Tau2 85.4% avg (Retail 85.3/Telecom 98) and GDPval ~1195 place near frontier, but Terminal-Bench 2.0 56.9% and MCP Atlas 54.1% cap below Muse Spark 1.3-class 88%+ TB; BrowseComp 59.2 caps vs 85%+ leaders.
- **Reasoning: 91/100.** GPQA Diamond 91.9% frontier-leading at launch and HLE 37.5/45.8% (nearly 3x predecessor) are frontier; AIME 95-100% and MathArena 23.4% (20x peers) reinforce; ARC-AGI-2 31.1% trails Claude 37.6% and MRCR 1M 26.3% weak — caps from 100.
- **Context window: 94/100.** 1M input / 64K output natively (1,048,576 verified) qualifies for 95-100 tier, but MRCR 77% at 128K and 26.3% at 1M pointwise show <98% retrieval at 512K+, so not 100; still far above 200K-tier models.
- **Multimodal: 88/100.** Native text+image+audio+video+PDF in (MoE multimodal) with MMMU-Pro 81.0% and Video-MMMU 87.6% (per libertify) — strong multimodal but no audio-out/video-out, so below 90-100 omni-output tier.
- **Coding: 82/100.** SWE-bench Verified 76.2% competitive, LiveCodeBench Pro 2439 Elo leading cohort, SciCode 56% frontier, but Terminal-Bench 56.9% and SWE-Pro 43.3% trail later flagships (75%+ DeepSWE tier), capping below 90.
- **Cost efficiency: 68/100.** Paid only, $2/$12 per 1M (≤200K) doubling to $4/$18 above 200K; no free tier; ~3x cost of $0.60/$2.20 ~92 tier and well above $1.25/$4.25 ~88 tier; cheaper than $3/$15 ~60 but still premium flagship pricing.
- **Overall Score: 88/100.** Mean of five quality dims (86+91+94+88+82)/5=88.2 → 88. Best-fit: frontier science/math reasoning with 1M native multimodal context; choose when GPQA/AIME/MRCR+multimodal breadth matters, or as pre-3.1 Pro historical baseline (now deprecated).

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-25
- Method: public internet research (Google DeepMind eval methodology pages, pricing docs, Libertify/AwesomeAgents/Airank/TheresAnAIForThat aggregations, ARC Prize); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

