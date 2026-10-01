# MiniMax M3 — findings by Qwen 3.8 Flash

- Source: MiniMax / MiniMax M3 (`minimax-ai/minimax-m3`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3 (base, non-reasoning)
- **Short description:** MiniMax's flagship open-weight MoE (~230B total / 9.8B active, sparse attention) — a near-free $0.30/$1.20 multimodal model with strong tool-calling (τ² 88.9%, Harvey LAB 88.4%) and video/doc vision, but the base non-reasoning variant collapses on hard long-horizon autonomy (OSWorld 2.0 4.6%, TB 4.0 2.0%) and abstains heavily (16.7% accuracy, 18.4% hallucination).
- **Provider / access:** MiniMax API (`minimax-m3`); open weights `MiniMaxAI/MiniMax-M3` (HF); no Zen Free ID. Base non-reasoning variant; tool calls.
- **Release / knowledge:** 2026 (MiniMax M3 blog + HF model card); knowledge cutoff not disclosed.
- **IDs:** `minimax-ai/minimax-m3`; HF `MiniMaxAI/MiniMax-M3`.
- **Context window:** 1,048,576 (1M) in / 512K out (curated meta; BenchLM confirms 1M).
- **Modalities:** text, image, video in; text out; tool calls. No audio-in, no non-text output.
- **Pricing (as of 2026-10-02):** Paid $0.30 / $1.20 per 1M; open-weight self-hostable.
- **Architecture:** open-weight sparse-attention MoE (~230B total / ~9.8B active).

### Raw benchmarks found

> Independently verified against BenchLM (56 of 618 rows; 55.16/100, #66 of 645), citing the MiniMax M3 blog and HF model card, plus Artificial Analysis, Vals AI, OSWorld 2.0, OpenHarmony Bench and OpenRouter (fetched 2026-10-02). BenchLM flags partial coverage; base variant is **Non-Reasoning**.

Agent / tool use:

- τ²-bench **88.9%**; AA Harvey LAB **88.4%**; BrowseComp 83.5%; MCP Atlas 74.2%; Claw-Eval 74.5%; BankerToolBench 76.1%; GDPval rubrics 74.7%
- Terminal-Bench 2.1 66.0% (Vals 53.6, AA 65.2) — under the 88 ref
- **Hard autonomy collapses:** OSWorld 2.0 4.6%, AA Terminal-Bench 4.0 2.0%, GDP.pdf 9.8%, AnalystAgent 10.0%, AA AutomationBench 21.3%, Tau3 Banking 15.3%, GDPval-AA 1230 (normalized 36.5%)

Reasoning / knowledge:

- GPQA-Diamond 92.9/92.7%; **AA-HLE 39.0%** (just under the 40% bar); MMLU-Pro (Vals) 84.2; AA-LCR 83.0; IFBench 82.9
- USAMO 2026 **85.7%** — strong contest math
- Intelligence Index **29.2** (low, non-reasoning); CritPt **3.7%**; MLCR-AA 17.2
- Omniscience Index 1.4 / Accuracy 16.7% / Hallucination **18.4%** — heavy abstention (rarely guesses, but rarely right unaided)

Coding:

- SWE-bench Verified 80.5%; LiveCodeBench (Vals) 82.2%; SWE-bench (Vals) 75.0%; SWE-bench Pro 59.0%
- AA Coding Index 58.6% (low); AA-SciCode 47.1% (under ref); NL2Repo 42.1%; VIBE V2 50.1%; KernelBench Hard 28.8%

Multimodal / long context:

- Video-MME (subtitle) **85.4%**; VideoMMMU 84.6%; OmniDocBench 1.5 **91.6%**; MMMU-Pro 78.1 (AA 78.6); OfficeQA Pro 45.1
- 1M window (AA-LCR 83.0 supportive; MLCR-AA 17.2 low; no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 72/100.** τ²-bench 88.9%, Harvey LAB 88.4%, BrowseComp 83.5% and BankerToolBench 76.1% are excellent single/short-horizon tool skills, but Terminal-Bench 2.1 66.0% is under the ref and the hard-autonomy cluster (OSWorld 2.0 4.6%, TB 4.0 2.0%, AutomationBench 21.3%, GDP.pdf 9.8%) shows it cannot sustain long agent loops.
- **Reasoning: 70/100.** GPQA-Diamond 92.9%, USAMO 85.7% and AA-LCR 83.0 are strong, but HLE 39.0% misses the bar, Intelligence Index 29.2 / CritPt 3.7 are very low for the non-reasoning variant, and 16.7% Omniscience accuracy (with a rare 18.4% hallucination) means it abstains rather than reasons unaided.
- **Context window: 94/100.** 1M-token window (512K out) meets the ≥1M tier and AA-LCR 83.0 is supportive; MLCR-AA 17.2 and no ≥98% MRCR proof keep it at/below the floor.
- **Multimodal: 85/100.** Text+image+video in with strong video (Video-MME 85.4, VideoMMMU 84.6) and document (OmniDocBench 91.6) work — deep in the +video band (75–90); OfficeQA 45.1, no audio-in and no non-text output hold it under the 90 tier.
- **Coding: 72/100.** SWE-bench Verified 80.5% and LiveCodeBench 82.2% (Vals) are good, but SWE-bench Pro 59.0%, Coding Index 58.6%, SciCode 47.1% (under ref) and KernelBench 28.8% keep the harder agentic/low-level code profile mid.
- **Cost efficiency: 96/100.** $0.30 / $1.20 per 1M is near-free hosted pricing well under the $3/$15≈60 anchor, plus open-weight self-hosting; no hosted free tier on this slug. Cost is excluded from Overall.
- **Overall Score: 79/100.** Mean of Tool 72, Reasoning 70, Context 94, Multimodal 85, Coding 72 = 78.6 → 79. Best fit: enormous-value high-volume video/document understanding, tool-fluent short agents and math at ~$0.30/$1.20 self-hostable pricing — not for open-ended autonomous agents or unaided factual reasoning (the base non-reasoning variant abstains and collapses on long-horizon tasks); reach for the reasoning/thinking variant for those.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the MiniMax M3 blog and HF model card, plus Artificial Analysis, Vals AI, OSWorld 2.0, OpenHarmony Bench and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
