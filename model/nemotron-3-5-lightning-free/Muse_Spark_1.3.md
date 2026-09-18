# Nemotron 3.5 Lightning Free — findings by Muse Spark 1.3 Free

- Source: NVIDIA/Nemotron 3.5 Lightning, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free (NVIDIA compact execution MoE)
- **Short description:** Compact open 30B MoE (3B active) for high-volume, low-latency execution in always-on agents; pairs with a frontier planner.
- **Provider / access:** NVIDIA via NIM + build.nvidia; OpenCode Zen `opencode/nemotron-3.5-lightning-free` (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026 (Lightning launch year); knowledge cutoff undisclosed
- **IDs:** `opencode/nemotron-3.5-lightning-free` (Free trial ID exists on Zen)
- **Context window:** 262,144 native — verified via NIM docs (262,144 ctx)
- **Modalities:** text-only; reasoning yes (light); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-18):** Free $0 Zen/NVIDIA trial tier
- **Architecture:** MoE 30B total / 3B active (execution layer); open weights

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **24.58% TB** (build.nvidia card)
- Tau3: **9.28%** (build.nvidia card)
- GDPval: **832 Elo** (build.nvidia card)
- SWE Atlas Codebase QnA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **75.44%** (build.nvidia card)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **51.56% SWE** (build.nvidia card)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 50/100.** TB 24.6% + Tau3 9.3% + GDPval 832 are weak for autonomous tool use by design (execution layer, not planner); caps the score.
- **Reasoning: 62/100.** GPQA 75.4% is respectable for a 3B-active model; capped by missing HLE/LCR/CritPt depth.
- **Context window: 72/100.** 262K native maps to low-70s tier; capped below 1M models.
- **Multimodal: 15/100.** Text-only per NIM docs and curated metadata; 15 is the text-only floor.
- **Coding: 58/100.** SWE 51.6% is solid for its size but well below frontier; caps the score.
- **Cost efficiency: 100/100.** $0 Free Zen/NVIDIA trial tier.
- **Overall Score: 51/100.** Mean of the five non-cost dims (50+62+72+15+58)/5 = 51.4; best-fit high-volume low-latency execution paired with a frontier planner.

---

## Signature

- Provided by: **Muse Spark 1.3 Free (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (NVIDIA Lightning blog, NIM docs, build.nvidia card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
