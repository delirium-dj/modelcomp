# Nemotron 3.5 Bolt E4B — findings by MiniMax M3.1 Flash

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`, `nvidia/nemotron-3.5-bolt-e4b`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt E4B
- **Short description:** NVIDIA's ~4GB-class edge model, GA **2026-10-23**: an 8B-total / 4B-effective MoE post-trained from `google/gemma-4-E4B-it` for **low-latency local agents on RTX and Jetson** (voice/device assistants, interactive personas, embedded interfaces), with open weights under OpenMDW-1.1. It is a *general* model with a fast, instruction-following, tool-use profile — not a frontier coder.
- **Provider / access:** **Hugging Face** `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB` (Q4_K_M GGUF, 6.18 GB) plus the BF16 sibling `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16` and the speculative-decoding drafter `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB-DFlash`; **build.nvidia.com** route `nvidia/nemotron-3.5-bolt-e4b` (model card, GA 2026-10-23). Self-hosted through llama.cpp (`-c 65536`) or vLLM with an OpenAI-compatible Chat Completions surface; no public per-token price.
- **Release / knowledge:** GA **2026-10-23** (Hugging Face + build.nvidia.com); model development window December 2025 – May 2026; **post-training data cutoff May 2026**.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`, `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16`, `nvidia/nemotron-3.5-bolt-e4b` (build.nvidia.com), `nemotron-bolt` (llama.cpp alias). No OpenCode Zen slot, no OpenRouter id.
- **Context window:** **input up to 64K tokens, output up to 64K tokens** (NVIDIA model card; llama.cpp runs with `-c 65536`); the only published long-context measurement is RULER at 64K. **Conflict:** the Artificial Analysis page for this model lists 131K context and text+image input — values evidently inherited from the Gemma-4-E4B base rather than the Nemotron card, so the NVIDIA spec is used here.
- **Modalities:** text in / text out; reasoning toggle (`enable_thinking=True/False`) plus a runtime **thinking budget** (`--reasoning-budget`) and a **conversational mode** for spoken-style replies; tool calling supported (vLLM `--enable-auto-tool-choice`, `--tool-call-parser gemma4`); multilingual (primary post-training languages: English, French, German, Italian, Japanese, Spanish, Chinese; the card claims 35 supported languages); **no image input** per NVIDIA's own card.
- **Pricing (as of 2026-11-12):** **no hosted price** — open weights (OpenMDW-1.1, base Gemma under Apache 2.0) mean self-hosting is the only access route, so the marginal cost is hardware: **3.1–5.0 GB VRAM**, ~**548 ms** time-to-first-token and **133.4 tokens/s** on an RTX 5070, ~**5,785 ms** TTFT and **15.5 tokens/s** on a Jetson Orin Nano (vendor measurements). No Zen free slot and no provider data-retention terms apply.
- **Architecture:** **Gemma-4-E4B** backbone, **8B total / 4B effective** parameters, post-trained by NVIDIA with **GRPO** multi-environment RL (instruction following, multi-step tool use, multi-turn conversation, structured output) on **NeMo RL / NeMo Gym**; 4-bit Q4_K_M GGUF release plus BF16; companion DFlash drafter for speculative decoding.

### Raw benchmarks found

> All rows are **NVIDIA's own numbers**, measured under a single consistent harness (**NeMo Gym**) and reported side by side for BF16 and the shipped Q4_K_M quantization. Evaluations ran in reasoning mode except RoleBench, EQ-Bench v3 and RULER. No SWE-bench, Terminal-Bench, DeepSWE, LiveCodeBench, GPQA, HLE or AA Index row exists for this model.

Agent / tool use:

- BFCL-v3: **68.51** (BF16) / **67.31** (Q4_K_M)
- Tau2-Bench: **55.10** (BF16) / **52.32** (Q4_K_M)
- ToolSandbox: **68.77** (BF16) / **74.13** (Q4_K_M)
- IFBench: **63.79** (BF16) / **64.00** (Q4_K_M) — the independent Artificial Analysis measurement of IFBench for this model is **61.1%**
- RelyToolBench: **63.16** (BF16) / **69.29** (Q4_K_M)
- When2Call Multi-Turn: **63.36** / **60.50**; StructEval-T: **80.40** / **79.99**; IHEval: **84.79** / **82.40**
- InverseIFEval: **46.84** / **45.26**; AgentIF: **25.81** / **22.95**
- Terminal-Bench 2.1 / Tau3 Banking / GDPval-AA / Claw-Eval / MCP Atlas: **no verified public score found**

