# Gemini 2.5 — findings by GLM 5.3 Flash

- Source: Google DeepMind (`gemini-2.5-pro`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 (served as `gemini-2.5-pro`)
- **Short description:** Google DeepMind's Gemini 2.5 family flagship, released March–May 2025 as a "thinking" model for complex reasoning, coding, and long-context analysis. Now a legacy, access-limited model superseded by the Gemini 3.x/4 generations, but still served via `gemini-2.5-pro` routes. BenchLM ranks it #99 of 889 (49.42).
- **Provider / access:** Google Gemini API `gemini-2.5-pro` (OpenAI-compatible and native Gemini endpoints); also OpenRouter `google/gemini-2.5-pro`. Legacy access-limited model per Gemini API docs. Chat Completions / generateContent style APIs.
- **Release / knowledge:** Gemini 2.5 Pro Experimental released 2025-03-25, general availability 2025-05-20 (verified via airank.dev and evals.report); knowledge cutoff early 2025.
- **IDs:** `google/gemini-2.5-pro` (OpenRouter, meta-verified); `gemini-2.5-pro` (Google API). No Free ID on Zen (`noFreeId: true` in meta).
- **Context window:** 1,048,576 tokens (1M) total (BenchLM concurs); input up to 1M with multi-step long-context retrieval (Gemini 2.5 technical report, Table 3); max output ~65K.
- **Modalities:** Text/image/audio/video in → text out; reasoning yes (integrated thinking; BenchLM classifies the base variant as non-reasoning); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-11):** $1.25 in / $10.00 out per 1M (Google API; OpenRouter `google/gemini-2.5-pro`). Paid only.
- **Architecture:** Proprietary, closed weights; sparse MoE (Google has not published exact parameter counts); thinking integrated by default.

### Raw benchmarks found

> Second-pass note (2026-10-11): the BenchLM `gemini-2-5-pro` page (fetched fresh this pass) supersedes the unverified airank.dev rows with AA/Vals/Google-official measurements for the same served model.

Agent / tool use:

- GDPval-AA: **616** (AA, independent — normalized **0.0%**) — **supersedes the unverified airank "23.3%"**; AA Agentic Index: **3.5%**
- τ²-bench: **54.1%** (AA, independent — first measured Tau2 number); Gert Labs: **42.01%**
- Vals Vibe Code Bench v1.1: **0.40%** (Vals — floor)
- BrowseComp: **7.8%** (airank, Unverified — no verified corroboration found); MCP-Atlas: **8.8%** (airank, Unverified)
- Terminal-Bench / Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.4%** (AA, independent) / **83%** (Google DeepMind page via benchlm.ai) — **higher than the unverified 77.2% the prior pass cited**
- HLE: **18.8%** (Google announcement via benchlm.ai); AA-HLE: **22.5%** (AA) — consistent with the prior 17.8% unverified read
- Artificial Analysis Intelligence Index: **16.1** (AA — corroborates the 16)
- AA-LCR v1.1: **69.0%** (AA — fills the long-context gap); CritPt: **2.6%** (AA — near-zero)
- FrontierMath v2: **14.1%** Tiers 1–3 / **4.2%** Tier 4 (Epoch AI — weak)
- AIME 2024: **92%** (Phi-4 comparison table); AIME 2025: **88%** (prior pass)
- AA-Omniscience: **39.1% accuracy / 90.9% non-hallucination row / −16.3 index** (AA — very weak index)
- AA-IFBench: **48.7%** (AA)

Coding:

- AA Coding Index: **33.3%** (AA, independent — much weaker than the prior mid-band framing); AA-SciCode: **46.3%** (AA)
- SWE-bench (Vals): **54.4%** (Vals, independent); SWE-bench Verified: **63.8%** (Google GA number — corroborated by benchlm)
- LiveCodeBench: **74.2%** (prior pass); Aider Polyglot: **74.0–82.2%** (prior pass, harness-dependent)

Long context:

- AA-LCR 69.0% (AA — first measured long-context number, weak-mid); 1M retrieval reported in the technical report, per-length values unconfirmed

Multimodal:

- AA-MMMU-Pro: **74.9%** (AA); MMMU: **82%** (prior pass); Design Arena Website: **1172** (OpenRouter); audio + video input confirmed

### Normalized scores (1–100)

- **Tool use: 44/100.** (Was 48 on the prior pass.) The verified AA rows are floor-class: GDPval 616 (0.0% normalized), AA Agentic Index 3.5%, Vibe Code Bench 0.40% — the unverified airank rows were optimistic; τ²-bench 54.1% keeps it above 40.
- **Reasoning: 68/100.** GPQA rises to 83–84.4% on verified sources (from the unverified 77.2%), but AA Index 16.1, CritPt 2.6%, HLE 18.8–22.5% and FrontierMath T4 4.2% hold the composite in the mid band — net unchanged.
- **Context window: 95/100.** Native 1,048,576 tokens (BenchLM concurs; tier ≥1M = 95–100); AA-LCR 69.0% is the first measured evidence (weak-mid); per-length MRCR/RULER still unconfirmed.
- **Multimodal: 88/100.** Text/image/audio/video input with MMMU 82% / MMMU-Pro 74.9%; text-only output and the aging modality stack hold it just under 90.
- **Coding: 62/100.** (Was 68 on the prior pass.) AA Coding Index 33.3%, Vals SWE-bench 54.4% and Vibe Code Bench 0.40% document the March-2025 age on 2026 harnesses; SWE-V 63.8% and LiveCodeBench 74.2% hold workhorse level only.
- **Cost efficiency: 70/100.** $1.25/$10.00 per MTok — cheap input but a high output rate ($10/MTok) that lands between the ~$1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 reference points.
- **Overall Score: 71.4/100.** (Was 73.4 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (44 + 68 + 95 + 88 + 62) / 5 = 357/5 = 71.4 — lowered on the 2026-10-11 second pass as verified AA/Vals rows replace the unverified airank framing. Best fit: long-context multimodal analysis and legacy-stable coding at moderate cost — not for modern agentic or frontier reasoning workloads.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: the freshly fetched benchlm.ai gemini-2-5-pro page with AA/Vals/Epoch/Google-blog citations (same served model), the prior 2026-10-08 pass on airank/evals.report/aggregators, Google DeepMind pages via benchlm.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_2.md`, using the same headings.
