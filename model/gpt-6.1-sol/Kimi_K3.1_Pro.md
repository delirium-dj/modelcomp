# GPT-6.1 Sol — findings by Kimi K3.1 Pro

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's mid-tier GPT-6.1 reasoning model, positioned below GPT-6 Astra and optimized for complex coding, computer use, scientific workflows, and professional agentic work at a lower price.
- **Provider / access:** OpenAI Responses and Chat Completions APIs, Batch API, Codex, and ChatGPT Work; also routed on OpenRouter through OpenAI, Amazon Bedrock, and Azure. Tool calling requires the Responses API in OpenAI's native interface.
- **Release / knowledge:** Released 2026-09-29; knowledge cutoff 2026-04-30.
- **IDs:** OpenAI `gpt-6.1-sol` (the only listed snapshot); OpenRouter `openai/gpt-6.1-sol`. No free OpenCode Zen ID was verified.
- **Context window:** 1,050,000 tokens in the API, with 922,000 maximum input tokens and 128,000 maximum output tokens. Codex and ChatGPT Work default to a 500K window without a subscription long-context surcharge.
- **Modalities:** Text and image input; text output. Audio and video input are unsupported. Supports reasoning efforts `low`, `medium` (default), `high`, `xhigh`, and `max`; streaming, structured outputs, function calling, file/web search, prompt caching, code interpreter, hosted shell, apply-patch, skills, computer use, MCP, and tool search.
- **Pricing:** Standard API $2 input / $0.10 cached input / $2.50 cache writes / $10 output per 1M tokens. Prompts over 272K input tokens bill the full request at 2x input/cache and 1.5x output. Fast is 2x Standard, Ultrafast 6x, Batch/Flex 50% lower, and regional processing adds 10%. OpenRouter's $1/$5 OpenAI row corresponds to its discounted variant; standard and regional rows align with the official multipliers.
- **Architecture:** Proprietary; weights and parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **95.4% ±3.1%, 496/520 samples, Pass@1, max reasoning** (verified 2026-10-03 record).
- OSWorld 2.0 offline set: **71.4% binary completion at max** in OpenAI's 2026-09-29 launch evaluation; high scored 69.6%, xhigh 69.4%, and low 59.0%.
- AA-Briefcase: **1,555 Elo and 55.7% rubric pass at max** (verified 2026-10-29); high 1,466 Elo and low 1,114.
- AutomationBench: **36.1% task success at max**, costing $0.30/task in the 2026-09-29 launch run. AutomationBench-AA separately reports **64.9% partial score at max** (2026-10-29); these are different metrics/implementations and are not averaged.
- Terminal-Bench-Science 0.1: **57.0% resolution at max**, versus 51.1% high and 43.7% low (OpenAI launch run).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **55 on the current v5.0.1 model page**, while the dated 2026-10-29 source-linked record reports **54.5**. v5.0.1 combines nine evaluations including Terminal-Bench 4.0, FrontierCode 2.0, HLE-Diamond, CritPt v2 Hard, and Terminal-Bench-Science 0.1.
- Humanity's Last Exam: **52.9%** (2026-10-29 source-linked record).
- CritPt: **31.7% at max, no tools** (verified 2026-10-29).
- ArxivMath, March/April 2026 slice: **95.0%**, $0.14/task (2026-10-03 record).
- ARC-AGI-2: **94.2%**, $0.25/task; ARC-AGI-1: **98.5%**, $0.07/task; ARC-AGI-3: **52.7%**, $7,632.48 total run cost (2026-10-29 records). Versions and task distributions differ.
- AA-Omniscience Index: **42.03 at max** (verified 2026-10-29).

Coding:

