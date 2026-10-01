# GPT-5.6 Terra — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-5.6 Terra (`openai/gpt-5.6-terra`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's flagship 5.6 generation model optimized for ground-up agentic research, tool usage, long-context reasoning, and code synthesis — elite math/repo coding with a severe Omniscience factuality flag.
- **Provider / access:** OpenAI Responses API (`gpt-5.6-terra`); no OpenCode Zen free ID (`noFreeId`). Reasoning + tool calls.
- **Release / knowledge:** 2026 (GPT-5.6 family, "Introducing GPT-5.6"); knowledge cutoff not disclosed.
- **IDs:** `openai/gpt-5.6-terra`.
- **Context window:** 1,048,576 (1M) curated meta; BenchLM lists 1.05M.
- **Modalities:** text, image, audio, video, PDF in; text out (curated meta); reasoning on; tool calls. No non-text output.
- **Pricing (as of 2026-10-02):** Paid-tier pricing (exact rate not in curated meta; GPT-5.6-family band — treat Cost as provisional).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (52 of 618 rows), citing OpenAI "GPT-5.6" and the GPT-5.6 system card, Artificial Analysis, Vals AI, ARC Prize, Cognition/Devin, Cursor, NeoCognition and VulcanBench (fetched 2026-10-02).

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (OpenAI; Vals 77.5%) — but TB 3.0 only 20.8%
- BrowseComp: **87.5%**; τ²-bench 86.3%; OSWorld 2.0 50.2%; CyberGym 81.8%
- GDPval-AA: **1583** (AA normalized 46.6%); Toolathlon 53.1%; AA ITBench 51.0%; APEX-Agents 38.9%
- AA Agentic Index 43.7%; ExploitGym 23.2%; ApprenticeBench 16%

Reasoning / knowledge:

- GPQA / GPQA-Diamond: **92.9%** (AA 92.5; Vals 90.9); HLE-Verified **51.1%** (AA 42.9)
- ARC-AGI-2: **83.9%** (ARC Prize) — ARC-AGI-3 only 0.8%
- FrontierMath (legacy / v2 T1-3 / Tier-4): **84.9% / 84.9% / 68.3%** (OpenAI) — elite
- Intelligence Index **55.0**; AA-LCR 83.0; CritPt 30.0; HealthBench Pro 57.7 / Hard 32.7
- Omniscience Index **0.1** / Accuracy 46.8% / **Hallucination 87.9%** (severe flag); MMLU-Pro (Vals) 86.7; IFBench 71.2

Coding:

- SWE-bench (Vals): **95.4%**; Terminal-Bench 2.1 87.4%; LiveCodeBench (Vals) 85.9%
- AA Coding Index 76.7%; VulcanBench v3 87.0; DeepSWE **69.6%** (under 74 ref); SWE-bench Pro 63.4%
- FrontierCode 1.1 Extended 55.8% (Devin); AA-SciCode 55.0%; CursorBench 3.2 64.9% / 4.0 41.3%

Multimodal / long context:

- MMMU-Pro 80.7 (w/ Python 82.0, AA 80.7) — the only published visual row; omni-input per curated meta
- AA-LCR 83.0 at 1.05M window (no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 88/100.** Terminal-Bench 2.1 87.4% meets the ~88 ref with BrowseComp 87.5%, τ² 86.3% and CyberGym 81.8%; GDPval-AA 1583 (under 1750), TB 3.0 20.8%, Agentic Index 43.7% and ApprenticeBench 16% keep it a notch under the Sol-tier 90s.
- **Reasoning: 88/100.** GPQA-Diamond 92.9%, HLE-Verified 51.1%, ARC-AGI-2 83.9%, FrontierMath 68–85% and Index 55.0 are all high bars cleared; the Omniscience Index 0.1 with 87.9% hallucination rate and ARC-AGI-3 0.8% are a hard cap.
- **Context window: 96/100.** 1.05M-token window meets the ≥1M tier and AA-LCR 83.0 is strong, but no ≥98% long-context retrieval metric is reported, so short of 100.
- **Multimodal: 90/100.** Curated meta records text+image+audio+video+PDF in / text out — the audio/video band floor; published benchmark evidence is image-only (MMMU-Pro ~81–82) so it can't be rated higher.
- **Coding: 88/100.** SWE-bench (Vals) 95.4%, TB 87.4%, LiveCodeBench 85.9% and Coding Index 76.7% are top-tier; DeepSWE 69.6% (under 74 ref), SWE-bench Pro 63.4% and CursorBench 4.0 41.3% trim it.
- **Cost efficiency: 70/100.** Paid-tier GPT-5.6-family pricing (family sibling Sol is $1.25/$10); Terra's exact rate unverified, so a provisional band score. Cost is excluded from Overall.
- **Overall Score: 90/100.** Mean of Tool 88, Reasoning 88, Context 96, Multimodal 90, Coding 88 = 90.0 → 90. Best fit: flagship agentic research, long-context synthesis and repo coding with omni input; never trust ungrounded factual recall (Omniscience Index 0.1 / 87.9% hallucination) — always retrieve, and consider Sol for pure coding or newer 6-series for frontier agency.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing OpenAI GPT-5.6 and its system card, plus Artificial Analysis, Vals AI, ARC Prize, Cognition/Devin, Cursor, NeoCognition and VulcanBench); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
