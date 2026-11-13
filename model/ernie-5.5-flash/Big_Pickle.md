# ERNIE 5.5 Flash - findings by Big Pickle

- Source: Baidu/ERNIE 5.5 Flash
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ERNIE 5.5 Flash
- **Short description:** Baidu's 280B-total / 14B-active sparse MoE preview (2026-11-11), pre-trained on 33.5T tokens with HCA and MLA-DSA attention. It pairs a 1M-token window with >200 tok/s throughput for high-volume text and coding workloads.
- **Provider / access:** Baidu Qianfan (ModelBuilder), model ID `ernie-5.5-flash`; OpenAI-compatible Chat Completions. No OpenCode Zen Free ID.
- **Release / knowledge:** Preview released 2026-11-11; knowledge cutoff not published.
- **IDs:** `baidu/ernie-5.5-flash`
- **Context window:** 1,000,000 total / 131,072 max output (Baidu Qianfan model card).
- **Modalities:** Text in; text out. Thinking mode, tool calling, structured output; no image/audio/video input on the standard endpoint.
- **Pricing (as of 2026-11-13):** ~$0.28 / 1M input and ~$1.13 / 1M output standard (2/8 CNY on Qianfan); off-peak promotional tier ~$0.14/$0.56 (1/4 CNY).
- **Architecture:** Sparse MoE, 280B total parameters / 14B active per token; proprietary weights.

### Raw benchmarks found

> BenchLM carries a full row set for this exact preview ID; three additional
> numbers are lab-reported only and marked as such.

Agent / tool use:

- Terminal-Bench 4.0: **46.50%**
- TB-Science 0.1: **21.0%**
- AutomationBench: **61.9%**
- APEX-Agents: **64.2%**
- DRACO: **84.9%**
- SpreadsheetBench 2: **36.4%**
- Agents' Last Exam (CLI): **29.0%**
- Toolathlon-Verified: **75.0%**
- MCP Atlas: **84.6%**
- BrowseComp: **87.4%**
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- HLE (without tools): **46.4%**
- AA-LCR: **79.0%** (lab-reported)
- AA-Omniscience: **25.2%** (lab-reported)
- SkillsBench: **73.5%** (lab-reported)
- GPQA Diamond: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no single composite published

Coding:

- DeepSWE: **71.2%**
- NL2Repo: **64.8%**
- ProgramBench: **29.5%**
- OfficeQA Pro v2: **67.9%**
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 79.0% at the model's evaluated context; no MRCR/RULER/GraphWalks curve at 1M.

### Normalized scores (1-100)

- **Tool use: 78/100.** MCP Atlas 84.6, BrowseComp 87.4, DRACO 84.9 and Toolathlon 75.0 are strong; Terminal-Bench 4.0 at 46.5 and ALE CLI at 29.0 show the ceiling on hard multi-step tool work.
- **Reasoning: 73/100.** HLE 46.4 and LCR 79.0 are solid, but Omniscience 25.2 and the absent GPQA keep it out of the high 70s.
- **Context window: 95/100.** Verified 1,000,000-token input window enters the 1M tier (95-100) at its floor, since no retrieval-at-length curve is published.
- **Multimodal: 15/100.** Text-only in and out on the standard endpoint — the floor by methodology.
- **Coding: 72/100.** DeepSWE 71.2 and NL2Repo 64.8 are respectable, offset by ProgramBench 29.5 and TB-Science 21.0; no SWE-bench Verified to anchor it.
- **Cost efficiency: 95/100.** $0.28/$1.13 sits between the ~$0.10/$0.20 (97-99) and ~$0.60/$2.20 (~92) anchors; the off-peak tier is cheaper still.
- **Overall Score: 67/100.** Half-up mean of (78 + 73 + 95 + 15 + 72) / 5 = 66.6. Best fit: high-throughput, long-context text/code agents on Qianfan where price per token dominates; text-only input caps it.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-11-13
- Method: public internet research (Baidu Qianfan model card, BenchLM benchmark rows, lab-reported evaluation table); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — ERNIE 5.5 Flash benchmark rows](https://benchlm.ai/models/ernie-5-5-flash)
  - [Baidu Qianfan — ERNIE model documentation](https://qianfan.cloud.baidu.com)
  - [Baidu Cloud — Qianfan model service pricing](https://cloud.baidu.com/product/wenxinworkshop)
- Future sources: add a new file next to this one, e.g. `ERNIE_5.5_Flash.md`, using the same headings.
