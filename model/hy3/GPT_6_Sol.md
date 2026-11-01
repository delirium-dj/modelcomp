# Hy3 — findings by GPT 6 Sol

- Source: Tencent Hy (`tencent/Hy3`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3.
- **Short description:** Tencent's Apache-2.0 open-weight, text-only 295B/21B-active reasoning MoE for agent and coding workloads. The July final checkpoint has additional post-training and a different license from April's `Hy3-preview`; do not combine their benchmark rows ([final card](https://huggingface.co/tencent/Hy3), [preview announcement](https://www.tencent.com/tencent-unveils-hy3-preview-model-enhances-agent-capabilities-and-real-world-usability/)).
- **Provider / access:** `tencent/Hy3` BF16 weights, with `tencent/Hy3-FP8` as a quantization of the **same** checkpoint. Tencent Cloud TokenHub hosts the final model; self-hosting via vLLM/SGLang provides an OpenAI-compatible `/v1/chat/completions` endpoint using the served ID `hy3`. Third-party route prices and limits are provider-specific ([Tencent card](https://huggingface.co/tencent/Hy3), [release](https://hy.tencent.ai/research/hy3)). No permanent Free ID was verified.
- **Release / knowledge:** Final release **2026-07-06**, following the separately trained April 2026 preview. No verified knowledge cutoff ([Tencent release](https://hy.tencent.ai/research/hy3)).
- **IDs:** `tencent/Hy3` final weights; `tencent/Hy3-FP8` same model, reduced precision; `tencent/hy3-preview` is a distinct earlier hosted checkpoint, not a final alias.
- **Context window:** **256K tokens** on the official card. Provider limits may differ; the total context budget does not imply an equal output allowance ([model card](https://huggingface.co/tencent/Hy3)).
- **Modalities:** Text in and text out; tool calling and configurable `no_think` / `low` / `high` reasoning through the chat template. No native image, video, or audio input/output ([model card](https://huggingface.co/tencent/Hy3)).
- **Pricing (as of 2026-11-01):** Tencent's published **RMB 1 input / RMB 4 output / RMB 0.25 cached input per million tokens** on its API ([official release](https://hy.tencent.ai/research/hy3)). [Artificial Analysis](https://artificialanalysis.ai/models/hy3) reports a distinct **median across hosted providers** of **$0.136/$0.555** per million input/output; currency conversion, routing and dates prevent equating these as one tariff. Self-hosted weights have no per-token license fee but Tencent recommends eight high-memory GPUs.
- **Architecture:** Vendor-stated **295B total / 21B active**, 192 routed experts (top 8), 80 base layers and 3.8B multi-token-prediction layer parameters. HF's automatic **299B** parameter display and AA's 299B include extra parameters, rather than identifying a second final model ([card](https://huggingface.co/tencent/Hy3), [AA specs](https://artificialanalysis.ai/models/hy3)).

### Raw benchmarks found

- **Agent/tool use:** Vendor-posted [Terminal-Bench **2.1 71.7%**](https://huggingface.co/tencent/Hy3), under its documented high-reasoning/Terminus-2 run; independently measured [Artificial Analysis Terminal-Bench **2.1 64.4%** and τ² Telecom **92.7%**](https://nano-gpt.com/models/text/tencent/hy3). The 7.3-point TB2.1 gap is attributable to different provider/harness or settings until a matched run is available; do not average it with independent [Terminal-Bench **4.0 1%**](https://artificialanalysis.ai/models/comparisons/hy3-vs-hy3-preview), which is a different and much harder version. Vendor's 270-expert blind workflow test gave **2.67/4** versus GLM-5.1 **2.51/4** ([release](https://hy.tencent.ai/research/hy3)); internal test, not an independent benchmark.
- **Reasoning:** Vendor-submitted [GPQA Diamond **90.4%**](https://huggingface.co/tencent/Hy3), versus independent [AA GPQA **89.7%**, HLE no-tools **31.6%**](https://www.waitwhichmodel.fyi/models/hy3). Tencent's [HLE with tools **53.2%**](https://www.marktechpost.com/2026/07/06/tencent-releases-hy3-open-295b-moe-model/) measures a different tool-enabled setting, not a discrepancy with 31.6% no-tools. [Independent AA current HLE-Diamond **12%**](https://artificialanalysis.ai/models/comparisons/hy3-vs-hy3-preview) is a newer benchmark variant, not directly comparable with unversioned HLE.
- **Coding:** Vendor-submitted [SWE-bench Verified **78.0%**, SWE-bench Pro **57.9%**, multilingual **75.8%**, DeepSWE **28.0%**](https://huggingface.co/tencent/Hy3); harness and reasoning budget matter. Independent [AA SciCode **48.6%**](https://nano-gpt.com/models/text/tencent/hy3) and Terminal-Bench 2.1 **64.4%** help bound practical transfer. SWE Verified is vendor-submitted, not an independently replicated exact-harness pass rate.
- **Long context:** Vendor reports [MRCR increasing from **42.9% preview** to **75.1% final**](https://venturebeat.com/technology/tencents-apache-licensed-hy3-takes-on-glm-5-2-at-half-the-size-and-wins-everywhere-except-coding); independent [AA-LCR **79.0%**](https://nano-gpt.com/models/text/tencent/hy3) is a separate suite. Neither reports verified recall at the extreme 256K boundary in the cited material.
- **Multimodal:** No verified public image, audio or video benchmark for the **text-only** final checkpoint; text-only is a supported-modality limit, not a missing-score-as-zero assumption.

### Normalized scores (1–100)

- **Tool use: 73/100.** Strong TB2.1 and telecom results, but TB4.0 1% and harness differences constrain generalization.
- **Reasoning: 78/100.** GPQA vendor 90.4/independent 89.7 closely align, while harder HLE variants are much lower.
- **Context window: 75/100.** 256K allowance and encouraging MRCR/LCR, without exact near-limit verification.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 73/100.** SWE Verified 78 vendor and independent SciCode 48.6, qualified by DeepSWE 28 and harder terminal tasks.
- **Cost efficiency: 87/100.** Competitive RMB API rates and permissive weights, offset by eight-GPU serving requirements.
- **Overall Score: 63/100.** Half-up mean (73 + 78 + 75 + 15 + 73) / 5 = 62.8; cost-effective text reasoning/agent model, not multimodal.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Fresh official-release, checkpoint and independent-benchmark searches; kept preview versus final, BF16 versus FP8, benchmark-version and tools/no-tools settings separate. Scores are normalized judgments, not official vendor scores.
- Reference URLs:
  - [Tencent final Hy3 release, pricing and date](https://hy.tencent.ai/research/hy3)
  - [Tencent final weight card, configuration and evaluation submissions](https://huggingface.co/tencent/Hy3)
  - [Tencent preview release, distinct checkpoint](https://www.tencent.com/tencent-unveils-hy3-preview-model-enhances-agent-capabilities-and-real-world-usability/)
  - [Artificial Analysis final-versus-preview, current benchmark versions](https://artificialanalysis.ai/models/comparisons/hy3-vs-hy3-preview)
  - [Artificial Analysis hosted-provider price and model specifications](https://artificialanalysis.ai/models/hy3)
  - [Independent-score digest identifying AA/Terminal-Bench 2.1 measurements](https://www.waitwhichmodel.fyi/models/hy3)
- Future sources: add a new file next to this one using the same headings.
