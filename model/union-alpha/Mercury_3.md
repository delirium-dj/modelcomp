# Union Alpha — findings by Mercury 3

- Source: Stealth preview (OpenRouter `stealth/union-alpha`; later revealed as "Pareto 26.9" by Circuit & Chisel / Unbiased)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha
- **Short description:** A free stealth preview model on OpenRouter (added 2026-09-16) for research, coding, and agentic workflows, built as a parallel Mixture-of-Agents consensus pipeline (3–4 specialized base models, tree-sitter syntax verification, aggregator synthesis). Later revealed to be "Pareto 26.9" by Circuit & Chisel / Unbiased.
- **Provider / access:** OpenRouter (`stealth/union-alpha`, OpenAI-compatible), OpenCode (`opencode-go/union-alpha`), Cloudflare AI Gateway; free during the preview period; developer was initially anonymous.
- **Release / knowledge:** Released 2026-09-16 (preview); knowledge cutoff not published.
- **IDs:** `stealth/union-alpha` (OpenRouter).
- **Context window:** 262,144 tokens (256K marketed); max output 131,072.
- **Modalities:** text + image input; text output; tool calling (tools + tool_choice); JSON output (no schema enforcement); 8 languages supported.
- **Pricing (as of 2026-11):** $0 during preview (rate-limited, temporary); eventual price unannounced.
- **Architecture:** parallel MoA routing (speculative fan-out, syntax verification, consensus synthesis); closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench v4.0: **52.0%** (announced, preliminary, not independently measured per Benchmark Heaven, 2026-09-18)
- Community reports of reliable tool-calling across 120 consecutive steps (Cline community)

Reasoning / knowledge:

- MMLU-Pro: **89.8%** (union-alpha.org self-published; vs GPT-6 Astra 91.2%)
- LiveBench (2026-06-25): **376.1** (Benchmark Heaven, 2026-09-25)
- HumanEval+: **91.8%** (self-published)

Coding:

- SWE-bench Verified: **74.2%** (union-alpha.org; vs GPT-6 Astra 79.4%, Claude 3.7 Sonnet 70.3%)
- DeepSWE: **74.0%** (self-published; Benchmark Heaven lists announced 73.0%; Siora reports ~73% vs GPT-6 Astra/Opus 5 at 74%)

Long context:

- 256K–262K verified via API; no independent long-context retrieval benchmark captured

Multimodal:

- Text+image in, text out; screenshot-based debugging supported

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench v4.0 52.0% (preliminary, announced) plus strong community tool-calling reports; agentic pipeline architecture is credible but aggregate results are not yet independently verified.
- **Reasoning: 85/100.** MMLU-Pro 89.8% and LiveBench 376.1 are strong; self-published numbers need independent confirmation.
- **Context window: 80/100.** 262K verified — solid, below the 1M frontier.
- **Multimodal: 72/100.** Text+image input with text output; no video/audio, no generation.
- **Coding: 90/100.** SWE-bench Verified 74.2% and DeepSWE 74.0% place it in the frontier pack (1 point off GPT-6 Astra/Opus 5 per Siora); numbers are self-published/announced.
- **Cost efficiency: 95/100.** Free during preview with claimed zero data retention — extraordinary short-term value; temporary and rate-limited, no SLA.
- **Overall Score: 82/100.** Mean of the five non-cost dims (84+85+80+72+90)/5 = 82.2 → 82. Best-fit: the best free frontier-adjacent coding/research model during its preview window; treat as a preview — don't build critical infrastructure on an unclaimed operator.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenRouter: stealth/union-alpha](https://openrouter.ai/stealth/union-alpha)
  - [Union Alpha official site (benchmarks, MoA architecture, access)](https://union-alpha.org/)
  - [Union Alpha (revealed identity): Pricing, Benchmarks & API](https://union-alpha.com/)
  - [Benchmark Heaven: Union Alpha benchmarks & cost](https://benchmarkheaven.com/models/union-alpha::default)
  - [Siora Labs: Union Alpha deep dive (specs, throughput, Ox Alpha lineage)](https://sioralabs.com/blog/union-alpha-deep-dive)
  - [3K1O: Union Alpha on OpenRouter — honest scorecard](https://3k1o.blogspot.com/2026/09/union-alpha-on-openrouter-honest.html)
  - [Progressive Robot: Union Alpha essential facts](https://www.progressiverobot.com/2026/09/16/union-alpha-stealth-coding-model-free-opencode-openrouter/)
- Future sources: add a new file next to this one using the same headings.
