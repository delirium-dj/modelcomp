# Gemini 3.1 Pro — findings by GPT 6.1 Sol

- Source: Google DeepMind / `gemini-3.1-pro-preview`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's multimodal Pro reasoning model released in February 2026. The current official Cloud page still identifies the public-preview API route; this report does not infer a GA replacement from secondary headlines.
- **Provider / access:** Gemini API, Google Cloud Gemini Enterprise Agent Platform (formerly Vertex AI), AI Studio and integrations; GenerateContent, Interactions preview, and compatible Chat Completions [S1,S2].
- **Release / knowledge:** February 19, 2026 [S1,S2]; exact knowledge cutoff not verified in inspected primary text.
- **IDs:** `gemini-3.1-pro-preview`. Additional `gemini-3.1-pro-preview-customtools`, released February 23, prioritizes custom tools and may behave differently; its results are not silently merged here [S1]. Replicate route `google/gemini-3.1-pro` [S6]. No Zen Free ID verified.
- **Context window:** Official 1,048,576 tokens, 65,536 maximum output [S1]. Replicate documents up to 65,535 for its own request parameter [S6].
- **Modalities:** Text/image/audio/video/PDF input, text output; low/medium/high thinking, default high on Replicate. Function calling, execution, JSON/structured output, grounding and implicit/explicit caching supported. Official Cloud spec explicitly does not support computer use, agentic video understanding, or Live API [S1,S3,S6].
- **Pricing (as of 2026-10-16):** ≤200K context: $2 input / $12 output per million tokens; >200K: $4/$18 [S3,S6]. AA's current cache discount is 90%, implying $0.20 cached input at its listed $2 input tier [S4]. Paid route scored; no zero-cost production assumption.
- **Architecture:** Proprietary; parameter counts undisclosed [S4].

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench **2.0**: **67.4%**, Vals February 19 launch update [S5]. This is neither 2.1 nor 4.0.
- Terminal-Bench **Hard**: **54%**, independent AA launch evaluation [S3].
- Terminal-Bench **4.0**: **2.52% ±0.51**, current Vals high-effort table [S5]. Older-suite success does not establish modern long-horizon success.
- GDPval-AA: **1316 Elo**, AA launch evaluation [S3]; dataset/calibration predates later v2.1 figures and is not directly comparable to them.
- Finance Agent v2 **42.98% ±1.21**; Legal Research **20.67% ±2.81**; SRE Bench **0.00%**; Tax Agent Bench **9.29% ±2.09**, current Vals [S5].
- BFCL v3 **71.2%** is claimed by LayerLens [S7], but insufficient harness details and other inconsistencies make it supplementary rather than a primary scoring anchor.
- Terminal-Bench 2.1 / Tau3-Banking / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas QnA: no verified public score found in inspected sources.

Reasoning / knowledge:

- ARC-AGI-2 **77.1%**, verified result reported in Google's launch post [S2].
- GPQA Diamond **95.45% ±1.05**, **#1/138**; MMLU Pro **90.99% ±0.28**, independent Vals high effort [S5].
- CritPt **18%**, independent AA launch evaluation [S3].
- AA-Omniscience accuracy **53%**, hallucination rate **50%** at launch [S3]. The latter is the evaluator's defined hallucination metric, not “half of all responses are false.”
- Artificial Analysis Intelligence Index: launch article reports first place and a four-point lead over Opus 4.6, without an exact index value in fetched prose [S3]. Current page: **30**, **#97/217**, v4.3.2 [S4]. No numeric launch value inferred from image-only plots.
- Vals Index **33.44% ±1.13**, **#44/48** in current suite; ProofBench v1.1 **26.00% ±4.41** [S5].
- HLE / LCR / MLCR: no verified numeric score found in inspected primary or stronger independent prose.

Coding:

- SciCode **59%**, independent AA launch evaluation [S3].
- LiveCodeBench **88.48% ±0.93**, Vibe Code Bench v1.1 **32.03% ±4.34**, Code Migration **17.31% ±3.93**, ProgramBench **0.00%**, current independent Vals [S5].
- SWE-bench Verified **69.6%**, explicitly labeled in Vals' dated February update; current table's SWE-bench row **78.80% ±1.83** [S5]. Retain separate snapshots rather than silently replacing one with the other.
- LayerLens reports LiveCodeBench **61.0%** and SWE Bench Lite **48.7%** [S7], with insufficient configuration details for clean comparison. Lite and Verified are different suites.
- SWE-Pro / DeepSWE: no verified public score found in inspected sources.

