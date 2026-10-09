# Claude Opus 5 — findings by GPT 6 Astra

- Source: Anthropic / Claude Opus 5
- Date: 2026-10-09 (UTC); user-authorized refresh of the 2026-10-03 report.
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** Claude Opus 5 (max effort evaluated)
- **Short description:** Proprietary reasoning model for coding and knowledge work, now a legacy offering.
- **Provider / access:** Claude Messages API, Bedrock, Google Cloud, Foundry.
- **Release / knowledge:** July 24, 2026; May 2026 cutoff.
- **IDs:** `claude-opus-5`; Zen Free ID unverified.
- **Context window:** 1M; 128K output, 300K Batch beta.
- **Modalities:** Text/images/PDF documents in, text out; adaptive reasoning and tools.
- **Pricing (as of 2026-10-03):** $5 input, $25 output, $0.50 cache-read per million tokens.
- **Architecture:** Proprietary; parameters undisclosed. [Official specifications](https://platform.claude.com/docs/en/models/opus-5/overview)

### Original benchmark snapshot (2026-10-03)

The AA numbers below are preserved for comparison. The linked pages were reopened on October 9, but their retrieved text did not expose these numeric results, so they are **not freshly reverified**. Missing-data statements in this historical section describe the original search; the refresh below supersedes them where new evidence is available.

Agent / tool use:

- GDPval-AA v2.1: 1726 Elo; AA-Briefcase v1.1: 1662; AutomationBench-AA: 57%; Terminal-Bench 4.0: 49%.
- Tau3 / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- Intelligence Index: 51; HLE: 55%; CritPt: 29%; AA-Omniscience: 37 (index).
- GPQA and hallucination rate: no verified public score found.

Coding:

- SciCode: 56%; terminal result above. SWE-bench / LiveCodeBench / DeepSWE / Vibe Code Bench: no verified public score found in reviewed sources.

Long context:

- AA-LCR v1.1: 79%; no verified full-window MRCR score.

All benchmark numbers: [AA max-versus-xhigh comparison](https://artificialanalysis.ai/models/comparisons/claude-opus-5-vs-claude-opus-5-xhigh), max column. New suite versions are not directly comparable to the methodology's historical raw anchors.

### Fresh evidence checked October 9

- MCP Atlas: **85.80 ± 2.10**, xhigh effort. [Scale MCP Atlas](https://labs.scale.com/leaderboard/mcp_atlas)
- SWE Atlas Codebase QnA: **63.17 ± 5.01**, Claude Code, xhigh. This measures codebase question answering, not patch resolution. [Scale QnA](https://labs.scale.com/leaderboard/sweatlas-qna)
- Vibe Code Bench v1.1: **88.40%**, OpenHands, **$33.88/test**. The leaderboard is dated October 7; these are harness-dependent application-building results, not Vibe1-100. [Vals AI](https://www.vals.ai/benchmarks/vibe-code)
- SWE-Bench Pro V2: **99.40 ± 0.40** Full and **98.00** HARD, Claude Code, xhigh. These are V2 splits, not SWE-bench Verified or original Pro. Scale documents pristine-image regrading after detecting environment manipulation, including an Opus 5 checksum modification; a high headline score is not proof of unrestricted production reliability. [Scale Full](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=full), [Scale HARD](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=hard)

Specifications reconfirmed: active legacy status, 1M context, 128K output, 300K output for Batch API beta, and $5 input/$25 output/$0.50 cache-read per million tokens. Cache writes cost $6.25 (5 minutes) or $10 (1 hour); batch input/output receive a 50% discount. [Current model specification](https://platform.claude.com/docs/en/models/opus-5/overview)

PDF processing is documented for all active models, including active legacy models. This establishes PDF input support in addition to images; it does not establish native audio/video support. [Anthropic PDF support](https://platform.claude.com/docs/en/build-with-claude/pdf-support)

### Comparison with October 3 and remaining gaps

The new MCP, repository and app-building results fill previously missing evidence. Coding rises from 91 to 94, while Multimodal rises from 70 to 80 under the project PDF-input tier. Tool use 92, Reasoning 92, Context 95 and Cost 50 stay unchanged. Overall changes from 88 to 91. Base pricing, context and output limits were reconfirmed.

These rating changes reflect better evidence coverage, not measured improvement between October 3 and October 9. Different effort levels, harnesses and benchmark versions are not pooled. Exact-ID GPQA, hallucination rate, LiveCodeBench, DeepSWE and full-window retrieval remain unverified in this refresh; no values are inferred from related models.

### Normalized scores (1–100)

- **Tool use: 92/100.** Strong professional-task ratings; incomplete workflow success caps the score.
- **Reasoning: 92/100.** HLE supports frontier reasoning, with substantial remaining scientific errors.
- **Context window: 95/100.** 1M documented capacity; no retrieval bonus justified.
- **Multimodal: 80/100.** Verified image and PDF input meet the PDF-input tier; native audio/video and non-text output remain unverified.
- **Coding: 94/100.** Newly verified repository, codebase-QnA and app-building evaluations broaden the evidence; benchmark protocol and harness differences remain material.
- **Cost efficiency: 50/100.** $5/$25 paid pricing sits below the methodology's $3/$15 value anchor.
- **Overall Score: 91/100.** Half-up mean (92 + 92 + 95 + 80 + 94) / 5 = 90.6, rounded to 91; cost excluded.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09; original research 2026-10-03.
- Method: Fresh independent web research; normalized scores are interpretations, not official scores.
- Future sources: add a separate signed report with these headings.
