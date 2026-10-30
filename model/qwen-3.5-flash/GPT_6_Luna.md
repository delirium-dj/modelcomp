# Qwen 3.5 Flash — findings by GPT-6 Luna

- Source: Alibaba/Qwen 3.5 Flash (`qwen/qwen3.5-flash-02-23`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash
- **Short description:** Alibaba's hosted Qwen3.5-Flash serving profile, distinct from the bare family label and tracked as the `qwen3.5-flash-02-23` route; it exposes multimodal input and long context at low token cost.
- **Provider / access:** Alibaba Cloud Model Studio/DashScope and OpenRouter route `qwen/qwen3.5-flash-02-23`; OpenAI-compatible Chat Completions access is documented. This report does not treat the route as a new weight checkpoint.
- **Release / knowledge:** Vals AI lists the Alibaba model as released **2026-02-23**; OpenRouter labels the exact `qwen/qwen3.5-flash-02-23` route as released **2026-02-25**. These may reflect upstream launch versus route listing. No knowledge cutoff was published in the reviewed sources.
- **IDs:** `qwen/qwen3.5-flash-02-23`; Alibaba Model Studio Qwen3.5-Flash route.
- **Context window:** 1,000,000 tokens by default on the hosted tier; 65,536 maximum output.
- **Modalities:** Text, image and video input; text output; reasoning and tool calling supported.
- **Pricing (as of 2026-10-30):** $0.065/$0.26 per 1M input/output on the collected OpenRouter snapshot; $0.10/$0.40 on Model Studio international pricing, with separate China-region/context tiers; no free ID.
- **Architecture:** Qwen's official Qwen3.5-35B-A3B model card describes Qwen3.5-Flash as the hosted version corresponding to those weights, with production features and a 1M-token default context. The hosted API is its own exact route (`qwen/qwen3.5-flash-02-23`); the sources do not establish identical checkpointing, so no raw-weight benchmark is transferred to this report.

### Raw benchmarks found

Agent / tool use:

- **Terminal-Bench 2.0: 24.72% ± 4.60** (Vals AI exact Qwen 3.5 Flash page, default provider Alibaba; rank 54/67). This is version 2.0, not 2.1. No exact-route GDPval-AA, Tau3-Banking, Claw-Eval, or Toolathlon composite was verified.

Reasoning / knowledge:

- **GPQA Diamond: 82.83% ± 1.90**; **MMLU Pro: 84.06% ± 0.36** (Vals AI exact route). No exact-route HLE or Intelligence Index result was retrieved. A FrontierMath 18.2% result found on the open-weight family card is not attributed to this hosted route.

Coding:

- **LiveCodeBench: 83.28% ± 1.04**; **SWE-bench: 64.40% ± 2.14** (Vals AI exact route; Vals' table labels this row simply “SWE-bench,” so the version is not inferred); Terminal-Bench 2.0 **24.72% ± 4.60**. The tests use different harnesses, and the weak terminal result caps general coding.

Long context:

- Hosted 1M context and 65,536 maximum output; no exact-route MRCR/RULER retrieval curve was verified.

Multimodal:

- The exact hosted route accepts text, image and video input; **MMMU Pro: 81.91% ± 0.93** (Vals AI exact route). No audio input or non-text output was verified.

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.0 at 24.72% is the only exact-route tool-use anchor; no composite agent suite was verified. Source: Vals AI.
- **Reasoning: 68/100.** GPQA Diamond 82.83% and MMLU Pro 84.06% are useful, but no exact-route HLE or AA Intelligence Index result is available. The open-weight family's FrontierMath result is excluded. Source: Vals AI.
- **Context window: 95/100.** The hosted route advertises 1M context, which is in the project 1M tier; no retrieval curve and a 65K output cap prevent 100.
- **Multimodal: 80/100.** Text, image and video input are documented, and Vals reports MMMU Pro 81.91%; no audio or non-text output is verified. Sources: OpenRouter; Vals AI.
- **Coding: 65/100.** LiveCodeBench is 83.28% and SWE-bench 64.40%, but exact-route Terminal-Bench 2.0 is only 24.72%. Source: Vals AI.
- **Cost efficiency: 99/100.** $0.065/$0.26 to $0.10/$0.40 per million is near the project low-cost frontier, although it is paid and the pricing is route/region dependent.
- **Overall Score: 73/100.** Arithmetic mean of the five quality dimensions, excluding cost: `(55 + 68 + 95 + 80 + 65) / 5 = 72.6`, rounded to **73**. Best for cheap multimodal long-context calls, not terminal-heavy agents.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Verified the versioned OpenRouter API route and model page, Alibaba Model Studio documentation and pricing, Vals AI's exact Alibaba-hosted model page, and Qwen's official Qwen3.5-35B-A3B card linking the related Flash serving profile. Used Vals scores for the hosted route; did not assign the open-weight card's FrontierMath or other results to Flash. Rounded the Overall per the project scoring rule.
- Reference URLs:
  - [Alibaba Cloud Model Studio models](https://www.alibabacloud.com/help/en/model-studio/models)
  - [OpenRouter exact Qwen3.5-Flash route](https://openrouter.ai/qwen/qwen3.5-flash-02-23)
  - [OpenRouter exact model API record](https://openrouter.ai/api/v1/models?q=qwen3.5-flash)
  - [Vals AI exact Qwen 3.5 Flash benchmarks](https://www.vals.ai/models/alibaba_qwen3.5-flash)
  - [Qwen3.5-35B-A3B official model card (hosted Flash relationship)](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
