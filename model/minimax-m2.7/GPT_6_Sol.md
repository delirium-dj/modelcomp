# MiniMax-M2.7 — findings by GPT 6 Sol

- Source: MiniMax (`MiniMaxAI/MiniMax-M2.7`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M2.7.
- **Short description:** A distinct MiniMax M2-series post-training checkpoint emphasizing software engineering, agent teams and professional workflows. `MiniMax-M2.7-highspeed` is the same model's faster serving tier, not a separate benchmark set ([launch](https://www.minimax.io/blog/minimax-m27), [official weight card](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)).
- **Provider / access:** Downloadable weights `MiniMaxAI/MiniMax-M2.7` can be self-hosted through SGLang/vLLM; first-party pay-as-you-go API `MiniMax-M2.7` is **existing-user-only until retirement November 18, 2026**. New users lost first-party access October 19, and M/Token Plan calls with the old ID silently route to **M3.1 Flash**; never claim such calls evaluate M2.7. Third-party routes require checkpoint verification ([retirement notice](https://platform.minimax.io/docs/faq/models), [weight card](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)).
- **Release / knowledge:** Model announced **2026-03-18**; weights were subsequently released in April, so release date and weight-publication date differ. Training cutoff not established on the primary card ([announcement](https://www.minimax.io/blog/minimax-m27), [weights](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)).
- **IDs:** `MiniMax-M2.7` first-party legacy API and `MiniMaxAI/MiniMax-M2.7` weights; `MiniMax-M2.7-highspeed` is an inference profile. No verified permanent Zen Free route ([model FAQ](https://platform.minimax.io/docs/faq/models)).
- **Context window:** Approx. **204,800 tokens** (AA calls it 205K); Vals' measured route documents **197K context / 80K max output**, illustrating host limits ([AA specs](https://artificialanalysis.ai/models/minimax-m2-7), [Vals setup](https://www.vals.ai/models/minimax_MiniMax-M2.7)).
- **Modalities:** Text in/out, thinking and tool calls. Native visual/audio/video input not supported in the M2.x API, despite external agents performing document work ([MiniMax API schema](https://platform.minimax.io/docs/api-reference/text-chat-anthropic), [Vals model modalities](https://www.vals.ai/models/minimax_MiniMax-M2.7)).
- **Pricing (as of 2026-11-02):** Legacy first-party standard rate **$0.30 input/$1.20 output/$0.06 cached read per million**, with explicit-cache write **$0.375**; faster highspeed output **$2.40**. These are **not new-customer prices**, since onboarding ended October 19 and the API retires November 18. Self-hosting has hardware/operations costs ([cache table](https://platform.minimax.io/docs/api-reference/anthropic-api-compatible-cache), [retirement](https://platform.minimax.io/docs/faq/models)).
- **Architecture / license:** Approximately **229B total** parameters in the M2 architecture; weights are available, but the current [license](https://huggingface.co/MiniMaxAI/MiniMax-M2.7/blob/main/LICENSE) is **non-commercial by default and requires prior written authorization for commercial use**. The historical card's “modified-MIT” metadata is misleading; do not characterize M2.7 as commercially open source or apply M2.5 terms to it ([card](https://huggingface.co/MiniMaxAI/MiniMax-M2.7), [license](https://huggingface.co/MiniMaxAI/MiniMax-M2.7/blob/main/LICENSE)).

### Raw benchmarks found

- **Agent / tool use:** Vendor [Terminal-Bench **2.0 57.0%**, Toolathon **46.3%**, MM-Claw end-to-end **62.7%** and 97% compliance across 40+ skills](https://www.minimax.io/blog/minimax-m27). Independent [Vals Terminal-Bench **2.1 48.69% ±3.07**](https://www.vals.ai/models/minimax_MiniMax-M2.7) is a newer/different benchmark, not a failed replication of 57.0. Vendor GDPval-AA **1495 Elo** is a specific setup; don't translate it to an independent v2 percentile ([card](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)).
- **Reasoning / knowledge:** Independent Vals [GPQA Diamond **86.62% ±1.95**, MMLU-Pro **80.43% ±0.39**, LegalBench **83.98% ±0.41**](https://www.vals.ai/models/minimax_MiniMax-M2.7). Vendor GPQA-D **87.0%** is close but separate. Current [AA v5 page displays N/A](https://artificialanalysis.ai/models/minimax-m2-7); older index numbers must retain their benchmark version.
- **Coding:** Vendor [SWE-bench Pro **56.22%**, SWE Multilingual **76.5%**, Multi-SWE-Bench **52.7%**, VIBE-Pro **55.6%**](https://www.minimax.io/blog/minimax-m27). Independent Vals [SWE-bench Verified **73.80% ±1.97** with Mini-SWE-agent, LiveCodeBench **79.93% ±1.10**, Vibe Code Bench v1.1 **11.93% ±2.86**](https://www.vals.ai/models/minimax_MiniMax-M2.7). SWE-Pro is not Verified, and the small Vibe Code score does not share VIBE-Pro's evaluation protocol.
- **Long context:** ~205K advertised; no independent exact-checkpoint full-window retrieval curve or AA-LCR result verified. Do not assign an unmeasured 1M context.

### Normalized scores (1–100)

- **Tool use: 73/100.** Vendor tool/skill evidence versus moderate independent terminal 2.1 result.
- **Reasoning: 77/100.** Independent GPQA and MMLU are strong, tempered by no current AA composite.
- **Context window: 68/100.** 205K nominal and 197K tested route without full-length retention evidence.
- **Multimodal: 15/100.** Text-only model; file tools are external.
- **Coding: 76/100.** Strong SWE-Pro/Multilingual vendor results, independent Verified ~74 and LiveCodeBench ~80, but weaker Vibe Code v1.1.
- **Cost efficiency: 65/100.** Low legacy token rates, sharply limited by imminent first-party retirement, plan alias rerouting and commercial self-host licensing restrictions.
- **Overall Score: 62/100.** Half-up mean (73 + 77 + 68 + 15 + 76) / 5 = 61.8; useful for pinned self-hosted or verified third-party text/code workloads.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-02 UTC
- Method: Three successful release/card, Vals independent evaluations, and first-party license/pricing/retirement searches; distinguish 2.0 from 2.1 and paid API from silently rerouted subscription calls. Scores are normalized interpretations.
- Reference URLs:
  - [MiniMax M2.7 launch](https://www.minimax.io/blog/minimax-m27)
  - [Official weight card](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)
  - [Current non-commercial model license](https://huggingface.co/MiniMaxAI/MiniMax-M2.7/blob/main/LICENSE)
  - [Vals independent evaluations and settings](https://www.vals.ai/models/minimax_MiniMax-M2.7)
  - [MiniMax legacy tariff](https://platform.minimax.io/docs/api-reference/anthropic-api-compatible-cache)
  - [First-party retirement/rerouting notice](https://platform.minimax.io/docs/faq/models)
- Future sources: add a new file next to this one using the same headings.
