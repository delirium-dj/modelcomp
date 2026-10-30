# Xing4.0-29B-A4B — findings by GPT 5.6 Luna

- Source: China Telecom Artificial Intelligence Technology Co. / Xing4.0-29B-A4B
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing4.0-29B-A4B
- **Short description:** China Telecom's open-weight, agent-oriented mixture-of-experts language model for tool use, terminal work, coding, document QA, and long-context reasoning. `A4B` denotes approximately 4B active parameters, not a separate 4B model.
- **Provider / access:** Local deployment from the official Hugging Face checkpoint with vLLM, SGLang, KTransformers, or the publisher's plugins. An independently catalogued OpenRouter free offer uses the exact route `xingchen-agi/xing4.0-29b-a4b:free`.
- **Release / knowledge:** Open-sourced 2026-09-17; knowledge cutoff was not verified.
- **IDs:** `XingChen-AGI/Xing4.0-29B-A4B`; hosted free catalog ID `xingchen-agi/xing4.0-29b-a4b:free`. No separate model with a different checkpoint was found for the free suffix.
- **Context window:** 256K native, extensible to 512K in the publisher's deployment documentation. The independently catalogued hosted offer exposes 262,144 tokens, so the hosted figure is the conservative operational limit.
- **Modalities:** Text in/text out, configurable reasoning, tool calling, structured output, and multi-step planning; no image, audio, or video modality was verified.
- **Pricing (as of 2026-10-30):** The catalogued hosted offer is $0 input/output per 1M tokens; self-hosting uses Apache-2.0 weights and still incurs hardware cost. The free route has no stated expiry and may change.
- **Architecture:** 29B total / 4B active MoE, 40 layers, 64 routed experts with four active per token plus one shared expert; mHC + MLA + MTP architecture, trained on Ascend NPUs. Apache 2.0.

### Raw benchmarks found

> The publisher reports averages over the stated harnesses and repeated runs; the independent MindStudio analysis reproduces the model-card table and explicitly notes that the values have not yet been neutral-party reproduced.

Agent / tool use:

- Tau3-Bench: **64.63** (official Xing4.0 model card; four-run average)
- Claw-Eval: **76.55** (official model card; three-run average)
- Terminal-Bench 2.1: **57.50** (official model card; Terminus-2, three-run average)
- DeepresearchBII: **60.80** (official model card; OpenCode harness with Exa MCP)
- IFBench: **69.67** (official model card)

Reasoning / knowledge:

- AIME2026: **90.00** (official model card; five-run average)
- AA.LCR: **61.00** (official model card; three-run average)
- GPQA Diamond / HLE / Artificial Analysis Intelligence Index: **no verified public score found** for this exact model

Coding:

- SWE-bench Verified: **75.00** (official model card; SWE-agent, 210K context)
- SWE-bench Multilingual: **66.00** (official model card; SWE-agent, 210K context)
- Terminal-Bench 2.1: **57.50** (official model card; also an agent/coding signal)
- Claw-Eval: **76.55** (official model card; general agent benchmark)

Long context:

- No verified public MRCR/RULER retrieval score; the publisher documents 256K native context with extension to 512K and the hosted catalog lists 262,144 tokens.

### Normalized scores (1–100)

- **Tool use: 76/100.** Tau3 64.63, Claw-Eval 76.55, DeepresearchBII 60.80, IFBench 69.67, and Terminal-Bench 57.50 show useful agent capability, but all public figures come from the publisher's harnesses and there is no independent reproduction.
- **Reasoning: 78/100.** AIME2026 at 90.0 is excellent and AA.LCR at 61.0 is solid, but the absence of verified GPQA, HLE, and composite-index results prevents a frontier score.
- **Context window: 75/100.** The exact model is documented at 256K native and the hosted offer at 262,144 tokens, placing it in the 200K–500K tier. The 512K extension is not treated as a universally available limit.
- **Multimodal: 15/100.** The exact model card and deployment interfaces verify text input/output only.
- **Coding: 78/100.** SWE-bench Verified 75.0%, SWE-bench Multilingual 66.0%, and Terminal-Bench 2.1 57.5% establish strong coding-agent ability, while the lack of independent runs and mid-range terminal score cap the interpretation.
- **Cost efficiency: 100/100.** The exact hosted offer was catalogued at $0 input/output, with open weights also available; availability and local serving costs remain caveats.
- **Overall Score: 64/100.** Half-up mean of the five non-cost dimensions: `(76 + 78 + 75 + 15 + 78) / 5 = 64.4`, rounded to 64. Best fit is a low-cost text coding and terminal agent with a long context, not a multimodal assistant.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-30
- Method: three-plus independent fresh web searches, followed by exact-ID checks against the publisher's Hugging Face and GitHub materials, independent MindStudio coverage, and the independently reviewed hosted catalog. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

## Sources

- Official model card and exact benchmark table: https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B
- Official code and release notes: https://github.com/XingChen-AGI/Xing4.0-29B-A4B
- Independent technical coverage and benchmark comparison: https://www.mindstudio.ai/blog/xing4-0-29b-a4b-model-release
- Independent hosted catalog and exact free route: https://aiagentstore.ai/ai-models/xing4-0-29b-a4b-free
