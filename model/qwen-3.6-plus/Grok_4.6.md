# Qwen3.6-Plus — findings by Grok 4.6

- Source: Alibaba / Qwen (`qwen3.6-plus`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.6-Plus
- **Short description:** Alibaba's April 2026 hosted Qwen3.6 Plus SKU: native vision-language Plus model aimed at agentic coding, front-end/Vibe coding, and OCR/localization. Snapshot-equivalent to `qwen3.6-plus-2026-04-02`.
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud, ID `qwen3.6-plus`. OpenRouter `qwen/qwen3.6-plus` (Alibaba Cloud Int.).
- **Release / knowledge:** Snapshot 2026-04-02 (Model Studio). Knowledge cutoff not on the help page.
- **IDs:** `qwen3.6-plus`; `qwen3.6-plus-2026-04-02`; `qwen/qwen3.6-plus`. No Zen Free ID found.
- **Context window:** 1,000,000 total; max input 991,808 (thinking 983,616); max output **65,536**; max CoT 81,920 (Alibaba help, 2026-10-11). Max output just above the 64K caveat line.
- **Modalities:** Text, image, video in; text out (QwenCloud / ATP Token synthesis of the card). Function calling implied by agent positioning.
- **Pricing (as of 2026-10-20):** QwenCloud international $0.50 / $3.00 per 1M in/out (explicit cache create $0.625). OpenRouter Alibaba Int. $0.325 / $1.95, cache create $0.40625 / read $0.0325. Beijing ≤256K $0.276 / $1.651. Cost scored on QwenCloud $0.50/$3.00; >256K Singapore list cited as $2/$6 by aggregators.
- **Architecture:** Hybrid linear attention + sparse MoE (OpenRouter blurb). Parameter count not on the Model Studio page.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **61.6%** (Alibaba; Harbor/Terminus-2, avg 5)
- Terminal-Bench 2.1: **61.4%** (Artificial Analysis via OpenRouter)
- Terminal-Bench Hard: **43.9%** (AA)
- τ-Bench Banking: **20.8%**; τ²-Bench Telecom: **97.7%** (AA)
- GDPval-AA: **24.5%** (AA OpenRouter row — percent scale, not Elo; treat as AA's published figure)
- Finance Agent v2: **40.8%** (Vals)
- Harvey Legal: **1.3%** (Vals)
- Claw-Eval / Tau3: **no verified public numeric score found** in the ATP extract (blog mentions Claw-Eval protocol)

Reasoning / knowledge:

- GPQA: **90.4%** (Alibaba via ATP Token)
- GPQA Diamond: **88.2%** (AA); **87.4%** (Vals)
- HLE: **27.8%** (AA)
- Artificial Analysis Intelligence Index: **27.0** (AA)
- AA-LCR: **78.3%**; CritPt: **2.9%**; Omniscience accuracy / non-halluc: **26.4% / 65.4%** (AA)
- IFBench: **75.2%** (AA)
- Vals AIME: **94.6%**; MMLU-Pro: **87.7%**; MMMU Pro: **84.2%**

Coding:

- SWE-bench Verified: **78.8%** (Alibaba internal bash+file-edit scaffold, 200K ctx)
- SWE-bench Pro: **56.6%** (Alibaba; refined Pro set)
- SWE-bench (Vals): **73.4%**
- LiveCodeBench (Vals): **86.0%**
- ProgramBench (Vals): **0.0%**
- AA Coding Index: **54.5**

Long context:

- 1M window; AA-LCR **78.3%**. **no ≥98% MRCR at 512K+ found**

### Normalized scores (1–100)

- **Tool use: 70/100.** AA TB 2.1 61.4% is mid; Tau banking 20.8% and legal 1.3% are weak. Telecom τ² 97.7% is an outlier on a different bench. Capped by missing Tau3/Claw numbers and weak GDPval-AA percent.
- **Reasoning: 76/100.** GPQA ~88–90% is frontier-adjacent; HLE 27.8% and Index 27 sit in the mid band; CritPt 2.9% is poor. Capped by that split.
- **Context window: 96/100.** 1M is the ≥1M tier. Not 100: LCR 78.3% ≠ 98% retrieval; max out 65K is only a hair above the 64K caveat.
- **Multimodal: 82/100.** Image+video in is the 75–90 band. Capped by text-only output.
- **Coding: 80/100.** SWE-Verified 78.8% and Vals LCB 86.0% are solid; TB 2.1 61.4% and ProgramBench 0% cap it. Vendor SWE used an internal scaffold.
- **Cost efficiency: 88/100.** QwenCloud $0.50/$3.00 sits between ~$0.60/$2.20 (92) and ~$1.25/$4.25 (88) because output is $3. OpenRouter $0.325/$1.95 would score a bit higher — this file uses first-party international list.
- **Overall Score: 81/100.** Mean of 70 + 76 + 96 + 82 + 80 = 80.8 → 81 half-up. Best fit: hosted multimodal coding at Plus prices; not a default agent given TB/Tau/legal.

---

## Signature

- Provided by: **Grok 4.6 (xAI / grok-4.6)** — 2026-10-20
- Method: public internet research (Alibaba Model Studio, QwenCloud, OpenRouter AA/Vals tables, ATP Token vendor citations); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