- DeepSWE 1.1 with mini-SWE-agent: **75.2% Pass@1 at high** in the launch run; xhigh and max both scored 71.9%, demonstrating that additional effort did not improve this harness result.
- SWE-Marathon: **68/160 passing trials = 42.5% Pass@1 at max**, 20 tasks with eight trials each, mean cost $7.90/trial (verified 2026-10-03).
- SciCode: **55.8% accuracy** (2026-10-29 source-linked record).
- GameDevBench: **70.0% Pass@1 ±4.9 percentage points at xhigh** (verified 2026-10-18).
- KernelBench CUDA: **19.8% mean peak fraction across four problems at xhigh**, with 4/4 solutions passing correctness (2026-10-29).

Long context:

- AA-LCR: **84.0%** in the dated 2026-10-29 source-linked record. OpenRouter's benchmark snippet separately displays **83.0% at max** without a visible run date; both are retained rather than silently reconciled.
- The API's 1,050,000-token window, 922,000-token input cap, and 128,000-token output cap are verified. No exact-ID public MRCR or Graphwalks result was found.

Multimodal:

- MMMU-Pro: **86.0% overall at max** (verified 2026-10-29).
- CAIS Vision Capabilities Index: **68.0**, including IntPhys2 72.33, ERQA 78.17, MindCube 89.13, ART 18.76, and SpatialViz 90.25 (2026-10-29 composite).
- HieroglyphBench: **31.4% sign accuracy** (2026-10-29).
- Native support is limited to text/image input and text output; no audio or video input is available.

### Normalized scores (1–100)

- **Tool use: 94/100.** BrowseComp 95.4%, OSWorld 71.4%, strong AA-Briefcase performance, and broad native agent tools demonstrate excellent tool use; substantially weaker AutomationBench task completion caps the score.
- **Reasoning: 93/100.** HLE 52.9%, CritPt 31.7%, ArxivMath 95.0%, and strong ARC results indicate frontier reasoning; the mid-50s Intelligence Index and uneven specialist reliability keep it below the strongest flagships.
- **Context window: 94/100.** A verified 1.05M API window, 128K output, and AA-LCR 83.0–84.0% are excellent; the long-context price surcharge and missing MRCR/Graphwalks evidence cap the score.
- **Multimodal: 88/100.** MMMU-Pro 86.0% and a strong CAIS vision composite support high image understanding, but text/image-only input and weaker specialist vision results limit the rating.
- **Coding: 89/100.** DeepSWE 75.2%, Terminal-Bench-Science 57.0%, and GameDevBench 70.0% are strong; SWE-Marathon 42.5%, SciCode 55.8%, and weak CUDA kernel performance prevent a higher score.
- **Cost efficiency: 87/100.** Standard $2/$10 pricing, 95% cache discounts, and half-price Batch/Flex are attractive for this capability level; long-context surcharges, slow max-effort tasks, and expensive some full benchmark runs reduce efficiency.
- **Overall Score: 91.6/100.** Half-up mean of 94, 93, 94, 88, and 89; best fit for cost-conscious agentic coding, computer-use, scientific, and professional workflows that need a very large context window.

---

## Signature

- Provided by: **Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)** — 2026-11-05
- Method: Independent public internet research using OpenAI model/pricing documentation and launch-index evidence, Artificial Analysis v5.0.1, OpenRouter, and source-linked BenchmarkList records; scores are normalized 1–100 interpretations, not official vendor scores. Only exact GPT-6.1 Sol rows are scored, with effort, metric, harness, and date distinctions retained.
- Reference URLs:
  - [OpenAI — GPT-6.1 Sol model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-sol)
  - [OpenAI — Introducing GPT-6.1 Sol](https://openai.com/index/introducing-gpt-6-1-sol/)
  - [OpenAI — API pricing](https://developers.openai.com/api/docs/pricing)
  - [Artificial Analysis — GPT-6.1 Sol (max)](https://artificialanalysis.ai/models/gpt-6-1-sol)
  - [OpenRouter — GPT-6.1 Sol](https://openrouter.ai/openai/gpt-6.1-sol)
  - [BenchmarkList — GPT-6.1 Sol evaluations](https://benchmarklist.com/models/openai-gpt-6.1-sol/)
- Future sources: add a new file next to this one using the same headings.
