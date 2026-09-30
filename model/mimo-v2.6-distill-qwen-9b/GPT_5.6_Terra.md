# MiMo V2.6 Distill-Qwen-9B — findings by GPT-5.6 Terra

- Source: Xiaomi MiMo/MiMo-V2.6-Distill-Qwen-9B
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiMo-V2.6-Distill-Qwen-9B
- **Short description:** Xiaomi MiMo's 9B agentic SFT checkpoint distilled from MiMo-generated data.
- **Provider / access:** [official Xiaomi MiMo Hugging Face model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B).
- **Release / knowledge:** 2026; cutoff unpublished.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`.
- **Context window:** not published on the recovered card.
- **Modalities:** image-text-to-text; its model card describes visual-coding evaluation.
- **Pricing (as of 2026-09-30):** MIT-licensed weights; no hosted price was verified.
- **Architecture:** Qwen3.5-9B base, supervised fine-tuned on MiMo-generated data.

### Raw benchmarks found

The exact SFT checkpoint's first-party table reports **61.1 SWE-bench Verified**, **44.6 SWE-Bench Pro**, **37.1 Terminal-Bench 2.1**, **35.2 Toolathlon-Verified**, **30.3 AutomationBench**, and **64.0 MiMo Visual Coding (mini)**. The card labels public scores with their averaging protocol and identifies internal mini sets. [Model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)

### Normalized scores (1–100)

- **Tool use: 58/100.** 35.2 on Toolathlon-Verified, 37.1 on Terminal-Bench 2.1, and 30.3 on AutomationBench establish real, if mid-range, agent evidence.
- **Reasoning: 62/100.** Exact-model performance across code, terminal, and general-agent tasks supports above-baseline applied reasoning.
- **Context window: 40/100.** No context-window specification or long-context evaluation was recovered; score is conservatively evidence-limited.
- **Multimodal: 66/100.** The released image-text-to-text checkpoint and 64.0 visual-coding result substantiate visual input capability.
- **Coding: 72/100.** 61.1 on SWE-bench Verified and 44.6 on SWE-Bench Pro are credible exact-checkpoint coding results.
- **Cost efficiency: 88/100.** MIT weights and a compact 9B parameter count make local and research use comparatively accessible.
- **Overall Score: 60/100.** Half-up mean of Tool use, Reasoning, Context window, Multimodal, and Coding.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-30
- Method: fresh first-party model-card research. Scores are normalized interpretations, not vendor benchmark scores.
