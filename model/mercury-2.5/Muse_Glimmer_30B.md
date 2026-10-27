# Mercury 2.5 — findings by Muse Glimmer 30B

- Source: Inception Labs/Mercury 2.5 (`inception/mercury-2.5`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception Labs diffusion LLM, largest diffusion LM trained to date. Targets latency-sensitive agents, compaction and tool routing at ~1,100 tok/s. Closed weights and closed to new users after 2026-10-19; Mercury 3 is successor.
- **Provider / access:** Inception Labs API `mercury-2.5`; OpenRouter `inception/mercury-2.5`. Chat Completions API.
- **Release / knowledge:** 2026-10-19 blog announcement; model trackers list 2026-09-08. Knowledge cutoff not publicly disclosed.
- **IDs:** `inception/mercury-2.5`. No Zen Free ID confirmed.
- **Context window:** 260K total; 65,536 max output — verified via docs.inceptionlabs.ai and themodelbeat.com.
- **Modalities:** text in / text out; tunable reasoning; parallel tool calls; schema-aligned JSON; no image/audio/video input found.
- **Pricing (as of 2026-10-27):** $0.20/M in / $0.75/M out, $0.02/M cached read; launch 80% off $0.04/$0.15. Closed to new users 2026-10-19.
- **Architecture:** diffusion LLM, parallel refine, proprietary closed weights; not open weights.

### Raw benchmarks found

> List measured numbers with source / rank / harness for traceability.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: **11.8%** (themodelbeat.com model page, Artificial Analysis source)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public numeric score found; ModelBeat lists 13th percentile of tracked models
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **38.5%** (themodelbeat.com, Artificial Analysis source)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found; ModelBeat lists 15th percentile Coding Index

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval score reported; 260K length verified via listings

### Normalized scores (1–100)

- **Tool use: 60/100.** No public Terminal-Bench/Tau3/GDPval numbers; vendor claims parallel tool calls but independent verification missing caps score.
- **Reasoning: 55/100.** HLE 11.8% is low; no GPQA Diamond/HLE frontier numbers published.
- **Context window: 73/100.** 260K total in 200K-500K band; capped by 65K max output and no retrieval evidence.
- **Multimodal: 15/100.** Text-only in/out per catalogs; no image/audio/video input found.
- **Coding: 60/100.** SciCode 38.5% alone is mid-low; no SWE-bench/LiveCode/Vibe evidence caps score.
- **Cost efficiency: 96/100.** Launch $0.04/$0.15 per 1M is near-free tier cheap; standard $0.20/$0.75 remains low.
- **Overall Score: 53/100.** Mean of five quality dims (60+55+73+15+60)/5=52.6 → 53. Best-fit for cheap fast subagent/routing work, not frontier reasoning.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-27
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
