# Claude Opus 4.7 — Findings by Kimi K3.1 Pro

> **Source:** Kimi K3.1 Pro · **Date:** 2026-11-07 · **Method:** fresh web research
> **Model researched:** Claude Opus 4.7 (`claude-opus-4-7`) · **Reporter:** Kimi K3.1 Pro (`kimi-k3.1-pro`)

## Model card

| Field | Value |
|-------|-------|
| Model name | Claude Opus 4.7 |
| Provider | Anthropic |
| Exact API ID | `claude-opus-4-7` |
| Amazon Bedrock ID | `anthropic.claude-opus-4-7` |
| Released | 2026-04-16 |
| Status | Active legacy; retirement not sooner than 2027-04-16 |
| Knowledge cutoff | January 2026 (reliable knowledge and training-data cutoff) |
| Context window | 1,000,000 tokens |
| Max output | 128K tokens synchronously; 300K with the Message Batches output beta |
| Modalities | Text and image input; text output |
| Reasoning | Adaptive thinking; default `high`; `xhigh` introduced between `high` and `max` |
| Base API price | $5 / million input tokens; $25 / million output tokens |
| Cache price | $6.25 (5-minute) or $10 (1-hour) write; $0.50 read per million tokens |
| Batch price | 50% discount on input and output |

