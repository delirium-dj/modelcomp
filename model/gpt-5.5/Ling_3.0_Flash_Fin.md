# GPT-5.5 — findings by Ling 3.0 Flash

- Source: OpenAI (`openai/gpt-5.5`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's model entry awaiting a verified public model card; strong agentic coding with state-of-the-art Terminal-Bench 2.0 and SWE-bench Verified performance.
- **Provider / access:** OpenAI API (`gpt-5.5`), Azure OpenAI. Responses API. No Zen Free ID; paid pricing.
- **Release / knowledge:** April 23, 2026 release. Knowledge cutoff not explicitly stated.
- **IDs:** `openai/gpt-5.5` (OpenAI API)
- **Context window:** 1M tokens (per apxml.com)
- **Modalities:** Text, image in; text out (per Vals.ai)
- **Pricing (as of 2026-09-23):** Paid only — $5.00/1M input, $30.00/1M output (no Zen Free ID)
- **Architecture:** Proprietary, closed weights; OpenAI's agentic coding model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI official, leading all models)
- OSWorld-Verified: **78.7%** (OpenAI official)
- CyberGym: **81.8%** (OpenAI official)
- Expert-SWE: **73.1%** (OpenAI official)
- Tau2-bench Telecom: **98.0%** (OpenAI official)
- FinanceAgent: **60.0%** (OpenAI official)
- Agentic (BenchLM): 92.0

Reasoning / knowledge:

- SWE-bench Verified: **88.7%** (localaimaster, leading all models)
- SWE-bench Pro: **58.6%** (OpenAI official)
- LiveBench Reasoning: **90%** / **0.90** (apxml.com)
- LiveBench Mathematics: **96%** / **0.96** (apxml.com)
- GPQA Diamond: rank 11/138 (Vals.ai)
- Intelligence Index (AA): **60** (dev.to)
- GDPval (wins/ties): **84.9%** (OpenAI official)
- LiveBench Overall: 80.2 (Thinking xHigh)

Coding:

- SWE-bench Verified: **88.7%** (#1)
- Terminal-Bench 2.0: **82.7%** (#1)
- SWE-bench Pro: **58.6%**
- LiveBench Coding: 0.82 (#6)
- Vibe Code Bench: rank 22/92 (Vals.ai), 69.8%
- Expert-SWE: 73.1%

Multimodal:

- Text, image in; text out
- MMMU Pro: rank 9/93 (Vals.ai)
- OSWorld-Verified: 78.7%
- Vals Multimodal Index: rank 2

Long context:

- 1M context window
- MRCR v2: 74.0% (dev.to)
- LiveBench Data Analysis: 0.82 (#1)

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.0 at 82.7% (state-of-the-art); OSWorld-Verified at 78.7%; CyberGym at 81.8%; Expert-SWE at 73.1%. Leading agentic and terminal coding capability.
- **Reasoning: 88/100.** SWE-bench Verified at 88.7% (leading); LiveBench Reasoning 90%; LiveBench Math 96%; Intelligence Index 60 (AA). Strong reasoning with excellent math performance.
- **Context window: 95/100.** 1M context window with MRCR v2 at 74.0%; strong long-context data analysis performance.
- **Multimodal: 76/100.** Text and image input supported; text output; OSWorld-Verified at 78.7%; MMMU Pro rank 9/93. Moderate multimodal coverage.
- **Coding: 89/100.** SWE-bench Verified at 88.7% (leading); Terminal-Bench 2.0 at 82.7% (leading); LiveBench Coding 82.1%; Expert-SWE at 73.1%. State-of-the-art coding capability.
- **Cost efficiency: 50/100.** No Zen Free ID; paid-only pricing at $5/$30 per 1M. Premium pricing.
- **Overall Score: 87/100.** Mean of the five non-cost dimensions (86 + 88 + 95 + 76 + 89) / 5 = 86.8, rounded to 87. OpenAI's agentic coding model with state-of-the-art Terminal-Bench 2.0 (82.7%) and SWE-bench Verified (88.7%), strong reasoning and coding capability at premium pricing.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via OpenAI official page, localaimaster.com, apxml.com, dev.to, Vals.ai, and livebench.ai; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-5.5/Ling_3.0_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-5.5/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash.md.excluded`, not `.md` (see SELF-EXCLUSION above).
