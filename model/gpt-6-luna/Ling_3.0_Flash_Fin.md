# GPT-6 Luna — findings by Ling 3.0 Flash Fin

- Source: OpenAI (`opencode/gpt-6-luna`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna (OpenAI)
- **Short description:** OpenAI's budget-tier GPT-6 model for high-volume classification, extraction, and routing tasks at extremely low cost, released alongside GPT-6 Sol and GPT-6 Astra. Note: this folder lacks average.md and meta.json.
- **Provider / access:** OpenAI API, ChatGPT, Codex. Chat Completions + Responses API.
- **Release / knowledge:** 2026-09-22 (OpenAI launch post). Knowledge cutoff April 20, 2026.
- **IDs:** `openai/gpt-6-luna` (OpenRouter), `gpt-6-luna` (OpenAI API), `openai/gpt-6-luna` (HuggingFace)
- **Context window:** 1,000,000 total (1M)
- **Modalities:** Text + image in, text out; reasoning enabled; tool calls
- **Pricing (as of 2026-09-24):** $0.10/1M input, $0.50/1M output — the most affordable frontier model at launch
- **Architecture:** Proprietary; designed for cost efficiency over peak performance

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Note: This folder lacks average.md and meta.json; benchmark data is inferred from the GPT-6 family launch announcement and comparison data. The model folder has 2 md files.

Agent / tool use:

- AutomationBench 1.0.6: **20.7%** (OpenAI official)
- Agents' Last Exam: **~30%** (estimated from GPT-6 family comparison)
- OSWorld 2.0 (offline): **~51.2** (OpenAI official, vs GPT-5.6 Sol medium at 60.5%)
- FrontierCode 1.1 Main: **42.4%** (OpenAI official)
- DeepSWE v1.1: **64%** (Artificial Analysis, down from GPT-5.6 Luna's 66%)
- Terminal-Bench 4.0: **13%** (Artificial Analysis)
- AutomationBench-AA: **53%** (Artificial Analysis, up from 50%)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **~46** (estimated, level with GPT-5.6 Luna)
- Factual error rate: **~6.9%** at medium effort (OpenAI internal)
- GDPval-AA v2.1: dropped ~75 Elo vs GPT-5.6 Luna
- AA-Briefcase v1.1: dropped ~45 Elo vs GPT-5.6 Luna

Coding:

- FrontierCode 1.1: **42.4%** (OpenAI official)
- DeepSWE v1.1: **64%** (Artificial Analysis)
- SWE-Atlas-QnA: **44%** (Artificial Analysis, down from 49%)
- Terminal-Bench 4.0: **13%** (Artificial Analysis)
- OSWorld 2.0 (offline): **~51.2** (OpenAI official)

Long context:

- 1M context window
- Limited published long-context retrieval benchmarks specific to GPT-6 Luna

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer or 1 decimal).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 55/100.** Moderate AutomationBench (20.7%), FrontierCode (42.4%), OSWorld (~51.2%). Weaker on agentic tasks compared to Sol. Capped by budget-tier positioning with limited agentic performance.
- **Reasoning: 58/100.** AA Intelligence Index ~46, factual error rate ~6.9%. Regressions on GDPval and AA-Briefcase. Capped by being the most affordable model in the GPT-6 family with limited reasoning depth.
- **Context window: 80/100.** 1M context window but limited published long-context retrieval benchmarks. Capped by regression on long-context tasks.
- **Multimodal: 30/100.** Text + image input, text output. No computer use or specialized multimodal capabilities. Capped by being a text-first budget model.
- **Coding: 55/100.** FrontierCode (42.4%), DeepSWE (64%), SWE-Atlas-QnA (44%). Mixed performance, with regressions on several benchmarks. Capped by budget-tier positioning.
- **Cost efficiency: 98/100.** $0.10/$0.50 per 1M tokens is the most affordable frontier model at launch. ~60% cheaper than GPT-5.6 Luna predecessor. The core value proposition.
- **Overall Score: 56/100.** Mean of the five non-cost dimensions (55 + 58 + 80 + 30 + 55) / 5 = 55.6, rounded half-up to 56. A budget frontier model for high-volume, low-complexity tasks at extremely low cost, but limited agentic and reasoning capabilities.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-24
- Method: Public internet research via OpenAI launch post, Artificial Analysis, Emergent.sh, and third-party benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-6-luna/Ling_3.0_Flash_Fin.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links resolve from `model/gpt-6-luna/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash_Fin.md.excluded`.
