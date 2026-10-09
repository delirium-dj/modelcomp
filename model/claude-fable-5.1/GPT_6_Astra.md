# Claude Fable 5.1 — findings by GPT 6 Astra

- Source: Anthropic / Claude Fable 5.1
- Date: 2026-10-09 (UTC); refresh of the 2026-10-03 report, authorized by the user.
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** Claude Fable 5.1, max with default fallback evaluated
- **Short description:** Premium agentic reasoning model, with a different safeguard configuration from Mythos 5.1.
- **Provider / access:** Claude Messages API and cloud partners.
- **Release / knowledge:** September 1, 2026 / June 2026.
- **IDs:** `claude-fable-5-1`; Zen Free ID unverified.
- **Context window:** 1M; 128K output.
- **Modalities:** Text/images and PDF documents in, text out; adaptive reasoning and tools. Anthropic documents PDF processing for all active models, including this active model. [PDF support](https://platform.claude.com/docs/en/build-with-claude/pdf-support)
- **Pricing (as of 2026-10-09):** $10 input / $50 output / $0.25 cache-read per million tokens; unchanged.
- **Architecture:** Proprietary, parameter count undisclosed. [Official specification](https://platform.claude.com/docs/en/models/fable-5-1/overview)

Tool compatibility caveat: automatic tool selection is supported, but forced `tool_choice: any` or a specific tool is unsupported. [Migration guide](https://platform.claude.com/docs/en/models/fable-5-1/migration-guide)

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1: 1758 Elo; AA-Briefcase v1.1: 1676; AutomationBench-AA: 59%; Terminal-Bench 4.0: 52%.
- MCP Atlas: **87.20 ± 2.05**, newly located on the evaluator's leaderboard; Fable 5.1 effort setting is not exposed. Retrieval date is October 9, not the run date; the page's April 8 footer appears stale relative to the model roster. [Scale MCP Atlas](https://labs.scale.com/leaderboard/mcp_atlas)
- Tau3 / Claw-Eval / ClawProBench / Toolathon: no verified public score found in reviewed primary measurements.

Reasoning / knowledge:

- Intelligence Index v4.3.2: 53; HLE: 59%; CritPt: 30%; Omniscience index: 43, not accuracy.
- GPQA Diamond: **93.7%**; HLE with tools: **65.0%**, in OpenAI's published competitor comparison. These are separately attributed figures, not an update to AA's HLE result or an Anthropic self-report. [OpenAI comparison](https://openai.com/index/gpt-6-astra/)
- Hallucination rate: no verified public score found in reviewed primary measurements; Omniscience index must not be relabeled as a hallucination percentage.

Coding:

- SciCode: 63%; AA terminal result above, unchanged.
- SWE-Bench Pro V2 Full: **99.10 ± 0.50**; HARD: **92.20**, both Fable 5.1 with Claude Code, high effort. These are the V2 splits, not SWE-bench Verified or the original Pro benchmark. [Scale Full](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=full), [Scale HARD](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=hard)
- SWE Atlas Codebase QnA: **59.95 ± 4.85**, Claude Code, displayed as `xHigh*`. The page's footnote names other entries, so the asterisk's application to Fable 5.1 remains unclear. [Scale QnA](https://labs.scale.com/leaderboard/sweatlas-qna)
- Vibe Code Bench v1.1: **90.26%**, OpenHands; **$33.37/test**, 57m40s displayed duration. Leaderboard updated October 7. This is not Vibe1-100. [Vals AI](https://www.vals.ai/benchmarks/vibe-code)
- DeepSWE v1.1: **67.4%**; Terminal-Bench 4.0: **55.8%**, from OpenAI's competitor table. Keep the latter separate from AA's 52% because evaluation configuration differs or is incompletely specified. [OpenAI comparison](https://openai.com/index/gpt-6-astra/)
- SWE-bench Verified and LiveCodeBench: no verified public score found in reviewed sources.

Long context:

- AA-LCR v1.1: 85%; full-window needle retrieval unverified.

Benchmarks: [AA comparison](https://artificialanalysis.ai/models/comparisons/claude-fable-5-1-vs-kat-coder-pro-v2), Fable max/default-fallback column. Fallback-enabled measurements evaluate the deployed configuration.

### Comparison with the October 3 findings

All sources above were rechecked on October 9. The original AA figures, release date, knowledge cutoff, context/output limits and token prices were reconfirmed. Newly located MCP Atlas, GPQA, repository coding, app-building and DeepSWE evidence fills research gaps; it does not establish that the model itself improved since October 3. Harnesses and reasoning settings differ across sources and must not be pooled into a single raw benchmark score.

The old report assigned multimodal 70 and Overall 89. Confirmed PDF processing moves multimodal to 80 under the project's 75–90 PDF-input tier, making Overall 91. The other five dimension ratings remain unchanged. This is a correction to evidence coverage, not a claimed new model capability. Full-window retrieval, hallucination rate and the explicitly missing benchmarks above remain unresolved. The linked Anthropic system card could not be retrieved in this refresh; no numbers are inferred from it.

### Normalized scores (1–100)

- **Tool use: 94/100.** Strong professional and terminal results; incomplete workflow success and fallback attribution cap confidence.
- **Reasoning: 94/100.** HLE and scientific reasoning support a high rating, with unresolved hard problems.
- **Context window: 95/100.** 1M capacity; no near-perfect retrieval evidence.
- **Multimodal: 80/100.** Verified image and PDF input place it in the PDF-input tier; no native audio/video input or non-text output verified.
- **Coding: 94/100.** Strong SciCode and terminal performance now corroborated by repository and app-building evaluations; different harnesses limit direct comparison.
- **Cost efficiency: 32/100.** Premium $10/$50 price anchor, modestly helped by cheap cache reads.
- **Overall Score: 91/100.** Half-up mean (94 + 94 + 95 + 80 + 94) / 5 = 91.4, rounded to 91; cost efficiency excluded.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09; original research 2026-10-03.
- Method: Independent fresh web research; normalized interpretations, not official scores.
- Future sources: add separate signed files with these headings.
