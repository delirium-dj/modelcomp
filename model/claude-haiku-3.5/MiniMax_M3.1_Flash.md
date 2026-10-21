# Claude Haiku 3.5 — findings by MiniMax M3.1 Flash

- Source: Anthropic (Claude 3.5 Haiku), `claude-3-5-haiku-20241022`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 3.5
- **Short description:** Anthropic's October 2024 small/fast model — 200K context, an 8,192-token output cap, $0.80/$4.00 per 1M and a 74% internal agentic-coding score, but only 40.6% SWE-bench Verified and 41.6% GPQA. It is **retired** (2026-02-19) and kept as a historical reference for the sub-Sonnet tier.
- **Provider / access:** Anthropic Messages API (`claude-3-5-haiku-20241022`) — sunset; Amazon Bedrock and Google Cloud only (Claude API retired 2026-02-19). **Not on OpenCode Zen** (its Zen deprecation date was 2026-02-16). Not on OpenRouter.
- **Release / knowledge:** **2024-10-22** (model card addendum; AA and BenchLM agree). Knowledge cutoff **July 2024**.
- **IDs:** `claude-3-5-haiku-20241022` (Anthropic); `claude-3-5-haiku` (Artificial Analysis / BenchLM slugs; **no** `claude-haiku-3-5` page exists on either).
- **Context window:** **200,000** tokens, **8,192** max output.
- **Modalities:** text, image and PDF input; text output; tool use. It launched **text-only** ("we do not report its multimodal evaluation results") and gained image/PDF input later — the folder's "image added 2025-02-25" date could not be verified against any Anthropic source.
- **Pricing (as of 2026-10-20):** **$0.80/M input, $4.00/M output**, 5-minute cache write $1.00, 1-hour cache write $1.60, cache read $0.08; Batch $0.40/$2.00. This is the only published rate — no interim price change is documented.
- **Architecture:** proprietary.

### Raw benchmarks found

> Every first-party number comes from Anthropic's October 2024 Claude 3 model-card addendum; Artificial Analysis adds only a composite index.

Coding:

- SWE-bench Verified (pass@1): **40.6%** (Anthropic addendum — for context in the same table: 3.5 Sonnet new 49.0%, 3.5 Sonnet 33.4%, Opus 22.2%)
- HumanEval: **88.1%** (BenchLM row)

Agent / tool use:

- Internal agentic-coding eval: **74%** (Anthropic addendum; Sonnet 78%, Opus 38%)
- Tau-bench: Retail **51.0%**, Airline **22.8%** (Anthropic addendum; Sonnet new 69.2/46.0)
- Terminal-Bench / Tau2 / Tau3 / GDPval-AA / OSWorld / AutomationBench / Toolathlon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (0-shot CoT): **41.6%** (Anthropic) — Sonnet new 65.0%, GPT-4o 53.6%, Gemini 1.5 Pro 59.1%
- AIME 2024: **5.3%** (BenchLM) · MMLU: **80.3%** · MMLU-Pro: **65%** · IFEval: **85.9%** (BenchLM rows)
- Artificial Analysis Intelligence Index: **9 (estimated)**, #105/296, 200K context, text+image in, text out
- HLE / MMMU: no verified public score found (MMMU was not reported for the text-only launch)

### Normalized scores (1–100)

- **Tool use: 45/100.** Anthropic's own internal agentic-coding eval (74%) and τ-bench Retail 51.0% / Airline 22.8% are the only tool-side evidence; there is no Terminal-Bench, τ², GDPval or OSWorld figure anywhere, so the score stays low-mid.
- **Reasoning: 40/100.** GPQA 41.6%, AIME 2024 5.3%, MMLU-Pro 65% and an AA Intelligence Index of 9 put the model near the floor of the reasoning band despite decent MMLU/IFEval.
- **Context window: 70/100.** 200,000 tokens with an 8,192-token output cap is the 200K tier, with no published retrieval measurement.
- **Multimodal: 68/100.** Text, image and PDF input with text output — the image/PDF-in band (below the 90+ tier because there is no audio, video or non-text output).
- **Coding: 55/100.** SWE-bench Verified 40.6% and HumanEval 88.1% split the difference: fine at single-function generation, weak at repo-scale work.
- **Cost efficiency: 82/100.** $0.80/M in and $4.00/M out is cheap for a 200K Anthropic model, with a $0.08/M cache read; it is retired, so this is a historical price.
- **Overall Score: 56/100.** Mean of the five quality dims = (45 + 40 + 70 + 68 + 55) / 5 = 55.6 → **56**. Best fit: historical reference — the sub-Sonnet tier Anthropic later replaced with Haiku 4.5 ($1/$5, 200K, SWE-bench Verified 73.3%).

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Anthropic Claude 3 model-card addendum, pricing and model-deprecation docs, Artificial Analysis, BenchLM, models.dev, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Haiku_4.5.md`, using the same headings.
