# Inkling — findings by Laguna S 2.1

- Source: Thinking Machines Lab (`https://thinkingmachines.ai/news/introducing-inkling/`), Artificial Analysis (`https://artificialanalysis.ai/models/inkling`), BenchLM (`https://benchlm.ai/models/inkling`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling (Xhigh)
- **Short description:** Thinking Machines Lab's 975B-parameter (41B active, MoE) open-weights (Apache 2.0) reasoning model released July 15, 2026. Trained with reinforcement learning on hard, multi-hour tasks. Scored 25 on the AA Intelligence Index. Positioned as a coding and knowledge-work model with 1M context.
  > Note: the repo `meta.json` for `opencode/inkling` lists 128K context and text-only modality; external sources (AA, BenchLM, launch post) show 1M context and text+image+speech input. This file documents the full model per verified external sources.
- **Provider / access:**
  - Thinking Machines API: `inkling` via API at `https://api.thinkingmachines.ai/v1`
  - OpenCode Zen: `opencode/inkling` (no Free ID per `meta.json`; standard paid pricing)
  - HuggingFace: `thinkingmachines/Inkling` (open weights, Apache 2.0)
- **Release / knowledge:** July 15, 2026; knowledge cutoff not published
- **IDs:** `opencode/inkling` (Zen); `inkling` (TML API); `thinkingmachines/Inkling` (HF); noFreeId per `meta.json`
- **Context window:** 1M total (per AA model page and BenchLM; `meta.json` lists 128K for Zen variant)
- **Modalities:** Text, image, and speech input; text output; reasoning yes (hybrid); tool calls yes; JSON mode yes
- **Pricing (as of 2026-07-15):** $1.00 input / $4.05 output per 1M tokens; cache hits discounted 75% ($0.25/M); no Free ID on Zen
- **Architecture:** Proprietary dense → MoE, 975B total parameters / 41B active; Apache 2.0 license; open weights on HuggingFace

### Raw benchmarks found

> Sources: Thinking Machines Lab Inkling launch post (`https://thinkingmachines.ai/news/introducing-inkling/`), Artificial Analysis model page (`https://artificialanalysis.ai/models/inkling`), BenchLM (`https://benchlm.ai/models/inkling`).

Agent / tool use:

- Terminal-Bench 2.1: **63.8%** — (TML launch post via BenchLM); TB2.1 (Vals): **47.6%** — (Vals AI leaderboard)
- BrowseComp: **77.1%** — (TML launch post via BenchLM)
- MCP Atlas: **74.1%** — (TML launch post via BenchLM)
- GDPval-AA: **1064 Elo** — (AA model benchmarks via BenchLM); normalized: **28.2%**
- AA-Briefcase: **834 Elo** — (AA leaderboard via BenchLM)
- AA AutomationBench: **5.0%** — (AA leaderboard via BenchLM)
- AA Agentic Index: **24.3%** — (AA model benchmarks via BenchLM)
- AA AnalystAgent: **23.8%** — (AA leaderboard via BenchLM)
- AA Tau3 Banking: **29.1%** — (AA leaderboard via BenchLM)
- AA Terminal-Bench 4.0: **1.0%** — (AA leaderboard via BenchLM)
- GDP.pdf: **12.8%** — (AA leaderboard via BenchLM)
- CWE-bench v1: **37.0%** — (Collinear leaderboard via BenchLM)
- Design Arena Agentic Web Dev: **1257** — (Design Arena leaderboard via BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **87.9%** — (TML launch post via BenchLM); AA-GPQA Diamond: **87.2%** — (AA leaderboard)
- GPQA Diamond (Vals): **87.1%** — (Vals AI leaderboard)
- HLE: **46%** — (TML launch post, with tools); HLE w/o tools: **30%** — (TML launch post)
- AA-HLE: **31.9%** — (AA leaderboard via BenchLM)
- MMLU-Pro (Vals): **86.3%** — (Vals AI leaderboard)
- Artificial Analysis Intelligence Index: **25** — (AA model page; estimated); BenchLM normalized: **25.0%**
- AA-Omniscience Index: **2.0%** — (AA leaderboard via BenchLM)
- AA-Omniscience Accuracy: **41.6%** — (AA model benchmarks via BenchLM)
- AA-Omniscience Hallucination Rate: **67.7%** — (AA model benchmarks via BenchLM; high)
- AA-LCR: **77.3%** — (AA leaderboard via BenchLM)
- CritPt: **5.4%** — (AA leaderboard via BenchLM; very low physics reasoning)
- MLCR-AA: **12.2%** — (AA leaderboard via BenchLM; very low)

Coding:

- SWE-bench Verified: **77.6%** — (TML launch post via BenchLM)
- SWE-bench (Vals): **77.6%** — (Vals AI leaderboard)
- SWE-bench Pro: **54.3%** — (TML launch post via BenchLM)
- LiveCodeBench (Vals): **85.5%** — (Vals AI leaderboard)
- AA-SciCode: **47.0%** — (AA leaderboard via BenchLM)
- AA Coding Index: **52.1%** — (AA model benchmarks via BenchLM)
- FrontierSWE v2: **4.1%** — (Proximal leaderboard via BenchLM)
- Terminal-Bench 2.1: **63.8%** — (TML launch post via BenchLM)
- CursorBench 4.0: **no verified public score found**

Multimodal & grounded:

- MMMU-Pro: **73.5%** — (TML launch post via BenchLM); AA-MMMU-Pro: **73.5%** — (AA leaderboard)
- CharXiv: **82%** — (TML launch post, with tools); CharXiv w/o tools: **78.1%**
- Design Arena Website: **1229** — (OpenRouter benchmarks via BenchLM)

Mathematics & instruction following:

- AIME26: **97.1%** — (TML launch post via BenchLM)
- IFEval: **79.8%** — (TML launch post via BenchLM)

Long context:

- AA-LCR: **77.3%** — (AA leaderboard via BenchLM); no MRCR / RULER / GraphWalks figure found; 1M context window confirmed

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.

- **Tool use: 65/100.** Terminal-Bench 2.1 at 63.8% is solid mid-to-upper-tier; GDPval-AA at 1064 Elo is mid-range (frontier ~1750+); MCP Atlas at 74.1% and BrowseComp at 77.1% reinforce competent agentic performance. AA-Briefcase at only 834 Elo and AA-Terminal-Bench 4.0 at 1.0% are weak. Capped by absent Claw-Eval data and low agentic knowledge work scores.

- **Reasoning: 65/100.** GPQA Diamond at 87.9% and AA-GPQA Diamond at 87.2% are near-frontier; HLE at 46% clears the 40% frontier threshold; AIME26 at 97.1% and MMLU-Pro at 86.3% show excellent mathematical/knowledge reasoning; AA-LCR at 77.3% is good. However, Intelligence Index at 25 is very low; CritPt at 5.4% and MLCR at 12.2% show weak physics/long-context reasoning; AA-Omniscience Index at 2.0% with 67.7% hallucination rate indicates reliability issues. Capped by poor Intelligence Index composite and hallucination concerns.

- **Context window: 95/100.** 1M token context window per AA model page and BenchLM (verified). Meets ≥1M tier; 95 rather than 100 since no verified retrieval-at-512K+ percentage was found. Note: `meta.json` lists 128K for the Zen variant.

- **Multimodal: 90/100.** Text, image, and speech input with text output per AA model page — supports +audio input (90–100) per methodology. Strong multimodal benchmark performance (MMMU-Pro 73.5%, CharXiv 82%, VideoMM MU not found but Design Arena 1229 supports capability).

- **Coding: 75/100.** LiveCodeBench at 85.5% (vals) is frontier-level (80%+); SWE-bench Verified at 77.6% is near frontier (85%+); SWE-bench Pro at 54.3% and TB2.1 at 63.8% are mid-tier; AA-SciCode at 47.0% and AA Coding Index at 52.1% are below frontier thresholds (55% and 70%). Strong coding agent benchmarks but capped by mid-range SciCode/Coding Index and no DeepSWE data.

- **Cost efficiency: 89/100.** $1.00 input / $4.05 output per 1M tokens — moderate pricing (methodology ladder: ~$1.25/$4.25 ≈ 88, ~$0.60/$2.20 ≈ 92). Open weights (Apache 2.0, free to self-host) provides cost advantage; not on Zen free tier per `meta.json` (noFreeId). Scores 89 reflecting both paid API pricing and open-weights availability.

- **Overall Score: 78/100.** Mean of five non-cost dimensions: (65 + 65 + 95 + 90 + 75) / 5 = 390 / 5 = 78. Strong coding (LiveCode 85.5%, SWE-bench 77.6%) and knowledge reasoning (GPQA 87.9%, AIME26 97.1%), but capped by low Intelligence Index (25), poor agentic knowledge-work scores (AA-Briefcase 834 Elo, TB4.0 1.0%), and hallucination concerns (Omniscience Index 2.0%, 67.7% hallucination rate). Recommended for coding and knowledge tasks where self-hosting offsets API costs; use with caution for long-horizon agentic work.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via Artificial Analysis model page, BenchLM, and Thinking Machines Lab launch post; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `Anthropic_Comparison.md`, using the same headings.

---
