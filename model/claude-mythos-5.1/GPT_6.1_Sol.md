# Claude Mythos 5.1 — findings by GPT 6.1 Sol

- Source: Anthropic / `claude-mythos-5-1`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Trusted-access configuration of the same underlying weights as Fable 5.1, with more permissive domain-specific safeguards. It has a distinct API ID; this report evaluates the existing Mythos entry without treating Fable's production measurements as isolated Mythos results [S1,S2].
- **Provider / access:** Claude Messages API and approved cloud deployments. AWS supports Messages, Converse and Invoke on bedrock-runtime; not Responses or Chat Completions on that surface. Verified organizations only [S1,S3].
- **Release / knowledge:** September 1, 2026; June 2026 cutoff. Active, verification required; AWS additionally labels its service Preview/Beta [S1,S3].
- **IDs:** `claude-mythos-5-1`; Bedrock `anthropic.claude-mythos-5-1`, `us.anthropic.claude-mythos-5-1`, `global.anthropic.claude-mythos-5-1` [S1,S3]. No Zen Free ID verified.
- **Context window:** 1M tokens, 128K output [S1,S3].
- **Modalities:** Text/image input and text output; adaptive thinking always on, effort low through max, default high. AWS explicitly marks audio, speech and video input unsupported [S3]. Document/agent workflows inherit the model family's capabilities but product wrappers are not new native output modalities.
- **Pricing (as of 2026-10-16):** Official $10 input / $50 output per million tokens, $0.25 cache read, $12.50 five-minute write, $20 one-hour write; batch input/output half price [S1]. These are published Anthropic rates, not an independently verified invoice for each partner host.
- **Architecture:** Proprietary, undisclosed parameter count; same weights as Fable 5.1, not a larger model inferred from the Mythos name [S1,S2].

### Raw benchmarks found

Agent / tool use:

- **Terminal-Bench 4.0: 60.9%**, explicitly labeled **Mythos 5.1** in Anthropic's launch table, versus Fable 5.1 **55.8%**. Vendor attributes the difference to interventions by the earlier cyber safeguards [S2]. Vellum and Model Beats reproduce this same measurement; they are not additional reruns [S4,S8].
- No independently rerun exact-route Tau3-Banking / GDPval-AA / Claw-Eval / ClawProBench / MCP-Atlas / Toolathon score verified in inspected sources.
- **Related-route proxy, not Mythos measurement:** Fable 5.1 GDPval-AA v2 **1853 Elo**, AutomationBench **31.4%**, OSWorld August task release **77.9% partial / 41.7% strict**, all labeled Fable in the official table [S2]. Safeguard/fallback effects prevent silent transfer.

Reasoning / knowledge:

- No independently measured exact-route GPQA, HLE, CritPt, LCR, MLCR, AA Intelligence Index or Omniscience result verified in inspected sources.
- **Related-route proxy:** Fable 5.1 HLE **60.9% no tools / 65.0% with tools** in official comparison [S2]. The shared-weights identity supports a provisional capability inference, not a claim that Mythos achieved those percentages in a separate run.
- **Exact-configuration research demonstration:** Mythos-generated binders achieved a **nearly 50% hit rate across 12 targets**, with experimental testing at two external organizations, as reported by Anthropic [S2,S4]. This is not a general reasoning benchmark or an independently audited benchmark replication.

Coding:

- Mythos-specific Terminal-Bench 4.0 **60.9%** is the strongest verified exact-model numeric coding evidence [S2].
- **Exact-configuration engineering demonstration:** custom kernels sped seven open-source protein/genomics models by **1.4×–2.5×** on H100, identical outputs, vendor-reported; task-specific scientific optimization rather than SWE solve rate [S2,S4].
- No verified exact-route SWE-bench Verified / SWE-Pro / DeepSWE / LiveCodeBench / SciCode / Vibe Code Bench score found.
- **Related-route proxy:** Fable 5.1 CursorBench 3.2.0 **73.4%**, Terminal-Bench Science **52.6%** in the official table [S2]. These remain Fable-labeled.

Long context and multimodal:

- Official 1M capacity and image input verified [S1,S3]. No exact-route MRCR/RULER or million-token retrieval percentage found.
- No exact-route numerical multimodal benchmark found; image/document utility is supported by specifications and same-weight identity, not assumed audio/video capability.

### Evidence comparison and research trail

