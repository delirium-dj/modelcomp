# Beam - findings by GPT 5.6 Terra

- Source: Reflection/Beam-1.0-501B-A23B
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Beam
- **Short description:** Reflection's open-weight sparse MoE for coding, long-horizon agentic work, and reasoning. The `opencode/beam` route corresponds to Reflection Beam 1.0, whose weights are available under Apache 2.0.
- **Provider / access:** Reflection API and partner APIs; OpenCode route `opencode/beam`. Reflection lists OpenCode among supported Beam integrations, while Vercel exposes the upstream ID `reflection/beam`.
- **Release / knowledge:** 2026-10-16 (Reflection availability announcement); 2026-06-30 knowledge cutoff (Reflection model card).
- **IDs:** `reflection/Beam-1.0-501B-A23B`; Vercel `reflection/beam`; OpenCode `opencode/beam`.
- **Context window:** 1,000,000 tokens native (Reflection); Vercel lists a 1,048,576-token context and output limit for its route.
- **Modalities:** Text input and text output; reasoning and agentic tool-use positioning. No image, audio, video, or non-text output is documented.
- **Pricing (as of 2026-10-18):** Free to self-host under Apache 2.0 and free-to-start on Reflection's beta; Artificial Analysis provider median is $0.70 input and $2.10 output per 1M tokens.
- **Architecture:** 501.3B-total/23.4B-active sparse MoE, 52 layers, 256 experts; released in BF16, FP8, and NVFP4 variants under Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.1%** (Beam BF16, Reflection model card: https://reflection.ai/beam-model-card).
- MCP Atlas: **80.8%** (Beam BF16, Reflection model card: https://reflection.ai/beam-model-card).
- Tau3 Banking: **36.1%** (Beam BF16, Reflection model card: https://reflection.ai/beam-model-card).
- BrowseComp with context management: **76.8%** and DeepSearchQA with context management: **80.5%** (Beam BF16, Reflection model card: https://reflection.ai/beam-model-card).

Reasoning / knowledge:

- GPQA Diamond: **90.6%** (Beam BF16, Reflection model card: https://reflection.ai/beam-model-card).
- HLE without / with tools: **36.0% / 51.1%** (Beam BF16, Reflection model card: https://reflection.ai/beam-model-card).
- AA-LCR: **78.2%** and LongBench v2: **67.5%** (Beam BF16, Reflection model card: https://reflection.ai/beam-model-card).
- Artificial Analysis Intelligence Index: **30** (independent evaluation: https://artificialanalysis.ai/models/reflection-beam).

Coding:

- SWE-bench Verified: **81.6%**; SWE-bench Pro v1: **66.1%**; SWE-bench Pro v2-Hard: **76.5%** (Beam BF16, Reflection model card: https://reflection.ai/beam-model-card).
- DeepSWE v1.1: **43.3%**; SWE Atlas Codebase QnA: **31.8%**; SWE-bench Multilingual: **78.3%** (Beam BF16, Reflection model card: https://reflection.ai/beam-model-card).
- LiveCodeBench: **88.3%** and SciCode: **49.2%** (Beam BF16, Reflection model card: https://reflection.ai/beam-model-card).

Long context:

- AA-LCR: **78.2%** and LongBench v2: **67.5%**; these published retrieval/reasoning results do not establish near-perfect retrieval at the 1M-token maximum (Reflection model card).

### Normalized scores (1-100)

- **Tool use: 84/100.** Terminal-Bench 2.1 (80.1%), MCP Atlas (80.8%), and search benchmarks are strong, but Tau3 Banking at 36.1% prevents a frontier score.
- **Reasoning: 82/100.** GPQA Diamond (90.6%), HLE with tools (51.1%), and AA-LCR (78.2%) are strong; the independent Intelligence Index of 30 and HLE without tools at 36.0% cap it.
- **Context window: 95/100.** The native 1M-token window reaches the top context tier, while the available LCR/LongBench results do not demonstrate the 98% retrieval needed for 100.
- **Multimodal: 15/100.** Beam is documented as text input/output only.
- **Coding: 87/100.** SWE-bench Verified (81.6%), SWE-bench Pro v2-Hard (76.5%), Terminal-Bench 2.1 (80.1%), and LiveCodeBench (88.3%) are strong, but DeepSWE (43.3%) and SWE Atlas QnA (31.8%) cap the score below the frontier tier.
- **Cost efficiency: 96/100.** Apache 2.0 self-hosting and free-to-start access are highly cost-efficient; the paid provider median of $0.70/$2.10 per 1M tokens remains near the favorable reference tier.
- **Overall Score: 73/100.** `(84 + 82 + 95 + 15 + 87) / 5 = 72.6`, rounded half-up; a strong open text-only coding and agent model when image input is not required.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-18
- Method: Public vendor documentation plus Artificial Analysis and BenchLM cross-checking; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
