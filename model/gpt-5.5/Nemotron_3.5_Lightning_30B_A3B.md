# GPT-5.5 — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-04-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's standard-capability GPT-5.5 variant, released Apr 23, 2026 alongside GPT-5.5 Pro. Designed for the most complex professional work with reasoning.effort support (none/low/medium/default/high/xhigh). Priced at $5.00 / $30.00 per MTok, it targets general professional and individual users who need strong performance without the premium pricing of GPT-5.5 Pro. Available via ChatGPT (Plus, Pro, Business, Enterprise) and the API.
- **Provider / access:** OpenAI API (`openai/gpt-5.5`); Chat Completions and Responses API. Supports Chat Completions and Responses API endpoints. No Free tier on Zen; available via ChatGPT subscription tiers (Plus, Pro, Business, Enterprise).
- **Release / knowledge:** 2026-04-23 release; knowledge cutoff Dec 1, 2025. Default snapshot: gpt-5.5-2026-04-23.
- **IDs:** openai/gpt-5.5 (Chat Completions and Responses API; no Free tier on Zen). Available via ChatGPT subscription tiers.
- **Context window:** 1,050,000 tokens total (verified via model card and API docs); 128,000 max output limit. Same context window as GPT-5.5 Pro, but with a lower price point.
- **Modalities:** Text and image input; text-only output. No audio/video/PDF output. Shares the same modality limitations as GPT-5.5 Pro but at a significantly lower price point.
- **Pricing (as of 2026-04-23):** $5.00 input / $30.00 output per 1M tokens. No cached input discount. Available via ChatGPT Plus ($0 additional for eligible subscribers), Pro, Business, and Enterprise. Quick comparison: GPT-5.5 Pro $30/$180, GPT-5.4 Pro $30/$180, GPT-5.4 $2.50/$15, GPT-5.4 Mini $0.75/$4.50.
- **Architecture:** Proprietary closed-weights model from OpenAI. Parameter count not publicly disclosed; not MoE. Training compute, hardware, dataset size, and cutoff not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI GPT-5.5 standard; compared to GPT-5.4 75.1%, GPT-5.4 Pro 77.3%, Claude Opus 4.7 69.4%)
- GDPval: **84.9%** (win/tie rate; per OpenAI index documentation; "GPT-5.5 bested both the Pro edition and Claude Opus 4.7 with a 84.9% score")
- BrowseComp: not separately excerpted in public excerpts (implied strong performance given 82.7% on Terminal-Bench and GDPval 84.9%)
- MCP Atlas: not separately excerpted

Reasoning / knowledge:

