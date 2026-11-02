# Claude Haiku 5.5 — findings by GPT 5.6 Luna

- Source: Anthropic / Claude Haiku 5.5
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fastest and least expensive current small model for high-volume, latency-sensitive classification, extraction, routing, browser use, and coding subagent work.
- **Provider / access:** Anthropic API model `claude-haiku-5-5`, also available through Amazon Bedrock, Google Cloud, Microsoft Foundry, and Anthropic-managed partner routes. Messages API and tool use are supported.
- **Release / knowledge:** Released 2026-10-07; reliable knowledge and training-data cutoff June 2026; active/latest status in Anthropic's current documentation.
- **IDs:** `anthropic/claude-haiku-5-5`; partner IDs are documented separately and are not new model identities.
- **Context window:** 1M tokens; synchronous maximum output 128K; Batch API beta supports up to 300K output with the documented header.
- **Modalities:** Text and image input, text output, adaptive thinking, function/tool use, browser/computer-use integrations, and structured workflows. No audio/video input or output was verified.
- **Pricing (as of 2026-11-02):** For prompts up to 100K, $0.10 input / $0.01 cache read / $0.125 5-minute cache write / $0.50 output per 1M tokens; over 100K, $0.50 / $0.05 / $0.625 / $2.50. Batch input/output are 50% off.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

> Anthropic's October 7 launch table is the primary exact-model source. BenchLM's October 29 profile adds independent rows and keeps the benchmark version labels.

Agent / tool use:

- GDPval-AA v2.1: **1620**; AA-Briefcase v1.1: **1578**; OSWorld 2.1 offline: **72.4%**; HLE with tools: **57.4%** (Anthropic launch/system-card evaluation).
- Terminal-Bench 4.0: **39.2%**; AA AutomationBench **35.4%**; AA Terminal-Bench 4.0 **32.8%**; Hermes Bench **71.0%** (Anthropic/BenchLM/independent rows).
- BenchLM composite: **66.42/100**, rank **#24/1004**, with 37/724 benchmarks covered; coverage is explicitly partial.

Reasoning / knowledge:

- HLE without tools: **45.9%**; ARC-AGI-1 **89.0%**; ARC-AGI-2 **61.3%**; AA-LCR **82.7%**; CritPt **18.9%**; MLCR-AA **35.0%**.
- Artificial Analysis Intelligence Index **36.2%**, AA-HLE **44.4%**, and Omniscience accuracy / hallucination rate / index **34.7% / 34.2% / 12.3%**.

Coding:

- FrontierCode 1.1 Main: **46.4%** (Anthropic system card); FrontierSWE v2 **43.8%**; AA-SciCode **55.0%**; FrontierCode 2.0 **27.7%**; Bug Hunt Bench **21.5 fixes** (BenchLM/independent rows).

Multimodal:

- Chartography without tools: **46.4%** (Anthropic launch table); ParseBench **56.10%**; Design Arena Website **1262** (BenchLM/provider rows).
- The model accepts image input but has no verified audio/video support.

Long context:

- Official context: **1M tokens**; AA-LCR **82.7%** is a positive long-context/reasoning proxy. No full-window MRCR/RULER score was published.

### Normalized scores (1–100)

- **Tool use: 83/100.** OSWorld 72.4%, HLE with tools 57.4%, GDPval 1620, and adaptive tool use are strong for a small model; Terminal-Bench 39.2% and AutomationBench 35.4% cap complex-agent confidence.
- **Reasoning: 84/100.** HLE 45.9% without tools, ARC-AGI-1 89%, LCR 82.7%, and AA-HLE 44.4% are strong, while the Intelligence Index 36.2% and ARC-AGI-3-level coverage remain less mature.
- **Context window: 94/100.** The 1M window, 128K output, and LCR 82.7% are directly documented/corroborated; no full-window retrieval result prevents 100.
- **Multimodal: 72/100.** Image input and Chartography 46.4% establish useful visual work, but visual scores are mid-range and audio/video are unsupported or unverified.
- **Coding: 79/100.** FrontierCode 1.1 at 46.4%, FrontierSWE 43.8%, and AA-SciCode 55.0% are useful small-model results, but complex coding agents remain below larger Claude tiers.
- **Cost efficiency: 98/100.** $0.10/$0.50 below 100K and fast latency make it unusually efficient; the over-100K surcharge and updated tokenizer prevent a perfect score.
- **Overall Score: 82.4/100.** Mean of the five quality dimensions `(83 + 84 + 94 + 72 + 79) / 5 = 82.4`; best fit is high-volume subagent, extraction, browser, and support work where latency and price dominate.

## Evidence notes

- Terminal-Bench 4.0, FrontierCode 1.1, OSWorld 2.1, and HLE tool/no-tool rows are preserved as separate benchmark versions and harness conditions.
- BenchLM's 66.42 composite is partial external coverage; the normalized Overall above excludes Cost efficiency and does not substitute for Anthropic's exact launch table.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Anthropic launch page and model documentation, the Haiku 5.5 system-card evaluation table, BenchLM's October 29 profile, Artificial Analysis, ARC Prize, and independent coding rows. Benchmark versions, effort/tool settings, and external versus vendor measurements were kept separate; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude Haiku 5.5 announcement](https://www.anthropic.com/claude-haiku-5-5)
  - [Claude Haiku 5.5 model documentation](https://platform.claude.com/docs/en/models/haiku-5-5/overview)
  - [BenchLM Claude Haiku 5.5 profile](https://benchlm.ai/models/claude-haiku-5-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
