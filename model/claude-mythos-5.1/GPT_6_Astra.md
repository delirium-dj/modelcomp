# Claude Mythos 5.1 — findings by GPT 6 Astra

- Source: Anthropic / Claude Mythos 5.1
- Date: 2026-10-09 (UTC); user-authorized refresh of the 2026-10-03 report.
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Restricted-access counterpart to Fable 5.1; same underlying model, distinct safeguards and access conditions. Separate API identity is preserved.
- **Provider / access:** Verification required; Claude API, Amazon Bedrock, Google Cloud and Microsoft Foundry. The expanded Cyber Verification Program now includes Mythos 5.1; access remains conditional on approval.
- **Release / knowledge:** September 1, 2026; June 2026 knowledge cutoff.
- **IDs:** `claude-mythos-5-1`; no verified Zen Free ID.
- **Context window:** 1M; 128K output.
- **Modalities:** Text/images and PDF documents in, text out; adaptive reasoning (always on, default high effort) and tools. PDF support follows Anthropic's documented support for all active models; Mythos 5.1 is active with verification required. [PDF documentation](https://platform.claude.com/docs/en/build-with-claude/pdf-support)
- **Pricing (as of 2026-10-09):** $10 input / $50 output / $0.25 cache-read per million tokens. Cache writes: $12.50 for 5 minutes or $20 for 1 hour; Batch API discounts input/output by 50%.
- **Architecture:** Proprietary; same base model as Fable 5.1. [Current model specification](https://platform.claude.com/docs/en/models/mythos-5-1/overview), [Anthropic](https://www.anthropic.com/claude/mythos).

Access update: Anthropic's October 6 announcement integrates Glasswing and CVP into three verification tiers: Defense Access, Red Team Access and Specialized Access. Existing Glasswing members transition to Specialized Access without reapproval for current models. The old invitation-only description is incomplete; this is still not unrestricted public access. [Expanded CVP](https://www.anthropic.com/news/cyber-verification-program)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: 60.9%, explicitly labeled Mythos 5.1; reconfirmed in Anthropic's launch table. Other exact-ID tool suites: no verified public score found. Anthropic attributes the Fable/Mythos gap to safeguard interventions; it is not evidence of different underlying weights.

Reasoning / knowledge:

- No verified public score found for exact-ID GPQA / HLE / CritPt / Intelligence Index / Omniscience.
- Provisional shared-model proxy: Fable 5.1 HLE 60.9% without tools and 65.0% with tools; these are not Mythos measurements.

Coding:

- Terminal-Bench 4.0 60.9% is the verified exact-ID coding evidence. SWE-bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found for Mythos 5.1.

Long context:

- No verified public retrieval score found.

Benchmark evidence and explicit shared-model relationship: [Anthropic launch](https://www.anthropic.com/claude-fable-and-mythos-5-1). Safeguard differences make Fable a qualified proxy, not an interchangeable benchmark row.

### Deeper evidence review and remaining gaps

- Newly captured exact-model case study: Anthropic reports that Mythos 5.1 optimized seven open-source biology models, achieving up to 2.5× speedup with identical outputs. This is vendor-reported application evidence, not a standardized repository benchmark or independent replication. [Launch research section](https://www.anthropic.com/claude-fable-and-mythos-5-1)
- Searches targeting Scale, Vals, Artificial Analysis and AISI did not locate additional verified Mythos 5.1 scores for the missing benchmark families. Absence from these search results does not establish that no private evaluation exists.
- AISI's widely cited evaluation explicitly concerns **Mythos Preview**, not Mythos 5.1. Its cyber results are excluded from this report's scoring. [AISI model identification](https://www.aisi.gov.uk/blog/our-evaluation-of-claude-mythos-previews-cyber-capabilities)
- Artificial Analysis's October 8 trusted-access announcement introduces GPT-6 Sol Daybreak Blue; it does not supply a Mythos 5.1 measurement. [AA announcement](https://artificialanalysis.ai/ko/articles/trusted-access-models-cyber-index)
- The system-card link from Anthropic's launch page failed to load in this refresh. Unverified secondary claims about SWE-bench and reasoning results were not imported. Exact-ID GPQA, HLE, retrieval, hallucination rate, MCP Atlas and repository benchmark gaps remain open.

### Comparison with October 3

The terminal result, shared-model relationship, context/output limits and base token prices remain unchanged. Newly verified cache pricing fills an earlier gap. PDF support corrects the previous image-only capability tier; it does not establish that PDF support was added after the old research. October 6's CVP expansion is a dated access change since the prior report.

Previous ratings were Tool 90, Reasoning 92, Context 95, Multimodal 70, Coding 94 and Cost 30, with Overall 88. This refresh changes Multimodal to 80 for the methodology's PDF-input tier and Cost to 32 for the confirmed cache-read discount; the latter does not affect Overall. Other ratings remain unchanged because the added case study does not close the standardized benchmark gaps. Overall becomes 90. These are evidence-coverage corrections, not measured model improvement.

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong exact-ID terminal result; narrow independently observable tool coverage limits confidence.
- **Reasoning: 92/100.** Provisional interpretation from the documented shared model and Fable HLE; missing direct Mythos evaluations caps certainty.
- **Context window: 95/100.** Documented 1M window, with retrieval unverified.
- **Multimodal: 80/100.** Verified image and PDF input; no verified native audio/video capability or non-text output.
- **Coding: 94/100.** Strong terminal performance; repository and scientific coding remain unverified for this access configuration.
- **Cost efficiency: 32/100.** Premium $10/$50 anchor, modestly improved by verified $0.25 cache reads; actual savings depend on cache reuse.
- **Overall Score: 90/100.** Half-up mean (90 + 92 + 95 + 80 + 94) / 5 = 90.2, rounded to 90; cost excluded. Provisional with limited exact-ID evidence and restricted availability.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09; original research 2026-10-03.
- Method: Fresh independent public research; proxy evidence explicitly labeled; normalized scores are interpretations.
- Future sources: add a separate signed report using these headings.
