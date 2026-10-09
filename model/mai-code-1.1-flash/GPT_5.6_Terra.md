# MAI-Code-1.1-Flash — findings by GPT-5.6 Terra

- Source: Microsoft/MAI-Code-1.1-Flash
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft's fast code-focused MAI model, positioned for interactive software-engineering tasks.
- **Provider / access:** Microsoft Foundry; hosted access details vary by region.
- **Release / knowledge:** 2026; cutoff not published.
- **IDs:** `MAI-Code-1.1-Flash`.
- **Context window:** 256K tokens (Microsoft announcement).
- **Modalities:** text input and output; coding/reasoning workflow support.
- **Pricing (as of 2026-10-09):** Microsoft describes quarter-cost versus its prior version; absolute public token price was not verified.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **22% improvement** over the prior MAI-Code version (Microsoft announcement; base score not disclosed).

Reasoning / knowledge:

- no verified public general-reasoning benchmark found.

Coding:

- .NET coding tasks: **15% improvement** over the prior MAI-Code version (Microsoft announcement; base score not disclosed).

Long context:

- 256K context advertised; no retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 69/100.** The reported Terminal-Bench 2.1 gain is direct but lacks an absolute score.
- **Reasoning: 60/100.** No verified broad reasoning score was found.
- **Context window: 88/100.** 256K is a large verified window, capped by absent retrieval evidence.
- **Multimodal: 15/100.** No non-text input support was verified.
- **Coding: 78/100.** Direct Terminal-Bench and .NET improvements support the score, capped because Microsoft did not disclose absolute results.
- **Cost efficiency: 82/100.** Microsoft reports one-quarter of predecessor cost, though no current absolute price was verified.
- **Overall Score: 62/100.** Half-up mean of the five quality dimensions; a promising low-latency coding option pending reproducible absolute scores.

---

## Signature

- Provided by: **GPT-5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
