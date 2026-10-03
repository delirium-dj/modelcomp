# Qwen3.7 Plus — findings by GPT 6 Astra

- Source: Alibaba / Qwen3.7 Plus
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** Qwen3.7 Plus.
- **Short description:** Hosted multimodal reasoning model for economical long-context tasks; distinct from text-only Max.
- **Provider / access:** Alibaba Model Studio and Qwen API, OpenAI-compatible Chat Completions. [Official platform](https://qwen.ai/apiplatform).
- **Release / knowledge:** Snapshot dated May 26, 2026; AA lists June 2026 release. Knowledge cutoff unverified.
- **IDs:** `qwen3.7-plus`, alias currently equivalent to `qwen3.7-plus-2026-05-26`; no verified Free Zen ID.
- **Context window:** 1,000,000 tokens; maximum output not verified.
- **Modalities:** Text/image/video input, text output; thinking and nonthinking modes, function calls. Exact JSON constraints not verified.
- **Pricing (as of 2026-10-03):** Global deployment list $0.276 input / $1.101 output per million through 256K input, then $0.826/$3.301. US-local list $0.40/$1.60, then $1.20/$4.80. Temporary discounts vary by region/time; caching discounts available. [Official pricing](https://www.alibabacloud.com/help/en/model-studio/model-pricing).
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- AA-Briefcase v1.1 **914**, GDPval-AA v2.1 **771 Elo**, AutomationBench-AA **17%**, Terminal-Bench 4.0 **1%**. [AA comparison](https://artificialanalysis.ai/models/comparisons/qwen3-7-plus-vs-qwen3-7-max), reasoning configuration.
- Terminal-Bench 2.1, Tau3/Tau2, Claw-Eval/ClawProBench, Toolathlon, MCP Atlas and SWE Atlas: no verified public score found.

Reasoning / knowledge:

- AA Intelligence Index v4.3.2 **25**, HLE **36%**, CritPt **9%**, AA-Omniscience **1 index point**, GDP.pdf **12%**. Same AA table; Omniscience is not accuracy.
- GPQA, MLCR, BenchLM and Omniscience accuracy/hallucination rate: no verified public score found in reviewed primary sources.

Coding:

- SciCode **46%**, same [AA evaluation](https://artificialanalysis.ai/models/comparisons/qwen3-7-plus-vs-qwen3-7-max).
- SWE-bench Verified/Pro, LiveCodeBench, Vibe Code Bench and DeepSWE: no verified public score found.

Long context:

- AA-LCR v1.1 **73%**; not evidence for near-perfect retrieval at the full advertised limit.

### Normalized scores (1–100)

- **Tool use: 48/100.** Low GDPval, automation and terminal results limit autonomous workflow reliability despite API tool support.
- **Reasoning: 78/100.** HLE 36% supports capable reasoning; CritPt and Omniscience show clear scientific/factual limits.
- **Context window: 95/100.** Million-token capacity meets the size tier, while LCR prevents assuming perfect recall.
- **Multimodal: 85/100.** Native image/video understanding is useful; audio and nontext output are absent from verified specifications.
- **Coding: 70/100.** SciCode 46% is useful, but terminal performance limits agentic coding confidence.
- **Cost efficiency: 94/100.** Low list rates make high-volume use economical; regional and long-input tiers increase the bill.
- **Overall Score: 75/100.** Half-up mean of 48, 78, 95, 85 and 70 is 75; best fit is supervised multimodal analysis rather than unattended engineering.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent public web research; normalized scores are interpretations, not official vendor scores.
- Future sources: Add a separate signed findings file alongside this report.
