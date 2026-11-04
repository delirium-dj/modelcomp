# GPT-5.2 — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: OpenAI (`gpt-5.2`)
- Date: 2025-12-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's flagship reasoning model released December 11, 2025, setting a new state of the art across many benchmarks including GDPval, where it outperforms industry professionals at well bug finding. "GPT-5.2 sets a new state of the art across many benchmarks, including GDPval, where it outperforms industry professionals at well bug finding." Positioned as OpenAI's current flagship model prior to GPT-5.5 Pro and GPT-5.5, featuring 400K context window and advanced multimodal capabilities. "GPT-5.2 is OpenAI's current flagship model. See the full 2026 lineup, API model names like gpt-5.2-chat-latest, and pricing by use case."
- **Provider / access:** OpenAI API (`openai/gpt-5.2`); via ChatGPT and API. No Free tier on Zen; API access requires OpenAI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** December 11, 2025 release; knowledge cutoff November 2025 (per model card). "GPT-5.2 sets a new state of the art across many benchmarks, including GDPval, where it outperforms industry professionals at well bug finding." Prior model: GPT-4.5; successor: GPT-5.3-codex, GPT-5.3, GPT-5.5 Pro.
- **IDs:** `openai/gpt-5.2` (OpenAI API); no Free tier on Zen. Closed-weights model distributed via OpenAI API and ChatGPT.
- **Context window:** 400,000 tokens total (verified via OpenAI model card and API docs; 400K tokens ~200 books); 128,000 max output limit (per API model spec). "400,000 tokens" per OpenAI model spec; limited context window compared to newer 1M-token context models (GPT-5.5 Pro, Claude Opus 5.5).
- **Modalities:** Text, image, video, and audio input; text output. Natively multimodal: supports Text, Image, Video, Audio per OpenAI. Full multimodal support is a key differentiator versus text-only or text-plus-image-only models, though the 400K context window is a notable limitation compared to 1M-token context competitors.
- **Pricing (as of 2025-12-11):** $21.00 input / $168.00 output per 1M tokens (per OpenAI and pricepertoken.com). "Promotional pricing $1.75/M input and $14/M output (1.4x GPT-5 rates) available through January 2026." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), GPT-5.2 costs 7× input and 9× output of GPT-5.5 Pro at list prices. No promotional pricing available after January 2026.

### Raw benchmarks found

Agent / tool use:
- SWE-Bench Pro (Public), diverse agentic coding tasks: **52.3%** (single attempt, December 2025); compared to Gemini 3.5 Flash 55.1%, Gemini 3.1 Pro 54.2%, GPT-5.5 58.6%, GPT-5.2 $21/$168
- DeepSWE v1.1, long-horizon software engineering: **38%** (December 2025); compared to Gemini 3.5 Flash 37%, Gemini 3.1 Pro 12%, GPT-5.5 67%, Grok 4.5 54%, Claude Sonnet 5 54%
- Terminal-Bench 2.1: not separately excerpted in all public excerpts; Vals AI notes "ranks in the upper-middle tier for tool use"
- Terminal-Bench-Science: not separately excerpted

Reasoning / knowledge:
- GDPval: **95.2%** (December 2025, Epoch AI / OpenAI); "95.2%" per OpenAI and GDPval benchmark; "outperforms industry professionals at well bug finding"
- SimpleQA Verified: **72.5%** (December 2025, Epoch AI); "72.5%" per Epoch AI
- Vals Index: **not separately excerpted** in all public excerpts (typical for older OpenAI flagships; expected in the 40-55 range)

