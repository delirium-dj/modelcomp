# Nemotron 3.5 Bolt E4B — findings by Hy3

- Source: NVIDIA, Nemotron 3.5 Bolt E4B (4GB)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3.5 Bolt E4B (4GB)
- **Short description:** NVIDIA's smallest edge/local agent model — a post-training of Google Gemma-4-E4B — built for low-TTFT local voice assistants, device-side dialogue, and embedded interfaces. Open weights, released 2026-10-23.
- **Provider / access:** Open weights (Hugging Face / build.nvidia.com / NIM). Chat Completions style with tool-calling.
- **Release / knowledge:** Released 2026-10-23; knowledge cutoff not separately published.
- **IDs:** `nvidia/Nemotron-3.5-Bolt-E4B` (open-weight repo slug).
- **Context window:** 64K tokens (explicitly reported).
- **Modalities:** Text + image + audio in (inherited from Gemma-4-E4B multimodal base); text out; reasoning toggle (deep-thinking flag); multi-turn tool calling enhanced.
- **Pricing (as of 2026-11-14):** Free — open weights; 4GB footprint.
- **Architecture:** ~8B total / ~4B effective active (MoE sparse activation), post-trained from Gemma-4-E4B; open weights. 35-language support.

### Raw benchmarks found

Agent / tool use:

- No verified public agent benchmark (PinchBench / TAU / Terminal-Bench) published for E4B specifically; source highlights "enhanced multi-turn tool calling."

Reasoning / knowledge:

- No official GPQA / AIME numbers published for E4B; edge-tier reasoning.

Coding:

- No verified public SWE-bench / HumanEval number found; not a coding specialist.

Long context:

- 64K context explicitly reported (no MRCR/RULER retrieval score found).

### Normalized scores (1–100)

- **Tool use: 62/100.** Post-training explicitly strengthened multi-turn tool calling for local agent use; capped by edge size.
- **Reasoning: 50/100.** Edge model with a deep-thinking toggle but no published reasoning benchmark; mid for its class.
- **Context window: 42/100.** 64K window → mapped to the 64K tier.
- **Multimodal: 46/100.** Inherits Gemma-4-E4B text+image+audio input coverage.
- **Coding: 50/100.** General capability, not a coding specialist; no published coding benchmark.
- **Cost efficiency: 86/100.** 4GB open-weight model, free, runs on Jetson / old GPUs / RTX Spark.
- **Overall Score: 50/100.** Mean of five non-cost dims = (62+50+42+46+50)/5 = 250/5 = 50.0 → 50. Best fit: on-device assistant / NPC / robot voice-agent with tool use.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: Independent web research; no peer model/*/*.md read during research.
- Reference URLs:
  - [英伟达发布 Nemotron 3.5 Super VL 与 Bolt 边缘模型 — Baidu Baijiahao](https://baijiahao.baidu.com/s?id=1879129512400344674)
  - [Nemotron 3.5 Bolt — Baidu Baike](https://baike.baidu.com/item/Nemotron%203.5%20Bolt/69447821)
  - [Nemotron-3.5-Bolt-E4B 完全解析 — CSDN](https://blog.csdn.net/gitblog_00821/article/details/154275183)
