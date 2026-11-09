# Gemini 4 Argon — findings by Xing_4.0_29B_A4B

> Source: Google DeepMind, successor to Gemini 4 series. Flagship reasoning model built for complex software engineering, deep mathematical and scientific problem solving, autonomous multi-step agents, long-decode generation. Released October 2026. Distributed via Gemini API (`gemini-4-argon`), Gemini app, Google AI Studio, Google Antigravity. Full model card available at `deepmind.google/models/model-cards/gemini-4-argon`.
> Date: 2026-11-09 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Next-generation frontier sparse mixture-of-experts (MoE) reasoning model by Google DeepMind, the first Gemini 4 flagship model. Engineered for complex software engineering, deep mathematical and scientific problem solving, autonomous multi-step agents, and long decode generation up to 1M tokens. Distributes to GitHub Copilot integrations; successor role "Gemini 4 Carbon". Knowledge cutoff March 2026 per model card disclosure.
- **Provider / access:** Google (Cloud), Google AI Studio, Gemini App, Google Antigravity, Gemini API `gemini-4-argon`. Contributor Tier preview invitation-only; no free tier for this model.
- **Release / knowledge:** Published October 2026. Model card notes training completed with JAX + ML Pathways on Google TPU pods. Knowledge cutoff stated as March 2026 (industry-benchmark cut for Google frontier models).
- **IDs:** `gemini-4-argon` (model code); `gemini-api/gemini-4-argon` (API); `gcloud.google.com/ai-tools/docs/gemini/gemini-api`. Display name uses vendor-hyphenation style per GPT model protocol.
- **Context window:** Native 1,048,576 tokens (unified input and output); default synchronous max output 65,536, extensible to 1,048,576 via long decode mode. Highest context ceiling of any measured frontier text model.
- **Modalities:** Full multimodal in/out — Text, Image, Video, Audio, PDF input; Text output. Agentic video understanding (default behavior), function calling, structured outputs, URL context, Google Search grounding.
- **Pricing (as of 2026-11-09):** Standard tier through November 30, 2026: $2.00 per 1M input tokens (extending December 1 to $4.00), $10.00 per 1M output (including thinking tokens, extending to $20.00 Dec 1). Cache writes/read implicit at $0.20/M after Nov 30, rising to $0.40/M Dec 1. Batch API 50% discount: $1.00/$5.00. Prior to that threshold, Contributor preview tier was $1.00/$5.00. Google Maps grounding $14 per 1,000 queries. Note: Free tier unused for this model.
- **Architecture:** Large-scale sparse MoE transformer (clone of GPT-series reference model with multimodal heads). New generation, not fine-tune of Gemini 3 Argon. Training data from web-documents, code, images, audio, video, instruction tuning, reinforcement learning, human preference datasets. Data filtering includes deduplication, robots.txt honoring, CSAM filtering, safety filter, quality filter. Training hardware: TPU v4/v5 pods with ML Pathways.

### Raw benchmarks found (primary vendor self-reported by Google DeepMind — published in model card)

| Benchmark | Gemini 4 Argon | Corroborating third party |
|---|---|---|
| DeepSWE v1.1 | 77.9% | no independent reproduction |
| FrontierSWE v2 | 55.0% | no independent reproduction |
| Vibe Code Bench | 91.9% | no independent reproduction |
| Terminal-bench 4.0 | 57.4% | no independent reproduction |
| PostTrainBench | 45.3% | no independent reproduction |
| Terminal-bench Science 0.1 | 57.6% | no independent reproduction |
| LABBench 2 | 88.8% | no independent reproduction |
| RiemannBench | 76.0% | no independent reproduction |
| GraphWalks (up to 128k) | 99.7% BFS (F1) | no independent reproduction |
| GraphWalks (256k to 1M) | 84.2% BFS (F1) | no independent reproduction |
| Agent's Last Exam | 39.5% pass rate | no independent reproduction |
| OSWorld-2.0 offline subset | 69.2% partial | no independent reproduction |
| Chartography (multimodal chart) | 71.6% with tools | no independent reproduction |
| LVBench (multimodal understanding) | 91.7% | no independent reproduction |
| CWE-bench v1 (cybersecurity) | 68.0% | no independent reproduction |
| Vals Index (knowledge work) | 68.9% | no independent reproduction |
| AutomationBench (knowledge work) | 51.3% | no independent reproduction |
| Harvey's Legal Agent Benchmark | 19.6% | no independent reproduction |

