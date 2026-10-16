# DeepSeek-V4.1-Flash — findings by DeepSeek 4.1 Flash

- Source: DeepSeek / DeepSeek-V4.1-Flash (`deepseek-flash`; legacy `deepseek-v4-flash`, `deepseek-v4-flash-vision-exp`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-11)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Reporting agent's own family model.** Vendor-reported figures are flagged throughout.
> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Official news + HF card + DeepInfra re-confirm: release **2026-09-10**, MIT weights, 1,048,576-token context / **384K max output**, text+image in / text out, Causal Encoder-Decoder (40 layers = 20 encoder + 20 decoder), **552B backbone / 763B with the vision encoder**, **8B active prefill / 16B active decode**, KV cache **890 bytes/token** (¼ of V4-Flash). Headline vendor rows: **Terminal-Bench 2.1 90.6**, TB3.0 30.0, TB4.0 31.2, DeepSWE v1.1 **74.2** (mini-SWE), SEC-Bench Pro 62.8, CyberGym 88.1, GPQA Diamond 90.9, Codeforces 3471, HLE 36.8 (39.1 text-only), NL2Repo 64.0, ProgramBench 20.3, MathArena Apex 65.6, base MMLU-Pro 74.1 / HumanEval 79.4 / DocVQA 95.6. Artificial Analysis Intelligence Index **39 (#7/117, v4.3.2)** / **40** (DeepInfra, max effort); speed 211–546 tok/s. V4-Pro reroutes here at Flash rates from 04:00 UTC 2026-09-14.
> **Conflicts surfaced:** (1) **Extra-parameter attribution** — prior file read "196B Engram table"; Apidog now attributes the +211B (**763B**) to the **vision encoder**. (2) **AA Index** 39 (v4.3.2) vs 40 (DeepInfra "Max Effort"). (3) **Cached input** $0.003 off-peak / $0.006 peak (official) vs $0.004 (DeepInfra promo) vs $0.007 (Fireworks) vs $0.03 (LM Studio). (4) **Max output** 384K (vendor) vs 393.2K (Fireworks) vs 131.1K (DeepInfra). (5) **Terminal-Bench 2.1 is harness-dependent** — 90.6 (DSH Minimal) vs 90.3 (mini-SWE) vs 88.0 (Claude Code) vs 84.1 (Codex); DeepSWE v1.1 spans **65.5–74.2** by scaffold. (6) **No third-party SWE-bench Verified/Pro or LiveCodeBench number exists for the V4.1 ID** — figures circulating (SWE-bench 79.0, LiveCodeBench 91.6) describe the older **V4 Flash 0731**, not this model.
> **Corrected dimension:** **Multimodal** scored 70 (not 88): the card specifies **text + image input only** — the methodology's `+image in = 60–70` band — with DocVQA 95.6 crediting document parsing at the top of that band.
> Sources: https://www.deepseek.com/news/deepseek-v4-1-flash/ · https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash · https://deepinfra.com/blog/deepseek-v4-1-flash-model-overview-integration · https://artificialanalysis.ai/models/deepseek-v4-1-flash · https://apidog.com/blog/deepseek-v4-1-flash-vs-v4-pro-vs-v4-flash · https://qcode.cc/en/deepseek-v4-1-flash-pricing

## Model card

- **Name:** DeepSeek-V4.1-Flash (smallest model in DeepSeek's V4.1 architecture family)
- **Short description:** DeepSeek's follow-up to V4-Flash, released 2026-09-10: an MIT-licensed 552B-backbone multimodal MoE with an asymmetric 8B-active prefill / 16B-active decode split, built for input-heavy agentic workloads. It supersedes V4-Flash and replaces V4-Pro as DeepSeek's recommended default (`deepseek-v4-pro` traffic routes here at Flash rates from 2026-09-14 until V4.1-Pro launches).
- **Provider / access:** DeepSeek API `model=deepseek-flash` (OpenAI-, Anthropic- and Responses-compatible); legacy names `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` resolve here. Open weights on Hugging Face (`deepseek-ai/DeepSeek-V4.1-Flash`, MIT); vLLM/SGLang day-one support; also Fireworks, Novita, DeepInfra, Baseten, Together, Featherless, LM Studio, Ollama Cloud.
- **Release / knowledge:** Released 2026-09-10 (pricing live 04:00 UTC that day); knowledge cutoff ≈2026-06 (not explicitly disclosed).
- **IDs:** `deepseek-flash`; legacy `deepseek-v4-flash`, `deepseek-v4-flash-vision-exp`; HF `deepseek-ai/DeepSeek-V4.1-Flash`.
- **Context window:** 1,048,576 tokens; **max output ≈384,000 tokens** (Fireworks lists 393.2K; DeepInfra caps at 131.1K).
- **Modalities:** text + image in (native DeepSeek-ViT encoder), text out; reasoning yes (thinking default, 1–100 effort dial); tool calls, JSON output, Responses API, Anthropic API, FIM.
- **Pricing (as of 2026-10-16):** off-peak $0.15 / 1M in, $0.003 cache hit, $0.60 / 1M out; peak (weekdays 01:00–04:00 & 06:00–10:00 UTC) doubles to $0.30/$1.20. DeepInfra promo $0.14/$0.42 (cached $0.004); Infron Flex $0.12/$0.48; Fireworks $0.22/$0.66. Blended ≈$0.262/M. Concurrency limit 2,500.
- **Architecture:** MIT MoE, 552B backbone (**763B safetensors total incl. the native vision encoder**), 8B active prefill / 16B active decode; 384 routed + 1 shared expert per layer, 6 routed per token; Causal Encoder-Decoder (CED) with Compressed Sparse Attention 2 + FP4 main-KV cache; global KV cache ≈890 bytes/token (≈¼ of V4-Flash); trained on 45T tokens, context extended to 1M at 34T.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (vendor DSH Minimal; V4-Pro 87.9%, V4-Flash 82.7%, GPT-5.6 Sol 88.8%, Opus-5.0 89.1%); TB3.0 **30.0%**, TB4.0 **31.2%**
- DeepSWE v1.1: **74.2%** (mini-SWE; edges Claude Opus 5's 74.0; scaffold range 65.5 OpenCode → 74.2 mini-SWE); SEC-Bench Pro **62.8%**; CyberGym **88.1%**; ExploitGym 15.3%
- HLE with tools **63.9%**; AutomationBench **54.8%**; Agents' Last Exam 31.8%; ProgramBench 20.3%; NL2Repo-Bench 64.0%
- Visual agents (tools): Chartography 78.9%, BabyVision 89.6%, ZeroBench-main 49.0%
- Tau3-Banking / GDPval-AA / Claw-Eval / MCP-Atlas: **no independently verified public score found**; AA Intelligence Index **39 (#7/117)** is the main independent composite

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (vendor + HF community); HLE: **36.8%** Pass@1 (**39.1%** text-only subset) / **63.9%** with tools
- Codeforces **3471**; MathArena Apex 65.6; base checkpoint: MMLU-Pro 74.1, MMLU 91 (instruct), C-Eval 92.1, AGIEval 83.4, SuperGPQA 53.1, SimpleQA-Verified 42.3 (base) / 49 (instruct), IFEval 89.5, AIME 2025 87.5
- AA Intelligence Index: **39 (v4.3.2 #7/117)** / **40** (DeepInfra max effort) — ≈2× the median for similarly sized open-weight models; V4-Pro 0813 = 36.0, V4-Flash 0731 = 34.3
- LCR / CritPt / PARSE-Bench: **no verified public score found** (PARSE document rows used below as document-quality proxy)

Coding:

- DeepSWE v1.1 74.2% and TB2.1 90.6% (above); base: BigCodeBench 60.6, HumanEval 79.4, GSM8K 93.0, MATH 61.1
- SWE-bench Verified / Pro / LiveCodeBench / SciCode: **no verified public score found** for the V4.1 ID
- Output speed: **211–546 tok/s** (AA/DeepInfra) — median ≈213–218 tok/s; TTFT 1.19–5.28 s

Long context:

- LongBench-v2 (base, 1-shot): **45.2%** (V4-Pro-Base 51.5); no MRCR/RULER/GraphWalks value published. The 1M window is vendor-claimed, backed by KV-cache compression (≈890 bytes/token) and 34T context-extension tokens.

### Normalized scores (1–100)

- **Tool use: 90/100.** 90.6% Terminal-Bench 2.1 across six harnesses and 74.2% DeepSWE v1.1; capped because the numbers are vendor-run and no independent Tau3/GDPval exists.
- **Reasoning: 88/100.** GPQA Diamond 90.9%, HLE 63.9% with tools and Codeforces 3471 are frontier-adjacent; text-only HLE 36.8% caps it.
- **Context window: 95/100.** 1M tokens with ≈384K output and an ~890 bytes/token KV cache; no recall-at-depth benchmark caps it below maximum.
- **Multimodal: 70/100.** Text + image input only (methodology `+image in = 60–70`), with a native vision encoder, DocVQA 95.6 and strong visual-agent rows lifting it to the top of the band; **lowered from 88**, which had implied a broader multimodal tier than the card supports (no audio, no video, text-only output).
- **Coding: 90/100.** DeepSWE 74.2% and 90.6% Terminal-Bench 2.1 are excellent; no SWE-bench Verified/Pro number, and SEC-Bench Pro 62.8% trails GPT-5.6 Sol.
- **Cost efficiency: 92/100.** Off-peak $0.15/$0.60 with $0.003 cache hits, MIT open weights and 2,500 concurrency; peak doubling and no free tier stop it at 92.
- **Overall Score: 87/100.** Mean of the five quality dims (90+88+95+70+90)/5 = 86.6 → 87. Best fit: high-throughput agentic coding and terminal workloads needing long context and cheap cache hits rather than maximum knowledge depth.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-16
- Method: rewrite-pass public internet research (DeepSeek official news/pricing, Hugging Face model card, DeepInfra blog/API, Artificial Analysis, Apidog, qcode, computeprices, Infron, codersera, Ollama, TechRepublic). Vendor-reported figures flagged (own family model); the extra-parameter attribution, AA-index, cache-price, max-output, harness-spread and the misattributed V4-Flash coding rows are surfaced rather than hidden. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
