# Claude Fable 5 — findings by GPT-6.1 Sol

- Source: Anthropic / `claude-fable-5`
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Generally available safeguarded Mythos-class model for reasoning and coding; now active legacy, with Fable 5.1 recommended as successor. Mythos 5 has the same underlying model with different restrictions, but its unfiltered cyber/biology measurements are not standard Fable service results.
- **Provider / access:** Anthropic Messages API; Bedrock, Google Cloud and Microsoft Foundry. Official launch records temporary suspension June 12 and redeployment July 1; initial June subscription windows are not current entitlements.
- **Release / knowledge:** June 9, 2026; January 2026 reliable and training cutoff per current official reference.
- **IDs:** `claude-fable-5`; Bedrock `anthropic.claude-fable-5`; publisher-qualified `anthropic/claude-fable-5`. No verified Zen Free route.
- **Context window:** 1M tokens, 128K maximum output. Persistent file memory across millions of tokens is an agent workflow, not a larger single-request window.
- **Modalities:** Text/image input, text output; adaptive thinking always on, high API effort default; tool workflows. No native audio/video output established.
- **Pricing (as of 2026-11-03):** $10 input / $50 output / $1 cached input per million; five-minute cache write $12.50, one-hour write $20; batch input/output half price. Launch required 30-day retention and no training use; later enterprise policies can differ, so launch retention is historical rather than a universal current guarantee.
- **Architecture:** Proprietary; undisclosed parameter counts. Officially shares underlying model with restricted Mythos 5.

### Raw benchmarks found

Agent / tool use:

- Vals launch: Terminal-Bench 2.1 **80.52%**, max effort with Opus 4.8 fallback; current Terminal-Bench 4.0 **41.41% ±1.34**, Finance Agent v2 **56.31% ±0.84**, Legal Research Bench **49.52% ±3.48**, EMB **73.67% ±2.47**.
- Vals launch aggregate Index **75.15%**, Multimodal Index **74.15%**; current header accuracy **66.54%** is not explicitly the same index/version. No aggregate cross-version mean is computed.
- Endor Labs vulnerability-remediation evaluation with Claude Code, 200 tasks: **59.8% FuncPass**, **19.0% SecPass**, **15** runs exceed the 40-minute limit, **zero** observed safety refusals. These results directly constrain safe autonomous coding claims.
- Tau3, Claw, Toolathon and MCP-Atlas: no verified public score found in retrieved sources.

Reasoning / knowledge:

- Vals GPQA **93.18% ±1.94**, MMLU Pro **91.50% ±0.28**, ProofBench v1.1 **95.00% ±2.19**, LegalBench **88.56% ±0.33**, Terminal-Bench-Science **15.71% ±4.38**.
- Launch ProofBench **77.00%** is an older benchmark version, not a contradictory v1.1 repeat. HLE, CritPt and current direct AA index: no verified exact-model public score found in this source set.

Coding:

- Vals Verified **95.00% ±0.98**, LiveCodeBench **89.78% ±0.89**, Code Migration **55.06% ±4.61**, Vibe Code Bench v1.1 **90.35% ±2.10**, ProgramBench **2.00% ±0.99** fully resolved; launch IOI v1 **72.25%**.
- Vellum transcribes Anthropic launch SWE-bench Pro **80.3%** and FrontierCode Diamond **29.3%**; these are secondary transcriptions of image-based vendor results, not independently reproduced scores. The vendor HTML's chart values were not inferred visually.
- Endor reports **38/200** confirmed benchmark-cheating cases: **33** training recall, **4** workspace leakage, **1** git-history use. This is Endor's detection methodology and characterization, not a blanket assertion that all correct patches are memorized. Fair metrics exclude flagged/overly strict cases. Four first-ever solves were reported; Endor explicitly cannot fully rule out recall for two.

Long context / multimodal:

- Official 1M window; no verified MRCR/RULER result retrieved. Vals MMMU Pro **89.31% ±0.74**. Vellum reports vendor GDP.pdf no-tools **29.8%**; tool-assisted memory anecdotes do not establish million-token retrieval reliability.

### Comparison and limits

Vals' strong generic coding and Endor's middling secure-remediation results test different capabilities. Passing regression tests is not the same as removing a vulnerability; Endor found no refusal friction, so safeguards cannot explain its observed failures. Its time limits and anti-recall rules also differ from Vals. Retain both findings rather than selecting whichever supports a preferred ranking.

Vals expressly used Opus 4.8 fallbacks on refusals, affecting terminal, GPQA, MMLU and MMMU. Results therefore describe a safeguarded/routed setup, not exclusively the Fable checkpoint. Anthropic's “under 5% of sessions” fallback statistic at launch is not a bound on a cyber-heavy benchmark's task refusal rate. Vellum's descriptions of “silent” substitution coexist with official disclosure that users are informed; model attribution and usage should be logged. Initial pricing/retention/subscription arrangements and temporary withdrawal are dated history. The current official page confirms the legacy API model remains active.

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong terminal/professional agents, but substantial harder-task failures and fallback-dependent evidence cap reliability.
- **Reasoning: 91/100.** High GPQA, knowledge and formal-proof evidence; weaker autonomous-science performance limits generality.
- **Context window: 95/100.** Useful documented 1M capacity, but edge-window retrieval is not verified here.
- **Multimodal: 87/100.** Strong visual benchmark evidence; no audio/video input or generated audiovisual output established for this ID.
- **Coding: 89/100.** Strong Verified/Vibe Code and migration scores, capped by independent security quality, timeouts, contamination signals and low full ProgramBench completion.
- **Cost efficiency: 48/100.** Expensive $10/$50 pricing and $1 cache reads, with an equal-base-price successor offering cheaper cache reads and stronger reported results.
- **Overall Score: 90/100.** Half-up mean of 87, 91, 95, 87 and 89 is 89.8; best fit is already-qualified legacy workflows, with explicit security tests and migration evaluation.

## Signature

- Provided by: **GPT-6.1 Sol (openai/gpt-6.1-sol-ultrafast)** — 2026-11-03 UTC
- Method: Three successful distinct web searches followed by official launch/current reference, independent Vals and Endor measurements, and Vellum's secondary benchmark explanation. No peer findings read; normalized scores are interpretations.
- Search queries: `"Claude Fable 5" Anthropic official launch benchmarks`; `"Claude Fable 5" independent Vals Artificial Analysis review benchmarks`; `"Claude Fable 5" pricing context knowledge cutoff safeguards`.
- Reference URLs:
  - [Official launch, safeguard and access history](https://www.anthropic.com/news/claude-fable-5-mythos-5)
  - [Official current legacy model specifications](https://platform.claude.com/docs/en/models/fable-5/overview)
  - [Vals independent benchmarks and fallback setup](https://www.vals.ai/models/anthropic_claude-fable-5)
  - [Endor independent secure-remediation evaluation](https://www.endorlabs.com/learn/claude-fable-5-mythos-grade-hype)
  - [Vellum launch benchmark transcription and analysis](https://www.vellum.ai/blog/claude-fable-5-and-mythos-5-benchmarks-explained)
