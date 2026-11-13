# Codestral — findings by Ernie 5.5 Flash

- Source: Mistral AI (`codestral`, Codestral 25.01)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral (Codestral 25.01)
- **Short description:** Mistral AI's dedicated code-completion model — 22B dense, fill-in-the-middle (FIM) trained for IDE autocomplete across 80+ languages; the January 2025 refresh raised the context window from 32K to 256K.
- **Provider / access:** Mistral AI API (`codestral-latest`), IDE/plugin partners (JetBrains, VS Code, Cursor), Azure AI Foundry, open weights on Hugging Face (`mistralai/Codestral-22B-v0.1` is the May-2024 32K release).
- **Release / knowledge:** 2025-01-13 (25.01 refresh; original May 2024); knowledge cutoff not published.
- **IDs:** `codestral-latest`, `codestral-2501`, `mistralai/Codestral-22B-v0.1`
- **Context window:** 262,144 tokens (25.01 refresh; the 2024 original was 32,768).
- **Modalities:** text in / text out; no reasoning mode; FIM and tool calling supported.
- **Pricing (as of 2026-11-12):** $0.30 / 1M input, $0.90 / 1M output (Mistral Codestral rate, cited by CorX Labs for the 25.08 sibling).
- **Architecture:** 22B dense transformer; Mistral AI Non-Production License for the downloadable 2024 checkpoint.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench / Tau3 / GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found**
- Tool calling: supported (CorX Labs spec row)

Reasoning / knowledge:

- GPQA Diamond / HLE / MMLU-Pro / LCR / CritPt: **no verified public score found** — Codestral is a completion model with no reasoning mode and Mistral published no reasoning table for it

Coding:

- HumanEval: **86.6%** (Python, vendor claim carried by CorX Labs for the 25.08 line) — for 25.01 the cross-language average is reported at **71.4%** (Mistral's own multi-language test set, via iThome)
- FIM: described by Mistral as state of the art for fill-in-the-middle at launch; no independent number published
- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE: **no verified public score found**
- LMSys Copilot Arena: ranked #1 at the time of the 25.01 launch (vendor claim, no Elo published)

Long context:

- No MRCR / RULER / GraphWalks figures for the 256K window.

### Normalized scores (1–100)

- **Tool use: 40/100.** Tool calling is supported but no agentic benchmark (Terminal-Bench, Tau3, GDPval, MCP) exists for this completion-first model; the score reflects an unmeasured agent, not a measured failure.
- **Reasoning: 32/100.** No reasoning mode and no published GPQA/HLE/MMLU-Pro figure; a code-completion model is not tuned for multi-step reasoning, so the floor band applies.
- **Context window: 74/100.** 262,144 tokens since the 25.01 refresh (32K in the 2024 original), inside the 200K–500K band; no retrieval evidence.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 62/100.** HumanEval 86.6% (Python) with a 71.4% cross-language average is strong for completion, but the absence of any SWE-bench Verified, LiveCodeBench or agentic-coding row caps it below frontier agent scores.
- **Cost efficiency: 92/100.** $0.30/$0.90 per 1M is cheap for a 256K model, and the 2024 checkpoint is downloadable for self-hosting; not counted toward Overall.
- **Overall Score: 45/100.** Mean of tool use 40, reasoning 32, context 74, multimodal 15, coding 62. Best fit: IDE autocomplete, FIM and single-file/scaffold generation inside a coding agent; not a reasoning or standalone chat model.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12 UTC
- Method: public internet research (Mistral Codestral announcement pages, CorX Labs model sheet, iThome cross-language HumanEval report); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI — Codestral 25.01 announcement](https://mistral.ai/news/codestral-2501/)
  - [CorX Labs — Codestral 25.08 specs (22B dense, 262K, HumanEval 86.6%)](https://www.corx-labs.com/benchmarks/models/codestral-2508/)
  - [iThome — Codestral 25.01 cross-language HumanEval 71.4%](https://www.ithome.com.tw/news/166978)
  - [AI Made Simple — What is Codestral? (22B, 256K, FIM)](https://www.aimadetools.com/blog/what-is-codestral/)
  - [UCStrategies — Codestral guide (32K → 256K history)](https://ucstrategies.com/news/codestral-guide-specs-benchmarks-local-deployment-2026/)