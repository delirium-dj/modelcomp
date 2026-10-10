# GPT-6 Luna — findings by GPT 6 Luna

- Source: OpenAI (`gpt-6-luna`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna (ChatGPT Free/Go desktop access; paid API; no Zen Free ID).
- **Short description:** OpenAI describes Luna as its most efficient GPT-6 model for focused, high-volume tasks. It is an efficiency-tier variant; OpenAI distinguishes the October ChatGPT deployment from the September versions still used in Work and Codex, while the API docs list the unsuffixed `gpt-6-luna` ID.
- **Provider / access:** OpenAI API `gpt-6-luna` supports Chat Completions and Responses; Responses is required for built-in tools, while Chat Completions function calling requires reasoning effort `none`. OpenCode Zen lists `gpt-6-luna` on its Responses endpoint.
- **Release / knowledge:** September 22, 2026 release (Artificial Analysis); knowledge cutoff May 18, 2026 (OpenAI model docs). The API docs do not expose a dated snapshot ID.
- **IDs:** `openai/gpt-6-luna`; OpenCode Zen `opencode/gpt-6-luna` (Zen lists model ID `gpt-6-luna`). **No Free ID is listed on Zen.**
- **Context window:** 1,050,000-token published context window; maximum output 128,000 tokens. The OpenAI docs do not split the context figure into input/output or report a retrieval test.
- **Modalities:** Text and image input; text output. Audio and video are unsupported, and PDF is not listed as a native modality. Reasoning is supported with configurable effort; function/tool calls and structured outputs are supported. The Responses API also lists image generation as a tool.
- **Pricing (as of 2026-10-10):** Paid API: $0.10 input / $0.50 output / $0.01 cached input / $0.125 cache writes per 1M tokens. Prompts over 272K input tokens incur 2× input/cache rates and 1.5× output rates for the full request. OpenAI lists no API Free tier; ChatGPT Free/Go access is via the desktop app, not a free API SKU. Free-tier privacy caveat: treat consumer ChatGPT access under its applicable account controls and terms, not as an API/Zen free-tier privacy guarantee.
- **Architecture:** Proprietary, closed weights; parameter count and dense-versus-MoE architecture are not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1432 Elo** (Artificial Analysis GDPval-AA v2.1; GPT-6 Luna Max; rank not shown in the cited comparison view).
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**. Additional results: AutomationBench-AA **53%** and Terminal-Bench 4.0 **13%** (Artificial Analysis, GPT-6 Luna Max; per-benchmark rank not shown). OpenAI separately reports a **5.4-percentage-point** improvement over GPT-5.6 Luna at high effort on AutomationBench 1.0.6; this is a relative delta, not an absolute score.

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **39%** (Artificial Analysis, Humanity’s Last Exam; GPT-6 Luna Max; pass@1; rank not shown in the cited comparison view).
- LCR / MLCR: **83%** (Artificial Analysis AA-LCR v1.1; GPT-6 Luna Max; rank not shown; no MLCR-AA score found).
- CritPt: **19%** (Artificial Analysis, GPT-6 Luna Max; evaluation marked under review; rank not shown).
- Artificial Analysis Intelligence Index / BenchLM overall: **38 / #8 of 180** (Artificial Analysis Intelligence Index v4.3.2; GPT-6 Luna Max; displayed AA rank). BenchLM’s composite is marked Estimated, not verified.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found** (Artificial Analysis reports a distinct AA-Omniscience Index of **1**, not the requested accuracy/hallucination pair).

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **55%** (Artificial Analysis, GPT-6 Luna Max; marked under review; rank not shown).
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **66.6%** (OpenAI, DeepSWE v1.1; GPT-6 Luna at max effort; rank not reported).

Long context:

- no long-context retrieval reported (no MRCR/RULER/GraphWalks score at a stated window found; AA-LCR v1.1 is reported separately above).

### Normalized scores (1-100)

- **Tool use: 66/100.** Luna Max has 53% on AutomationBench-AA and 1432 GDPval-AA Elo, but no verified Terminal-Bench 2.1 or Tau3 score; the GDPval result is below the supplied frontier anchor. Capped in the mid-range for missing primary agent-suite results.
- **Reasoning: 82/100.** HLE is 39%, near but below the supplied 40% frontier anchor; the AA Index is 38, with AA-LCR at 83%. GPQA is missing and CritPt is marked under review, so the score remains below frontier.
- **Context window: 95/100.** The published 1.05M-token window reaches the ≥1M tier; no verified ≥98% retrieval result at 512K+ was found, so it does not receive 100.
- **Multimodal: 65/100.** Image input places it in the image-input tier; documented native output is text, with no audio/video support. Image generation is available as a Responses tool, not documented as native model output.
- **Coding: 84/100.** DeepSWE v1.1 is 66.6%, below the supplied 74% frontier anchor; SciCode is 55% but marked under review. SWE-bench Verified and LiveCodeBench scores were not verified, capping the score below frontier.
- **Cost efficiency: 96/100.** Paid pricing is $0.10 input / $0.50 output per 1M tokens: very low-cost, but the output rate exceeds the supplied $0.10/$0.20 top band. Scored independently and excluded from Overall.
- **Overall Score: 78.4/100.** `(66 + 82 + 95 + 65 + 84) / 5 = 78.4`; cost is excluded. Best fit: cost-sensitive, high-volume work needing long context, image input, and tool use; consider a more strongly verified model for top-end coding or reasoning tasks.

---

## Signature

- Provided by: **GPT 6 Luna (OpenAI/gpt-6-Luna)** — 2026-10-10
- Method: Fresh public-web research using OpenAI documentation and vendor blog, Artificial Analysis, and OpenCode Zen docs. Normalized scores are 1-100 interpretations, not official vendor scores; benchmark results use Luna Max or max effort where the source specifies it.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
