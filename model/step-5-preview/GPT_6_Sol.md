# Step 5 Preview — findings by GPT 6 Sol

- Source: StepFun (`stepfun-ai/Step-5-Preview`)
- Date: 2026-10-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's September 2026 sparse-MoE agentic flagship preview for long-horizon coding, multimodal documents and financial tasks ([official weights/model card](https://huggingface.co/stepfun-ai/Step-5-Preview)).
- **Provider / access:** StepFun Platform and released `stepfun-ai/Step-5-Preview` FP8/BF16 weights, self-host via OpenAI-compatible **Chat Completions** with vLLM/SGLang ([official card](https://huggingface.co/stepfun-ai/Step-5-Preview)). [OpenCode Console](https://opencode.ai/docs/zen/) currently offers a distinct **`step-5-preview-free` $0 trial Chat Completions route**; do not infer that project metadata's `opencode/step-5-preview` is the same accessible ID or a paid fallback. Trial provider details require checking.
- **Release / knowledge:** September 28, 2026 per [Vals](https://www.vals.ai/models/stepfun_step-5-preview); exact knowledge cutoff not published on reviewed checkpoint card.
- **IDs:** Weights `stepfun-ai/Step-5-Preview`, OpenCode free gateway `opencode/step-5-preview-free` when offered; model's capabilities vs free-provider deployment limits may differ.
- **Context window:** [Official weights card](https://huggingface.co/stepfun-ai/Step-5-Preview) **up to 1,048,576 combined**, max output *up to 1M* depending on serving KV allocation; [Vals](https://www.vals.ai/models/stepfun_step-5-preview) configured 1M / 1,024,000 max output, which does not mean all 1M can be both input and output in one call. Project metadata's 64K max output is not confirmed for this route.
- **Modalities:** Official intro says text/image/video input → text output, but [official checkpoint specification table](https://huggingface.co/stepfun-ai/Step-5-Preview) explicitly lists **text/image input** only and [Vals](https://www.vals.ai/models/stepfun_step-5-preview) tested text/image, no video. Treat video endpoint support as *unverified per provider*, not guaranteed.
- **Pricing (as of 2026-10-15):** [Vals](https://www.vals.ai/models/stepfun_step-5-preview) reports StepFun API **$1 input / $2.70 output per 1M**; [OpenCode Console](https://opencode.ai/docs/zen/) separately lists `step-5-preview-free` as limited-time **$0/$0**, with zero-retention and not used for training on that trial route. Official weights use **StepFun Model License 1.0**, an Apache-style license with additional terms (not plain Apache-2.0), and self-hosting has infrastructure cost ([HF card](https://huggingface.co/stepfun-ai/Step-5-Preview)).
- **Architecture:** **600B total / 27B active** sparse MoE, released weights, up to 1M combined context ([StepFun card](https://huggingface.co/stepfun-ai/Step-5-Preview)).

### Raw benchmarks found

The [StepFun checkpoint](https://huggingface.co/stepfun-ai/Step-5-Preview) says vendor evaluations use **high** reasoning, DeepSWE uses SWE-agent. [BenchLM](https://benchlm.ai/models/step-5-preview) attributes vendor/AA results separately, and independent [Vals](https://www.vals.ai/models/stepfun_step-5-preview) tests its API at high. Free OpenCode trial **not** independently benchmarked under the same harness; don't transfer a 1M/1M claim to that endpoint.

Agent / tool use:

- [StepFun vendor TB2.1 **85.0%**, TB4.0 **33.3%**, Toolathlon-Verified **74.1%**, MCP Atlas **85.6%**, AutomationBench **44.0%**, BrowseComp **88.7%**, GDPval-AA **1566 Elo**](https://www.stepfun.com/step-5-preview), as cataloged by [BenchLM](https://benchlm.ai/models/step-5-preview).
- [Vals TB4.0 **31.82% ±2.62**, Finance Agent v2 **50.67% ±0.32**, Code Migration **38.98% ±4.53**, Harvey Legal Agent **9.17% ±2.44**, SRE Bench **0.38% ±0.38**](https://www.vals.ai/models/stepfun_step-5-preview); higher-difficulty production operations remain uneven.

Reasoning / knowledge:

- [StepFun/AA-attributed GPQA Diamond **93.5%**, HLE **46.5%**, CritPt **20.9%**, AA-LCR **88.3%**](https://benchlm.ai/models/step-5-preview); [AA current Intelligence Index **43.7**](https://benchlm.ai/models/step-5-preview), a separate weighted composite. [Vals ProofBench v1.1 **42.00% ±4.96**, BioMysteryBench **67.41% ±0.37**](https://www.vals.ai/models/stepfun_step-5-preview).

Coding:

- [StepFun DeepSWE v1.1 **67.7%**, SciCode **58.9%**, ProgramBench **80.5%** vendor configuration, TB2.1 **85.0%**](https://benchlm.ai/models/step-5-preview); [Vals Vibe Code Bench v1.1 **70.40% ±4.27**, TB4.0 **31.82% ±2.62**, SWE-bench Multimodal **40.83% ±2.25**](https://www.vals.ai/models/stepfun_step-5-preview). Vendor ProgramBench metric and the Vals full-resolution ProgramBench are not necessarily the same protocol.

Long context / multimodal:

- [StepFun up to 1M combined window](https://huggingface.co/stepfun-ai/Step-5-Preview) with [AA-LCR **88.3%**](https://benchlm.ai/models/step-5-preview); no 1M eight-needle MRCR percentage verified for its exact hosted config.
- [StepFun MMMU-Pro **76.0%** and AA MMMU-Pro **76.4%**](https://benchlm.ai/models/step-5-preview), [Vals SWE-bench Multimodal **40.83%**](https://www.vals.ai/models/stepfun_step-5-preview). Video input claim on overview not yet reflected in checkpoint specifications; no native audio I/O.

### Normalized scores (1–100)

- **Tool use: 83/100.** TB2.1 85%, MCP 85.6%, TB4 independent 31.8%; Vals SRE 0.38% tempers long-horizon confidence.
- **Reasoning: 85/100.** GPQA 93.5%, HLE 46.5% and CritPt 20.9%, with AA Index 43.7 and independent ProofBench 42% limiting top end.
- **Context window: 92/100.** Up to 1M combined with AA-LCR 88.3%; actual maximum input/output and full-window retrieval depend on serving KV configuration.
- **Multimodal: 88/100.** Strong text/image understanding with MMMU ~76%, video support stated in overview but not checkpoint table, no native audio.
- **Coding: 84/100.** DeepSWE 67.7% and Vals Vibe Code 70.4%, TB4 31.8%; no independently validated SWE-Pro/Verified figure.
- **Cost efficiency: 88/100.** StepFun $1/$2.70 is good, with a separately documented temporary $0 OpenCode trial; open weights still require substantial compute.
- **Overall Score: 86/100.** (83 + 85 + 92 + 88 + 84) / 5 = 86.4, half-up 86; promising open-weight visual agent/coder, with exact endpoint limits and high-effort harness checked.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-15
- Method: Fresh official released checkpoint and OpenCode gateway catalogue compared with Vals/AA-attributed evaluations; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
