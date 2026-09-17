# Gemini 3.1 Flash — findings by GLM 5.3 Flash

- Source: Google (`gemini-3.1-flash`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash (standard Flash tier of Google's 3.1 generation; supersedes the Gemini 3 Flash Preview per UseRightAI)
- **Short description:** Google's 2026 budget-tier multimodal workhorse: 1M-token context, native image/audio/PDF input, and cheap per-token pricing — positioned for high-volume support, content and document pipelines rather than premium reasoning.
- **Provider / access:** Google — Gemini API ID `gemini-3.1-flash` (AI Studio, Vertex AI, Gemini app); third-party trackers also list an OpenRouter-compatible route. Google's `generateContent` API.
- **Release / knowledge:** released 2026-04-20 (llmdb); UseRightAI tracks list pricing from 2026-05-08. Knowledge cutoff not verified in this pass (Flash-Lite sibling ships with Jan 2025).
- **IDs:** `gemini-3.1-flash` (Google). Free tier exists ("Gemini Free — limited access" on the Gemini app/AI Studio; OpenCode Zen lists it with standard rate limits).
- **Context window:** 1,000,000 tokens input (llmdb + UseRightAI, both "verified"); max output not published on the pages checked.
- **Modalities:** text, image, audio, PDF in (repo catalog) with video also supported per UseRightAI; text out. Native tool calling (llmdb rates tool-calling accuracy 86/100), JSON mode, thinking controls per the 3.x family.
- **Pricing (as of 2026-09-18):** conflicting tracker data: $0.25 in / $1.50 out per 1M (llmdb, "verified today") vs $0.50 in / $3.00 out (UseRightAI, flat since 2026-05-08; 67 daily data points). ~$11/month for a 10M-in/2M-out workload at list (UseRightAI). Free tier available (rate-limited).
- **Architecture:** proprietary, parameters undisclosed; thinking variant benchmarked separately by aggregators.

### Raw benchmarks found

Agent / tool use:

- ToolBench-X (tool use under unreliability): **0.42** overall (50th pct, rank 7/13; parallel 0.53, sequential 0.34) (BenchmarkList)
- llmdb tool-calling accuracy: **86/100** (site-tracked metric, methodology unpublished)
- Terminal-Bench / Tau2 / Tau3 / BFCL / OSWorld / GDPval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **60.5%** (llmdb) vs **51%** (UseRightAI) — sources conflict, both mid-tier
- MMLU: **86.8%** (llmdb) / **84%** (UseRightAI); MATH: **78.2%** (llmdb) / **78.4%** (UseRightAI); HumanEval: **88.5%** (llmdb); MT-Bench: **9.0** (llmdb); HellaSwag: **95.2%** (llmdb)
- HOLMES (higher-order logical reasoning): **54.31** (73rd pct, 4/12); LEAF (forecasting): **38.5%** (BenchmarkList)
- Arena Elo: **1,265** (UseRightAI)
- HLE / AA Intelligence Index / ARC-AGI / CritPt: no verified public score found

Coding:

- SWE-bench Verified: **35%** (UseRightAI published-benchmarks block)
- SWE-Pro: **93.1%** (BenchmarkList's tracked run, rank 3/6 — note: different harness/scale than the prompt20 SWE-Pro leaderboard, treat as non-comparable)
- PerfCodeBench (system-level optimization): **45.9%** (BenchmarkList)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Multimodal / long context:

- CC-OCR V2: **61.4%** (50th pct); HarmVideoBench: **81.3%** (90th pct, 3/22); SpatialUAV: **45.9%** (83rd pct); CheXperpect: **87.1%** (BenchmarkList)
- Window: **1M tokens** (llmdb/UseRightAI); MRCR / RULER / AA-LCR at window length: no verified public score found

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six.

- **Tool use: 70/100.** Mid-pack ToolBench-X 0.42 (50th pct) plus llmdb's 86/100 tool-calling figure; no TB/tau/BFCL numbers found — scored on the evidence available.
- **Reasoning: 62/100.** GPQA 51–60.5 (conflicted sources) and MATH 78 with Arena Elo 1,265 are solid mid-tier for 2026 but well below the 3.1 Pro class and even below the official GPQA 86.9 its Lite sibling reports — scored on the published numbers, not positioning.
- **Context window: 97/100.** Full 1M-token input across all trackers; output cap unpublished and no long-context retrieval score found.
- **Multimodal: 85/100.** Text + image + audio + PDF (+ video) in with CC-OCR 61.4 and HarmVideoBench 81.3 (90th pct); text-only output.
- **Coding: 68/100.** SWE-V 35% (UseRightAI) is weak for 2026; HumanEval 88.5 and the non-comparable SWE-Pro 93.1 (r3/6) suggest better, settling at workhorse level.
- **Cost efficiency: 95/100.** Rate-limited free tier plus either $0.25/$1.50 or $0.50/$3.00 — cheap under both readings; output-side pricing keeps it off 100.
- **Overall Score: 80/100.** Mean: (70 + 62 + 97 + 85 + 68 + 95) / 6 = 477/6 = 79.5 → **80**. Best fit: high-volume multimodal budget model — 1M context and free tier make it the default cheap workhorse, not a frontier agent/coder.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-18
- Method: fresh public internet research from zero (llmdb.app model page, UseRightAI model page incl. daily price tracking, BenchmarkList benchmark map, ai-tldr lineage pages for the Flash-Lite sibling for generational context); conflicting tracker numbers are quoted side-by-side rather than averaged; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
