# MiniMax M3 — findings by Muse Spark 1.3 Contributor

- Source: MiniMax/M3, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3 (flagship open-weight MoE)
- **Short description:** MiniMax flagship open-weight MoE (~230B total / 9.8B active) with 1M context and sparse attention; strong SWE-Bench Pro and Terminal-Bench profile.
- **Provider / access:** MiniMax via API + HF weights; no Zen Free ID under minimax-ai/ namespace (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026 (M3 flagship year); knowledge cutoff undisclosed
- **IDs:** `minimax-ai/minimax-m3` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1,048,576 (1M) / 512K out — verified via curated repo metadata
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-18):** Paid $0.30/$1.20 per 1M (curated metadata; no Zen Free ID)
- **Architecture:** open-weights MoE, ~230B total / 9.8B active, sparse attention

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66%** (curated short: 66% Terminal-Bench 2.1)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **59% SWE-Bench Pro** (curated short)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M window with 512K output verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.1 66% is verified strong; capped by missing Tau/GDPval numbers.
- **Reasoning: 76/100.** Flagship sparse-attention reasoning reputation; capped by zero public GPQA/HLE numbers.
- **Context window: 100/100.** 1M / 512K out verified; top tier.
- **Multimodal: 75/100.** Text/image/video in, text out; capped below audio/PDF omni models.
- **Coding: 84/100.** SWE-Pro 59% is verified near-frontier; capped just below 60%+ sustained leaders.
- **Cost efficiency: 85/100.** Paid $0.30/$1.20 is cheap paid value; no $0 tier caps below 100.
- **Overall Score: 83/100.** Mean of the five non-cost dims (82+76+100+75+84)/5 = 83.4; best-fit cheap paid flagship open MoE coding pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (curated metadata: 59% SWE-Pro, 66% TB2.1, 230B/9.8B sparse attention); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
