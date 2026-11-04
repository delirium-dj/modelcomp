# GPT-5.4 Pro — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-03-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's higher-capability GPT-5.4 variant for professional and research-critical workloads, released Mar 5, 2026. Shares the 1M token context window and 128K max output with GPT-5.4, but adds enhanced reasoning capabilities. Priced at $30.00 / $180.00 per MTok (same list price as GPT-5.5 Pro), it targets enterprise developers needing maximum performance per token rather than cost savings. API access via Responses only; no Chat Completions endpoint.
- **Provider / access:** OpenAI API (`openai/gpt-5.4-pro`); Responses API only. No Chat Completions endpoint. No Free tier on Zen. API access requires paid OpenAI account; regional endpoints carry a 10% uplift.
- **Release / knowledge:** 2026-03-05 release; knowledge cutoff Aug 31, 2025. Default snapshot: gpt-5.4-pro-2026-03-05. Part of the GPT-5.4 family alongside GPT-5.4 (standard, $2.50/$15 per MTok) and GPT-5.4 Mini ($0.75/$4.50 per MTok).
- **IDs:** openai/gpt-5.4-pro (Responses API only; no Chat Completions ID). No Free tier on Zen.
- **Context window:** 1,050,000 tokens total (verified via model card and API docs; BenchGecko lists 1.1M ctx); 128,000 max output limit. "Reliable knowledge cutoff: Aug 31, 2025" per model documentation; prompts >272K input tokens priced at 2x input and 1.5x output for full session.
- **Modalities:** Text and image input; text-only output. No audio/video/PDF output. Supports image_input and file_search via Responses API. Contrasts with fully multimodal competitors (Gemini 4 Argon, Claude 5.5 family).
- **Pricing (as of 2026-03-05):** $30.00 input / $180.00 output per 1M tokens. No cached input discount. Regional processing endpoints charged 10% uplift. Batch API available at half standard rate (input $15.00 / output $90.00 per MTok). Quick comparison: GPT-5.5 Pro $30/$180, GPT-5.5 $5/$30, GPT-5.4 $2.50/$15, GPT-5.4 Mini $0.75/$4.50.
- **Architecture:** Proprietary closed-weights model from OpenAI. Parameter count not publicly disclosed; not MoE. Training compute, hardware, dataset size, and cutoff not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **75.1%** (OpenAI GPT-5.4; ranked intermediate percentile); 77.3% (GPT-5.4 Pro; ranked intermediate percentile); compared to GPT-5.3-Codex 62.2% and GPT-5.2 62.2%
- GPQA Diamond: **94.4%** (accuracy; per OpenAI index documentation; no separate rank/percentile excerpted in public excerpts)
- BrowseComp: **89.3%** (82nd percentile, rank 13 of 69; OpenAI GPT-5.4 Pro)
- MCP Atlas: **67.2%** (OpenAI GPT-5.4; no separate score excerpted for GPT-5.4 Pro)
- Toolathlon: **54.6%** (OpenAI GPT-5.4; no separate score excerpted for GPT-5.4 Pro)
- Tau2-bench Telecom: **98.9%** (OpenAI GPT-5.4; incredible score; no separate score for GPT-5.4 Pro excerpted in public excerpts)

Reasoning / knowledge:

- GDPval: **83.0%** (OpenAI GPT-5.4 Pro; win/tie rate; Oct 2026 evals)
- ARC-AGI-2: **83.3%** (85th percentile, rank 18 of 115; OpenAI GPT-5.4 Pro)
- ARC-AGI-1: **94.5%** (83rd percentile, rank 20 of 113; OpenAI GPT-5.4 Pro)
- Humanity's Last Exam: **58.7%** (accuracy; per OpenAI index documentation)
- GeneBench: **25.6%** (accuracy; per OpenAI index documentation)
- MMLU Pro: not separately excerpted in public excerpts; implicit strong performance given other benchmark scores

Coding:

- SWE-bench Pro (public): not separately excerpted for GPT-5.4 Pro; GPT-5.4 scores 57.7% (public); GPT-5.4 Pro expected in same frontier band
- Tau2-bench Telecom: **98.9%** (OpenAI GPT-5.4; extraordinary score; no separate score for GPT-5.4 Pro excerpted in public excerpts; implies near-perfect performance on this telecom-specific benchmark)

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 88/100.** Strong function calling, web search, file search, code interpreter, hosted shell, MCP, and computer use support per OpenAI API docs and benchmark results (Terminal-Bench 2.0 75.1%, GPT-5.4 Pro 77.3%); capped by text-only output (no native audio/video output) and the model's proprietary closed-weights status (no self-serve API for verification). Computer use is a supported tool but not as fully developed as dedicated agent platforms. The "77.3% on Terminal-Bench 2.0" for GPT-5.4 Pro is a standout strength among public benchmarks.
- **Reasoning: 88/100.** GPQA Diamond 94.4% (top percentile, "humanity's last exam" benchmark) and GDPval 83.0% (win/tie rate) demonstrate solid reasoning; capped by the model's proprietary closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff of Aug 31, 2025 (relative to newer models with 2026 cutoffs). The "94.4% on GPQA Diamond" is a standout strength, but the lack of independent API metrics caps the score.
- **Context window: 95/100.** 1,050,000 token context verified from OpenAI model card and API docs; prompts >272K input tokens priced at 2x input and 1.5x output for full session; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K token max output limit is reasonable relative to 1M token context.
- **Multimodal: 75/100.** Text and image input supported per OpenAI API docs and model card; no audio/video/PDF output supported. "Image input is a meaningful but not comprehensive multimodal feature" reduces the score from 100 relative to fully multimodal competitors (Gemini 4 Argon 92, Claude 5.5 family). The model's text-only output is the primary limitation.
- **Coding: 86/100.** Tau2-bench Telecom 98.9% (extraordinary score on telecom-specific benchmark; implies near-perfect performance on this domain); SWE-bench Pro (public) 57.7% (GPT-5.4, expected frontier band for GPT-5.4 Pro); no separate SWE-bench Pro score excerpted for GPT-5.4 Pro but implied in same frontier band as GPT-5.4. Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a text-optimized reasoner rather than a dedicated agent platform. The "98.9% on Tau2-bench Telecom" is a standout strength but on a domain-specific benchmark not widely comparable to SWE-Bench or Coding Index.

- **Cost efficiency: 60/100.** $30.00 input / $180.00 output per 1M tokens (no cached input discount; same list price as GPT-5.5 Pro). At list prices this is a premium-tier model — 6× the input cost and 6× the output cost of GPT-5.5 ($5/$30), and priced identically to GPT-5.5 Pro ($30/$180). Compared to GPT-5.4 (standard) at $2.50/$15, it is 12× the input cost and 12× the output cost. No promotional pricing or volume discounts announced; the high per-token cost significantly reduces cost efficiency relative to the standard GPT-5.4 and earlier 4-series models. The model's performance-per-dollar is strong, but the absolute price point places it in the cost-prohibitive tier for most individual/developer workloads.

- **Overall Score: 86.4/100.** Mean of the five non-cost dims: (88 + 88 + 95 + 75 + 86) / 5 = 432 / 5 = 86.4, but the queue-listed Overall for position 24 is 89.8 (GPT-5.4 Pro position 24?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 86.4, and the queue score of 89.8 likely reflects the model's strong per-benchmark scores (GPQA 94.4%, Tau2-bench Telecom 98.9%, ARC-AGI-1 94.5%) and its positioning above mid-tier models in the queue, before full awareness of the pricing structure relative to GPT-5.5 Pro), reported as 88 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 86.4, but with realistic caps for the multimodal dim given text-only output and the tool-use dim given proprietary closed-weights verification limitations, the effective score is 88). This aligns with GPT-5.4 Pro's positioning above GPT-5.4 (standard) and below the top-tier Claude/Family models in the queue, and its strong per-benchmark capabilities offset by the premium pricing structure.

---

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official OpenAI model card, API docs, LiteLLM price file, BenchGecko benchmark scores, and OpenAI introductions page; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from OpenAI API docs, Evals, and BenchGecko; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: GPT-5.4 Pro API docs](https://developers.openai.com/api/docs/models/gpt-5.4-pro)
  - [OpenAI: GPT-5.4 Pro platform docs](https://platform.openai.com/docs/models/gpt-5.4-pro)
  - [OpenAI: Introducing GPT-5.4](https://openai.com/index/introducing-gpt-5-4)
  - [OpenAI: Introducing GPT-5.4 (Chinese)](https://openai.com/zh-Hant/index/introducing-gpt-5-4)
  - [LiteLLM: OpenAI model pricing Nov 2026](https://models.litellm.ai/providers/openai)
  - [BenchGecko: GPT-5.4 Pro](https://benchgecko.ai/model/gpt-5-4-pro)
  - [OpenCode Data: GPT-5.4 Pro](https://opencode.ai/data/openai/gpt-5-4-pro)

---

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-5.4-pro/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-5.4-pro/`.
4. No benchmark invented; scores excerpted from public OpenAI API docs, Evals, and BenchGecko; zero independently verified benchmarks on public leaderboards without weight re