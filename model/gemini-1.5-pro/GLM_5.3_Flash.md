# Gemini 1.5 Pro — findings by GLM 5.3 Flash

- Source: Google (`gemini-1.5-pro`, Sep '24 update; deprecated)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro (September 2024 production update)
- **Short description:** Google's 2024 mid-size multimodal MoE model that introduced million-token context (1M at launch, 2M GA on Vertex AI from September 2024) with near-perfect needle-in-haystack recall; now deprecated and superseded by the Gemini 2.x/3.x families. Best remembered for long-document and hours-of-video/audio processing.
- **Provider / access:** Google Gemini API (`gemini-1.5-pro`, ai.google.dev) and Vertex AI (GA September 2024). Deprecated — Google now suggests Gemini 2.0 Flash or newer. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2024-05-01 (initial), Sep '24 production update 2024-09-24; 2M context reached GA on Vertex AI 2024-09-25; knowledge cutoff August 2024 for the Sep '24 update (Artificial Analysis; llm-stats lists November 2023 for the May original).
- **IDs:** `gemini-1.5-pro` (Google Gemini API / Vertex AI). No Free ID on Zen.
- **Context window:** 2,000,000+ total tokens (2.1M per llm-stats; benchlm 2M); 8K max output.
- **Modalities:** text, image, speech/audio and video input (processes ~2 hours of video, 19 hours of audio, codebases of ~60,000 lines of code per the Gemini 1.5 technical report); text output; reasoning no (non-reasoning — direct responses, no chain-of-thought); tool calls (function calling via API); JSON mode.
- **Pricing (as of 2026-10-09):** deprecated — the Artificial Analysis model page now lists $0.00/$0.00 placeholders; its final-era Google API pricing was $2.50 / $10.00 per 1M in/out (llm-stats provider table). No current free API tier.
- **Architecture:** Proprietary; highly compute-efficient multimodal Mixture-of-Experts — parameter count not disclosed by Google.

### Raw benchmarks found

> AA rows via benchlm.ai (updated 2026-10-09, non-reasoning class). Previously-missing rows now measured.

Agent / tool use:

- No verified public Terminal-Bench, Tau3-Banking/Tau2-Bench, GDPval-AA, MCPAtlas, Claw-Eval, Toolathon or SWE Atlas score found for this exact model — it predates the agentic-benchmark era and Google published no machine-readable agentic-tool numbers.

Reasoning / knowledge:

- GPQA Diamond: **58.9%** (AA-GPQA Diamond — fills the previously-missing GPQA row)
- HLE: **4.6%** (AA-HLE — fills the previously-missing HLE row)
- Artificial Analysis Intelligence Index: **7.9** (AA current reading — corroborates the earlier 8 estimate / #123 of 299 non-reasoning-class)
- LCR / MLCR, CritPt, Omniscience: no verified public score found

Coding:

- AA Coding Index: **23.6%** (AA — fills the previously-missing coding index; weak)
- SWE-bench Verified/SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE: no verified public score found for this exact model (the Gemini 1.5 technical report covers earlier-version coding capabilities without Sep '24 numbers)

Long context:

- Near-perfect recall on long-context retrieval (needle-in-haystack) tasks across millions of tokens of context (Gemini 1.5 technical report, arxiv 2403.05530; official measured claim for the 1.5 Pro family)
- 2M context window claimed and GA-verified on Vertex AI from September 2024

Multimodal / vision:

- AA-MMMU-Pro: **55.0%** (AA — fills the first measured vision row)

### Normalized scores (1–100)

- **Tool use: 60/100.** Function calling via the Gemini API is built in, but zero verified public agentic benchmark numbers and a 2024 non-reasoning design cap the score in the mid band.
- **Reasoning: 38/100.** The filled GPQA Diamond 58.9% and HLE 4.6% (both AA) plus AA Index 7.9 confirm the model is far below the modern mid band; consistent with a 2024-era model superseded by every current alternative.
- **Context window: 95/100.** 2M total tokens clears the ≥1M tier (95–100) with near-perfect needle-in-haystack recall documented in the official technical report; no MRCR-grade retrieval at 512K+ keeps it off the maximum.
- **Multimodal: 85/100.** Text, image, speech/audio and video input (2h video / 19h audio processing) with the measured AA-MMMU-Pro 55.0%; audio input pushes it into the upper band but the modest measured vision docks it from the old 90.
- **Coding: 52/100.** The filled AA Coding Index 23.6% is weak; no verified public SWE-bench/LiveCodeBench numbers for this exact model version — score rests on thin evidence, conservative per the no-hallucination rule.
- **Cost efficiency: 70/100.** Final-era pricing of $2.50/$10.00 per 1M sits between the $1.25/$4.25 = ~88 and $3/$15 = ~60 methodology references, landed at 70; the model is deprecated so effective current pricing is n/a.
- **Overall Score: 66/100.** Mean of the five quality dims (60 + 38 + 95 + 85 + 52) / 5 = 66.0 — the near-perfect long-context recall remains its standout. Best-fit: legacy long-context workloads only — every current model in this comparison beats it on reasoning, coding and tool use.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (benchlm.ai tables updated 2026-10-09 citing AA boards + Artificial Analysis/llm-stats model pages + the Gemini 1.5 technical report via arXiv — official plus independent sources); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing GPQA 58.9%, HLE 4.6%, AA Coding Index 23.6%, AA-MMMU-Pro 55.0% — Reasoning 40→38, Coding 55→52, Multimodal 90→85, Overall 68→66.
- Future sources: add a new file next to this one, e.g. `Gemini_2.md`, using the same headings.
