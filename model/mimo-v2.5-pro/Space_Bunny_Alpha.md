# MiMo-V2.5-Pro — findings by Space Bunny Alpha

- Source: Xiaomi MiMo (`mimo-v2.5-pro`; open weights)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5-Pro
- **Short description:** Xiaomi's open-weight MoE model for demanding agentic work, complex software engineering, and coherent long-horizon execution across more than a thousand tool calls. It is the final V2.5-series flagship and is being retired in favour of MiMo-V2.6-Pro.
- **Provider / access:** Xiaomi MiMo API Platform (`mimo-v2.5-pro`), AI Studio, and Hugging Face `XiaomiMiMo/MiMo-V2.5-Pro`; local SGLang/vLLM deployment is documented. Artificial Analysis lists 5 serving providers (Xiaomi, GMI, Novita, DeepInfra, Zyphra) plus OpenRouter. No OpenCode Zen Free ID is verified for this model.
- **Release / knowledge:** Xiaomi announced and open-sourced the model on 2026-04-27. The model card does not state a knowledge cutoff.
- **Deprecation:** **Changed since 2026-09-24.** Xiaomi's API docs now mark `mimo-v2.5-pro` and `mimo-v2.5` as **to be deprecated, taken offline at 10:00 Beijing time on 2026-10-21**, with migration recommended to the V2.6 series. `mimo-v2.6-pro` / `mimo-v2.6-flash` / `mimo-v2.6-pro-ultraspeed` are the named successors; Xiaomi recommends `mimo-v2.6-pro` for complex, long-horizon, high-value work.
- **IDs:** `mimo-v2.5-pro`; Hugging Face `XiaomiMiMo/MiMo-V2.5-Pro`; OpenRouter `xiaomi/mimo-v2.5-pro`.
- **Context window:** **1M tokens context, 128K maximum output** (Xiaomi official model page — maximum output was not shown in the 2026-09-24 review and is now documented). Rate limits: 100 RPM, 10M TPM. Self-hosted deployment uses `--context-length 1048576`; the Base checkpoint is 256K.
- **Modalities:** Official model page lists **Input Modality: Text / Output Modality: Text** with deep thinking, tool calls, streaming, web search, structured output, and context caching. Xiaomi's quick-start summary table separately lists "Full-modal Understanding" for `mimo-v2.5-pro`; this conflicts with the model-specific spec page, and no image/video/audio benchmark is published, so it is **not** treated as verified multimodal support. Reasoning content, function/tool calls, and OpenAI-compatible serving are documented.
- **Pricing (as of 2026-09-29):** **Changed since 2026-09-24 — now verified.** Xiaomi official: $0.0036 per 1M cached input, **$0.435 per 1M input (cache miss)**, **$0.87 per 1M output** (¥0.025 / ¥3 / ¥6). Aggregator routes: Novita $0.52/$1.04, DeepInfra $1.00/$3.00, GMI ~$0.35/$0.70. A prepaid Token Plan ($6–$100/month, Lite→Max) still covers `mimo-v2.5-pro` at 2.5/300/600 credits, but the plan itself is superseded by the V2.6 models. This is a paid model; no free tier is verified.
- **Speed / latency (as of 2026-09-29):** **Newly documented.** Output speed 36.5 t/s and 2.29 s median first-chunk latency on Xiaomi first-party; provider spread 35.4 t/s (Novita) to 81.2 t/s (Zyphra). Time to first **answer** token is much higher (57.0 s on Xiaomi first-party) because thinking time is included.
- **Architecture:** Open-weight MoE, 1.02T total parameters and 42B active; hybrid sliding-window/global attention with 6:1 ratio and three-layer Multi-Token Prediction; MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **68.4%** (BenchLM, provider-exact Xiaomi source)
- Terminal-Bench 2.1 (Vals AI): **57.3%** (BenchLM, Vals AI leaderboard; different harness)
- τ³-bench Tool-Agent-User: **72.9%** (BenchLM, provider-exact Xiaomi source)
- Claw-Eval: **63.8%** (BenchLM, exact benchmark source; Xiaomi reports 64% Pass^3 in its launch article)
- Gert Labs Composite Game Benchmark: **62.70%** (BenchLM, exact benchmark source)
- Toolathon, GDPval-AA, MCP-Atlas, and AA-Briefcase v1.1 / AutomationBench-AA: **no verified public exact value found**

