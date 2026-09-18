# Nemotron 3.5 Lightning Free — findings by GLM 5.3 Flash

- Source: NVIDIA (`opencode/nemotron-3.5-lightning-free`; native model Nemotron 3.5 Lightning 30B-A3B)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free (free tier of NVIDIA's Nemotron 3.5 Lightning 30B-A3B; first model of the Nemotron 3.5 generation)
- **Short description:** NVIDIA's execution-layer model: a 30B/3B hybrid Mamba-2 + attention MoE built for the many cheap, repetitive steps a long-running agent takes between hard decisions — routed per-step by the companion NeMo Switchyard library. ~4× the output speed of similar-sized models; not a frontier reasoner.
- **Provider / access:** OpenCode Zen free tier (`opencode/nemotron-3.5-lightning-free`, Chat Completions; trial-logged per repo catalog free-tier conventions); NVIDIA NIM on build.nvidia.com; OpenRouter (`nvidia/nemotron-3.5-lightning` — paid endpoint 262,144 ctx, **free endpoint at the full 1M**); open weights on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16` + NVFP4 production checkpoint), datasets and recipes included.
- **Release / knowledge:** released 2026-08-11 alongside NeMo Switchyard. Knowledge cutoff: September 2025 (pre-training); May 2026 (post-training).
- **IDs:** `opencode/nemotron-3.5-lightning-free` (Zen); `nvidia/nemotron-3.5-lightning` (OpenRouter).
- **Context window:** 1,000,000 tokens native; practical caps: 256K on a single H100 (memory, NVIDIA's own guidance), 262,144 on OpenRouter's paid endpoint, 1M on the free endpoint.
- **Modalities:** text in / text out (English, Spanish, French, German, Italian, Japanese + code). Speculative decoding via DSpark/DFlash/MTP; vLLM/SGLang/TensorRT-LLM serving.
- **Pricing (as of 2026-09-18):** **$0** on the evaluated free tier (Zen / OpenRouter free endpoint / NIM trial); OpenRouter paid from ~$0.08/1M input (ai-tldr).
- **Architecture:** 30B total / 3B active MoE with hybrid Mamba-2 state-space layers interleaved with attention; BF16 + NVFP4 checkpoints under OpenMDW-1.1 (datasets + recipes published).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **24.58%** (NVIDIA's own table; Qwen 3.6 35B A3B scores 44.38 on the same rows) (build.nvidia / NVIDIA table via ai-tldr)
- Tau3: **9.28%** (build.nvidia card)
- GDPval: **832** (build.nvidia card)
- PinchBench: **85.37**; 10,000 PinchBench tasks completed 30% faster than Qwen3.6 35B at comparable accuracy (NVIDIA blog claim)

Reasoning / knowledge:

- GPQA Diamond: **75.44%**; MMLU Pro: **81.94%**; IFBench: **71.88%** (leads Qwen 3.6 35B A3B's 63.71) (NVIDIA's published table via ai-tldr)

Coding:

- SWE-bench Verified: **51.56%** (vs Qwen 3.6 35B A3B 70.12) (NVIDIA table)
- LiveCodeBench / SWE-Pro / SciCode: no verified public score found

Long context:

- **1M tokens** native (serving caps above); RULER/MRCR at window length: no verified public score found

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six.

- **Tool use: 45/100.** TB2.1 24.58 + Tau3 9.28 + GDPval 832 — honest execution-tier numbers; the value is per-call cost/speed in a Switchyard-routed stack, not peak autonomy.
- **Reasoning: 62/100.** GPQA 75.44 / MMLU-Pro 81.94 / IFBench 71.88 — decent knowledge for 3B-active, clearly below mid-tier flagships.
- **Context window: 78/100.** 1M nominal (free endpoint honors it) but NVIDIA's own serving guidance caps at 256K on one H100 — scored between the 262K and 1M tiers.
- **Multimodal: 15/100.** Text-only in and out.
- **Coding: 58/100.** SWE-V 51.56 with weak agentic-terminal numbers (TB2.1 24.58) — batch/high-volume coding assistance, not hard engineering.
- **Cost efficiency: 100/100.** Evaluated $0 free tier; 3B-active serving cost and 4× throughput are the design goals.
- **Overall Score: 52/100.** Mean: (45 + 62 + 78 + 15 + 58 + 100) / 6 = 358/6 = 59.7 → **60**. Best fit: the routed executor + high-throughput batch tier of a two-model agent stack — pair it with a frontier planner, don't lead with it.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-18
- Method: fresh public internet research from zero (ai-tldr.dev Nemotron 3.5 Lightning page quoting NVIDIA's published evaluation table, serving guidance and launch blog of 2026-08-11; build.nvidia model-card rows as catalogued in `../../model-comparison.md`); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