Sources: [Anthropic model reference](https://platform.claude.com/docs/en/models/opus-4-7/overview), [Anthropic launch](https://www.anthropic.com/news/claude-opus-4-7). Artificial Analysis separately labels its entry deprecated and benchmarks it every 18 hours rather than every 6; that is an evaluator label, not Anthropic's lifecycle status.

### Raw benchmarks found

All rows below name Claude Opus 4.7 exactly. Opus 4.6, Opus 4.8, and other Claude results are not imported.

| Benchmark | Score | Notes |
|-----------|------:|-------|
| OSWorld-Verified | 78.0% | Anthropic launch result; computer use |
| BrowseComp | 79.3% | Anthropic; 10M-token-limit comparison in the system-card discussion |
| MCP-Atlas | 77.3% | Anthropic launch; revised Scale grading noted for the predecessor |
| GDPval-AA | 1,753 Elo | Artificial Analysis launch-era knowledge-work result at max effort |
| Scale HiL-Bench | 41.67 ± 5.65 | Independent Scale leaderboard; ambiguous tasks and help-seeking |
| Finance Agent | 64.4% | Anthropic launch table, labeled state of the art at release |
| GPQA Diamond | 94.2% | Anthropic launch |
| Humanity's Last Exam | 54.7% with tools; 46.9% without tools | Anthropic launch; system-card effort sweep reports 43.0 low, 48.4 medium, 53.2 high, 55.4 xhigh, and 54.7 max with tools |
| ARC-AGI-2 Semi-Private | 75.8% max | ARC Prize; 68.3 high, 67.5 medium, and 62.0 low |
| CritPt v2 | 12.0% | Artificial Analysis record surfaced in an October 31, 2026 comparison; hard-subset labeling differs by page |
| Artificial Analysis Intelligence Index | 57.3 at launch; N/A on current v5.0.1 page | Launch-era value follows AA's statement that Opus 4.8's 61.4 was +4.1; versions are not interchangeable |
| SWE-bench Verified | 87.6% | Anthropic launch; memorization-screen caveat |
| SWE-bench Pro | 64.3% | Anthropic launch |
| SWE-bench Multilingual | 80.5% | Anthropic system card |
| SWE-bench Multimodal | 34.5% | Anthropic internal harness; not directly comparable with public leaderboard scores |
| Terminal-Bench 2.0 | 69.4% | Anthropic launch; Terminus-2, thinking disabled, five attempts per task |
| Terminal-Bench 2.0 | 80.2% ± 2.1 | Independent WOZCODE submission; different agent/harness from Anthropic's result |
| MRCR v2, 8-needle | 59.2% at 256K; 32.2% at 1M | Anthropic system-card results transcribed independently; substantial long-context regression |
| CharXiv-R | 91.0% with tools; 82.1% without tools | Anthropic launch |
| ScreenSpot-Pro | 79.5% | System-card result transcribed independently |
| LAB-Bench FigQA | 78.6% | System-card result transcribed independently |

Sources: [Anthropic launch](https://www.anthropic.com/news/claude-opus-4-7), [Opus 4.7 System Card](https://www-cdn.anthropic.com/037f06850df7fbe871e206dad004c3db5fd50340/Claude%20Opus%204.7%20System%20Card.pdf), [independent system-card transcription](https://dev.to/ji_ai/i-read-all-232-pages-of-the-opus-47-system-card-28mh), [launch-table transcription](https://llm-stats.com/blog/research/claude-opus-4-7-launch), [Artificial Analysis model page](https://artificialanalysis.ai/models/claude-opus-4-7), [Artificial Analysis release comparison](https://artificialanalysis.ai/articles/claude-opus-4-8-analysis-and-benchmarks), [Scale HiL-Bench](https://labs.scale.com/leaderboard/hil), [Terminal-Bench 2.0](https://www.tbench.ai/leaderboard/terminal-bench/2.0), and [ARC Prize result](https://x.com/arcprize/status/2044834615417053305).

### Agentic workflow & tool use

- OSWorld-Verified 78.0%, MCP-Atlas 77.3%, and GDPval-AA 1,753 establish strong launch-era computer, tool, and professional-work performance.
- BrowseComp 79.3% trails the preceding generation under the cited 10M-token comparison, so deep-research performance did not improve uniformly.
- Scale's independent HiL-Bench score of 41.67 ± 5.65 shows substantial difficulty deciding when to request human help.
- Partner reports are qualitative evidence rather than normalized benchmarks: Cursor reported 70% on CursorBench, Harvey 90.9% on BigLaw Bench at high effort, and Notion fewer tool errors.

### Reasoning & knowledge

- GPQA Diamond 94.2% and HLE 54.7% with tools / 46.9% without tools indicate frontier scientific and difficult-knowledge reasoning at launch.
- ARC-AGI-2 ranges from 62.0% at low effort to 75.8% at max, demonstrating a material effort effect.
- HLE is not monotonic in effort: the system-card sweep peaks at 55.4% with `xhigh`, slightly above 54.7% at `max`.
- CritPt 12.0% is a useful counterweight to the stronger vendor-reported academic results.

### Long-context performance

- The advertised 1M-token context and 128K synchronous output are verified by Anthropic; the batch beta permits 300K output.
- MRCR v2 falls to 59.2% at 256K and 32.2% at 1M. Capacity therefore should not be mistaken for reliable full-window multi-needle retrieval.
- Anthropic also improved file-system-based memory for multi-session work, but that workflow feature is not a substitute for measured in-context retrieval.

### Multimodal & vision

- Input is limited to text and images and output to text; no native audio or video input is documented.
- Images up to 2,576 pixels on the long edge (about 3.75 MP) provide roughly 3.3 times the prior pixel area.
- CharXiv-R 82.1% without tools and 91.0% with tools, ScreenSpot-Pro 79.5%, and LAB-Bench FigQA 78.6% support strong chart and screenshot understanding.
- SWE-bench Multimodal 34.5% shows that visual software repair remains much harder than chart interpretation.

### Coding & software engineering

- Launch results are strong across SWE-bench Verified 87.6%, Pro 64.3%, and Multilingual 80.5%.
- Terminal-Bench 2.0 differs materially by harness: 69.4% for Anthropic's Terminus-2 configuration versus 80.2% ± 2.1 for the independent WOZCODE submission.
- The 34.5% multimodal software-repair result and the model's literal instruction following mean prompts and harnesses require workload-specific validation.

### Cost & availability

- Base pricing is $5/$25 per million input/output tokens; cache reads are $0.50 and Batch requests are half price.
- Prompts above 200K carry higher long-context rates in the launch transcription; teams should check the current pricing page before deployment.
- Anthropic warns that the updated tokenizer can map identical input to approximately 1.0–1.35 times as many tokens and that higher effort can increase output tokens.
- Artificial Analysis currently measures 83 output tokens/s and 52.30 seconds to first answer token at max effort, indicating substantial latency despite respectable throughput.
- It remains available through the Claude API and major cloud platforms as an active legacy model, with newer and cheaper successors available.

### Normalized scores (1–100)

- **Tool use: 92/100.** Strong OSWorld, MCP-Atlas, GDPval-AA, and Finance Agent results support excellent agency; BrowseComp's regression and HiL-Bench 41.67 prevent a higher score.
- **Reasoning: 92/100.** GPQA 94.2%, HLE 54.7% with tools, and ARC-AGI-2 75.8% are excellent launch results, while CritPt 12.0% and effort sensitivity show uneven frontier reasoning.
- **Context window: 82/100.** The 1M window and large output allowance are strong specifications, but MRCR 59.2% at 256K and 32.2% at 1M reveal severe measured retrieval degradation.
- **Multimodal: 84/100.** Higher-resolution input and strong CharXiv, ScreenSpot, and FigQA results are offset by text-only output, no audio/video input, and SWE-bench Multimodal 34.5%.
- **Coding: 91/100.** SWE-bench Verified 87.6%, Pro 64.3%, and Multilingual 80.5% are excellent; harness-dependent Terminal-Bench and weak multimodal repair temper the result.
- **Cost efficiency: 52/100.** Caching and Batch discounts help, but $5/$25 pricing, possible tokenizer inflation, high max-effort latency, and cheaper successors reduce value.
- **Overall Score: 88.2/100.** Half-up mean of 92, 92, 82, 84, and 91.

## Signature

Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)

### Reference URLs

1. https://www.anthropic.com/news/claude-opus-4-7
2. https://platform.claude.com/docs/en/models/opus-4-7/overview
3. https://www-cdn.anthropic.com/037f06850df7fbe871e206dad004c3db5fd50340/Claude%20Opus%204.7%20System%20Card.pdf
4. https://artificialanalysis.ai/models/claude-opus-4-7
5. https://artificialanalysis.ai/articles/claude-opus-4-8-analysis-and-benchmarks
6. https://labs.scale.com/leaderboard/hil
7. https://www.tbench.ai/leaderboard/terminal-bench/2.0
8. https://llm-stats.com/blog/research/claude-opus-4-7-launch
9. https://dev.to/ji_ai/i-read-all-232-pages-of-the-opus-47-system-card-28mh
10. https://x.com/arcprize/status/2044834615417053305
