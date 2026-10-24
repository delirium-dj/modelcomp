# Claude Sonnet 4 — findings by Muse Glimmer 30B

- Source: Anthropic / claude-sonnet-4
- Date: 2026-10-24
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Hybrid reasoning model released by Anthropic as successor to Claude Sonnet 3.7 with extended thinking and tool use.
- **Provider / access:** Anthropic. Claude.ai web chat, Claude API, enterprise Claude for Work/Team.
- **Release / knowledge:** Released 22 May 2025; discontinued, superseded by Sonnet 4.5 29 Sep 2025 → Sonnet 4.6 17 Feb 2026. Knowledge cutoff not published in accessible sources.
- **IDs:** `claude-sonnet-4-20250522`
- **Context window:** Context window not retrievable from current official pages; Sonnet 4.6 series documents 1M token context, max output 128K.
- **Modalities:** Text input/output; vision and tool use supported in Claude 4 family.
- **Pricing as of 2026-10-24:** Original launch $3 /1M input, $15 /1M output. Sonnet 4.6 pricing $3/$15 per 1M.
- **Architecture:** Transformer-based LLM with hybrid extended-thinking mode; Constitutional AI / RLHF pipeline.

### Raw benchmarks found

**Official Anthropic news 22 May 2025 – Introducing Claude Opus 4 and Claude Sonnet 4**
- SWE-bench Verified: 72.7% with extended thinking, 80.2% with high-compute extended thinking
- GPQA Diamond: 70.0% without extended thinking
- MMLU: 85.4%
- MMMU: 72.6%
- AIME 2024: 33.1%
Source: https://www.anthropic.com/news/claude-4

**Independent coverage**
- The Verge 22 May 2025: Claude 4 AI models better at coding and reasoning.
Source: https://www.theverge.com

**Conflicts / notes**
- Official system card for Claude Sonnet 4 returns 404 in current fetches; context window, exact knowledge cutoff, full benchmark table not confirmed from primary source.
- No independent Terminal-Bench, GDPval-AA, Humanity’s Last Exam, LiveCodeBench numbers retrieved for initial Sonnet 4 release.

### Normalized scores (1–100)

- **Tool use: 70/100.** SWE-bench Verified 72.7% extended thinking / 80.2% high-compute. Limited public Terminal-Bench/GDPval-AA data.
- **Reasoning: 75/100.** GPQA Diamond 70.0%, MMLU 85.4%, MMMU 72.6%, AIME 2024 33.1%. Moderate reasoning with extended thinking lift.
- **Context window: 85/100.** Sonnet 4.6 family documents 1M context; exact Sonnet 4 window not verified.
- **Multimodal: 65/100.** Vision supported in Claude 4 family; exact modality matrix not confirmed for Sonnet 4.
- **Coding: 78/100.** SWE-bench Verified 72.7%-80.2% with thinking. No LiveCodeBench public.
- **Cost efficiency: 60/100.** $3/$15 per 1M; mid-tier paid pricing.
- **Overall Score: 75/100.** Mean of Tool 70, Reasoning 75, Context 85, Multimodal 65, Coding 78. Strong coding/reasoning model superseded by 4.5/4.6.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-24
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
