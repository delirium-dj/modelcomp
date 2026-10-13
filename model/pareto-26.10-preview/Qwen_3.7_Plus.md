# Pareto 26.10 Preview — findings by Qwen 3.7 Plus
- Source: Unbiased/Pareto 26.10 Preview (`opencode/pareto-26.10-preview`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased AI's composite/blended multimodal preview (October 2026) for research, coding, and agentic workflows. Built by Circuit & Chisel, a remote-first US/Canada team. Unlike single-model systems, Pareto runs several models on the same request and returns one answer, preserving prompt caching across turns. Achieved 92.4% on GPQA-Diamond, 69.9% on DeepSWE (at $0.24/task vs. Fable 5's $13.50/task — ~56x cheaper), 50.8% on Terminal-Bench 4.0, and 49.9% on HLE (text only). The 1M context window supports 131K output. Pricing is exceptionally low at $0.80/$3.20 per 1M. Unbiased publishes losses alongside wins (transparent benchmarking). Limited independent verification as a preview release.
- **Provider / access:** Unbiased AI (Circuit & Chisel). Proprietary composite.
- **Release / knowledge:** October 1, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/pareto-26.10-preview`
- **Context window:** 1,048,576 tokens (1M); 131,072 output
- **Modalities:** Text + image in; text out
- **Pricing:** $0.80/$3.20 per 1M; $0.03 cached

### Raw benchmarks found

Agent / tool use: Terminal-Bench 4.0 50.80% · DeepSWE 69.9% (at $0.24/task).

Reasoning / knowledge: GPQA-Diamond 92.4% · HLE 49.9% (text only, vendor-run).

Coding: DeepSWE v1.1 69.9% (ties Fable 5 at 70.0% but at 56x lower cost per task).

Multimodal: Text + image input. No public multimodal benchmark scores published for this preview.

Long context: 1M native context window with 131K output.

### Normalized scores (1–100)

- **Tool use: 52/100.** Terminal-Bench 4.0 50.80% trails GPT 6 Astra (58%) and Claude Fable 5.1 (56%). DeepSWE 69.9% ties Fable 5 (70.0%) at dramatically lower cost. Tool calling supported. Limited by preview status and few agentic benchmarks.
- **Reasoning: 65/100.** GPQA-Diamond 92.4% is strong. HLE 49.9% (text only) is competitive. However, these are vendor-run preliminary results with limited independent verification. The composite architecture may not generalize like single-model reasoning.
- **Context window: 88/100.** 1M context with 131K output is excellent. Supports long-document analysis and extended agentic sessions.
- **Multimodal: 45/100.** Text + image input only (no audio/video). No public multimodal benchmark scores published for this preview. The composite approach may not optimize for vision-specific tasks.
- **Coding: 62/100.** DeepSWE 69.9% at $0.24/task is remarkable value (56x cheaper than Fable 5 at equivalent performance). However, only one coding benchmark is available, and Terminal-Bench 4.0 at 50.80% trails frontier models. Limited coverage for a preview.
- **Cost efficiency: 88/100.** $0.80/$3.20 per 1M is exceptionally low for frontier-class performance. DeepSWE at $0.24/task vs. $13.50/task for equivalent Fable 5 performance demonstrates outstanding cost efficiency. Cached input at $0.03 further reduces costs.
- **Overall Score: 62/100.** Mean of Tool (52) + Reasoning (65) + Context (88) + Multimodal (45) + Coding (62) = 312/5 = 62.4.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
