# Kimi K2.7 Code — findings by Glyph Cluster

- Source: Moonshot AI / Kimi (`moonshotai/Kimi-K2.7-Code`, folder slug `kimi-k2.7-code`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Coding-focused agentic model from Moonshot AI (built on Kimi K2.6 lineage) designed for real-world long-horizon software engineering workflows with improved token efficiency and strong tool-using performance.
- **Provider / access:** Open weights on Hugging Face (`moonshotai/Kimi-K2.7-Code`, Modified MIT License). Available via Moonshot AI platform/API and third-party inference providers (per AA/HF listings).
- **Release / knowledge:** Released June 2026 (per Artificial Analysis). Knowledge cutoff not explicitly stated on fetched sources.
- **IDs:** `moonshotai/Kimi-K2.7-Code` (Hugging Face), `kimi-k2-7-code` (AA slug/provider ID context).
- **Context window:** 256,000 tokens (per Hugging Face model card and Artificial Analysis).
- **Modalities:** Text, image, and video inputs; text output. Reasoning/thinking supported (preserve-thinking behavior described on model card).
- **Pricing (as of 2026-11-13):** Open weights (Modified MIT); hosted pricing varies by provider. AA snapshot: ~$0.95/M input, ~$4.00/M output (cache discount ~80%).
- **Architecture:** Mixture-of-Experts with 1T total parameters and 32B activated parameters; 61 layers (1 dense), MLA attention, MoonViT vision encoder (~400M params), 384 experts with 8 selected + 1 shared, 256K context (per Hugging Face model card). Native INT4 quantization method referenced.

### Raw benchmarks found

> Values below are benchmark figures reported on the fetched Hugging Face model card for Kimi K2.7 Code unless noted. Figures not present in fetched sources are marked as no verified public score found.

Coding (HF card table, Kimi K2.7 Code column):

- Kimi Code Bench v2: **62.0**
- Program Bench: **53.6**
- MLS Bench Lite: **35.1**

Agentic (HF card table, Kimi K2.7 Code column):

- Kimi Claw 24/7 Bench: **46.9**
- MCP Atlas: **76.0**
- MCP Mark Verified: **81.1**

Comparative context from same HF table (not Kimi K2.7 Code scores): GPT-5.5 and Claude Opus 4.8 columns are shown alongside for reference; only Kimi K2.7 Code values above are used as this model's verified results.

Additional HF evaluation results section (as shown on fetched page):

- DeepSWE (datacurve/deep-swe): **30.53**
- Long-Horizon-Terminal-Bench (LHTB Solved): **3**
- WildClawBench Overall: **46.9** (Avg Time 674 also listed)

Long context / reasoning-only / general knowledge standalone benchmarks:

- GPQA, MMLU-Pro, AIME/HMMT, SWE-bench Verified/Pro, Terminal-Bench 2.0, AA-LCR, MMMU-Pro, etc.: no verified public score found in fetched sources for this exact model/ID beyond the coding/agentic results listed above.

Other:

- Artificial Analysis Intelligence Index: **no verified public score found** in fetched AA snapshot (reported as N/A / no publicly available API).

### Normalized scores (1–100)

> Scores are normalized 1–100 interpretations based on available evidence, not official vendor scores. Overall is the half-up mean of the five non-cost dimensions.

- **Tool use: 82/100.** Strong agentic/tool-use evidence on MCP and agent benchmarks reported for this coding-focused model (MCP Atlas 76.0, MCP Mark Verified 81.1, Kimi Claw 24/7 Bench 46.9, WildClawBench 46.9), indicating solid real-world agent workflow capability, though some long-horizon terminal results are limited (LHTB Solved 3).
- **Reasoning: 70/100.** Reasoning/thinking is supported, but fetched sources provide limited standalone reasoning/knowledge benchmark scores for this exact model/ID; score reflects available coding-agent task evidence and model positioning rather than broad exam-benchmark coverage.
- **Context window: 72/100.** 256K context is substantial for long-horizon coding and agent sessions, but below 1M-class leaders; no verified long-context retrieval benchmark scores found in fetched sources.
- **Multimodal: 72/100.** Supports text, image, and video inputs with a vision encoder (MoonViT), indicating meaningful multimodal capability, but verified multimodal benchmark scores for this exact model/ID were not found in fetched sources.
- **Coding: 80/100.** Clear coding specialization with verified benchmark results (Kimi Code Bench v2 62.0, Program Bench 53.6, MLS Bench Lite 35.1) and improvements over Kimi K2.6 reported on card; additional DeepSWE result (30.53) suggests variance by harness/eval setting.
- **Cost efficiency: 80/100.** Open-weight model (Modified MIT) with 32B activated parameters in a 1T MoE and moderate hosted pricing, offering reasonable efficiency for a capable coding-agent model.
- **Overall Score: 75/100.** Mean of the five non-cost dims (Tool use 82, Reasoning 70, Context 72, Multimodal 72, Coding 80) = 75.2, rounded to 75. Best fit: long-horizon coding agents and MCP/tool-integrated software engineering workflows where open-weight deployment and multimodal inputs are useful.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-13 UTC
- Method: Fresh public-web research (web search unavailable with HTTP 402; fallback used direct `webfetch` of public sources). This is a re-evaluation of an existing self-excluded twin: new verified benchmark evidence was found on the official Hugging Face model card, so a scored report is produced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Hugging Face — moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)
  - [Artificial Analysis — Kimi K2.7 Code](https://artificialanalysis.ai/models/kimi-k2-7-code)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
