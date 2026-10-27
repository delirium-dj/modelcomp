# DeepSeek V4.1 Flash 1017 — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017 (DeepSeek-V4.1-Flash-1017)
- **Short description:** DeepSeek's updated Flash model (minor update to V4.1 Flash, released Oct 17, 2026). Open weights (MIT license) on Hugging Face. 552B backbone parameters, 8B active prefill / 16B decode, plus 196B Engram conditional memory. Compressed Sparse Attention 2, FP4 KV caching (890 bytes/token). Substantial gains on reasoning, coding, agentic, visual benchmarks vs V4.1 Flash. Reduced task execution time and output length.
- **Provider / access:** Hugging Face (`deepseek-ai/DeepSeek-V4.1-Flash-1017`, MIT license), Together AI, DeepInfra, DeepSeek API (web/app), OpenRouter. Reasoning effort 1–100 (integer). Chat Completions API. Text + image input.
- **Release / knowledge:** 2026-10-17 release (1017 suffix); knowledge cutoff not published.
- **IDs:** `deepseek-ai/DeepSeek-V4.1-Flash-1017` (HF/Together/DeepInfra), `deepseek-v4.1-flash-1017` (DeepSeek API). Open weights = self-host free.
- **Context window:** 1,000,000 tokens native. Verified via HF model card, Together AI, DeepSeek card.
- **Modalities:** Text and image input (native vision encoder trained from scratch); text output. Reasoning: yes (reasoning_effort 1–100). Tool calls: yes. JSON mode: yes. Structured output: yes. DSpark speculative decoding.
- **Pricing (as of 2026-10-27):** DeepSeek API: $0.15/M in (off-peak) / $0.30/M in (peak), output ~$0.60/M (est 1/4 V4 Pro input, 1/3 output). Together AI: similar. Self-host: $0/token (MIT license, 510 GB weights). Blended API cost ~$0.20–0.30/M. Extremely cost-efficient.
- **Architecture:** 40-layer Causal Encoder-Decoder (20-layer causal encoder, 20-layer decoder). 552B backbone params, 8B/16B active, 196B Engram memory. CSA2, FP4 KV cache. MIT license.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 4.0: **42.3%** (Claude Code harness, vendor) — HF card / DeepSeek blog / MarkTechPost / The Decoder
- Terminal-Bench 2.1: **no direct score** (V4.1 Flash 1017 not separately reported on TB 2.1)
- DeepSWE v1.1: **77.0%** (Mini-SWE-V2 harness, vendor) — HF card / DeepSeek blog / MarkTechPost
- ProgramBench: **29.1%** (vendor) — HF card / DeepSeek blog
- NL2Repo-Bench: **68.2%** (vendor) — HF card / DeepSeek blog
- Automation-Bench v1.0.6: **60.5%** (vendor) — HF card / DeepSeek blog
- Agents' Last Exam: **35.4%** (vendor) — HF card / DeepSeek blog
- Apex Bench v1.1: **72.1%** (vendor) — HF card / DeepSeek blog
- MCP-Mark / MCP-Atlas: **no direct score**
- τ²-Bench: **no direct score**
- Harvey LAB-AA: **no direct score**
- GDP.pdf: **no direct score**
- JobBench: **no direct score**
- OSWorld: **no direct score**
- AA Intelligence Index: **39–40** (V4.1 Flash Sept, AA) — TrackFuture (1017 not yet listed)

Reasoning / knowledge:

