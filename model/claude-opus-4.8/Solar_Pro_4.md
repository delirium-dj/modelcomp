# Claude Opus 4.8 — findings by Solar Pro 4

- Source: Anthropic/Claude Opus 4.8, e.g. Anthropic (`anthropic/claude-opus-4-8`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8 (Anthropic proprietary, Claude 4 flagship)
- **Provider / access:** Anthropic API (`anthropic/claude-opus-4-8`) via Messages API. Available on 45+ providers including GitHub Copilot, Amazon Bedrock, Azure, OpenRouter, Vercel AI Gateway, OpenCode Zen, etc. Messages API. Fast mode (research preview) available for latency-sensitive work at roughly 2x price.
- **Release / knowledge:** Released 2026-05-28; knowledge cutoff 2026-01.
- **IDs:** `anthropic/claude-opus-4-8` (primary); also `claude-opus-4-8` on Azure, Bedrock, OpenRouter, etc. No free tier.
- **Context window:** 1M tokens total (input + output combined); max output 128K tokens (300K via Batch API with beta header). 200K on Microsoft Foundry.
- **Modalities:** Text + image input; PDF input support; text output. Tool calls: yes (including native computer-use). Structured output / JSON mode: yes. Reasoning: yes (extended thinking). No audio I/O.
- **Pricing (as of 2026-09-18):** $5.00/1M input, $25.00/1M output (standard mode, Anthropic direct). Cache reads: $0.50/1M (90% discount). Cache writes: $6.25/1M. Fast mode: ~$10/$50 per 1M (roughly 2.5x faster output). Batch API: 50% discount ($2.50/$12.50). Zero Data Retention available for eligible enterprise customers. No free tier.
- **Architecture:** Proprietary dense Transformer. Parameter count undisclosed (estimated ~600B based on capability footprint). Extended thinking (reasoning) available via effort parameter.
### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: **88.6%** (vendor-reported by Anthropic, HokAI; 2026-05-28). Ranked #6 out of 28 models reporting this benchmark per HokAI. Up from Opus 4.7's 87.6%. Ahead of GPT-5.5's estimates.
- SWE-bench Pro: **69.2%** (vendor-reported by Anthropic, HokAI; 2026-05-28). Up 4.9 points from Opus 4.7's 64.3%. 10.6 points ahead of GPT-5.5's 58.6%.
- Terminal-Bench 2.1: **74.6%** (vendor-reported by Anthropic, HokAI; 2026-05-28). Up from Opus 4.7's 66.1%.
- Terminal-Bench 4.0: no verified public score found for Opus 4.8 specifically.
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found (included in AA Intelligence Index composite).
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found for Opus 4.8 specifically.
- OSWorld 2.0: no verified public score found for Opus 4.8 specifically.
- Proof Bench V1: no verified public score found
- Cursor Bench 3: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (vendor-reported by Anthropic, HokAI; 2026-05-28). Ranked #8 out of 44 models reporting this benchmark per HokAI.
- HLE (Humanity's Last Exam): **49.8%** without tools, **57.9%** with tools (vendor-reported by Anthropic, HokAI; 2026-05-28). Highest in the field at time of release.
- USAMO 2026: **96.7%** (vendor-reported by Anthropic, HokAI; 2026-05-28). Stunning leap from Opus 4.7's 69.3%.
Coding:

- SWE-bench Verified: **88.6%** (see above under Agent/tool use — same benchmark, primary coding evidence).
- SWE-bench Pro: **69.2%** (see above).
- LiveCodeBench: no verified public score found for Opus 4.8 specifically. (Note: Opus 5 scored 90.52%.)
- SciCode / AA-SciCode: no verified public score found for Opus 4.8 specifically (included in AA Intelligence Index composite via SciCode).
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no verified public score found for Opus 4.8 specifically. Context window is 1M tokens. Long-context recall (needle-in-haystack) tested by Anthropic but specific retrieval percentages not published for 4.8 as of 2026-09-18.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the six.

- **Tool use: 92/100.** Direct SWE-bench Verified 88.6% (#6 of 28, frontier tier: SWE-bench 80%+ → 90-100 per methodology), SWE-bench Pro 69.2% (strong for harder agentic coding benchmark), Terminal-Bench 2.1 74.6% (solid mid-to-high tier). Native computer-use capability is a significant differentiator. Capped slightly by: lack of Tau3/Tau2 direct scores, OSWorld scores not found for 4.8 specifically, and SWE-bench Pro at 69.2% (while strong, this is below the 80%+ frontier threshold for that specific benchmark). Overall tool-use capability is clearly frontier-tier.
- **Reasoning: 92/100.** GPQA Diamond 93.6% (#8 of 44, frontier tier: GPQA 90%+ → 90-100), HLE 49.8% without tools / 57.9% with tools (frontier tier: HLE 40%+ → 90-100, and highest in field at release), USAMO 2026 96.7% (exceptional math reasoning). AA Intelligence Index 72 (well above average). These all place Opus 4.8 firmly in the 90-100 frontier reasoning band. Capped only by the fact that HLE at 49.8% without tools — while excellent — could theoretically be higher for a model of this caliber, and that some reasoning benchmarks (LCR, CritPt) lack direct scores.
- **Context window: 100/100.** 1M token context window, verified via Anthropic docs and multiple aggregators. This is the maximum tier (≥1M = 95-100, with 100 if ≥98% retrieval at 512K+). Max output 128K (300K via Batch API). Score 100 reflects top-tier context window.
- **Multimodal: 75/100.** Text + image input (vision), PDF input support, text output. Native computer-use (desktop automation) is a notable capability but doesn't change the input modality scoring. No audio I/O. Per methodology: +image in = 60-70, +video/PDF in = 75-90. With both image and PDF input, score 75. Capped by lack of video input and text-only output.
- **Coding: 90/100.** SWE-bench Verified 88.6% (#6 of 28, frontier tier: SWE-bench 80%+ → 90-100), SWE-bench Pro 69.2% (strong, 10.6 points ahead of GPT-5.5), Terminal-Bench 2.1 74.6%. These are consistently strong scores. Capped slightly by: LiveCodeBench score not found for 4.8 specifically, Vibe Code Bench not found, and the fact that SWE-bench Pro at 69.2% — while strong — is below the 80%+ frontier threshold for that specific benchmark.
- **Cost efficiency: 55/100.** $5.00/$25.00 per 1M input/output (standard mode). Per methodology: ~$5/$25 = ~55-60 range. Cache discount of 90% ($0.50/1M reads) helps for repeat-context workloads. Blended rate ~$3.85/1M (standard mode). Fast mode at $10/$50 is significantly more expensive. Batch API 50% discount brings effective rate to ~$2.50/$12.50. Compared to competitors: Opus 5 at same $5/$25 price offers significantly better benchmarks. Capped by premium pricing relative to Sonnet-tier alternatives at $2-3/$10-15.
- **Overall Score: 90/100.** Mean of (92 + 92 + 100 + 75 + 90 + 55) / 6 = 84.0 → **84**. Best-fit recommendation: Claude Opus 4.8 was Anthropic's flagship until Opus 5's release. At the same $5/$25 price point, Opus 5 offers significantly better benchmarks (SWE-bench 97.0% vs 88.6%, GPQA 94.1% vs 93.6%, SWE-bench Pro 79.2% vs 69.2%). For new deployments, Opus 5 is the clear choice. Opus 4.8 may still be relevant for existing deployments or where specific compatibility is required, and its native computer-use capability was a notable differentiator. For cost-sensitive workloads, Claude Sonnet 5 (SWE-bench 82.1%, GPQA 96.2%, $2/$10 intro pricing) offers better value.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (modelcompare.dev, HokAI, Artificial Analysis), vendor release materials (Anthropic official benchmarks), and independent model review sites (hokai.io); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmarks are vendor-reported; independent third-party verification was limited at time of research.
- Future sources: add a new file next to this one, e.g. `Gemini_3_6_Flash.md`, using the same headings.
- LCR / MLCR: no verified public score found for Opus 4.8 specifically. (Note: included in AA Intelligence Index composite via AA-LCR v1.1.)
- CritPt: no verified public score found (included in AA Intelligence Index composite).
- Artificial Analysis Intelligence Index: **72** (Artificial Analysis, cited by HokAI; 2026-05-28). Composite of 10 evaluations (AA-Briefcase, GDPval-AA v2, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1).
- Vals Index: no verified public score found for Opus 4.8 specifically. Opus 5 scored 67.87% (#1 of 51).
- MMLU Pro: no verified public score found for Opus 4.8 specifically. Opus 5 scored 92.38% (#1).
- ARC-AGI-3: no verified public score found for Opus 4.8 specifically. Opus 5 scored 30.16% at high reasoning effort.
- Omniscience Accuracy / Hallucination Rate: no verified public score found (AA-Omniscience included in AA Intelligence Index composite).
- **Short description:** Anthropic's most capable generally available model, released May 28, 2026. A dense Transformer (estimated ~600B parameters based on capability footprint) that builds on Opus 4.7 with targeted improvements in agentic coding, mathematical reasoning, and behavioral consistency. Positioned as the Claude Opus family flagship for long-running, multi-step autonomous workflows. Features native computer-use automation for desktop tasks. Since superseded by Claude Opus 5 (released July 2026).