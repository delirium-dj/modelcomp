# Ember-1 — findings by GPT 6.1 Sol

- Source: Fireworks / `accounts/fireworks/models/ember-1`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Ember-1
- **Short description:** Fireworks-trained KimiK3 derivative optimizing reasoning length, not a transparent routing alias or an independently established quality-equivalent clone [S1,S2].
- **Provider / access:** Fireworks serverless, REST/OpenAI-compatible clients; primary model page Ready. Launch research-preview access policy described two-week releases, but current Ready status is stronger present-availability evidence [S1,S2].
- **Release / knowledge:** Created September22, blog September23,2026; cutoff unverified [S1,S2].
- **IDs:** `accounts/fireworks/models/ember-1`; no verified Free ID.
- **Context window:** Primary1040K, Vals131,072 output [S1,S3].
- **Modalities:** Verified text/image input, text output; function calling; audio/video not verified [S1,S3].
- **Pricing (as of 2026-10-16):** $3 input/$0.30 cache/$15 output per million [S1].
- **Architecture:** Primary MoE2.78T based on KimiK3, trained with Fireworks proprietary data; exact active count/licence/open weights not verified. Model page says fine-tuning unsupported despite launch announcing training support; product-specific access may differ [S1,S2].

### Raw benchmarks found
Agent / tool use:
- Vendor TB2.1 **82% (89tasks)**, Tau2 Airline **66% (50tasks)**; SWE-Interact **20% (75tasks)** [S2]. Airline is not Telecom/Tau3. Vals TB4 **20.71% ±3.64**, financev2 **51.85% ±2.12**, legal-agent **9.17% ±2.44**, CyberBench1.1 **69.52% ±5.56** [S3]. Effort unspecified;131K/default sampling, benchmark overrides possible. GDPval/Claw/MCP exact figures not found.
Reasoning / knowledge:
- Vals ProofBench1.1 **61% ±4.90**, BioMystery **67.04% ±3.03**, Science Index **31.76% ±1.66**, overall Index **50.94% ±1.30 (#29/49)** [S3]. GPQA/HLE/CritPt/Omniscience/LCR/MLCR exact values not verified; Kimi sibling values excluded.
Coding:
- Vendor SWE Verified **92.2% (500tasks)**, DeepSWE1.1 **75.2% (113tasks)** [S2]. Vals Vibe1.1 **83.87% ±3.15**, migration **32.51% ±4.63**, terminal-science **5.71% ±2.79**, IOI **46.33% ±9.16** [S3]. Exact LiveCode/SciCode/ProgramBench not verified.
Long context / multimodal:
- Verified1040K capacity but no full-window retrieval percentage [S1]. Image input confirmed; exact visual-quality benchmark not verified. No borrowed K3 video/audio support.

### Evidence comparison and research trail
Three fresh Google queries: `"Ember-1" Fireworks official model`, `"Ember-1" independent benchmarks`, `"Ember-1" pricing limitations review`; interstitials. Direct primary model/blog, independent Vals and secondary BenchLM read. BenchLM unranked sparse5rows does not negate Vals's broader independent suite. Launch40% fewer tokens and35–50% reductions are measured on selected tests/customers, not universal accuracy equivalence. Vendor cost comparison explicitly uses K3 public$3/$15 rates; apparent savings are trajectory/usage, not a lower rate [S2]. Vals **$9.656/index test /70m10s** shows long/expensive tasks remain. Vendor “same answers” marketing cannot erase Proof61, TB4~21 and modest migration evidence. No general-purpose reasoning score transferred from K3.

### Normalized scores (1–100)
- **Tool use: 83/100.** Good historical terminal/customer evidence, capped by modern TB4 and legal completion [S2,S3].
- **Reasoning: 83/100.** Proof/BioMystery/science support useful reasoning, capped by missing academic/calibration evidence and uneven suite performance [S3].
- **Context window: 95/100.** Primary1040K, no verified perfect-retrieval bonus [S1].
- **Multimodal: 70/100.** Verified image understanding, no exact visual rerun/audio/video evidence [S1,S3].
- **Coding: 90/100.** Strong vendor SWE/DeepSWE and independent Vibe, capped by migration/science and narrow vendor sample settings [S2,S3].
- **Cost efficiency: 60/100.** $3/$15 premium-moderate, selected token savings useful but$9.656/test prevents universal bargain claims [S1–S3].
- **Overall Score: 84/100.** (83 +83 +95 +70 +90)/5=84.2 →84. Best fit supervised coding with locally verified token savings; cost excluded.

### Sources
- [S1] https://fireworks.ai/models/fireworks/ember-1 — exact primary Ready/API/rates/context/architecture/features.
- [S2] https://fireworks.ai/blog/ember-1 — direct primary benchmark table, settings/sample counts and efficiency claims.
- [S3] https://www.vals.ai/models/fireworks_ember-1 — independent suite, host parameters and costs.
- [S4] https://benchlm.ai/models/ember-1 — secondary unranked sparse profile, October16.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent web research, three searches and direct primary/independent comparison; derivative identity, token-efficiency scope and missing data explicit. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
