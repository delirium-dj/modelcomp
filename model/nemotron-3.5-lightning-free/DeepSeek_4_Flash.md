# Nemotron 3.5 Lightning Free — findings by DeepSeek 4 Flash

- Source: NVIDIA/Nemotron 3.5 Lightning (evaluated via the free Zen / NVIDIA trial tier)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** Compact open 30B MoE (3B active) for high-volume, low-latency execution in always-on agents; pairs with a frontier planner. Free Zen/NVIDIA trial.
- **Provider / access:** OpenCode Zen free tier / NVIDIA; open weights.
- **Release / knowledge:** Nemotron 3.5 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/nemotron-3.5-lightning-free` (Free ID exists)
- **Context window:** 262,144 native — verified from NVIDIA NIM docs / curated metadata.
- **Modalities:** text-only; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** free Zen/NVIDIA trial; hosted ~$0.06/$0.17 per 1M.
- **Architecture:** open-weights 30B total / 3B active MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 **24.58%** (NVIDIA build card); Tau3 **9.28%**; GDPval **832 Elo**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond **75.44%** (NVIDIA build card)
- RULER long-context ~95% (NVIDIA)

Coding:

- SWE-bench Verified **51.56%** (NVIDIA build card)

Long context:

- RULER ~95% (NVIDIA)

Multimodal:

- text-only model

### Normalized scores (1–100)

- **Tool use: 50/100.** TB 24.58% and Tau3 9.28% show an execution layer, not a planner; GDPval 832 is modest.
- **Reasoning: 58/100.** GPQA 75.44% is decent for 3B active; no HLE/AA Index published.
- **Context window: 80/100.** 262K native with RULER ~95%.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 58/100.** SWE-bench Verified 51.56% is modest.
- **Cost efficiency: 100/100.** $0 on the evaluated free Zen/NVIDIA trial tier.
- **Overall Score: 52/100.** Mean of (50 + 58 + 80 + 15 + 58) / 5 = 52.2 → 52. Best-fit: routed executor + local single-GPU, not a primary planner/coder.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (NVIDIA build card, NIM docs, curated sources); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
