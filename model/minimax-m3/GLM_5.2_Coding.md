# MiniMax M3 — findings by GLM 5.2 Coding

- Source: MiniMax (`minimax-m3`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's open-weight M3 generation (#60 of 505 on BenchLM), successor to M2.7. Top use case: cheap long-context coding with solid document/video understanding.
- **Provider / access:** MiniMax API (`minimax-m3`); open weights on Hugging Face.
- **Release / knowledge:** Successor to MiniMax M2.7 (BenchLM family record); exact date and cutoff not published in the records checked.
- **IDs:** `minimax/minimax-m3`; no Free ID indicated on Zen in the sources checked (open weights are free to self-host).
- **Context window:** 1M tokens (BenchLM record).
- **Modalities:** Text, image, video input (Video-MME/VideoMMMU verified); text output; base variant is non-reasoning; tool calls; JSON mode via API.
- **Pricing (as of 2026-09-22):** Not published in the tables checked; M2.7 listed $0.30/$1.20 per 1M — cost scored provisionally at that tier. Open weights allow self-hosting.
- **Architecture:** Open weights (HF; parameter count not stated in the records checked; M2.7 was 229B/10B MoE).

### Raw benchmarks found

> Verified via BenchLM model record (50 of 481 benchmarks covered, 2026-09-22).

Agent / tool use:

- Terminal-Bench 2.1: **66.0%** (BenchLM; Vals harness 53.6%; terminalBenchHard 42.4%)
- Tau2-Bench: **88.9%** (τ²-bench, BenchLM); Tau3: no verified public score found
- GDPval-AA: **1304 Elo** (BenchLM; normalized 36.5%; GDPval rubrics 74.7%)
- Claw-Eval: **74.5%** (BenchLM)
- Toolathon: no verified public score found; MCP-Atlas: **74.2%** (BenchLM)
- BrowseComp: **83.5%**; OSWorld-Verified: **70.1%**; AA Harvey LAB: **88.4%**; BankerToolBench: **76.1%**; AA Agentic Index: **30.8%** (all BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (AA; Vals harness 92.7%)
- HLE: **39.0%** (AA-HLE, BenchLM)
- LCR / MLCR: **83.0%** (AA-LCR) / **17.2%** (MLCR-AA)
- CritPt: **3.7%** (BenchLM)
- Artificial Analysis Intelligence Index: **29.2** (BenchLM — non-reasoning base)
- Omniscience Index: **1.4%** with Accuracy **16.7%** / Hallucination Rate **18.4%** (BenchLM — weak knowledge floor); MMLU-Pro (Vals): **84.2%**; USAMO 2026: **85.7%**

Coding:

- SWE-bench Verified / SWE-Pro: **80.5% / 59%** (both BenchLM)
- LiveCodeBench: **82.2%** (Vals harness, BenchLM)
- SciCode / AA-SciCode: **47.1%** (BenchLM)
- Vibe Code Bench: **50.1%** (VIBE V2, BenchLM)
- DeepSWE / Coding Index / other: no DeepSWE score found; **58.6%** AA Coding Index (BenchLM); SVG-Bench 63.7%; NL2Repo 42.1%; KernelBench Hard 28.8%

Long context:

- 1M window verified (BenchLM); no MRCR/RULER number published — AA-LCR 83.0% is the closest proxy.

### Normalized scores (1–100)

- **Tool use: 72/100.** τ² 88.9%, Claw-Eval 74.5%, MCP-Atlas 74.2% and BrowseComp 83.5% are strong; capped by GDPval 1304, Agentic Index 30.8% and TB2.1 Vals 53.6%.
- **Reasoning: 76/100.** GPQA 92.9%, AA-LCR 83.0% and USAMO 85.7% are solid; capped by Index 29.2 (non-reasoning base), CritPt 3.7%, MLCR 17.2% and Omniscience 1.4%.
- **Context window: 100/100.** Verified 1M-token window = top tier (≥1M).
- **Multimodal: 82/100.** Text + image + video input (Video-MME 85.4%, VideoMMMU 84.6%, OmniDocBench 91.6%, MMMU-Pro 78.1%); text-only output, no speech input.
- **Coding: 76/100.** SWE-V 80.5%, LiveCodeBench 82.2% and React Native-class scores solid; capped by Coding Index 58.6%, SWE Pro 59% and SciCode 47.1%.
- **Cost efficiency: 90/100.** Provisional: at M2.7-tier pricing (~$0.30/$1.20) plus open weights, capability-per-dollar is excellent.
- **Overall Score: 81.2/100.** (72+76+100+82+76)/5 — a value long-context workhorse: 1M window, video in, near-frontier SWE-V at budget price.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/GLM-5.2-Coding)** — 2026-09-22
- Method: public internet research (BenchLM model record) on 2026-09-22; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
