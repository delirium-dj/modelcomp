# Ling 3.2 Flash - findings by Big Pickle

- Source: Ant Group/Ling 3.2 Flash
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.2 Flash
- **Short description:** Ant Group's November 2026 native-multimodal MoE (560B total / 25B active) aimed at document understanding, visual agents, 3D and medical workflows. It is the Flash serving tier of the Ling 3.2 line, with a 1M-token window and open weights.
- **Provider / access:** Ant Bailian (Ant Group's model platform), model ID `ling-3.2-flash`; open weights also published. Chat Completions API. No OpenCode Zen Free ID.
- **Release / knowledge:** Released 2026-11-05; knowledge cutoff not published.
- **IDs:** `ant/ling-3.2-flash` (vendor ID `ling-3.2-flash`)
- **Context window:** 1,000,000 tokens total (Ant Ling docs). Max output not separately published.
- **Modalities:** Text, image and video in; text out. Thinking mode, tool calling, JSON output and multimodal document input are supported.
- **Pricing (as of 2026-11-13):** $0.30 / 1M input, $0.90 / 1M output on Ant Bailian launch pricing; a two-week free trial ran at launch (time-limited, not a standing free tier).
- **Architecture:** Sparse MoE, 560B total parameters / 25B active; open weights (Ling-series license).

### Raw benchmarks found

> Ant published a small set of vendor-run comparisons against Claude Opus 5.
> No independent harness (Artificial Analysis, BenchLM, SWE-bench) carries this
> exact model yet, so the vendor numbers are the only measured evidence.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- OmniDocBench: **92.21** (vendor; Claude Opus 5 90.56) — document parsing/understanding, not general reasoning
- ZEROBench Sub: **43.71** (vendor; Claude Opus 5 39.52) — hard visual-spatial reasoning subset
- MedXpertQA: **79.93** (vendor; medical multimodal expert QA)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- Vision2Web: **85.86** (vendor; Claude Opus 5 80.20) — vision-to-website generation benchmark
- DesignArena image-to-frontend: **1238 Elo** (top-ten placement, vendor-reported)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks curve at 1M; the window is a serving spec only.

### Normalized scores (1-100)

- **Tool use: 62/100.** No agentic harness score exists; the model is marketed for multimodal agents but ships no Terminal-Bench, Tau3 or MCP-Atlas evidence, which caps it in the low 60s.
- **Reasoning: 70/100.** OmniDocBench 92.21 and ZEROBench Sub 43.71 are strong domain results against Opus 5, but general GPQA/HLE/LCR are unpublished.
- **Context window: 94/100.** Verified 1,000,000-token input window is in the 1M tier (95-100), scored one point down for the absence of any retrieval-at-length measurement.
- **Multimodal: 88/100.** Native image and video input with text output and class-leading document parsing; no audio input and no MMMU-style public score.
- **Coding: 70/100.** Vision2Web 85.86 is a credible web-generation result, but there is no SWE-bench/DeepSWE/LiveCodeBench number for general software engineering.
- **Cost efficiency: 96/100.** $0.30/$0.90 undercuts the ~$0.60/$2.20 (~92) reference point; the launch free trial is time-limited and not scored as free.
- **Overall Score: 77/100.** Half-up mean of (62 + 70 + 94 + 88 + 70) / 5 = 76.8. Best fit: document-heavy and video/visual agent pipelines where a 1M window and open weights matter more than agentic coding benchmarks.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-11-13
- Method: public internet research (Ant Ling documentation and launch materials, vendor benchmark table, model catalogs); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Ant Ling — model documentation](https://developer.ant-ling.com/en/docs/models/ling/)
  - [Pandaily — Ant Group ships 560B multimodal Ling-3.2-flash](https://pandaily.com/ant-group-ling-3-2-flash-native-multimodal-560b-moe-25b-active-1m-context)
- Future sources: add a new file next to this one, e.g. `Ling_3.2_Flash.md`, using the same headings.
