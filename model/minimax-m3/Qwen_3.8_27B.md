# MiniMax M3 — findings by Qwen 3.8 27B

- Source: MiniMax/minimax-m3
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3 (MiniMax-M3)
- **Short description:** MiniMax's flagship open-weights MoE (428B total / 23B active per AA) with 1M context, text/image/video input, and strong value pricing; commercial use allowed with restrictions.
- **Provider / access:** 16 API providers per Artificial Analysis; open weights on Hugging Face (`MiniMaxAI/MiniMax-M3`); no OpenCode Zen Free ID.
- **Release / knowledge:** 2026-06-01 (Artificial Analysis FAQ); knowledge cutoff not publicly stated.
- **IDs:** `minimax-ai/minimax-m3` (no Zen Free ID exists).
- **Context window:** 1M tokens (Artificial Analysis technical specs); 512K max output per repo meta.
- **Modalities:** Text, image, video in; text out (AA verified); reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-27):** $0.30 in / $1.20 out per 1M on MiniMax API (Artificial Analysis; 80% cache discount; $0.51 per Index task).
- **Architecture:** Open-weights MoE, 428B total / 23B active (AA); MINIMAX COMMUNITY LICENSE (commercial use with restrictions).

### Raw benchmarks found

Agent / tool use:

- AA-Briefcase / GDPval-AA / AutomationBench-AA / Terminal-Bench 4.0: no verified public standalone score found (folded into AA Intelligence Index; harness: Artificial Analysis v4.3.2).
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public standalone score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found (included in AA Intelligence Index)
- LCR / MLCR: no verified public score found (AA-LCR included in Index)
- CritPt: no verified public score found (included in AA Intelligence Index)
- Artificial Analysis Intelligence Index: **29 / #17 of 115** (AA v4.3.2, open-weights class; class median 18; 120M output tokens; 179.2 t/s #10 speed; TTFT 1.06s; $0.51 per Index task)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found (SciCode included in AA Index)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1M context window confirmed; no long-context retrieval (MRCR/RULER/GraphWalks) reported.

### Normalized scores (1–100)

- **Tool use: 66/100.** AA Index 29 (#17/115 open-weights class, above class median 18) with agentic evals in the composite; very fast (179.2 t/s) and cheap ($0.51/task); no direct TB2.1/Tau3 public numbers.
- **Reasoning: 63/100.** Index 29 sits in methodology's mid-band (Index 20–35 → 55–65); no direct GPQA/HLE numbers found.
- **Context window: 95/100.** 1M total context per AA specs (≥1M tier = 95–100); no verified ≥98% retrieval at 512K+ to justify 100.
- **Multimodal: 85/100.** AA verifies text + image + video in, text out (+video/PDF in = 75–90 band); no audio input.
- **Coding: 66/100.** Composite (Index 29) includes SciCode and Terminal-Bench 4.0; no direct SWE-bench Verified / LiveCodeBench public numbers to verify.
- **Cost efficiency: 95/100.** $0.30/$1.20 per 1M sits between methodology's ~$0.10/$0.20 → 97–99 and ~$0.60/$2.20 → ~92 bands; open weights allow free self-hosting (license restrictions apply).
- **Overall Score: 75/100.** (66 + 63 + 95 + 85 + 66) / 5 = 75. Best fit: high-volume agentic/coding work where 1M context and low cost matter more than top-end intelligence.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-27
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