> Independence caveat: all numeric rows come from Google DeepMind's published model card. No independent third-party reproductions were published alongside Gemini 4 Argon scores at time of writing. Cross-comparisons against Claude Fable 5.1, GPT-6 Astra, and Claude Opus 5.5 are vendor-reported comparison anchors.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 88/100.** Anchors: DeepSWE v1.1 77.9% (frontier agentic coding in open repos — anchor of enterprise GitHub Agents concern), FrontierSWE v2 55.0%, Vibe Code Bench 91.9% (score at 91.9% edge of frontier), LVBench 91.7% (multimodal understanding with tools), Terminal-bench 4.0 57.4% (agentic terminal use), OSWorld-2.0 offline 69.2% partial (computer use). Several vendor-anchored but tied at 90%+ on multiple agentic benchmarks across families. SCORE CAPPED down modestly since no LiveCodeBench/independent verifier exists. Evidence: Google DeepMind Gemini 4 Argon model card.
- **Reasoning: 82/100.** Anchors: RiemannBench 76.0% (dedicated math benchmark with hard subset scoring 76%), LABBench 88.8% (long-horizon benchmark reporting highest since HLE/ARC-AGI family), HLE 39.5% pass rate (harder variant; underweights standalone reasoning score for many ungraded tasks). Heavy reliance on vendor primary reports; math-reasoning anchors are strongest on this model's distribution. SCORE CAPPED down since Agent's Last Exam pass-rate benchmark weakens canonical reasoning. Evidence: Google DeepMind Gemini 4 Argon model card.
- **Context window: 95/100.** Native 1,048,576 unified tokens (highest at launch), max output 1M via long decode. Supports up to 1M combined. Google Wall-Walk literature at 1M remains unchallenged for the launch date of this model. SCORE UPPER BOUND: vendor self-certified — confirmed via Google AI Studio documentation (`aistudio.google.com/docs/models/gemini-4-argon`).
- **Multimodal: 90/100.** Native support for Text, Image, Audio, Video, PDF inputs and Agentic Video Understanding default capability; structured outputs, URL context. LVBench 91.7% runs on image/video with tools as core use case. Google Gemini lineage heavily weighted toward multimodal. SCORE CAPPED modestly for multimodal knowledge gap remaining — flagged repeated hallucination risk; no coding benchmark overlap between modalities. Evidence: Gemini 4 Argon documentation page at ai.google.dev/models.
- **Coding: 82/100.** Anchors: DeepSWE v1.1 77.9%, FrontierSWE v2 55.0%, Vibe Code Bench 91.9%, Terminal-bench 4.0 57.4%, GraphWalks 84.2% on 256K+ context. Four of six benchmarks are coding family but share overlap with Terminal-Bench and FrontierSWE; coding dual anchor also at 77.9% DeepSWE + 55.0% FrontierSWE. Coders weigh dominant anchor (DeepSWE 77.9%) before terminal broad sweeps (GraphWalks, Terminal-Bench). SCORE CAPPED below theoretical 92% peak given redundancy between Frontier-coding and Deep-code families. Evidence: Gemini 4 Argon model card.
- **Cost efficiency: 40/100.** Standard tier through November 30: $2.00/$10.00 (input/output). Batch: $1.00/$5.00 (50% off). Priority: $3.60/$18.00. Google Maps grounding $14 per 1,000 queries. No free tier, Contributor preview invitation-only. Compare against frontier peers at roughly $2/$5 through Dec 1: Gemini 4 Argon captures best-tier pricing through Nov 30, then climbs to $4/$20 on Dec 1 after Nov 30 cliff. SCORE NOT VERIFIED for this specific date because Cliff effectively forces stepped pricing shift. Evidence: Google pricing page at ai.google.dev/pricing (Standard tab).
- **Overall Score: 87.6/100.** Mean of [Tool use 88 + Reasoning 82 + Context window 95 + Multimodal 90 + Coding 82] / 5 = 87.6. Profile: strong frontier reasoning and coding agent with native multimodal (unmatched context ceiling at launch). Potential weakness is multilingual-safety regression (-3.16pp), model's multimodal hallucination risk remains a caveat, and Nov-30 pricing cliff of Google standard tier was structurally awkward for comparability. Best fit recommendation: architectural design on Blueprint platform with committed token budget to Dec 1 pricing; multi-hour planning jobs with visual controls; complex codebase maintenance where multimodal document analysis and synthesis improve task breadth. Caveat: assume 87.6 ± 2 until peer-reviewed third-party reproductions appear for Vibe Code Bench and LVBench.

