# GPT-5.5 — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-5.5 (`openai/gpt-5.5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's pre-5.6 flagship base tier — exceptional structured tool-calling (τ²-bench 98%) and solid knowledge scores, but weak long-horizon agency, a heavy Omniscience hallucination flag and only mid coding evidence.
- **Provider / access:** OpenAI Responses/Chat API (`gpt-5.5`); no OpenCode Zen free ID (`noFreeId`). Reasoning + tool calls.
- **Release / knowledge:** 2026 ("Introducing GPT-5.5"); knowledge cutoff not disclosed. Curated meta flags the card/specs as not yet fully verified — BenchLM confirms a 1M window.
- **IDs:** `openai/gpt-5.5`.
- **Context window:** 1M (BenchLM model-details; curated meta "no verified public value").
- **Modalities:** text, image in; text out (per OpenAI launch rows on MMMU-Pro); reasoning on; tool calls.
- **Pricing (as of 2026-10-02):** No verified public pricing found (curated meta); treat Cost as provisional.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (63 of 618 rows), citing OpenAI "Introducing GPT-5.5", Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cursor, Cognition and the Terminal-Bench/OSWorld leaderboards (fetched 2026-10-02).

Agent / tool use:

- τ²-bench: **98%** (OpenAI) — near-perfect structured tool calling
- Terminal-Bench 2.0: 82.0% (leaderboard; TB 2.1 Vals 76.4%); BrowseComp 84.4%; CyberGym 81.8%
- OSWorld-Verified 78.7%; MCP Atlas 75.3%; Toolathlon 55.6%; Gert Labs 72.93%
- GDPval-AA only **1396** (AA normalized 41.8%); AA Agentic Index 37.3%; OSWorld 2.0 13.0%; ApprenticeBench 20%; APEX-Agents 37.7%

Reasoning / knowledge:

- GPQA / GPQA-Diamond: **93.6%** (Vals 93.2%); HLE **52.2%** (w/o tools 41.4%, AA 45.8%)
- ARC-AGI-2 **85%** (OpenAI) — but ARC-AGI-3 **0.4%** (ARC Prize)
- FrontierMath legacy/v2 T1-3/Tier-4: 51.7 / 51.7 / 35.4 (Epoch); AA-LCR 84.3; CritPt 27.1
- Intelligence Index **38.4**; Omniscience Accuracy / **Hallucination: 58.0% / 89.0%** (severe flag); MMLU-Pro (Vals) 88.1; IFBench 75.9

Coding:

- LiveCodeBench (Vals) **85.3%**; SWE-bench (Vals) 82.6%; AA Coding Index 74.9%
- SWE-bench Pro 58.6%; AA-SciCode 55.8%; Terminal-Bench 2.0 82%; React Native Evals 84.7%
- CursorBench 3.1/3.2 59.2/58.4; FrontierCode 1.1 43.0%; Vibe Code Bench 69.9%; no DeepSWE row

Multimodal / long context:

- MMMU-Pro 81.2 (w/ Python 83.2, AA 79.9); OfficeQA Pro 54.1; Design Arena 1265
- MRCR v2: **83.1% (64K–128K) / 87.5% (128K–256K)** — sub-90 retrieval at long ranges.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 84/100.** τ²-bench 98%, BrowseComp 84.4% and OSWorld-Verified 78.7% are standout, but GDPval-AA 1396 is far under the 1750 frontier ref and AA Agentic Index 37.3%, OSWorld 2.0 13.0% and ApprenticeBench 20% show weak open-ended agency.
- **Reasoning: 85/100.** GPQA-Diamond 93.6% and HLE 52.2% clear the bars with ARC-AGI-2 85%; ARC-AGI-3 0.4%, mid Index 38.4, FrontierMath ~52% and an 89.0% Omniscience hallucination rate cap it firmly.
- **Context window: 94/100.** 1M-token window meets the ≥1M tier, but MRCR is only 83.1/87.5 at 64K–256K — well short of the ≥98% retrieval needed higher in the band.
- **Multimodal: 68/100.** Text+image in / text out with good-but-not-frontier visuals (MMMU-Pro ~80–83, OfficeQA 54.1); no audio/video rows and no non-text output → +image-in band.
- **Coding: 80/100.** LiveCodeBench 85.3% and SWE-bench (Vals) 82.6% are strong; SWE-bench Pro 58.6%, Coding Index 74.9%, no DeepSWE row and FrontierCode 43.0% keep it below the 90 band.
- **Cost efficiency: 50/100.** No verified public pricing found as of this date; a mid placeholder pending OpenAI's rate card. Cost is excluded from Overall.
- **Overall Score: 82/100.** Mean of Tool 84, Reasoning 85, Context 94, Multimodal 68, Coding 80 = 82.2 → 82. Best fit: structured tool-calling workflows and QA-style reasoning at pre-5.6 pricing; avoid ungrounded factual recall (89% hallucination flag), ARC-AGI-3-class novel puzzles and long-horizon autonomous agents.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing OpenAI "Introducing GPT-5.5", plus Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cursor/Cognition and leaderboards); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
