# Hy3-preview — findings by GPT 6 Sol

- Source: Tencent Hy (`tencent/Hy3-preview`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3-preview.
- **Short description:** Tencent's April 2026 open-weight text MoE for agents and reasoning, later followed by a **separately post-trained** July Hy3. The matching 295B/21B size does **not** make these two checkpoints interchangeable: benchmark, tariff and license changed ([preview release](https://hy.tencent.ai/research/hy3-preview), [final release](https://hy.tencent.ai/research/hy3)).
- **Provider / access:** `tencent/Hy3-preview` BF16 weights for vLLM/SGLang with OpenAI-compatible self-hosted `/v1/chat/completions` ID `hy3-preview`; hosted OpenRouter `tencent/hy3-preview` at `https://openrouter.ai/api/v1/chat/completions`. A **two-week** launch free tier ended; don't mark this route permanently free ([Tencent press release](https://www.tencent.com/tencent-unveils-hy3-preview-model-enhances-agent-capabilities-and-real-world-usability/), [OpenRouter route](https://openrouter.ai/tencent/hy3-preview)).
- **Release / knowledge:** Vendor **2026-04-23** open-source announcement (OpenRouter lists April 22 for its route); no verified fixed knowledge cutoff ([Tencent](https://hy.tencent.ai/research/hy3-preview)).
- **IDs:** Preview `tencent/Hy3-preview` weights, `tencent/hy3-preview` hosted; later `tencent/Hy3` is a different final model, not an alias.
- **Context window:** Vendor **256K**, OpenRouter **262,144 tokens** combined with route-specific **235,929 max completion** in the live catalog; these are not additive ([weights](https://huggingface.co/tencent/Hy3-preview), [catalog](https://openrouter.ai/api/v1/models)).
- **Modalities:** Text in/text out, native tool calls and `no_think` / `low` / `high` reasoning modes. No native image/audio/video I/O ([weight card](https://huggingface.co/tencent/Hy3-preview)).
- **Pricing (as of 2026-11-01):** OpenRouter [live catalog](https://openrouter.ai/api/v1/models): **$0.18 input/$0.60 output/$0.06 cached input per million** for the paid preview route. A route page's temporary **$0.063/$0.21 discounted** banner and its earlier `:free` promo are not stable prices; Tencent's launch press notice gave approximately **$0.18/$0.59** direct TokenHub. Open weights incur infrastructure costs, and the preview license has material territorial restrictions ([press](https://www.tencent.com/tencent-unveils-hy3-preview-model-enhances-agent-capabilities-and-real-world-usability/), [license](https://huggingface.co/tencent/Hy3-preview/blob/main/LICENSE)).
- **Architecture:** Vendor **295B total / 21B active**, 192 experts (top 8), 3.8B MTP layer parameters. **Tencent Hy Community License** expressly excludes use in **EU, UK and South Korea** and has further conditions; the later final's Apache-2.0 license does **not** apply to preview weights ([license](https://huggingface.co/tencent/Hy3-preview/blob/main/LICENSE)).

### Raw benchmarks found

- **Agent/tool use:** Tencent preview submitted [Terminal-Bench **2.0 54.4%**](https://huggingface.co/tencent/Hy3-preview), not final Hy3's TB2.1 71.7. Independent [AA GDPval-AA **1136 Elo**](https://benchlm.ai/models/hy3-preview) is a work-quality preference measure, not a success percentage; independent Gert Labs **36.91%** in a separate agent test ([same compilation](https://benchlm.ai/models/hy3-preview)). No exact-preview replicated τ³ Banking pass rate was verified.
- **Reasoning:** Vendor [GPQA Diamond **87.2%**, HLE text-only **30.0%**](https://huggingface.co/tencent/Hy3-preview); independently [AA GPQA **89.7%**, HLE **33.5%**, CritPt **4.9%**](https://benchgap.net/model/hy3-preview). Independent and vendor GPQA differ by settings but broadly agree; no final Hy3 scores borrowed.
- **Coding:** Vendor [SWE-bench Verified **74.4%**](https://huggingface.co/tencent/Hy3-preview); independent [AA SciCode **48.6%** and Coding Index **58.8**](https://benchlm.ai/models/hy3-preview). These are different task/harness metrics; the HF **LiveCodeBench-v6 34.86%** row explicitly labels **Hy3-preview-Base**, **not** this post-trained assistant, and is excluded from its coding score ([card base table](https://huggingface.co/tencent/Hy3-preview)).
- **Long context:** Independent [AA-LCR **66.7%**](https://benchlm.ai/models/hy3-preview); vendor 256K capacity does not prove 256K retrieval fidelity. The **42.9% MRCR** mentioned in the later [final release comparison](https://venturebeat.com/technology/tencents-apache-licensed-hy3-takes-on-glm-5-2-at-half-the-size-and-wins-everywhere-except-coding) is a vendor preview-lineage result, not the independent AA-LCR protocol.
- **Multimodal:** No verified native image/audio/video score; the weight card specifies text-only.

### Normalized scores (1–100)

- **Tool use: 64/100.** Vendor TB2.0 54.4 and independent agent preference evidence, few matched-harness runs.
- **Reasoning: 75/100.** GPQA 87–90 and HLE ~30–34, with hard CritPt 4.9.
- **Context window: 73/100.** 256K and AA-LCR 66.7 without endpoint-depth retrieval test.
- **Multimodal: 15/100.** Text only.
- **Coding: 69/100.** SWE Verified 74.4 vendor and independent SciCode 48.6, without replicated SWE harness.
- **Cost efficiency: 68/100.** Cheap paid hosting, offset by restrictive preview weights and expired free promotion.
- **Overall Score: 59/100.** Half-up mean (64 + 75 + 73 + 15 + 69) / 5 = 59.2; historical preview for text agents, generally prefer final Hy3 where licensed and available.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Three fresh model, independent-score and license/price searches; preview versus final and pretraining base versus post-trained rows separated. Scores are normalized judgments.
- Reference URLs:
  - [Tencent preview release and reasoning modes](https://hy.tencent.ai/research/hy3-preview)
  - [Tencent preview exact-weight card and submitted benchmarks](https://huggingface.co/tencent/Hy3-preview)
  - [Tencent preview community license and geographic restrictions](https://huggingface.co/tencent/Hy3-preview/blob/main/LICENSE)
  - [Tencent launch API and two-week promotion](https://www.tencent.com/tencent-unveils-hy3-preview-model-enhances-agent-capabilities-and-real-world-usability/)
  - [Artificial Analysis measurements, measured-versus-estimated labels](https://benchgap.net/model/hy3-preview)
  - [OpenRouter current paid route and API](https://openrouter.ai/tencent/hy3-preview)
- Future sources: add a new file next to this one using the same headings.
