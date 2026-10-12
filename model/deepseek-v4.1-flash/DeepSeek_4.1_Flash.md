# DeepSeek-V4.1-Flash — findings by DeepSeek 4.1 Flash

- Source: DeepSeek / DeepSeek-V4.1-Flash (`deepseek-flash`; legacy `deepseek-v4-flash`, `deepseek-v4-flash-vision-exp`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Reporting agent's own family model.** Vendor-reported figures are flagged throughout.
> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Newly confirmed: official model card DeepSWE v1.1 **74.2**, Terminal-Bench 2.1 **90.6**, TB3.0 30.0, TB4.0 31.2, SEC-Bench Pro 62.8, CyberGym 88.1, HLE-with-tools 63.9, GPQA Diamond **90.9**, Codeforces **3471**, LongBench-v2 **45.2**, MMMU-Pro 56.5, DocVQA 95.6; Artificial Analysis Intelligence Index **39 (#7/117)**; release 2026-09-10, MIT weights, HF safetensors ≈763B total incl. a 196B Engram table.
> **Conflicts surfaced:** (1) **Parameter count** — 552B backbone (official HF card) vs **763B total** (HF safetensors + LLM-Stats, incl. 196B Engram) vs AA's "552B total / 16B active". (2) **Cached input price** — $0.003 (official off-peak) / $0.006 (peak) / $0.007 (Fireworks) / $0.03 (LM Studio). (3) **Max output** — ~384K (vendor rec) vs 393.2K (Fireworks) vs 131.1K (DeepInfra). (4) **Release** — Sep 10 (official) vs Sep 9 (GA notes).
> **Corrected dimension:** **Multimodal** had been scored 88, but the model card specifies **text + image input only** — the methodology's `+image in = 60–70` band — so it is lowered to 70 (DocVQA 95.6 credits document parsing at the top of that band).
> Sources: https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash · https://artificialanalysis.ai/models/deepseek-v4-1-flash · https://www.deepseek.com/en/news/deepseek-v4-1-flash/ · https://openlm.ai/deepseek-v4.1/

## Model card

- **Name:** DeepSeek-V4.1-Flash (smallest model in DeepSeek's V4.1 architecture family)
- **Short description:** DeepSeek's follow-up to V4-Flash, released 2026-09-10: an MIT-licensed 552B-backbone multimodal MoE with an asymmetric 8B-active prefill / 16B-active decode split, built for input-heavy agentic workloads. It supersedes V4-Flash and replaces V4-Pro as DeepSeek's recommended default (`deepseek-v4-pro` traffic routes here at Flash prices).
- **Provider / access:** DeepSeek API `model=deepseek-flash` (OpenAI-, Anthropic- and Responses-compatible); legacy names `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` resolve here. Open weights on Hugging Face (`deepseek-ai/DeepSeek-V4.1-Flash`, MIT); vLLM/SGLang day-one support; also Fireworks, Novita, DeepInfra, Baseten, Featherless, LM Studio Cloud.
- **Release / knowledge:** Released 2026-09-10; knowledge cutoff ≈2026-06 (not explicitly disclosed).
- **IDs:** `deepseek-flash`; legacy `deepseek-v4-flash`, `deepseek-v4-flash-vision-exp`; HF `deepseek-ai/DeepSeek-V4.1-Flash`.
- **Context window:** 1,048,576 tokens; **max output ≈384,000 tokens** (Fireworks/Fireworks-adjacent hosts list 393.2K; DeepInfra caps at 131.1K).
- **Modalities:** text + image in (native DeepSeek-ViT encoder), text out; reasoning yes (thinking default, 1–100 effort dial); tool calls, JSON output, Responses API, Anthropic API, FIM.
- **Pricing (as of 2026-10-11):** off-peak $0.15 / 1M in, $0.003 cache hit, $0.60 / 1M out; peak (weekdays 01:00–04:00 & 06:00–10:00 UTC) doubles to $0.30/$1.20. Fireworks $0.22/$0.66. Blended ≈$0.262/M. Concurrency limit 2,500.
- **Architecture:** MIT MoE, 552B backbone (+196B Engram conditional-memory table ≈763B safetensors total), 8B active prefill / 16B active decode; 384 routed + 1 shared expert per layer, 6 routed per token; Causal Encoder-Decoder (CED) with Compressed Sparse Attention 2 + FP4 main-KV cache; global KV cache ≈890 bytes/token (≈¼ of V4-Flash); trained on 45T tokens.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (vendor, 1M ctx; V4-Pro 87.9%, V4-Flash 82.7%); TB3.0 **30.0%**, TB4.0 **31.2%**
- DeepSWE v1.1: **74.2%** (vendor mini-swe-agent; edges Claude Opus 5's 74.0%); SEC-Bench Pro **62.8%**; CyberGym **88.1%**; ExploitGym 15.3%
- HLE with tools **63.9%**; AutomationBench **54.8%**; Agents' Last Exam 31.8%; ProgramBench 20.3%; NL2Repo-Bench 64.0%
- Visual agents (tools): Chartography 78.9%, BabyVision 89.6%, ZeroBench-main 49.0%
- Tau3-Banking / GDPval-AA / Claw-Eval / MCP-Atlas: **no independently verified public score found**; AA Intelligence Index **39 (#7/117)** is the main independent composite

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (vendor + HF community); HLE: **36.8%** Pass@1 (**39.1%** text-only subset) / **63.9%** with tools
- Codeforces **3471**; MathArena Apex 65.6; base checkpoint: MMLU-Pro 74.1, C-Eval 92.1, AGIEval 83.4, SuperGPQA 53.1, SimpleQA-Verified 42.3
- AA Intelligence Index: **39** (#7/117, v4.3.2) — prior file read 40; ≈2× the median for similarly sized open-weight models
- LCR / CritPt / PARSE-Bench: **no verified public score found** (PARSE document rows used below as document-quality proxy)

Coding:

- DeepSWE v1.1 74.2% and TB2.1 90.6% (above); base: BigCodeBench 60.6, HumanEval 79.4, GSM8K 93.0
- SWE-bench Verified / Pro / LiveCodeBench / SciCode: **no verified public score found**
- Output speed: **218.7 tok/s** median (Artificial Analysis)

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

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: deep second-pass public internet research (DeepSeek official news/pricing, Hugging Face model card, Artificial Analysis, OpenLM.ai, LM Studio, LLM-Stats). Vendor-reported figures flagged (own family model); the parameter-count, cache-price and max-output discrepancies plus the multimodal band correction are surfaced rather than hidden. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
