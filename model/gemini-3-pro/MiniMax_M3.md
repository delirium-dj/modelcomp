# Gemini 3 Pro — findings by MiniMax M3

- Source: Google DeepMind (`google/gemini-3-pro`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's frontier Pro model (released 18 November 2025) with 1M context and Deep Think mode. Native multimodal (text+image+video+audio+PDF) with TPU v5p optimization.
- **Provider / access:** Google AI Studio, Vertex AI, Gemini CLI, Google Antigravity. Chat Completions API.
- **Release / knowledge:** Release 18 November 2025; knowledge cutoff early 2025.
- **IDs:** `google/gemini-3-pro`; no free ID on Zen (free tier available via AI Studio with rate limits).
- **Context window:** 1,000,000 input / 64,000 output. Verified by Google, LLM Stats, OpenRouter.
- **Modalities:** Text, image, audio, video, PDF in; text out. Reasoning: yes (Deep Think mode). Tool calls: yes. JSON mode: yes.
- **Pricing (as of 2026-10-13):** Standard (≤200K) $2 input / $12 output per 1M; extended (>200K) $4 / $18; batch 50% off; cache $0.20-0.40/MTok + $4.50/MTok/hour storage. Deep Think requires Google AI Ultra ($250/month).
- **Architecture:** Proprietary native multimodal architecture (text+image+video+audio+PDF processed in unified context, not stitched). TPU v5p pod optimized. 420ms TTFT, 128 tok/s.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.2%** (LEADS GPT-5.1 47.6, Opus 4.5 42.8) — computer use.
- WebDev Arena: **1,487 Elo (LEADS)** — agentic vibe coding.
- Vending-Bench 2: **TOPS leaderboard** — long-horizon planning (full simulated year operation).
- Gemini Agent / Google Antigravity: native multi-step planning, autonomous execution, verification loops, human oversight integration, cross-tool orchestration.
- Tau3-Banking / Tau2-Bench / Toolathlon / MCP-Atlas: no verified public score found for this exact model/ID.

Reasoning / knowledge:

- LMArena Leaderboard: **1,501 Elo (LEADS at launch)** (Google blog, 18 Nov 2025).
- HLE (no tools): **37.5%** (LEADS GPT-5.1 26.5-31.6, Opus 4.5 ~28%).
- GPQA Diamond: **91.9%** (LEADS GPT-5.1 88.1, Opus 4.5 83.4).
- MathArena Apex: **23.4%** (NEW SOTA, vs 0.5% on 2.5 Pro).
- AIME 2025: **95.0%** (vs 88.0% on 2.5 Pro).
- AIME 2025 w/code: **100.0%** (perfect score).
- ARC-AGI-2: **31.1%** (LEADS GPT-5.1 17.6, Opus 4.5 ~15%) — abstract reasoning.
- SimpleQA Verified: **72.1%** (NEW SOTA — factual accuracy).
- Deep Think mode: HLE 41.0%, GPQA Diamond 93.8%, ARC-AGI-2 45.1% (with code execution).
- LCR / MLCR / CritPt: no verified public score found for this exact model/ID.
- Omniscience Accuracy / Hallucination Rate: no verified public score found for this exact model/ID.

Coding:

- SWE-bench Verified: **76.2%** (Claude Opus 4.5 80.9, GPT-5.1 77.9) — slightly trails.
- WebDev Arena 1,487 Elo (LEADS) for vibe coding / interactive web UI.
- Exception at zero-shot generation and complex prompts.
- Terminal-Bench 2.0: 54.2% (LEADS) — terminal tool use.
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found for this exact model/ID.

Long context:

- 1M token context window with native multimodal across all 1M.
- 420ms TTFT, 128 tok/s — fastest TTFT among frontier models.
- MRCR / RULER / GraphWalks at window length: no long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 88/100.** #1 Terminal-Bench 2.0 (54.2%). #1 WebDev Arena 1,487 Elo. Vending-Bench 2 leader. Antigravity + Gemini Agent is the most polished agentic surface in the cohort. Capped because Toolathlon / MCP-Atlas not published.
- **Reasoning: 93/100.** #1 LMArena 1,501 Elo. #1 HLE 37.5%. #1 GPQA Diamond 91.9%. #1 MathArena Apex 23.4%. Deep Think pushes to 41.0% HLE and 45.1% ARC-AGI-2. Capped because no public LCR/MLCR/CritPt numbers.
- **Context window: 95/100.** 1M / 64K — largest production context window. Native multimodal across all 1M. 420ms TTFT. Capped at 95 (vs Kimi K3's 96) because output is 64K vs Kimi's 1M.
- **Multimodal: 95/100.** #1 MMMU-Pro 81.0%. #1 Video-MMMU 87.6%. Native (not bolted on) text+image+video+audio+PDF in unified context. 100+ language real-time translation. Capped at 95 (not 100) because Video-MMMU is the only published native video benchmark.
- **Coding: 86/100.** SWE-bench 76.2% trails Opus 4.5 (80.9). But #1 WebDev Arena 1,487 Elo and #1 Terminal-Bench 2.0 54.2%. Strong on vibe coding, weaker on deep repo bug hunting. Capped because LiveCodeBench / SciCode not published.
- **Cost efficiency: 78/100.** $2/$12 standard is ~87% cheaper than GPT-5.1 / Opus 4.5. Batch 50% off, cache $0.20-0.40. Deep Think requires $250/mo sub (gated). Capped because the 272K-equivalent surcharge on extended context is a real cost cliff.
- **Overall Score: 91/100.** Half-up mean of Tool 88, Reasoning 93, Context 95, Multimodal 95, Coding 86 = 457/5 = 91.4 → half-up 91. Gemini 3 Pro is the most well-rounded multimodal+reasoning model in the cohort; the SWE-bench gap to Opus 4.5 is the only meaningful cap.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-13
- Method: public internet research (Google blog, LLM Stats, Medium, Roboflow, MangoMindBD, Evolink). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3_Pro_Google.md`, using the same headings.
