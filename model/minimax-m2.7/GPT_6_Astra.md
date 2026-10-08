# MiniMax-M2.7 — findings by GPT 6 Astra

- Source: MiniMax / MiniMax-M2.7
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** MiniMax-M2.7.
- **Short description:** Open-weight reasoning model focused on agentic software engineering and professional work.
- **Provider / access:** MiniMax API and Agent; self-hosted Chat Completions through vLLM/SGLang.
- **Release / knowledge:** API launch March 18, 2026; knowledge cutoff unverified.
- **IDs:** `MiniMax-M2.7`, weights `MiniMaxAI/MiniMax-M2.7`; no verified free Zen ID.
- **Context window:** 204,800 positions in official config; API output cap not verified.
- **Modalities:** Text input/output with reasoning and tool calling. Generic pricing-table “multimodal” wording does not establish native vision for these weights; independent listing says no image support.
- **Pricing (as of 2026-10-08):** Standard $0.30 input / $1.20 output, cache read $0.06 / write $0.375 per million. Highspeed $0.60/$2.40 is a different serving tier. [Vendor prices](https://platform.minimax.io/subscribe/token-plan?tab=api-enterprise).
- **Architecture:** Approximately 229B parameters; MoE config routes eight of 256 experts, 62 layers. Custom license, not assumed Apache/MIT. [Official weights](https://huggingface.co/MiniMaxAI/MiniMax-M2.7), [config](https://huggingface.co/MiniMaxAI/MiniMax-M2.7/blob/main/config.json).

### Raw benchmarks found

- **Agent/tool use:** Vendor launch GDPval-AA 1,495 Elo; Terminal Bench 2 57%; internal skills adherence 97%. The Elo is the launch-era evaluation, not a current v2.1 rerun.
- **Coding:** Vendor SWE-Pro 56.22% and VIBE-Pro 55.6%; do not substitute these for SWE-bench Verified or Vibe Code Bench.
- **Reasoning:** Artificial Analysis comparison reports Intelligence Index **39**, explicitly v4.1.1. This mixed composite is a provisional reasoning proxy, not a standalone reasoning score; page crawl is from the prior month.
- **Long context:** Config capacity only; no verified full-window retrieval result found.
- **Missing:** GPQA Diamond, HLE, LCR, CritPt, Omniscience component values, TB2.1, Tau3, Claw-Eval, MCP-Atlas, LiveCodeBench and SciCode: no verified public score found in inspected text. Do not infer hidden chart values.

Sources: [MiniMax launch](https://www.minimax.io/news/minimax-m27-en), [Artificial Analysis v4.1.1 comparison](https://artificialanalysis.ai/models/comparisons/minimax-m2-7-vs-gpt-5-4-nano). No local benchmark run.

### Normalized scores (1–100)

- **Tool use: 76/100.** GDPval and terminal evidence support capable agents; launch harnesses and missing current tool suites limit the score.
- **Reasoning: 70/100.** Provisional mixed-index proxy of 39 supports useful reasoning, with low confidence absent standalone components.
- **Context window: 71/100.** Approximately 205k capacity, without verified retrieval at its limit.
- **Multimodal: 15/100.** Exact open model is text-only.
- **Coding: 78/100.** SWE-Pro and VIBE-Pro support practical engineering, capped below frontier performance.
- **Cost efficiency: 95/100.** $0.30/$1.20 is economical; hosting open weights still costs compute.
- **Overall Score: 62/100.** Half-up mean: (76 + 70 + 71 + 15 + 78) / 5 = 62. Text coding agents are its strongest fit; reasoning score remains provisional.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Fresh vendor, weights and independent evaluator research; normalized scores are interpretations.
- Future sources: Add a separate signed report alongside this file.

