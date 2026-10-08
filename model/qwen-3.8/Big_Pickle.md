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
- **Pricing:** ~$0.10 in / $0.90 out per 1M at the cheapest API resellers (pricepertoken, 2026-10); effectively $0 for self-hosting on a single 24 GB GPU.
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

- **Tool use: 78/100.** TB2.1 73.0%, OSWorld-Verified 84.3% (plus AndroidWorld 81.9 during re-run) are strong for a compact open model; WebArena 64.8%, CoWork 70.7% and TB2.1 (Vals) 58.4% keep it mid-tier rather than frontier.
- **Reasoning: 78/100.** GPQA 89.2% and HLE 30.8% are now verified (BenchLM public sweep), and AA Intelligence Index **52** places it well above its size class; the coding-adjacent reasoning lane grades #8/27.
- **Context window: 78/100.** Native 262K sits in the 200K–500K band; YaRN-extension to 1M is unverified product spec, not measured retrieval.
- **Multimodal: 85/100.** Image + video input with controllable thinking earns the high multimodal band; MathVision 90.0% (94.6% w/Python) verifies genuine vision strength; no audio confirmed caps it below 90.
- **Coding: 77/100.** SWE-bench (Vals) 86.0%, LCB v6 90.3%/84.0 (Vals), SWE-bench Pro 61.7%, VulcanBench v3 82.6% measured; DeepSWE 42.2% and NL2Repo 42.3% temper it.
- **Cost efficiency: 90/100.** ~$0.10/$0.90 API or free self-hosting on 24 GB — exceptional for the capability class.
- **Overall Score: 79/100.** (78 + 78 + 78 + 85 + 77) / 5 = 79.2 → 79 (raised from 78 on 2026-10-08, see Re-verification). The best value "own the weights" pick of the Qwen3.8 generation: frontier-adjacent agentic results you can run on a single GPU, now with verified reasoning/coding rows.

---

## Re-verification — 2026-10-08 (15 days after original)

Re-run fills the previously open GPQA/HLE, vision and coding rows (BenchLM public sweep/compare lane, updated 2026-10-07, 33–45 rows; AA; pricepertoken).

| Dimension | 2026-09-23 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 78 | 78 | — |
| Reasoning | 74 | 78 | +4 |
| Context window | 78 | 78 | — |
| Multimodal | 85 | 85 | — |
| Coding | 74 | 77 | +3 |
| Cost efficiency | 90 | 90 | — |
| **Overall** | **78** | **79** | **+1** |

New and corrected data:

- **Reasoning gaps filled:** GPQA **89.2%** (Vals 88.9), HLE **30.8%** (no-tools), AA Intelligence Index **52** (AA page: well above comparable-model median); the earlier "no verified GPQA/HLE" constraint is lifted.
- **Coding now measured, not inferred:** SWE-bench (Vals) **86.0%**, LiveCodeBench v6 **90.3%** (84.0 Vals), VulcanBench v3 82.6%, SWE-bench Pro 61.7% (coherent with Alibaba's card 61.7), **DeepSWE 42.2%** and NL2Repo 42.3% — the honest hard-cut rows.
- **Vision verified:** MathVision 90.0% (94.6% with Python) — a real image-reasoning row backing the 85 multimodal score; coding/multimodal lanes grade #18/117 and #11/50 respectively.
- **Agentic lines up:** every original agentic figure re-confirmed (OSWorld-V 84.3, AndroidWorld 81.9, WebArena-V 64.8, CoWorkBench 70.7, JobBench 33.4, ALE 42.9, TB2.1 73.0, TB2.1-Vals 58.4).
- **Composite shift:** BenchLM overall now **58.2, #52/212** (45 source rows; the 68.35/#29-of-411 figure cited originally was the narrower Aug-2026 build — same model, bigger row count).
- **Pricing corrected down:** cheapest reseller **$0.10/$0.90** per 1M (pricepertoken 2026-10; original "~$0.42/$3.00" was a higher reseller quote) — inline-corrected in the card; free self-host unchanged.
- **Datapoint for curious readers:** Qwen3.8 Max (2026-09-28 compare) scores OSWorld 2.0 only 19.4% but SWE-V (Vals) 85.6% / GPQA 92.6% — the 27B is a strong value proxy, the flagship remains strictly better.

Gaps still open after re-run: YaRN 1M retrieval measurement, AA-LCR long-context row, IFBench, Toolathlon/MCP-Atlas for the 27B, audio output confirmation.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-08 (re-verified; original research 2026-09-23)
- Method: public internet research (Alibaba open-weights release docs, BenchLM compare/profile, AA, pricepertoken, kingy.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.