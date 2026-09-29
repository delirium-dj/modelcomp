# MiMo V2.5 Free — findings by Muse Spark 1.3 Contributor

- Source: Xiaomi/MiMo V2.5, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: Claw/LCR/SciCode/vision gap-fills added, Tool/Coding 78 → 79, Overall holds 79); re-verified 2026-09-29 (UTC, user-signed-off re-research: TB4.0 0% tail + 48T-tokens + release-day confirms added — scores unchanged, Overall holds 79)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free (Xiaomi open-weights, also covers Xiaomi MiMo-V2.5 Free alias)
- **Short description:** Native omni-modal open-weights MoE by Xiaomi for text, image, video and audio understanding plus strong agentic coding; free capped tier on Zen.
- **Provider / access:** Xiaomi via HF `XiaomiMiMo/MiMo-V2.5`; OpenCode Zen `opencode/mimo-v2.5-free` (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-04-22 release (Xiaomi/Kilo/AI Atlas all confirm); knowledge cutoff undisclosed (re-verified 2026-09-29)
- **IDs:** `opencode/mimo-v2.5-free` (Free capped ID exists on Zen)
- **Context window:** 200K Zen cap (native 1M) / 32K out — verified via models.dev toml + Pi model page
- **Modalities:** text, image, audio, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-18):** Free $0 Zen capped tier; native from ~$0.14/$0.28 per 1M
- **Architecture:** open-weights MoE, 310.8B total / 15B active, MIT license, trained on 48T tokens (AI Atlas/llm-stats — re-verified 2026-09-29)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **63.7%** (BenchmarkList xiaomi-mimo-v2.5); **65.8% TB2.0** (RankedAGI mimo-v2-5); **63.7%** AA-independent corroborated (AI Atlas — re-verified 2026-09-29)
- Terminal-Bench 4.0: **0%** AA-independent (AI Atlas — weak tail — re-verified 2026-09-29)
- Tau3-Banking / Tau2-Bench: **69.5% Tau3** (RankedAGI); **90.6% Tau2** (BenchmarkList)
- GDPval-AA: **1148 Elo** (BenchmarkList)
- Claw-Eval / ClawProBench: **62.3% Claw-Eval** (BenchLM mirror); **23.8% MM-ClawBench** (BenchLM mirror — weak tail)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- PinchBench (OpenClaw agent tasks): **89.7% avg (#6/50)** (Kilo Code leaderboard; Coding 97.8% slice)
- MMMU-Pro: **77.9%** (BenchLM mirror, leads Inkling 73.5%); **CharXiv 81%** (BenchLM mirror)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **73.0% LCR** (Kilo Code AA panel); **67.1% IFBench** instruction following (same panel)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **38 AA Index** (AA MiMo-V2.5 vs Pro comparison)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **56.1% SWE-Pro** (RankedAGI mimo-v2-5); **71% SWE (BenchmarkList)**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **43.9% SciCode** (Kilo Code AA panel); **56.8% Coding Index** and **41.7% TerminalBench Hard** (same panel)
- Vibe Code Bench: **42.2%** (BenchmarkList)
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no long-context retrieval reported** (native 1M claimed, Zen capped 200K served)

### Normalized scores (1–100)

- **Tool use: 79/100.** Tau2 90.6% + Tau3 ~69% with TB mid-60s, Claw-Eval 62.3% and PinchBench 89.7% show strong free-tier orchestration; capped by GDPval 1148 well below frontier and the MM-Claw 23.8% / TB4.0 0% tails.
- **Reasoning: 72/100.** AA Index 38 is respectable mid-tier; capped by absence of GPQA/HLE/CritPt public numbers.
- **Context window: 70/100.** 200K Zen served cap maps to 70 tier (native 1M noted but not served on Zen); capped accordingly.
- **Multimodal: 95/100.** Native omni text/image/video/audio input is the broadest free coverage; capped only as outputs remain text.
- **Coding: 79/100.** SWE-Pro 56.1% + SWE 71% + Vibe 42.2% with SciCode 43.9% and Coding Index 56.8% are strong for $0; capped below 60%+ SWE-Pro frontier.
- **Cost efficiency: 100/100.** $0 Free Zen capped tier.
- **Overall Score: 79/100.** Mean of the five non-cost dims (79+72+70+95+79)/5 = 79.0; best-fit free omni + balanced agent/coding pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (BenchmarkList, RankedAGI, Artificial Analysis comparison, Xiaomi family pages, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
