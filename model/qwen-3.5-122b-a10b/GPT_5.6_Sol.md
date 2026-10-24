# Qwen3.5-122B-A10B — findings by GPT-5.6 Sol

- Source: Qwen/Qwen3.5-122B-A10B
- Date: 2026-10-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-122B-A10B
- **Short description:** Alibaba Qwen's open-weight sparse MoE native vision-language reasoning model, designed to provide strong coding, agent, multilingual, and visual-document performance while activating about 10B language parameters per token.
- **Provider / access:** Downloadable from Hugging Face as `Qwen/Qwen3.5-122B-A10B`; also available through OpenRouter's Chat Completions API as `qwen/qwen3.5-122b-a10b` and through Alibaba and other providers.
- **Release / knowledge:** Released 2026-02-24. No authoritative knowledge-cutoff date found.
- **IDs:** `Qwen/Qwen3.5-122B-A10B` (weights); `qwen/qwen3.5-122b-a10b` (OpenRouter).
- **Context window:** 262,144 tokens native and vendor-described as extensible to 1,010,000; OpenRouter exposes 262,144 total with up to 65,536 completion tokens.
- **Modalities:** Text, image, and video input; text output; thinking mode, tool calls, and structured output. No native audio input or non-text output was verified.
- **Pricing (as of 2026-10-24):** OpenRouter and Alibaba list $0.40 input / $3.20 output per 1M tokens; OpenRouter does not list a cache-read price for this route. Other providers vary.
- **Architecture:** Apache-2.0 open weights; hybrid Gated DeltaNet/full-attention MoE with a vision encoder, 48 language layers, 256 routed experts, 8 routed plus 1 shared expert active per token, and multi-token prediction. Qwen describes 122B total / 10B active; Hugging Face safetensor metadata and Artificial Analysis report about 125B total / 10B active.

### Raw benchmarks found

Agent / tool use:

- BFCL-V4: **72.2** (Qwen model card).
- TAU2-Bench: **79.5** (Qwen harness; official setup with the stated airline-domain fixes).
- Terminal Bench 2: **49.4** (Qwen model card).
- VITA-Bench: **33.6**; DeepPlanning: **24.1** (Qwen model card).
- HLE with tool: **47.5**; BrowseComp: **63.8**; WideSearch: **60.5** (Qwen search-agent harness, 256K context strategy).
- GDPval-AA / AutomationBench-AA / Claw-Eval: no exact public component score found.

Reasoning / knowledge:

- GPQA Diamond: **86.6%**; HLE with CoT: **25.3%** (Qwen model card).
- MMLU-Pro: **86.7%**; SuperGPQA: **67.1%** (Qwen model card).
- HMMT Feb 2025: **91.4%**; HMMT Nov 2025: **90.3%** (Qwen model card).
- Artificial Analysis Intelligence Index v4.3.2: **16**, #7/67 in its displayed class (independent composite).
- CritPt / AA-Omniscience: included in the AA composite, but no exact public component score was exposed on the accessible page.

Coding:

- SWE-bench Verified: **72.0%** (Qwen model card).
- LiveCodeBench v6: **78.9%**; CodeForces: **2100**; OJBench: **39.5** (Qwen model card; CodeForces used Qwen's own query set).
- FullStackBench: **62.6** English / **58.7** Chinese (Qwen model card).
- SciCode / SWE-Pro / DeepSWE: no verified exact-model score found.

Long context:

- AA-LCR: **66.9**; LongBench v2: **60.2** (Qwen model card).
- Native context is 262,144 tokens. The 1,010,000-token extension is documented by Qwen, but no exact-model retrieval result at that extended limit was found.

Multimodal:

- MMMU: **83.9%**; MMMU-Pro: **76.9%**; MathVision: **86.2%** (Qwen model card).
- RealWorldQA: **85.1%**; MMStar: **82.9%**; HallusionBench: **67.6%** (Qwen model card).
- OmniDocBench 1.5: **89.8%**; CharXiv-RQ: **77.2%**; MMLongBench-Doc: **59.0%** (Qwen model card).

### Cross-source comparison

- The official Qwen card, Hugging Face configuration, OpenRouter catalog, and models.dev agree on the 262,144-token native context, multimodal architecture, tool support, and exact model identity.
- Qwen's rounded architecture label is 122B total / 10B active, while Hugging Face safetensor metadata counts 125.086B parameters and Artificial Analysis labels it 125B / 10B. The sources agree on the sparse 10B-active configuration despite the total-count convention.
- OpenRouter, Artificial Analysis, and Alibaba records agree on $0.40 input / $3.20 output per million tokens for the evaluated route.
- Artificial Analysis independently scores the model at 16 on Intelligence Index v4.3.2, materially more conservative than the strong vendor benchmark table. Normalized scores therefore retain a cap rather than treating Qwen's results as independently replicated.

### Normalized scores (1–100)

- **Tool use: 80/100.** TAU2 79.5, BFCL-V4 72.2, and Terminal Bench 2 at 49.4 form a strong agent profile, capped by weaker VITA-Bench and missing exact GDPval-AA or Claw-Eval components.
- **Reasoning: 79/100.** GPQA 86.6, HLE 25.3, and strong knowledge/math results are high-end, while the independent AA index of 16 and absent component breakdown prevent a frontier score.
- **Context window: 74/100.** The verified 262K native window falls in the 200K–500K tier and has useful AA-LCR/LongBench results; the unbenchmarked 1.01M extension is not scored as a native million-token window.
- **Multimodal: 87/100.** Native image and video input with strong MMMU, document, and visual-math results approaches the top of the image/video-input tier, capped by text-only output and no audio support.
- **Coding: 80/100.** SWE-bench Verified 72.0, LiveCodeBench 78.9, and improved Terminal Bench 2 performance support a strong score, capped by missing independent SciCode/DeepSWE evidence.
- **Cost efficiency: 91/100.** $0.40/$3.20 per million tokens is efficient for a 122B-class multimodal MoE, but remains paid and costs more than the 27B sibling.
- **Overall Score: 80/100.** Half-up mean of the five quality dimensions `(80 + 79 + 74 + 87 + 80) / 5 = 80`; best suited to hosted or self-managed multimodal agents needing stronger tool and visual performance from a sparse open model.

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-24
- Method: independent public internet research using three exact-name searches and direct checks of Qwen's model card, Hugging Face metadata/configuration, OpenRouter, models.dev, and Artificial Analysis. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
