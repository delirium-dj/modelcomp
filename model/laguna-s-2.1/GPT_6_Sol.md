# Laguna S 2.1 — findings by GPT 6 Sol

- Source: Poolside (`poolside/Laguna-S-2.1`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1.
- **Short description:** Poolside's open-weight 118B-class sparse MoE optimized for multi-step software engineering and terminal agents. It is a different trained size from Laguna XS 2.1; BF16, FP8, INT4 and NVFP4 are serving precision options, not separate score identities ([official weights](https://huggingface.co/poolside/Laguna-S-2.1), [launch](https://poolside.ai/blog/introducing-laguna-s-2-1)).
- **Provider / access:** Self-host weights with vLLM, SGLang or llama.cpp (OpenAI-compatible Chat Completions); hosted OpenRouter `poolside/laguna-s-2.1` and `poolside/laguna-s-2.1:free` are different pricing/cap routes. Poolside also cites Vercel Gateway. Free endpoint may use prompts and outputs for training; avoid confidential code on it without checking terms ([vendor weights](https://huggingface.co/poolside/Laguna-S-2.1), [OpenRouter free route](https://openrouter.ai/poolside/laguna-s-2.1-20260720:free)).
- **Release / knowledge:** **2026-07-21** public benchmark snapshot/launch; training cutoff not published ([official launch](https://poolside.ai/blog/introducing-laguna-s-2-1)).
- **IDs:** `poolside/Laguna-S-2.1` BF16 base; `poolside/Laguna-S-2.1-NVFP4` is a quantization of the same trained model, configured at 256K by default. OpenRouter paid versus free route can differ in context and data terms ([NVFP4 card](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4), [provider catalog](https://modelcompare.dev/providers/openrouter)).
- **Context window:** Native **1,048,576** supported on BF16 and explicitly restored long-context configs; some NVFP4 downloads ship at **262,144** for recommended quality and require config adjustment for 1M. October OpenRouter inventory lists paid ~1.05M versus free **262K** despite a separate free-route web page advertising 1M; verify effective host cap, do not assume display label guarantees service ([weight card](https://huggingface.co/poolside/Laguna-S-2.1), [NVFP4 usage](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4), [provider inventory](https://modelcompare.dev/providers/openrouter)).
- **Modalities:** Text in/out, tool calls, interleaved preserved thinking. No native image/audio/video model I/O; external tool screenshot handling is not vision ([weights](https://huggingface.co/poolside/Laguna-S-2.1)).
- **Pricing (as of 2026-11-02):** October OpenRouter inventory lists paid **$0.09 input / $0.18 output per million**, older provider pricing **$0.10/$0.20**; rates can change. Free route is rate-limited and has possible training/data-use terms. Self-hosted 118B weights need substantial memory; there is no universal free compute ([inventory](https://modelcompare.dev/providers/openrouter), [older pricing record](https://tokencost.app/models/laguna-s-2-1), [free route](https://openrouter.ai/poolside/laguna-s-2.1-20260720:free)).
- **Architecture / license:** ~**117.6B total / 8.5B active**, 256 routed experts top 10 plus one shared, 48 layers (12 global attention, 36 sliding-window of 512 tokens). Weights use **OpenMDW-1.1** and its acceptable-use terms, not Apache/MIT ([official card](https://huggingface.co/poolside/Laguna-S-2.1)).

### Raw benchmarks found

- **Agent / tool use:** Vendor [Terminal-Bench **2.1 70.2%**, Toolathlon Verified **49.7%**](https://huggingface.co/poolside/Laguna-S-2.1). Poolside averages pass@1 over four attempts for terminal and three for Toolathlon using its own Pool agent/Harbor fork, up to 500 steps; these are **not independent Artificial Analysis measurements of Laguna**. Its comparison table sometimes selects the maximum of vendor and third-party results for *other models*, further limiting like-for-like rankings ([method](https://poolside.ai/blog/introducing-laguna-s-2-1)).
- **Reasoning / knowledge:** No independently verified exact-Laguna GPQA/HLE or AA Intelligence Index found. Vendor describes reasoning through terminal tasks and a rediscovered number-theory construction, but an anecdote is not a general reasoning score ([launch](https://poolside.ai/blog/introducing-laguna-s-2-1)).
- **Coding:** Vendor [SWE-bench Multilingual **78.5%**, SWE-bench Pro public set **59.4%**, DeepSWE **40.4%** in Pool harness, SWE Atlas Codebase QnA **46.2%**](https://huggingface.co/poolside/Laguna-S-2.1). Pro versus Verified and DeepSWE Pool versus mini-SWE-agent are not identical benchmarks/harnesses ([method](https://poolside.ai/blog/introducing-laguna-s-2-1)).
- **Long context:** Architectural 1M trained, but no independent exact-checkpoint full-window AA-LCR or needle retrieval score confirmed. BF16, quantized config and free-host caps must be distinguished ([weight card](https://huggingface.co/poolside/Laguna-S-2.1), [NVFP4 card](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4)).

### Normalized scores (1–100)

- **Tool use: 70/100.** Strong vendor Terminal-Bench 2.1 but Toolathlon mixed and Pool harness unreplicated.
- **Reasoning: 59/100.** Agent task reasoning is evident, general benchmark coverage missing; conservative estimate.
- **Context window: 81/100.** 1M trained/configurable, limited by provider caps and missing full-end retention evaluation.
- **Multimodal: 15/100.** Text-only native model.
- **Coding: 73/100.** Strong vendor Multilingual/Pro and moderate DeepSWE, with harness caveats.
- **Cost efficiency: 84/100.** Very inexpensive paid route and a conditional free option, counterbalanced by high self-host memory and heavy agent token usage.
- **Overall Score: 60/100.** Half-up mean (70 + 59 + 81 + 15 + 73) / 5 = 59.6; promising low-cost, long-context code agent pending independent replication.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-02 UTC
- Method: Three successful official model/precision, independent-coverage and pricing/provider-cap searches; vendor harness versus outside evaluation and BF16 versus NVFP4/free cap distinguished. Scores are normalized interpretations.
- Reference URLs:
  - [Poolside official Laguna S 2.1 weights, architecture and benchmarks](https://huggingface.co/poolside/Laguna-S-2.1)
  - [Poolside launch and evaluation methodology](https://poolside.ai/blog/introducing-laguna-s-2-1)
  - [Poolside NVFP4 serving-context configuration](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4)
  - [OpenRouter paid/free price and cap inventory](https://modelcompare.dev/providers/openrouter)
  - [OpenRouter free-route usage terms](https://openrouter.ai/poolside/laguna-s-2.1-20260720:free)
- Future sources: add a new file next to this one using the same headings.
