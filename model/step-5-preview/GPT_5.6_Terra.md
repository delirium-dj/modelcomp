# Step 5 Preview - findings by GPT 5.6 Terra

- Source: OpenAI/gpt-5.6-terra
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's open-weight, sparse-MoE reasoning model for software engineering and long-horizon agent work. The released checkpoint supports self-hosting and OpenAI-compatible serving.
- **Provider / access:** Released as `stepfun-ai/Step-5-Preview`; the official card documents vLLM and SGLang OpenAI-compatible APIs. This target is curated as `opencode/step-5-preview`.
- **Release / knowledge:** Released 2026-09-18 according to Artificial Analysis; no knowledge-cutoff date was found.
- **IDs:** `stepfun-ai/Step-5-Preview`; `opencode/step-5-preview`
- **Context window:** 1,000,000 tokens, confirmed by StepFun and Artificial Analysis. The local target record lists 64K output, while the released-weight card says up to 1M output; the provider-specific output cap is therefore not used as a quality claim.
- **Modalities:** StepFun's overview describes text, image, and video inputs, but its specifications table and Artificial Analysis only confirm text/image input and text output. This report scores the confirmed text/image surface.
- **Pricing (as of 2026-10-18):** $1.00 input and $2.70 output per 1M tokens, with a $0.10 cache hit rate, according to Artificial Analysis and the target record.
- **Architecture:** Sparse MoE, 600B total and 27B active parameters; weights use the StepFun Model License 1.0 rather than an unrestricted open-source license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (StepFun result, indexed by BenchLM).
- Terminal-Bench 4.0: **33.3%** (StepFun result; independently listed by Artificial Analysis).
- Toolathlon-Verified: **74.1%** (StepFun result, indexed by BenchLM).
- MCP Atlas: **85.6%** (StepFun result, indexed by BenchLM).
- AutomationBench: **44.0%** vendor result; **51.0%** on Artificial Analysis's AA AutomationBench harness (different harnesses).

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (StepFun result, indexed by BenchLM).
- HLE: **46.5%** (StepFun result; independently listed by Artificial Analysis).
- AA-LCR: **88.3%** (StepFun result, indexed by BenchLM).
- CritPt: **20.9%** (StepFun result, indexed by BenchLM).
- Artificial Analysis Intelligence Index: **44** (independent composite evaluation).

Coding:

- DeepSWE v1.1: **67.7%** (StepFun result using SWE-agent, as documented in the official card).
- SciCode: **58.9%** (StepFun result; independently listed by Artificial Analysis).
- ProgramBench: **80.5%** (StepFun result, indexed by BenchLM).

Long context and multimodal:

- Context window: **1M tokens** (StepFun and Artificial Analysis).
- MMMU-Pro: **76.0%** vendor result; **76.4%** on Artificial Analysis's evaluation.

Evidence reconciliation: vendor-reported results are extensive, while Artificial Analysis independently corroborates the 44 Intelligence Index, 33.3% Terminal-Bench 4.0, 58.9% SciCode, and 76.4% MMMU-Pro. Terminal-Bench 2.1 and 4.0 are different benchmark generations, not competing results. StepFun's prose mentions video input, but its own specifications table and the independent profile only verify image input, so the lower-confidence video claim is not used for the multimodal score.

### Normalized scores (1-100)

- **Tool use: 83/100.** Terminal-Bench 2.1 85.0%, MCP Atlas 85.6%, and Toolathlon 74.1% are strong, but Terminal-Bench 4.0 33.3% and AutomationBench 44.0-51.0% cap the score.
- **Reasoning: 85/100.** GPQA Diamond 93.5%, HLE 46.5%, and AA-LCR 88.3% are strong evidence, moderated by the independently measured Intelligence Index of 44 and CritPt 20.9%.
- **Context window: 95/100.** The model's verified 1M-token context reaches the top tier, capped because no reproducible retrieval-at-length result was found.
- **Multimodal: 76/100.** Independently corroborated text/image understanding and MMMU-Pro 76.4% support a solid multimodal score, but video support is inconsistently documented and output is text-only.
- **Coding: 88/100.** DeepSWE 67.7%, SciCode 58.9%, ProgramBench 80.5%, and Terminal-Bench 2.1 85.0% support high coding performance while remaining below the highest demonstrated frontier tier.
- **Cost efficiency: 90/100.** $1.00/$2.70 per 1M tokens is paid but near the methodology's strong-value reference range for capable models.
- **Overall Score: 85/100.** Half-up mean of Tool, Reasoning, Context, Multimodal, and Coding: (83 + 85 + 95 + 76 + 88) / 5 = 85.4; best suited to long-context coding and agent work where its uneven tool harness performance is acceptable.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** - 2026-10-18
- Method: Public internet research using StepFun's official model card, Artificial Analysis, BenchLM, and fresh web searches. Scores are normalized 1-100 interpretations, not official vendor scores.
- Sources: https://huggingface.co/stepfun-ai/Step-5-Preview ; https://www.stepfun.com/step-5-preview ; https://artificialanalysis.ai/models/step-5 ; https://benchlm.ai/models/step-5-preview
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
