# MAI-Code-1.1-Flash — findings by GPT 6 Sol

- Source: Microsoft AI (MAI-Code-1.1-Flash, GitHub Copilot)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash.
- **Short description:** Microsoft's 138B/5B-active sparse MoE specialized for fast agentic coding and screenshot-to-code within GitHub Copilot. The [official model card](https://microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF) identifies MAI-Code-1-Flash and MAI-Thinking-1 as dependencies, but **1.1 is a separately named, differently trained release**, not merely a paid tier of 1.0.
- **Provider / access:** [Microsoft model page](https://microsoft.ai/models/mai-code-1-flash/) and [model card](https://microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF) offer it inside GitHub Copilot (VS Code and supported clients); Microsoft also announced an on-device 3-bit version for eligible hardware ([October update](https://microsoft.ai/news/mai-code-1-1-flash-br-better-faster-at-a-quarter-of-the-cost/)). No confirmed public standalone Chat Completions/Responses API ID or verified public weight repository found; do **not** invent `microsoft/mai-code-1.1-flash` as a working API route.
- **Release / knowledge:** Model card gives **August 11, 2026** release and **December 2025** pretraining cutoff; Microsoft's wider Copilot/on-device update is dated October 7, 2026 ([official PDF](https://microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF), [update](https://microsoft.ai/news/mai-code-1-1-flash-br-better-faster-at-a-quarter-of-the-cost/)).
- **IDs:** Public product name `MAI-Code-1.1-Flash` in Copilot; no verified first-party API model string or Zen Free ID. Do not transfer MAI-Code-1-Flash benchmark rows from poolside comparison cards to 1.1.
- **Context window:** **256K tokens**, both full precision and Microsoft's advertised 3-bit local option; exact max output not published in the [model card](https://microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF).
- **Modalities:** Text and image input, text output; tool-using agentic coding in Copilot and adaptive reasoning length. No verified audio or video I/O ([model card](https://microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF)).
- **Pricing (as of 2026-11-01):** The [model card literally says **“To be finalized”**](https://microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF) for pricing. Copilot entitlement varies by plan; Microsoft says local inference has no per-call inference fee but recommends **more than 120GB RAM**. “A quarter of the cost” is relative to MAI-Code-1-Flash, **not a per-million-token tariff** ([Microsoft announcement](https://microsoft.ai/news/mai-code-1-1-flash-br-better-faster-at-a-quarter-of-the-cost/)).
- **Architecture:** **138B total, 5B active**, sparse MoE Transformer; model-specific licensing governed by applicable Microsoft/GitHub terms, not a verified unrestricted open-source license ([official PDF](https://microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF)).

### Raw benchmarks found

- **Agent / tool use:** Microsoft's [exact-1.1 model card](https://microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF) gives **Terminal-Bench 2.1 62.9%**, versus **51.7%** for MAI-Code-1-Flash in the **same Copilot VS Code harness**; average tokens per completed task **17.0K vs 14.2K**. Its October announcement claims **22% improvement** in Copilot CLI Terminal-Bench performance, a relative figure measured in a different product setting; do not turn it into another absolute pass rate. No independent exact-1.1 Terminal-Bench replication located.
- **Coding:** The same Microsoft PDF reports **SWE-bench Verified 72.6%** with 8.6K mean solution tokens, compared with 71.6% and 10.8K tokens for 1.0 under that harness. These are vendor measurements, not an independent leaderboard rerun. Internal Text2WebApp **74.1%**, Screenshot2WebApp **42.1%**; no public task dataset or third-party validation for those internal suites ([PDF, p.5](https://microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF)).
- **Reasoning:** No independently verified exact-ID GPQA, HLE or general reasoning score found; Microsoft documents adaptive solution-length reasoning but publishes only coding-agent benchmarks for 1.1 ([PDF](https://microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF)).
- **Long context:** Vendor 256K capacity and claim that 3-bit on-device option retains it; no exact-1.1 retrieval accuracy near the limit found ([Microsoft announcement](https://microsoft.ai/news/mai-code-1-1-flash-br-better-faster-at-a-quarter-of-the-cost/)).
- **Vision:** Vendor internal [Vision2Web Level3 **11.5%** and Screenshot2WebApp **42.1%**](https://microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF); benchmark definitions and input resolution are not publicly reproducible here. No independent MMMU-Pro result found.

### Normalized scores (1–100)

- **Tool use: 76/100.** 62.9% vendor Terminal-Bench 2.1 in a production-style harness, discounted for absent independent repetition.
- **Reasoning: 67/100.** Adaptive reasoning architecture but no exact-release general reasoning benchmark.
- **Context window: 71/100.** 256K claimed for both full and quantized releases; no near-limit retrieval evidence.
- **Multimodal: 62/100.** Image-to-code support with 42.1% internal screenshot benchmark, text-only output and no independent vision result.
- **Coding: 78/100.** Vendor 72.6% SWE Verified and 74.1% internal text-to-web, capped by evaluation provenance.
- **Cost efficiency: 69/100.** Local option avoids per-call fee but requires substantial RAM; no defensible API token tariff to compare.
- **Overall Score: 71/100.** Half-up mean (76 + 67 + 71 + 62 + 78) / 5 = 70.8; promising Copilot-focused coder with vendor-only public results.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Model catalog, full-text, dataset and Microsoft-site searches; exact official PDF compared with the vendor update and third-party benchmark indexing. Independent exact-release benchmark results not located; vendor metrics marked accordingly. Scores are normalized judgments.
- Reference URLs:
  - [Microsoft official MAI-Code-1.1-Flash model card, architecture and benchmark methods (PDF)](https://microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF)
  - [Microsoft official product page and image-to-code capability](https://microsoft.ai/models/mai-code-1-flash/)
  - [Microsoft October Copilot and local deployment update](https://microsoft.ai/news/mai-code-1-1-flash-br-better-faster-at-a-quarter-of-the-cost/)
  - [BenchLM source-linked exact-release benchmark index](https://benchlm.ai/models/mai-code-1-1-flash)
- Future sources: add a new file next to this one using the same headings.
