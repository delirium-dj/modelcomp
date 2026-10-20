# Beam — findings by Qwen 3.7 Plus

- Source: Reflection AI (`beam`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam
- **Short description:** Reflection AI's first frontier open-weight model. A 501B/23B-active sparse MoE trained on 23.8T tokens with 1M native context. Text-only, optimized for coding, reasoning, and agentic tasks via high-compute RL. Apache 2.0 license. Released October 5, 2026.
- **Provider / access:** Open weights on Hugging Face (`reflection/Beam-1.0-501B-A23B`); Free OpenCode Zen tier `opencode/beam`; AA provider median ~$0.70/$2.10 per 1M.
- **Release / knowledge:** 2026-10-05; knowledge cutoff not publicly stated.
- **IDs:** `opencode/beam` (OpenCode Zen — free tier).
- **Context window:** 1,000,000 tokens native (1M); 256K served on beta; 128K max output (per meta.json and BenchLM).
- **Modalities:** Text in/out only; reasoning mode enabled; tool calling supported; no multimodal input.
- **Pricing (as of 2026-10-20):** Free on OpenCode Zen; open weights Apache 2.0 (self-host free); AA provider median ~$0.70/$2.10 per 1M.
- **Architecture:** Sparse MoE, 501B total / 23B active per token; trained with 10.5K-GPU RL run; pretrained on 23.8T tokens; open weights under Apache 2.0.

### Raw benchmarks found

> Sources: Reflection Beam 1.0 BF16 model card (Hugging Face), BenchLM (benchlm.ai/models/reflection-beam, 2026-10-20), Artificial Analysis (artificialanalysis.ai), TechCrunch (2026-10-05). Coverage note: BenchLM covers 32 of 666 benchmarks — good coverage for an open-weight model.

Agent / tool use:

- MCP Atlas: **80.8%** (Reflection model card via BenchLM — excellent tool use)
- BrowseComp: **76.8%** (Reflection model card via BenchLM — strong web browsing)
- DeepSearchQA: **80.5%** (Reflection model card via BenchLM — strong deep research)
- τ³-bench: **36.1%** (Reflection model card via BenchLM — moderate)
- AA AutomationBench: **48.5%** (Artificial Analysis via BenchLM)
- AA Briefcase Elo: **976** (Artificial Analysis via BenchLM)
- GDPval-AA: **33.9%** normalized / **1177 Elo** (Artificial Analysis via BenchLM)
- GDP.pdf: **11.6%** (Artificial Analysis via BenchLM — weak document reasoning)
- AA Terminal-Bench 4.0: **3.0%** (Artificial Analysis via BenchLM — catastrophic)

Reasoning / knowledge:

- GPQA Diamond: **90.6%** (Reflection model card via BenchLM — frontier-level)
- AIME26: **97.7%** (Reflection model card via BenchLM — exceptional math)
- HLE w/ tools: **51.1%** (Reflection model card via BenchLM — strong)
- HLE w/o tools: **36.0%** (Reflection model card via BenchLM)
- AA-HLE: **34.7%** (Artificial Analysis via BenchLM)
- AA-LCR: **78.2%** (Reflection model card via BenchLM — strong long-context reasoning)
- CritPt: **16.3%** (Reflection model card via BenchLM — moderate)
- AA Intelligence Index: **30.3%** (Artificial Analysis)
- LongBench v2: **67.5%** (Reflection model card via BenchLM)
- IFBench: **79.6%** (Reflection model card via BenchLM — strong instruction following)
- AA-Omniscience Accuracy: **33.1%** (Artificial Analysis via BenchLM)
- AA-Omniscience Hallucination Rate: **47.2%** (Artificial Analysis via BenchLM)
- AA-Omniscience Index: **1.5%** (Artificial Analysis via BenchLM)

Coding:

- SWE-bench Verified: **81.6%** (Reflection model card via BenchLM — frontier-level)
- SWE-bench Pro: **66.1%** (Reflection model card via BenchLM)
- SWE-bench Multilingual: **78.3%** (Reflection model card via BenchLM)
- Terminal-Bench 2.1: **80.1%** (Reflection model card via BenchLM — exceptional)
- DeepSWE: **43.3%** (Reflection model card via BenchLM)
- SciCode: **49.2%** (Reflection model card via BenchLM)
- AA-SciCode: **48.5%** (Artificial Analysis via BenchLM)
- SWE-Atlas Codebase QnA: **31.8%** (Reflection model card via BenchLM)

Multimodal & Grounded:

- Text-only model. No multimodal benchmarks.

Long context:

- AA-LCR: **78.2%** at 1M context (Reflection model card via BenchLM — strong)
- LongBench v2: **67.5%** (Reflection model card via BenchLM)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 78/100.** MCP Atlas 80.8%, BrowseComp 76.8%, DeepSearchQA 80.5% are excellent. IFBench 79.6% shows strong instruction following. However, τ³-bench 36.1% is moderate, GDPval-AA 33.9% is weak, AA Terminal-Bench 4.0 3.0% is catastrophic, and GDP.pdf 11.6% is poor. Capped by AA Terminal-Bench 4.0 collapse and weak GDP.pdf.
- **Reasoning: 75/100.** GPQA Diamond 90.6% is frontier-level. AIME26 97.7% is exceptional math reasoning. HLE w/ tools 51.1% is strong. AA-LCR 78.2% is good long-context reasoning. CritPt 16.3% is moderate. However, AA-HLE 34.7% and Omniscience Accuracy 33.1% are weak. Capped by moderate CritPt and poor Omniscience reliability.
- **Context window: 95/100.** 1M tokens native — top tier. AA-LCR 78.2% confirms strong effective long-context reasoning. LongBench v2 67.5% is solid. Docked 5 for served window limited to 256K on beta.
- **Multimodal: 15/100.** Text-only model. No image/audio/video input.
- **Coding: 82/100.** SWE-bench Verified 81.6% is frontier-level (top 5 globally). Terminal-Bench 2.1 80.1% is exceptional. SWE-bench Multilingual 78.3% is excellent. SWE-bench Pro 66.1% is strong. SciCode ~49% is moderate. DeepSWE 43.3% is moderate. SWE-Atlas 31.8% is weak. AA Terminal-Bench 4.0 3.0% is catastrophic. Capped by AA Terminal-Bench 4.0 anomaly and moderate DeepSWE/SciCode.
- **Cost efficiency: 92/100.** Free on OpenCode Zen; Apache 2.0 self-host; AA median ~$0.70/$2.10 per 1M is extremely cheap for frontier-level coding performance.
- **Overall Score: 69/100.** Mean of five non-cost dims: (78 + 75 + 95 + 15 + 82) / 5 = 69.0, half-up = 69. Frontier open-weight coding model: SWE-bench Verified 81.6%, Terminal-Bench 2.1 80.1%, GPQA Diamond 90.6%, AIME26 97.7%, 1M context, Apache 2.0 — at near-zero cost. However, held back by text-only modality, catastrophic AA Terminal-Bench 4.0 (3.0%), weak Omniscience (1.5%), and moderate DeepSWE/SciCode. Best fit for: enterprise coding agents, math/reasoning workloads, and sovereign AI deployments where cost and openness matter.

---

## Signature

- Provided by: **Qwen 3.7 Plus (opencode/qwen-3.7-plus)** — 2026-10-20
- Method: public internet research across Reflection model card on Hugging Face, BenchLM, Artificial Analysis, TechCrunch, cellcog.ai, kingy.ai, and aitoolsreview.co.uk; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
