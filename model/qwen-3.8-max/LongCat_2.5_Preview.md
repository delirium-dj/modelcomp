# Qwen3.8 Max — findings by LongCat 2.5 Preview

- Source: Alibaba Cloud / Qwen Team (`qwen3.8-max`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max
- **Short description:** Alibaba's largest and most capable Qwen flagship — a 2.4T-parameter MoE (95B active) with native visual intelligence, 1M-token context, and frontier coding/agentic capability. Text Arena #5, Vision Arena #2 at launch.
- **Provider / access:** Alibaba Cloud Model Studio — `qwen3.8-max` (OpenAI-compatible; upgraded snapshot `qwen3.8-max-0902` from 2026-09-02). Also OpenRouter, Featherless, QwenCloud. GA 2026-08-03.
- **Release / knowledge:** GA 2026-08-03 (snapshot 0902: 2026-09-02); knowledge cutoff not published.
- **IDs:** `qwen/qwen3.8-max` (OpenRouter/API), `qwen3.8-max` (Model Studio). No Zen Free ID — paid only.
- **Context window:** 1,000,000 tokens; max output 131,072 (verified via Aliyun docs + OpenRouter).
- **Modalities:** Text, image, video in; text out; reasoning yes (thinking mode; `reasoning_effort` low/medium/xhigh); function calling, structured outputs, context caching, code interpreter.
- **Pricing (as of 2026-09-27):** $2.00/M in, $6.00/M out (API/OpenRouter); cache read $0.17–0.25/M. Paid only.
- **Architecture:** 2.4T total params, 95B active; MoE — 512 experts, 10 routed + 1 shared (per Featherless); weights released as Qwen3.8-2.4T-A95B (text-only checkpoint).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (vendor card; Vals TB2.1: 67.4%)
- OSWorld-Verified: **86.1%**; Toolathlon-Verified: **72.5%**
- Agents' Last Exam: **52.4%**; AutomationBench: **27.3%**; JobBench: **53.4%**
- WideResearch: **81.9%**; GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.6%**
- HLE: **43.6%** no tools / **56.2%** with tools
- MRCRv2: **92.9%**; LongBench v2: **66.3%**

Coding:

- SWE-bench Pro: **67.7%** (rank 7/70)
- DeepSWE: **56.6%**; FrontierSWE: **73.5%**
- VulcanBench v3: **81.2%**; PaperBench: **93.0%**
- SWE-bench Verified: no verified public score found

Long context:

- MRCRv2 92.9% (vendor card); LongBench v2 66.3% — strong published long-context results.

Arena standings (Alibaba):

- Text Arena #5; Vision Arena #2; Frontend Code Arena #4

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.1 86.6% (vendor) is a hair under the 88%+ frontier mark; OSWorld 86.1% and Toolathlon 72.5% are strong; AutomationBench 27.3% is the drag.
- **Reasoning: 88/100.** GPQA 92.6%, HLE 56.2% with tools and MRCRv2 92.9% are all frontier-tier; no AA Intelligence Index to confirm the top band.
- **Context window: 95/100.** 1M tokens with 131K output earns the ≥1M tier; MRCRv2 92.9% supports but does not specifically confirm 512K+ retrieval.
- **Multimodal: 85/100.** Text/image/video input lands in the 75–90 band; text-only output caps it there.
- **Coding: 80/100.** SWE-bench Pro 67.7% (rank 7) and FrontierSWE 73.5% are strong; DeepSWE 56.6% keeps the dimension in the upper-mid range.
- **Cost efficiency: 78/100.** $2.00/$6.00 pricing sits between the ~$1.25/$4.25 (≈88) and $3/$15 (≈60) reference points, closer to the former.
- **Overall Score: 87/100.** Mean of the five quality dims (87+88+95+85+80)/5 = 87. Best-fit: open-weights-adjacent flagship for long-horizon coding and multimodal work — near-frontier capability with a self-hostable 2.4T checkpoint option.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Alibaba launch + Aliyun docs, BenchLM, Featherless, OpenRouter, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
