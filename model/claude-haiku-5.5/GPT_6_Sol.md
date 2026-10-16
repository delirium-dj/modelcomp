# Claude Haiku 5.5 — findings by GPT 6 Sol

- Source: Anthropic (`claude-haiku-5-5`)
- Date: 2026-10-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's October 2026 fast, small Haiku with adaptive thinking for high-volume extraction, subagents and code-assistance tasks ([Anthropic launch](https://www.anthropic.com/claude-haiku-5-5), [API model reference](https://platform.claude.com/docs/en/models/haiku-5-5/overview)).
- **Provider / access:** Anthropic **Messages API** `claude-haiku-5-5`, Bedrock `anthropic.claude-haiku-5-5` and major cloud platforms; [OpenCode Console](https://opencode.ai/docs/zen/) has a paid Haiku 5.5 Messages route. No verified free API ID despite low base price.
- **Release / knowledge:** October 7, 2026; reliable/training cutoff June 2026 ([Anthropic reference](https://platform.claude.com/docs/en/models/haiku-5-5/overview)).
- **IDs:** `claude-haiku-5-5` pinned ID, `anthropic/claude-haiku-5.5` project label; distinct from older Haiku 4.5.
- **Context window:** [Anthropic](https://platform.claude.com/docs/en/models/haiku-5-5/overview) **1M / 128K synchronous output**, Batch beta 300K output with opt-in header; price changes sharply over 100K prompt tokens.
- **Modalities:** Text/image input → text output, adaptive thinking (API default medium, evaluators may use max), tool calls ([Anthropic model reference](https://platform.claude.com/docs/en/models/haiku-5-5/overview)); file/PDF via host tools, no native audio/video.
- **Pricing (as of 2026-10-15):** [Anthropic](https://platform.claude.com/docs/en/models/haiku-5-5/overview) **<=100K prompt $0.10 input / $0.01 cache read / $0.50 output per 1M**, **>100K $0.50 / $0.05 / $2.50** applied to the request; cache writes $0.125/$0.625 (5 min), Batch half off. [OpenCode Console](https://opencode.ai/docs/zen/) lists same tiered paid prices.
- **Architecture:** Proprietary, parameter count/weights undisclosed ([Anthropic reference](https://platform.claude.com/docs/en/models/haiku-5-5/overview)).

### Raw benchmarks found

[Anthropic's primary October evaluation table](https://www.anthropic.com/claude-haiku-5-5) compares specific effort settings; independent [Vals max](https://www.vals.ai/models/anthropic_claude-haiku-5-5) ran without a refusal fallback, and [AA-attributed](https://benchlm.ai/models/claude-haiku-5-5) benchmarks use separate harnesses. Do not equate API default medium to published max-effort numbers.

Agent / tool use:

- [Anthropic Terminal-Bench 4.0 **39.2%**, OSWorld 2.1 offline subset **72.4% partial-credit**, GDPval-AA v2.1 **1620 Elo**, AA-Briefcase **1578 Elo**](https://www.anthropic.com/claude-haiku-5-5). OSWorld 2.1 partial reward is **not** OSWorld-Verified full success.
- [Vals TB4.0 **36.36% ±2.31**, Code Migration **44.57% ±4.23**, Finance Agent v2 **54.14% ±2.13**, SRE Bench **5.72% ±1.44**, Harvey Legal Agent **1.25% ±0.72**](https://www.vals.ai/models/anthropic_claude-haiku-5-5); tool reliability is task-dependent.

Reasoning / knowledge:

- [Anthropic HLE **45.9% without tools / 57.4% with tools**](https://www.anthropic.com/claude-haiku-5-5); [AA attributed Intelligence Index **43.4**, HLE **44.4%**, CritPt **18.9%**, MLCR-AA **63.3%**](https://benchlm.ai/models/claude-haiku-5-5). [Vals ProofBench v1.1 **89.00% ±3.15**, BioMysteryBench **70.37% ±1.33**](https://www.vals.ai/models/anthropic_claude-haiku-5-5). Direct exact-ID GPQA Diamond not verified in these listings.

Coding:

- [Anthropic FrontierCode 1.1 Main **46.4%**](https://www.anthropic.com/claude-haiku-5-5); [Vals Vibe Code Bench v1.1 **90.44% ±1.73**, TB4.0 **36.36% ±2.31**, ProgramBench **2.50% ±1.11**, SWE-bench Multimodal **43.96% ±2.27**](https://www.vals.ai/models/anthropic_claude-haiku-5-5). [AA SciCode **55.0%**](https://benchlm.ai/models/claude-haiku-5-5); ordinary SWE-bench Verified/Pro exact result not found in reviewed readable sources.

Long context / vision:

- [Anthropic 1M/128K API](https://platform.claude.com/docs/en/models/haiku-5-5/overview), [AA-LCR **82.7%**](https://benchlm.ai/models/claude-haiku-5-5), but a measured 1M eight-needle MRCR result **no verified public score found**; cost is 5× higher beyond 100K prompt.
- [Anthropic Chartography **46.4% no tools**](https://www.anthropic.com/claude-haiku-5-5); no exact-ID MMMU-Pro numeric outcome confirmed in accessible text. Native modality is text/image, not audio/video.

### Normalized scores (1–100)

- **Tool use: 83/100.** Vendor TB4 39.2%, Vals 36.4%, OSWorld 2.1 partial 72.4%, tempered by Vals SRE 5.7% and Harvey 1.25%.
- **Reasoning: 87/100.** HLE 45.9% without tools, CritPt 18.9%, AA Index 43.4% and Vals ProofBench 89% show unusually strong small-model reasoning; default effort may be lower.
- **Context window: 95/100.** Documented 1M/128K and AA-LCR 82.7%, but full-window MRCR unverified and >100K tier pricier.
- **Multimodal: 66/100.** Text/image input with Chartography 46.4% no tools; no audio/video in/out.
- **Coding: 86/100.** Vals Vibe Code 90.4%, FrontierCode 46.4%, SciCode 55% and TB4 36.4%, limited by ProgramBench 2.5%.
- **Cost efficiency: 94/100.** Excellent <=100K $0.10/$0.50 and cache read $0.01, with 5× price beyond 100K explicitly considered.
- **Overall Score: 83/100.** (83 + 87 + 95 + 66 + 86) / 5 = 83.4, half-up 83; strong low-cost text/image subagent or UI coder for typical prompts with expensive long prompts budgeted.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-15
- Method: Fresh Anthropic primary specs/launch compared with Vals max and AA-attributed independent tests; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
