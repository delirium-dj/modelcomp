# GPT-5.6 Terra — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.6 Terra (`gpt-5.6-terra`)
- Date: 2026-10-09 (UTC) — deep second pass (previous Signature 2026-10-06)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass re-verification — 2026-10-09** (≥3 independent sources).
> Independent Vals AI: SWE-bench **95.40% (#5/88)**, GPQA Diamond 90.91%, MMLU-Pro 86.66%, MMMU-Pro 86.47%, LiveCodeBench 85.93%, **Terminal-Bench 4.0 22.73%**, Code Migration 47.80%, **Vals Index 53.09% (#20/45)**. Artificial Analysis Intelligence Index **42 (#48/227, v4.3.2)** — OpenAI self-reports 55 on v4.1. LMArena 1466 (#50); BenchLM 72.34 (#13).
> **Conflicts surfaced:** (1) **AA Index 42 (AA v4.3.2) vs 55 (OpenAI on v4.1)** — version/effort, explicitly flagged; (2) pricing $2.50/$15 launch vs **$2/$12 current**; (3) context 1M (AA/OpenAI/Vals) vs 1.1M (LLM Stats); (4) **independent terminal-agent performance is weak** (TB4.0 22.73%, Code Migration 47.8%) despite the vendor TB2.1 87.4% — harness/generation gap.
> Sources: https://openai.com/index/gpt-5-6/ · https://artificialanalysis.ai/models/gpt-5-6-terra · https://www.vals.ai/models/openai_gpt-5.6-terra · https://llm-stats.com/models/gpt-5.6-terra · https://arena.ai/leaderboard/chat/text

## Model card

- **Name:** GPT-5.6 Terra (display "GPT-5.6 Terra")
- **Short description:** OpenAI's balanced mid-tier of the GPT-5.6 family (2026-07-09), permanent capability band between Sol (max) and Luna (cheap); scores within ~2 points of Sol on headline evals at half the price, OpenAI's recommended default for professional/agentic workloads.
- **Provider / access:** OpenAI Responses API, Azure, OpenRouter; Zen `gpt-5.6-terra`. Closed.
- **Release / knowledge:** 2026-07-09; knowledge cutoff February 2026.
- **IDs:** `gpt-5.6-terra`.
- **Context window:** 1,100,000 input / 128,000 max output (1M per AA/Vals).
- **Modalities:** text + image in; text out; reasoning incl. max effort; tools/structured output.
- **Pricing (as of 2026-10-09):** **$2.00 in / $12.00 out** per 1M; cached input $0.20 (90% off); >272K reprice; paid only.
- **Architecture:** undisclosed (GPT-5.6 family).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **87.4%** (OpenAI) / 77.5% (Vals); **Terminal-Bench 4.0 22.73%** (Vals)
- Toolathlon 53.1% (OpenAI); τ²-bench 86.3% (AA); GDPval-AA 1593 Elo (OpenAI) / 47.7% normalized (AA)
- OSWorld 2.0 50.2%; BrowseComp 87.5%; Coding Agent Index 77.4; Vals Index 53.09% (#20)

Reasoning / knowledge:

- GPQA Diamond 92.9% (OpenAI) / 92.5% (AA) / **90.91% (Vals)**; ARC-AGI-1 96.5%; ARC-AGI-2 83.9%
- HLE-Verified 51.1% (Google card) / AA-HLE 42.9%; AA-LCR 83.0%; CritPt 30.0%
- Artificial Analysis Intelligence Index **42 (v4.3.2, #48/227)** vs 55 (self, v4.1); MMLU-Pro 86.66% (Vals)

Coding:

- SWE-bench **95.40% (#5, Vals)**; SWE-bench Pro 63.4% (OpenAI); DeepSWE 69.6%; LiveCodeBench 85.93% (Vals)
- Code Migration 47.80% (Vals); SciCode 55.0%; WebDev Arena 1523

Long context:

- 1M window; no MRCR/RULER/GraphWalks published; AA-LCR 83.0% is the closest signal.

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.1 87.4% (vendor) / 77.5% (Vals), τ² 86.3% and Coding Agent Index 77.4 are near-frontier; capped by TB4.0 22.73% and OSWorld 50.2%.
- **Reasoning: 89/100.** GPQA ~91% and ARC-AGI-1 96.5% are flagship-band, HLE-Verified 51.1%; the independent AA Index of 42 (<60) is the main cap.
- **Context window: 96/100.** 1.1M input / 128K output matching Sol (≥1M band); no recall-at-depth benchmark.
- **Multimodal: 68/100.** Text + image in, text out with MMMU-Pro 80.7–86.5%; no audio/video/PDF, no media generation.
- **Coding: 86/100.** Vals SWE-bench 95.4% (#5) and LiveCodeBench 85.9% are strong; SWE-bench Pro 63.4%, DeepSWE 69.6% and weak TB4.0/Code Migration cap it.
- **Cost efficiency: 74/100.** $2/$12 per 1M with 90%-off cache reads and half-Sol positioning; ~2.7× Gemini 3.8 Flash on input.
- **Overall Score: 85/100.** (87 + 89 + 96 + 68 + 86) / 5 = 85.2 → 85. Best fit: production agent and long-context workflows wanting near-flagship OpenAI behaviour without paying Sol's premium.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: deep second-pass public internet research (OpenAI GPT-5.6 model card, Artificial Analysis model page, Vals AI model page, LLM Stats, LMArena, BenchLM). Independent Vals rows were promoted; the AA index-version conflict and the weak independent terminal-agent results are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
