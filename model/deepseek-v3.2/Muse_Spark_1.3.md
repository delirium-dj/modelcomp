# Deepseek V3.2 — findings by Muse Spark 1.3

- Source: DeepSeek (deepseek/deepseek-v3.2)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek's December 2025 open-weight MoE flagship (685B total, 37B active) unifying chat and deep reasoning, with sparse attention for long-context efficiency.
- **Provider / access:** DeepSeek Platform / OpenRouter / Microsoft Foundry (`deepseek/deepseek-v3.2`, alias deepseek-v3.2-20251201); OpenAI-compatible + Anthropic-compatible endpoints. Reasoning effort + thinking controls.
- **Release / knowledge:** 2025-12-01 release (Epoch; vendor news Dec 2025); knowledge cutoff not published.
- **IDs:** `deepseek/deepseek-v3.2` (no Zen Free ID — paid pricing scored).
- **Context window:** 164K in (OpenRouter via Epoch); max output 66K (OpenRouter).
- **Modalities:** text in/out; reasoning yes; tool calls + structured output yes; no vision/audio.
- **Pricing (as of 2026-10-05):** DeepSeek Platform $0.28/$0.42 per 1M in/out, cache $0.028 (Epoch via OpenRouter); OpenRouter route $0.40/$1.20.
- **Architecture:** 685B MoE, 37B active; DeepSeek Sparse Attention (DSA); open weights (unrestricted).

### Raw benchmarks found

Agent / tool use:

- LMCA agents: **15.2%** (Epoch external leaderboard via AIStatsLive)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **83.4% ±2.0** (Epoch eval log via AIStatsLive, 2025-12-16)
- OTIS Mock AIME 2024-2025: **87.8% ±4.1** (Epoch eval log, 2025-12-16)
- DTBench reasoning: **62.7%** (Epoch external via AIStatsLive)
- Epoch Capabilities Index: **146.3 (#76/274)** (AIStatsLive)
- AA Intelligence Index: **21.5** (Artificial Analysis via OpenRouter)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Pro: **40.1%** (LLMReference observed 2026-04-15; rank 44/46 — weak repo-level)
- Aider Polyglot: **74.2%** (Epoch external via AIStatsLive)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 164K window verified; no MRCR/RULER/GraphWalks retrieval score published for this ID.

### Normalized scores (1–100)

- **Tool use: 55/100.** LMCA 15.2% weak agentic signal; capped, zero TB2.1/Tau3/GDPval/Claw numbers.
- **Reasoning: 80/100.** GPQA 83.4 + AIME 87.8 + DTBench 62.7 upper-mid; capped by no HLE/Index strength (AA Idx 21.5 modest).
- **Context window: 62/100.** 164K verified (128K–200K band anchor ~60); capped, no measured retrieval, 66K max output caveat.
- **Multimodal: 15/100.** Text-only in/out (methodology floor for text-only).
- **Coding: 68/100.** Aider 74.2 solid editing; capped hard by SWE-bench Pro 40.1 rank 44/46 and no LCB/SciCode breadth.
- **Cost efficiency: 96/100.** $0.28/$0.42 maps near the ~$0.20/$0.40 band (~96); open weights add self-host option.
- **Overall Score: 56/100.** Mean (55+80+62+15+68)/5 = 280/5 = 56.0 → 56. Best fit: cheap open-weight reasoning/editing where text-only is fine; not a repo-level coder or multimodal pick.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
