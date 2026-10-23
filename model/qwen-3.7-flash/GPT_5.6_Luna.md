# Qwen3.7 Flash - findings by GPT 5.6 Luna

- Source: Alibaba/Qwen3.7 Flash
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Flash
- **Short description:** A hosted Alibaba Qwen reasoning model exposed through the exact OpenRouter route `qwen/qwen3.7-flash`. Alibaba's public Model Studio and Qwen open-model documentation do not list this exact Flash SKU, so first-party identity and specifications remain less certain than the gateway identity.
- **Provider / access:** OpenRouter, exact API ID `qwen/qwen3.7-flash`; Chat Completions API. OpenRouter's model-specific API guide confirms the route and accepts tools, reasoning, JSON response formatting, and streaming. No OpenCode Zen ID or direct Alibaba API ID was independently verified.
- **Release / knowledge:** No verified first-party release date or knowledge cutoff found.
- **IDs:** `qwen/qwen3.7-flash` (OpenRouter exact route). No Free ID on Zen was verified.
- **Context window:** 1M tokens, reported by BenchLM's exact-model page; no first-party Alibaba confirmation or long-context retrieval result found.
- **Modalities:** Text in and text out on the confirmed route; reasoning is reported by BenchLM. Tool-call and structured-output parameters are accepted by OpenRouter. No verified image, audio, or video capability was found.
- **Pricing (as of 2026-10-23):** $0.13 per 1M output tokens, reported by BenchLM; input and cache prices were not verified. Paid model; no free tier verified.
- **Architecture:** Proprietary, according to BenchLM; no official parameter count or architecture card found.

### Raw benchmarks found

> Numbers below are tied to the exact Qwen3.7 Flash model page or its cited source. Gateway metadata and neighboring Qwen model results were not substituted for exact-model measurements.

Agent / tool use:

- OpenRouter tool-call capability is advertised, but no verified public tool-use benchmark score was found: [OpenRouter model API guide](https://openrouter.ai/qwen/qwen3.7-flash/llms.txt).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- FrontierMath v2 (Tiers 1-3): **19.298%** ([BenchLM exact-model record](https://benchlm.ai/models/qwen3-7-flash), citing the [Epoch AI FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)).
- Artificial Analysis Intelligence Index / BenchLM overall: **no Artificial Analysis score found / 46.92, rank #114 of 991** ([Artificial Analysis model index](https://artificialanalysis.ai/models); [BenchLM exact-model record](https://benchlm.ai/models/qwen3-7-flash)). BenchLM labels this model's coverage partial: 1 of 705 benchmark records.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **No long-context retrieval reported.** BenchLM reports a 1M context window for this exact model, but no MRCR, RULER, GraphWalks, or equivalent retrieval measurement was found: [BenchLM exact-model record](https://benchlm.ai/models/qwen3-7-flash).

### Normalized scores (1-100)

> Scores are conservative interpretations of the exact-model evidence above. Missing benchmark families cap the relevant dimensions; Cost efficiency is excluded from Overall.

- **Tool use: 15/100.** OpenRouter accepts tool parameters, but no exact-model tool benchmark was verified; the score is capped at the text-only evidence floor ([OpenRouter model API guide](https://openrouter.ai/qwen/qwen3.7-flash/llms.txt)).
- **Reasoning: 47/100.** The exact-model BenchLM index is 46.92 and the only cited raw benchmark is FrontierMath v2 at 19.298%; partial single-benchmark coverage caps confidence ([BenchLM](https://benchlm.ai/models/qwen3-7-flash), [Epoch AI](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)).
- **Context window: 95/100.** BenchLM reports 1M tokens, but no first-party confirmation or long-context retrieval test was found, so the advertised limit caps the score ([BenchLM](https://benchlm.ai/models/qwen3-7-flash)).
- **Multimodal: 15/100.** The confirmed API evidence covers text input and text output only; no verified image, audio, or video support was found ([OpenRouter](https://openrouter.ai/qwen/qwen3.7-flash/llms.txt), [Alibaba Model Studio catalog](https://www.alibabacloud.com/help/en/model-studio/models)).
- **Coding: 15/100.** No exact-model coding benchmark or official coding claim was verified, so this remains a conservative floor ([BenchLM](https://benchlm.ai/models/qwen3-7-flash)).
- **Cost efficiency: 90/100.** BenchLM reports $0.13 per 1M output tokens, but input and cache pricing were not verified; this high value score is provisional and excluded from Overall ([BenchLM](https://benchlm.ai/models/qwen3-7-flash)).
- **Overall Score: 37.4/100.** Half-up mean of the five non-cost dimensions `(15 + 47 + 95 + 15 + 15) / 5`; best fit is a low-cost, long-context text model whose reasoning and coding suitability need broader exact-model measurement.

---

## Source reconciliation

- **Exact route confirmed:** OpenRouter documents `qwen/qwen3.7-flash` as a confirmed hosted route and provides a Chat Completions guide ([model page](https://openrouter.ai/qwen/qwen3.7-flash), [canonical API guide](https://openrouter.ai/qwen/qwen3.7-flash/llms.txt)).
- **First-party catalog conflict:** Alibaba's current Model Studio catalog lists `qwen3.7-plus` and `qwen3.8-flash`, but not `qwen3.7-flash` ([catalog](https://www.alibabacloud.com/help/en/model-studio/models)).
- **Open-model documentation conflict:** Qwen's official docs and QwenLM/Qwen3 repository document Qwen3 checkpoints and 2507 variants, not this exact hosted Flash ID ([Qwen docs](https://qwen.readthedocs.io/en/latest/getting_started/quickstart.html), [Qwen3 repository](https://github.com/QwenLM/Qwen3)). Hugging Face's official Qwen organization likewise shows Qwen3.8 collections and no exact `Qwen3.7-Flash` checkpoint ([Qwen organization](https://huggingface.co/Qwen)).
- **Independent benchmark evidence:** BenchLM has an exact `Qwen3.7 Flash` entry with 1M context, $0.13 output pricing, score 46.92, and one cited raw result, FrontierMath v2 at 19.298% ([BenchLM exact-model record](https://benchlm.ai/models/qwen3-7-flash), [FrontierMath source](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)). It explicitly labels coverage partial and the ranking estimated, so no neighboring Qwen scores were transferred.
- **Independent-source absence:** Searches of Artificial Analysis, BenchLM, LMSYS Chatbot Arena, GitHub/QwenLM, and exact-name web queries found no second exact-model benchmark or review. Artificial Analysis lists no exact model result on its model index ([index](https://artificialanalysis.ai/models)); the LMSYS leaderboard was inaccessible during this run ([leaderboard](https://lmarena.ai/leaderboard)).

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** - 2026-10-23
- Method: public internet research using official Alibaba/Qwen documentation, the exact OpenRouter route, and independent benchmark indexes; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
