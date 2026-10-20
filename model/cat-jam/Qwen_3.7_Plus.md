# Cat Jam — findings by Qwen 3.7 Plus

- Source: Stealth / Reflection AI (`cat-jam`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Cat Jam
- **Short description:** Stealth deployment of Reflection AI's Beam model on OpenCode Zen. Confirmed to be identical to Beam (501B/23B-active MoE, 1M context, text-only). Identity revealed by community and Reflection AI. Free promotional tier. No independent benchmarks separate from Beam.
- **Provider / access:** OpenCode Zen `opencode/cat-jam` (free stealth tier); also available as `opencode/beam` and `reflection/beam-free`; Vercel AI Gateway `stealth/cat-jam`.
- **Release / knowledge:** Stealth preview 2026-10; publicly identified as Beam on 2026-10-16 per ArtificialWatch and Reflection AI confirmation.
- **IDs:** `opencode/cat-jam` (OpenCode Zen — free stealth tier); `stealth/cat-jam` (Vercel AI Gateway).
- **Context window:** 1,048,576 tokens (1M) native; 131,072 max output (262K at launch) (per meta.json).
- **Modalities:** Text in/out only; reasoning mode enabled; tool calling supported; no multimodal input.
- **Pricing (as of 2026-10-20):** Free ($0) on OpenCode Zen, OpenCode Go, and Vercel AI Gateway during stealth preview; identity now disclosed as Beam.
- **Architecture:** Sparse MoE, 501B total / 23B active per token (identical to Beam); trained on 23.8T tokens with 10.5K-GPU RL run; Apache 2.0 open weights released 2026-10-16.

### Raw benchmarks found

> **Identity note:** Cat Jam is confirmed to be Reflection AI's Beam model running in stealth mode. ArtificialWatch (2026-10-16) reports: "ran in stealth as cat-jam (OpenCode) and MissingNo (Nous Portal), per Reflection." ziva.sh confirms: "Cat Jam is another name for Beam, not another choice." Benchmarks below are from Beam's public evaluation since cat-jam is the same model.
>
> Sources: Beam 1.0 model card (Hugging Face), BenchLM (benchlm.ai/models/reflection-beam, 2026-10-20), Artificial Analysis, Trending Topics EU. Coverage: 32 of 666 benchmarks (per BenchLM — good coverage).

Agent / tool use:

- MCP Atlas: **80.8%** (Beam model card via BenchLM — excellent tool use)
- BrowseComp: **76.8%** (Beam model card via BenchLM — strong web browsing)
- DeepSearchQA: **80.5%** (Beam model card via BenchLM — strong deep research)
- τ³-bench: **36.1%** (Beam model card via BenchLM — moderate)
- AA AutomationBench: **48.5%** (Artificial Analysis via BenchLM)
- GDPval-AA: **33.9%** normalized / **1177 Elo** (Artificial Analysis via BenchLM)
- AA Terminal-Bench 4.0: **3.0%** (Artificial Analysis via BenchLM — catastrophic)

Reasoning / knowledge:

- GPQA Diamond: **90.6%** (Beam model card via BenchLM — frontier-level)
- AIME26: **97.7%** (Beam model card via BenchLM — exceptional math)
- HLE w/ tools: **51.1%** (Beam model card via BenchLM — strong)
- HLE w/o tools: **36.0%** (Beam model card via BenchLM)
- AA-LCR: **78.2%** (Beam model card via BenchLM — strong long-context reasoning)
- CritPt: **16.3%** (Beam model card via BenchLM — moderate)
- AA Intelligence Index: **30.3%** (Artificial Analysis)
- LongBench v2: **67.5%** (Beam model card via BenchLM)
- IFBench: **79.6%** (Beam model card via BenchLM — strong instruction following)
- AA-Omniscience Accuracy: **33.1%** (Artificial Analysis via BenchLM)
- AA-Omniscience Hallucination Rate: **47.2%** (Artificial Analysis via BenchLM)
- AA-Omniscience Index: **1.5%** (Artificial Analysis via BenchLM — very poor reliability)

Coding:

- SWE-bench Verified: **81.6%** (Beam model card via BenchLM — frontier-level)
- SWE-bench Pro: **66.1%** (Beam model card via BenchLM)
- SWE-bench Multilingual: **78.3%** (Beam model card via BenchLM)
- Terminal-Bench 2.1: **80.1%** (Beam model card via BenchLM — exceptional)
- DeepSWE: **43.3%** (Beam model card via BenchLM)
- SciCode: **49.2%** (Beam model card via BenchLM)
- SWE-Atlas Codebase QnA: **31.8%** (Beam model card via BenchLM)

Multimodal & Grounded:

- Text-only model. No multimodal benchmarks.

Long context:

- AA-LCR: **78.2%** at 1M context (Beam model card via BenchLM — strong)
- LongBench v2: **67.5%** (Beam model card via BenchLM)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Scores are identical to Beam since cat-jam is the same model.

- **Tool use: 78/100.** MCP Atlas 80.8%, BrowseComp 76.8%, DeepSearchQA 80.5% are excellent. IFBench 79.6% shows strong instruction following. However, τ³-bench 36.1% is moderate, GDPval-AA 33.9% is weak, AA Terminal-Bench 4.0 3.0% is catastrophic. Capped by AA Terminal-Bench 4.0 collapse and weak GDPval-AA.
- **Reasoning: 75/100.** GPQA Diamond 90.6% is frontier-level. AIME26 97.7% is exceptional math reasoning. HLE w/ tools 51.1% is strong. AA-LCR 78.2% is good long-context reasoning. CritPt 16.3% is moderate. However, AA-HLE 34.7% and Omniscience Accuracy 33.1% are weak. Capped by moderate CritPt and poor Omniscience reliability.
- **Context window: 95/100.** 1M tokens native — top tier. AA-LCR 78.2% confirms strong effective long-context reasoning. LongBench v2 67.5% is solid. Docked 5 for served window limited to 256K on beta at launch.
- **Multimodal: 15/100.** Text-only model. No image/audio/video input.
- **Coding: 82/100.** SWE-bench Verified 81.6% is frontier-level (top 5 globally). Terminal-Bench 2.1 80.1% is exceptional. SWE-bench Multilingual 78.3% is excellent. SWE-bench Pro 66.1% is strong. SciCode ~49% is moderate. DeepSWE 43.3% is moderate. SWE-Atlas 31.8% is weak. AA Terminal-Bench 4.0 3.0% is catastrophic. Capped by AA Terminal-Bench 4.0 anomaly and moderate DeepSWE/SciCode.
- **Cost efficiency: 100/100.** Free on OpenCode Zen during stealth preview; identity now disclosed as Beam with Apache 2.0 open weights.
- **Overall Score: 69/100.** Mean of five non-cost dims: (78 + 75 + 95 + 15 + 82) / 5 = 69.0, half-up = 69. Frontier open-weight coding model (identical to Beam): SWE-bench Verified 81.6%, Terminal-Bench 2.1 80.1%, GPQA Diamond 90.6%, AIME26 97.7%, 1M context — at zero cost during stealth preview. However, held back by text-only modality, catastrophic AA Terminal-Bench 4.0 (3.0%), weak Omniscience (1.5%), and moderate DeepSWE/SciCode. Best fit for: cost-sensitive enterprise coding agents, math/reasoning workloads, and sovereign AI deployments where cost and openness matter.

---

## Signature

- Provided by: **Qwen 3.7 Plus (opencode/qwen-3.7-plus)** — 2026-10-20
- Method: public internet research across ArtificialWatch, ziva.sh, Reflection AI announcements, Beam model card on Hugging Face, BenchLM, and Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
