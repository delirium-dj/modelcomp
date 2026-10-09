# Ling-3.0-tiny — findings by GLM 5.3 Flash

- Source: InclusionAI / Ant Group (`ling-3.0-tiny`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-tiny (`Ling 3.0 Tiny`)
- **Short description:** InclusionAI's (Ant Group's AGI lab) lightweight hybrid-reasoning MoE — 7.9B total / 1.3B active — built for strong reasoning and agentic capabilities at low inference cost, validated for local/edge deployment on NVIDIA DGX Spark, Apple Silicon MacBook, and Mac mini.
- **Provider / access:** open weights on Hugging Face (`https://huggingface.co/inclusionAI/Ling-3.0-tiny`, plus official INT4 at `inclusionAI/Ling-3.0-tiny-int4`) and ModelScope; self-hosted via SGLang (MTP/NEXTN, 256K YaRN), vLLM, or Ollama (MLX on Apple Silicon via ollama#17643); OpenRouter Free route `openrouter.ai/inclusionai/ling-3.0-tiny:free`. Chat Completions API.
- **Release / knowledge:** 2026-08-06 release (AA); knowledge cutoff not stated.
- **IDs:** `inclusionAI/Ling-3.0-tiny` (self-host), `openrouter/inclusionai/ling-3.0-tiny:free` (Free); no Free ID on OpenCode Zen verified.
- **Context window:** 262,144 total (131,072 native extended via YaRN factor 2.0 per the official SGLang config; AA lists 262K) — verified against both sources; max output 32K used in the official Terminal-Bench 2.1 eval config.
- **Modalities:** text in, text out; reasoning yes (native hybrid reasoning, thinking mode enabled by default, `enable_thinking` per request); tool calls yes (`ling3` tool-call parser, auto tool choice); JSON mode not explicitly documented.
- **Pricing (as of 2026-10-09):** $0.00 in / $0.00 out (AA measured Free — $0.00 per Intelligence Index task, cost rank #1 of 142); open weights under MIT (commercial use permitted) with BF16/FP8/INT4 weights for local deployment.
- **Architecture:** 7.9B total / 1.3B active MoE; 3:1 KDA–MLA hybrid attention (3 Kimi Delta Attention + 1 MLA per 4-layer block); sparse MoE FFN with 128 routed experts (8 routed + 1 shared activated); MIT license.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Agentic Index: **16** (InclusionAI HF card citing AA)
- Terminal-Bench 2.1 (AA protocol, Terminus 2 harness, 256K context): charted on the official HF card — exact value not extractable — no verified numeric public score found
- Artificial Analysis Intelligence Index: **11 / #36 of 142** (AA model page, v4.3.2; vendor cites **25 on AA Index v4.1.1** — different index version, discrepancy noted; above the open-weight median of 8)
- GDPval / Claw-Eval / PinchBench: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index (see above) is the only measured reasoning signal
- GPQA Diamond / HLE / AIME / CritPt / LCR: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- Terminal-Bench 2.1: charted, exact value not extractable — no verified numeric public score found
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / DeepSWE: no verified public score found

Long context:

- no long-context retrieval reported (MRCR/RULER/AA-LCR not published; 262K is YaRN-extended from a 131K native window)

Speed: 56.6 output tokens/s (AA, median across providers — below the open-weight median of 84.4); TTFT 2.60s; ~18s end-to-end for a 500-token response including reasoning (InclusionAI HF card). Local deployment: ~100–105 tokens/s on DGX Spark, 86–90 tokens/s on M4 Pro MacBook, ~8.34 GiB peak memory at 8K context (FP8). Very verbose: 230M output tokens across the Intelligence Index run (median 82M).

### Normalized scores (1–100)

- **Tool use: 48/100.** AA Agentic Index 16 is low and the Terminal-Bench 2.1 number is published only in a chart image (not extractable); no verified tool-execution anchor exists, so the score rests provisionally below the mid-band.
- **Reasoning: 50/100.** AA Index 11 (v4.3.2) vs the vendor-cited 25 (v4.1.1) straddles the low-to-mid band; no GPQA/HLE/AIME numbers are published — a capable tiny reasoner for its 1.3B-active footprint, but far from frontier.
- **Context window: 72/100.** 262K total (131K native + YaRN 2.0) / 32K max output sits inside the 200K–500K band; no measured long-context retrieval benchmark is published to climb higher.
- **Multimodal: 15/100.** Text-only input and output per the official HF card and AA — no image/audio/video support.
- **Coding: 50/100.** Provisional — no verified numeric coding benchmark (Terminal-Bench 2.1 unextractable, no SWE-bench/LiveCodeBench/SciCode numbers); scored mid-band on the vendor's balanced-performance claim for an edge-class model.
- **Cost efficiency: 100/100.** $0.00 in / $0.00 out on AA (cost rank #1 of 142, $0.00 per task) plus MIT-licensed open weights runnable on a MacBook — the cheapest evaluated tier possible; time-limited Free route caveat noted. Not counted toward Overall.
- **Overall Score: 47/100.** Mean of the five quality dims (48 + 50 + 72 + 15 + 50) / 5 = 47.0 → 47. Best-fit recommendation: an ultra-cheap local/edge reasoning-and-agent model for MacBook/DGX Spark workflows — never a primary planner, coder, or frontier-capability pick.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (official Hugging Face model card, Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
