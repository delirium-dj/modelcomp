# GPT-6.1 Terra — findings by GPT-6.1 Sol

- Source: OpenAI / `gpt-6.1-terra`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md); current Overall contract in `../../RULES.md`
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's efficient visual-reasoning and computer-use model for high-volume professional tasks and writing. It is a distinct Terra route; `none` through `max` reasoning and fast mode are settings, not new models.
- **Provider / access:** OpenAI Chat Completions and Responses APIs, plus ChatGPT Work/Codex on eligible paid plans. **Tool calling requires Responses** (`https://api.openai.com/v1/responses`), even though non-tool Chat Completions is supported; verified in the [model page](https://developers.openai.com/api/docs/models/gpt-6.1-terra).
- **Release / knowledge:** Artificial Analysis dates release to 2026-10-26; the model page verifies a 2026-06-01 knowledge cutoff. No separately dated snapshot was listed.
- **IDs:** `gpt-6.1-terra`; Bedrock `openai.gpt-6.1-terra`; Google Cloud private-preview ID `gpt-6.1-terra`. No Zen Free ID verified.
- **Context window:** 1,050,000 combined tokens, maximum input 922,000 and maximum output 128,000, verified by OpenAI. No exact-model retrieval score at these limits found.
- **Modalities:** Text/image inputs; text output; reasoning, structured outputs, function calls, search/file tools, computer use, hosted shell, and MCP. Audio/video are explicitly unsupported natively. Calling an image-generation tool is not native image output from Terra.
- **Pricing (as of 2026-11-10):** Paid Standard $1 input / $5 output / $0.05 cache read per 1M; cache writes $1.25 with 30-minute retention or $2.50 with 12-hour retention. Requests above 272K input are billed at 2× input/cache and 1.5× output for the full request. Batch/Flex are 50% lower, fast mode 2× Standard, regional processing adds 10%. [Pricing claimant](https://developers.openai.com/api/docs/models/gpt-6.1-terra#pricing). Paid subscription inclusion is not a free API tier.
- **Architecture:** Proprietary; total/active parameter counts not disclosed in the inspected references.

### Raw benchmarks found

Agent / tool use:

- Agents' Last Exam: OpenAI reports **+15 percentage points** versus GPT-5.6 Terra at **medium** effort and approximately one-third the task cost. This is a relative comparison from the [launch article](https://openai.com/index/introducing-gpt-6-1-terra/), **not an absolute Terra accuracy**; no absolute score was visible in the fetched article.
- OSWorld **2.1:** the launch article says medium effort surpasses the predecessor's best result, but no verified numerical Terra score was visible; do not invent one.
- Terminal-Bench **4.0: 50.3%**, **max** reasoning effort (OpenAI); relevant to terminal agents as well as coding, and not interchangeable with TB2.1.
- Terminal-Bench 2.1, Tau3-Banking/Tau2-Bench, GDPval-AA, Claw-Eval/ClawProBench, Toolathon, MCP-Atlas, and SWE Atlas Codebase QnA: no verified exact-ID public score found.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index **v5.0.1: 51**, **rank 19/74** in the displayed comparison class, Max setting ([independent profile](https://artificialanalysis.ai/models/gpt-6-1-terra)). This composite is not 51% accuracy and is not the older AA index used in historical normalization examples.
- OpenAI internal error-inducing-prompt evaluation: **16.7% error at low effort**, **4.3% at max effort** ([launch article](https://openai.com/index/introducing-gpt-6-1-terra/)); this is not Omniscience hallucination rate.
- GPQA Diamond, HLE, LCR/MLCR, CritPt, and Omniscience accuracy/hallucination rate: no verified numerical exact-model result found.

Coding:

- Terminal-Bench **4.0: 50.3%**, max effort (OpenAI; predecessor comparison is 21.5%, not a Terra result).
- SWE-bench Verified/SWE-Pro, LiveCodeBench, SciCode/AA-SciCode, Vibe Code Bench, and DeepSWE: no verified exact-ID public score found.
- Terminal-Bench-Science 0.1: favorable relative comparisons are discussed in the launch article, but no absolute Terra score was verified.

Long context:

- No verified exact-ID MRCR/RULER/GraphWalks retrieval number found. Published token limits establish capacity, not perfect retention.

Multimodal and performance evidence:

- MMMU-Pro: OpenAI reports better visual reasoning than the predecessor at every effort setting, but no numerical Terra result was visible in the accessed text.
- Artificial Analysis reports **$0.96 per Intelligence Index task**, **13.7 minutes per task**, **73 output tokens/s**, and **147.01 seconds to first answer token** at Max. These are workload/endpoint observations, not latency guarantees for medium effort or a free price.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB4.0 50.3% plus quantified Agents' Last Exam improvement support capable computer agents; missing absolute ALE/OSWorld and legacy tool-suite scores cap confidence.
- **Reasoning: 89/100.** AA v5.0.1 rank 19/74 and OpenAI's 4.3% max-effort error rate support strong reasoning/factuality; no verified GPQA/HLE breakdown and vendor-specific factuality harness prevent a frontier maximum.
- **Context window: 95/100.** Verified 1.05M combined capacity reaches the top tier, but input is capped at 922K and no retrieval accuracy supports 100.
- **Multimodal: 68/100.** Verified image input and visual-reasoning evidence support the image tier; native audio/video and non-text output are explicitly absent.
- **Coding: 86/100.** TB4.0 50.3% establishes solid terminal engineering; missing verified SWE/LiveCode/SciCode results and weaker complex-code positioning cap the score.
- **Cost efficiency: 85/100.** $1/$5 and AA's $0.96/task indicate useful paid value, but billed reasoning, long-context surcharges, cache writes, and slow Max-effort responses prevent a near-free grade.
- **Overall Score: 86/100.** Half-up mean: (90 + 89 + 95 + 68 + 86) / 5 = 85.6, rounded to 86; cost excluded. Best suited to economical visual-computer workflows, with larger frontier models preferable for the hardest coding tasks.

---

## Signature

- Provided by: **GPT 6.1 Sol (agentrouter/gpt-6.1-sol)** — 2026-11-10
- Method: Fresh public-source research using OpenAI's exact model page/launch article and an independently measured Artificial Analysis profile. No peer files read. Relative deltas are not converted into invented absolute scores; native modalities and tool-mediated outputs are separated. Normalized grades are interpretations, not official scores; configured search returned HTTP 402, so Bing and direct sources were used.
- Reference URLs:
  - [OpenAI model details, API compatibility, and prices](https://developers.openai.com/api/docs/models/gpt-6.1-terra)
  - [OpenAI launch and benchmark evidence](https://openai.com/index/introducing-gpt-6-1-terra/)
  - [Artificial Analysis: GPT-6.1 Terra (Max)](https://artificialanalysis.ai/models/gpt-6-1-terra)
- Future sources: Add a separately signed file and preserve this report.