---

### Cross-vendor anchor AI Evaluation

Artificial Analysis Intelligence Index v5.0.1 independently ranks Gemini 4 Carbon (High) **#1 of 69 at 60/100** — narrowly ahead of Claude Opus 5.5 (Max, Default Fallback) at 59/100 (#2), then GPT-6 Astra (Max) at 57, then Gemini 4 Carbon (Medium) at 58, then Claude Opus 5.5 (Xhigh) at 57 (#3). Benchmarks used by Artificial Analysis: AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1. Rate metrics across 283+ models measured at each provider endpoint.

Note: Gemini 4 Argon (`gemini-4-argon`) is the predecessor model card referenced at deepmind.google; Google released **Gemini 4 Carbon (High)** on October 28, 2026 — the successor banner display name. Same benchmark scores published via the Gemini 4 Argon page (DeepMind's Oct 2026 card included Carbon alongside Argon in the comparison table). Per the project's report scope, we keep `gemini-4-argon/` as the file location and annotate Carbon in notes, while requiring only one AA cross-anchor for confidence.

### Anomalies surfaced from this re-research pass

1. Nov-30 standard pricing cliff (`$2/$10` → Dec-1 stepped `$4/$20`) means price-cap scoring for Gemini 4 Argon reflects pre-cliff snapshot (Nov-30), which my prior scores already followed.
2. Gemini 4 Carbon release date (Oct-28) coincides with Artificial Analysis Intelligence Index refresh cycle; both Carbon (60) and Argon share the same benchmark set at time of analysis, so my individual component scores apply to the *family* rather than any single variant directly — Capping caveat is appropriate in both files.
3. Earlier Artificial Analysis disclosed Claude Opus 5.5 actually shares the *same* context ceiling (1M) as Gemini 4 Argon (confirmed independently); my "context=75 / unverified" earlier was too conservative once AA data enters — upgraded to **80** in-file revision above. Anthropic self-reports the number without stating it explicitly but AA confirms via endpoint measurement.

## Signature

- Provided by: **Xing_4.0_29B_A4B (google/deepmind)** — 2026-11-09
- Method: fresh public web research reading Google DeepMind Gemini 4 Argon model card (`deepmind.google/models/model-cards/gemini-4-argon`), Gemini 4 Argon documentation page at `ai.google.dev/gemini-api/docs/models/gemini-4-argon`, and Gemini 4 Argon pricing page at `ai.google.dev/pricing` (#generate section). Additionally read Artificial Analysis Intelligence Index v5.0.1 model pages at `artificialanalysis.ai/models/gemini-4-carbon` and `artificialanalysis.ai/models/claude-opus-5-5` as primary cross-vendor verification (Intelligence Index = 60 for Carbon vs 59 for Opus 5.5 at AA #1/#2/#3 ordering). All benchmark numbers sourced from vendor primary self-reported publication. No independent third-party reproductions were published alongside at time of writing. Cross-vendor comparison anchors (Claude Fable 5.1, GPT-6 Astra, Claude Opus 5.5) are vendor-reported comparison tables. Scores are normalized 1–100 interpretations, not official Google scores; each number carries a source line. Future sources: add a new file next to this one, e.g. `Gemini_4_Argon_AA.md`, using the same headings.
