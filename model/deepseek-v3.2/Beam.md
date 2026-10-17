# DeepSeek V3.2 — findings by Beam

- Source: DeepSeek/DeepSeek V3.2, `deepseek-ai/deepseek-v3.2`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek's open-weight model (Dec 1, 2025): 671B MoE, 128K context. BenchLM 50.2 (#95 of 954). V3.2-Speciale: gold-medal IMO/CMO/ICPC/IOI 2025. Thinking in tool-use. Open weights (MIT). $0.28/$0.42 per 1M.
- **Provider / access:** DeepSeek API; OpenRouter; HuggingFace.
- **Release / knowledge:** Released 2025-12-01; knowledge cutoff not stated.
- **IDs:** `deepseek-ai/deepseek-v3.2`
- **Context window:** 128,000 tokens; max output not stated.
- **Modalities:** text in; text out; reasoning yes (thinking mode); tool calling yes. Open weights (MIT).
- **Pricing (as of 2026-10-17):** $0.28 / 1M input, $0.42 / 1M output (peak); $0.007 cache hit; paid.
- **Architecture:** MoE, 671B total, 128K context, DeepSeek Sparse Attention (DSA), MIT.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): Coming soon (not computed)
- Claw-Eval: **40.2%** (BenchLM)
- VITA-Bench: **18.5%** (BenchLM)
- Gert Labs: **29.57%** (BenchLM)
- Terminal-Bench 2.0: not reported for V3.2
- BrowseComp: not reported for V3.2
- AA Intelligence Index: **66** (DeepInfra, Artificial Analysis)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **57.2** (Unranked · 2 rankable rows)
- GPQA: not reported for V3.2 (V3.2-Exp: 79.9%)
- MMLU-Pro: not reported for V3.2 (V3.2-Exp: 85.0%)
- HLE: not reported for V3.2 (V3.2-Exp: 19.8%)
- AA Intelligence Index: **66** (DeepInfra)
- LongBench v2: not reported for V3.2
- AI-Needle: not reported for V3.2
- IFBench: **58.2%** (BenchLM, #82/148)

Coding:

- Coding public-lane (BenchLM): **28.5** (Estimated · #99/150)
- SWE-bench Verified: **70.0%** (LLMReference, V3.2) / **66%** (V3.1) / **67.8%** (V3.2-Exp)
- LiveCodeBench: **56.4%** (V3.1, V3.2-Exp: 74.1%)
- SWE-Rebench: **60.9%** (BenchLM)
- React Native Evals: **71.5%** (BenchLM)
- Codeforces: **2046** (V3.2-Exp)

Long context:

- 128K window; MRCR: not reported. (V3.2-Exp introduced DSA for long-context efficiency.)

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 56/100.** Claw-Eval 40.2%, VITA-Bench 18.5%, Gert Labs 29.57%; caps at VITA-Bench 18.5%.
- **Reasoning: 62/100.** AA Intelligence 66, IFBench 58.2%; caps at no published GPQA/HLE/MMLU-Pro for V3.2 (V3.2-Exp: GPQA 79.9%, MMLU-Pro 85.0%, HLE 19.8%).
- **Context window: 56/100.** 128K window; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 60/100.** SWE-bench 70.0%, LiveCodeBench 56.4%, SWE-Rebench 60.9%, React Native 71.5%; caps at SWE-Rebench 60.9%.
- **Cost efficiency: 94/100.** Very cheap $0.28/$0.42 per 1M.
- **Overall Score: 54.8/100.** Mean of five quality dims (BenchLM 50.2, AA Intelligence 66); best-fit for ultra-cheap reasoning at low cost. (Superseded by V4 Flash/Pro.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (DeepSeek official, BenchLM, DeepInfra, LLMReference, GitHub); scores are normalized 1–100 interpretations, not official vendor scores. DeepSeek V3.2-Speciale (gold-medal IMO/CMO/ICPC/IOI 2025) is a separate variant with no tool-use support.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. DeepSeek V3.2 is superseded by V4 Flash (Apr 24, 2026) and V4.1 Flash (Sep 10, 2026). MIT license, open weights.<|end|>>2>