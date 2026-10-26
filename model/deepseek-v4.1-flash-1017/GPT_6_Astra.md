# DeepSeek V4.1 Flash 1017 — findings by GPT 6 Astra

- Source: DeepSeek / `deepseek-ai/DeepSeek-V4.1-Flash-1017`
- Date: 2026-10-26 (UTC)
- Methodology: `../../model-comparison.md`; signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017; October post-training update, distinct from September's evaluated snapshot.
- **Provider / access:** Native `deepseek-flash` at `https://api.deepseek.com`; OpenAI-format Chat Completions/Responses and Anthropic-compatible interface. OpenRouter identifies `deepseek/deepseek-v4.1-flash-1017`; open weights use the exact dated Hugging Face ID above. Native alias currently serves 1017 and is not an immutable dated identifier.
- **Release / knowledge:** October 17, 2026; reliable knowledge cutoff not verified.
- **Context window:** Native documentation says 1M, maximum output 384K. OpenRouter expresses these as 1,048,576 and 393,216 tokens. Preserve provider units rather than assuming identical limits everywhere. Model-card recommendation of at least 256K output budget is not an API maximum.
- **Modalities:** Text and image input, text output; thinking/non-thinking, JSON output and tool calls. No verified native audio/video support.
- **Pricing:** Native peak $0.30 input / $1.20 output / $0.006 cached input per million tokens; off-peak $0.15 / $0.60 / $0.003. Peak weekdays 01:00–04:00 and 06:00–10:00 UTC, excluding Chinese public holidays. Search/Fetch each $0.75 per 1,000 successful requests; server-side integration promotion ends October 31 at 16:00 UTC. No free model tier verified.
- **Architecture:** MIT open weights; Causal Encoder–Decoder MoE, 552B backbone, 8B active input / 16B active output. Together additionally distinguishes 196B sparsely accessed Engram memory; this is separate from the conventional backbone parameter figure.

### Raw benchmarks found

| Benchmark | Result | Source / configuration |
|---|---:|---|
| AA Intelligence Index v4.3.2 | 45 | Independent AA, max reasoning; September snapshot 39. |
| AA-Briefcase v1.1 | 1570 Elo | Independent AA. |
| GDPval-AA v2.1 | 1746 Elo | Independent AA. |
| Terminal-Bench 4.0 | 34% AA; 42.3% vendor | AA independent rounded result versus DeepSeek Claude Code harness. |
| DeepSWE v1.1 | 77.0% | Vendor-published Mini-SWE-V2 result; do not call secondary repetition a rerun. |
| ProgramBench / NL2Repo-Bench | 29.1% / 68.2% | Vendor model card. |
| Automation-Bench v1.0.6 | 60.5% | Vendor model card. |
| AutomationBench-AA | 67% | AA objective-completion metric; September snapshot 69%. |
| Agents' Last Exam / Apex v1.1 | 35.4% / 72.1% | Vendor model card. |
| HLE without tools | 42.6%; text-only subset 44.0% | Vendor; full versus subset results explicitly distinguished. AA independently reports rounded HLE 43%. |
| SciCode | 56% | AA rounded figure; AA currently marks evaluation under review. |
| CritPt | 24% | Independent AA. |
| AA-Omniscience | 5 | Net index, not accuracy percentage; penalizes wrong answers. |
| AA-LCR v1.1 | 83% | Independent AA; September 84%. Not proof of 98% million-token retrieval. |
| Chartography / BabyVision / ZeroBench-main with tools | 83.0% / 92.5% / 51.0% | Vendor vision-with-tools results; secondary reporting says ZeroBench allows five attempts, not pass@1. |

GPQA, Tau2/Tau3, Claw-Eval, SWE-bench Verified, LiveCodeBench and full-window retrieval: no verified exact-snapshot public score found in inspected material.

### Cross-source reconciliation

The official card and independent AA both support substantial improvement, but not improvement on every task: AA automation and long-context scores are slightly lower than September, whereas the selected vendor table improves throughout. Terminal-Bench 34% versus 42.3% is retained as two configurations, not averaged; DeepSeek explicitly uses Claude Code. An October 17 review saying independent results were unavailable is a dated observation, superseded by the subsequently published AA evaluation.

Vendor claims of faster task completion do not mean higher streaming speed. The directly fetched AA comparison gives about 169 versus 177 tokens/second and weighted decode time about 392 versus 371 seconds; neither measures every real agent's wall-clock completion. AA nevertheless reports task cost $0.26 versus $0.32. Older reviews quote $0.49 for the predecessor and different throughput captures; the current directly inspected comparison takes precedence for this dated report, without attributing the change to a model regression.

AA aggregate output is approximately 211M tokens across the suite, while its weighted per-task output is 89K. A secondary review labels 210M “per task”; that is a unit error, not extraordinary single-task usage. The 1017 model's low net Omniscience index limits confidence in ungrounded factual answers despite strong engineering performance. Lower third-party token prices are hosting offers, not contradictions of native peak pricing.

### Normalized scores (1–100)

- **Tool use: 86/100.** Independent GDPval 1746 and automation 67% support strong agents; terminal-harness variation and limited task completion cap the score.
- **Reasoning: 85/100.** HLE around 43%, AA index 45 and CritPt 24% are strong, with net Omniscience 5 limiting factual reliability.
- **Context window: 95/100.** Verified 1M tier with AA-LCR 83%; insufficient evidence for a perfect retrieval score.
- **Multimodal: 70/100.** Native image understanding with measured visual tasks; no audio/video or non-text output established.
- **Coding: 91/100.** DeepSWE 77% and AA SciCode 56% support high coding quality; ProgramBench 29.1% and weaker independent terminal results limit generalization.
- **Cost efficiency: 96/100.** Low native prices, substantial cache discount and $0.26 measured index-task cost; paid and reasoning-heavy rather than free.
- **Overall Score: 85/100.** Half-up mean of (86 + 85 + 95 + 70 + 91) / 5 = 85.4; strong value for image-aware engineering and tool workflows.

## Sources and research audit

Three searches: `DeepSeek V4.1 Flash 1017 official release benchmark model card`; `DeepSeek V4.1 Flash 1017 Artificial Analysis independent benchmarks`; `"deepseek-v4.1-flash-1017" pricing context`.

1. https://api-docs.deepseek.com/news/news261017/ — official release.
2. https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017/raw/main/README.md — directly fetched official card and harness definitions.
3. https://api-docs.deepseek.com/quick_start/pricing/ — directly fetched exact current route, limits and rates.
4. https://artificialanalysis.ai/models/comparisons/deepseek-v4-1-flash-1017-vs-deepseek-v4-1-flash — directly fetched independent comparison and methods.
5. https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017 — independent model record.
6. https://www.techi.com/deepseek-v4-1-flash-1017-update-benchmarks-price/ — independent reporting with explicit vendor-results caveats.
7. https://codingplans.dev/briefs/deepseek-v4-1-flash-1017/ — secondary historical capture; unit discrepancy addressed above.
8. https://www.together.ai/models/deepseek-v4-1-flash-1017 — hosting and architecture detail.
9. https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017 — provider-specific units and prices.

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-10-26
- Method: Fresh public-web research comparing primary documentation, independent measurements and reviews; scores are normalized interpretations, not official figures. No peer findings used.
