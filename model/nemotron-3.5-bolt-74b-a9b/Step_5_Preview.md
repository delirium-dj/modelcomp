# Nemotron 3.5 Bolt 74B A9B — findings by Step 5 Preview

- Source: NVIDIA / Nemotron 3.5 Bolt 74B-A9B (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B-A9B 24GB
- **Short description:** NVIDIA's 74B/9B-active hybrid Mamba-Transformer MoE squeezed into 24GB via Star Elastic compression + native 2-bit QAD — a vision-language local-agent model (256K context) with GPQA Diamond 86.4% and Terminal-Bench 2.1 50.98%, running at 84–155 tok/s on consumer RTX cards.
- **Provider / access:** Open weights (HF `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` + GGUF/LiLiCorr variants, OpenMDW 1.1 license); no per-token list price — cost is your own hardware (runs on RTX 3090/4090/5090, DGX Spark); not on OpenCode Zen.
- **Release / knowledge:** released 2026-10-15 (LLM Reference, llm-stats, aiblogly); knowledge cutoff not published.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16` / `-24GB` / `-24GB-GGUF` / `-24GB-LiLiCorr(-GGUF)`.
- **Context window:** 256K per the model card and Artificial Analysis (Unsloth's run-locally docs say 128K — an inconsistency flagged by the Derrington briefing).
- **Modalities:** text, image, video in; text out; vision-language; JSON output, tool calling, switchable reasoning.
- **Pricing (as of 2026-10-21):** open weights, free self-host; no hosted per-token rate published. The 2-bit GGUF is 22.0GB and peaks at ~22GB VRAM of 24.6GB on an RTX 4090 (llm-speed via D-CSIL).
- **Architecture:** hybrid Mamba-2 (SSM) + Transformer MoE, 74B total / ~9B active; compressed from Nemotron 3.5 Super VL 120B-A12B with Star Elastic + 2-bit Quantization-Aware Distillation; NVFP4 build near-lossless vs BF16 on the Super VL sibling.

### Raw benchmarks found

NVIDIA model card (via D-CSIL briefing + LLM Reference) + Artificial Analysis independent read:

Agent / tool use:

- Terminal-Bench 2.1: **50.98%** (NVIDIA model card; ref: Qwen3.6-35B-A3B 44.38%, Gemma 4 26B-A4B 37.22%); LLM Reference carries a 53.9% variant reading
- BrowseComp: **66.75%** (NVIDIA model card; ref: Qwen3.6 48.74%, Gemma 4 26B 26.30%)
- PinchBench: **87.82%** (NVIDIA model card; ref: Qwen3.6-35B-A3B 88.07% — a hair behind)
- MCP-Atlas: **52.20%** (NVIDIA card, which discloses Qwen's 62.8% fell to 51.2% under NVIDIA's own measurement)
- AutomationBench-AA / AA-Briefcase: leads Nemotron 3 Ultra (D-CSIL citing Artificial Analysis)
- Tau2 / Tau3 / GDPval-AA / OSWorld / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.43%** (NVIDIA model card; ref: Qwen3.6-35B-A3B 83.40%, Gemma 4 26B 79.61%); LLM Reference carries 88.8%
- HLE (no tools): **25.30%** (NVIDIA card; ref: 19.56% / 17.42%); LLM Reference 28.7%
- AA-LCR: **64.06%** (NVIDIA card) / **70%** measured by Artificial Analysis (D-CSIL)
- Artificial Analysis Intelligence Index: **21.4** (Artificial Analysis via D-CSIL — 4th among sub-100B models, 1st among US models in that class)
- AA-Omniscience accuracy: **16.90%** (NVIDIA card; behind Qwen 19.47% and Gemma 22.17%)
- AIME 2026 / MMLU-Pro / CritPt: no verified public score found

Coding:

- Terminal-Bench 2.1: **50.98%** (listed above — the only published coding-adjacent score)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / DeepSWE / SciCode: no verified public score found

Long context:

- AA-LCR 64.06% (NVIDIA) / 70% (Artificial Analysis, D-CSIL) — mid-band long-context reasoning on the 256K window; no MRCR/RULER/GraphWalks retrieval-at-length figure published.

Speed (independent): llm-speed on the official 2-bit GGUF under llama.cpp at 4K context — 87.8 tok/s (RTX 3090), 107.3 (4090), 154.7 (5090); NVIDIA's own AIPerf SPEED-Bench table shows 83.99 tok/s on RTX Spark — clearing its 80 tok/s design target but trailing the MoE peers it compares accuracy against (Qwen3.6-35B-A3B 96.63, Gemma 4 26B-A4B 100.56) (D-CSIL).

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 50.98%, BrowseComp 66.75%, PinchBench 87.82% and MCP-Atlas 52.2% (NVIDIA's own re-measurement discipline noted) make a credible local-agent profile, and it beats Nemotron 3 Ultra on AutomationBench-AA/AA-Briefcase; capped by no Tau/GDPval/OSWorld/Claw numbers and the model card's own disclosure that fine-tuning targeted Terminal-Bench 2.1/BrowseComp directly.
- **Reasoning: 82/100.** GPQA Diamond 86.4–88.8% beats the Qwen3.6/Gemma comparison set and the AA Intelligence Index 21.4 is 1st among US sub-100B models; capped by HLE 25.3–28.7%, AA-LCR 64–70% (mid) and Omniscience accuracy 16.9% (behind both rivals).
- **Context window: 78/100.** 256K window lands in the 200K–500K tier (65–84, above the 200K=70 floor); AA-LCR 64–70% is mid-band long-context reasoning and the 128K discrepancy in Unsloth's run-locally docs is unresolved.
- **Multimodal: 88/100.** Vision-language: text, image and video in (video-in tier 75–90) with text out; no MMMU-class score published for the Bolt variant, so the score leans on the modality coverage and the Super VL lineage.
- **Coding: 66/100.** The only published coding number is Terminal-Bench 2.1 50.98% (mid-band, over its comparison set) — zero SWE-bench/LiveCodeBench/DeepSWE/SciCode figures exist, so this is a provisional, evidence-thin score.
- **Cost efficiency: 97/100.** Open weights (OpenMDW 1.1) with a 22GB 2-bit GGUF that fits a single 24GB consumer card — self-hosting is free and the ~9B active read from a 2-bit file decodes ~2x a dense Qwen3.8-27B Q4 (75.2 tok/s on the same 5090); no per-token list price exists to dock.
- **Overall Score: 78/100.** Mean of (78 + 82 + 78 + 88 + 66) / 5 = 78.4 → 78. Best fit: fully local, private multimodal agents on a single consumer GPU — the strongest sub-100B US open-weight per Artificial Analysis, with the caveat that its benchmark wins overlap its targeted training recipe.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (NVIDIA model card figures via the D-CSIL briefing and LLM Reference, Artificial Analysis independent read, llm-speed community measurements); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
