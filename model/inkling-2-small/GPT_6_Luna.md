# Fledge Alpha — findings by GPT-6 Luna

- Source: OpenCode Zen/Fledge Alpha Free
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha
- **Short description:** An undisclosed OpenCode Zen preview route that accepted text and images and supported reasoning and tools. The maker and underlying model are unknown; independent observations suggest it may have routed among models, but do not establish that.
- **Provider / access:** Former OpenCode Zen free-tier preview, OpenAI-compatible Chat Completions; the catalog identifier was `opencode/fledge-alpha-free` and its recorded base URL was `https://opencode.ai/inference/openai/v1`. OpenCode removed it from its Zen documentation on 2026-10-08, and its 2026-10-11 release lists the removal; no working replacement endpoint was verified.
- **Release / knowledge:** Cataloged 2026-10-01; no knowledge cutoff verified.
- **IDs:** Tracked subject `fledge-alpha`; former catalog/API alias `opencode/fledge-alpha-free`. No canonical upstream model ID is known.
- **Context window:** 1,048,576 tokens; maximum output 131,072. The operator-provided served-model metadata says input, output, and reasoning tokens share the context budget.
- **Modalities:** Text and image input; text output. Reasoning supported with route-specific `low`, `high`, and `max` effort controls; tool calls supported. Audio, video, PDF, and JSON-mode support were not verified.
- **Pricing (as of 2026-11-01):** The former OpenCode Zen preview was listed at $0 input / $0 output per 1M tokens; the route is now discontinued, so this is historical pricing, not a currently available offer. Cached-input pricing and data-use/retention terms were not verified.
- **Architecture:** Undisclosed; the catalog marks weights as not open. Stealth Models reports variable token counts and output behavior consistent with a possible router, but this remains a hypothesis, not a confirmed architecture or identity.

### Raw benchmarks found

> The public measurements below concern the `opencode/fledge-alpha-free` route during its October 2026 preview. They identify the served route, not an independently verified fixed checkpoint; the underlying service may have varied.

Agent / tool use:

- Tool calling was listed as supported, but no verified BFCL, Terminal-Bench, or standard agent/tool-use score was found.
- OpenVibeEval frontend generation: **81/100 average accessibility** across 8 OpenCode-harness runs (2026-10-03); category means were Marketing **91.5** (n=2) and Dashboard **38.0** (n=2). This measures generated-page accessibility, not tool-use accuracy or general coding quality.

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (**36/39**, 95% CI **79.7–97.3%**); MMLU-Pro: **92.0%** (**92/100**); Humanity's Last Exam, text-only: **25.4%** (**17/67**) (Stealth Models research, 2026-10-03).
- StealthMark: **35.8/100**, rank **41/55**; component scores General Intelligence **27.1/100** and Visual Intelligence **45.2/100**. This is a small, custom suite; seven benchmark results were reported and its two game tests had no run.
- Single-step reasoning efficiency: **44** (rank 30/53; Stealth Models). This is an efficiency index, not accuracy.

Coding / visual construction:

- StealthMark's seven SVG tasks: Selfie **61.1**, Mona Lisa **28.3**, Beach **43.4**, Newton's Mirror **16.4**, Ground Truth **36.8**, Raccoon **63.4**, and Pelican **60.5** (all /100; Stealth Models, preview-period route).
- OpenVibeEval accessibility average: **81/100** across 8 frontend builds (OpenCode harness); results varied from **38/100** on two dashboard tasks to **100/100** on two other tasks. It is a narrow accessibility proxy, not SWE-bench or code correctness.
- No verified SWE-bench, LiveCodeBench, SciCode, or Terminal-Bench score found.

Long context:

- The catalog listed a 1,048,576-token window, but no verified retrieval result at a measured long-context length was found.

### Normalized scores (1–100)

- **Tool use: 52/100.** The route supported tool calls and OpenVibeEval shows some task completion, but that suite does not measure tool-call accuracy; no standardized tool benchmark is available, so this is a low-confidence proxy.
- **Reasoning: 78/100.** GPQA Diamond 92.3% and MMLU-Pro 92.0% are strong, but both use small samples, HLE is 25.4%, and StealthMark General Intelligence is 27.1; route variability further caps confidence.
- **Context window: 95/100.** The served catalog listed 1,048,576 tokens, meeting the 1M tier; no retrieval test at 512K or 1M supports a higher score.
- **Multimodal: 65/100.** Text-plus-image input and visual benchmark results support image understanding; output remained text, with no verified audio/video input or non-text generation.
- **Coding: 62/100.** OpenVibeEval averaged 81 accessibility points across eight frontend generations and StealthMark SVG tasks ranged 16.4–63.4, but neither is a standard software-engineering benchmark; no SWE-bench or similar score was verified.
- **Cost efficiency: 100/100.** OpenCode listed $0 input and output for the preview, but access ended in October 2026; this score describes its historical price only.
- **Overall Score: 70/100.** Half-up mean of the five quality dimensions (52 + 78 + 95 + 65 + 62 = 352; 352/5 = 70.4); treat as historical evidence about a discontinued, possibly routed service, not a stable current model recommendation.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Fresh public web research using OpenCode catalog/release records and independent Stealth Models and OpenVibeEval measurements. Benchmark samples are small and may reflect a changing route; normalized scores are interpretations, not official vendor scores.
- Reference URLs:
  - [OpenCode model catalog record (identifier, route, limits, capabilities, price, status)](https://raw.githubusercontent.com/anomalyco/models.dev/refs/heads/dev/providers/opencode/models/fledge-alpha-free.toml)
  - [OpenCode catalog addition with served-model specifications](https://github.com/anomalyco/models.dev/pull/8566)
  - [OpenCode route-specific reasoning controls](https://github.com/anomalyco/models.dev/pull/8568)
  - [OpenCode removal of Fledge Alpha from Zen documentation](https://github.com/anomalyco/opencode/pull/53984)
  - [OpenCode v1.19.0 release noting the removal](https://github.com/anomalyco/opencode/releases/tag/v1.19.0)
  - [OpenCode historical Fledge usage data](https://opencode.ai/data/unknown/fledge-alpha)
  - [Stealth Models Fledge Alpha research and academic results](https://stealthmodels.com/fledge-alpha)
  - [StealthMark benchmark results](https://stealthmodels.com/benchmarks/models/fledge-alpha)
  - [OpenVibeEval Fledge Alpha benchmark runs](https://openvibeeval.com/models/fledge-alpha/)
