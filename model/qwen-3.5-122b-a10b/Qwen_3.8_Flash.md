# Qwen 3.5 122B A10B — findings by Qwen 3.8 Flash

- Source: Alibaba Qwen (`Qwen/Qwen3.5-122B-A10B`; curated id `opencode/qwen-3.5-122b-a10b`), cross-checked against the Qwen3.5 blog, Hugging Face model card, DeepInfra/apXML benchmark pages and the open-weight tracker
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 122B A10B
- **Short description:** A mid-size member of Alibaba's open-weight **Qwen3.5 "Towards Native Multimodal Agents"** family — a 122B-total / 10B-active sparse MoE with **early-fusion unified vision-language** (image + video understanding) and a gated-delta-network + MoE hybrid. The efficient generalist of the line: strong absolutes for only 10B active parameters.
- **Provider / access:** open weights (Hugging Face `Qwen/Qwen3.5-122B-A10B`, Apache-family); local via GGUF/MLX/NVFP4 quantizations (RedHatAI NVFP4, PRISM-LITE GGUF, etc.); hosted on DeepInfra/OpenRouter/ModelScope. Chat Completions + tool calls.
- **Release / knowledge:** Qwen3.5 family announced 2026-02-15; the 122B-A10B checkpoint landed on HF ~2026-03; knowledge cutoff not individually published.
- **IDs:** `Qwen/Qwen3.5-122B-A10B`; siblings in this registry: `qwen-3.5-397b`, `qwen-3.5-27b`, `qwen-3.5-35b-a3b`, `qwen-3.5-9b`, `qwen-3.5-plus`, `qwen-3.5-flash`.
- **Context window:** **262K native**, card/TRacker note **extensible to 1M+** (long-context retrieval at 1M not independently verified).
- **Modalities:** **image-text-to-text** — native vision (image + video understanding) + text in, text out; reasoning yes; tool calls yes (BFCL/VITA/DeepPlanning are family eval targets).
- **Pricing (as of 2026-10-20):** open weights (self-host free; a 10B-active MoE fits a single high-VRAM card quantized); hosted DeepInfra/OpenRouter rates are budget-tier (10B-active economics).
- **Architecture:** 122B total / 10B active MoE, 48 layers, gated delta network + MoE hybrid attention, unified multimodal early-fusion encoder.

### Raw benchmarks found

> Third-party hosted-run numbers (DeepInfra, apXML) — two sources, minor spread on the agentic rows.

Reasoning / knowledge:

- MMLU-Pro: **86.1%** (DeepInfra/apXML)
- GPQA Diamond: **85.5%** (DeepInfra; vs GPT-5-mini 82.8%)

Coding:

- SWE-bench Verified: **72.0–72.4%** (DeepInfra 72.0 / apXML 72.4)
- Terminal-Bench 2.0: **41.6–49.4%** (apXML 41.6 / DeepInfra 49.4 — spread flagged)

Agent / tool use:

- τ²-bench: **reported** in the Qwen3.5 agentic suite; BFCL-V4 / VITA-Bench / DeepPlanning are the family's headline agentic benchmarks (rank-averaged in the blog)

Long context / multimodal:

- 262K native (1M+ claimed extensible); native image + video understanding per the model card; **no MRCR/RULER retrieval score published** at the 1M extension.

### Normalized scores (1–100)

- **Tool use: 66/100.** Built explicitly for "native multimodal agents" (BFCL/VITA/DeepPlanning tool suites) and solid τ² coverage, but the published Terminal-Bench 2.0 absolutes are mid-band (41–49) and the agentic wins are largely family-level rank averages, so tool use is capable rather than frontier.
- **Reasoning: 73/100.** Genuinely strong for 10B active — GPQA Diamond 85.5 and MMLU-Pro 86.1 beat GPT-5-mini and sit near the low-fringe frontier; held from higher by the absence of HLE/Omniscience rows and the mid-band terminal scores.
- **Context window: 76/100.** 262K native is a comfortable working window with a claimed 1M+ extension, but the 1M path has no independent long-context retrieval proof, so it's scored at the verified 262K tier.
- **Multimodal: 72/100.** A real differentiator — **native early-fusion vision (image + video)** in an open-weight MoE — well above text-only peers; not higher because audio input and image *generation* aren't part of this checkpoint.
- **Coding: 70/100.** SWE-bench Verified ~72 is respectable and strong-per-active-parameter, but trails the frontier coding lane (77–80+) and Terminal-Bench 2.0 is only mid-band, so coding is good-not-elite.
- **Cost efficiency: 88/100.** Open weights + 10B-active compute + a wide ecosystem of quantized builds (NVFP4/GGUF/MLX) make it one of the cheapest ways to get near-frontier multimodal reasoning.
- **Overall Score: 71.4/100.** Half-up mean of the five quality dims (66+73+76+72+70)/5 = 71.4. Best fit: **self-hosted multimodal agents and general reasoning on a budget** — the sweet spot in the Qwen3.5 open line where 10B-active gives GPQA-85/MMLU-86 and native vision without frontier compute cost.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-20
- Method: public internet research — Qwen3.5 launch blog ("Towards Native Multimodal Agents", 2026-02-15), Hugging Face `Qwen/Qwen3.5-122B-A10B` model card (early-fusion vision, 262K→1M+), DeepInfra API-benchmark page and apXML spec page (MMLU-Pro 86.1, GPQA 85.5, SWE-V 72.0–72.4, Terminal-Bench 41.6–49.4), and the xigh open-weight tracker. Scores are normalized 1–100 interpretations, not official vendor scores; where two sources disagree (Terminal-Bench), both are cited. Curated `meta.json` is scaffolded ("128K / Text in-out") and was overridden by first-party evidence (262K native, native image+video multimodal).
- Revisit trigger: an Artificial Analysis single-number Intelligence-Index row for this checkpoint, or published 1M long-context retrieval scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.3.md`, using the same headings.
