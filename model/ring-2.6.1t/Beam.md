# Ring 2.6.1T — findings by Beam

- Source: InclusionAI/Ring 2.6.1T, `inclusionai/ring-2.6.1t`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring 2.6.1T
- **Short description:** InclusionAI's trillion-scale reasoning MoE (May 8, 2026): 1T total / ~63B active, 262K context. BenchLM not computed. AA Intelligence Index 30.6. GPQA Diamond 85.7%, HLE 21.6%, SciCode 42.4%, TerminalBench Hard 28.8%, τ²-Bench 92.4%, IFBench 44.6%, AA-LCR 67.3%. Open weights (MIT). $0.30/$2.50 per 1M.
- **Provider / access:** inclusionAI API; OpenRouter; HuggingFace.
- **Release / knowledge:** Released 2026-05-08; knowledge cutoff not stated.
- **IDs:** `inclusionai/ring-2.6.1t`
- **Context window:** 262,144 tokens; max output 65,536.
- **Modalities:** text in; text out; reasoning yes (high/xhigh); tool calling yes. Open weights (MIT).
- **Pricing (as of 2026-10-17):** $0.30 / 1M input, $2.50 / 1M output; paid.
- **Architecture:** MoE, 1T total / ~63B active, 7:1 hybrid Lightning Attention + MLA, 262K context, MIT. Reasoning companion to Ling 2.6 1T.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- τ²-Bench Telecom: **92.4%** (BenchmarkList)
- GDPval-AA v2: **920** / **21.0%** (Atlas LLM tracker)
- Terminal-Bench Hard: **28.8%** (BenchmarkList)
- Claw-Eval: **63.8%** (BenchmarkList)
- PinchBench: **87.60%** (InclusionAI official)
- ClawEval: **63.82%** (InclusionAI official)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA Diamond: **85.7%** (BenchmarkList)
- HLE: **21.6%** (BenchmarkList)
- AA Intelligence Index: **30.6** (Atlas LLM tracker)
- AA-LCR: **67.3%** (BenchmarkList)
- CritPt: **3.7%** (Atlas LLM tracker, avg@5)
- ARC-AGI-2: **66.18** (InclusionAI official)
- AIME 2026: **95.83** (InclusionAI official)
- GPQA Diamond: **88.27** (InclusionAI official)

Coding:

- Coding public-lane (BenchLM): not individually reported
- SciCode: **42.4%** (BenchmarkList)
- Terminal-Bench 2.1: **43.1%** (BenchmarkList)
- AA Coding Index: **42.8** (Atlas LLM tracker)

Long context:

- 262K window; AA-LCR **67.3%** (BenchmarkList); MRCR not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 64/100.** τ²-Bench 92.4%, Terminal-Bench Hard 28.8%, GDPval-AA 920, ClawEval 63.8%, PinchBench 87.6%; caps at Terminal-Bench Hard 28.8%.
- **Reasoning: 68/100.** GPQA 85.7%, HLE 21.6%, AA Intelligence 30.6, AA-LCR 67.3%, CritPt 3.7%, ARC-AGI-2 66.18, AIME 95.83; caps at CritPt 3.7%.
- **Context window: 64/100.** 262K window; AA-LCR 67.3%; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 62/100.** SciCode 42.4%, Terminal-Bench 2.1 43.1%, AA Coding 42.8%; caps at no published SWE-bench/LiveCodeBench.
- **Cost efficiency: 88/100.** $0.30/$2.50 per 1M.
- **Overall Score: 59.6/100.** Mean of five quality dims (BenchLM not computed, AA Intelligence 30.6); best-fit for open-weight reasoning at mid cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (InclusionAI official, BenchmarkList, BenchLeader, DesignForOnline, GIGAZINE, Opper, Franklin AI, Atlas LLM tracker); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Ring 2.6.1T is the reasoning companion to Ling 2.6 1T. MIT open weights. 1T total / ~63B active. Superseded by Ring 3.0.<|end|>>2>