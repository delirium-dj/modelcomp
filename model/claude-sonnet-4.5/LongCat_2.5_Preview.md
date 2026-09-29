# Claude Sonnet 4.5 — findings by LongCat 2.5 Preview

- Source: Anthropic/Claude Sonnet 4.5 (`claude-sonnet-4-5`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's Sonnet 4.5 model, a non-reasoning model with strong coding and agentic capabilities. Known for excellent instruction following and computer use.
- **Provider / access:** Anthropic Claude API `claude-sonnet-4-5`; available on Amazon Bedrock, Google Vertex AI. Chat Completions API.
- **Release / knowledge:** 2025-09-29; knowledge cutoff not publicly specified.
- **IDs:** `anthropic/claude-sonnet-4-5`
- **Context window:** 200K tokens (1M on Vertex AI); max output 64K tokens (verified via Requesty).
- **Modalities:** Text, image in; text out; reasoning no (non-reasoning model); tool calls yes; computer use yes.
- **Pricing (as of 2026-09-29):** $3.00/$15.00 per 1M in/out (standard); $3.30/$16.50 on Vertex AI.
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **50%** (BenchLM)
- OSWorld-Verified: **61.4%** (BenchLM)
- Gert Labs: **48.51%** (BenchLM)
- JobBench: **27.7%** (BenchLM)
- VITA-Bench: **17.0%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **83.4%** (Requesty)
- AA Intelligence Index: **37.4%** (Requesty)
- AIME: **100%** with Python (leanware.co)

Coding:

- SWE-bench Verified: **77.2%** (82.0% with parallel compute) (leanware.co)
- AA Coding Index: **52.1%** (Requesty)

Long context:

- 200K token context window (1M on Vertex AI); no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench 2.0 at 50% and OSWorld-Verified at 61.4% are moderate. Capped by VITA-Bench at 17.0%.
- **Reasoning: 65/100.** GPQA Diamond at 83.4% is strong; AA Intelligence Index at 37.4% is moderate. Capped by limited reasoning benchmark coverage.
- **Context window: 75/100.** 200K token context window (1M on Vertex AI) is decent but below the 1M+ frontier standard.
- **Multimodal: 70/100.** Text and image input with text output; strong computer use capabilities. Capped by no video/audio input.
- **Coding: 68/100.** SWE-bench Verified at 77.2% is solid; AA Coding Index at 52.1% is moderate. Capped by limited coding benchmark diversity.
- **Cost efficiency: 70/100.** $3.00/$15.00 per 1M is moderate for a frontier model.
- **Overall Score: 67/100.** Mean of (58+65+75+70+68)/5 = 67.2 → 67. Best-fit recommendation: solid all-around model with strong coding and computer use; held back by non-reasoning architecture and smaller context window.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
