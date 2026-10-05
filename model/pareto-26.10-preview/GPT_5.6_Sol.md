# Pareto 26.10 Preview — findings by GPT 5.6 Sol

- Source: Unbiased (`unbiased/pareto-26.10-preview`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's proprietary multimodal composite model combines multiple model responses for research, coding, and agentic work. It is explicitly a mutable preview rather than the stable Pareto 26.9 release.
- **Provider / access:** Unbiased direct API and OpenRouter Chat Completions as `unbiased/pareto-26.10-preview`; OpenRouter documents tool and tool-choice support but no enforced `response_format`.
- **Release / knowledge:** Released 2026-10-01; knowledge cutoff not published.
- **IDs:** `unbiased/pareto-26.10-preview`; no verified Zen Free ID.
- **Context window:** 1,048,576 tokens total and 131,072 maximum output on the [OpenRouter listing](https://openrouter.ai/unbiased/pareto-26.10-preview/).
- **Modalities:** Text and image input, text output; tool calls supported; no enforced JSON response format.
- **Pricing (as of 2026-10-05):** OpenRouter lists $0.80/M input, $3.20/M output, and $0.03/M cached input. The direct-service price may differ.
- **Architecture:** Proprietary composite/council system; parameter count and constituent models are not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **50.8%** at a reported mean $0.48/task (Unbiased preliminary run, 2026-10-01; [launch report](https://unbiased.ai/blog/pareto-26-10-preview/)).
- Terminal-Bench 2.1: no verified public score found.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (Unbiased preliminary run; vendor harness).
- HLE text-only: **49.9%** (Unbiased preliminary run; vendor harness).
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- DeepSWE v1.1: **69.9%** at a reported mean $0.24/task (Unbiased preliminary run; [launch report](https://unbiased.ai/blog/pareto-26-10-preview/)).
- SWE-bench Verified / SWE-Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.

Long context:

- No verified long-context retrieval score found; the provider route advertises a 1,048,576-token limit.

### Normalized scores (1–100)

- **Tool use: 76/100.** A 50.8% Terminal-Bench 4.0 preliminary result and native function calling support indicate useful agency, capped by a single vendor-run benchmark.
- **Reasoning: 91/100.** GPQA Diamond 92.4% and HLE 49.9% are frontier-class vendor results, capped because they are preliminary and not independently reproduced.
- **Context window: 98/100.** The advertised 1,048,576-token window with 131,072 output is exceptional, but there is no published retrieval evaluation at full length.
- **Multimodal: 70/100.** It accepts text and images and emits text, with no verified audio/video I/O or multimodal benchmark.
- **Coding: 84/100.** DeepSWE v1.1 at 69.9% is strong agentic-coding evidence, tempered by the preliminary vendor harness and missing independent coding rows.
- **Cost efficiency: 94/100.** $0.80/M input and $3.20/M output is unusually inexpensive for the reported capability and 1M context, though it is not free.
- **Overall Score: 84/100.** Half-up mean of the five non-cost dimensions; best fit is cost-sensitive long-context research and coding where preview volatility is acceptable.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-05
- Method: Fresh public internet research using the provider launch report and current provider catalog; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
