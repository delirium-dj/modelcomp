# GPT-5.6 Luna — findings by GPT 5.6 Luna

- Source: OpenAI/GPT-5.6 Luna (`gpt-5.6-luna`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI’s cost-optimized GPT-5.6 tier for high-volume, latency-sensitive workloads and agent automation.
- **Provider / access:** OpenAI API Chat Completions and Responses API; model ID `gpt-5.6-luna`; no free API tier is listed.
- **Release / knowledge:** Public API documentation lists a 2026-02-16 knowledge cutoff.
- **IDs:** `openai/gpt-5.6-luna` / `gpt-5.6-luna`.
- **Context window:** 1,050,000 tokens; maximum input 922,000 and maximum output 128,000 tokens. Prompts above 272K receive higher pricing multipliers.
- **Modalities:** Text and image input with text output; reasoning, streaming, function calling, structured outputs, and Responses tools including web/file search, code interpreter, shell, computer use, and MCP.
- **Pricing (as of 2026-11-02):** $0.20 input / $0.02 cached input / $1.20 output per 1M tokens; prompts above 272K are billed at 2x input and 1.5x output for the full request.
- **Architecture:** Proprietary; parameter count and MoE/dense details are not disclosed by OpenAI.

### Raw benchmarks found

- BenchLM snapshot (2026-10-29): composite **63.8/100**, rank **#37/1004**, with 53 of 724 benchmarks covered; coverage is explicitly partial. ([BenchLM GPT-5.6 Luna](https://benchlm.ai/models/gpt-5-6-luna))
- Agent rows: Terminal-Bench 3.0 **14.3%** (different benchmark version); Terminal-Bench 2.1 **84.7%**; BrowseComp **83.3%**; OSWorld 2.0 **45.6%**; CyberGym **77.9%**; Toolathlon **53.4%**; GDPval-AA **1582**.
- Coding rows: SWE-bench Pro **62.7%**; Terminal-Bench 2.1 **84.7%**; DeepSWE **67.2%**; FrontierCode 1.1 Extended **55.1%**; CursorBench 3.2 **61.1%**; SWE-bench (Vals) **93.0%**; AA Coding Index **71.5%**. ([BenchLM GPT-5.6 Luna](https://benchlm.ai/models/gpt-5-6-luna))
- Reasoning/knowledge rows: ARC-AGI-2 **59.5%**; AA-LCR **83.7%**; GPQA Diamond **92.3%**; HLE **39.5%**; Artificial Analysis Intelligence Index **51.2%**; FrontierMath v2 tiers 1–3 **78.6%** and tier 4 **58.5%**.
- Multimodal rows: MMMU-Pro **78.4%** without tools / **79.5%** with Python; ExtractBench **91.16%**; ParseBench **66.89%**.
- Long-context rows from OpenAI’s comparison table: MRCR v2 **41.3%** at 256K–512K and **41.3%** at 512K–1M; GraphWalks BFS **81.3% F1** at 256K and **51.2% F1** at 1M.

### Normalized scores (1–100)

- **Tool use: 83/100.** TB2.1, BrowseComp, CyberGym, GDPval, and native Responses tools are strong, while OSWorld, Automation-style rows, and harness spread cap the score.
- **Reasoning: 89/100.** GPQA 92.3%, FrontierMath, ARC-AGI-2, and HLE provide a strong profile, though the Artificial Analysis index is below the very top tier.
- **Context window: 72/100.** The nominal 1.05M window is large, but MRCR remains 41.3% and GraphWalks falls to 51.2% at 1M.
- **Multimodal: 80/100.** Image input, MMMU-Pro, ExtractBench, and ParseBench establish capable vision/document work; output remains text and audio/video are unsupported.
- **Coding: 82/100.** Terminal-Bench and Vals SWE-bench are strong, but SWE-bench Pro, CursorBench, and FrontierCode show practical task variance.
- **Cost efficiency: 98/100.** $0.20/$1.20 is exceptionally low for a reasoning-capable tool model, subject to long-context surcharges.
- **Overall Score: 81.2/100.** Mean of the five quality dimensions `(83 + 89 + 72 + 80 + 82) / 5 = 81.2`; best fit is inexpensive high-volume agents where cost matters more than perfect 1M retrieval.

## Evidence notes

- Terminal-Bench 3.0 is retained as a separate version and is not used to overwrite Terminal-Bench 2.1. Official, Artificial Analysis, Vals, Cursor, and BenchLM rows are likewise kept labeled by harness/source.
- BenchLM’s composite is a partial external reference; the normalized Overall is derived from the five quality dimensions and excludes cost efficiency.

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current OpenAI model documentation and GPT-5.6 evaluation tables, BenchLM’s October 29 profile, Vals, Cursor, and Artificial Analysis; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI GPT-5.6 Luna model documentation](https://developers.openai.com/api/docs/models/gpt-5.6-luna)
  - [OpenAI GPT-5.6 announcement/evaluations](https://openai.com/index/gpt-5-6/)
  - [BenchLM GPT-5.6 Luna profile](https://benchlm.ai/models/gpt-5-6-luna)
