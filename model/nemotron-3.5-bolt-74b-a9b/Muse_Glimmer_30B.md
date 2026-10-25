# Nemotron 3.5 Bolt 74B-A9B — findings by Muse Glimmer 30B

- Source: NVIDIA / nemotron-3.5-bolt-74b-a9b
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Nemotron 3.5 Bolt 74B-A9B
- **Short description:** NVIDIA open-weight hybrid Mixture-of-Experts vision-language model compressed from Nemotron 3.5 Super VL for local agentic workloads. Designed to fit 24 GB memory with 2-bit quantization and LiLiCorr speculative decoding for high-speed local inference.
- **Provider / access:** Hugging Face open weights `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` and BF16 checkpoint. Self-hosted local inference via llama.cpp / vLLM. No commercial API offered.
- **Release / knowledge:** Published 2026-10-15 on NVIDIA Research; release date cited 2026-10-07. Knowledge cutoff not publicly disclosed.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`
- **Context window:** 256k tokens total reported by Artificial Analysis. No independent RULER/GraphWalks verification found.
- **Modalities:** Text and vision input; text output. Reasoning yes, agentic tool use yes, JSON mode supported via open weights. Multimodal understanding claimed.
- **Pricing (as of 2026-10-25):** Open weights, self-hosted only. Free to run locally. No per-token pricing.
- **Architecture:** 74B total parameters, 9B active per token MoE. Hybrid Mamba-Transformer. 2.0625-bit IQ2_XXS quantization for 24GB variant, NVFP4 for Mamba layers, Q8_0 for embeddings/attention. Open weights.

### Raw benchmarks found

> Sources: NVIDIA Research Nemotron 3.5 Bolt 24GB project page 2026-10-15, Artificial Analysis article “NVIDIA Releases Nemotron 3.5 Super and Nemotron 3.5 Bolt” 2026-10-15, ApX model page Nemotron 3.5 Bolt 74B A9B.

Agent / tool use:

- PinchBench: **#1** among models with similar memory footprint — research.nvidia.com
- WebArena: **#2** among models with similar memory footprint — research.nvidia.com
- BrowseComp: **#2** among models with similar memory footprint — research.nvidia.com
- AutomationBench-AA: **15.5%** — Artificial Analysis article
- AA-Briefcase: **912 Elo** — Artificial Analysis article
- Intelligence Index: **21.4** — Artificial Analysis article
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- AA-LCR: **70%** — Artificial Analysis article, trails Nemotron 3 Ultra 79%
- Humanity's Last Exam: **25%** — Artificial Analysis article, trails Nemotron 3 Ultra 28%
- Intelligence Index / BenchLM overall: **21.4** — Artificial Analysis article
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: see AA-LCR above
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- AIPerf SPEED-Bench-Coding throughput: **83.99 TPS** — research.nvidia.com, speed metric not accuracy
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- Context window reported 256k tokens — Artificial Analysis article
- MRCR / RULER / GraphWalks: no long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 78/100.** PinchBench #1, WebArena #2, BrowseComp #2 for similar memory footprint plus AutomationBench-AA 15.5% and AA-Briefcase 912 Elo. Capped by absence of independent Terminal-Bench / Claw-Eval scores.
- **Reasoning: 68/100.** Intelligence Index 21.4, AA-LCR 70%, Humanity’s Last Exam 25%. Solid local agentic reasoning, trails larger Ultra-class models.
- **Context window: 72/100.** 256k token context reported, competitive for 24 GB local model. No verified RULER/GraphWalks measurement caps score.
- **Multimodal: 65/100.** Vision-language input with multimodal understanding claimed and compressed from Super VL. Limited public multimodal benchmark numbers.
- **Coding: 50/100.** No verified public SWE-bench / LiveCodeBench scores; only inference speed reported. Score reflects agentic coding signals with insufficient direct evidence.
- **Cost efficiency: 92/100.** Open weights, 24 GB fit on consumer GPUs, 84 TPS decoding with LiLiCorr. Self-hosted free.
- **Overall Score: 67/100.** Mean of five quality dims (78+68+72+65+50)/5 = 66.6 → 67. Best-fit: strong local agentic / browsing tool use with efficient 24 GB footprint, reasoning and coding evidence limited.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Glimmer_30B.md`, using the same headings.
