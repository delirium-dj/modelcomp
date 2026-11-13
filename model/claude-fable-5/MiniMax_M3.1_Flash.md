# Claude Fable 5 — findings by MiniMax M3.1 Flash

- Source: Anthropic/Claude Fable 5 (`claude-fable-5`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's generally available Mythos-class frontier model, designed for exceptionally long-horizon software engineering, knowledge work, vision, and scientific research. It shares its underlying model and specifications with the separately access-controlled Claude Mythos 5.
- **Provider / access:** Anthropic Claude Platform Messages API, with model ID `claude-fable-5`; also available on Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS. Safety classifiers can transparently route eligible requests to Claude Opus 4.8.
- **Release / knowledge:** Released 2026-06-09; reliable and training-data knowledge cutoff January 2026.
- **IDs:** `claude-fable-5` (Claude API); `anthropic.claude-fable-5` (Amazon Bedrock).
- **Context window:** 1,000,000 input tokens with up to 128,000 output tokens; official Anthropic model documentation and API specifications.
- **Modalities:** Text and images in; text out; adaptive reasoning always on; tool use, server-side web search and code execution, extended thinking, and prompt caching supported. No audio or video input is listed by Anthropic.
- **Pricing (as of 2026-11-13):** $10 per 1M input tokens, $50 per 1M output tokens, $1 per 1M cache reads, $12.50 per 1M five-minute cache writes, and $20 per 1M one-hour cache writes. Batch API requests receive a 50% discount.
- **Architecture:** Proprietary Anthropic model; parameter count and architecture are not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- Long-horizon software-engineering migration: **a 50-million-line Ruby codebase migrated in one day**, versus an estimated more than two months for an entire human team (Anthropic launch announcement citing Stripe)
- Persistent-memory agent evaluation in Slay the Spire: **performance improved three times more than for Opus 4.8**; final act reached **three times more often** (Anthropic launch announcement)
- FrontierCode / FrontierBench: **highest-scoring model among frontier models, even at medium effort** (Anthropic launch announcement citing Cognition; exact table value is embedded in an image)
- GDPval-AA v2.1: no verified public score found
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Senior-level finance benchmark: **highest score of any model**, with substantial gains in document reasoning, chart and table interpretation, and problem solving (Anthropic launch announcement citing Hebbia; exact table value embedded in an image)
- Long-running analytics benchmark: **first model to break 90%**, a **10-point jump over Opus** (Anthropic launch announcement citing Vercel AI's lab lead)
- Molecular-biology hypothesis preference: **approximately 80%** of blinded scientist comparisons preferred Mythos 5's hypotheses over Opus-class models; the underlying weights are shared with Fable 5 (Anthropic launch announcement)
- Protein-design acceleration: **around 10 times** faster with Mythos 5; **9 of 14 protein targets** yielded strong candidates (Anthropic launch announcement)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- CursorBench 4.0: **state-of-the-art result** (Anthropic launch announcement citing Cursor CEO Michael Truell; exact table value embedded in an image)
- FrontierCode / FrontierBench: **highest-scoring model** (Anthropic launch announcement citing Cognition and Vercel AI's CEO)
- ViBench end-to-end vibe-coding benchmark: **highest-performing model tested**, nearly saturating the base use cases (Anthropic launch announcement citing Vercel AI)
- Spreadsheet suite: **beats Opus 4.8 at every effort level**, finishing runs **25–30% faster** (Anthropic launch announcement citing Vercel AI's Chief Science Officer)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- Anthropic reports that Fable 5 stays focused across millions of tokens in long-running tasks and improves using persistent file-based notes; no verified public MRCR, RULER, or GraphWalks retrieval result was found.

### Normalized scores (1–100)

- **Tool use: 92/100.** Anthropic documents a 50-million-line autonomous migration, threefold gains from persistent-memory assistance, and the highest FrontierCode result, supporting exceptional long-horizon agency; no text-extractable public Tau or MCP score was found.
- **Reasoning: 95/100.** The highest finance-benchmark result, a first-ever score above 90% on long-running analytics, and approximately 80% blinded preference for its scientific hypotheses indicate frontier reasoning, although generic GPQA/HLE figures are unavailable.
- **Context window: 100/100.** Anthropic verifies a 1M-token input window, the dataset's highest context tier, with 128K output.
- **Multimodal: 83/100.** Official support covers text and image input, and Anthropic reports state-of-the-art vision tasks including precise scientific-figure extraction and screenshot-to-code work; no audio or video input is documented.
- **Coding: 96/100.** Highest FrontierCode/FrontierBench, CursorBench, and ViBench results plus a 25–30% speed advantage on spreadsheet tasks provide exceptional coding evidence, despite several exact values appearing only in images.
- **Cost efficiency: 42/100.** At $10 input and $50 output per 1M tokens, Fable 5 is the dataset's premium frontier price tier, though caching and batch discounts materially reduce long-running-agent cost.
- **Overall Score: 93.2/100.** A verified 1M-context frontier model for long-running coding, research, and multimodal knowledge work; best fit for high-value tasks where capability matters more than token price.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (nvidia/minimaxai/minimax-m3.1-flash)** — 2026-11-13
- Method: Fresh public-web research using Anthropic's official model documentation and launch announcement after the web-search service returned HTTP 402 on two attempts; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable 5 model overview](https://platform.claude.com/docs/en/models/fable-5/overview)
  - [Claude Fable 5 and Claude Mythos 5 launch announcement](https://www.anthropic.com/news/claude-fable-5-mythos-5)
  - [Claude models overview, context, pricing, and platform IDs](https://platform.claude.com/docs/en/about-claude/models/overview)
- Future sources: add a new file next to this one, e.g. `Claude_Fable_5.md`, using the same headings.
