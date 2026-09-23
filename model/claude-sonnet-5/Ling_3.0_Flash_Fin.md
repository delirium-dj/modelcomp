# Claude Sonnet 5 — findings by Ling 3.0 Flash

- Source: Anthropic (`anthropic/claude-sonnet-5`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's most capable Sonnet-class model, built for the agentic era with adaptive thinking and 1M context at a lower cost than Opus.
- **Provider / access:** Anthropic API (`claude-sonnet-5`), Amazon Bedrock. Messages API. No Zen Free ID; paid pricing.
- **Release / knowledge:** June 30, 2026 release. Knowledge cutoff not explicitly stated.
- **IDs:** `anthropic/claude-sonnet-5` (Anthropic API)
- **Context window:** 1,000,000 (1M) tokens, 128K max output
- **Modalities:** Text, image, file in; text out; reasoning enabled; tool calls
- **Pricing (as of 2026-09-23):** Paid only — $3.00/1M input, $15.00/1M output (no Zen Free ID)
- **Architecture:** Proprietary, closed weights; Anthropic's Sonnet-class agentic model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **80.4%** (BenchLM)
- OSWorld-Verified: **81.2%** (BenchLM)
- BrowseComp: **84.7%** (BenchLM)
- Agentic Index (BenchLM): **81.9**
- Terminal-Bench 3.0: **14.6%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **~90-93%** (various sources)
- HLE w/ tools: **57.4%** (BenchLM)
- CharXiv: **88.3%** (BenchLM)
- Intelligence Index (AA): **33.5** (pricepertoken, 91st percentile)
- Knowledge (BenchLM): 57.4

Coding:

- SWE-bench Verified: **85.2%** (BenchLM)
- SWE-bench Pro: **63.2%** (BenchLM, rank 15/70)
- SWE-bench Multilingual: **78.3%** (BenchLM)
- Terminal-Bench 2.0: **80.4%** (also agentic)
- Coding Index (AA): **66.4** (85th percentile)

Long context:

- 1M context window with 128K max output
- Context window score (average.md): 94.7/100

Multimodal:

- Text, image, and file in; text out
- CharXiv: 88.3%
- Multimodal score (average.md): 74.2/100

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 2.0 at 80.4%; OSWorld-Verified at 81.2%; BrowseComp at 84.7%; Agentic Index at 81.9. Strong agentic and terminal coding capability.
- **Reasoning: 86/100.** GPQA Diamond ~90-93%; HLE w/ tools at 57.4%; CharXiv at 88.3%. Intelligence Index of 33.5 (AA) is lower than other Claude models, but GPQA confirms solid reasoning.
- **Context window: 95/100.** 1M context window with 128K max output; scored highly for long-context agentic capability.
- **Multimodal: 74/100.** Text, image, and file input supported; text output; CharXiv at 88.3%. Narrower than Gemini models but broader than text-only models.
- **Coding: 88/100.** SWE-bench Verified at 85.2%; SWE-bench Pro at 63.2%; SWE-bench Multilingual at 78.3%; Terminal-Bench 2.0 at 80.4%. Strong software engineering capability.
- **Cost efficiency: 65/100.** No Zen Free ID; paid-only pricing at $3/$15 per 1M. Lower cost than Opus models but still premium pricing.
- **Overall Score: 86/100.** Mean of the five non-cost dimensions (87 + 86 + 95 + 74 + 88) / 5 = 86.0, rounded to 86. Anthropic's Sonnet-class agentic model with SWE-bench Verified 85.2%, Terminal-Bench 2.0 80.4%, OSWorld 81.2%, and 1M context at $3/$15 pricing.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via BenchLM, pricepertoken.com, apidog.com, and smfclearinghouse.com; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-sonnet-5/Ling_3.0_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-sonnet-5/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash.md.excluded`, not `.md` (see SELF-EXCLUSION above).
