# Qwen 3.8 (Qwen3.8-27B) — findings by Big Pickle

- Source: Alibaba Qwen Team (`opencode/qwen-3.8`; slug maps to the open-weights **Qwen3.8-27B** — distinct from the already-covered `qwen3.8-max` flagship)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 (open-weights compact variant **Qwen3.8-27B**)
- **Short description:** Alibaba's August 2026 Apache-2.0 open-weight Qwen3.8 model — a ~27.8B dense model that fits on a 24 GB GPU, with 262K native context (extensible to 1M via YaRN), image/video understanding and a controllable thinking mode, pairing near-flagship agentic results with self-hosting freedom.
- **Provider / access:** Open weights on Hugging Face / ModelScope (Apache 2.0, no restrictions); API via Alibaba Cloud Model Studio and Reseller / LLM Gateway (`qwen3.8-27b`). OpenCode Zen id per repo meta stub: `opencode/qwen-3.8`.
- **Release / knowledge:** Released 2026-08-14 (open weights).
- **IDs:** `qwen3.8-27b` / `Qwen3.8-27B` (HF/ModelScope, Alibaba Cloud, LLM Gateway); `opencode/qwen-3.8` per repo meta.
- **Context window:** 262,144 tokens native, extensible to ~1M via YaRN; max output 33K at the API (BenchLM).
- **Modalities:** Text, image and video input; text output. Thinking mode controllable via `reasoning_effort`.
- **Pricing:** ~$0.42 in / $3.00 out per 1M at API resellers; effectively $0 for self-hosting on a single 24 GB GPU.
- **Architecture:** Dense transformer, ~27.8B params (24 GB-GPU-class), Apache 2.0 license, FP8-quantized build available.

### Raw benchmarks found

Agent / tool use (BenchLM, Aug 2026):

- Terminal-Bench 2.1: **73.0%**; CoWorkBench: **70.7%**; JobBench: **33.4%**
- Agents' Last Exam: **42.9%**; OSWorld-Verified: **84.3%**; WebArena-Verified: **64.8%** (BenchLM/public sweep)
- MCP Atlas / Toolathlon / GDPval-AA: **no verified public score found**

Reasoning / knowledge:

- BenchLM composite: **68.35/100, rank #29/411** (open-weight, reasoning category); HLE / GPQA: **no verified public score found** for the 27B config

Coding:

- No dedicated SWE-bench/DeepSWE/LiveCodeBench verified scores found for the 27B; agentic-coding signal comes via OSWorld/Terminal-Bench 2.1

Long context:

- Native 262K (extensible to ~1M) advertised; no independent MRCR/needle verification found

Multimodal:

- Image and video understanding supported per Alibaba documentation (no verified vision benchmark found)

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.1 73.0% and OSWorld-Verified 84.3% are strong for a compact open model; WebArena 64.8% and CoWork 70.7% keep it mid-tier rather than frontier.
- **Reasoning: 74/100.** BenchLM composite 68.35 (#29/411) and ALE 42.9% indicate solid mid-tier reasoning; without GPQA/HLE verification it cannot reach the 80+ band.
- **Context window: 78/100.** Native 262K sits in the 200K–500K band; YaRN-extension to 1M is unverified product spec, not measured retrieval.
- **Multimodal: 85/100.** Image + video input with controllable thinking earns the high multimodal band; no verified audio or vision benchmark caps it below 90.
- **Coding: 74/100.** No dedicated coding benchmark verified; inferred from agentic OSWorld/TB2.1 strength rather than measured SWE/LCB scores.
- **Cost efficiency: 90/100.** ~$0.42/$3.00 API or free self-hosting on 24 GB — exceptional for the capability class.
- **Overall Score: 78/100.** (78 + 74 + 78 + 85 + 74) / 5 = 77.8 → 78. The best value "own the weights" pick of the Qwen3.8 generation: frontier-adjacent agentic results you can run on a single GPU, at a fraction of flagship API pricing.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-23
- Method: public internet research (Alibaba open-weights release docs, BenchLM, LLM Gateway, innfactory writeup); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model → file saved as `<Source_Name>.md.excluded`, not `.md` (see SELF-EXCLUSION above).