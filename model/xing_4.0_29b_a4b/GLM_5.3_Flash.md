# Xing 4.0 29B A4B — findings by GLM 5.3 Flash

- Source: China Telecom AI / XingChen-AGI (`XingChen-AGI/Xing4.0-29B-A4B`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing 4.0 29B A4B (Xing4.0-29B-A4B)
- **Short description:** An open-weights 29B-total / 4B-active MoE LLM from China Telecom Artificial Intelligence (XingChen-AGI), next generation of the Xing series (formerly TeleChat). First model of this scale trained entirely on Huawei Ascend NPU with MindSpore; deeply optimized for agentic engineering tasks. Top use cases: agentic coding, tool-calling agents, and zh/en domain fine-tuning.
- **Provider / access:** open weights on Hugging Face `XingChen-AGI/Xing4.0-29B-A4B` (Apache-2.0, released 2026-09-16; created on HF 2026-09-16 with FP8/GGUF/w8a8 variants and ~48k downloads/month); no hosted Inference Provider on HF at research time — self-host via vLLM, SGLang, or KTransformers; OpenAI-compatible API when self-served. The model card explicitly advertises adaptation for agent frameworks including OpenCode, Claude Code, OpenClaw, and Hermes.
- **Release / knowledge:** weights published 2026-09-16; lineage documented in arXiv 2512.24157 (TeleChat3-MoE training report, submitted 2025-12-30) and arXiv 2507.18013 (TeleChat2/2.5/T1 technical report). No knowledge-cutoff statement found.
- **IDs:** `XingChen-AGI/Xing4.0-29B-A4B` (open weights; no Free hosted ID found — self-hosting is the free route).
- **Context window:** 256K native, extensible to 512K (official model card, verified against the overview table).
- **Modalities:** text in / text out (zh + en); reasoning toggle (`enable_thinking` chat-template kwarg); tool calling / multi-step planning per the agent-oriented architecture; JSON-mode not documented. No image/audio input.
- **Pricing (as of 2026-10-19):** free under Apache-2.0 (weights + fine-tuning via LLaMA-Factory/MindFormers); 4-bit quant fits ~15 GB VRAM (runs locally on RTX 3090/4090 per the publisher's collection notes). No official hosted API price table found.
- **Architecture:** 29B total / 4B active sparse MoE; 40 layers; hidden 3584; MLA attention; 64 routed experts (4 active/token) + 1 shared expert; mHC + MLA + MTP ("hyper-connections", multi-token prediction) agent-oriented design; ~31B params in safetensors (BF16/F32); trained end-to-end on Ascend 910C clusters with ~96% training-throughput uplift from NPU co-optimization.

### Raw benchmarks found

Primary source is the official model card's benchmark table (harness and sampling parameters footnoted per row) with two same-class competitors; cross-checked via the arXiv TeleChat3-MoE report (architecture/training provenance) and HF ecosystem listings. No conflicting independent measurements found; all numbers below are vendor-run — flagged accordingly.

Agent / tool use:

- Tau3-Bench: **64.63** (vendor; official harness, pass^1 avg over 4 runs, T=0.8)
- Terminal-Bench 2.1: **57.5%** (vendor; terminus-2, avg over 3 runs, 24h timeout, 64K max tokens)
- Claw-Eval: **76.55** (vendor; official harness, avg over 3 runs, 256K context) — highest of the three compared models
- GDPval-AA: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- DeepresearchBII: **60.80** (vendor; OpenCode harness, Exa MCP enabled, 256K context)

Reasoning / knowledge:

- AIME 2026: **90.0** (vendor; avg over 5 runs, 131072 max tokens)
- IFBench: **69.67** (vendor)
- AA.LCR (long-context reasoning): **61.0** (vendor; avg over 3 runs)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found (model absent from AA's extractable leaderboard pages)
- SuperCLUE: **93.52** (vendor collection note; Chinese-language suite)

Coding:

- SWE-bench Verified: **75.0%** (vendor; SWE-agent harness, 210K context window) — vs 53.0 (Gemma4-26B-A4B) and 76.0 (Qwen3.6-35B-A3B) in the same table
- SWE-bench Multilingual: **66.0%** (vendor; SWE-agent harness, 210K context)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 256K native (512K extensible); AA.LCR 61.0 measured at 65K max tokens is the only published long-context reasoning figure; no MRCR/RULER/GraphWalks reported.

### Normalized scores (1–100)

- **Tool use: 76/100.** Verified agent-benchmark sweep (Tau3-Bench 64.63, Terminal-Bench 2.1 57.5, Claw-Eval 76.55, DeepresearchBII 60.8) beats same-class peers on Claw-Eval and Terminal-Bench; mHC+MTP architecture and named agent-framework integrations support the score; capped because every number is vendor-run and GDPval/Toolathon-class tool evals are absent.
- **Reasoning: 72/100.** AIME 2026 at 90.0 and IFBench 69.67 are genuinely strong for a 4B-active model; AA.LCR 61.0 is mid; capped by missing GPQA/HLE-class general-knowledge measurements and vendor-only harnesses.
- **Context window: 78/100.** 256K native with 512K extension option is top-tier for the open small-MoE class, and AA.LCR 61.0 shows real (mid-range) long-context reasoning; capped by the absence of MRCR/RULER-style retrieval benchmarks at full window.
- **Multimodal: 15/100.** Text-only in and out (zh/en) — no image, audio, or video I/O documented anywhere on the card.
- **Coding: 82/100.** SWE-bench Verified 75.0% and SWE-bench Multilingual 66.0% from the publisher's SWE-agent runs put it near the top of its weight class (trades blows with Qwen3.6-35B-A3B while being far cheaper to run); capped by vendor-only measurement and the absence of LiveCodeBench/SciCode rows.
- **Cost efficiency: 95/100.** Apache-2.0 open weights with a 4-bit build that runs on a single RTX 3090/4090 (~15 GB) — effectively free at the point of use; only 1B-class free hosted models score higher.
- **Overall Score: 65/100.** Mean of the five non-cost dims (76+72+78+15+82)/5 = 64.6 → 65. Best fit: a free, self-hostable agentic coding/agent workhorse for zh+en teams with consumer GPUs — not a multimodal or general-knowledge flagship.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-19
- Method: public internet research — official Hugging Face model card with per-benchmark harness footnotes (primary), arXiv TeleChat3-MoE / TeleChat2 technical reports (provenance), HF API model search, and web search cross-checks; every benchmark row is vendor-reported and labeled as such; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