Four distinct DuckDuckGo searches: `"Claude Mythos 5.1" official model card Anthropic`; `"Claude Mythos 5.1" independent benchmark review`; `"Claude Mythos 5.1" pricing context access benchmark results`; `"Mythos 5.1" "GPQA" "HLE"` (last query returned no results). Read official Mythos docs, AWS's card, LLM Stats, Vellum, NOPE's system-card analysis, Benchgen, eesel and Model Beats. The joint primary announcement was directly inspected during this same research batch and provides the explicitly Mythos-labeled result [S2].

The full system-card URL exceeded the fetch tool's 5MB limit. Two text-extraction proxy attempts returned empty content. No claim below depends on pretending that PDF was read. NOPE is a secondary analysis of selected vendor-evaluation sections, not an independent capability run [S6]. Public comparative evidence for the precise Mythos endpoint is much thinner than for Fable: Model Beats deliberately records only the separately identified terminal result, and Benchgen has no independent leaderboard run [S7,S8]. A scored report is warranted by the verified exact-model 60.9% result; dimensions without direct results are explicitly provisional.

Several secondary specs are contradicted by current primary sources. Benchgen says September 3 release, undisclosed context/pricing and estimated October 2025 cutoff; Anthropic and AWS say September 1, 1M/128K, published $10/$50 and June 2026 [S1,S3,S7]. Model Beats' “no hosted API”/missing pricing fields are missing catalog coverage, not evidence the verified API does not exist [S8]. eesel calls Mythos broadly “safeguards off,” whereas Anthropic describes domain-tailored permissiveness with other safeguards remaining; the official description is retained [S2,S9]. Vellum's explanation of the 60.9/55.8 gap is supported by the primary chart, but its characterization of GDPval as Anthropic's own benchmark and its percentage arithmetic on Elo are not used [S2,S4]. Equal underlying weights justify shared-capability hypotheses; they do not establish identical realized results under different permissions, refusal handling and fallback routing.

### Normalized scores (1–100)

- **Tool use: 93/100.** Exact-model TB4 60.9% supports strong terminal agents; broader tool capability is provisional from shared-weight Fable evidence, capped by absent independent Mythos reruns [S1,S2].
- **Reasoning: 94/100.** Provisional shared-weight inference from official Fable HLE and Mythos scientific demonstrations; not an independently measured Mythos reasoning score, with lower confidence than data-rich peers [S1,S2].
- **Context window: 95/100.** Official 1M window meets the top capacity tier without verified ≥98% retrieval [S1,S3].
- **Multimodal: 80/100.** Verified image/text and document-oriented shared capabilities; no native audio/video or media output, and no exact-route numeric vision score verified [S1,S3].
- **Coding: 94/100.** Exact-model terminal and scientific-kernel demonstrations plus explicitly provisional sibling coding evidence support high capability; limited independent coverage caps certainty [S2].
- **Cost efficiency: 30/100.** Published $10/$50 is premium despite cheap cached input; no measured Mythos-specific task-cost advantage verified [S1,S5].
- **Overall Score: 91/100.** (93 + 94 + 95 + 80 + 94) / 5 = 91.2 → 91. Provisional, lower-confidence fit for approved long-horizon technical research; cost excluded. Independent route-specific reasoning, vision and coding runs could materially revise this assessment.

### Sources

- [S1] https://platform.claude.com/docs/en/models/mythos-5-1/overview — primary identity, specs, pricing and availability.
- [S2] https://www.anthropic.com/claude-fable-and-mythos-5-1 — primary joint announcement, exact Mythos terminal result, shared identity and research demonstrations.
- [S3] https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-mythos-5-1.html — provider card, precise modalities, API surfaces and Preview status.
- [S4] https://www.vellum.ai/blog/claude-fable-5-1-mythos-5-1-benchmarks-explained — secondary interpretation, not an independent rerun.
- [S5] https://llm-stats.com/models/claude-mythos-5-1 — spec/pricing aggregator; no inspectable benchmark execution data.
- [S6] https://insights.nope.net/2026-anthropic-claude-fable-5-1-mythos-5-1-system-card — secondary selected-section system-card analysis.
- [S7] https://benchgen.com/models/anthropic/claude-mythos-5-1 — draft catalog with stale/conflicting specs; confirms absence of its own leaderboard coverage.
- [S8] https://www.modelbeats.com/models/claude-mythos-5-1 — explicitly sparse exact-configuration coverage and vendor provenance.
- [S9] https://www.eesel.ai/blog/claude-mythos-5-1-review — secondary buyer review; no Mythos inference test disclosed.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research, four distinct searches and extensive primary/provider/secondary comparison; scarce independent exact-route evidence is explicitly disclosed. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
