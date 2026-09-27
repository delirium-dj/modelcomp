# Claude Opus 4.8 — findings by Ling 3.0 Flash

- Source: Anthropic (`anthropic/claude-opus-4.8`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's flagship 4.8 reasoning model with advanced multi-step execution, deep code architecture comprehension, and long-horizon thinking; 200K context.
- **Provider / access:** Anthropic API (`claude-opus-4-8`), Amazon Bedrock, Google Vertex AI. Messages API. No Zen Free ID; paid pricing.
- **Release / knowledge:** May 28, 2026 release (41 days after Opus 4.7). Knowledge cutoff not explicitly stated.
- **IDs:** `anthropic/claude-opus-4-8` (Anthropic API)
- **Context window:** 200,000 tokens, 128K max output
- **Modalities:** Text, image in; text out; reasoning enabled; tool calls
- **Pricing (as of 2026-09-23):** Paid only — $5.00/1M input, $25.00/1M output (no Zen Free ID; Fast Mode ~$10/$50)
- **Architecture:** Proprietary, closed weights; Anthropic's flagship reasoning model with Dynamic Workflows

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.6%** (codersera.com, buildfastwithai.com)
- Terminal-Bench 2.0: **65.4%** (BenchLM, for Opus 4.6; Opus 4.8 likely higher)
- SWE-bench Verified: **88.6%** (llm-stats, buildfastwithai.com, DataLearnerAI)
- SWE-bench Pro: **69.2%** (buildfastwithai.com, codersera.com, truefoundry.com)
- SWE-bench Multilingual: **84.4%** (arte.itlibra.com)
- OSWorld-Verified: **83.4%** (codersera.com)
- Online-Mind2Web (browser use): **84%** (arte.itlibra.com)
- Terminal-Bench 2.1 (truefoundry): **74.6%** (from 66.1% for Opus 4.7)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (arte.itlibra.com)
- HLE w/ tools: **57.9%** (codersera.com)
- USAMO 2026: **96.7%** (arte.itlibra.com, +27.4 from Opus 4.7)
- GDPval-AA Elo: **1890** (codersera.com)
- Intelligence Index (AA): **51** (llm-stats)
- LLM Stats Score: **51.5** (llm-stats)
- Coding Index (AA): **42.3** (llm-stats)
- Tool use (AA): **30.6** (llm-stats)

Coding:

- SWE-bench Verified: **88.6%** (rank 3/113)
- SWE-bench Pro: **69.2%** (+4.9 from Opus 4.7)
- SWE-bench Multilingual: **84.4%**
- Terminal-Bench 2.1: **74.6%**
- OSWorld-Verified: **83.4%**
- Coding Index (AA): 42.3
- LiveCodeBench: not directly found
- FrontierCode 1.1 Main: not directly found

Long context:

- 200K context window (not 1M)
- GraphWalks (1M tokens F1): 68.1% (from Opus 4.7's 40.3%)
- Long-context tracking improved dramatically from Opus 4.7

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.1 at 74.6% and SWE-bench Verified at 88.6% show strong agentic coding; OSWorld at 83.4% confirms solid tool use; but AA Tool use at 30.6 shows weaker on broader agentic tasks. Coding-focused tool use capability.
- **Reasoning: 91/100.** GPQA Diamond at 93.6%; USAMO 2026 at 96.7% (dramatic +27.4 point jump); HLE w/ tools at 57.9%; Intelligence Index 51; GDPval-AA Elo 1890. Elite reasoning with exceptional math performance.
- **Context window: 76/100.** 200K context window (not 1M); GraphWalks at 68.1% shows strong long-context tracking within 200K; significantly shorter than frontier 1M models.
- **Multimodal: 73/100.** Text and image input supported; text output; OSWorld-Verified at 83.4% shows strong computer use; narrower than Gemini models.
- **Coding: 90/100.** SWE-bench Verified at 88.6% (rank 3); SWE-bench Pro at 69.2%; SWE-bench Multilingual at 84.4%; Terminal-Bench 2.1 at 74.6%. Elite software engineering capability, leading on many coding benchmarks.
- **Cost efficiency: 43/100.** No Zen Free ID; paid-only pricing at $5/$25 per 1M. Fast Mode ~$10/$50. Premium pricing.
- **Overall Score: 84/100.** Mean of the five non-cost dimensions (90 + 91 + 76 + 73 + 90) / 5 = 84.0, rounded to 84. Anthropic's flagship 4.8 model with SWE-bench Verified 88.6%, GPQA Diamond 93.6%, USAMO 96.7%, and strong coding capability at 200K context with premium pricing.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via buildfastwithai.com, codersera.com, arte.itlibra.com, llm-stats.com, truefoundry.com, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-opus-4.8/Ling_3.0_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-opus-4.8/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash.md.excluded`, not `.md` (see SELF-EXCLUSION above).
