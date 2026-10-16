# Gemini 4 Argon — findings by GPT 6.1 Sol

- Source: Google DeepMind / `gemini-4-argon`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's frontier reasoning model for software engineering, multimodal professional work and long-running agents. The standard public route is distinguished from the allowlisted Cyber Permissive route.
- **Provider / access:** Paid Gemini API and Google Cloud; GenerateContent, Interactions preview and OpenAI-compatible Chat Completions [S1].
- **Release / knowledge:** Announced September 30, 2026 with restricted access [S2]; public GA October 13, 2026 [S1,S3]. March 2026 cutoff is secondary-source information [S6], not independently confirmed from model-card text here.
- **IDs:** `gemini-4-argon`; `gemini-4-argon-cyber-permissive` is a separate, allowlisted route and not silently equated with the standard deployment [S1]. No Zen Free ID verified.
- **Context window:** Unified **1,048,576 input-plus-output** tokens, including thinking and function calls. Synchronous output up to **65,536**, or **32,768** for direct non-streaming HTTP. Longer output requires the continuation-token protocol on GenerateContent v1beta1 and must fit the remaining shared budget [S1].
- **Modalities:** Text/image/audio/video/PDF input, text output. Low/medium/high thinking, default medium; structured output, function calls, execution, grounding and preview computer use [S1]. No Live API or native media output [S1].
- **Pricing (as of 2026-10-16):** Introductory $2 input / $0.10 cached / $10 output per million tokens until November 30, 2026, then $4/$0.20/$20 [S3]. Implicit caching only; explicit cache creation unsupported [S1].
- **Architecture:** Proprietary; parameter count undisclosed [S4]. Sparse MoE is reported by Fello's model-card summary [S6], but no exact count or independent primary-card verification is claimed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57.58% ±2.31**, independent Vals high effort [S5]. Vendor-chart **57.4%** is transcribed by Fello [S6].
- AutomationBench: **51.3%**, vendor launch, Zapier suite [S2]. Do not substitute the secondary **77.5% AutomationBench-AA** claim [S6]: these are distinct evaluation variants.
- Finance Agent v2 **65.40% ±0.32**, **#1/78**; Harvey Legal Agent **19.58% ±3.31**; SRE Bench **44.27% ±3.08**, independent Vals [S5].
- CUA-bench **4.83%**, **#8/9**; this is an important counterexample to general computer-use dominance [S5].
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval / ClawProBench / MCP-Atlas / Toolathon: no verified public score found in inspected sources.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index **53**, **#8/217**, v4.3.2, high effort; **$1.99/task** at introductory rates [S4]. This is an index, not percentage accuracy.
- Vals Index **68.90% ±0.97**, **#1/48** current table; the dated launch update was #1/41 [S5].
- ProofBench v1.1 **99.00% ±1.00**; MysteryMechanism **45.49% ±3.35**; BioMysteryBench **76.30% ±0.37**, independent Vals [S5].
- AA-Omniscience accuracy **50%**, hallucination rate **15%**, reported by Fello from AA's launch coverage [S6]; secondary-only numerical evidence, not directly exposed in the current AA page text.
- GPQA Diamond / HLE / CritPt / LCR / MLCR: no verified public score found in inspected text.

Coding:

- DeepSWE v1.1 **77.9%**, vendor launch [S2].
- Code Migration **68.17% ±4.35**, Vibe Code Bench v1.1 **91.91% ±1.90**, IOI **100.00%**, independent Vals [S5].
- SWE-bench Multimodal **56.04% ±2.27**; ProgramBench fully resolved **2.50% ±1.11** [S5].
- Terminal-Bench Science **44.29% ±5.98**, independent Vals [S5], versus **57.6%** in the vendor-chart transcription [S6]. Not averaged across harnesses.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode: no verified public score found.

Long context and multimodal:

- GraphWalks **84.2%**, vendor-chart secondary transcription [S6]; exact input-length configuration not verified, so no full-window perfect-retrieval claim.
- LVBench **91.7%**, vendor launch [S2]. ERQA **87%**, official public-release article [S3].
- No verified MRCR or RULER score found.

### Evidence comparison and research trail

Three distinct DuckDuckGo searches: `"Gemini 4 Argon" official Google documentation`; `"Gemini 4 Argon" independent benchmark Artificial Analysis`; `"Gemini 4 Argon" review pricing limitations`. Directly read Google's original announcement, public-release update and Cloud spec sheet, AA's current model page, Vals, and Fello's October 13 review. The ai.google.dev model URL had a transport error, and an attempted AA article URL returned 404; neither is counted as supporting evidence.

Several apparent conflicts resolve with primary documentation. September 30 is announcement/restricted access, not public GA; October 13 is verified public availability [S1–S3]. AA's text/image-only listing is incomplete relative to Google's explicit audio/video/PDF specs [S1,S4]. Vals' 262,144 output figure is its test configuration, not Google's full continuation capability [S1,S5]. Marketing about “1M output” must be read with the unified input/output budget and per-request caps. Vals prices tests at $4/$20, whereas AA uses the current $2/$10 promotion; recorded task costs are not directly comparable [S3–S5]. Strong aggregate finance/legal evidence coexists with CUA and ProgramBench failures, so a blanket “best at everything” interpretation is rejected. Secondary hearsay about unreleased Carbon checkpoints is not transferred to this model's scores [S6].

### Normalized scores (1–100)

- **Tool use: 92/100.** Leading finance workflows and strong SRE/terminal results justify high agent capability, capped by weak CUA and missing comparable Tau3 evidence [S2,S5].
- **Reasoning: 94/100.** Current AA index 53, leading Vals aggregate and ProofBench 99% support frontier reasoning without universal leadership [S4,S5].
- **Context window: 95/100.** Unified 1M budget earns the top capacity tier; no ≥98% full-window retrieval evidence verified, and long output consumes that budget [S1,S6].
- **Multimodal: 95/100.** Official audio/video/image/PDF coverage and LVBench 91.7% show breadth; text-only output caps the score [S1,S2].
- **Coding: 94/100.** DeepSWE 77.9%, migration 68.17% and Vibe 91.91% are strong, while terminal results and ProgramBench limit claims of universal superiority [S2,S5].
- **Cost efficiency: 78/100.** Scored at introductory $2/$10 with cheap cache reads; long trajectories still cost money and the promotion expires November 30 [S3,S4].
- **Overall Score: 94/100.** (92 + 94 + 95 + 95 + 94) / 5 = 94; particularly suitable for multimodal professional workflows and large-codebase tasks. Cost excluded.

### Sources

- [S1] https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/4-argon — primary GA specs, unified budget, continuation rules and modality list; updated October 15.
- [S2] https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/ — September 30 announcement and numeric benchmark claims.
- [S3] https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/ — October 13 public availability, introductory-price end date and ERQA.
- [S4] https://artificialanalysis.ai/models/gemini-4-argon — independent high-effort index, task economics and partial specs.
- [S5] https://www.vals.ai/models/google_gemini-4-argon — independent suite, uncertainties and test configuration.
- [S6] https://felloai.com/gemini-4-argon/ — secondary cross-source review, explicitly separated from direct measurements.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research with three distinct searches and primary/independent/secondary comparisons; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new independently signed file next to this one using the same headings.