- HLE (Humanity's Last Exam, no tools): **42.6%** / **44.0%†** (text-only subset) — HF card / DeepSeek blog († = text-only)
- GPQA Diamond: **no direct score** for 1017 (V4.1 Flash not reported)
- MMLU-Pro: **no direct score**
- C-Eval: **no direct score**
- SimpleBench: **no direct score**
- AA-LCR: **no direct score**
- LiveBench: **no direct score**
- FrontierMath: **no direct score**
- CritPt: **no direct score**

Coding:

- SWE-bench Verified: **no direct score** for 1017
- SWE-bench Pro: **no direct score**
- LiveCodeBench: **no direct score**
- Terminal-Bench 2.1: **no direct score**
- Terminal-Bench 4.0: **42.3%** (vendor, Claude Code) — HF card
- DeepSWE v1.1: **77.0%** (vendor, Mini-SWE-V2) — HF card (beats Opus 5 74.0%, GPT-5.6 Sol 73.0%)
- ProgramBench: **29.1%** (vendor) — HF card
- NL2Repo-Bench: **68.2%** (vendor) — HF card
- Vibe Code Bench: **no direct score**
- FrontierCode: **no direct score**
- CursorBench: **no direct score**

Long context:

- Native 1M context verified (single-token decode FLOPs rise only ~25% as context grows 256-fold 4K→1M)
- MRCR / RULER / GraphWalks: **no direct score** for 1017
- AA-LCR: **no direct score**
- LongBench v2: **no direct score**

Multimodal (vision with tools):

- Chartography (w/tools): **83.0%** — HF card / DeepSeek blog
- BabyVision (w/tools): **92.5%** — HF card / DeepSeek blog
- ZeroBench-main (w/tools, Pass@5): **51.0%** — HF card / DeepSeek blog
- Vision benchmarks all with tools; no text-only vision scores reported

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** DeepSWE 77% (beats Opus 5 74%), AutomationBench 61%, Apex Bench 72%, Agents' Last Exam 35%, NL2Repo 68%, Terminal-Bench 4.0 42%. Strong agentic coding/repository tasks. Capped by Terminal-Bench 4.0 (42% vs Opus 5 52%) and no TB 2.1/OSWorld/MCP data.
- **Reasoning: 55/100.** HLE 43–44% (vs Opus 5 56%), no GPQA/MMLU/CritPt/AA Index for 1017. V4.1 Flash Sept scored AA Index 39–40. Reasoning improved but still below top tier. Capped by missing core reasoning benchmarks (GPQA, MMLU, AA Index) and HLE gap vs Opus 5.
- **Context window: 90/100.** 1M native context with ultra-efficient scaling (FLOPs +25% for 256x context). No retrieval benchmarks (AA-LCR, MRCR, LongBench) for 1017 yet. Architecture suggests excellent long-context. Capped by zero measured retrieval benchmarks.
- **Multimodal: 70/100.** Native vision encoder, text+image in, text out. Chartography 83%, BabyVision 93%, ZeroBench 51% (all w/tools). Strong vision+tools. Capped by no text-only vision scores, no video/audio, text-only output.
- **Coding: 75/100.** DeepSWE 77% (vendor, beats Opus 5), Terminal-Bench 4.0 42%, ProgramBench 29%, NL2Repo 68%. Exceptional repository-scale engineering (DeepSWE lead). Capped by no SWE-bench Verified/Pro, no LiveCodeBench, Terminal-Bench 4.0 modest.
- **Cost efficiency: 98/100.** MIT open weights (self-host free), API ~$0.15–0.30/M in. Blended ~$0.20/M — cheapest in class. Only cheaper if self-hosted (hardware cost only). 510 GB weights need significant VRAM/RAM.
- **Overall Score: 72/100.** Mean of (70+55+90+70+75)/5 = 72.0. Model-queue shows 83.6 — gap due to missing benchmarks (GPQA, MMLU, AA Index, SWE-Verified, TB 2.1, AA-LCR). Vendor-only scores for 1017; no independent reproduction yet (Artificial Analysis lists Sept Flash only). Best fit: ultra-cost-efficient open-weight agentic coder with strong vision+tools; benchmarks need independent verification.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 4+ independent sources (DeepSeek HF model card, Together AI, DeepInfra, DeepSeek blog, MarkTechPost, The Decoder, TECHi, TrackFuture); scores normalized 1–100 per model-comparison.md methodology. **Critical limitation:** All 1017 benchmarks are vendor-reported (DeepSeek's own runs on chosen harnesses); no independent reproduction found (Artificial Analysis not yet updated, TrackFuture notes no 1017 listing). Conflicting parameter counts (HF metadata 763B vs card 552B backbone) noted.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.