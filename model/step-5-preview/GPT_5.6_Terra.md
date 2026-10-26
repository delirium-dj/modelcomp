# Step 5 Preview - findings by GPT 5.6 Terra

- Source: StepFun (`stepfun-ai/Step-5-Preview`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's open-weight sparse-MoE preview for agentic software engineering and long-horizon knowledge work. The public checkpoint exposes OpenAI-compatible serving, reasoning parsing, and automatic tool-choice support.
- **Provider / access:** StepFun checkpoint `stepfun-ai/Step-5-Preview`; self-hosted through vLLM or SGLang with an OpenAI-compatible Chat Completions interface. Hugging Face lists no hosted inference provider.
- **Release / knowledge:** Public Hugging Face repository created 2026-09-20; knowledge cutoff not announced.
- **IDs:** `stepfun-ai/Step-5-Preview`; local vLLM examples use served model name `step5`.
- **Context window:** Up to 1,000,000 tokens total and up to 1,000,000 output, per the official model card; actual usable context depends on KV-cache allocation.
- **Modalities:** Text and image input, text output, reasoning and tool-call parsers. The introduction also says video is accepted, but the model-specification table lists only text and image, so this report scores the narrower confirmed surface.
- **Pricing (as of 2026-10-26):** No official hosted API rate found. Weights are published under the StepFun Model License 1.0; deployment requires substantial self-hosted hardware.
- **Architecture:** Sparse MoE, 600B total / 27B active parameters; public FP8 and BF16 checkpoints.

### Raw benchmarks found

Agent / tool use:

- [Terminal-Bench 4](https://huggingface.co/datasets/harborframework/terminal-bench): **33.3%** (Hugging Face evaluation result for `stepfun-ai/Step-5-Preview`).
- [Agents' Last Exam CLI pass rate](https://huggingface.co/datasets/agents-last-exam/agents-last-exam): **29.5%** (Hugging Face evaluation result for the exact checkpoint).
- [DeepSWE](https://huggingface.co/datasets/datacurve/deep-swe): **67.7%** (Hugging Face evaluation result; vendor documentation says the evaluation used SWE-agent at temperature 1.0 and top-p 0.95).

Reasoning / knowledge:

- GPQA Diamond: no verified public score found.
- HLE: no verified public score found.
- GDPval-AA v2.1: the official card attributes a result to Artificial Analysis as of 2026-09-20, but the retrieved material does not expose a numerical value; no score is inferred.

Coding:

- [DeepSWE](https://huggingface.co/datasets/datacurve/deep-swe): **67.7%** (exact checkpoint evaluation result).
- SWE-bench Verified: no verified public score found.
- LiveCodeBench: no verified public score found.

Long context:

- No public long-context retrieval score found. The 1M-token limit is specified by the [official model card](https://huggingface.co/stepfun-ai/Step-5-Preview), not a retrieval benchmark.

The [official Hugging Face model card](https://huggingface.co/stepfun-ai/Step-5-Preview) and [StepFun GitHub repository](https://github.com/stepfun-ai/Step-5-Preview) agree on the 600B/27B MoE design, 1M context, and tool-capable serving. They conflict internally on video input: the narrative claims it while the specification table omits it; the narrower table is used. The independent Hugging Face evaluation records expose the three numerical results above, while the official documentation provides methodology but no additional raw scores.

### Normalized scores (1-100)

- **Tool use: 72/100.** DeepSWE 67.7% indicates capable multi-step execution, but Terminal-Bench 4 at 33.3% and Agents' Last Exam CLI at 29.5% cap autonomous-tool confidence.
- **Reasoning: 78/100.** The documented high-reasoning setting and strong agentic-coding result support an above-average interpretation, but no independently retrievable GPQA, HLE, or exact GDPval number supports a frontier score.
- **Context window: 98/100.** The official 1M-token total/output limit is near the top context tier; lack of a published long-context retrieval measurement prevents a perfect score.
- **Multimodal: 78/100.** Text and image input are explicitly specified. Video is described in the introduction but absent from the official specification table, so it is not credited.
- **Coding: 80/100.** DeepSWE 67.7% is strong exact-model coding evidence, moderated because no exact SWE-bench Verified or LiveCodeBench result was found.
- **Cost efficiency: 55/100.** Open weights avoid a mandatory per-token API price, but the official deployment examples require four to sixteen high-end GPUs and no verified API rate is available.
- **Overall Score: 81/100.** Half-up mean of Tool 72 + Reasoning 78 + Context 98 + Multimodal 78 + Coding 80 = 406/5 = 81.2. Best fit: self-hosted long-context agentic work where its documented serving stack and strong DeepSWE result matter more than proven terminal reliability.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-26
- Method: fresh public internet research across StepFun's official Hugging Face model card and GitHub repository, then comparison with Hugging Face's public benchmark records; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
