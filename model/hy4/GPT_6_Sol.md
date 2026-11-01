# Hy4 preview — findings by GPT 6 Sol

- Source: Tencent Hy (`tencent/Hy4-preview`; `tencent/hy4-preview`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 (preview).
- **Short description:** Tencent's Apache-2.0 open-weight MoE flagship for long-context coding, reasoning and tool-based work. The existing `hy4` folder tracks the vendor's **`Hy4-preview` checkpoint**; no separately documented final `Hy4` release was found. Tencent's FP8 repo is a quantization of the same release, not a new training checkpoint ([official model card](https://huggingface.co/tencent/Hy4-preview)).
- **Provider / access:** Weights `tencent/Hy4-preview`, optional `tencent/Hy4-preview-FP8`; OpenRouter Chat Completions `tencent/hy4-preview` at `https://openrouter.ai/api/v1/chat/completions`, or self-host a vLLM/SGLang OpenAI-compatible Chat Completions endpoint using served name `hy4-preview` ([Tencent recipe](https://huggingface.co/tencent/Hy4-preview), [OpenRouter route](https://openrouter.ai/tencent/hy4-preview)). No verified free OpenCode Zen tier.
- **Release / knowledge:** August 28, 2026 per [Vals release record](https://www.vals.ai/models/tencent_hy4-preview); reliable knowledge cutoff not published by Tencent.
- **IDs:** `tencent/Hy4-preview` weights, `tencent/hy4-preview` hosted route. `reasoning_effort=no_think` is a mode of this checkpoint, not a separate model.
- **Context window:** Tencent claims **1M** and OpenRouter advertises **1,048,576 combined tokens with 64,000 max completion** (API [model catalog](https://openrouter.ai/api/v1/models)); the nominal total does not imply 1M reliable retrieval.
- **Modalities:** **Text in, text out only**. Tool-call and reasoning parsers supported; generating frontend code or office artifacts does not give the checkpoint native image, audio or video input ([official model card](https://huggingface.co/tencent/Hy4-preview), [Vals modality flags](https://www.vals.ai/models/tencent_hy4-preview)).
- **Pricing (as of 2026-11-01):** OpenRouter [live model catalog](https://openrouter.ai/api/v1/models) reports time-varying per-million-token rates: **$0.834 input / $2.501 output / $0.042 cache read** before 16:00 UTC, **$0.7506 / $2.2509 / $0.0378** after; verify region/provider at request time. [Vals](https://www.vals.ai/models/tencent_hy4-preview) lists the ~$0.83/$2.50 daytime snapshot. Self-hosting avoids token charges but a 770B-weight model requires major GPU capacity.
- **Architecture:** Apache-2.0 open weights, **770B backbone total / 49B active**, plus a separate **10B/0.7B-active MTP layer** for speculative decoding. Sparse Gated-DSA with IndexCache and iHC residual streams ([Tencent specifications](https://huggingface.co/tencent/Hy4-preview)). Do not add the MTP parameters to a benchmark without stating the convention.

### Raw benchmarks found

- **Agent / tool use:** Tencent [Terminal-Bench 2.1 **85.4%**, MCP Atlas **83.7%**, Toolathlon-Verified **74.1%**](https://benchlm.ai/models/hy4-preview), linked to its benchmark appendix. Independently [Vals Terminal-Bench 2.1 **55.06%**](https://www.vals.ai/models/tencent_hy4-preview), an exceptionally large **30.34-point** gap despite matching benchmark version; prompts, budget and harness matter. Vals' newer Terminal-Bench **4.0 8.08% ±1.34** is a different, harder suite, not a direct decline on the 2.1 tasks.
- **Reasoning:** Tencent appendix [GPQA Diamond **92.3%**, HLE **43.4% without tools / 55.4% with tools**](https://benchlm.ai/models/hy4-preview). Independent [Vals ProofBench v1.1 **75.00% ±4.35** and IOI **59.33% ±4.60**](https://www.vals.ai/models/tencent_hy4-preview) assess different reasoning domains, so do not substitute them for independent GPQA verification.
- **Coding:** Tencent appendix [SWE-bench Pro **65.7%**, DeepSWE **64.3%**, NL2Repo **58.9%**](https://benchlm.ai/models/hy4-preview). Independent [Vals Code Migration v1.1 **45.36% ±3.59**, Vibe Code Bench v1.1 **77.48% ±4.04**, ProgramBench **0.00%**](https://www.vals.ai/models/tencent_hy4-preview). Different suites and harnesses can disagree sharply; ProgramBench failure is not zero coding ability overall.
- **Long context:** Advertised 1M; no independent result for 1M-token retrieval on this exact checkpoint found. Vendor's qualitative long-task claims and a large setting alone are not a near-window accuracy measurement ([Tencent model card](https://huggingface.co/tencent/Hy4-preview)).
- **Other independent checks:** [Vals Index **53.21% ±1.13**, rank 22/32 at profile snapshot](https://www.vals.ai/models/tencent_hy4-preview). The older September update on the same page cites 55.40% and 21/58 with a different cohort/snapshot; these cannot be treated as one fixed score.

### Normalized scores (1–100)

- **Tool use: 76/100.** Vendor 85.4 vs Vals 55.06 on Terminal-Bench 2.1 and 8.08 on 4.0 call for a substantial reproducibility discount.
- **Reasoning: 84/100.** GPQA 92.3 vendor and Vals ProofBench 75/IOI 59.33, without an independent same-harness GPQA check.
- **Context window: 90/100.** 1M advertised with 64K output, capped for lack of verified near-window retrieval.
- **Multimodal: 15/100.** Text-only inputs and outputs.
- **Coding: 78/100.** Vendor SWE-Pro 65.7 and independent Code Migration 45.36/Vibe 77.48, tempered by ProgramBench failure.
- **Cost efficiency: 73/100.** Reasonable hosted time-of-day pricing and Apache weights, but very high memory demand and provider-dependent tariffs.
- **Overall Score: 69/100.** Half-up mean (76 + 84 + 90 + 15 + 78) / 5 = 68.6; strong text-only open flagship if its harness-specific limits are acceptable.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Three fresh model-catalog, full-text and dataset searches; Tencent exact-checkpoint card and OpenRouter catalog reconciled with Vals independent results and source-linked vendor appendix. Scores are normalized judgments.
- Reference URLs:
  - [Tencent Hy4-preview official model card, architecture and license](https://huggingface.co/tencent/Hy4-preview)
  - [Tencent source-linked benchmark appendix index](https://benchlm.ai/models/hy4-preview)
  - [Vals independent Hy4 Preview multi-benchmark profile](https://www.vals.ai/models/tencent_hy4-preview)
  - [OpenRouter exact route and supported Chat Completions fields](https://openrouter.ai/tencent/hy4-preview)
  - [OpenRouter live model/price catalog](https://openrouter.ai/api/v1/models)
- Future sources: add a new file next to this one using the same headings.
