# Claude Opus 4.7 — findings by MiniMax M3.1 Flash

- Source: Anthropic/Claude Opus 4.7 (`claude-opus-4-7`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's legacy Opus-class model for advanced software engineering and long-running autonomous work. It introduced the 1M-token context window and finer-grained reasoning-effort control.
- **Provider / access:** Anthropic Claude Platform Messages API, with model ID `claude-opus-4-7`; also available on Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS. The provider exposes the Messages API rather than a separate Responses API.
- **Release / knowledge:** Released 2026-04-16; reliable and training-data knowledge cutoff January 2026.
- **IDs:** `claude-opus-4-7` (Claude API); `anthropic.claude-opus-4-7` (Amazon Bedrock).
- **Context window:** 1,000,000 input tokens with up to 128,000 output tokens; official Anthropic model documentation and API specifications. Batch API output may reach 300K with the beta header.
- **Modalities:** Text and images in; text out; adaptive reasoning on by default; tool use, server-side web search and code execution, extended thinking, and prompt caching supported. Images may be up to 2,576 pixels on the long edge (about 3.75 megapixels). No audio or video input is listed by Anthropic.
- **Pricing (as of 2026-11-13):** $5 per 1M input tokens, $25 per 1M output tokens, $0.50 per 1M cache reads, $6.25 per 1M five-minute cache writes, and $10 per 1M one-hour cache writes. Batch API requests receive a 50% discount.
- **Architecture:** Proprietary Anthropic model; parameter count and architecture are not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- CursorBench: **over 70%** (Anthropic launch announcement citing Cursor's founder; Opus 4.6 scored 58%)
- Terminal-Bench 2.0: no text-extractable public score found (Anthropic launch charts; Terminus-2 harness, thinking disabled, resource allocation averaged over five attempts per task)
- Finance Agent: **state-of-the-art score** (Anthropic launch announcement; exact value embedded in a benchmark image)
- GDPval-AA: **state-of-the-art score** (Anthropic launch announcement citing Artificial Analysis; exact value embedded in a benchmark image)
- Visual-acuity benchmark (XBOW): **98.5%** versus 54.5% for Opus 4.6 (Anthropic launch announcement citing XBOW; computer-use visual-acuity benchmark)
- GDPval-AA v2.1: no verified public score found
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- BigLaw Bench: **90.9% at high effort** (Anthropic launch announcement citing Harvey)
- Internal research-agent benchmark: **0.715 overall; 0.813 on General Finance** (Anthropic launch announcement citing Hex)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- HLE: no verified public score found
- GPQA Diamond: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- CursorBench: **over 70%** (Anthropic launch announcement citing Cursor's founder)
- Rakuten-SWE-Bench: **3× more production tasks resolved than Opus 4.6** (Anthropic launch announcement citing Rakuten; exact percentage embedded in customer reporting)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- Anthropic verifies a 1M-token context window, reports the most consistent long-context performance among models tested by one customer, and documents file-system memory across long, multi-session work; no verified public MRCR, RULER, or GraphWalks retrieval result was found.

### Normalized scores (1–100)

- **Tool use: 94/100.** CursorBench above 70%, a 98.5% visual-acuity result, and reports of double-digit gains in tool-call and planning accuracy support exceptional agent evidence, though public Tau and MCP scores were not located.
- **Reasoning: 94/100.** BigLaw Bench at 90.9%, Finance Agent state of the art, a tied-top research-agent score of 0.715, and state-of-the-art GDPval-AA support a frontier-tier score; missing GPQA and long-context retrieval results cap it below certainty.
- **Context window: 100/100.** Anthropic verifies a 1M-token input window, the dataset's highest context tier, with 128K synchronous output (300K via the batch beta).
- **Multimodal: 88/100.** Anthropic supports images up to 2,576 pixels on the long edge and documents strong chemical-structure, technical-diagram, and screenshot understanding; no audio or video input is listed.
- **Coding: 95/100.** CursorBench above 70%, three times more Rakuten-SWE-Bench tasks than Opus 4.6, passing previously failed Terminal-Bench tasks, and strong code-review recall provide exceptional coding evidence.
- **Cost efficiency: 80/100.** At $5 input and $25 output per 1M tokens, Opus 4.7 is a premium price, though it is more efficient than Opus 4.6 at comparable quality and supports 50% batch discounts.
- **Overall Score: 94.2/100.** A verified 1M-context frontier model for long-running autonomous coding and professional reasoning; best fit for difficult engineering work, though Opus 5.5 is the stronger current model.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (nvidia/minimaxai/minimax-m3.1-flash)** — 2026-11-13
- Method: Fresh public-web research using Anthropic's official model documentation and launch announcement after the web-search service returned HTTP 402 on two attempts; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Opus 4.7 model overview](https://platform.claude.com/docs/en/models/opus-4-7/overview)
  - [Claude Opus 4.7 launch announcement and customer evaluations](https://www.anthropic.com/news/claude-opus-4-7)
  - [Claude models overview, context, pricing, and platform IDs](https://platform.claude.com/docs/en/about-claude/models/overview)
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4.7.md`, using the same headings.
