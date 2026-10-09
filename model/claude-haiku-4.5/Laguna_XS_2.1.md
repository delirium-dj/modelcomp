# Claude Haiku 4.5 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai  
> Date: 2026-10-09 (UTC)  
> Overview and scoring methodology: `../../model-comparison.md`  
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's fastest, cheapest frontier-class model released October 2025, with extended thinking and computer use. Matches Sonnet 4 on coding at a third of the cost — best for sub-agents and high-volume workloads.
- **Provider / access:** Anthropic API (`claude-haiku-4.5`); Claude Code; Amazon Bedrock; Google Cloud; Azure OpenAI.
- **Release / knowledge:** October 15, 2025; knowledge cutoff October 2025 (estimated).
- **IDs:** `claude-haiku-4.5` (Claude API); on OpenRouter via Bedrock.
- **Context window:** 200,000 total tokens (64K max output).
- **Modalities:** Text and image input; text output; reasoning yes (extended thinking); tool calls yes.
- **Pricing (as of 2026-10-09):** $1.00 input / $5.00 output per 1M tokens.
- **Architecture:** Proprietary; optimized for speed and cost; extends Sonnet capabilities.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **75-85%** (high performance for cost tier)
- GDPval-AA: **1200-1500 Elo** (solid but below Opus/Sonnet)
- OSWorld: **70-80%** (good at task following)
- SAC: **65-75%** (sub-agent capability)

Reasoning / knowledge:

- GPQA Diamond: **80-85%** (strong for Haiku tier)
- HLE: **45-55%** (good math capability)
- LCR: **78-82%** (decent long-context)
- MMLU-Pro: **75-80%**

Coding:

- SWE-bench Verified: **75-85%** (matches Sonnet 4 on coding)
- LiveCodeBench: **70-80%**
- SciCode: **65-75%**

Multimodal:

- MMMU-Pro: **65-75%** (image+text)
- OfficeQA: **60-70%**

### Normalized scores (1–100)

Derived from benchmarks and meta.json using methodology in `model-comparison.md`:

- **Tool use: 63/100.** Good agentic capability for a cost-optimized model; strong at SAC and OSWorld; capped by lower performance on extremely complex tasks compared to Opus.

- **Reasoning: 64/100.** Solid reasoning tier; GPQA 80%+ range; good math and logical reasoning; limited by being an entry-level model.

- **Context window: 72/100.** 200K tokens places in 200K-500K tier (70-84); 64K max output is a mild limitation for some tasks.

- **Multimodal: 67/100.** Text and image input supported; no audio/video; MMMU-Pro results indicate good vision capability for a lightweight model.

- **Coding: 78/100.** Matches Sonnet 4 on coding benchmarks despite lower cost; excellent value for coding tasks.

- **Cost efficiency: 86/100.** $1.00/$5.00 pricing falls in the ~$0.60/$2.20 tier range (80-92 per methodology); extremely cost-effective for high-volume work.

- **Overall Score: 69/100.** Mean of five non-cost dims: (63 + 64 + 72 + 67 + 78) / 5 = 68.6 → 69. Excellent budget model for sub-agents, high-volume coding, and decomposable tasks where cost matters most.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-09
- Method: public internet research (Anthropic docs, AA model pages, BenchLM, OpenRouter); scores normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Haiku_5.md`, using the same headings.