# Gemini 3.8 Flash — findings by Fledge Alpha

- Source: Google (`gemini-3.8-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's Sept 2, 2026 production Flash upgrade (post-training of 3.7 Flash) targeting coding/agentic work at Flash pricing.
- **Provider / access:** Gemini API (`gemini-3.8-flash`), Vertex AI; Responses/Chat-compatible via Google AI Studio.
- **Release / knowledge:** 2026-09-02; knowledge cutoff Mar 2026 (some domains Jan 2025).
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, image, audio, video, PDF in; text out; thinking low/medium/high; tool calls, search grounding, computer use (preview).
- **Pricing (as of 2026-10-02):** Intro $0.75/M in, $3.75/M out, $0.075/M cached (through 2026-12-31); standard $1.50/$7.50 from 2027-01-01; Batch/Flex 50% off.
- **Architecture:** proprietary; not a new pretraining run (per Google).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Google) / **87.6%** (AA) / **81.3%** (vals.ai) — independent runs cluster 81–88
- Terminal-Bench 4.0: **19.1%** (Google) — weak on the harder version
- OSWorld 2.0: **59.0%** (Google)
- Vals Finance Agent V2 / Harvey Legal Agent: outperforms 3.7 Flash (Google claim)

Reasoning / knowledge:

- GPQA Diamond: **94.4%** (vals.ai) / 95.3% (AA)
- MMLU-Pro: **90.2%** (vals.ai)
- Humanity's Last Exam: **47.8%** (AA no-tools); HLE-Verified **54.9%** (Google)
- AA Intelligence Index: **59** at high effort (≈$0.58/task)

Coding:

- DeepSWE v1.1: **73.7–74.0%** (Google / DeepSWE board, ties Opus 5)
- SWE-bench Verified: **80.0%** (vals.ai)
- LiveCodeBench: **89.5%** (vals.ai)
- AA-SciCode: **56.6%**

Long context:

- 1M window; no public MRCR figure; DeepSWE run at 400K context.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 ~88% average of independent runs is strong; Terminal-Bench 4.0 at 19.1% shows a hard cliff on harder long-horizon agent work.
- **Reasoning: 84/100.** GPQA 94.4% and MMLU-Pro 90.2% verified; HLE-Verified 54.9% is competitive for a flash tier.
- **Context window: 92/100.** 1M-token window at flash prices; 64K output cap is below the 128K frontier norm.
- **Multimodal: 95/100.** Full native text/image/audio/video/PDF input — broadest input coverage of the field; text-only output.
- **Coding: 80/100.** DeepSWE 74% ties Opus 5 and LCB 89.5% is strong; Terminal-Bench 4.0 weakness tempers it.
- **Cost efficiency: 88/100.** $0.75/$3.75 introductory is very cheap but expires 2026-12-31; ~30% higher token usage per task partially offsets.
- **Overall Score: 87/100.** Mean of the five quality dims; best fit as the default high-volume multimodal agent model at Flash pricing.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Google launch blog/model card, vals.ai, Artificial Analysis, DeepSWE board); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
