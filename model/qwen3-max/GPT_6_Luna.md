# Qwen3 Max — findings by GPT-6 Luna

- Source: Alibaba Cloud/Qwen3 Max (non-Thinking variant)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3 Max
- **Short description:** Alibaba Cloud's proprietary, API-served Qwen3 flagship for text generation, structured output, function calling, and long-document tasks. This is the non-Thinking Qwen3 Max entry, not Qwen3 Max Thinking, Qwen3 Max Preview, or later Qwen Max versions.
- **Provider / access:** Alibaba Cloud Model Studio provides an OpenAI-compatible Chat Completions API; its general endpoint format is `https://{WorkspaceId}.{region}.maas.aliyuncs.com/compatible-mode/v1/chat/completions`. Vercel AI Gateway lists the exact gateway ID `alibaba/qwen3-max` and providers Alibaba and Novita. Alibaba's current recommended-model catalog (last updated 2026-10-28) no longer lists this older model, and Artificial Analysis marks it deprecated/no public API; current direct Alibaba availability is therefore unverified.
- **Release / knowledge:** Artificial Analysis and BenchmarkList date release to September 2025; BenchmarkList gives 2025-09-23. No exact knowledge cutoff verified.
- **IDs:** Tracked subject `qwen3-max`; exact Vercel gateway ID `alibaba/qwen3-max`; Alibaba Model Studio model name `qwen3-max` appears in its model-specific console URL. No public weights or Hugging Face checkpoint identified. Do not substitute `qwen3-max-thinking` or a newer Qwen Max.
- **Context window:** 262,144 tokens and 65,536 maximum output tokens in Vercel AI Gateway metadata; Artificial Analysis independently lists a 262K context. BenchLM reports 1M, conflicting with both; I use 262,144 and do not count the unsupported 1M value.
- **Modalities:** Text input and text output only; no image, audio, or video input verified. Function calling/tool use is supported. The base non-Thinking entry is not the separate extended-reasoning variant. JSON/structured output support is described by Vercel, but Alibaba-specific feature availability was not confirmed for a currently callable `qwen3-max` endpoint.
- **Pricing (as of 2026-11-01):** Vercel AI Gateway lists $1.20 input / $6.00 output per 1M tokens for `alibaba/qwen3-max`. BenchmarkList's model-data JSON lists $0.78/$3.90, a material unresolved discrepancy; Alibaba's current public catalog no longer lists this model, so a live official tariff could not be verified. Treat both as historical/aggregator quotes rather than guaranteed current direct pricing.
- **Architecture:** Proprietary/closed weights. Vercel describes an MoE model with over one trillion total parameters, but Artificial Analysis says Alibaba has not disclosed its parameter count. No first-party technical report confirming the architecture/parameter count was located; the >1T/MoE description remains unverified third-party metadata.

### Raw benchmarks found

> These are public historical results explicitly attributed to Qwen3 Max, not to Qwen3 Max Thinking. Provider, benchmark variant, and date are retained where available; differing setups are not averaged.

Agent / tool use:

- Tau2-Bench Telecom: **74.3%**, rank **105/337** (Artificial Analysis result indexed by BenchmarkList; sampled 2026-06-10). Vercel's gateway description separately says **74.8** without an evaluation date/method, so the two figures are not reconciled.
- GDPval-AA: **1,041 Elo**, rank **112/358** (Artificial Analysis result indexed by BenchmarkList; sampled 2026-05-28).
- Terminal-Bench Hard: **20.5%**, rank **109/326** (Artificial Analysis result indexed by BenchmarkList; sampled 2026-06-10). No verified Claw-Eval result found; BenchmarkList's distinct “Claw Bench” entry is not treated as Claw-Eval.

Reasoning / knowledge:

- GPQA Diamond: **76.4%** on the `GPQA Diamond Epoch` row (rank **171/478**, sampled 2026-10-18); a separately listed Vals AI GPQA Diamond result is **84.848%** (rank **40/117**, sampled 2026-07-28). These are different rows/runs and remain conflicting, not combined.
- Humanity's Last Exam: **11.9%**, rank **183/491** (Artificial Analysis result indexed by BenchmarkList; sampled 2026-10-29).
- MMLU-Pro: **84.1%**, rank **47/312** (Artificial Analysis result indexed by BenchmarkList; sampled 2026-06-10); Vals AI's separate MMLU-Pro row is **84.976%** (rank **47/116**, sampled 2026-07-28).
- AA-LCR: **50.0%**, rank **214/423** (sampled 2026-10-29); exact context length for this run is not stated in the profile.
- Artificial Analysis Intelligence Index: BenchmarkList's JSON snapshot records **24.01**, rank **131/324** (sampled 2026-07-21), while BenchLM reports an AA index of **15.6**. Artificial Analysis currently marks the model deprecated and does not show a current index; the snapshots/version discrepancy is unresolved. BenchLM's own aggregate is **38.9/100**, rank **#147/1,004**, based on **12/724** benchmarks; this partial-coverage aggregate is not a raw score.
- AA Omniscience Accuracy: **24.4%**; Hallucination Rate: **89.9%** (BenchmarkList's Artificial Analysis-sourced rows, sampled 2026-10-29).

Coding:

- LiveCodeBench: **78.215%**, rank **66/123** (Vals AI row indexed by BenchmarkList; sampled 2026-07-28).
- SciCode: **38.3%**, rank **148/311** (BenchmarkList; sampled 2026-07-21).
- Vibe Code Bench v1.1: **3.506%**, rank **68/75** (Vals AI row indexed by BenchmarkList; sampled 2026-07-28).
- Terminal-Bench 2.0: **24.719%**, rank **55/68** (Vals AI row indexed by BenchmarkList; sampled 2026-07-28).
- Vercel's gateway page also claims SWE-bench Verified **69.6**, but gives no run date, harness, or source leaderboard; kept as an uncorroborated catalog claim and not used to calibrate the coding score.

Long context:

- AA-LCR: **50.0%** (rank **214/423**; exact evaluation length not reported). No verified result at 262K or 1M retrieval length found.

Multimodal:

- No image/audio/video benchmark result found; Artificial Analysis classifies this non-Thinking model as text-only.

### Normalized scores (1–100)

- **Tool use: 69/100.** Tau2 Telecom 74.3% and GDPval-AA 1,041 Elo support useful agentic performance, but Terminal-Bench Hard is 20.5%, Claw-Eval is missing, and Tau2 figures vary by source/setup.
- **Reasoning: 68/100.** MMLU-Pro is about 84% and GPQA results range from 76.4% to 84.8%, but HLE is 11.9%, the Intelligence Index snapshots disagree (24.01 vs 15.6), and the current Artificial Analysis page has no active index.
- **Context window: 75/100.** The 262,144-token specification is in the 200K–500K tier; the only located retrieval score is AA-LCR 50% with no exact length, so neither the conflicting 1M claim nor retrieval near the limit is credited.
- **Multimodal: 15/100.** The exact non-Thinking Qwen3 Max entry is text-only; no non-text input/output evidence found.
- **Coding: 67/100.** LiveCodeBench is 78.2%, but SciCode is 38.3%, Vibe Code Bench is 3.5%, and Terminal-Bench 2.0 is 24.7%; Vercel's 69.6 SWE-bench claim lacks traceable evaluation details.
- **Cost efficiency: 85/100.** Vercel's $1.20/$6.00 per 1M quote is a paid mid-to-high output price, with a lower conflicting BenchmarkList quote and no current Alibaba tariff verification.
- **Overall Score: 59/100.** Half-up mean of the five quality dimensions (69 + 68 + 75 + 15 + 67 = 294; 294/5 = 58.8); best suited to text-only, long-document and structured-tool workflows when the historical route is available, not multimodal work or context-retrieval-critical tasks.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Ten successful independent public searches, followed by direct review of Alibaba Model Studio API/catalog documentation and independent Artificial Analysis, BenchmarkList, and BenchLM model/evaluation pages. Exact Qwen3 Max results are kept separate from Thinking, Preview, and later Max variants; conflicts in benchmark versions, context specifications, weights metadata, and pricing are called out rather than silently reconciled. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen3 Max official Qwen announcement](https://qwen.ai/blog?id=qwen3-max)
  - [Alibaba Cloud Model Studio OpenAI-compatible Chat Completions API](https://www.alibabacloud.com/help/en/model-studio/qwen-api-via-openai-chat-completions)
  - [Alibaba Cloud current recommended-model catalog](https://www.alibabacloud.com/help/en/model-studio/models)
  - [Vercel AI Gateway exact Qwen3 Max route, specifications, and gateway pricing](https://vercel.com/ai-gateway/models/qwen3-max)
  - [Artificial Analysis Qwen3 Max model profile and historical benchmark status](https://artificialanalysis.ai/models/qwen3-max)
  - [BenchmarkList Qwen3 Max benchmark profile](https://benchmarklist.com/models/qwen-qwen3-max)
  - [BenchmarkList Qwen3 Max sourced result data](https://benchmarklist.com/model-data/qwen-qwen3-max.json)
  - [BenchLM Qwen3 Max aggregate and benchmark rows](https://benchlm.ai/models/qwen3-max)
  - [Vals AI LiveCodeBench leaderboard](https://www.vals.ai/benchmarks/livecode)
