# Kimi K3 — findings by GPT 6 Astra

- Source: Moonshot AI / Kimi K3
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Research refresh — 2026-10-09

Compared with the 2026-10-03 report. Sources accessed on 2026-10-09; access dates are not benchmark execution dates. This section supersedes conflicting or missing-data statements in the preserved snapshot below. No local model evaluation was performed.

Moonshot's [model card](https://huggingface.co/moonshotai/Kimi-K3) now closes several gaps: native text/image/video input, text output, 1,048,576 context tokens, 2.8T total / 104B active parameters. Its max-effort vendor table reports GPQA Diamond **93.5%**, HLE-Full **43.5% without / 56.0% with tools**, DeepSWE **67.5%**, Terminal-Bench 2.1 **88.3%**. These are vendor runs, not AA's different HLE/terminal suites.

The [official API help](https://www.kimi.ai/help/kimi-api/api-troubleshooting) specifies model ID `kimi-k3`, base URL `https://api.moonshot.ai/v1`, and low/high/max effort (default max; thinking cannot be disabled). Output defaults to **131,072** tokens; its ceiling is **1,048,576 minus prompt tokens**, not an additional million beyond context. [Moonshot's repository](https://github.com/MoonshotAI/Kimi-K3/blob/main/README.md) confirms OpenAI/Anthropic-compatible API access.

[MCP Atlas](https://labs.scale.com/leaderboard/mcp_atlas): max **82.30 ± 2.35%**. [SWE-Bench Pro V2 Full](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=full): mini-swe-agent/max **97.70 ± 0.90%**; the revised V2 set is not original Pro or Verified.

Vibe Code Bench v1.1 / OpenHands: **84.97%**, **$10.01/test**. [Vals](https://www.vals.ai/benchmarks/vibe-code).

[AA max comparison](https://artificialanalysis.ai/models/comparisons/kimi-k3-low-vs-kimi-k3) currently shows GDPval-AA v2.1 **1533** (previously 1538); Index **44**, Automation **58%**, Terminal 4.0 **13%**, SciCode **59%**, HLE **47%**, CritPt **23%**, Omniscience index **20**, LCR v1.1 **89%** remain consistent. Small Elo drift is not evidence of a model regression. AA marks SciCode and CritPt under review.

Tool use 85→88 and coding 83→93 reflect newly located independent evidence; reasoning 89→91 gains direct GPQA evidence; multimodal 70→85 corrects omitted video support. Context and cost stay unchanged. Remaining gaps: cutoff, license-text review, full-window near-perfect retrieval, exact mapping between hosted and downloadable revisions.

### Score comparison

Order: tool use, reasoning, context, multimodal, coding, cost. Previous: **85, 89, 95, 70, 83, 60**; revised: **88, 91, 95, 85, 93, 60**. Overall: **84 → 90**. Scores are normalized judgments, not raw benchmark percentages.

## Prior research snapshot — 2026-10-03

The following model card and raw findings preserve the earlier evidence and its gaps for comparison; read the refresh above for current corrections.

### Model card

- **Name:** Kimi K3, max reasoning evaluated
- **Short description:** Large open-weight multimodal reasoning model focused on agentic work.
- **Provider / access:** Kimi API; protocol and exact API identifier unverified.
- **Release / knowledge:** July 16, 2026; cutoff unverified.
- **IDs:** Kimi K3; Zen Free ID not verified.
- **Context window:** Approximately 1M tokens; output limit unverified.
- **Modalities:** Text/image input, text output; reasoning and agent workflows.
- **Pricing (as of 2026-10-03):** $3 input, $15 output, $0.30 cache per million tokens.
- **Architecture:** 2.8T total, 104B active; Kimi K3 License. Weight availability and specifications are reported by [AA release registry](https://artificialanalysis.ai/models/releases/kimi-k3); license text not independently reviewed.

### Raw benchmarks found

Agent / tool use:

- Current max results: GDPval-AA v2.1 1538 Elo; AutomationBench-AA 58%; Terminal-Bench 4.0 13%; AA-Briefcase v1.1 1501 Elo.
- Tau3 / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- Current Intelligence Index 44; HLE 47%; CritPt 23%; AA-Omniscience index 20, not an accuracy percentage. GPQA and hallucination rate: no verified public score found.

Coding:

- SciCode 59%; newer terminal result above. SWE-bench / LiveCodeBench / Vibe Code Bench / DeepSWE: no verified public score found.

Long context:

- AA-LCR v1.1 89%; not a verified 1M needle-retrieval result.

All current measurements: [AA low-versus-max comparison](https://artificialanalysis.ai/models/comparisons/kimi-k3-low-vs-kimi-k3), max column. Historical Index 57 and GDPval-AA v2 1668 belong to the [July launch evaluation](https://artificialanalysis.ai/articles/kimi-k3-achieves-3-in-the-artificial-analysis-intelligence-index-comparable-to-opus-4-8-and-gpt-5-5), a different suite/version.

## Current normalized scores (1–100)

- **Tool use: 88/100.** Revised from 85; evidence and rationale are recorded in the dated refresh above.
- **Reasoning: 91/100.** Revised from 89; evidence and rationale are recorded in the dated refresh above.
- **Context window: 95/100.** 1M capacity; no qualifying high-accuracy retrieval measurement for a bonus.
- **Multimodal: 85/100.** Revised from 70; evidence and rationale are recorded in the dated refresh above.
- **Coding: 93/100.** Revised from 83; evidence and rationale are recorded in the dated refresh above.
- **Cost efficiency: 60/100.** $3/$15 matches the methodology anchor; max reasoning adds token costs.
- **Overall Score: 90/100.** Half-up mean (88 + 91 + 95 + 85 + 93) / 5 = 90.4; cost excluded. See the refresh for the comparison with 84.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09
- Method: Independent public web research; normalized scores are interpretations, with benchmark versions kept separate.
- Future sources: add a separate signed report using these headings.
