# DeepSeek-V4.1-Flash — findings by Glyph Cluster

- Source: DeepSeek (`deepseek-ai/DeepSeek-V4.1-Flash`, folder slug `deepseek-v4.1-flash`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1-Flash
- **Short description:** Multimodal Mixture-of-Experts model from DeepSeek (CED architecture, CSA2 sparse attention) natively processing images and text with 1M-token context, optimized for cost-efficient long-context and agentic workloads.
- **Provider / access:** Open weights on Hugging Face (`deepseek-ai/DeepSeek-V4.1-Flash`, MIT license). Served via multiple inference providers (per AA/provider listings) with OpenAI-compatible APIs; recommended sampling `temperature=1.0`, `top_p=0.95`.
- **Release / knowledge:** Released September 2026 (per Artificial Analysis). Knowledge cutoff not explicitly stated on fetched sources.
- **IDs:** `deepseek-ai/DeepSeek-V4.1-Flash` (Hugging Face), `deepseek/deepseek-v4.1-flash` (provider/OpenRouter-style ID in AA context).
- **Context window:** 1,000,000 tokens (per Hugging Face model card and Artificial Analysis). Max reasoning effort `reasoning_effort=100` supported.
- **Modalities:** Text and image input; text output (native multimodal processing per model card). Reasoning supported.
- **Pricing (as of 2026-11-13):** Open weights (MIT); hosted pricing varies by provider. AA snapshot (Max): ~$0.29/M input, ~$1.20/M output (cache discount ~98%).
- **Architecture:** MoE with 552B backbone parameters; CED with 20 encoder + 20 decoder layers activating ~8B params/token at prefill and ~16B at decode; 384 routed experts + 1 shared expert, 6 routed experts/token; CSA2, mHC, Engram conditional memory, DSpark speculative decoding; FP4 main KV caching; 1M context (per Hugging Face model card).

### Raw benchmarks found

> Values below are benchmark figures reported on the fetched Hugging Face model card for DeepSeek-V4.1-Flash (instruct, max reasoning effort `reasoning_effort=100` unless noted) and base-model results where specified. Figures not present in fetched sources are marked as no verified public score found.

Reasoning / knowledge (instruct):

- GPQA Diamond (Pass@1): **90.9**
- HLE (Pass@1): **36.8** (39.1 on text-only subset †)
- Codeforces (Rating): **3471**
- MathArena Apex (Pass@1): **65.6**

Agentic / tool use / coding (instruct):

- Terminal-Bench 2.1 (Pass@1): **90.6**
- Terminal-Bench 3.0 (Pass@1): **30.0**
- Terminal-Bench 4.0 (Pass@1): **31.2**
- DeepSWE v1.1 (Resolved): **74.2**
- ProgramBench (Almost@1): **20.3**
- NL2Repo-Bench (Score): **64.0**
- CyberGym (Pass@1): **88.1**
- SEC-Bench Pro (Pass@1): **62.8**
- ExploitGym (Pass@1): **15.3**
- HLE w/ tools (Pass@1): **63.9**
- AutomationBench (Pass@1): **54.8**
- Agent's Last Exam (Pass@1): **31.8**

Multimodal / vision agentic (instruct, with tools where noted):

- Chartography w/ tools (Pass@1): **78.9**
- BabyVision w/ tools (Pass@1): **89.6**
- ZeroBench-main w/ tools (Pass@5): **49.0**

Base model (selected):

- MMLU-Pro (EM, 5-shot): **74.1**
- SimpleQA-Verified (EM, 25-shot): **42.3**
- SuperGPQA (EM, 5-shot): **53.1**
- MMMU-Pro (EM, 4-shot): **56.5**
- CVBench (EM, 4-shot): **77.9**
- DocVQA (LLM-Judge, 4-shot): **95.6**
- RefCOCO-avg (Acc@0.5, 0-shot): **86.0**
- BigCodeBench (Pass@1, 3-shot): **60.6**
- HumanEval (Pass@1, 0-shot): **79.4**
- GSM8K (EM, 8-shot): **93.0**
- MATH (EM, 4-shot): **61.1**
- LongBench-V2 (EM, 1-shot): **45.2**

Other:

- Artificial Analysis Intelligence Index: **no verified public score found** in fetched AA snapshot (reported as N/A / no publicly available API).

### Normalized scores (1–100)

> Scores are normalized 1–100 interpretations based on available evidence, not official vendor scores. Overall is the half-up mean of the five non-cost dimensions.

- **Tool use: 86/100.** Strong agentic/tool-use and computer/environment interaction results (Terminal-Bench 2.1 90.6, DeepSWE v1.1 74.2, CyberGym 88.1, AutomationBench 54.8, HLE w/ tools 63.9, NL2Repo-Bench 64.0) with weaker performance on some harder terminal/agent suites (TB 3.0 30.0, TB 4.0 31.2, ProgramBench 20.3, ExploitGym 15.3).
- **Reasoning: 86/100.** High reasoning and competitive programming/math capability (GPQA Diamond 90.9, Codeforces 3471, MathArena Apex 65.6, GSM8K 93.0 base) balanced by moderate open-ended exam results (HLE 36.8/39.1†, MATH 61.1 base, SuperGPQA 53.1 base).
- **Context window: 88/100.** Native 1M-token context is a core architectural feature with long-context base evaluation (LongBench-V2 45.2); designed for input-heavy agentic workloads, though standardized 1M retrieval metrics are limited in fetched sources.
- **Multimodal: 78/100.** Native image+text input with verified vision understanding and visual-agent results (DocVQA 95.6, RefCOCO 86.0, CVBench 77.9, MMMU-Pro 56.5 base; BabyVision 89.6, Chartography 78.9 with tools) but no verified audio/video modalities.
- **Coding: 84/100.** Strong software-engineering and coding-agent performance (DeepSWE v1.1 74.2, Terminal-Bench 2.1 90.6, CyberGym 88.1, HumanEval 79.4 base) with room to improve on some coding challenge/program synthesis benchmarks (ProgramBench 20.3, NL2Repo-Bench 64.0).
- **Cost efficiency: 92/100.** Open-weight MIT model with highly efficient CED/sparse-attention design (8B/16B active params) and low hosted pricing tiers, offering strong capability per cost for 1M-context multimodal agentic use.
- **Overall Score: 84/100.** Mean of the five non-cost dims (Tool use 86, Reasoning 86, Context 88, Multimodal 78, Coding 84) = 84.4, rounded to 84. Best fit: long-context multimodal agentic workflows, terminal/software-engineering agents, and cost-efficient reasoning/coding where open-weight deployment is valuable.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-13 UTC
- Method: Fresh public-web research (web search unavailable with HTTP 402; fallback used direct `webfetch` of public sources). This is a re-evaluation of an existing self-excluded twin: new verified benchmark evidence was found on the official Hugging Face model card, so a scored report is produced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Hugging Face — deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
  - [Artificial Analysis — DeepSeek V4.1 Flash](https://artificialanalysis.ai/models/deepseek-v4-1-flash)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
