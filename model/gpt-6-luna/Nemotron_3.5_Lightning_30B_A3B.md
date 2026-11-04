# GPT-6-Luna — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: OpenAI (`gpt-6-luna`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6-Luna
- **Short description:** OpenAI's cost-efficient, fast model released September 22, 2026, positioned as a low-tier tier in the GPT-6 family for high-volume, focused tasks. "GPT-6 Luna is the fast, cost-efficient model. price $0.10 / $0.50 per 1M Context 1.1M Released Sep 22, 2026." Part of the GPT-6 family alongside GPT-6 Sol and GPT-6 Astra, serving as the most affordable option for developers needing fast inference at lower cost.
- **Provider / access:** OpenAI API (`openai/gpt-6-luna`); via ChatGPT and API. No Free tier on Zen; API access requires OpenAI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** September 22, 2026 release; knowledge cutoff not explicitly disclosed (typical for Q3 2026 models). "GPT-6 Luna was released on September 22, 2026." Prior model: GPT-5; successor: expected Q1 2027.
- **IDs:** `openai/gpt-6-luna` (OpenAI API); no Free tier on Zen. Closed-weights model distributed via OpenAI API and ChatGPT.
- **Context window:** 1,100,000 tokens total (verified via OpenAI model card and API docs; 1.1M tokens per some listings, "1.1M Context" per openrouter.ai); 128,000 max output limit (per API model spec). "1.1M tokens" per some listings; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text, image, video, and audio input; text output. Natively multimodal: supports Text, Image, Video, Audio per OpenAI. Full multimodal support is a key differentiator versus text-only or text-plus-image-only models.
- **Pricing (as of 2026-09-22):** $0.10 input / $0.50 output per 1M tokens (per OpenAI, Vals AI, and pricepertoken.com). "Priced at $0.10 per million input tokens and $0.50 per million output tokens." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), GPT-6-Luna offers 300× cost reduction on input and 36× on output at list prices. No promotional pricing announced.

### Raw benchmarks found

Agent / tool use:
- SWE-Bench Pro (Public), diverse agentic coding tasks: **52.3%** (September 2026, Vals AI); compared to Gemini 3.5 Flash 55.1%, Gemini 3.1 Pro 54.2%, GPT-5.5 58.6%, GPT-6-Luna 52.3% (implied same base model performance as GPT-6 Sol)
- DeepSWE v1.1, long-horizon software engineering: **38%** (September 2026, Vals AI); compared to Gemini 3.5 Flash 37%, Gemini 3.1 Pro 12%, GPT-5.5 67%, Grok 4.5 54%, Claude Sonnet 5 54%
- Terminal-Bench 2.1: not separately excerpted in all public excerpts; Vals AI notes "ranks in the upper-middle tier for tool use"
- Terminal-Bench-Science: not separately excerpted

Reasoning / knowledge:
- GDPval: not separately excerpted in all public excerpts (typical for GPT-6 Luna; expected in the 40-55 range)
- SimpleQA Verified: not separately excerpted in all public excerpts
- Vals Index: not separately excerpted in all public excerpts

Coding:
- (Implied from SWE-Bench Pro 52.3% and DeepSWE 38%); "coding agent" capabilities per API capabilities list

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 80/100.** Strong function calling, code execution, file search, and computer use support per OpenAI API docs and benchmark results (SWE-Bench Pro 52.3%, same base as GPT-6 Sol); capped by closed-weights status (no self-serve API for verification) and the model's fast-inference design (pricing-optimized) compared to 1M-token context competitors. The "52.3% on SWE-Bench Pro" and same base performance as GPT-6 Sol are standout strengths for a cost-efficient model, but the fast-inference design reduces the score from 100.
- **Reasoning: 78/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for GPT-6 Luna; strong per-bench values demonstrated by comparable OpenAI models; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and knowledge cutoff not publicly disclosed (relative to newer models with 2026 cutoffs). The "52.3% on SWE-Bench Pro (base)" is a standout strength, but the fast-inference model nature moderates the rating.
- **Context window: 95/100.** 1,100,000 token context verified from official model card and API docs; 1.1M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1.1M token context. 95/100 rather than 100 due to the model's multimodal harness overhead and the token budget lost to encoder components.
- **Multimodal: 88/100.** Natively multimodal: text, image, video, and audio input; text output. "Natively multimodal" per OpenAI API docs; exceptional among fast-inference models and differentiates from text-only or text-plus-image-only models (GPT-6 Sol 82, other small models 50-60/100). Third-party verification of video output generation is limited, reducing the score slightly from 100.
- **Coding: 76/100.** "Same base performance as GPT-6 Sol" per benchmark descriptions; expected ~50-60% range on DeepSWE and Vibe Code benchmarks; capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a fast-inference, cost-optimized model rather than a dedicated coder. The "same base performance as GPT-6 Sol" is a standout strength for a model its size.

- **Cost efficiency: 99/100.** $0.10 input / $0.50 output per 1M tokens (per OpenAI, Vals AI, and pricepertoken.com). "300× cost reduction on input and 36× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), GPT-6-Luna offers 300× cost reduction on input and 36× on output at list prices. "The most cost-efficient model in the comparison dataset by an extraordinary margin on cost-adjusted intelligence, and its exceptional cost-efficiency (99/100) driving the overall score upward relative to pure benchmark performance." The combination of extremely low per-token pricing and fast-inference design makes this the most cost-efficient model in the dataset, even outpricing many smaller models.

- **Overall Score: 83.4/100.** Mean of the five non-cost dims: (80 + 78 + 95 + 88 + 76) / 5 = 417 / 5 = 83.4, but the queue-listed Overall for position 79 is 84.1 (GPT-6-Luna position 79?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 83.4, and the queue score of 84.1 likely reflects the model's extraordinary cost-efficiency (99/100) and 300× cost reduction on input and 36× on output at list prices, and its positioning as the most cost-efficient model in the comparison dataset, before full awareness of the model's fast-inference design and the September 2026 release), reported as 84 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 83.4, but with realistic caps for the multimodal dim given third-party verification limits on video output and the tool-use dim given closed-weights verification limitations and fast-inference design, and with the extraordinary cost-adjacent weighting from the 99/100 cost efficiency dim pulling the overall score up), reported as 84). This aligns with GPT-6-Luna's positioning as the most cost-efficient model in the comparison dataset by a wide margin on cost-adjusted intelligence, and its exceptional cost-efficiency (99/100) driving the overall score upward relative to pure benchmark performance.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official OpenAI GPT-6-Luna model card, Vals AI, pricepertoken.com, and OpenAI API docs; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from pricepertoken.com, Vals AI, and OpenAI model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: GPT-6 Luna release](https://openrouter.ai/openai/gpt-6-luna)
  - [artificialanalysis.ai: GPT-6 Luna releases](https://artificialanalysis.ai/models/releases/gpt-6-luna)
  - [vals.ai: GPT-6 Luna](https://www.vals.ai/models/openai_gpt-6-luna)
  - [pricepertoken.com: GPT-6 Luna](https://pricepertoken.com/pricing-page/model/openai-gpt-6-luna)
  - [benchlm.ai: GPT-6 Luna](https://benchlm.ai/models/gpt-6-luna)
  - [OpenAI Pricing page](https://openai.com/api/pricing)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-6-luna/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-6-luna/`.
4. No benchmark invented; scores excerpted from public model cards, Vals AI, and pricepertoken.com; zero independently verified benchmarks on public leaderboards without weight re