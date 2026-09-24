# DeepSeek V4 Pro — findings by Muse Spark 1.2

- Source: DeepSeek (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's flagship open-weight 1M MoE (2026-04-24 preview, 2026-08-13 GA) with 1.6T/49B and frontier 80.6% SWE-bench Verified; natively multimodal.
- **Provider / access:** DeepSeek API `deepseek-v4-pro` via OpenCode Zen `deepseek/deepseek-v4-pro` (Chat Completions via adapter)
- **Release / knowledge:** 2026-04-24 preview, 2026-08-13 GA; knowledge cutoff not disclosed
- **IDs:** `deepseek/deepseek-v4-pro` (0813 max effort; no Free tier, MIT weights)
- **Context window:** 1,048,576 total (1M in / 384,000 out) — verified via DeepSeek docs, HuggingFace blog, and Artificial Analysis (1M)
- **Modalities:** Text, image, audio, video, tool-calls in; text, tool-calls out; reasoning yes (Non-think / High / Max, Max requires ≥384K); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-24):** $0.435 in / $0.87 out per 1M off-peak ($1.32/$3.96 peak); cache-hit $0.022; cache-miss off-peak $0.66/$1.98 — OpenRouter $0.44/$0.87; self-host MIT free
- **Architecture:** MoE 1,600B total / 49B active, Token-wise compression + DSA, CSA/HCA hybrid attention (27% FLOPs vs V3.2 at 1M, 10% KV cache), MIT license

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.7%** (Artificial Analysis, V4 Pro 0813 max, terminus-2 e2b pass@1 — rank #50/236 per ModelCap)
- Terminal-Bench 4.0: **14%** (Artificial Analysis, Pro 0813)
- AutomationBench-AA: **57%** (Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA v2.1: **1441 Elo** (Artificial Analysis)
- AA-Briefcase v1.1: **1261** (Artificial Analysis)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (LLMReference, DeepSeek V4 Pro family; hokai.io confirms 90.1% — RAG? but consistent)
- HLE: **41%** (Artificial Analysis, Pro 0813 max — vs 35% high effort)
- LCR / MLCR: **AA-LCR 80%** (Artificial Analysis, Pro 0813) / MLCR no isolated score
- CritPt: **18%** (Artificial Analysis — vs 10% high effort)
- Artificial Analysis Intelligence Index: **36 (recent 2026-09 reopen) / 53 (2026-08-13 Reuters snapshot, rank 3/107)** (Artificial Analysis — both published; median 27; recent page shows 36, earlier peak 53)
- GDP.pdf: **11%** (Artificial Analysis)
- Omniscience Accuracy / Hallucination Rate: **AA-Omniscience 1** (Artificial Analysis — vs -11 high effort)

Coding:

- SWE-bench Verified: **80.6%** (DeepSeek vendor via LLMReference/hokai — flagship Pro score, highest in V4 family)
- LiveCodeBench: **93.5%** (LLMReference, V4 Pro — top-tier)
- SciCode: **51%** (Artificial Analysis, Pro 0813)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / ARC-AGI-2: **58.7% ARC-AGI-2** (ModelCap) / DeepSWE not isolated for Pro
- Arena Coding: **1505 Elo (#55/394)** (LMArena via ModelCap, high effort)

Long context:

- AA-LCR 80% at 1M (Artificial Analysis); 1M total with 384K max output verified; DSA/CSA efficiency disclosed (27% FLOPs, 10% KV vs V3.2)

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.1 78.7% + AutomationBench-AA 57% + AA-Briefcase 1261 strong; capped by TB4.0 14% and no Tau3/Claw.
- **Reasoning: 82/100.** AA Index 36 (peak 53) + GPQA 90.1% + HLE 41% + AA-LCR 80% + GDPval 1441; capped by index volatility (36 vs 53) and modest GDP.pdf 11%.
- **Context window: 96/100.** 1,048,576 total / 384K out (largest output in class) with efficiency breakthrough; tier 95-100 for ≥1M but capped below 100 by 80% LCR not 90%+.
- **Multimodal: 88/100.** Text/image/audio/video in → text/tool out native unified pipeline; capped below 95 by no PDF and audio/video limited to <10min clips.
- **Coding: 90/100.** SWE-bench Verified 80.6% + LCB 93.5% + SciCode 51% + Arena 1505; frontier open-weight coder, capped by SciCode 51% mid vs closed leaders.
- **Cost efficiency: 92/100.** Open-weight MIT $0.435/$0.87 off-peak (cache-hit $0.022); self-host free; ~92 vs Free 100 but peak $1.32/$3.96 and verbosity 130M tokens temper.
- **Overall Score: 88/100.** Mean of five non-cost dims (82+82+96+88+90)/5=87.6 → 88; best-fit frontier open-weight 1M all-rounder.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (DeepSeek API docs 2026-04-24, HuggingFace blog 2026-04-24, Artificial Analysis 2026-09-10 vs 2026-08-13 snapshot, LLMReference, hokai.io, ModelCap, tabbit.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
