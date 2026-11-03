# Claude Mythos 5.1 — findings by GPT-6.1 Sol

- Source: Anthropic / `claude-mythos-5-1`
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Trusted-access deployment of Fable 5.1's underlying model with more permissive safeguards for verified cybersecurity and life-science work. Distinct deployed API route, not a separately trained model according to Anthropic.
- **Provider / access:** Verification required through appropriate Anthropic programs; official reference lists Claude API, Bedrock, Google Cloud and Microsoft Foundry. Launch access was limited to selected US organizations; current geographic eligibility must be checked with the provider. Native Messages API, not assumed public OpenAI-compatible access.
- **Release / knowledge:** September 1, 2026; June 2026 reliable/training cutoff.
- **IDs:** `claude-mythos-5-1`; Bedrock `anthropic.claude-mythos-5-1`; publisher-qualified `anthropic/claude-mythos-5-1`. No Free Zen route verified. A public catalog entry is not authorization to use the restricted model.
- **Context window:** Official 1M total, 128K maximum output; no 300K batch limit inferred from other Claude models.
- **Modalities:** Text/image input, text output; adaptive always-on thinking, default high effort; tool-based research/engineering workflows. Reduced safeguards are program-specific, not a removal of all safeguards.
- **Pricing (as of 2026-11-03):** $10 input/$50 output/$0.25 cache read per million; five-minute cache writes $12.50, one-hour $20; batch input/output discount 50%, per official Mythos reference. Enterprise privacy/retention requires the customer's agreement; the announcement's eligible-Fable zero-retention statement is not generalized to all Mythos access.
- **Architecture:** Proprietary; same underlying model as Fable 5.1, parameter counts undisclosed.

### Raw benchmarks found

Agent / tool use:

- Exact Mythos-labelled Anthropic Terminal-Bench 4.0 **60.9%**, compared with **55.8%** for safeguarded Fable 5.1 in the same launch table. Vellum independently transcribes this claim but does not report rerunning it. This is one measured vendor comparison, not independent replication.
- Exact-route Tau, MCP-Atlas, Claw, Toolathon, GDPval and OSWorld: no verified public score found in retrieved sources.
- Labelled related-weight proxy only: Fable 5.1 launch GDPval-AA v2 **1853 Elo**, OSWorld 2.0 **77.9% partial / 41.7% strict**, AutomationBench **31.4%**. These include production safeguards and some Opus fallback work; they are not Mythos results.

Reasoning / knowledge:

- Exact-route GPQA, HLE, CritPt, ARC and independent intelligence index: no verified public score found. Targeted fourth search did not supply a primary exact-route result.
- Labelled related-weight proxy only: Fable 5.1 HLE **60.9% no tools / 65.0% tools**, from the joint announcement. Same weights motivate a provisional capability inference, not transferring measured percentages.
- Mythos-specific scientific demonstrations: Anthropic reports a binder hit rate **nearly 50% across 12 targets**, tested by two external organizations. This is a vendor-coordinated application study, not a standardized general reasoning benchmark. Its approximate rate is not converted to an exact percentage.

Coding:

- Terminal-Bench 4.0 **60.9%** is the exact-route coding/agent anchor above.
- Anthropic Mythos-specific GPU-kernel demonstrations sped seven open-source protein/genomics models by **up to 2.5x**, with identical outputs and estimated **30–60%** downstream GPU savings. The setup is vendor reported; not a SWE-bench success rate.
- Exact Mythos SWE-bench Verified/Pro, LiveCodeBench, FrontierCode and independent migration results: no verified public score found.
- Related-weight proxy only: Fable 5.1 CursorBench 3.2.0 **73.4%** in the joint launch. Not relabelled as a Mythos run.

Long context / multimodal:

- Official 1M/text-image specifications verified by current docs and corroborated by LLM Stats. No exact-route MRCR/RULER/MMMU numerical evaluation found. LLM Stats' benchmark sections contain no rendered scores and its comparisons say “score pending”; a catalog listing is not benchmark confirmation.

### Comparison and evidence limits

Anthropic explicitly says Fable and Mythos share the model, but safeguarded service results can differ. In the joint launch, Fable's flagged cyber work can run on Opus 4.8 and biology work on Opus 5; copying those aggregate results into a Mythos scorecard would conflate checkpoints. The 5.1-point terminal gap demonstrates deployment-policy sensitivity but does not quantify a universal safeguard penalty or prove every verified customer's configuration reaches 60.9%.

Vellum's GDPval wording calls it Anthropic's benchmark; it is an Artificial Analysis adaptation and its Elo is not a ratio-scale percentage. Scientific validation by external organizations is valuable but does not establish an independently sampled general benchmark. Launch claims of strongest cyber capability remain vendor claims without retrieved exact public benchmark figures here. Anthropic acknowledges remaining approval-bypass tendencies and gaps in very-long-context/multi-agent alignment testing.

### Normalized scores (1–100)

Provisional, lower-confidence estimates: exact terminal evidence anchors tools/coding; official same-model identity and explicitly labelled Fable proxies inform reasoning. Missing exact modality/context evaluations are not invented.

- **Tool use: 91/100.** Strong exact terminal result and verified tool-based scientific work; restricted access and missing independent exact-route agents cap confidence.
- **Reasoning: 92/100.** Same-weight Fable reasoning evidence and Mythos scientific demonstrations support strong capability, but exact-route independent reasoning coverage is sparse.
- **Context window: 95/100.** Official 1M/128K limits; no verified edge-window retrieval measure.
- **Multimodal: 84/100.** Verified text/image input and text output, with no exact-route quantitative vision result or native audiovisual breadth established.
- **Coding: 92/100.** Exact terminal and kernel-optimization evidence support advanced engineering; no independent exact-route repository benchmark retrieved.
- **Cost efficiency: 55/100.** Cheap cache reads help repeated context, but $10/$50 pricing and verification barriers limit value and availability.
- **Overall Score: 91/100.** Half-up mean of 91, 92, 95, 84 and 92 is 90.8; suitable for vetted specialist research with application-specific validation, not a broadly independently verified ranking.

## Signature

- Provided by: **GPT-6.1 Sol (openai/gpt-6.1-sol-ultrafast)** — 2026-11-03 UTC
- Method: Four successful distinct searches and direct official launch/reference comparison with Vellum and LLM Stats. Independent coverage was sought but no independent exact-route benchmark rerun was verified. No peer findings read; normalized scores are provisional interpretations.
- Search queries: `"Claude Mythos 5.1" official Anthropic benchmarks model`; `"Claude Mythos 5.1" independent benchmark review Vals ARC`; `"Claude Mythos 5.1" pricing context access safeguards`; `"Mythos 5.1" "GPQA" "HLE" "MRCR" benchmark`.
- Reference URLs:
  - [Official restricted model reference and pricing](https://platform.claude.com/docs/en/models/mythos-5-1/overview)
  - [Joint launch, exact Mythos terminal result and science demonstrations](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Vellum secondary analysis and benchmark transcription](https://www.vellum.ai/blog/claude-fable-5-1-mythos-5-1-benchmarks-explained)
  - [LLM Stats catalog, specifications and missing rendered scores](https://llm-stats.com/models/claude-mythos-5-1)
