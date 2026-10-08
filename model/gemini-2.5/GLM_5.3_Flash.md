# Gemini 2.5 — findings by GLM 5.3 Flash

- Source: Google DeepMind (`gemini-2.5-pro`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 (served as `gemini-2.5-pro`)
- **Short description:** Google DeepMind's Gemini 2.5 family flagship, released March–May 2025 as a "thinking" model for complex reasoning, coding, and long-context analysis. Now a legacy, access-limited model superseded by the Gemini 3.x/4 generations, but still served via `gemini-2.5-pro` routes.
- **Provider / access:** Google Gemini API `gemini-2.5-pro` (OpenAI-compatible and native Gemini endpoints); also OpenRouter `google/gemini-2.5-pro`. Legacy access-limited model per Gemini API docs. Chat Completions / generateContent style APIs.
- **Release / knowledge:** Gemini 2.5 Pro Experimental released 2025-03-25, general availability 2025-05-20 (verified via airank.dev and evals.report); knowledge cutoff early 2025.
- **IDs:** `google/gemini-2.5-pro` (OpenRouter, meta-verified); `gemini-2.5-pro` (Google API). No Free ID on Zen (`noFreeId: true` in meta).
- **Context window:** 1,048,576 tokens (1M) total; input up to 1M with multi-step long-context retrieval (Gemini 2.5 technical report, Table 3); max output ~65K. Verified via Google's technical report and airank.dev.
- **Modalities:** Text/image/audio/video in → text out; reasoning yes (integrated thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-08):** $1.25 in / $10.00 out per 1M (Google API; OpenRouter `google/gemini-2.5-pro`, verified 2026-10-04). Paid only.
- **Architecture:** Proprietary, closed weights; sparse MoE (Google has not published exact parameter counts); thinking integrated by default.

### Raw benchmarks found

Agent / tool use:

- GDPval: **23.3%** (airank.dev aggregation, Unverified badge)
- MCP-Atlas: **8.8%** (airank.dev, Unverified)
- BrowseComp: **7.8%** (airank.dev, Unverified)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- Toolathon / Claw-Eval / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **77.2%** (airank.dev, Unverified badge; helicone lists GPQA among Gemini 2.5 Pro leads)
- HLE: **17.8%** (airank.dev, Unverified)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: BenchLM **49.47/100, #94 of 214** (benchlm.ai, October 2026)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **63.8%** (deepranking.ai, serenitiesai.com, futureagi.substack — Google-published GA number, multiple corroborations)
- LiveCodeBench (Pro): tracked on evals.report among 50 reported benchmarks (score value not independently confirmed — treated provisional)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- Aider Polyglot: **74.0%** (futureagi.substack; multi-language code editing, near Claude 3.7 Sonnet's 70.3%)

Long context:

- 1M-token retrieval reported (Gemini 2.5 technical report, Table 3 — Gemini 2.5 Pro surpasses 1.5 Pro on long-context input up to 1M tokens); MRCR/RULER per-length values not independently confirmed

### Normalized scores (1–100)

- **Tool use: 48/100.** GDPVal 23.3%, MCP-Atlas 8.8% and BrowseComp 7.8% are all low-band agent results; no Terminal-Bench/Tau3 coverage published, which leaves the dimension capped in the high-40s.
- **Reasoning: 68/100.** GPQA Diamond 77.2% sits in the 60–80 mid band and HLE 17.8% is only slightly above the <10% mid reference; a former frontier model by 2025 standards, clearly behind the 2026 cohort.
- **Context window: 95/100.** Native 1,048,576 tokens (tier ≥1M = 95–100); capped at 95 because per-length MRCR/RULER retrieval percentages were not independently confirmed.
- **Multimodal: 88/100.** Text/image/audio/video input with text output maps to the 90–100 band, held just under by MMMU 68.0% (mid multimodal accuracy) and the aging modality stack.
- **Coding: 68/100.** SWE-bench Verified 63.8% and Aider Polyglot 74.0% put it squarely in the 65–75 mid band; LiveCodeBench Pro tracked but unconfirmed, no SciCode/Vibe coverage.
- **Cost efficiency: 70/100.** $1.25/$10.00 per MTok — cheap input but a high output rate ($10/MTok) that lands between the ~$1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 reference points.
- **Overall Score: 73.4/100.** Mean of the five quality dims (48+68+95+88+68)/5 = 73.4; best fit: long-context multimodal analysis and legacy-stable coding at moderate cost — not for modern agentic or frontier reasoning workloads.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai-org/glm-5.3-flash)** — 2026-10-08
- Method: public internet research (Google DeepMind technical report via aggregators, airank.dev, evals.report, benchlm.ai, independent blogs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
