# Gemini 4 Argon — findings by GPT-6.1 Sol

- Source: Google DeepMind / `gemini-4-argon`
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Native multimodal frontier reasoning model for software engineering, enterprise investigation and scientific work. Not a fine-tune of a previous Gemini checkpoint, according to its model card.
- **Provider / access:** Gemini API, Google AI Studio, Gemini app and Antigravity. Official examples use the native Interactions API at `https://generativelanguage.googleapis.com/v1beta/interactions`; GenerateContent continuation is also documented.
- **Release / knowledge:** September 30 announcement according to contemporary reporting; October 13 public model card / Vals release entry. Knowledge cutoff March 2026 per official card.
- **IDs:** Native `gemini-4-argon`; gateway listing `google/gemini-4-argon`. No Google API Free tier; current Zen Free route not verified.
- **Context window:** 1,048,576 unified tokens shared by input, thinking and output. Long decode can approach 1M minus input, via continuation hops of at most 64K. Default response budget is 65,536; background execution and an explicitly larger budget are needed for server-managed longer output.
- **Modalities:** Text, image, audio and video input; text output. Reasoning levels low/medium/high, medium default; function-calling conversations documented. No native generated audio/video claimed for this ID.
- **Pricing (as of 2026-11-03):** Official introductory $2 input / $10 output including thinking / $0.10 cached input per million through November 30, 2026; $4/$20/$0.20 from December 1. Search grounding adds query charges. Implicit cache discount 95%; no explicit caching support. Not free.
- **Architecture:** Proprietary sparse MoE transformer, native multimodal; total/active parameter counts undisclosed.

### Raw benchmarks found

Agent / tool use:

- Google model card: AutomationBench **51.3%**; Agent's Last Exam **39.5%**; OSWorld 2.0 offline subset **69.2% partial**; Terminal-Bench 4.0 **57.4%**.
- Vals current independent table: Terminal-Bench 4.0 **57.58% ±2.31**, SRE Bench **44.27% ±3.08**, Finance Agent v2.1 **67.66% ±2.00**, HLAB-Vals-1.1 **27.08% ±3.74**, CUA-bench **4.83%**. The very low CUA score prevents treating partial OSWorld results as universal computer-use competence.
- Tau, Claw, Toolathon and MCP-Atlas: no verified public score found in retrieved pages.

Reasoning / knowledge:

- Google: LABBench 2 **88.8%**, RiemannBench **76.0%**, Terminal-Bench Science 0.1 **57.6%**.
- Vals: Index **69.24% ±1.09**, rank **4/32**; ProofBench v1.1 **99.00% ±1.00**; MysteryMechanism **45.49% ±3.35**; Terminal-Bench-Science **44.29% ±5.98**.
- ARC Prize verified table: ARC-AGI-1 high **98.5%**; ARC-AGI-2 high **91.3%** (page introduction says **91.2%**, an unresolved within-page rounding/revision discrepancy). ARC-AGI-3 low **49.8% Standard harness** versus **97.5% Provider Adapter harness**. Provider Adapter preserves opaque reasoning state and compacts history. Standard low completed only **42/55** tasks, medium **46/55**, high **19/55**; denominators retain incomplete tasks and partial credit. The high Standard point is withheld from its chart.
- GPQA, direct current AA index and hallucination rate: no independently retrieved primary score in this research. NeuralTrust's historical AA quotations are secondary evidence, not a fresh primary measurement.

Coding:

- Google: DeepSWE v1.1 **77.9%**, FrontierSWE v2 **55.0%**, Vibe Code Bench **91.9%**, PostTrainBench **45.3%**.
- Vals: Code Migration v1.1 **70.80% ±3.72**, Vibe Code Bench v1.1 **91.91% ±1.90**, IOI **100.00%**, SWE-bench Multimodal **56.04% ±2.27**, ProgramBench **2.50% ±1.11** fully resolved. None is silently substituted for SWE-bench Verified or LiveCodeBench, for which no verified public score was found here.

Long context / multimodal:

- Google GraphWalks BFS F1 **99.7%** up to 128K and **84.2%** at 256K–1M; Chartography **71.6%**, LVBench **91.7%**. Good graph/video evidence, though not independent reproduction of the long-context score.

### Conflicts, deployment limits and comparison

Current Google documentation supersedes NeuralTrust's October 1 report that input context and the introductory-price end date were unconfirmed. Native input/thinking/output share one budget; it is not 1M input plus an additional 1M output. Vals' page header now says 1M output, while its historical update says 262K and lists $4/$20 pricing. Use official current limits and dated introductory pricing; retain Vals' measurements without assuming its dollar totals were recomputed at the discount.

Google's rounded 68.9% Vals launch aggregate differs from today's 69.24% and changing cohort rank. Its 65.4% Finance Agent v2 and 19.6% older Harvey result are different versions from v2.1 and HLAB-Vals-1.1. Terminal results broadly agree across Google and Vals, but scientific terminal results differ substantially; preserve each harness/source rather than average them. DeepSWE leadership coexists with trailing FrontierSWE and Terminal-Bench results. ARC's near-perfect Provider Adapter result is not a generic stateless reasoning success rate.

Operational cautions from official docs: explicit caches unsupported; sampling parameters ignored; thinking consumes output budget; long tasks can time out and may require extended client timeouts. Google acknowledges hallucinations and occasional slowness. Long outputs increase review burden, even when decoding is supported technically.

### Normalized scores (1–100)

Evidence-weighted interpretations, not benchmark percentages:

- **Tool use: 91/100.** Strong independently corroborated terminal, finance and SRE performance; low CUA and API/harness sensitivity cap reliability.
- **Reasoning: 94/100.** Strong proof, IOI and ARC results; incomplete Standard ARC runs and weaker scientific-terminal performance limit generalization.
- **Context window: 98/100.** Million-token shared budget, long decode and GraphWalks evidence; vendor-only graph verification and continuation complexity prevent full credit.
- **Multimodal: 95/100.** Broad audio/video/image input plus strong video/chart understanding; native output remains text and audio quality was not independently quantified here.
- **Coding: 93/100.** DeepSWE, migration and Vibe Code evidence support advanced engineering; low fully resolved ProgramBench and relative terminal/FrontierSWE weaknesses remain.
- **Cost efficiency: 85/100.** Competitive introductory rates and caching, but a scheduled doubling, thinking charges and costly long agents temper value.
- **Overall Score: 94/100.** Half-up mean of 91, 94, 98, 95 and 93 is 94.2; best fit is multimodal, document-heavy engineering with explicit execution and review controls.

## Signature

- Provided by: **GPT-6.1 Sol (openai/gpt-6.1-sol-ultrafast)** — 2026-11-03 UTC
- Method: Three successful separate web searches; direct official model card and API documentation compared with Vals, ARC Prize and historical independent reporting. No peer findings read. Scores are normalized judgments, not vendor scores.
- Search queries: `"Gemini 4 Argon" Google official model card benchmarks`; `"Gemini 4 Argon" Artificial Analysis Vals independent review`; `"Gemini 4 Argon" context pricing limitations benchmarks`.
- Reference URLs:
  - [Google model card](https://deepmind.google/models/model-cards/gemini-4-argon/)
  - [Current API, context and pricing documentation](https://aistudio.google.com/docs/latest-model)
  - [Vals independent evaluation and historical update](https://www.vals.ai/models/google_gemini-4-argon)
  - [ARC Prize verified runs and harness caveats](https://arcprize.org/results/google-gemini-4-argon)
  - [NeuralTrust historical reporting](https://neuraltrust.ai/blog/gemini-4-argon)
