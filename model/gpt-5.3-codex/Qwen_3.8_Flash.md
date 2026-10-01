# GPT 5.3 Codex — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-5.3 Codex (`opencode/gpt-5.3-codex`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.3 Codex (base)
- **Short description:** OpenAI's code-specialised agent model — strong SWE-bench Verified (85%) and LiveCodeBench (87.3%) with a capable reasoning core (GPQA 91.5%, HLE 42.5%), but an 89.2% Omniscience hallucination rate and a hard focus on coding over breadth.
- **Provider / access:** OpenAI API / Codex (`gpt-5.3-codex`), also on OpenCode Zen (`opencode/gpt-5.3-codex`). Reasoning + tool calls.
- **Release / knowledge:** Feb 2026 (OpenAI GPT-5.3-Codex system card); knowledge cutoff not disclosed.
- **IDs:** `opencode/gpt-5.3-codex` / OpenAI `gpt-5.3-codex`.
- **Context window:** BenchLM lists **400K**; curated `meta.json` says "128K total" — conflict, resolved in favour of 400K.
- **Modalities:** AA-MMMU-Pro indicates image-in; curated `meta.json` lists "Text in/out". Text out; reasoning on; tool calls.
- **Pricing (as of 2026-10-02):** "Standard pricing" (OpenAI Codex-class, exact per-1M rate not in curated meta).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (22 of 618 rows; 62.46/100, #46 of 645), citing the OpenAI GPT-5.3-Codex system card, plus Artificial Analysis, Vals AI, SWE-Rebench, JobBench, Gert Labs and OpenRouter (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall).

Agent / tool use:

- Terminal-Bench 2.0 **77.3%**; τ²-bench 86.0%; OSWorld-Verified 64.7%
- Gert Labs 57.5%; JobBench 33.7% (no Terminal-Bench 2.1 / GDPval-AA rows published)

Coding:

- SWE-bench Verified **85.0%**; LiveCodeBench (Vals) **87.3%**; SWE-bench (Vals) 78.0%
- SWE-bench Pro 56.8%; SWE-Rebench 58.2%; Vibe Code 61.8% (no DeepSWE / Coding-Index / SciCode rows)

Reasoning / knowledge:

- AA-GPQA Diamond **91.5%** (clears 90); **AA-HLE 42.5%** (clears the 40% bar); AA-LCR 83.3; Intelligence Index 32.5; CritPt 16.9; IFBench 75.4
- Omniscience Index 10.9 / Accuracy 52.9% / Hallucination **89.2%** — very high confabulation

Multimodal / long context:

- AA-MMMU-Pro 78.5% (only image row); Design Arena Website 1170
- 400K window (AA-LCR 83.3 supportive; no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 74/100.** Terminal-Bench 2.0 77.3% and τ²-bench 86.0% are solid agentic-tool signals for a code agent, but no Terminal-Bench 2.1 / GDPval-AA rows exist, and OSWorld-Verified 64.7% and JobBench 33.7% are mid — good, not frontier breadth.
- **Reasoning: 72/100.** GPQA-Diamond 91.5% and HLE 42.5% both clear their bars with AA-LCR 83.3, but Intelligence Index 32.5 and CritPt 16.9% are mid and an **89.2% hallucination rate** (despite 52.9% accuracy) is a serious reliability drag.
- **Context window: 74/100.** BenchLM's 400K window sits between the 100–200K (50–64) and ≥1M (95–100) bands; AA-LCR 83.3 supports it and no ≥98% MRCR is demonstrated (curated meta conflicts at 128K), so an upper-mid placement.
- **Multimodal: 66/100.** The only grounded row is image (AA-MMMU-Pro 78.5, Design Arena 1170) — a +image band (60–70); no audio/video/document rows and curated meta says text-only, so no higher-tier credit for this code-focused model.
- **Coding: 82/100.** SWE-bench Verified 85.0% and LiveCodeBench 87.3% (Vals) are genuinely strong and Codex-calibrated, trimmed by SWE-bench Pro 56.8%, SWE-Rebench 58.2% and the absence of DeepSWE/Coding-Index rows.
- **Cost efficiency: 75/100.** OpenAI Codex-class "standard pricing" is low-to-mid (GPT-5.x tier); exact per-1M rate not published in curated meta, so provisional. Cost is excluded from Overall.
- **Overall Score: 74/100.** Mean of Tool 74, Reasoning 72, Context 74, Multimodal 66, Coding 82 = 73.6 → 74. Best fit: agentic software engineering — repo edits, refactors and code generation where a spec or test suite grounds the answer; its narrow multimodal profile and 89.2% hallucination make it a poor general/factual assistant, so keep it in the coding lane and verify output against tests.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the OpenAI GPT-5.3-Codex system card, plus Artificial Analysis, Vals AI, SWE-Rebench, JobBench, Gert Labs and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
