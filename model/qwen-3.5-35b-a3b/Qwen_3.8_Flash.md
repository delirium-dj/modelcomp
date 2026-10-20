# Qwen 3.5 35B-A3B — findings by Qwen 3.8 Flash

- Source: Alibaba Qwen (`Qwen/Qwen3.5-35B-A3B`; curated id `opencode/qwen-3.5-35b-a3b`), cross-checked against the Qwen3.5 blog, Artificial Analysis (Intelligence Index, τ²-bench, Terminal-Bench), llm-stats / benchmarklist / ModelScope listings and the Hugging Face model card
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 35B-A3B
- **Short description:** The **3B-active sweet spot** of Alibaba's open-weight Qwen3.5 "Native Multimodal Agents" family — a **35B-total / ~3B-active MoE** that delivers *native multimodal* (text + image + **video**) reasoning and agentic coding at rock-bottom compute, because only ~3B parameters fire per token. Released 2026-02-24 under Apache 2.0. Its design brief is breadth-cheaply: always-on agents and high-call-volume workloads, **not** frontier-difficulty depth (a trade-off the curated entry states outright).
- **Provider / access:** open weights (HF `Qwen/Qwen3.5-35B-A3B`, Apache 2.0, self-hostable); hosted at **DeepInfra** ($0.14/$1.00, cached $0.05), **Novita** ($0.25/$2.00), OpenRouter (~$0.08/$0.75); GGUF/AWQ/NVFP4 quant builds; official playground chat.qwen.ai.
- **Release / knowledge:** 2026-02-24 (llm-stats); weights updated on HF/ModelScope 2026-03-09; knowledge cutoff not individually published (Qwen3.5 family).
- **IDs:** `Qwen/Qwen3.5-35B-A3B`; siblings `qwen-3.5-27b` (dense), `qwen-3.5-122b-a10b`, `qwen-3.5-9b`, `qwen-3.5-397b`, `qwen-3.5-plus`, `qwen-3.5-flash`; a `qwen-3.6-35b-a3b` successor is now advertised (separate registry line — its numbers are *not* borrowed here).
- **Context window:** **262,144 native**, extensible to ~1,010,000 via YaRN.
- **Modalities:** **native multimodal** — text + image + **video** in, text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-20):** open weights (self-host free); hosted from **$0.08–$0.14 / $0.75–$1.00 per 1M** — one of the cheapest multimodal-agentic tiers in the registry, courtesy of the 3B-active MoE.
- **Architecture:** 35B-total sparse MoE, ~3B active per token; unified early-fusion vision-language (image + video) foundation.

### Raw benchmarks found

> **Well-evidenced entry — a genuine independent Artificial-Analysis composite exists.** AA Intelligence Index **29.26** (73rd pct, verified 2026-07-21; field leader ≈65.7), with AA sub-scores GPQA-Diamond **84.5%**, Humanity's Last Exam **19.7%**, AA-Omniscience **−46.4**, SciCode 37.7%, AA-LCR 62.7%. τ²-bench and Terminal-Bench rows are AA-independent; the rest are model-card/HF-tracker figures.

Agent / tool use:

- **τ²-bench Telecom: 89.2%** — *Artificial-Analysis independent* (agentic dual-control tool use; strong)
- Terminal-Bench 2.1: **40.8%** (AA-verified; weighted $0.17/task); Terminal-Bench **Hard**: **26.5%** (AA)

Reasoning / knowledge:

- GPQA Diamond: **84.5%** (AA) · AIME 2026: **93.3%** · HMMT 2025: **89.0%**
- MMLU-Redux: **93.3%** · MMLU-ProX: **81.0%** (model card)
- **Frontier-depth weakness:** HLE **19.7–21.0%** and AA-Omniscience **−46.4** — breadth is cheap and real, calibrated open-ended depth is not.

Coding:

- SWE-bench Verified: **~69–72%** in the family model-card table (the exact 35B-A3B cell reads ≈**69.4%**; the family column is vendor-measured — cited with that caveat, not as an AA number).

Long context / multimodal:

- 262K native (~1M YaRN); AA-LCR (long-context reasoning) **62.7%**; **native video** confirmed by VideoMMMU **80.4%**, plus MathVision **83.9%** and PolyMATH **64.4%** multimodal reasoning.

### Normalized scores (1–100)

- **Tool use: 80/100.** Independently AA-verified **τ²-bench 89.2%** is an elite agentic-tool score for a 3B-active model, tempered only by modest Terminal-Bench (40.8 / 26.5-hard) on the hardest long-horizon terminal tasks — a genuine tool-calling specialist at the cheap end.
- **Reasoning: 68/100.** Real breadth — GPQA-D 84.5, AIME 93.3, MMLU-Redux 93.3 — but its own AA profile betrays the ceiling: HLE ~20% and Omniscience −46.4 put frontier/open-ended depth and calibration firmly below the leaders. Strong mid-band, not deep.
- **Context window: 74/100.** 262K native (≈1M via YaRN) with AA-LCR 62.7% showing the long-context reasoning holds up at a verifiable, if unremarkable, level; the ~1M extension lacks a retrieval proof, so it's scored at the verified tier.
- **Multimodal: 74/100.** True native **image *and video*** input in an Apache-2.0 checkpoint, backed by VideoMMMU 80.4 / MathVision 83.9 — well above image-only peers; not higher because audio input and image generation are out of scope for this lane.
- **Coding: 66/100.** Capable agentic coder (~69% family SWE-bench-V, Terminal-Bench 40.8, SciCode 37.7), but the SWE cell is vendor-measured and the terminal/math-code scores are mid, so coding is scored solid-general rather than a coding specialist.
- **Cost efficiency: 94/100.** A ~3B-active MoE at $0.08–$0.14/$0.75–$1.00 per 1M with Apache-2.0 self-hosting is the entire thesis — near-frontier-*breadth* multimodal agents for pennies, making always-on automation economical.
- **Overall Score: 72.4/100.** Half-up mean of the five quality dims (80+68+74+74+66)/5 = 72.4. Best fit: **high-volume, cost-sensitive multimodal agents** (video-aware assistants, tool-heavy automation, bulk reasoning) where the AA-verified τ² 89.2 and native video punch far above the 3B-active cost — with a frontier-reasoning or repo-scale-coding model preferred when depth, not breadth, is the constraint.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-20
- Method: public internet research — Qwen3.5 launch blog (native multimodal agents, MoE family), **Artificial Analysis** (Intelligence Index 29.26 / GPQA-D 84.5 / HLE 19.7 / AA-LCR 62.7 / τ²-bench Telecom 89.2 / Terminal-Bench 2.1 40.8 & Hard 26.5 — the independent backbone of this entry), the HF/ModelScope model card (AIME 93.3, MMLU-Redux 93.3, VideoMMMU 80.4, MathVision 83.9, SWE-bench-V family table), and llm-stats/benchmarklist provider + spec data (Apache-2.0, 2026-02-24, 262K, $0.14/$1.00 DeepInfra). Scores are normalized 1–100 interpretations, not official vendor scores; the SWE-bench cell is flagged as family/vendor-measured and the ~1M YaRN extension as unproven. Curated `meta.json` here is *not* scaffolded — it agrees with first-party evidence (262K native, text/image/video, Apache-2.0).
- Revisit trigger: a Qwen3.6-35B-A3B AA single-number delta, or a co-measured (non-family) SWE-bench Verified absolute for this exact checkpoint.
- Future sources: add a new file next to this one, e.g. `GLM_5.3.md`, using the same headings.
