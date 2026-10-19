# Nemotron 3.5 Bolt 74B-A9B — findings by Step 5 Preview

- Source: NVIDIA/Nemotron 3.5 Bolt 74B-A9B (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B-A9B (BF16)
- **Short description:** NVIDIA's compressed, locally-runnable vision-language agentic model (Oct 2026): the Nemotron 3.5 Super VL 120B-A12B compressed to 74B total/9B active via Star Elastic, with a native 2-bit 24GB build for single-GPU deployment.
- **Provider / access:** Self-host weights only — Hugging Face `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16` (plus 24GB IQ2, 24GB-GGUF, NVFP4 and LiLiCorr drafter siblings); vLLM recipes on A100/H100/GB200/B200. Artificial Analysis lists **no public API** for this model; no OpenCode Zen route found (verified 2026-10-19).
- **Release / knowledge:** HF GA 2026-10-15; post-training data cutoff May 2026 (model card).
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16` · `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` (native 2-bit) · `nemotron-3.5-super-vl`-style served name `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB-GGUF`.
- **Context window:** Up to 262,144 tokens (256K; official card and Artificial Analysis).
- **Modalities:** Text, image and video in (mp4 up to 2 min, ≤256 frames) → text out; JSON output, chain-of-thought reasoning, tool calling; chat-template reasoning controls (`enable_thinking`, `medium_effort`); English-primary plus ES/FR/DE/IT/JA and more.
- **Pricing (as of 2026-10-19):** No verified public per-token price — open weights (OpenMDW-1.1) for self-hosting; Artificial Analysis lists no provider pricing.
- **Architecture:** Open weights, OpenMDW-1.1; Mamba-2–Transformer hybrid LatentMoE — 74B total / 9B active params, C-RADIO v4-H vision encoder + MLP projector; 80B-token compression + SFT + RL pipeline from the 120B-A12B Super VL parent (Star Elastic, arxiv 2605.07182).

### Raw benchmarks found

> NVIDIA's card reports BF16 and 24GB (IQ2) side by side; Artificial Analysis measures a reasoning variant independently (its numbers sit closest to the 24GB build). Both kept where they differ.

Agent / tool use:

- Terminal-Bench 2.1: **53.93%** BF16 / 51.0% 24GB (NVIDIA model card; via BenchLM)
- Tau3-Banking: **17.01%** (NVIDIA, BF16 and 24GB)
- MCP-Atlas: **55.60%** BF16 / 52.2% 24GB (NVIDIA; on the 500-public-task subset)
- BrowseComp: **70.00%** BF16 / 66.8% 24GB (NVIDIA)
- WebArena (vision): **50.25%** BF16 / 50.9% 24GB (NVIDIA)
- PinchBench: **90.35%** BF16 / 87.8% 24GB (NVIDIA; vendor-defined eval, no independent harness found)
- GDPval-AA v2: **31.13** (NVIDIA normalized) / AA-measured normalized **24.0%** (Artificial Analysis, via BenchLM)
- Claw-Eval / Toolathlon / OSWorld: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.83%** BF16 / 86.4% 24GB (NVIDIA)
- HLE (no tools): **28.73%** BF16 / 25.3% 24GB (NVIDIA); AA-HLE: **24.7%** (Artificial Analysis, stricter harness)
- AA-LCR: **67.38%** BF16 (NVIDIA) / **69.7%** (Artificial Analysis)
- SciCode: **44.49%** BF16 (NVIDIA) / AA-SciCode: **39.7%** (Artificial Analysis)
- CritPt: **4.3%** (Artificial Analysis) — near-floor
- Artificial Analysis Intelligence Index: **21** (AA; BenchLM records 21.4%) — #4 of 67 open-weight models in its 40–150B class (class median 8), mid-pack globally
- AA-Omniscience: Accuracy **17.1–21.8%**, non-hallucination **56.1%** (NVIDIA) / **43.7% hallucination rate, index -19.2** (Artificial Analysis) — weak knowledge reliability

Coding:

- No SWE-bench Verified/Pro, LiveCodeBench, DeepSWE or Vibe Code Bench figures published for this model — coding is evidenced only via Terminal-Bench 2.1 (53.93% BF16), SciCode (44.49% BF16) and PinchBench (90.35% BF16); all "no verified public score found" for the SWE/LCB family

Long context:

- 256K window verified (official + AA); AA-LCR 67.4–69.7% is the closest long-context number; no MRCR/RULER/GraphWalks retrieval-at-window pass rate published.

Speed / verbosity (Artificial Analysis): no output-speed measurement published ("N/A"); very verbose — 230M output tokens on the Intelligence Index vs a 100M median.

### Normalized scores (1–100)

- **Tool use: 68/100.** MCP-Atlas 55.6%, BrowseComp 70.0%, WebArena 50.3% and PinchBench 90.4% clear the mid band on several harnesses, but Terminal-Bench 2.1 53.9% and Tau3-Banking 17.0% sit squarely mid and GDPval-AA (~24–31 normalized) is mid-band — the profile of a competent local agent, not a frontier one.
- **Reasoning: 66/100.** GPQA Diamond 88.8% (BF16) is near-frontier and HLE 25–29% clears the mid reference, but the composite Intelligence Index of 21 is mid-band, CritPt 4.3% is near-floor, and a 43.7% hallucination rate (AA-Omniscience index -19.2) caps knowledge reliability.
- **Context window: 73/100.** 256K-token window verified on the official card — inside the methodology's 200K–500K band (65–84), toward its lower-middle given 256K is only ~28% of the way to 500K; AA-LCR 67–70% supports but does not lift it.
- **Multimodal: 75/100.** Rare image + video input (mp4 up to 2 min, ≤256 frames) with text output — video input reaches the methodology's 75–90 band floor; WebArena vision 50.3% and the absence of MMMU-Pro/Video-MME-style verification keep it at the floor rather than higher.
- **Coding: 66/100.** Terminal-Bench 2.1 53.9% and SciCode 44.5% are solid mid-band results with vendor PinchBench 90.4%, but no SWE-bench, LiveCodeBench, DeepSWE or Vibe figure is published for this model, so the mid band top is the defensible ceiling.
- **Cost efficiency: 85/100.** Open weights (OpenMDW-1.1) with no verified public per-token pricing: scored on self-host economics — 9B-active MoE with a native 2-bit 24GB build that runs on a single 24GB-class GPU — a provisional 85 rather than a priced tier, since no provider rate is verified.
- **Overall Score: 70/100.** Mean of 68/66/73/75/66 = 69.6 → 70. Best fit: the open-weight pick for single-GPU local agents — image/video understanding plus MCP tool use at 256K context on a 24GB card — while accepting mid-pack reasoning, weak hallucination resistance, and unverified SWE-bench-class coding.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-19
- Method: public internet research — official NVIDIA model card (Hugging Face BF16, full eval table incl. 24GB comparison) cross-checked against Artificial Analysis (model page, via BenchLM's 24GB-variant aggregate) and the OpenCode Zen model list; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Step_5_Preview_v2.md`, using the same headings.
