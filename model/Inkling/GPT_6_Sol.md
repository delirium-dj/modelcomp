# Inkling — findings by GPT 6 Sol

- Source: Thinking Machines Lab (`thinkingmachines/Inkling`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's open-weight multimodal MoE for fine-tuning, coding agents, speech understanding and general reasoning. It is a distinct **975B/41B** checkpoint from the separately trained **Inkling-Small (276B/12B)**; `effort=0.99` or `xhigh` is a reasoning setting, not another model ([official launch](https://thinkingmachines.ai/news/introducing-inkling/), [model card](https://huggingface.co/thinkingmachines/Inkling)).
- **Provider / access:** Full weights `thinkingmachines/Inkling` on [Hugging Face](https://huggingface.co/thinkingmachines/Inkling), Tinker Playground/fine-tuning, and third-party inference on Together, Fireworks, Modal and others ([official availability](https://thinkingmachines.ai/news/introducing-inkling/)). OpenAI-compatible deployments are possible with [vLLM/SGLang](https://huggingface.co/thinkingmachines/Inkling); exact model ID and accessible context depend on host. Tinker offers 64K/256K context options in the launch announcement.
- **Release / knowledge:** July 15, 2026 ([Thinking Machines](https://thinkingmachines.ai/news/introducing-inkling/), [Vals](https://www.vals.ai/models/thinkingmachines_inkling)); no verified dated knowledge cutoff.
- **IDs:** `thinkingmachines/Inkling` (weights); do not confuse with `thinkingmachines/Inkling-Small`.
- **Context window:** **Up to 1M tokens** claimed by [developer](https://thinkingmachines.ai/news/introducing-inkling/), but [Vals](https://www.vals.ai/models/thinkingmachines_inkling) evaluated a **256K** configured window, [Tinker](https://thinkingmachines.ai/news/introducing-inkling/) offers 64K/256K, and [LLM Stats](https://llm-stats.com/models/inkling) lists a DeepInfra 524K route. The largest supported length varies by deployment; 1M is not a verified 1M retrieval score.
- **Modalities:** Native text, image and **audio** input, text output; function/tool calling and controllable thinking effort ([developer card](https://huggingface.co/thinkingmachines/Inkling), [launch](https://thinkingmachines.ai/news/introducing-inkling/)). The model was trained on video data, but vendor's documented **inference** input list does not confirm a direct video API; no audio generation claimed.
- **Pricing (as of 2026-10-31):** No universal first-party inference rate. [Artificial Analysis](https://artificialanalysis.ai/models/inkling) lists **$1.00 input / $4.05 output** per million tokens on a measured route; [LLM Stats' DeepInfra listing](https://llm-stats.com/models/inkling) gives **$0.95 input / $4.05 output / $0.16 cache hit** and a 524K route. Self-hosting incurs infrastructure costs; Tinker free playground is a limited promotion, not a $0 production API ([developer launch](https://thinkingmachines.ai/news/introducing-inkling/)).
- **Architecture:** Open weights under **Apache-2.0**, **975B total / 41B active**, sparse 256-expert MoE with 6 routed + 2 shared experts, hybrid local/global attention and multimodal encoders ([first-party launch](https://thinkingmachines.ai/news/introducing-inkling/), [weights card](https://huggingface.co/thinkingmachines/Inkling)).

### Raw benchmarks found

Agent / tool use:

- [Vendor-run evaluation at effort 0.99](https://thinkingmachines.ai/news/introducing-inkling/): **Terminal-Bench 2.1 63.8%** in its best internal harness, **MCP-Atlas 76.0%** in the launch table (the [HF model card](https://huggingface.co/thinkingmachines/Inkling) instead prints **74.1%**), **Tau3-Banking 23.7%**, **GDPval-AA v2 1,238 Elo** (HF card 1,233), **BrowseComp 77.1%** and **SWE-bench Verified 77.6%** in a bash-only harness. The small discrepancies between vendor pages should remain attributed, not collapsed into a single canonical number.
- [Vals' separately configured July evaluation](https://www.vals.ai/models/thinkingmachines_inkling) got **47.57% Terminal-Bench 2.1** across three trials at temperature 1/top-p 1/effort 0.99, versus the vendor's 63.8% best-harness score. Its [current profile](https://www.vals.ai/models/thinkingmachines_inkling) also shows **0.51% ±0.51 Terminal-Bench 4.0**, **0% SRE Bench** and **28.96% ±1.12 Vals Index** (#31/32). These are different harnesses and, for TB4, a different/harder benchmark; do not present the large gap as a same-protocol regression.
- [Artificial Analysis's v5 profile](https://artificialanalysis.ai/models/inkling) independently scores **12 Intelligence Index**, #20/22 in its displayed peer group. Its composite cannot be substituted for the project's 1–100 Overall or for Vals' different Index.

Reasoning / knowledge:

- [Official launch](https://thinkingmachines.ai/news/introducing-inkling/): **GPQA Diamond 87.2%**, **HLE text-only 29.7% / with tools 46.0%**, **AIME 2026 97.1%** at effort 0.99. The developer says it uses externally reported results when available, including GPQA/HLE; these are not all independently run in-house.
- [Vals](https://www.vals.ai/models/thinkingmachines_inkling): **GPQA Diamond 87.12% ±1.78**, **MMLU Pro 86.30% ±0.34**, but **ProofBench v1.1 0%** and **HLAB-Vals-1.1 3.75%**. The GPQA numbers agree, while the specialized results and AA's low v5 index caution against extrapolating to hard formal reasoning.

Coding:

- [Vendor](https://thinkingmachines.ai/news/introducing-inkling/) **SWE-bench Verified 77.6%**, **SWE-bench Pro Public 54.3%** and best-harness **Terminal-Bench 2.1 63.8%**; [Vals](https://www.vals.ai/models/thinkingmachines_inkling) separately reports **SWE-bench 77.60% ±1.87** and **LiveCodeBench 85.52% ±1.00**, but **Vibe Code Bench v1.1 19.21% ±3.66**, **Code Migration v1.1 8.82% ±2.71**, **ProgramBench 0%** and **Terminal-Bench 4.0 0.51% ±0.51**. The coding score accounts for the severe cross-task/harness variability rather than relying on SWE-bench alone.

Long context / multimodal:

- [Developer](https://thinkingmachines.ai/news/introducing-inkling/) reports **MMMU-Pro 73.5%**, **Audio MC 56.6%**, **MMAU 77.2%** and **VoiceBench 91.4%** (last uses format-sensitive rule grading). [Vals](https://www.vals.ai/models/thinkingmachines_inkling) independently finds **MMMU-Pro 78.50% ±0.99**. No verified 1M-context MRCR/retrieval result found; audio scores from the developer do not imply speech generation.

### Normalized scores (1–100)

- **Tool use: 70/100.** Vendor 63.8% TB2.1 and MCP-Atlas are promising, but Vals' 47.57% rerun and near-zero TB4/SRE warrant a substantial harness-robustness discount.
- **Reasoning: 80/100.** Vals and vendor GPQA agree near 87%, with strong AIME/HLE; zero ProofBench and AA's v5 Index 12 limit general hard-task claims.
- **Context window: 95/100.** Developer supports up to 1M, but Tinker/independent tested routes cap much lower and no near-limit retrieval clears the 100 bar.
- **Multimodal: 94/100.** Text/image/audio input with independent image and first-party audio measurements; no verified direct video inference or non-text output.
- **Coding: 74/100.** Independent SWE-bench 77.6 and LiveCodeBench 85.52 contrast sharply with Vals' low build/terminal/Code Migration results.
- **Cost efficiency: 85/100.** Roughly $0.95–$1/$4.05 API rates are competitive, but actual host/context prices vary and free playground access is not a free production tier.
- **Overall Score: 83/100.** Half-up mean of the five quality dimensions (70 + 80 + 95 + 94 + 74) / 5 = 82.6; most compelling as a customizable open-weight multimodal base when its specific harness is validated first.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-31
- Method: Public-web comparison of the developer launch and checkpoint card with independent Vals and Artificial Analysis results, explicitly retaining harness/context disagreements; scores are normalized interpretations, not official benchmark scores.
- Reference URLs:
  - [Thinking Machines Inkling release and evaluation methodology](https://thinkingmachines.ai/news/introducing-inkling/)
  - [Thinking Machines Inkling model card and open weights](https://huggingface.co/thinkingmachines/Inkling)
  - [Vals AI Inkling independent evaluation](https://www.vals.ai/models/thinkingmachines_inkling)
  - [Artificial Analysis Inkling xhigh profile](https://artificialanalysis.ai/models/inkling)
  - [LLM Stats Inkling hosted pricing and context](https://llm-stats.com/models/inkling)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
