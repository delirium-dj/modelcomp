# Gemma 4 31B — findings by Mimo v2.6 Flash

- Source: Google DeepMind/`gemma-4-31b-it`
- Date: 2026-10-09 (UTC; original research 2026-09-22, re-researched 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B (instruction-tuned dense flagship of the Gemma 4 open family)
- **Short description:** Google's open-weights 30.7B dense model (Apache 2.0) with thinking mode, 256K context, and text+image input — #1 dense open model on Arena Text at release and the quality tier of the Gemma 4 suite for server/local fine-tuning.
- **Provider / access:** Hugging Face `google/gemma-4-31B-it` (and base `gemma-4-31B`); Google AI for Developers Gemma downloads; community hosts (OpenRouter, Together, etc.); local GGUF / compressed-tensors / QAT checkpoints. Free open weights; standard API hosting rates vary by host.
- **Release / knowledge:** Gemma 4 family announced **2026-04-02** (Google blog + arXiv tech report 2607.02770); HF 31B-it card dated 2026-07-02 (refresh). Knowledge cutoff not explicitly restated for Gemma 4 31B in sources reviewed.
- **IDs:** `google/gemma-4-31b-it` (repo meta id `google/gemma-4-31b-it`); base `google/gemma-4-31B`.
- **Context window:** **256K** (262K vocab family; model card "up to 256K" for 12B/26B/31B); max output not separately capped in card excerpts (practical serving limits vary).
- **Modalities:** **text/image in; text out** (31B has ~550M vision encoder, **no audio** — audio only on E2B/E4B/12B); thinking/reasoning mode yes; function calling yes; JSON via standard decoding; OCR/document/chart/UI understanding supported.
- **Pricing (as of 2026-09-22):** **Free open weights** (Apache 2.0) — self-host cost is hardware only (BF16 ~69.9GB, SFP8 ~34.9GB, Q4_0 ~17.5GB weights); hosted API prices set by each provider (not a single Google rate card).
- **Architecture:** dense, **30.7B** total params, 60 layers, d_model 5376, FFN 21504, vocab 262144; 5:1 local:global sliding-window attention (SWA 1024), pp-RoPE, GQA, QK-Norm; ~550M ViT; thinking mode; MTP draft tokens; Apache 2.0.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Instruction-tuned, thinking mode unless noted. Primary source: Google Gemma 4 model card / tech report.

Agent / tool use:

- Tau2 (average over 3: airline/retail/telecom): **76.9%** (Google; retail 86.4, airline 75.0, telecom 69.3 — beats Gemma 3 27B 16.2 by a mile)
- Terminal Bench Hard: **36.0%** (Google; vs Gemma 3 4.0; AA notes mid-pack vs Qwen3.5-27B 33% on related hard set)
- Terminal-Bench 2.0 — Vals AI Terminus 2 (high effort): **39.3%** (Vals AI via Benchmark Registry, reported 2026-06-04)
- Terminal-Bench 2.1 — Mercor Terminus 2 (1000 steps, 3h): **46.8%** (Mercor via Benchmark Registry, reported 2026-10-07)
- AutomationBench 1.0.6 (Zapier, effort max): **1.7%** (Zapier independent leaderboard via Benchmark Registry, reported 2026-10-07 — long-horizon browser/automation agents remain very weak)
- Toolathlon / MCP-Atlas / OSWorld / GDPval-AA: no verified public score found for Gemma 4 31B

Reasoning / knowledge:

- GPQA Diamond: **84.3%** (Google; vs Gemma 3 42.4)
- MMLU Pro: **85.2%** (Google; vs Gemma 3 67.6)
- AIME 2026 (no tools): **89.2%** (Google; vs Gemma 3 20.8)
- BigBench Extra Hard: **74.4%** (Google)
- HLE no tools: **19.5%**; HLE with search: **26.5%** (Google)
- GPQA Diamond — Mercor single-shot agent: **85.5%**; MMLU-Pro — Mercor single-shot: **85.8%**; HLE text-only — Mercor single-shot: **23.2%** (Mercor independent leaderboard via Benchmark Registry, reported 2026-10-07 — corroborates self-reports within ±1.5 pts)
- SimpleQA Verified (Epoch AI harness): **10.4%** (Epoch AI via Benchmark Registry; evaluated 2026-08-27 — low factual precision)
- Artificial Analysis Intelligence Index: **39** (Artificial Analysis, 2026-04-06; trails Qwen3.5-27B Reasoning 42 by 3 pts; ~2.5× fewer output tokens than Qwen for that gap)
- IFBench 76.0 / IFEval 98.9 / MMMLU 85.2 (Google; the 2026-09-22 pass transcribed MMMLU as 88.4 — the current official Gemma 4 page shows 85.2, so the earlier value is superseded)

Coding:

- LiveCodeBench v6: **80.0%** (Google; vs Gemma 3 29.1)
- Codeforces ELO: **2150** (Google)
- SciCode: **43.0%** (Google/tech report; AA: leads Qwen3.5-27B 40 on SciCode)
- SWE-bench Verified — Mercor mini-swe-agent (1000 steps, 3h): **46.1%** (Mercor independent leaderboard via Benchmark Registry, reported 2026-10-07 — fills the gap left by the 2026-09-22 pass; solid for an open dense 31B, well below closed frontier)
- DeepSWE 1.1 — Mercor mini-swe-agent (500 steps, 2h): **0.0%** (Mercor via Benchmark Registry, reported 2026-10-07 — real-repo agentic harness fails outright)

Long context:

- MRCR v2 8-needle 128K average: **66.4%** (Google; vs Gemma 3 13.5 — large jump but well below frontier 80%+)
- 256K window; 1M-class retrieval: N/A

Multimodal:

- MMMU Pro: **76.9%** (Google; vs Gemma 3 49.7)
- MATH-Vision: **85.6%** (Google)
- OmniDocBench 1.5 avg edit distance: **0.131** (lower better; Google)
- MedXPertQA MM: **61.3%** (Google)
- Arena Text (human Elo): **#1 dense open model / #3 open overall** at release (Google tech report, as of 2026-06-19); official Gemma 4 page snapshot: Arena AI text Elo **1452** (as of 2026-04-02, vs Gemma 3 27B 1365)
- CharXiv / Video-MMMU: no verified public score found (audio still E2B/E4B/12B only per Google; the HF card retrieved 2026-10-09 now ships a video-input usage example explicitly loading `google/gemma-4-31B-it` via `AutoModelForMultimodalLM` — suggests frame-sampled video works, but no video benchmark row exists; provisional)

### Normalized scores (1–100)

- **Tool use: 76/100.** Tau2 average 76.9 (retail 86.4) is outstanding for an open 31B; independent Terminal-Bench rows (TB 2.0 Vals 39.3, TB 2.1 Mercor 46.8) confirm real terminal agentic skill, but DeepSWE 1.1 0.0 and Zapier AutomationBench 1.7 (both 2026-10-07) show long-horizon repo/automation agents still fail — held at 76.
- **Reasoning: 82/100.** GPQA 84.3, MMLU-Pro 85.2, AIME 89.2, BBEH 74.4 with AA Intelligence Index 39 and class-leading token efficiency; Mercor single-shot corroboration (GPQA 85.5, MMLU-Pro 85.8, HLE 23.2) removes self-report doubt, but SimpleQA Verified 10.4 (Epoch) flags weak factual precision and HLE absolute (19.5–26.5) stays far below frontier 40%+ — held at 82.
- **Context window: 70/100.** True 256K window (2× Gemma 3) with MRCR 66.4% at 128K — usable long context but deep needle reliability mid-tier; no 1M tier.
- **Multimodal: 84/100.** Native text+image with MMMU-Pro 76.9, MATH-Vision 85.6, strong OmniDocBench; **no audio on 31B** and no video/CharXiv rows cap below omni-modal flagships.
- **Coding: 83/100.** SWE-bench Verified gap now filled: **46.1%** (Mercor mini-swe-agent, 2026-10-07), with LCB v6 80.0, Codeforces Elo 2150, SciCode 43, TB 2.1 46.8 — elite for open 31B class; DeepSWE 1.1 **0.0%** and AutomationBench 1.7 expose real-repo agentic fragility, capping below closed frontier; +1 vs 2026-09-22 (was capped by the missing SWE row).
- **Cost efficiency: 100/100.** Apache 2.0 free weights, runs quantized on a single consumer/workstation GPU (Q4_0 ~17.5GB), no API lock-in — self-host anchor = 100.
- **Overall Score: 79/100.** Mean of five quality dims (76+82+70+84+83)/5 = 79.0 → 79 (unchanged vs 2026-09-22 despite the coding +1). Best-fit: best-in-class open dense model for private reasoning/coding/vision deployments and fine-tuning where 256K + Tau2-grade tool use matter more than HLE peaks, 1M context, or long-horizon repo autonomy (DeepSWE 0.0).

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-09 (original: 2026-09-22; re-research pass per user-approved 7-day enrichment)
- Method: public internet research (original: Google AI Gemma 4 model card, Google blog 2026-04-02, arXiv 2607.02770 tech report, HF google/gemma-4-31B + 31B-it, Artificial Analysis Gemma 4 article, Sebastian Raschka release notes; 2026-10-09 re-research: Benchmark Registry No. 35002 updated 2026-10-07 incl. Mercor/Vals/Epoch independent rows, DeepMind Gemma 4 page, HF 31B-it card re-check); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

### Deep-research addendum (2026-10-09)

> User-approved re-research of files older than one week (original signature 2026-09-22). Purpose: compare previous findings against current data and fill gaps. Superseded values are annotated in place above; nothing was deleted.

**New data found (previously "no verified public score found" or absent)**

- SWE-bench Verified: **46.1%** (Mercor mini-swe-agent, 1000 steps, 3h; reported 2026-10-07) — the single biggest gap from the first pass is closed.
- DeepSWE 1.1: **0.0%** (Mercor mini-swe-agent, 500 steps) — new negative signal for real-repo autonomy.
- Terminal-Bench 2.1: **46.8%** (Mercor Terminus 2); Terminal-Bench 2.0: **39.3%** (Vals AI Terminus 2, high effort, reported 2026-06-04) — independent agentic-terminal numbers above Google's TBH 36.0.
- Mercor single-shot corroboration: GPQA Diamond 85.5, MMLU-Pro 85.8, HLE text-only 23.2 (reported 2026-10-07) — all within ±1.5 pts of Google self-reports.
- SimpleQA Verified: **10.4%** (Epoch AI harness; evaluated 2026-08-27) — low factual precision, new caveat.
- AutomationBench 1.0.6: **1.7%** (Zapier, effort max; reported 2026-10-07) — long-horizon automation remains very weak.
- Arena AI text Elo **1452** captured from the official Gemma 4 page (snapshot as of 2026-04-02).

**Previous finding vs current data (discrepancies)**

- MMMLU: first pass recorded **88.4**; the current official Gemma 4 page shows **85.2** — earlier transcription superseded (annotation in place).
- "No video input on 31B": the HF card (retrieved 2026-10-09) now includes a video-input example loading 31B-it — audio remains E2B/E4B/12B only; video support is provisional (no benchmark row).

**Score delta (2026-09-22 → 2026-10-09):** Coding 82→83 (SWE-V gap filled, offset by DeepSWE/AutomationBench negatives); Tool (76), Reasoning (82), Context (70), Multimodal (84), Cost (100) unchanged; **Overall stays 79**.

**Still missing (verified search, not found)**

- OSWorld / GDPval-AA / Toolathlon / MCP-Atlas rows; official Google SWE-bench Verified row; CharXiv / Video-MMMU numbers; a published knowledge-cutoff date; a single first-party hosted-API rate card (open weights only).

**Curation flags (not applied — meta.json is outside this agent's write scope)**

- `model/gemma-4-31b/meta.json` says `"contextWindow": "128K context"` and `"modalities": "Text in/out only"` — both contradict verified data (256K window; text+image in per model card + DeepMind page). Recommend updating to "256K context" and "Text/image in, text out".
