# Gemini 3.8 Flash — findings by GPT 6.1 Sol

- Source: Google DeepMind / `gemini-3.8-flash`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's general-purpose Flash model for reasoning-intensive agents, software engineering and mixed-media analysis. This report evaluates standard Flash, not the separately identified Cyber or Live models.
- **Provider / access:** Gemini API and Google Cloud Gemini Enterprise Agent Platform, native generateContent/streaming surfaces; Cursor also hosts it [S1,S5].
- **Release / knowledge:** September 2, 2026 [S2,S3]. March 2026 knowledge cutoff, with some domains earlier, is reported by secondary review [S6], not independently confirmed from parsed primary model-card text.
- **IDs:** `gemini-3.8-flash`, GA [S1]. No Zen Free ID verified.
- **Context window:** 1,048,576 tokens, maximum output 65,536 [S1]. No proof of perfect million-token retrieval follows from those limits.
- **Modalities:** Text/image/audio/video input, text output; document/PDF use corroborated by independent Vals and review. Low/medium/high thinking; Google Cloud default medium versus Cursor default high [S1,S4,S5]. Function/tool workflows and structured output are supported; native image/audio generation belongs to other models [S6].
- **Pricing (as of 2026-10-16):** Introductory $0.75 input / $0.075 cached input / $3.75 output per million tokens through end-2026; published standard fallback $1.50/$0.15/$7.50 [S3,S5,S6]. Thinking tokens count toward output charges. No verified zero-cost production tier scored.
- **Architecture:** Proprietary; parameter counts not disclosed [S2].

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.8%** in official Cloud guide [S1], versus **89.4%** in the Google chart transcribed by Kingy [S6]; not averaged because configurations differ.
- Terminal-Bench 4.0: **19.70% ±2.31** independent Vals high-effort run [S4]. The secondary Google chart transcription is **19.1%** [S6]. These are not contradictory to ~90% on the older 2.1 suite.
- Tau3-Banking: **38.1%** official guide [S1] versus **45% high** in AA's independent launch evaluation [S3].
- GDPval-AA v2: **1545 Elo**, Google chart via secondary transcription [S6], not independently reproduced here.
- Finance Agent v2: **61.44% ±0.13**, **#2/78** on Vals [S4]. CUA-bench **4.17%**, **#9/9**, and SRE Bench **11.07% ±1.94** show important weaknesses [S4].
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond **94.44% ±1.48**, MMLU Pro **90.22% ±0.29**, independent Vals high reasoning [S4].
- HLE **45.4%** official guide [S1]; HLE-Verified **54.9%** in secondary chart transcription [S6]. Different benchmark subsets; never merged.
- Artificial Analysis Intelligence Index: **59 high / 57 medium / 52 low** at launch [S3]; current **41 high**, **#51/217**, v4.3.2 [S2]. Historical v4.1.1 labeling is supplied by the review [S6].
- Vals Index **54.89% ±1.02**, **#17/48** [S4].
- CritPt / AA-LCR / MLCR / Omniscience hallucination rate: no verified public score found in inspected text.

Coding:

- SWE-Bench Pro **61.6%**, SWE-Atlas **51.9%**, official guide [S1].
- LiveCodeBench **89.48% ±0.90**; Vibe Code Bench v1.1 **78.65% ±3.88**; Code Migration **36.55% ±4.18**; ProgramBench **1.00% ±0.70**, independent Vals [S4].
- Vals labels its SWE row simply SWE-bench: **80.00% ±1.79**; not relabeled Verified without inspecting that suite's methodology [S4].
- DeepSWE v1.1 **74% ±1% high**, independent leaderboard snapshot quoted by Kingy; Google chart transcription **73.7%** [S6]. Secondary evidence, not a leaderboard rerun by this reporter.
- SciCode: no verified public score found.

Long context and multimodal:

- No verified exact-model MRCR/RULER full-window retrieval score found.
- MMMU Pro **89.08% ±0.75**, independent Vals [S4]; CharXiv **86.2%** and GDP.pdf **35.0%**, official guide [S1].

### Evidence comparison and research trail

Three distinct DuckDuckGo searches: `"Gemini 3.8 Flash" Google official model card`; `"Gemini 3.8 Flash" Artificial Analysis benchmarks`; `"Gemini 3.8 Flash" review pricing context limitations`. Read official Cloud documentation, AA's launch article and current model page, Vals, Cursor, and Kingy's source-labeled review. The official PDF fetch returned binary PDF content rather than readable text, so no claim is attributed to reading its body.

Pricing differs because Vals lists the $1.50/$7.50 standard rates while current AA and Cursor list the $0.75/$3.75 promotion [S2–S5]. Both are recorded with their pricing period. AA launch $0.58/task and current $1.24/task belong to different evaluation snapshots [S2,S3]; neither is a universal workload cost. The guide's default medium and Cursor's default high are surface-specific, not evidence of distinct weights. Tau3 and terminal figures vary by evaluator; exact harness and effort are retained. Strong GPQA/LiveCodeBench results coexist with weak ProgramBench/CUA results, so headline academic scores do not justify an unconditional frontier-agent rating. The review's six-call smoke check lacks retained raw artifacts and is not used as quantitative benchmark evidence [S6].

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong old-suite terminal, finance-agent and Tau3 results are tempered by TB4 19.7%, CUA 4.17% and uneven production workflows [S1,S3,S4].
- **Reasoning: 90/100.** GPQA 94.44%, HLE 45.4% and broad independent evidence support high reasoning; current index placement and uneven difficult tasks cap it [S1,S2,S4].
- **Context window: 95/100.** Official 1M capacity meets the top tier without independently verified ≥98% retrieval [S1].
- **Multimodal: 95/100.** Audio, image, video and document input plus MMMU Pro 89.08% support broad coverage; output remains text [S1,S4].
- **Coding: 90/100.** SWE-Pro 61.6%, LiveCodeBench 89.48% and strong DeepSWE evidence are offset by Code Migration and ProgramBench weaknesses [S1,S4,S6].
- **Cost efficiency: 90/100.** Promotional $0.75/$3.75 is attractive, but paid thinking and the documented increase in per-task work constrain savings [S2,S3,S5].
- **Overall Score: 91/100.** (87 + 90 + 95 + 95 + 90) / 5 = 91.4 → 91; a broad multimodal coding workhorse with task-dependent agent reliability. Cost excluded.

### Sources

- [S1] https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/guides/gemini-3-8-flash — primary specs, default effort and benchmark table.
- [S2] https://artificialanalysis.ai/models/gemini-3-8-flash — current independent high-effort profile, Index v4.3.2.
- [S3] https://artificialanalysis.ai/articles/gemini-3-8-flash — independent launch measurements and promotional pricing period.
- [S4] https://www.vals.ai/models/google_gemini-3.8-flash — independent results, uncertainties and high-effort configuration.
- [S5] https://cursor.com/docs/models/gemini-3-8-flash — provider pricing and surface-specific default.
- [S6] https://kingy.ai/blog/gemini-3-8-flash-review-benchmarks-specs-pricing/ — secondary review with labeled primary transcriptions and test limitations.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research; three separate searches and direct official/independent/secondary comparisons. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new independently signed file next to this one using the same headings.
