# Nemotron 3.5 Bolt E4B — findings by GLM 5.3

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB` + `-BF16`, build.nvidia.com `nemotron-3.5-bolt-e4b`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Supersedes `GLM_5.3.md.excluded` (2026-10-17): the model was then announced-but-unreleased with zero benchmarks. It shipped GA on 2026-10-23 with a full official benchmark table — genuinely new verified evidence, so this fresh scored report is written per the twin procedure.

## Model card

- **Name:** Nemotron 3.5 Bolt E4B
- **Short description:** NVIDIA's ~4GB-class edge SLM for fast conversational agents — post-trained from **Gemma-4-E4B-it** (8B total / 4B effective, Gemma-4-E4B architecture) via multi-environment GRPO reinforcement learning (NeMo RL / NeMo Gym). Optimized for "intelligence per GB": local voice assistants, interactive personas, embedded/edge interfaces on RTX and Jetson. Third and smallest member of the Nemotron 3.5 Bolt family (with Super VL and Bolt 74B-A9B).
- **Provider / access:** Hugging Face `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB` (Q4_K_M GGUF, llama.cpp-first; also vLLM, SGLang, Ollama, LM Studio) and `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16`; build.nvidia.com endpoint `nemotron-3.5-bolt-e4b` (trial API, L40S); companion DFlash speculative drafter.
- **Release / knowledge:** **GA 2026-10-23** (HF + build.nvidia.com, per both official cards); model dates Dec 2025 – May 2026; post-training data cutoff May 2026.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`, `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16`, `nvidia/nemotron-3.5-bolt-e4b` (build.nvidia.com). Curated `opencode/nemotron-3.5-bolt-e4b` resolves on no live Zen route.
- **Context window:** **64K in / 64K out** (both official NVIDIA cards; RULER evaluated at 64K). Conflict noted: AA lists 131K — that is the Gemma-4-E4B base's native window; NVIDIA's released model caps at 64K, which is used here.
- **Modalities:** text in; text out (official cards: "Input Type(s): Text"). AA's "text and image input" claim contradicts the vendor cards and likely reflects the multimodal Gemma base — the release itself is text-only. Reasoning via chat-template (`enable_thinking` + runtime budget), conversational_mode toggle, function calling, structured outputs, asynchronous tool-calling pattern documented.
- **Pricing (as of 2026-10-23):** OpenMDW-1.1 open weights (free self-host, ~4GB VRAM; Gemma-4 base under Apache 2.0); build.nvidia.com trial API free (trial terms).
- **Architecture:** 8B total / 4B effective (Gemma-4-E4B); GRPO RL across instruction-following, multi-step tool-use, multi-turn conversation, and structured-output environments; 34-language post-training; extensive open dataset disclosure on the cards.

### Raw benchmarks found

> Official NVIDIA harness (NeMo Gym / NeMo Evaluator SDK), released with the GA cards on 2026-10-23. Two official surfaces disagree on some BF16 rows (HF card vs build.nvidia.com card) — both are listed; Q4_K_M is the headline 4GB product.

Agent / tool use:

- BFCL-v3: **67.31%** (Q4) / **68.51%** (HF BF16) / **71.33%** (build BF16) — vs Gemma-4-E4B-it 66.29, Qwen3.5-4B 71.60
- ToolSandbox: **74.13%** (Q4) / 68.77% (HF BF16) / 61.11% (build BF16) — surface-conflicting; vs Gemma base 43.37–65.43
- τ²-Bench: **52.32%** (Q4) / 55.10% (HF BF16) / **63.23%** (build BF16) — vs Qwen3.5-4B 75.06–79.90 (Qwen clearly ahead)
- When2Call Multi-Turn: **60.50%** (Q4) — vs Qwen3.5-4B 37.85, Gemma 62.90
- RelyToolBench: **69.29%** (Q4) / 63.16% (HF BF16) / **70.58%** (build BF16) — vs Qwen3.5-4B 38.34–43.35
- BenchLM tracks 21 rows (updated 2026-10-23), still unranked (no overall score)

