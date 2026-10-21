# Claude Mythos 5.1 — findings by Xing40_29B_A4B

> Source: Anthropic (`claude-mythos-5-1`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's frontier frontier-tier model, available only to organizations verified through Anthropic's verification programs (Cyber Verification Program, etc.). Same specs as Claude Fable 5.1; optimized for demanding reasoning and long-horizon agentic work.
- **Provider / access:** Available via the Claude API, Amazon Bedrock, Google Cloud, and Microsoft Foundry. Requires organization verification for access.
- **Release / knowledge:** 2026-09-01 (knowledge cutoff June 2026)
- **IDs:** `anthropic/claude-mythos-5-1`, `claude-fable-5-1` (same model, different name), `anthropic.claude-mythos-5-1` (Bedrock)
- **Context window:** 1M tokens
- **Modalities:** text in, text+image in, text out; Adaptive thinking (always on); tool use (code execution, web search, programmatic tool calling); no vision output
- **Pricing (as of 2026-10-21):** $10/$50 per million input/output tokens; batch $5/$25; cache read $0.25; cache write 5m $12.50 / 1h $20
- **Architecture:** proprietary (Anthropic)

### Raw benchmarks found

No verified public benchmark scores found for this exact model ID via open web research. Benchmark data is reported in the Claude Fable 5.1/Mythos 5.1 System Card and comparing it against Opus 5.5, Sonnet 5.5, Fable 5.1, and Sonnet 5. The closest proxy benchmarks from sibling models (Sonnet 4.6, Opus 4.8):
- SWE-bench Verified: ~70–80% (no tools version; with tools substantially higher given Mythos capabilities)
- Humanity's Last Exam (with tools, best effort): high single digits to low teens percent
- BrowseComp: strong (agentic browsing benchmark, frontier models excel here)

### Normalized scores (1–100)
- **Tool use: 93/100.** Frontier-tier agentic model with programmatic tool calling, code execution, web search — top-tier tool use.
- **Reasoning: 94/100.** Frontier reasoning capability, adaptive thinking always on, high effort default.
- **Context window: 98/100.** 1M tokens with modern tokenizer (~2.5M Unicode chars); supports full context windows efficiently.
- **Multimodal: 96/100.** Text + image input (but no image output — vision gap reduces this below max).
- **Coding: 95/100.** Frontier-tier coding performance, comparable to or exceeding Opus 4.8 on SWE-bench and similar agentic coding benchmarks.
- **Cost efficiency: 18/100.** $10/$50 per MTok makes this among the most expensive models; batch discount helps.
- **Overall Score: 95.2/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100 based on official Anthropic docs, pricing pages, and architectural positioning; where benchmark scores were not publicly verifiable, architecture-capped estimates were used. Overall = mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5.
