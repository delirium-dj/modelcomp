# GPT-5-Codex — findings by GPT 5.6 Luna

- Source: OpenAI (`gpt-5-codex`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5-Codex
- **Short description:** OpenAI's GPT-5 variant optimized for agentic software engineering in Codex-like environments. It is a distinct coding-tuned model, not the general GPT-5 model and not a later numbered Codex successor.
- **Provider / access:** OpenAI Responses API at `gpt-5-codex`; Codex CLI, IDE, cloud, and code-review surfaces. Chat Completions is not supported.
- **Release / knowledge:** 2025-09-15 release; knowledge cutoff 2024-09-30.
- **IDs:** `openai/gpt-5-codex` and OpenAI API ID `gpt-5-codex`; no Free ID exists on Zen.
- **Context window:** 400,000 total tokens, with 272,000 maximum input and 128,000 maximum output, verified in the [official model documentation](https://developers.openai.com/api/docs/models/gpt-5-codex).
- **Modalities:** Text and image input; text output; reasoning-token support; function calling and web search; structured outputs and streaming; Responses API only.
- **Pricing (as of 2026-10-23):** OpenAI native $1.25 per 1M input, $0.125 cached input, and $10 per 1M output tokens. OpenCode Zen lists $1.07/$8.50 with $0.107 cached input in the tracked metadata; no free tier.
- **Architecture:** Proprietary; parameter count and architecture are undisclosed.

### Raw benchmarks found

> Exact-model figures are retained only when the source identifies GPT-5-Codex rather than a GPT-5 family sibling.

Agent / tool use:

- no verified public normalized tool-use score found. OpenAI reports versatile tool use and Codex agent workflows, but this is capability documentation rather than a comparable tool benchmark ([OpenAI release](https://openai.com/index/introducing-upgrades-to-codex/)).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **25 (estimated), #121/215** for its exact “GPT-5 Codex (High)” entry ([Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-codex)). The page labels this an estimate pending independent evaluation, so it is treated as provisional rather than as a verified public benchmark.
- GPQA Diamond, HLE, LCR / MLCR, and CritPt: **no verified public score found** for the exact `gpt-5-codex` ID.

Coding:

- SWE-bench Verified: **74.5%** on the full 500-task evaluation, reported for GPT-5-Codex by OpenAI ([OpenAI release, GPT-5-Codex section](https://openai.com/index/introducing-upgrades-to-codex/)). The same page explains the change from the earlier 477-task reporting to all 500 tasks.
- Code-refactoring evaluation: **51.3%**, reported by OpenAI for GPT-5-Codex on refactor-style tasks across Python, Go, and OCaml ([OpenAI release, GPT-5-Codex section](https://openai.com/index/introducing-upgrades-to-codex/)).
- LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE, SWE-Pro, and Terminal-Bench: **no verified public score found** for the exact ID.

Long context:

- no long-context retrieval benchmark reported for the exact model; the 400K context limit is documented, but it is not a retrieval-quality score.

### Identity and conflict resolution

- The exact model is `gpt-5-codex`, described by OpenAI as a GPT-5 version optimized for agentic coding. The general [GPT-5 documentation](https://developers.openai.com/api/docs/models/gpt-5) has the same 400K context and native token prices, but identifies GPT-5 as a general-purpose previous model and supports Chat Completions; those facts are not substituted for Codex evidence.
- `gpt-5.1-codex` is a separate API ID and later model. Its official [documentation](https://developers.openai.com/api/docs/models/gpt-5.1-codex) separately names GPT-5.1-Codex and lists a distinct snapshot, so its scores are excluded here. Artificial Analysis also tracks it separately at [GPT-5.1 Codex](https://artificialanalysis.ai/models/gpt-5-1-codex).
- `gpt-5.2-codex` is another separate API ID. Its [official documentation](https://developers.openai.com/api/docs/models/gpt-5.2-codex) lists the later 2025-08-31 knowledge cutoff, $1.75/$14 pricing, and additional hosted-shell/skills tools; none of those details are attributed to GPT-5-Codex.
- No official `gpt-5-codex-mini` model page or exact benchmark record was found. The `codex-mini-latest` line in the GPT-5-Codex documentation is a separate comparison model, not evidence for an exact `gpt-5-codex` score; GPT-5.1-Codex-Mini is likewise a separate tracked model.
- Artificial Analysis calls the exact GPT-5 Codex entry deprecated and recommends GPT-5.1-Codex, but still identifies the measured entry as GPT-5 Codex (High), with the exact 400K context, September 2024 cutoff, and $1.25/$10 pricing ([independent model page](https://artificialanalysis.ai/models/gpt-5-codex)). This is consistent with OpenAI's exact ID and does not merge the successor.
- The [SWE-bench leaderboard](https://www.swebench.com/) confirms that SWE-bench Verified is a 500-task benchmark and that entries are reported as resolved percentages; it does not provide a conflicting GPT-5-Codex result in the fetched leaderboard view.

### Normalized scores (1–100)

- **Tool use: 78/100.** OpenAI documents function calling, web search, and strong Codex agent workflows, but no exact-model tool benchmark was found; the missing comparative tool score caps this below the frontier band.
- **Reasoning: 63/100.** The exact model supports reasoning tokens, but the only independent aggregate is Artificial Analysis's provisional estimated Index 25, below its comparable-model median of 27; no verified GPQA/HLE/LCR score was found.
- **Context window: 80/100.** The verified 400K context is in the 200K–500K tier; the absence of a measured long-context retrieval result prevents a higher score.
- **Multimodal: 65/100.** Verified text and image input with text output places it in the image-input band; there is no audio/video input or non-text output.
- **Coding: 78/100.** Exact-model SWE-bench Verified 74.5% and code-refactoring 51.3% establish strong coding performance, but the lack of independent LiveCodeBench, Terminal-Bench, and SWE-Pro results caps the score below the top coding tier.
- **Cost efficiency: 88/100.** Native $1.25/$10 pricing is competitive for a proprietary reasoning model, though it is paid and not a free tier.
- **Overall Score: 72.8/100.** Half-up mean of the five quality dimensions `(78 + 63 + 80 + 65 + 78) / 5`; best suited to agentic software engineering where Codex tooling and verified SWE-bench performance matter more than broad general-model coverage.

---

## Signature

- Provided by: **GPT 5.6 Luna (`opencode/gpt-5.6-luna`)** — 2026-10-23
- Method: seven-plus independent fresh web searches followed by direct official documentation, release-page, benchmark, and independent model-page verification; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
