# Mercury 2.5 - findings by GPT 5.6 Terra

- Source: Inception (`mercury-2.5`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception's proprietary diffusion reasoning LLM for fast chat, coding subagents, and structured agent workflows. It prioritizes throughput and parallel tool use, but public independent evaluations show uneven task quality.
- **Provider / access:** OpenCode Zen `opencode/mercury-2.5`; Inception's OpenAI-compatible `v1/chat/completions` API uses the exact `mercury-2.5` ID. It is also available as OpenRouter `inception/mercury-2.5`.
- **Release / knowledge:** Released 2026-09-08; knowledge cutoff not published.
- **IDs:** `opencode/mercury-2.5`, `mercury-2.5`, `inception/mercury-2.5`.
- **Context window:** 260K total, 65,536 maximum output, documented by [Inception's model reference](https://docs.inceptionlabs.ai/get-started/models).
- **Modalities:** Text input/output only; tunable reasoning, tool calling, and structured JSON outputs are supported.
- **Pricing (as of 2026-10-18):** List $0.20 input / $0.75 output / $0.02 cached per 1M tokens; current launch pricing is $0.04 / $0.15 / $0.004, per [Inception's model reference](https://docs.inceptionlabs.ai/get-started/models).
- **Architecture:** Proprietary diffusion LLM; Inception has not published parameter counts.

### Raw benchmarks found

Agent / tool use:

- Tau3-bench: **96.0%** ([BenchLM](https://benchlm.ai/models/mercury-2-5), attributing the figure to Inception's launch chart).
- DeepSearchQA: **34.0%** ([BenchLM](https://benchlm.ai/models/mercury-2-5), attributing the figure to Inception's launch chart).
- Terminal-Bench 2.1: **34.5%** ([BenchLM](https://benchlm.ai/models/mercury-2-5), sourced from Vals AI).
- GDPval-AA: **0.0%** ([Artificial Analysis](https://artificialanalysis.ai/models/mercury-2-5)).

Reasoning / knowledge:

- GPQA Diamond: **79.0%** ([BenchLM](https://benchlm.ai/models/mercury-2-5), attributing the figure to Inception's launch chart).
- AA-LCR: **68.0%** ([BenchLM](https://benchlm.ai/models/mercury-2-5), attributing the figure to Inception's launch chart).
- Artificial Analysis Intelligence Index: **12.3** ([Artificial Analysis](https://artificialanalysis.ai/models/mercury-2-5)).
- HLE: **11.8%** and CritPt: **0.0%** ([Artificial Analysis](https://artificialanalysis.ai/models/mercury-2-5)).

Coding:

- SciCode: **38.0%**; AA-SciCode: **38.5%** ([BenchLM](https://benchlm.ai/models/mercury-2-5) and [Artificial Analysis](https://artificialanalysis.ai/models/mercury-2-5)).
- Vibe Code Bench: **3.68%** and Terminal-Bench 4.0: **0.00%** ([Vals AI](https://www.vals.ai/models/inception_mercury-2.5)).

Long context:

- No verified public long-context retrieval result was found; the 260K window is a documented API limit, not an evidence of retrieval quality.

### Normalized scores (1-100)

- **Tool use: 52/100.** Parallel tool calls and a 96.0% Tau3 result show capability, but 34.5% Terminal-Bench 2.1 and 0.0% GDPval-AA prevent a stronger score.
- **Reasoning: 57/100.** GPQA Diamond at 79.0% and AA-LCR at 68.0% are useful, while the 12.3 AA Intelligence Index, 11.8% HLE, and 0.0% CritPt cap the rating.
- **Context window: 72/100.** The documented 260K window is solid in the 200K-500K tier, with no public retrieval evaluation to justify a higher score.
- **Multimodal: 15/100.** Mercury 2.5 accepts and returns text only.
- **Coding: 45/100.** SciCode is about 38%, while Vals reports 3.68% on Vibe Code Bench and 0.00% on Terminal-Bench 4.0.
- **Cost efficiency: 98/100.** The current $0.04/$0.15 launch price is exceptionally low for a proprietary reasoning API, though it is discounted rather than free.
- **Overall Score: 48/100.** The half-up mean of the five quality dimensions is 48.2 -> 48; use it for latency-sensitive support tasks, not as a primary coding or reasoning agent.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** - 2026-10-18
- Method: public internet research using Inception documentation plus Artificial Analysis, BenchLM, and Vals AI; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
