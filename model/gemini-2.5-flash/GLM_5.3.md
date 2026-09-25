# Gemini 2.5 Flash — findings by GLM 5.3

- Source: Google (`gemini-2.5-flash`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's mid-2025 fast/cheap multimodal workhorse (deprecated line: a Sep-2025 refresh exists). Top use case: high-throughput multimodal input processing with a 1M window.
- **Provider / access:** Google Gemini API `gemini-2.5-flash` (AA lists 2 providers).
- **Release / knowledge:** 2025-05-20; knowledge cutoff January 2025.
- **IDs:** `google/gemini-2.5-flash` (no OpenCode Zen Free ID found; superseded on Zen by the Gemini 3.x Flash line).
- **Context window:** 1M tokens (Artificial Analysis model page).
- **Modalities:** text, image, speech (audio), and video in / text out (AA); reasoning variant exists but the benchmarked configuration is non-reasoning; tool calls yes (function calling, per Gemini API family); JSON mode not separately verified.
- **Pricing (as of 2026-09-25):** $0.30 in / $2.50 out per 1M, cache discount 90% (AA; blended $0.33/1M at 7:2:1). Output speed 195.5 tok/s, TTFT 0.46s (AA — one of the fastest models in its class).
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **14.9%** (BenchLM); Tau3-Banking: **no verified public score found**
- Terminal-Bench 4.0 / 2.1: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / Toolathlon / MCP-Atlas / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **68.3%** (BenchLM, AA-GPQA)
- HLE: **4.7%** (BenchLM, AA-HLE)
- LCR / MLCR: AA-LCR **49.9%** (BenchLM); MLCR no verified public score found
- CritPt: **1.4%** (BenchLM)
- Artificial Analysis Intelligence Index: **9.8** (BenchLM; AA estimates 10, #29/75 among non-reasoning models — median 9)
- Omniscience: Index **-42.6**, Accuracy **26.1%**, hallucination-rate field **93.0%** (BenchLM; label ambiguous vs AA's "Non-Hallucination Rate" — flagged, not double-counted)
- FrontierMath v2 (Tiers 1–3) **4.8%**, Tier 4 **4.2%** (BenchLM)
- AA-IFBench: **39.0%** (BenchLM)

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**
- Design Arena Website Elo: **1126** (BenchLM — website-generation eval; weak vs current models)

Long context:

- AA-LCR 49.9% (BenchLM) at the 1M window; no MRCR/RULER per-length data — no long-context retrieval score found.

Multimodal:

- AA-MMMU-Pro: **65.5%** (BenchLM)

### Normalized scores (1–100)

- **Tool use: 52/100.** τ²-bench 14.9% sits in the methodology's mid band (Tau ~10–25% → 50–70) with zero verified Terminal-Bench/GDPval/Toolathlon evidence; standard function calling keeps it at the band's floor-plus.
- **Reasoning: 52/100.** GPQA 68.3% is solidly mid-band, but HLE 4.7%, CritPt 1.4%, FrontierMath ~4.8%, an Omniscience Index of -42.6 and AA Index 9.8 (non-reasoning class) cap it; no thinking in the benchmarked config.
- **Context window: 93/100.** 1M verified = ≥1M tier; mediocre long-context reasoning (AA-LCR 49.9%) keeps it off the top of the band.
- **Multimodal: 88/100.** Text+image+speech+video input (audio/video = top tier) with text out; MMMU-Pro 65.5% is mid-pack — breadth without depth.
- **Coding: 50/100.** No verified coding benchmark rows at all; the only adjacent signal (Design Arena 1126) is weak — provisional floor-plus score.
- **Cost efficiency: 94/100.** $0.30/$2.50 with 90% cache discount is near the ~$0.60/$2.20 (~92) anchor with cheaper input, and 195.5 tok/s output adds real throughput value.
- **Overall Score: 67/100.** Half-up mean of the five quality dims (52+52+93+88+50)/5 = 67.0 — a fast, cheap 1M-context multimodal input processor; no longer competitive for reasoning, coding, or agentic work.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