Reasoning / instruction following / persona:

- MultiChallenge: **55.60%** (Q4) / 53.10% (HF BF16) / **59.32%** (build BF16) — vs Qwen3.5-4B 51.76
- RoleBench: **71.21%** (Q4) — vs Gemma 60.51, Qwen3.5-4B 52.35; RoleMRC **79.12%** (Q4)
- EQ-Bench v3: **38.15%** (Q4) / 39.40% (HF BF16) / **54.05%** (build BF16) — largest surface conflict
- IHEval: **82.40%** (Q4) / **86.04%** (build BF16) — class-best; AgentIF 22.95% (weak); StructEval-T 79.99%; IFBench 64.00%; InverseIFEval 45.26%; SysBench 67.22%
- AA-IFBench: **61.1%** (Artificial Analysis, via BenchLM)
- AA Intelligence Index: **not yet computed** (AA page live, all fields N/A)

Long context:

- RULER (64K): **85.76%** (Q4) / 86.47–86.99% (BF16) — vs Qwen3.5-4B 95.15
- LongMemEval: **69.92%** (Q4); LongBench v2 (48K): **48.67%** (Q4) — vs Qwen3.5-4B 59.93
- AA-LCR: **42.25%** (build BF16 table)

Knowledge / grounding:

- GaRAGe: **40.73%** (Q4) / 45.03% (build BF16); RAGTruth: **77.88%** (Q4); Brevity Benchmark: **82.84%** (Q4)

Coding:

- SWE-bench / LiveCodeBench / DeepSWE: **no verified public score found** — despite SWE-adjacent RL data in the training disclosure, no coding benchmark is published for this model.

### Normalized scores (1–100)

- **Tool use: 68/100.** ToolSandbox 74.13%, RelyToolBench 69.29%, BFCL-v3 67.31%, When2Call 60.50% form a strong small-model tool profile (RelyToolBench ~2× Qwen3.5-4B); capped by τ²-Bench 52-63% (well under Qwen3.5-4B's 75-80%) and surface-to-surface number conflicts.
- **Reasoning: 55/100.** MultiChallenge 55.6% and RoleMRC/RoleBench strength sit mid-band for a 4B-class model; capped by AgentIF 22.95%, EQ-Bench 38.15% (Q4), GaRAGe 40.73%, LongBench v2 48.67%, and no GPQA/HLE/math rows at all (AA Index not yet computed).
- **Context window: 48/100.** Verified 64K in / 64K out (vendor cards; AA's 131K base-window claim noted as conflicting) — top of the <100K tier, with strong RULER 85.76% retrieval at its window.
- **Multimodal: 15/100.** Text in / text out per both official cards (AA's text+image claim attributed to the multimodal Gemma base and rejected for the release).
- **Coding: 35/100.** No verified public coding score found — absence of evidence, not measured weakness; edge-conversational positioning with tool-loop training but zero published coding rows.
- **Cost efficiency: 100/100.** OpenMDW-1.1 free open weights at a ~4GB self-host footprint (consumer RTX/Jetson) plus a free trial API — $0 on the evaluated self-host tier.
- **Overall Score: 44/100.** (68+55+48+15+35)/5 = 44.2 → 44. Best-fit recommendation: the strongest published small-model tool-caller for on-device voice/persona agents (ToolSandbox 74% at 4GB) — pick Qwen3.5-4B instead for terminal-style agentic depth or long-context; not a coding or knowledge model.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-23
- Method: public internet research (official HF model cards for the 4GB and BF16 releases, build.nvidia.com endpoint card, BenchLM 21-row tracker updated 2026-10-23, Artificial Analysis model page, NVIDIA launch blog of 2026-10-15, release-day press). Scores are normalized 1–100 interpretations, not official vendor scores. Conflicting figures across NVIDIA's own surfaces (ToolSandbox, τ², EQ-Bench, MultiChallenge) are listed side by side; the curated meta's "128K / voice implied" placeholders are corrected to the verified 64K text-only specs.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