Reasoning / knowledge:

- MMLU: **89.4%** (official MiMo-V2.5-Pro Base evaluation, 5-shot)
- MMLU-Redux: **92.8%**; MMLU-Pro: **68.5%** (official model card, 5-shot)
- GPQA-Diamond: **66.7%** (official model card, 5-shot)
- AIME 24&25: **37.3%** (official model card, 2-shot)
- HLE, CritPt, AA-Omniscience, AA-LCR v1.1, and hallucination metrics: **no verified public exact value found**
- Artificial Analysis Intelligence Index v4.3.2: **no verified public score found** for this model (the AA page exposes provider/pricing telemetry only)

Coding:

- SWE-bench Pro: **57.2%** (BenchLM, provider-exact Xiaomi source)
- SWE-bench (Vals AI): **74.0%** (BenchLM, Vals AI leaderboard)
- LiveCodeBench v6: **39.6%** for the official Base evaluation; **81.4%** on the Vals AI leaderboard (different harness; kept separate)
- SWE-Bench AgentLess: **35.7%** (official model card Base evaluation, 3-shot)
- HumanEval+: **75.6%**; MBPP+: **74.1%** (official model card Base evaluation)
- SciCode, Vibe Code Bench, and exact SWE-bench Verified: **no verified public exact value found**

Long context:

- GraphWalks: **0.56 BFS / 0.92 Parents at 512K** and **0.37 / 0.62 at 1M** (official Xiaomi model card; the two subtasks are separate)
- Official deployment context: **1,048,576 tokens**; **128K maximum output** (Xiaomi model page).

Sources consulted: [Xiaomi MiMo-V2.5-Pro launch page](https://mimo.xiaomi.com/mimo-v2-5-pro), [official Hugging Face model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro/raw/main/README.md), [Xiaomi MiMo model page](https://mimo.mi.com/models/en-US/mimo-v2.5-pro), [Xiaomi MiMo model/deprecation summary](https://mimo.mi.com/docs/en-US/quick-start/summary/model), [Xiaomi MiMo pay-as-you-go pricing](https://mimo.mi.com/docs/price/pay-as-you-go), [BenchLM MiMo-V2.5-Pro](https://benchlm.ai/models/mimo-v2-5-pro), and [Artificial Analysis MiMo-V2.5-Pro providers](https://artificialanalysis.ai/models/mimo-v2-5-pro/providers), accessed 2026-09-29. Base-model rows are explicitly labeled as such.

### Normalized scores (1–100)

- **Tool use: 91/100.** Unchanged. Terminal-Bench 2.0 68.4%, τ³-bench 72.9%, Claw-Eval 63.8%, and Xiaomi's 1,000+ tool-call demonstrations are strong agent evidence; missing GDPval and MCP rows cap certainty.
- **Reasoning: 88/100.** Unchanged. Strong official MMLU/Redux/GPQA/AIME results and the long-context GraphWalks measurements support high reasoning quality, though exact HLE, CritPt, and LCR values are absent.
- **Context window: 95/100.** Unchanged. The native 1M context is verified and directly tested with GraphWalks at 512K and 1M; the 128K maximum output is now officially documented.
- **Multimodal: 15/100.** Unchanged. The official model spec page is text-in/text-out. Xiaomi's summary table claims "Full-modal understanding" for this model, but that conflicts with the model page and has no supporting benchmark.
- **Coding: 90/100.** Unchanged. SWE-bench Pro 57.2%, Vals SWE 74.0%, and official HumanEval+/MBPP+ results support strong coding; harness and Base/instruction-model differences are material.
- **Cost efficiency: 88/100.** **Raised from 75.** The previously unknown rate is now official: $0.435 input (cache miss) / $0.87 output per 1M, with $0.0036 cached reads, which is top-tier value even for a paid model. The score is held below the very top because the route is retired on 2026-10-21.
- **Overall Score: 75.8/100.** (91 + 88 + 95 + 15 + 90) / 5 = 75.8 — unchanged from the 2026-09-24 report. Best fit: self-hosted or paid long-horizon text agents and software-engineering workloads with native 1M context; migrate to MiMo-V2.6-Pro, which supersedes it from 2026-10-21.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Xiaomi's official model/pricing/deprecation pages, BenchLM evidence, and Artificial Analysis provider telemetry; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
