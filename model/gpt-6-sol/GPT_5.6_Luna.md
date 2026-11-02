# GPT-6 Sol — findings by GPT 5.6 Luna

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's GPT-6 reasoning model for complex coding and agentic workflows, positioned below GPT-6.1 Sol and GPT-6 Astra.
- **Provider / access:** OpenAI API through Responses and Chat Completions; Responses is required for built-in tools and reasoning-enabled function calling. OpenCode Zen exposes `opencode/gpt-6-sol` as a paid route.
- **Release / knowledge:** Released September 22, 2026; knowledge cutoff April 20, 2026.
- **IDs:** `gpt-6-sol` / `openai/gpt-6-sol`.
- **Context window:** 1,050,000 tokens; maximum input 922,000 and maximum output 128,000 tokens.
- **Modalities:** Text and image input, text output, configurable reasoning effort, structured outputs, function calls, web/file search, code interpreter, hosted shell, computer use, MCP, and patch tools.
- **Pricing (as of 2026-11-02):** $2 input / $10 output per 1M tokens; cached input is $0.20/M and cache writes are $2.50/M. Requests above 272K input tokens are charged at 2× input/cache and 1.5× output; Batch and Flex are 50% off.
- **Architecture:** Proprietary; parameter count and weights are undisclosed. Reasoning effort supports `none`, `low`, `medium`, `high`, `xhigh`, and `max`.

## Raw benchmarks found

- BenchLM current profile: **77.97/100, #11 of 1,004**, with partial coverage across 40 benchmark rows.
- Vals Index: **62.57%**, ranked **#8 of 65**; Vals reports a measured cost of about **$7.56 per test** at max reasoning effort.
- GDPval-AA: **1509 Elo**; AA-LCR: **83.7%**; MazeBench: **7%**; Hermes Index: **44.1%** and Hermes Bench: **73.5%**.
- DeepSWE v1.1: **68.8%**; SciCode: **58%**; FrontierCode 2.0: **34.3%**.
- ExtractBench: **94.57%**; ParseBench: **68.89%**; AA-MMMU-Pro: **82.9%**.
- The current independent profile does not expose a full 512K+ retrieval curve; AA-LCR is treated as long-context reasoning rather than retrieval.

## Normalized scores (1–100)

- **Tool use: 87/100.** Broad Responses-tool coverage, GDPval evidence, Vals performance, and Hermes results support strong agent use; MazeBench and partial coverage cap confidence.
- **Reasoning: 88/100.** AA-LCR 83.7%, HLE 48%, CritPt 31%, and the current independent composite support strong reasoning without putting it in the GPT-6.1/Astra tier.
- **Context window: 97/100.** The 1.05M window, 922K maximum input, and 128K output are unusually large; no full-window retrieval curve was found.
- **Multimodal: 87/100.** Text/image input plus AA-MMMU-Pro 82.9% provide direct evidence, while output remains text and audio/video are not native modalities.
- **Coding: 89/100.** DeepSWE 68.8%, SciCode 58%, FrontierCode 34.3%, and ExtractBench 94.57% indicate strong coding-agent utility with meaningful harness variance.
- **Cost efficiency: 90/100.** $2/$10 pricing is competitive for a 1M-context reasoning model, though long-context requests and high-effort runs can raise effective cost.
- **Overall Score: 89.6/100.** Mean of the five quality dimensions `(87 + 88 + 97 + 87 + 89) / 5 = 89.6`; best fit is complex coding and tool-driven work that benefits from a very large context window.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current OpenAI model/pricing documentation, OpenAI launch material, BenchLM's October 29 profile, Vals, and Artificial Analysis; vendor and independent harness results were kept distinct, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [OpenAI GPT-6 Sol model documentation](https://developers.openai.com/api/docs/models/gpt-6-sol)
  - [OpenAI GPT-6 Sol and Luna announcement](https://openai.com/index/introducing-gpt-6-sol-and-luna/)
  - [BenchLM GPT-6 Sol profile](https://benchlm.ai/models/gpt-6-sol)
  - [Vals GPT-6 Sol profile](https://www.vals.ai/models/openai_gpt-6-sol)
