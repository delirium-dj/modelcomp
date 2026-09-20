# Gemini 3.8 Flash — findings by Big Pickle

- Source: Google (`gemini-3.8-flash`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's third Flash update in six weeks, optimized for autonomous end-to-end engineering work and agentic tool use; a hybrid fast/frontier-class model aimed at throughput-heavy and agentic workloads.
- **Provider / access:** Google Gemini API, `gemini-3.8-flash` (Gemini Developer API / Vertex AI; Gemini API endpoints). Chat Completions-style generate calls plus Responses-style API.
- **Release / knowledge:** 2026-09-02 (vals.ai catalog); DeepMind positions it to "outperform most larger frontier models in autonomously solving complex engineering problems end to end" (deepmind.google).
- **IDs:** `gemini-3.8-flash` (proprietary; no open weights, `open_weights = false`)
- **Context window:** 1,000,000 total / 1,048,576 input; max output ~66K tokens (vals.ai, Sept 2026).
- **Modalities:** text, image, video, file/document input; text output; native reasoning; tool calling; structured output.
- **Pricing (as of 2026-09-20):** $0.75 in / $3.75 out per 1M tokens on the Gemini API list (benchlm.ai compare note, Sept 2026); some aggregators (Vals) list $1.50 / $7.50 — treat list price as ~$0.75/$3.75 pending Google's official card.
- **Architecture:** Proprietary, undisclosed (enabled reasoning model).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (benchlm.ai, 2026-09; Vals harness reports 81.3%)
- OSWorld 2.0: **59.0%** (benchlm.ai)
- Finance Agent v2: **61.4%** (benchlm.ai; rank #1/58 on Vals Finance Agent v2)
- Terminal-Bench 4.0: **19.1%** (benchlm.ai, provisional)
- Agentic public-lane index: **67.6 (#11/151)** (benchlm.ai, Supported)
- Vibe Code Bench v1.1: rank **13/93** (Vals, 2026-09-18)
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.4%** (Vals harness via benchlm.ai compare, 2026-09; rank #4/138 Vals)
- HLE-Verified: **54.9%** (benchlm.ai)
- LABBench2: **86.2%** (benchlm.ai)
- BioMysteryBench (human-difficult / human-solvable): **56.5% / 88.8%** (benchlm.ai)
- MMLU-Pro: rank **5/138** (Vals, 2026-09-18), accuracy **62.25% ± 1.01 Vals Index (#7/55)**
- BenchmarkLM overall: **78.41** vs 70.2 for Gemini 3.7 Flash (benchlm.ai compare)

Coding:

- SWE-bench Verified: **~80.0%** (genztech.blog AI Coding Leaderboard #25/29, 2026-09; Vals harness 80.0% per benchlm.ai compare)
- LiveCodeBench: **89.5%** (Vals harness via benchlm.ai compare; rank #3/143 Vals)
- DeepSWE (deepSwe): **73.8%** (benchlm.ai)
- cursorBench32: **69.2%** (benchlm.ai)
- SWE-Pro / SciCode / AA-SciCode: **no verified public score found**

Long context:

- MRCR v2 (64K-128K): **~97%** reported for sibling Gemini 3.7 Flash; Gemini 3.8 Flash-specific long-context retrieval: **no verified public score found** (CharXiv w/o tools 86.2% and LVBench 87.1% are grounded/MM proxies, not retrieval — benchlm.ai).

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 89.4% and Finance Agent v2 #1 are elite agentic results; OSWorld 59% and the early Terminal-Bench 4.0 19.1% keep it short of a perfect score.
- **Reasoning: 92/100.** GPQA Diamond 94.4% and HLE-Verified 54.9% are frontier-class; not yet validated on ARC-AGI-2 style fluid reasoning, which caps it.
- **Context window: 92/100.** Full 1M-token window with ~66K output — top tier; no 3.8-specific MRCR number published yet, so score rests on the Flash lineage's 1M MRCR ~97%.
- **Multimodal: 90/100.** Text/image/video/file input with strong grounded evals (CharXiv 86.2%, LVBench 87.1%); no audio listed, which keeps it just below native-omni models.
- **Coding: 88/100.** SWE-bench Verified ~80%, LiveCodeBench 89.5%, deepSwe 73.8% — strong across real-world and contest coding; margin behind Claude Opus 5 (#1 on coding leaderboard, ~97%).
- **Cost efficiency: 88/100.** $0.75/$3.75 per 1M for near-frontier agentic performance is a strong value; Gemini 3.7 Flash is marginally cheaper at identical price with slightly lower scores.
- **Overall Score: 90/100.** Mean of the five quality dims (88+92+92+90+88)/5 = 90. A fast, cheap, near-frontier agentic workhorse — best fit for high-volume autonomous engineering and tool-calling pipelines.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (vals.ai, benchlm.ai, genztech.blog, deepmind.google, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.