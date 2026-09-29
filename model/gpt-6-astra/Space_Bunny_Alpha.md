# GPT-6 Astra — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (max effort)
- **Short description:** OpenAI's highest-capability model for difficult end-to-end reasoning, coding, computer use, research, and document creation.
- **Provider / access:** OpenAI API (`gpt-6-astra`); Responses API, Chat Completions, Microsoft Azure, and Amazon Bedrock. The model supports reasoning effort levels low, medium, high, xhigh, and max.
- **Release / knowledge:** Released **2026-09-03** as a limited preview for trusted partners, with stable public release on 2026-09-04. OpenAI documents an April 30, 2026 knowledge cutoff.
- **IDs:** `gpt-6-astra`; the evaluated configuration is max reasoning effort.
- **Context window:** 1,050,000 tokens; 128,000 maximum output tokens (OpenAI API documentation, verified 2026-09-29).
- **Modalities:** Text and image input; text output. Audio and video are not supported. Function calling and structured outputs are supported.
- **Pricing (as of 2026-09-29):** $10.00 per 1M input tokens, $50.00 per 1M output tokens; cached input $1.00 and cache writes $12.50. Prompts over 272K input tokens receive higher long-context rates ($20.00 in / $75.00 out); batch/Flex are 50% of standard and fast mode is 2x (OpenAI API documentation).
- **Architecture:** Proprietary; uses a new "recurrent depth" reasoning technique. OpenAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2: **53/100**, rank **#6/210** (Artificial Analysis, accessed 2026-09-29; index version now matches the current v4.3.2 methodology, so 53 stands as measured)
- OpenAI launch benchmarks: Terminal-Bench 4.0 **57.9%**; BrowseComp **91.5%**; AutomationBench **41.4%**; BenchCAD **95.9%**; Agents' Last Exam **59.3%**; OSWorld 2.0 **72.6%**; ScreenSpot-Pro **92.7%**
- Output speed: **59.1 tokens/s**; time to first answer token: **305.63 s** (Artificial Analysis, accessed 2026-09-29)
- Tau3-Banking / Tau2-Bench: **no verified public score found** as a standalone value on the reviewed pages
- GDPval-AA: **no verified public score found** as a standalone value on the reviewed pages
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **53** (accessed 2026-09-29)
- OpenAI launch: GPQA Diamond **96.0%**; FrontierMath Tier 4 v2 **97.6%**; ARC-AGI-3 **99.9%**; HLE with tools **57.2%**
- LCR / MLCR / CritPt / Omniscience Accuracy / Hallucination Rate: **no verified public score found** as standalone values on the reviewed pages

Coding:

- DeepSWE v1.1: **74.1%**; FrontierCode 1.1 Extended **64.5%**; FrontierCode 1.1 Main **53.3%** (OpenAI launch)
- Artificial Analysis Coding Agent Index v1.4: **67.0** (in Codex; AA, accessed 2026-09-29)
- Terminal-Bench 4.0: **57.9%** (OpenAI launch; new frontier, ahead of GPT-5.6 Sol at 37.3%)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode: **no verified public score found**

Long context:

- OpenAI MRCR v2 8-needle **512K–1M: 96.3%**; **256K–512K: 100.0%** (OpenAI launch) — a direct retrieval-at-length result for this exact model.
- Native window is 1,050,000 input tokens with 128,000 maximum output; pricing steps up above 272K input tokens.

Sources consulted: [OpenAI GPT-6 Astra model documentation](https://platform.openai.com/docs/models/gpt-6-astra), [OpenAI GPT-6 Astra launch post](https://openai.com/index/gpt-6-astra), [Artificial Analysis GPT-6 Astra](https://artificialanalysis.ai/models/gpt-6-astra), [Artificial Analysis "Benchmarking GPT-6 Astra"](https://artificialanalysis.ai/articles/benchmarking-gpt-6-astra), and [Wikipedia GPT-6 Astra](https://en.wikipedia.org/wiki/GPT-6_Astra), accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 96/100.** OpenAI documents broad tool support including web search, file search, code interpreter, hosted shell, apply patch, computer use, MCP, and tool search, and the launch row now supplies measured agent evidence (Terminal-Bench 4.0 57.9%, BrowseComp 91.5%, OSWorld 2.0 72.6%, ScreenSpot-Pro 92.7%); still capped short of the top band by the very high 305.63 s time to first answer token.
- **Reasoning: 96/100.** The AA Intelligence Index of 53 on v4.3.2 sits near the top of the reviewed leaderboard, backed by GPQA Diamond 96.0%, FrontierMath Tier 4 97.6%, and ARC-AGI-3 99.9%; no separate HLE, LCR, CritPt, or hallucination value is published on the reviewed pages.
- **Context window: 98/100.** OpenAI verifies 1,050,000 input tokens and 128,000 output tokens, exceeding the 1M tier, and now also publishes a direct MRCR retrieval result of 96.3% at 512K–1M; held at 98 rather than 100 because pricing steps up above 272K.
- **Multimodal: 65/100.** Text and image input are supported, but audio and video are not.
- **Coding: 92/100.** DeepSWE v1.1 at 74.1%, Terminal-Bench 4.0 at 57.9%, and an AA Coding Agent Index of 67.0 are strong measured coding evidence; held at 92 because no SWE-bench Verified or LiveCodeBench figure is published.
- **Cost efficiency: 30/100.** Standard pricing is $10/$50 per 1M input/output tokens, with long-context surcharges, cache fees, and a 2x fast mode; this is an expensive paid model.
- **Overall Score: 89.4/100.** (96 + 96 + 98 + 65 + 92) / 5 = 447 / 5 = 89.4. Best fit: high-stakes, tool-heavy reasoning and coding where frontier capability matters more than latency or price.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of OpenAI model documentation and launch benchmarks, Artificial Analysis, and public release records; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