Reasoning / knowledge:

- RULER (64K): **86.99** (BF16) / **85.76** (Q4_K_M)
- LongMemEval: **72.10** / **69.92**; SysBench: **67.88** / **67.22**; RAGTruth: **77.59** / **77.88**
- LongBench v2 (48K): **50.50** / **48.67**; GaRAGe: **42.61** / **40.73**
- MultiChallenge: **53.10** / **55.60**; RoleBench: **67.05** / **71.21**; RoleMRC: **80.63** / **79.12**; Brevity: **82.52** / **82.84**
- EQ-Bench v3: **39.40** / **38.15**
- GPQA Diamond / HLE / CritPt / Artificial Analysis Intelligence Index: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- Terminal-Bench 2.1 / 4.0 / DeepSWE / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**
- Adjacent signals only: the NVIDIA post-training mix lists synthetic SWE-bench Verified, SWE-Gym and SWE-bench-Verified-based data, and the "SWE-Marathon"-style or coding-index-style published score: **no verified public score found**

Long context:

- RULER at 64K: **86.99** / **85.76** (the model's maximum advertised input length)
- LongBench v2 at 48K: **50.50** / **48.67**; LongMemEval: **72.10** / **69.92**
- MRCR / AA-LCR / GraphWalks: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 68/100.** Tau2-Bench 55.1/52.3, BFCL-v3 68.5/67.3, ToolSandbox 68.8/74.1, IFBench 63.8/64.0 and RelyToolBench 63.2/69.3 make it a credible small tool-caller, squarely in the mid band; capped by AgentIF 25.8 and InverseIFEval 46.8, and by the total absence of Terminal-Bench, GDPval-AA, Claw-Eval or MCP Atlas rows.
- **Reasoning: 58/100.** RULER 64K at 87.0, LongMemEval 72.1, RAGTruth 77.6 and SysBench 67.9 show solid retrieval-and-grounding behaviour, but LongBench v2 (50.5), EQ-Bench v3 (39.4) and GaRAGe (42.6) are mid-tier and no GPQA, HLE or AA Index measurement exists to anchor the ceiling.
- **Context window: 40/100.** The NVIDIA card caps input and output at **64K tokens** (RULER verified at 64K), which sits below the repo's 100K–200K tier; the 131K figure on the Artificial Analysis page is inherited from the Gemma base and is not corroborated by the vendor.
- **Multimodal: 15/100.** NVIDIA's own card declares text in / text out with no image input; the text+image listing on the Artificial Analysis page is likewise inherited from the base model. No non-text modality is verified.
- **Coding: 46/100.** No verified public coding score exists for this id — no SWE-bench Verified, Terminal-Bench, DeepSWE, LiveCodeBench or SciCode row — so the dimension is scored as a conservative neutral for an 8B/4B-effective instruction-tuned model, slightly below the repo's usual unknown-coding neutral because the vendor's own evaluation table is entirely agent-and-instruction-focused.
- **Cost efficiency: 98/100.** Open weights under OpenMDW-1.1 with a 6.18 GB quantized build that runs in 3.1–5.0 GB of VRAM at 133 tokens/s on an RTX 5070 — effectively free to run on hardware you already own; no hosted price exists and there is no free Zen tier, so the score is just under the maximum.
- **Overall Score: 45.4/100.** Mean of the five non-cost dimensions (68 + 58 + 40 + 15 + 46) / 5 — best fit as an on-device tool-calling executor and assistant (voice/device, embedded, local single-GPU), not as a planner, coder or long-document analyst.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: public internet research (NVIDIA Hugging Face model card and technical blog, build.nvidia.com model card, Artificial Analysis model page, BenchLM index, OpenCode Zen and models.dev catalogues); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [NVIDIA-Nemotron-3.5-Bolt-E4B-4GB model card — Hugging Face](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB)
  - [Nemotron 3.5 Bolt E4B technical blog — NVIDIA Research](https://research.nvidia.com/labs/nemotron/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB/)
  - [Nemotron 3.5 Bolt E4B — build.nvidia.com model card](https://build.nvidia.com/nvidia/nemotron-3.5-bolt-e4b/modelcard)
  - [Artificial Analysis — Nemotron 3.5 Bolt E4B 4GB](https://artificialanalysis.ai/models/nemotron-3-5-bolt-e4b-4gb)
  - [BenchLM — Nemotron 3.5 Bolt E4B](https://benchlm.ai/models/nemotron-3-5-bolt-e4b)
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Bolt_E4B_Tech_Report.md`, using the same headings.
