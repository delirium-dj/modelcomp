# ERNIE 5.5 Flash — findings by DeepSeek 4.1 Flash

- Source: Baidu / ERNIE 5.5 Flash (Preview)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ERNIE 5.5 Flash (Preview)
- **Short description:** Baidu's text-only MoE flash model — 280B total / 14B active parameters, 1M-token context — served on Qianfan as the first post-trained checkpoint of the ERNIE 5.5 Flash line. Baidu calls it an "intermediate checkpoint from post-training" that is still improving; weights are promised under Apache 2.0 "soon" but are not published yet.
- **Provider / access:** Baidu Qianfan API (billed endpoint live since 2026-11-10; no public model card at launch); third-party resellers may follow. No OpenCode Zen route.
- **Release / knowledge:** endpoint 2026-11-10; launch post 2026-11-11; Base checkpoint published 2026-11-05; knowledge cutoff not published.
- **IDs:** `ERNIE-5.5-Flash-Preview` (Qianfan); no Free ID; no OpenCode Zen route.
- **Context window:** 1,024,000 total; 921,600 max output (Qianfan spec sheet).
- **Modalities:** text in / text out only — no native multimodal perception (the vendor ran image-dependent benchmarks through a tool powered by Claude Opus 5.5); mandatory reasoning at a single high effort level.
- **Pricing (as of 2026-11-12):** $0.28 in / $1.13 out per 1M; $0.028 cached reads. Reasoning is mandatory and billed as output — long agent runs are output-token heavy.
- **Architecture:** sparse MoE, 280B total / 14B active (HF base listing: 286B params incl. BF16 variant), built on the ERNIE 5.5 Flash Base checkpoint; Base trained on a 128K window extensible to 1,048,576; attention compression — 37 of 43 layers attend over a 128×-compressed sequence with 6 MLA-DSA full-attention layers; base license is a restricted community license (excludes EU/UK/South Korea, revenue caps).

### Raw benchmarks found

> All capability numbers below are **vendor-reported** (Baidu's launch post, 2026-11-11; run on Baidu's harnesses with Baidu-selected judge models) and had no outside reproduction as of 2026-11-12. Cite with that caveat.

Agent / tool use:

- Terminal-Bench 4.0: **46.5**
- Toolathlon-Verified: **79.0**
- MCP-Atlas: **84.6**
- AutomationBench: **61.9**
- APEX-Agents 1.1: **64.2**
- DRACO: **84.9**
- CookieBench: **88.2**
- BrowseComp: **87.4**

Reasoning / knowledge:

- HLE (no tools): **46.4** (vendor-run; a frontier-band figure if it holds)
- AA-LCR v1.1: **79.0** (Baidu's own run — not an Artificial Analysis measurement; no ERNIE row on AA as of 2026-11-11)
- AA-Omniscience-Public: **25.2** (Baidu's own run)
- GPQA Diamond / CritPt: no verified public score found
- GDPval-AA: no verified public score found

Coding:

- DeepSWE v1.1: **71.2** (vendor-run)
- ProgramBench (Almost Solved): **29.5**
- NL2Repo-Bench: **64.8**
- Terminal-Bench-Science 0.1: **21.0**
- Code Arena WebDev (independent leaderboard, AutoEval): **1668 ±16** — provisional estimate, no human votes yet; ~17th of 158 models if the row were ranked; top of board 1836 (Claude Fable 5.2)

Knowledge work (vendor-run):

- SpreadsheetBench V2: **36.4**; OfficeQA Pro V2: **67.9**; Agents' Last Exam (CLI): **29.0**; SkillsBench 1.1 text-only: **73.5**; BlenderWorld text-only: **79.0**

Long context:

- AA-LCR v1.1: **79.0** (vendor-run); 1M-token window with a 921,600-token output ceiling; no independent MRCR/RULER table

### Normalized scores (1–100)

- **Tool use: 79/100.** Strong vendor-reported tool-calling suite (Toolathlon-Verified 79, MCP-Atlas 84.6, BrowseComp 87.4, DRACO 84.9) with long agentic demo runs; capped by weak Terminal-Bench 4.0 (46.5) and zero independent replication.
- **Reasoning: 78/100.** HLE 46.4 without tools is near the frontier band and AA-LCR is 79, but knowledge reliability is thin (Omniscience 25.2) and no independent journals have measured it.
- **Context window: 96/100.** 1M-token tier with an exceptional 921,600-token output ceiling; no retrieval-at-depth table to certify the 100 band.
- **Multimodal: 15/100.** Text-only in/out — no native image, audio or video perception (vision-dependent evals ran via an external tool).
- **Coding: 80/100.** DeepSWE v1.1 71.2 and a provisional top-20 Code Arena WebDev AutoEval row are strong for the size; ProgramBench 29.5 and the AutoEval uncertainty keep it out of the 90s.
- **Cost efficiency: 90/100.** $0.28/$1.13 with $0.028 cached is cheap, but mandatory high-effort reasoning bills every thought at the output rate, inflating real cost per task.
- **Overall Score: 70/100.** (79 + 78 + 96 + 15 + 80) / 5 = 69.6 — a text-only agent workhorse with a standout context/output budget at flash pricing; treat the scoreboard as vendor claims until independent rows and (promised) Apache 2.0 weights arrive.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-12
- Method: public internet research (Baidu release page, OrcaRouter launch-post and Code Arena analyses, tracker listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Baidu ERNIE — ERNIE 5.5 Flash Base release page (official benchmark notes)](https://ernie.baidu.com/release/ernie-5-5-flash-base/)
  - [OrcaRouter — ERNIE 5.5 Flash Preview: launch post, twenty benchmarks and a weights promise](https://www.orcarouter.ai/blog/ernie-5-5-flash-preview-launch-post-benchmarks)
  - [OrcaRouter — ERNIE 5.5 Flash Preview and the "#2 Open Model" claim its own leaderboard row contradicts](https://www.orcarouter.ai/blog/ernie-5-5-flash-preview-code-arena-1668)
  - [BenchLM — ERNIE 5.5 Flash Preview benchmarks & context](https://benchlm.ai/models/ernie-5-5-flash-preview)
  - [llmboard.ai — ERNIE 5.5 Flash: benchmarks, pricing and specs](https://www.llmboard.ai/models/ernie-5-5-flash)
  - [Hugging Face — baidu/ERNIE-5.5-Flash-Base](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
