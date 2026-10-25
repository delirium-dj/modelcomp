# GPT-5 nano — findings by Muse Glimmer 30B

- Source: OpenAI / gpt-5-nano
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5 nano
- **Short description:** OpenAI's fastest, cheapest version of GPT-5, positioned for high-volume summarization, classification and low-latency text tasks. Deprecation announced; OpenAI recommends GPT-5.6 Luna for new speed/cost-sensitive workloads.
- **Provider / access:** OpenAI API `openai/gpt-5-nano`; also served via Azure and OpenRouter. Chat Completions and Responses API. Reasoning token support advertised.
- **Release / knowledge:** 2025-08-07 default snapshot `gpt-5-nano-2025-08-07`; knowledge cutoff May 31 2024 per OpenAI docs, May 30 2024 per Artificial Analysis.
- **IDs:** `openai/gpt-5-nano`
- **Context window:** 400,000 tokens total, max input 272,000, max output 128,000. Verified by OpenAI model docs and Artificial Analysis.
- **Modalities:** Input text, image; Output text. Reasoning yes, tool calls yes via function_calling, file_search, web_search; JSON mode / structured outputs supported. No audio/video in/out.
- **Pricing (as of 2026-10-25):** $0.05 /1M input, $0.005 /1M cached input, $0.40 /1M output via OpenAI API. OpenRouter Azure routing lists $0.055 /1M input, $0.44 /1M output. Cached discount 90% per Artificial Analysis.
- **Architecture:** proprietary, parameters undisclosed.

### Raw benchmarks found

> Sources: OpenAI model docs 2025-08-07, Artificial Analysis GPT-5 nano release page and GPT-5 nano High page, OpenRouter model page. Three independent searches performed.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **13** estimated — Artificial Analysis GPT-5 nano High, Intelligence Index v4.3.2, estimated pending independent evaluation
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- AA-LCR v1.1: no public numeric score published; 400k context window reported

Additional metrics:

- Output speed: **136.6 tokens/s** — Artificial Analysis, OpenAI API
- Context window: 400k tokens — OpenAI docs, Artificial Analysis

Conflicting results:

- Knowledge cutoff: OpenAI docs state May 31 2024; Artificial Analysis lists May 30 2024. Difference is one day, likely rounding/reporting variance.
- Pricing: OpenAI lists $0.05/$0.40; OpenRouter Azure routing lists $0.055/$0.44. Variance reflects provider markup.

### Normalized scores (1–100)

- **Tool use: 48/100.** No public Terminal-Bench/Tau3/Claw scores; model is marketed for summarization/classification with function_calling support, but independent agentic/tool benchmarks are absent. Capped by lack of verified tool-use data.
- **Reasoning: 48/100.** Artificial Analysis Intelligence Index 13 estimated is low relative to frontier models; no public GPQA/HLE numbers. Reasoning token support present but independent evidence weak.
- **Context window: 73/100.** 400k tokens places it in 200K–500K tier per methodology. No verified long-context retrieval score at window length.
- **Multimodal: 65/100.** Text and image input, text output. Image input lifts score above text-only baseline, but no video/audio or multimodal benchmark numbers published.
- **Coding: 45/100.** No verified SWE-bench/LiveCodeBench/SciCode scores. Positioning as nano/summarization suggests limited coding capability; score reflects absence of evidence.
- **Cost efficiency: 88/100.** $0.05 /1M input and $0.40 /1M output is very low cost; cached input $0.005 improves efficiency. Slightly below perfect due to $0.40 output vs sub-$0.15 median for price class.
- **Overall Score: 55.8/100.** Mean of five quality dims (48+48+73+65+45)/5 = 55.8 → 56 rounded. Best-fit: low-cost high-throughput summarizer/classifier with modest reasoning/context, not a primary coding/agentic model.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
