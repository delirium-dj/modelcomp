# Qwen 3.7 Plus — findings by Qwen 3.8 Flash

- Source: Alibaba / Qwen 3.7 Plus (`opencode/qwen-3.7-plus`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's Plus-tier multimodal agent model (Qwen3.7-Plus launch) — olympiad-strong math and clean instruction following, but independent agentic/AA scores trail the vendor-screenshot numbers and long-horizon GDPval is weak.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope (`qwen3.7-plus`), also on OpenCode Zen (`opencode/qwen-3.7-plus`). Reasoning + tool calls.
- **Release / knowledge:** 2026 (Alibaba Cloud blog "Qwen3.7-Plus: Multimodal Agent Intelligence"); knowledge cutoff not disclosed.
- **IDs:** `opencode/qwen-3.7-plus` / DashScope `qwen3.7-plus`.
- **Context window:** BenchLM and the Alibaba launch list **1M**; curated `meta.json` says "128K total" — conflict, resolved in favour of the 1M evidence below.
- **Modalities:** text, image, video (and document/OCR) in; text out; reasoning on; tool calls. curated `meta.json` lists "Text in/out" only — conflict, resolved in favour of the extensive multimodal evidence.
- **Pricing (as of 2026-10-02):** Plus-tier "standard pricing" (low/mid, exact per-1M rate not published in curated meta).
- **Architecture:** proprietary hosted Plus tier (Qwen open-weight siblings exist separately).

### Raw benchmarks found

> Independently verified against BenchLM (70 of 618 rows; 56.54/100, #59 of 645), citing the Alibaba Cloud Qwen3.7-Plus launch benchmarks, Artificial Analysis, Vals AI, OSWorld 2.0 and OpenRouter (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall).

Agent / tool use:

- τ²-bench **93.0%**; MCP Atlas 73.2%; BFCL v4 72.9%; AndroidWorld **81.0%**; OSWorld-Verified 73.3%
- Terminal-Bench 2.0 70.3% but **Terminal-Bench 2.1 (Vals) only 52.8%** (under the 88 ref)
- **GDPval-AA 886 (normalized 12.8%)** and AA Agentic Index **19.7%**, OSWorld 2.0 **2.8%**, APEX-Agents-AA 22.4% — independent long-horizon scores are weak

Reasoning / knowledge:

- GPQA-Diamond 90.3/90.0%; HLE **34.7%** (AA 35.6%) — under the 40% bar; MMLU-Redux 94.5%; MMLU-Pro 88.5%; SuperGPQA 71.4%
- HMMT Feb 2026 **92.9%** / IMOAnswerBench 86.0% — strong olympiad math; Intelligence Index **25.2** (low); CritPt 9.1%
- Omniscience Index 1.1 / Accuracy 22.5% / Hallucination 27.7% (abstains rather than guesses, but low raw accuracy)

Coding:

- LiveCodeBench **89.6%**; SWE-bench Verified 77.7%; SWE Multilingual 75.8%; SWE-bench Pro 57.6%
- AA Coding Index **55.9%** (low); SciCode 51.3 / AA-SciCode 46.1 (under the 55 ref); NL2Repo 41.1%

Multimodal / long context:

- Video-MME (subtitle) **88.0%**; VideoMMMU 85.4%; MLVU 87.4%; CharXiv 85.9%; MathVision 90.3%; RealWorldQA 86.9%
- OCRBench V2 70.7%; OmniDocBench 1.5 **91.4%**; ScreenSpot Pro 79.0%; AA-MMMU-Pro 80.5%
- **MRCRv2 91.7%** at 1M window (AA-LCR 73.0) — strong long-context retrieval.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 68/100.** τ²-bench 93.0%, MCP Atlas 73.2% and AndroidWorld 81.0% are strong single-turn tool skills, but Terminal-Bench 2.1 (Vals) 52.8% is far under the 88 ref and the independent long-horizon cluster — GDPval-AA 886 (12.8% normalized), Agentic Index 19.7%, OSWorld 2.0 2.8%, APEX 22.4% — shows vendor screenshots overstate real agentic reliability.
- **Reasoning: 74/100.** GPQA-Diamond 90.3%, MMLU-Redux 94.5% and olympiad math (HMMT 92.9%, IMO 86.0) are genuinely strong, but HLE 34.7% misses the 40% bar and Intelligence Index 25.2 / CritPt 9.1% / Omniscience accuracy 22.5% are low — solid textbook recall, weak frontier reasoning depth.
- **Context window: 95/100.** 1M-token window (per BenchLM + launch) with **MRCRv2 91.7%** retrieval is a strong long-context showing; short of 100 (no ≥98% at 512K+) and the curated meta conflicts at 128K, so the ≥1M band floor.
- **Multimodal: 85/100.** Text+image+video+document in with a broad, well-populated multimodal suite (Video-MME 88.0, MLVU 87.4, CharXiv 85.9, OmniDocBench 91.4) — deep in the +video band (75–90); no audio-in or non-text-output rows, so below the 90 tier.
- **Coding: 74/100.** LiveCodeBench 89.6% and SWE-bench Verified 77.7% are good, but AA Coding Index 55.9%, SciCode 46.1% (under ref) and NL2Repo 41.1% keep the agentic/repo-code profile mid.
- **Cost efficiency: 82/100.** Plus-tier "standard pricing" is low-to-mid and no free-usage flag is set in curated meta; exact per-1M rates unpublished — provisional mid-band. Cost is excluded from Overall.
- **Overall Score: 79/100.** Mean of Tool 68, Reasoning 74, Context 95, Multimodal 85, Coding 74 = 79.2 → 79. Best fit: low-cost multimodal document/video understanding, math and long-context retrieval at 1M where tool-calls are single-turn — for sustained autonomous agent loops or frontier-depth reasoning, its vendor-screenshot lead does not hold up against the AA/Vals numbers.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Alibaba Cloud Qwen3.7-Plus launch benchmarks, plus Artificial Analysis, Vals AI, OSWorld 2.0 and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