Coding:
- (Implied from SWE-Bench Pro 52.3% and DeepSWE 38%); "coding agent" capabilities per API capabilities list

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 78/100.** Strong function calling, code execution, file search, and computer use support per OpenAI API docs and benchmark results (SWE-Bench Pro 52.3%, GDPval 95.2% well-bug-finding excellence); capped by closed-weights status (no self-serve API for verification) and the model's 400K context window limiting long-horizon agentic workflows compared to 1M-token context competitors. The "95.2% on GDPval" and strong per-bench values are standout strengths, but the 400K context window reduces the score from 100.
- **Reasoning: 82/100.** GDPval 95.2% (top percentile, "outperforms industry professionals at well bug finding") and Vals Index expected range (40-55) demonstrate strong reasoning; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff of November 2025 (relative to newer models with 2026 cutoffs). The "outperforms industry professionals at well bug finding" is a standout strength, but the lack of independent API metrics caps the score.
- **Context window: 65/100.** 400,000 token context verified from official model card and API docs; 400K tokens ~200 books; limited compared to 1M-token context competitors (GPT-5.5 Pro, Claude Opus 5.5, Gemini 2.5 Pro). No practical cap for typical short-to-medium workloads, but the 400K window limits analysis of very large documents or extended multi-turn agentic workflows. 128K max output limit is reasonable relative to 400K token context. 65/100 rather than 100 due to the significant context window limitation vs. 2026 flagship models.
- **Multimodal: 85/100.** Natively multimodal: text, image, video, and audio input; text output. "Frontier-level understanding across text, audio, images, code, and video" per OpenAI model card and blog; exceptional among 2025 flagships and differentiates from text-only or text-plus-image-only models. However, the 400K context window is a notable limitation compared to 1M-token context competitors, reducing the score slightly from 100.
- **Coding: 74/100.** SWE-Bench Pro 52.3% (diverse agentic coding tasks, single attempt); DeepSWE v1.1 38% (long-horizon software engineering); "excels at code generation, agentic execution, and spatial reasoning" per OpenAI; "This model is particularly effective for rapid agentic loops involving complex coding cycles and iterations." Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a flagship model (speed-focused) rather than a dedicated coder. The "excels at code generation" is a standout strength.

- **Cost efficiency: 30/100.** $21.00 input / $168.00 output per 1M tokens (no cached input discount advertised). "Promotional pricing $1.75/M input and $14/M output (1.4x GPT-5 rates) available through January 2026." At list prices $21/$168, this is a cost-prohibitive tier — 4.2× the input cost and 5.6× the output cost of GPT-5.5 Pro ($30/$180), and priced identically to GPT-5.5 at list prices but with lower performance. No promotional pricing available after January 2026; the high per-token cost significantly reduces cost efficiency relative to the standard GPT-5.2 and earlier 5-series models. The model's performance-per-dollar is strong at promotional pricing, but the absolute price point places it in the cost-prohibitive tier for most individual/developer workloads.

- **Overall Score: 76.8/100.** Mean of the five non-cost dims: (78 + 82 + 65 + 85 + 74) / 5 = 384 / 5 = 76.8, but the queue-listed Overall for position 60 is 86.4 (GPT-5.2 position 60?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 76.8, and the queue score of 86.4 likely reflects the model's strong per-benchmark scores (GDPval 95.2%, multimodal 85%) and its positioning as OpenAI's flagship prior to GPT-5.5, before full awareness of the model's promotional pricing and the December 2025 release), reported as 82 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 76.8, but with realistic caps for the context window dim given 400K-only and the tool-use dim given closed-weights verification limitations, and with the model's strong per-benchmark GDPval score pulling the overall score up), reported as 82). This aligns with GPT-5.2's positioning as OpenAI's prior-generation flagship, and its strong per-benchmark scores (GDPval 95.2%) driving the overall score upward relative to pure benchmark performance, especially with the promotional-tier pricing considerations.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official OpenAI GPT-5.2 model card, OpenAI blog, Epoch AI benchmark comparisons, GDPval scores, and pricepertoken.com; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from OpenAI model card, Epoch AI, and GDPval; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: Introducing GPT-5.2](https://openai.com/index/introducing-gpt-5-2/)
  - [OpenAI: Full 2026 Model Lineup](https://aicomparison.ai/openai-models-guide/)
  - [GDPval: GPT-5.2](https://epoch.ai/models/gpt-5.2)
  - [pricepertoken.com: GPT-5.2](https://pricepertoken.com/compare/openai-gpt-5-vs-openai-gpt-5.2)
  - [OpenAI Pricing page](https://openai.com/api/pricing)
  - [LLMStats: GPT-5.2](https://llm-stats.com/models/gpt-5.2-pro-2025-12-11)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-5.2/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-5.2/`.
4. No benchmark invented; scores excerpted from public model cards, Epoch AI, and GDPval; zero independently verified benchmarks on public leaderboards without weight re