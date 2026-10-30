# GPT-6.1 Terra — findings by GPT-5.6 Luna

- Source: OpenAI / GPT-6.1 Terra
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's fast, paid model for visual reasoning, computer use, document workflows, and general professional work. It is a distinct Terra-line model rather than an alias of GPT-6 Astra or GPT-6.1 Sol.
- **Provider / access:** OpenAI API model `gpt-6.1-terra`; Chat Completions and Responses endpoints are supported, but tool calling requires the Responses API. OpenCode's `opencode/gpt-6.1-terra` is the local catalogue entry, not a separately documented free model.
- **Release / knowledge:** Released 2026-10-26; knowledge cutoff 2026-06-01.
- **IDs:** `openai/gpt-6.1-terra` (API ID `gpt-6.1-terra`); no verified free-tier ID.
- **Context window:** 1,050,000 total tokens; maximum input 922,000 and maximum output 128,000. These limits are from the OpenAI model documentation, not inferred from a gateway listing.
- **Modalities:** Text and image input; text output; reasoning effort `none` through `max`; function calling, structured outputs, file search, web search, code interpreter, hosted shell, computer use, MCP, and tool search. No audio or video input and no non-text output are documented.
- **Pricing (as of 2026-10-30):** $1 / 1M input, $0.05 / 1M cached input, $1.25 / 1M 30-minute cache write, and $5 / 1M output. Requests above 272K input tokens receive long-context multipliers; batch and Flex are discounted, while Fast mode is more expensive. This is paid API pricing, not a free tier.
- **Architecture:** Proprietary OpenAI model; parameter count and weights are undisclosed. The system-card addendum says its data and training types follow the GPT-6 Astra description.

### Raw benchmarks found

> The OpenAI figures are vendor-reported. BenchLM and Artificial Analysis add later independent-harness measurements, but BenchLM explicitly reports partial coverage; those limitations cap the normalized scores.

Agent / tool use:

- Terminal-Bench 4.0: **50.3%** at maximum reasoning effort (OpenAI launch evaluation).
- Terminal-Bench-Science 0.1: **58.3%** (BenchLM extraction, attributed to the OpenAI launch evaluation).
- Agents' Last Exam: **60.0%** (BenchLM extraction; the OpenAI launch post reports relative comparisons but does not state this absolute value in its prose).
- OSWorld 2.1 Offline: **74.2%** (BenchLM extraction, attributed to OpenAI).
- AA AutomationBench: **60.2%**; AA Briefcase: **1402 Elo**; AA Terminal-Bench 4.0: **55.6%** (Artificial Analysis measurements surfaced by BenchLM).
- GDPval-AA: **1476 Elo** (BenchLM/Artificial Analysis).
- Tau3-Banking and Claw-Eval: **no verified exact-model score found**.

Reasoning / knowledge:

- AA-LCR: **82.7%**; MLCR-AA: **30.6%**; CritPt: **28.0%** (Artificial Analysis measurements surfaced by BenchLM).
- AA-HLE: **46.2%**; Artificial Analysis Intelligence Index: **51.0** (BenchLM/Artificial Analysis).
- FrontierMath v2 tiers 1–3: **90.877%**; tier 4: **92.683%** (Epoch AI results surfaced by BenchLM).
- OpenAI's difficult-prompt factual-error rate: **16.7%** at low effort and **4.3%** at maximum effort. This is an adversarial factuality test, not a directly comparable hallucination rate.
- HealthBench Professional length-adjusted: **62.7%**; HealthBench length-adjusted: **55.1%** (OpenAI system-card addendum).

Coding:

- Terminal-Bench 4.0: **50.3%** at maximum effort (OpenAI).
- Terminal-Bench-Science 0.1: **58.3%** (BenchLM/Artificial Analysis extraction).
- AA-SciCode: **55.1%** (Artificial Analysis measurement surfaced by BenchLM).
- SWE-bench Verified / LiveCodeBench / DeepSWE: **no verified exact-model score found** in the sources reviewed. OpenAI explicitly positions GPT-6.1 Sol and GPT-6 Astra as better choices for the hardest coding tasks.

Long context:

- The official capacity is **1.05M tokens**, with a **922K maximum input**. No exact-model MRCR or RULER retrieval score at a stated window length was found. AA-LCR 82.7% is useful long-context reasoning evidence, but is not a substitute for a retrieval-capacity test.

### Sources used

- [OpenAI: Introducing GPT-6.1 Terra](https://openai.com/index/introducing-gpt-6-1-terra/) — release positioning, Terminal-Bench 4.0, factuality, pricing, and availability.
- [OpenAI API model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-terra) — ID, endpoints, limits, modalities, tools, reasoning settings, cutoff, and pricing.
- [OpenAI deployment-safety system-card addendum](https://deploymentsafety.openai.com/gpt-6-1-terra) — HealthBench, alignment, and safety evaluation details.
- [BenchLM: GPT-6.1 Terra](https://benchlm.ai/models/gpt-6-1-terra) — 80.46/100 partial-coverage profile and exact benchmark rows from OpenAI, Artificial Analysis, ParseBench, and other harnesses; last updated 2026-10-29.
- [Artificial Analysis: GPT-6.1 Terra release](https://artificialanalysis.ai/models/releases/gpt-6-1-terra) — Intelligence Index 51, 90.9 output tokens/s, $1/$5 pricing, and 1M technical specification.
- [AI Tools Review: GPT-6.1 Terra review](https://aitoolsreview.co.uk/insights/gpt-6-1-terra) — independent review and source comparison. It correctly notes that launch-day headline results were vendor-reported; its “no independent benchmark” statement predates the later BenchLM/Artificial Analysis measurements.

### Normalized scores (1–100)

- **Tool use: 80/100.** TB4 50.3%, OSWorld 74.2%, Agents' Last Exam 60.0%, AutomationBench 60.2%, and GDPval-AA 1476 show strong agentic ability. The score is capped by the roughly 50% terminal solve rate, missing Tau3/Claw-Eval rows, and partial independent coverage.
- **Reasoning: 86/100.** HLE 46.2%, LCR 82.7%, FrontierMath above 90%, low maximum-effort factual-error rate, and Index 51 support a high score. CritPt 28%, MLCR 30.6%, and the lack of a broad independent reproduction prevent a frontier-perfect score.
- **Context window: 97/100.** The 1.05M advertised window is in the top tier, but the 922K maximum input and absence of a measured 98%+ retrieval result cap it below 100.
- **Multimodal: 70/100.** Official text-plus-image input and computer-use support earn the top of the image-input band; no audio, video, or non-text output is documented.
- **Coding: 78/100.** TB4 50.3%, Terminal-Bench-Science 58.3%, and SciCode 55.1% establish capable coding-agent performance. The score is capped because no exact SWE-bench result was found and OpenAI reserves its hardest coding recommendation for Sol/Astra.
- **Cost efficiency: 88/100.** $1/$5 paid pricing is materially cheaper than the flagship tier but not free; long-context multipliers and reasoning output reduce value on large jobs.
- **Overall Score: 82/100.** `(80 + 86 + 97 + 70 + 78) / 5 = 82.2`, half-up to **82**. Best fit: high-volume visual and computer-use automation with tight permissions; use a stronger model for the hardest software-engineering or safety-critical work.

---

## Signature

- Provided by: **GPT-5.6 Luna (`openai/gpt-5.6-luna`)** — 2026-10-30
- Method: Three independent web searches for the exact model plus official OpenAI documentation, the OpenAI safety card, and independent benchmark/review sources; conflicting release-day and later benchmark claims were separated by date and harness. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
