# GPT-6.1 Terra — findings by GPT-5.6 Luna

- Source: OpenAI / GPT-6.1 Terra
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's fast paid model for visual reasoning, precise computer use, document workflows, and professional writing. It is a distinct Terra-line model, not an alias of GPT-6 Astra or GPT-6.1 Sol.
- **Provider / access:** OpenAI API model `gpt-6.1-terra`; Chat Completions and Responses are supported, but tool calling requires Responses. OpenCode's `opencode/gpt-6.1-terra` is a catalogue route, not a separately documented free model.
- **Release / knowledge:** Released 2026-10-26; knowledge cutoff 2026-06-01.
- **IDs:** `openai/gpt-6.1-terra` / API ID `gpt-6.1-terra`; no verified free-tier ID.
- **Context window:** 1,050,000 total tokens; maximum input 922,000 and maximum output 128,000 (official OpenAI documentation).
- **Modalities:** Text and image input, text output, reasoning effort `none` through `max`; function calling, structured outputs, file search, web search, code interpreter, hosted shell, computer use, MCP, and tool search. No audio/video input or non-text output is documented.
- **Pricing (as of 2026-11-02):** $1 input / $5 output per 1M tokens; $0.05 cached input and $1.25 per 1M 30-minute cache write. Inputs above 272K receive long-context multipliers; Batch and Flex are discounted, Fast mode costs more. This is paid API pricing.
- **Architecture:** Proprietary OpenAI model; parameters and weights undisclosed. The safety-card addendum says the data/training types follow the GPT-6 Astra description.

### Raw benchmarks found

> OpenAI's figures are vendor-reported. BenchLM's 2026-10-29 profile and Artificial Analysis add later independent-harness measurements, but the BenchLM profile is explicitly partial (33/724 benchmarks).

Agent / tool use:

- Terminal-Bench 4.0: **50.3%** at maximum reasoning effort (OpenAI launch evaluation).
- Terminal-Bench-Science 0.1: **58.3%**; Agents' Last Exam: **60.0%**; OSWorld 2.1 Offline: **74.2%** (BenchLM extraction attributed to OpenAI).
- AA AutomationBench: **60.2%**; AA Briefcase: **1402 Elo**; AA Terminal-Bench 4.0: **55.6%**; GDPval-AA: **1476 Elo** (Artificial Analysis/BenchLM independent measurements).
- BenchLM's current partial composite is **80.46/100**, rank **#9/1004**; it is not substituted for the dimension scores.

Reasoning / knowledge:

- AA-LCR: **82.7%**; MLCR-AA: **30.6%**; CritPt: **28.0%**; AA-HLE: **46.2%**; Artificial Analysis Intelligence Index: **51.0**.
- FrontierMath v2 tiers 1–3: **90.877%**; tier 4: **92.683%** (Epoch AI leaderboard as surfaced by BenchLM).
- Difficult-prompt factual-error rate: **16.7%** at low effort and **4.3%** at maximum effort; this is an adversarial factuality test, not a directly comparable hallucination rate.
- HealthBench Professional length-adjusted: **62.7%**; HealthBench length-adjusted: **55.1%**.

Coding:

- Terminal-Bench 4.0: **50.3%**; Terminal-Bench-Science: **58.3%**; AA-SciCode: **55.1%**.
- No verified exact-model SWE-bench, LiveCodeBench, or DeepSWE score was found. OpenAI positions GPT-6.1 Sol and GPT-6 Astra as better choices for the hardest coding tasks.

Multimodal:

- OpenAI reports MMMU-Pro: **85.5%**; independent ParseBench: **73.64%**, ExtractBench: **94.28%**, and AA-MMMU-Pro: **84.7%** (BenchLM profile).

Long context:

- Official capacity: **1.05M tokens**, with **922K maximum input**. AA-LCR 82.7% is useful long-context reasoning evidence, but no exact MRCR/RULER full-window retrieval score was verified.

### Normalized scores (1–100)

- **Tool use: 80/100.** TB4 50.3%, OSWorld 74.2%, Agents' Last Exam 60.0%, AutomationBench 60.2%, and GDPval-AA 1476 show strong agentic ability; the roughly 50% terminal result and partial coverage cap reliability.
- **Reasoning: 86/100.** HLE 46.2%, LCR 82.7%, FrontierMath above 90%, low maximum-effort factual-error rate, and Index 51 support a high score; CritPt 28% and MLCR 30.6% prevent a frontier-perfect score.
- **Context window: 97/100.** The 1.05M capacity and 922K input limit are top-tier, but no 98%+ full-window retrieval result is public.
- **Multimodal: 70/100.** Text-plus-image input, visual reasoning, and computer use are verified; no audio, video, or non-text output is documented.
- **Coding: 78/100.** TB4 50.3%, Terminal-Bench-Science 58.3%, and SciCode 55.1% establish capable coding-agent performance, but no exact SWE-bench result is public.
- **Cost efficiency: 88/100.** $1/$5 pricing is materially below OpenAI's flagship tier, but the model is paid and long-context/reasoning multipliers reduce value on large jobs.
- **Overall Score: 82.2/100.** `(80 + 86 + 97 + 70 + 78) / 5 = 82.2`; best fit is high-volume visual and computer-use automation with tight permissions, not the hardest software-engineering work.

---

## Signature

- Provided by: **GPT-5.6 Luna (`openai/gpt-5.6-luna`)** — 2026-11-02
- Method: current official OpenAI documentation, launch post, safety addendum, BenchLM's October 29 profile, and Artificial Analysis/leaderboard checks. Release-day vendor results and later independent harnesses were kept distinct; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI GPT-6.1 Terra model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-terra)
  - [Introducing GPT-6.1 Terra](https://openai.com/index/introducing-gpt-6-1-terra/)
  - [GPT-6.1 Terra safety addendum](https://deploymentsafety.openai.com/gpt-6-1-terra)
  - [BenchLM GPT-6.1 Terra profile](https://benchlm.ai/models/gpt-6-1-terra)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