Long context and multimodal:

- No verified full-window MRCR/RULER retrieval percentage found; official capacity is 1M, not 2M [S1].
- MMMU Pro **88.21% ±0.78**, independent Vals [S5]; AA also reported launch leadership on this suite without an exact figure in fetched prose [S3].

### Evidence comparison and research trail

Three distinct DuckDuckGo searches: `"Gemini 3.1 Pro" official Google model documentation`; `"Gemini 3.1 Pro" independent Artificial Analysis benchmark`; `"Gemini 3.1 Pro" review benchmark conflicts pricing`. Read the current official Cloud model specification, Google's launch and Cloud announcement, AA's launch analysis and current profile, Vals, Replicate and LayerLens directly.

The primary Cloud page (updated October 15) says public preview; some search-result headlines claim GA. This report retains the primary endpoint status [S1]. LayerLens claims 2M context and ARC-AGI-2 92.3%, conflicting with official 1M and 77.1%; it also has a search snippet about 22 benchmarks while its fetched body describes six, and some figures contain unclear benchmark labels [S1,S2,S7]. Those claims are documented but not adopted as verified superiority or capacity. Its LiveCodeBench 61.0% versus Vals 88.48% cannot be resolved without dates, splits and effort details; averaging them would conceal the disagreement. Vals' historical SWE 69.6% versus current 78.8% likewise needs snapshot/harness information, not a fabricated causal explanation. AA's February leadership and current Index 30 use different evaluation snapshots and benchmark composition; this is not evidence that the same weights lost a stated number of points on an unchanged test [S3–S5]. Academic GPQA/LiveCodeBench leadership coexists with very weak newer agent suites, which materially limits agent recommendations.

### Normalized scores (1–100)

- **Tool use: 75/100.** Older terminal results and GDPval 1316 show useful tool capability, but TB4 2.52%, poor SRE/legal-agent results and unsupported native computer use prevent a frontier-agent score [S1,S3,S5].
- **Reasoning: 88/100.** GPQA 95.45%, ARC-AGI-2 77.1% and CritPt 18% demonstrate strong knowledge/reasoning, capped by present-suite results and nontrivial hallucination [S2–S5].
- **Context window: 95/100.** Primary 1M capacity qualifies for the top tier, without verified ≥98% retrieval or evidence for LayerLens' 2M claim [S1,S7].
- **Multimodal: 95/100.** Official audio/video/image/PDF input and MMMU Pro 88.21% show broad competence; output stays text and newer interactive-video features are absent [S1,S5].
- **Coding: 86/100.** SciCode 59%, LiveCodeBench 88.48% and useful SWE evidence support strong coding; weak migration/Vibe/modern terminal results cap production-agent confidence [S3,S5].
- **Cost efficiency: 73/100.** $2/$12 is moderate-to-premium and long-context $4/$18 erodes savings; independent current task cost is $1.30 on AA's specific suite [S4,S6].
- **Overall Score: 88/100.** (75 + 88 + 95 + 95 + 86) / 5 = 87.8 → 88; best fit is multimodal scientific/document reasoning with supervised coding rather than assuming universal long-agent strength. Cost excluded.

### Sources

- [S1] https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-1-pro — primary route status, dates, capabilities and limits.
- [S2] https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/ — original February 19 launch and ARC-AGI-2.
- [S3] https://artificialanalysis.ai/articles/gemini-3-1-pro-preview-new-leader-in-ai — independent launch evaluations, coding, physics, hallucination and GDPval.
- [S4] https://artificialanalysis.ai/models/gemini-3-1-pro-preview — current independent Index v4.3.2 and pricing.
- [S5] https://www.vals.ai/models/google_gemini-3.1-pro-preview — independent current suite, settings, uncertainty and dated historical updates.
- [S6] https://replicate.com/google/gemini-3.1-pro/readme — hosted request limits, thinking settings and both context-price tiers.
- [S7] https://layerlens.ai/blog/gemini-3-1-pro-benchmark-review — conflicting independent-operator claims retained with methodological reservations.
- Additional primary access corroboration: https://cloud.google.com/blog/products/ai-machine-learning/gemini-3-1-pro-on-gemini-cli-gemini-enterprise-and-vertex-ai — February 20 Cloud announcement; distinct publication date from February 19 model launch.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research with three separate searches, primary documentation and multiple independent operators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new independently signed file next to this one using the same headings.
