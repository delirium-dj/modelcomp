# Qwen3.5-35B-A3B — findings by MiMo 2.6 Flash

- Source: Alibaba/Qwen (`Qwen/Qwen3.5-35B-A3B`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-35B-A3B
- **Short description:** Alibaba's small MoE open-weight reasoning model of the Qwen3.5 generation (36B total / 3B active per Artificial Analysis); image input, 262K context and near-frontier HLE at very low cost — a fast cheap workhorse rather than a frontier coder.
- **Provider / access:** Open weights (Apache 2.0) served by Alibaba Cloud Model Studio (bailian), DeepInfra, Novita, SiliconFlow and GMI; Chat Completions style APIs; reasoning and non-reasoning modes.
- **Release / knowledge:** released 2026-02-24 (Artificial Analysis); knowledge cutoff not published (N/A in provider tables).
- **IDs:** `qwen/qwen3.5-35b-a3b` (Model Studio), `deepinfra/qwen3.5-35b-a3b`, `novita/qwen3.5-35b-a3b`, `siliconflow/qwen3.5-35b-a3b`; weights `Qwen/Qwen3.5-35B-A3B`. No Free ID verified on OpenCode Zen.
- **Context window:** 262,144 tokens (262.1K; Artificial Analysis, AnotherWrapper); max output ~65K tokens (AnotherWrapper provider table).
- **Modalities:** text and image in; text out; reasoning mode yes; tool calls / JSON yes.
- **Pricing (as of 2026-10-21):** Alibaba Model Studio $0.25 in / $2.00 out per 1M ($2.25 blended; AnotherWrapper verified 2026-09-23 against bailian console; Artificial Analysis lists the same); cheaper route $0.14 / $1.00 (LLM Stats). Paid; no $0 tier verified.
- **Architecture:** MoE, 36B total / 3B active at inference (Artificial Analysis); Apache 2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (**agent**): **40.5%** (BenchLM mirror, AnotherWrapper)
- OSWorld-Verified: **54.5%** (BenchLM)
- BrowseComp: **61%** (BenchLM)
- Gert Labs: **28.96%** (BenchLM compare vs Claude Opus 4.8)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- HLE (Humanity's Last Exam): **47.4%** (AnotherWrapper shared-benchmark table)
- GPQA Diamond: **84.2%** (AnotherWrapper, BenchLM)
- MMLU-Pro: **85.3%** (BenchLM)
- SuperGPQA: **63.4%** (BenchLM)
- Artificial Analysis Intelligence Index: **19 (estimated)** — #12/141 in its class vs size-class median 8 (Artificial Analysis)
- LLM Stats composite: **30.8 (#132, 81 evals)** (LLM Stats)
- BenchLM overall point estimate: **45.8–46.4** (BenchLM compare pages)

Coding:

- SWE-bench Verified: **69.2%** (BenchLM, AnotherWrapper)
- LiveCodeBench v6: **74.6%** (BenchLM, AnotherWrapper)
- SWE-Rebench: **53.7%** (BenchLM)
- Arena Code Elo: **1250** (AnotherWrapper)
- SciCode / DeepSWE: no verified public score found

Long context:

- LongBench v2: **59%** (BenchLM)
- No MRCR/RULER figure found

Multimodal:

- MMMU: **81.4%** (BenchLM, AnotherWrapper)
- MMVU: **72.3%** (BenchLM)
- MMMU-Pro: **75.1%** (BenchLM, AnotherWrapper)

Performance notes:

- 147 output tok/s (well above the 77.7 class median), TTFT 2.09 s on Alibaba API (Artificial Analysis) — notably fast for the class.

### Normalized scores (1–100)

- **Tool use: 58/100.** OSWorld-Verified 54.5% and BrowseComp 61% are mid, but Terminal-Bench 2.0 40.5% and Gert Labs 28.96% sit below the mid band; no Tau3/GDPval/Claw rows exist.
- **Reasoning: 84/100.** HLE 47.4% clears the 40%+ frontier reference — exceptional for a 3B-active model — with GPQA 84.2% and MMLU-Pro 85.3% confirming depth; the mid-range absolute Index scores keep it out of the 90s.
- **Context window: 72/100.** 262,144 native tokens → 200K–500K tier (200K = 70 reference); LongBench v2 59% shows mid long-context retrieval; no 512K+ measurement.
- **Multimodal: 70/100.** Image + text in, text out (no video/audio, no non-text out) with MMMU 81.4% — top of the image-in tier.
- **Coding: 70/100.** SWE-bench Verified 69.2% and LiveCodeBench v6 74.6% are respectable mid scores for 3B active, but Terminal-Bench 2.0 40.5% and LLM Stats' low coding sub-index (11.4, #168) cap it; no DeepSWE/SciCode.
- **Cost efficiency: 94/100.** $0.25/$2.00 at Alibaba with routes from $0.14/$1.00 — among the cheapest hosted reasoning models tracked; no free tier found.
- **Overall Score: 71/100.** Mean of (58 + 84 + 72 + 70 + 70) / 5 = 70.8 → 71. Best fit: high-throughput cheap reasoning/vision workhorse with near-frontier HLE; not a primary agentic/terminal coder.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-21
- Method: fresh public web research (Artificial Analysis, BenchLM mirrors, AnotherWrapper pricing/benchmark tables, LLM Stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