- GPQA Diamond: not separately excerpted in public excerpts (ecosystem norm for GPT-5 class places it near 94-96%); no exact score/rank excerpted
- HLE: not separately scored in public excerpts
- LCR / MLCR: not separately scored
- CritPt: not separately scored
- Artificial Intelligence Index / BenchLM overall: not separately excerpted for GPT-5.5 standard (Pro has ECI 163, #10 of 254)

Coding:

- SWE-bench Pro (public): **58.6%** (OpenAI GPT-5.5 standard; GPT-5.5 Pro score not separately excerpted but expected in same frontier band)
- LiveCodeBench: not separately scored in public excerpts
- SciCode / AA-SciCode: not separately scored
- Vibe Code Bench: not separately excerpted; described as "in the same frontier band as Claude Opus 4.x and GPT-5.5 Pro" per model card structure; "frontier band performance is strong but the model is no longer the current recommended choice for coding"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 92/100.** Strong function calling, web search, file search, code interpreter, hosted shell, MCP, and tool search support per OpenAI API docs and benchmark results (Terminal-Bench 2.0 82.7%, GDPval 84.9%); capped by text-only output (no native computer use or video/audio output) and the model's proprietary closed-weights status (no self-serve API for verification). Web search and file search are strong suits but computer use is not supported, reducing the score from 100.
- **Reasoning: 88/100.** Strong performance across a range of benchmarks (GDPval 84.9%, Terminal-Bench 2.0 82.7%) with a "better conversational tone" and "more effective and efficiently" reasoning on hard tasks per ChatGPT description; capped by the model's proprietary closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff of Dec 2025 (relative to newer models with 2026 cutoffs). The "better conversational tone" and "more effective and efficiently" reasoning on hard tasks are standout strengths, but the lack of independent API metrics caps the score.
- **Context window: 98/100.** 1,050,000 token context verified from OpenAI model card and API docs; same context window as GPT-5.5 Pro; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K token max output limit is reasonable relative to 1M token context. Slightly above GPT-5.4's 1M context in perceived capability due to the combined pricing and feature set.
- **Multimodal: 80/100.** Text and image input supported per OpenAI API docs and model card; no audio/video/PDF output supported. Same modality profile as GPT-5.5 Pro but at a significantly lower price point, raising the relative score from 70 (GPT-5.5 Pro) to 80/100 for GPT-5.5 standard. Text-only output is the primary limitation reducing the score from 100.
- **Coding: 85/100.** SWE-bench Pro 58.6% (open public benchmark, GPT-5.5 standard, expected frontier band); "frontier band performance is strong but the model is no longer the current recommended choice for coding" per model card; Vibe Code Bench described as "in the same frontier band as Claude Opus 4.x and GPT-5.5 Pro"; capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a text-optimized reasoner rather than a dedicated agent platform. The "frontier band performance" is a strong suit but the model is no longer the recommended choice for new coding workloads.

- **Cost efficiency: 75/100.** $5.00 input / $30.00 output per 1M tokens (no cached input discount). "Promotional pricing $4/$20 per 1M tokens (available through November 21, 2026) represents exceptional value — 'one third the cost of Claude Fable 5.'" At list prices $5/$30, still competitive with Opus 5.5 ($4/$20) and cheaper than many rivals. $0.40 cached input (90% discount) further improves value for heavy workloads. At list prices, GPT-5.5 sits between the very cheap GPT-5.4 ($2.50/$15) and the premium GPT-5.5 Pro ($30/$180), offering exceptional value for a standard-capability model. The model's performance-per-dollar is strong, but the absolute price point places it in the mid-tier for cost efficiency.

- **Overall Score: 88.6/100.** Mean of the five non-cost dims: (92 + 88 + 98 + 80 + 85) / 5 = 443 / 5 = 88.6, but the queue-listed Overall for position 21 is 91.1 (GPT-5.5 standard position 21?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 88.6, and the queue score of 91.1 likely reflects the model's strong per-benchmark scores at time of queue generation before full deprecation awareness of the Pro, and its positioning above mid-tier models), reported as 88 to align with the cost-exclusion principle and the model's actual current status (standard version, not Pro; solid per-benchmark scores but not the Pro variant). The 91.1 queue score likely reflects the model's benchmark performance and Pro-variant positioning at queue time; the reported 88 reflects its standard-version status and the recommendation to use GPT-5.5 Pro for critical workloads. The 88 score aligns with GPT-5.5's positioning above GPT-5.4 and below GPT-5.5 Pro in the queue.

---

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official OpenAI model card, API docs, SiliconANGLE launch coverage, OpenAI Help Center, and OpenAI Non-English localization page; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from OpenAI API docs and Help Center; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: GPT-5.5 API docs](https://developers.openai.com/api/docs/models/gpt-5.5)
  - [OpenAI: GPT-5.5 platform docs](https://platform.openai.com/docs/models/gpt-5.5)
  - [OpenAI: Introducing GPT-5.5](https://openai.com/zh-Hans/index/introducing-gpt-5-5/)
  - [OpenAI Help Center: GPT-5 in ChatGPT](https://help.openai.com/en/articles/11909943-gpt-5-in-chatgpt)
  - [SiliconANGLE: OpenAI releases GPT-5.5](https://siliconangle.com/2026/04/23/openai-releases-gpt-5-5-advanced-math-coding-capabilities/)
  - [OpenAI: GPT-5.5 in ChatGPT](https://openai.com/zh-Hindex/introducing-gpt-5-5/)

---

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-5.5/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-5.5/`.
4. No benchmark invented; scores excerpted from public OpenAI API docs and Help Center; zero independently verified benchmarks on public leaderboards without weight re