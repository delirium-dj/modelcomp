# Claude Opus 4.7 — findings by LongCat 2.5 Preview

- Source: Anthropic/claude-opus-4-7
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's most capable general-access model (April 2026), a major upgrade over Opus 4.6 in agentic coding, computer use, and enterprise workflows. Features adaptive thinking and a new tokenizer.
- **Provider / access:** Anthropic API `claude-opus-4-7`, Amazon Bedrock `anthropic.claude-opus-4-7`, Google Cloud Vertex AI `claude-opus-4-7`, Microsoft Foundry `azure_ai/claude-opus-4-7`. Messages API.
- **Release / knowledge:** Released 2026-04-16; reliable knowledge cutoff January 2026.
- **IDs:** `claude-opus-4-7` (no Free ID on Zen; paid only)
- **Context window:** 1,000,000 tokens (new tokenizer: ~30% more tokens per text than prior Claude tokenizer); max output 128K tokens (300K with beta header).
- **Modalities:** Text + image input → text output; adaptive thinking; tool calls; JSON mode; computer use; web search.
- **Pricing (as of 2026-10-18):** $5/MTok input, $25/MTok output; cache read $0.50, cache write $6.25 (5m) / $10 (1h); batch API 50% discount ($2.50/$12.50). Paid only.
- **Architecture:** Proprietary; no parameter count disclosed.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **77.3%** (Anthropic / best-in-class, ahead of Opus 4.6 75.8%, GPT-5.4 68.1%, Gemini 3.1 Pro 73.9%)
- OSWorld-Verified: **78.0%** (Anthropic / up from 72.7% for Opus 4.6; ahead of GPT-5.4 75.0%)
- CursorBench: **70%** (Cursor / up from 58% for Opus 4.6)
- BrowseComp: **79.3%** (Anthropic / DOWN from 83.7% for Opus 4.6 — regression)
- τ²-Bench: **-3.5 p.p.** vs Opus 4.6 (Anthropic / regression)
- GDPval-AA: **1,753 Elo** (Artificial Analysis / state-of-the-art, +134 Elo over Opus 4.6, ~79 Elo ahead of next closest)
- Terminal-Bench Hard: **+5.3 p.p.** vs Opus 4.6 (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (Anthropic / up from 91.3% for Opus 4.6; competitive with Gemini 3.1 Pro 94.3%)
- HLE: **+2.9 p.p.** vs Opus 4.6 (Artificial Analysis)
- Artificial Analysis Intelligence Index: **57** (Artificial Analysis / up from 53 for Opus 4.6; tied #1 with GPT-5.4 and Gemini 3.1 Pro)
- AA-Omniscience: **26** (Artificial Analysis / up from 14; #2 behind Gemini 3.1 Pro 33)
- Hallucination rate: **36%** (Artificial Analysis / down from 61% for Opus 4.6)
- OfficeQA Pro: **80.6%** (Databricks / up from 57.1% for Opus 4.6)
- CharXiv: **82.1%** (Anthropic / up from 69.1% for Opus 4.6)

Coding:

- SWE-bench Verified: **87.6%** (Anthropic / up from 80.8% for Opus 4.6; ahead of Gemini 3.1 Pro 80.6%)
- SWE-bench Pro: **64.3%** (Anthropic / up from 53.4%; ahead of GPT-5.4 57.7%)
- SWE-bench Multilingual: **80.5%** (Anthropic / up from 77.8% for Opus 4.6)
- SciCode: **+2.6 p.p.** vs Opus 4.6 (Artificial Analysis)
- IFBench: **+5.5 p.p.** vs Opus 4.6 (Artificial Analysis)

Long context:

- Vending-Bench 2: **$10,937** money balance (Anthropic / up from $8,018 for Opus 4.6 — proxy for long-horizon coherence)
- 1M token context window with standard pricing (no long-context surcharge)

### Normalized scores (1–100)

- **Tool use: 88/100.** MCP-Atlas 77.3% is best-in-class; OSWorld 78.0% and CursorBench 70% confirm strong agentic tool use. Capped by BrowseComp regression (79.3%, down from 83.7%) and τ²-Bench slip.
- **Reasoning: 90/100.** GPQA Diamond 94.2% near frontier saturation; AA Intelligence Index 57 tied #1; large hallucination improvement (36% vs 61%). Capped by BrowseComp regression and only modest GPQA gain (+2.9 p.p.).
- **Context window: 95/100.** 1M tokens at standard pricing with no surcharge; new tokenizer improves efficiency. Among the largest context windows available.
- **Multimodal: 85/100.** Text + image input; high-resolution vision (2,576px / 3.75MP, 3× prior); OSWorld 78.0%, CharXiv 82.1%. No audio/video input; text-only output.
- **Coding: 92/100.** SWE-bench Verified 87.6% (best among generally available models), SWE-bench Pro 64.3%, CursorBench 70% — all large gains over Opus 4.6. Capped by SWE-bench Pro still below 65%.
- **Cost efficiency: 55/100.** $5/$25 per MTok is expensive (2.5× median input, 2.5× median output). New tokenizer produces ~30% more tokens per text, increasing effective cost. Batch API 50% discount helps.
- **Overall Score: 90/100.** Mean of (88+90+95+85+92)/5 = 90. A top-tier model for agentic coding and enterprise workflows; best-in-class tool use and SWE-bench performance. Recommended for complex long-running coding tasks and professional knowledge work.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-18
- Method: Public internet research (Anthropic official blog, Artificial Analysis, Vellum, Decrypt, Every Vibe Check, 3h4x.github.io independent tests, AI World, LiteLLM pricing, Google Cloud Vertex AI docs, Cloudflare AI docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
