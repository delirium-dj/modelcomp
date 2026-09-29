# Gemini 3.5 Flash — findings by Muse Spark 1.3 Contributor

- Source: Google/Gemini 3.5 Flash, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: catalog absolutes added, scores recomputed 81 → 85); re-verified 2026-09-29 (UTC, user-signed-off re-research: model-card table + AA effort variants + BenchLM/Vals/HokAI rows added — SWE-V 78, SWE-Pro 55.1, HLE 40.2, LCR 73.3, Tau2 95.3, MCP 83.6, MRCR 77.3/26.6, cutoff Jan 2025; Tool 80 → 85, Reasoning 86 → 89, Context 100 → 97, Multimodal 85 → 87, Coding 76 → 82, Overall 85 → 88)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash (Google next-gen 3.5)
- **Short description:** Google's next-gen 3.5 Flash model, offering enhanced speed and capabilities.
- **Provider / access:** Google via AI Studio + Vertex (`google/gemini-3.5-flash`); OpenCode Zen free tier (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-05-19 release (DeepMind model card); knowledge cutoff Jan 1, 2025 (OpenRouter — re-verified 2026-09-29)
- **IDs:** `google/gemini-3.5-flash` (Free tier exists via AI Studio/Zen)
- **Context window:** 1,048,576 (1M) — verified via curated repo metadata
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning yes (minimal/medium/high effort); tool calls yes (re-verified 2026-09-29)
- **Pricing (as of 2026-09-18, re-verified 2026-09-27):** $1.50/$9.00 per 1M (Requesty/Vertex; prompt caching supported); free tier via AI Studio/Zen
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** (aireleasetracker compare, vs 3.7 Flash 85.8%)
- GDPval-AA v2: **1349** (aireleasetracker, vs 3.7 Flash 1525); AA percent-scale **34.2%** (high effort — re-verified 2026-09-29)
- OSWorld-Verified: **78.4%** (Google 3.6 Flash launch deck, 3.5 baseline)
- MLE-Bench: **49.7%** (same deck, 3.5 baseline vs 3.6 63.9%)
- Tau2-Telecom: **95.3–95.6%** (AA high/medium effort — re-verified 2026-09-29); Tau3-Banking: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP Atlas: **83.6%** (HokAI vendor-reported; highest recorded Jun 2026 — re-verified 2026-09-29); Toolathon / SWE Atlas QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.2%** (Requesty/AA catalog row; AA high effort corroborates; Vals 92.7% variant); MMLU-Pro: **89.5%** (Vals — re-verified 2026-09-29)
- ARC-AGI-2: **72.1%** (BenchLM/HokAI; vs 3.1 Pro 77.1% — re-verified 2026-09-29)
- Artificial Analysis Intelligence Index: **32.6 raw points** (AA high; BenchLM-normalized ~50–52% incl. filed 52.0% — scale disambiguation, re-verified 2026-09-29)
- HLE: **40.2%** no-tools (model card; **42.7%** AA high effort — re-verified 2026-09-29)
- LCR: **73.3–74.3%** (AA high/medium; BenchLM AA-LCR 69.3 variant noted — re-verified 2026-09-29); MLCR: **no verified public score found**
- CritPt: **13.1%** (AA high effort; 1.4% minimal — re-verified 2026-09-29)
- Omniscience Accuracy: **51.0–51.9%** / Non-Hallucination: **37.8–38.2%** (AA high / BenchLM variant — re-verified 2026-09-29)
- MMMU-Pro: **84.2%** (HokAI vendor-reported; highest recorded at launch — re-verified 2026-09-29)

Coding:

- SWE-bench Verified: **78%** (HokAI vendor-reported — re-verified 2026-09-29); SWE-Pro: **55.1%** (model card Terminus/single-attempt; BenchLM corroborates — re-verified 2026-09-29)
- LiveCodeBench: **87.6% Vals** (BenchLM; TPS 56.0% variant noted — re-verified 2026-09-29)
- SciCode: **53.9%** (AA high; BenchLM 53.1 variant — re-verified 2026-09-29)
- Vibe Code Bench: **48.68%** (BenchLM — re-verified 2026-09-29); CursorBench 3.1 **49.8%** / 3.2 **48.8%** (BenchLM — re-verified 2026-09-29)
- DeepSWE / Coding Index / other: **70.1% AA Coding Index** (Requesty/AA catalog composite); **37% DeepSWE** (Google 3.6 launch deck, 3.5 baseline vs 3.6 49%)

Long context:

- **1M window verified; MRCR v2 8-needle 77.3% @128k avg / 26.6% @1M pointwise (model card; BenchLM corroborates — re-verified 2026-09-29)**

### Normalized scores (1–100)

- **Tool use: 85/100.** TB2.1 76.2% plus Tau2 95.3%, MCP Atlas 83.6% (record), OSWorld-Verified 78.4% and GDPval 1349 show strong mid-tier orchestration; capped by MLE 49.7% and no Tau3/Claw numbers.
- **Reasoning: 89/100.** GPQA 92.2% plus HLE 40.2%/42.7%, LCR ~73%, ARC-AGI-2 72.1% and MMLU-Pro 89.5% show strong mid-tier reasoning; capped by CritPt 13.1% and no MLCR numbers.
- **Context window: 97/100.** 1M tier with MRCR 77.3% @128k / 26.6% @1M measured; capped by weak full-length retrieval.
- **Multimodal: 87/100.** Five-type input with MMMU-Pro 84.2% (record) measured; capped as outputs remain text.
- **Coding: 82/100.** SWE-V 78% plus LiveCode Vals 87.6%, SWE-Pro 55.1% and SciCode 53.9% show strong mid-tier engineering; capped by Vibe 48.7% and DeepSWE-baseline 37%.
- **Cost efficiency: 95/100.** Free tier available with cheap paid fallback ($1.50/$9).
- **Overall Score: 88/100.** Mean of the five non-cost dims (85+89+97+87+82)/5 = 88.0 → 88; best-fit mid-tier free 3.5 Flash pick — now evidence-backed.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
