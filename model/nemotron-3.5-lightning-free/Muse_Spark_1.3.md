# Nemotron 3.5 Lightning Free — findings by Muse Spark 1.3 Contributor

- Source: NVIDIA/Nemotron 3.5 Lightning, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-12 (UTC) — second-pass refresh (prior Signature 2026-09-18 with build.nvidia-card evidence; new: AA model page — Index 13, 300.5 tok/s, 1M context, 31.6B/3.6B params, $0.06/$0.20 pricing; HokAI spec sheet — Aug 11 release, PinchBench 85.37, MMLU-Pro 81.94, AA-LCR 52, no-train policy)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free (NVIDIA compact execution MoE)
- **Short description:** NVIDIA's open 30B-class MoE (3.6B active) for high-volume, low-latency execution in always-on agents; 1M context, 300+ tok/s, distilled from 550B Nemotron 3 Ultra; pairs with a frontier planner.
- **Provider / access:** NVIDIA via NIM + build.nvidia + HF weights (OpenMDW-1.1, commercial use, no field-of-use restriction); OpenCode Zen `opencode/nemotron-3.5-lightning-free` (Chat Completions, tool calling supported); day-zero vLLM/SGLang/NeMo support.
- **Release / knowledge:** 2026-08-11 release (HokAI changelog); successor to Nemotron 3 Nano 30B-A3B (Dec 2025); knowledge cutoff undisclosed
- **IDs:** `opencode/nemotron-3.5-lightning-free` (Free trial ID exists on Zen)
- **Context window:** 1M native (AA model page + HokAI — corrects filed 262K NIM-docs figure; amended 2026-10-12).
- **Modalities:** text-only; reasoning yes (reasoning lane); tool calls yes; JSON mode yes; code/tool-call I-O per HokAI
- **Pricing (as of 2026-10-12):** Free $0 Zen/NVIDIA trial tier; paid hosts from $0.05/$0.20 (DeepInfra) to $0.10/$0.25 (OpenRouter); AA median $0.06/$0.20, blended $0.07/1M; self-hostable (no per-token bill)
- **Architecture:** hybrid Mamba-2 + MoE + Attention (LatentMoE), 31.6B total / 3.6B active (AA page; HokAI cites 30B/3B nominal); distilled from Nemotron 3 Ultra 550B; open weights + training data mixture + recipes

### Raw benchmarks found

> Compared against prior findings (2026-09-18, Overall 51): new verified evidence below — AA Lightning model page (Index 13, 300.5 tok/s #1/142, 1M context, 31.6B/3.6B, $0.06/$0.20) and HokAI spec sheet (Aug 11 release, PinchBench 85.37 BF16 / 83.43 NVFP4, MMLU-Pro 81.94, AA-LCR 52, SWE Multilingual 39.33, no-train policy, Qwen3.6 35B comparison). Gaps closed: AA composite, speed, context (262K → 1M), MMLU-Pro, AA-LCR. Filed TB/Tau/GDPval card rows retained (no AA-lane updates found for those harnesses).

Agent / tool use:

- Terminal-Bench: **24.58% TB** (build.nvidia card; HokAI context: predecessor Nano 7%, Lightning near gpt-oss-120b lane)
- Tau3: **9.28%** (build.nvidia card)
- GDPval: **832 Elo** (build.nvidia card)
- PinchBench (vendor agentic): **85.37 BF16 / 83.43 NVFP4** (HokAI, Aug 2026 — up from Nano 66.11; 10k tasks 30% faster than Qwen3.6 35B at similar accuracy; NEW)
- SWE Atlas Codebase QnA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **75.44%** (build.nvidia card; HokAI: vs Qwen3.6 35B 83.40 — Lightning trades accuracy for speed)
- MMLU-Pro: **81.94%** (HokAI, vendor-reported Aug 2026 — NEW)
- AA-LCR Long Context: **52** (HokAI, vendor-reported — NEW, closes prior gap)
- Artificial Analysis Intelligence Index / BenchLM overall: **13** (AA model page — NEW, closes prior gap; #28/142 small-size class lane, class median 8; v4.3.2 composite)
- AA speed context (NEW): **300.5 output tok/s** (#1/142 in class; median 75.5); TTFT 0.61s (median 1.08s); 120M output tokens per Index task (median 82M — verbose); $0.09 per Index task
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **51.56% SWE** (build.nvidia card; HokAI: up from Nano 34.08, vs Qwen3.6 70.12; peer rank #31/33 — bottom third); SWE Multilingual **39.33%** (HokAI — NEW)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M native window (AA page + HokAI; corrects filed 262K); AA-LCR 52 measured; no MRCR/RULER percentage found**
- Data policy (NEW): NVIDIA never sees inference traffic (open weights); host retention depends on host policy, not NVIDIA (HokAI)

### Normalized scores (1–100)

- **Tool use: 52/100.** TB 24.6% + Tau3 9.3% + GDPval 832 still weak in absolute terms, but PinchBench 85.37 and 300.5 tok/s #1-class speed show the design brief (volume executor, not planner); capped as autonomous-planner evidence.
- **Reasoning: 64/100.** GPQA 75.4% plus MMLU-Pro 81.94% and AA Index 13 (above class median 8) show respectable small-model reasoning; capped by missing HLE/CritPt depth.
- **Context window: 88/100.** 1M native (corrects filed 262K) with AA-LCR 52 measured maps to the upper-mid band; capped below retrieval-saturated 1M peers (revised up from 72: context evidence is new and 4x larger).
- **Multimodal: 15/100.** Text-only per AA page and NIM docs; 15 is the text-only floor (unchanged).
- **Coding: 58/100.** SWE 51.6% is solid for its size but well below frontier; caps the score.
- **Cost efficiency: 100/100.** $0 Free Zen/NVIDIA trial tier.
- **Overall Score: 55/100.** Mean of the five non-cost dims (52+64+88+15+58)/5 = 55.4; best-fit high-volume low-latency execution paired with a frontier planner.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-10-12
- Method: second-pass refresh of the 2026-09-18 report: fresh public internet research (AA Lightning model page — Index 13, 300.5 tok/s, 1M context, 31.6B/3.6B, $0.06/$0.20; HokAI spec sheet — Aug 11 release, PinchBench, MMLU-Pro, AA-LCR, no-train policy, Qwen3.6 comparison); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
