# Nemotron 3.5 Lightning Free — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: NVIDIA / Nemotron 3.5 Lightning Free (OpenCode Zen)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** NVIDIA's small (30B/3B) MoE "execution layer" model designed as a fast routed executor inside long-running agents, not a primary planner. Single-GPU friendly; text-only.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3-5-lightning-free`; NVIDIA NIM 262K context. Chat Completions.
- **Release / knowledge:** Released 2026 per NVIDIA developer blog; knowledge cutoff ≈ early-2026.
- **IDs:** `opencode/nemotron-3-5-lightning-free` (Zen Free).
- **Context window:** 262,144 tokens (per NIM docs); 1M extended per some trackers — scored at native 262K.
- **Modalities:** Text in/out; tool calls; reasoning light.
- **Pricing (as of 2026-09-17):** $0/$0 Zen Free.
- **Architecture:** 30B total / 3B active MoE; proprietary NVIDIA.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **24.58** (build.nvidia card).
- Tau3: **9.28** (build.nvidia card) — low.
- GDPval-AA: **832** (build.nvidia card).
- SWE-bench Verified: **51.56** (build.nvidia card).
- Claw-Eval: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **75.44** (build.nvidia card).
- HLE / LCR / MRCR / CritPt: **no verified public score found**.

Coding:

- SWE-bench Verified: **51.56** (build.nvidia card).
- LiveCodeBench / DeepSWE / SciCode: **no verified public score found**.

Long context:

- 262K native; no MRCR at depth reported.

### Normalized scores (1–100)

- **Tool use: 50/100.** TB2.1 24.58 (low), Tau3 9.28 (very low), GDPval 832 (low-mid). Routed executor framing caps.
- **Reasoning: 62/100.** GPQA 75.44 (mid-high) lifts; small active params cap multi-step.
- **Context window: 72/100.** 262K native = 200K–500K band 65–84; 72 by convention.
- **Multimodal: 15/100.** Text-only.
- **Coding: 58/100.** SWE 51.56 (mid), TB 24.58 (low). Cap = missing LiveCode/SciCode.
- **Cost efficiency: 100/100.** $0/$0 Zen Free.
- **Overall Score: 51/100.** Mean (50+62+72+15+58+100)/6 = 59.5 → 60. Best fit: routed executor + local single-GPU, not primary planner/coder.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation drawn from public benchmark datasets (NVIDIA developer blog, NIM docs, build.nvidia model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.