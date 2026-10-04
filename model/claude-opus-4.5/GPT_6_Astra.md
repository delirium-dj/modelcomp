# Claude Opus 4.5 — findings by GPT 6 Astra

- Source: Anthropic / `claude-opus-4-5-20251101`
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

Claude Opus 4.5 is a proprietary model released November 24, 2025. Its dated API identifier is `claude-opus-4-5-20251101`; parameters are undisclosed. [Release announcement](https://www.anthropic.com/news/claude-opus-4-5).

The current documentation classifies it as legacy, with **200K context**, **64K maximum output**, extended thinking, default high effort, and a **May 2025 reliable knowledge cutoff**. Standard API rates are **$5 input / $25 output** per million tokens. It accepts text and images and generates text. [Official model documentation](https://platform.claude.com/docs/en/models/opus-4-5/overview).

### Raw benchmarks found

Agent / tool use:

- **Tau2 Retail 88.9%**, **Telecom 98.2%**, **MCP Atlas 62.3%**, all without extended thinking.
- **OSWorld 66.3%**.
- Tau2 Airline: **67.9% original**, **87.8% corrected**; these are different benchmark versions.

Reasoning / knowledge:

- **GPQA Diamond 87.0%**, **ARC-AGI-2 Verified 37.6%**, **MMMLU 90.8%**.
- Exact-model HLE and AIME: no verified public score found in the sources used here.

Coding:

- **SWE-bench Verified 80.9%**, without extended thinking.
- **Terminal-Bench 2.0 59.3%** with a 128K thinking budget; **57.8%** with 64K. The evaluation's budget setting must not be mistaken for the synchronous API output limit.

Multimodal / long context:

- **MMMU validation 80.7%**. Full-window MRCR/RULER: no verified public score found.

Results come from the [official system card, Table 2.3.A](https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf), whose indexed table was accessible despite direct PDF retrieval failing. Unless excepted above, it averages five trials using high effort, 64K thinking, and 200K context. Benchmark versions and thinking conditions remain separate.

### Normalized scores (1–100)

- **Tool use: 79/100.** Strong customer-service and MCP performance with useful computer use.
- **Reasoning: 80/100.** Strong science and multilingual knowledge; abstract reasoning trails later models.
- **Context window: 65/100.** 200K capacity reaches the methodology's 200–500K band, without maximum-window retrieval validation.
- **Multimodal: 70/100.** Image understanding backed by MMMU; native output is text.
- **Coding: 81/100.** Strong repository repair, with lower terminal performance and important budget differences.
- **Cost efficiency: 50/100.** $5/$25 standard pricing is expensive relative to newer economical agents.
- **Overall Score: 75/100.** Half-up mean: (79 + 80 + 65 + 70 + 81)/5 = 75; cost excluded. Suitable for established repository and tool workflows within a 200K context budget.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
