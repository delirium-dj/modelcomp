# Gemini 3.7 Flash — findings by GPT-6.1 Sol

- Source: Google DeepMind / historical `gemini-3.7-flash`
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Multimodal reasoning workhorse based on 3.6 Flash. Historical checkpoint evaluation: current first-party API documentation declares this route deprecated and automatically redirected to 3.8 Flash, so calling the old ID does not reproduce these results.
- **Provider / access:** Historically Gemini API, AI Studio, Antigravity and Gemini Enterprise. Current API reference says no longer selectable in AI Studio; API requests route to 3.8. Other hosts' checkpoint pinning was not independently verified.
- **Release / knowledge:** August 13, 2026; March 2026 cutoff with some domains limited to January 2025, per official card.
- **IDs:** `gemini-3.7-flash`, publisher-qualified `google/gemini-3.7-flash`; current route resolution is not evidence that the two checkpoints are identical. No Zen Free route verified.
- **Context window:** Official input 1,048,576, output 65,536; card rounds these to 1M/64K.
- **Modalities:** Text/image/audio/video/PDF input, text output; function calls, structured outputs, code execution, computer use, search, caching. Thinking low/medium/high; `minimal` returns an error. No native image/audio generation or Live API.
- **Pricing (as of 2026-11-03):** Historical official card $0.75 input/$3.75 output per million through December 31, 2026, $1.50/$7.50 thereafter. Vals lists the regular $1.50/$7.50 rates. These are dated checkpoint prices, not confirmation that a redirected request is billed as historical 3.7. Cache and current free-tier terms not directly verified.
- **Architecture:** Proprietary, based on 3.6 Flash; parameter counts undisclosed.

### Raw benchmarks found

Agent / tool use:

- Google August card: Terminal-Bench 2.1 **85.8%**, Terminal-Bench 3.0 **14.9%**, AutomationBench private set **30.4%**, GDPval-AA v2 **1525 Elo**, Harvey LAB-AA **90.7%**, OSWorld 2.0 **47.9%**, Agent's Last Exam **26.3%**.
- Vals independent current table: Terminal-Bench 4.0 **12.12% ±3.03**, SRE Bench **4.58% ±1.29**, Finance Agent v2 **59.04% ±0.27**, Legal Research Bench **34.62% ±3.31**, SkillsBench **65.89% ±4.55**.
- Tau3, Claw, Toolathon and MCP-Atlas: no verified public score found in retrieved sources.

Reasoning / knowledge:

- Google HLE-Verified **53.6%**, LABBench2 **82.1%**, BioMysteryBench **87.1% human-solvable / 43.5% human-difficult**. The card quotes AA Intelligence Index **56** in its August snapshot, not the current index version.
- Vals GPQA **93.94% ±1.49**, MMLU Pro **90.12% ±0.30**, ProofBench v1.1 **58.00% ±4.96**, Terminal-Bench-Science **7.14% ±3.10**. Its header accuracy **56.02%** is not assigned an index version absent from the retrieved text.
- eesel's August review quotes historical AA hallucination **64.5%**, high-effort throughput **340.1 tokens/s**, first-token **9.83s**, versus low **0.74s**. These are secondary historical measurements, not fresh primary measurements or general user-answer error probabilities.
- CritPt/current primary AA index: no verified public score found in this source set.

Coding:

- Google FrontierCode 1.1 Main **43.6%**, DeepSWE v1.1 **65.3%**, Code Arena **1588 Elo**.
- Vals SWE-bench linked row **80.80% ±1.76**, LiveCodeBench **88.65% ±0.92**, Code Migration **34.80% ±4.22**, Vibe Code Bench v1.1 **70.39% ±4.84**, IOI **67.83% ±3.61**, ProgramBench **0.00%** fully resolved. No exact SWE-Pro score verified here; unspecified SWE table labeling is not expanded beyond its source.

Long context / multimodal:

- Google GDM-MRCR v2 eight-needle **97.0% at 128K average**, GDP.pdf all-pass **34.0%**, CharXiv **84.5% no tools / 88.7% tools**, LVBench **85.4%**. No million-token-edge MRCR result retrieved; 97% at 128K is not 97% throughout 1M.
- Vals MMMU Pro **88.96% ±0.75** corroborates strong visual reasoning.

### Conflicts and limitations

The current API deprecation notice supersedes launch-era availability and efficiency recommendations. Reports/tests produced by calling the old ID today must verify the serving checkpoint before claiming fresh 3.7 measurements. This report retains historical evidence rather than importing 3.8 scores. Official pricing expiry resolves Vals' higher rate listing as regular-rate pricing, not proof that the November promotional rate already ended.

Terminal-Bench 2.1, 3.0 and 4.0 test different task sets; the large gap is not a measured regression on identical tasks. Google's Harvey LAB-AA 90.7% is not Harvey/Vals all-pass or a guarantee of autonomous legal success. Strong short-answer/competitive coding coexists with weak independent operational and fully resolved engineering tests. eesel says no AA scores exist for some academic tests, but Vals supplies independent scores; absence on one evaluator is not absence everywhere. Its claimed 1M-versus-1,048,576 context disagreement is rounding, not evidence of two checkpoints.

### Normalized scores (1–100)

Historical checkpoint capability judgments; current routing is a deployment caveat, not a substituted capability score.

- **Tool use: 81/100.** Strong older terminal and SkillsBench evidence, capped by harder terminal/SRE failures and uncertain reproducibility through redirected access.
- **Reasoning: 86/100.** Strong GPQA and HLE-Verified, but weak autonomous-science performance and incomplete hallucination verification.
- **Context window: 95/100.** Large official window and strong 128K retrieval; no edge-window verification.
- **Multimodal: 94/100.** Broad native perception and strong video/chart/MMMU results; output remains text.
- **Coding: 83/100.** Good competitive coding and DeepSWE, moderated by migration and full-task failures.
- **Cost efficiency: 86/100.** Low historical promo rates, but reasoning overhead, scheduled doubling and automatic endpoint substitution complicate current value.
- **Overall Score: 88/100.** Half-up mean of 81, 86, 95, 94 and 83 is 87.8; useful historical multimodal workhorse, not a currently reproducible first-party pinned route.

## Signature

- Provided by: **GPT-6.1 Sol (openai/gpt-6.1-sol-ultrafast)** — 2026-11-03 UTC
- Method: Three successful distinct web searches; official card/API reference compared with independent Vals and historical eesel review. No peer findings read; normalized scores are interpretations.
- Search queries: `"Gemini 3.7 Flash" Google official model card benchmarks`; `"Gemini 3.7 Flash" independent Vals Artificial Analysis review`; `"Gemini 3.7 Flash" pricing context limitations`.
- Reference URLs:
  - [Official historical model card](https://deepmind.google/models/model-cards/gemini-3-7-flash/)
  - [Current official deprecation/routing notice and limits](https://aistudio.google.com/docs/models/gemini-3.7-flash)
  - [Independent Vals measurements](https://www.vals.ai/models/google_gemini-3.7-flash)
  - [Historical eesel review](https://www.eesel.ai/blog/gemini-3-7-flash-review)
