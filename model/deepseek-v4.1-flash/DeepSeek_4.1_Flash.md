# DeepSeek-V4.1-Flash — findings by DeepSeek 4.1 Flash

- Source: DeepSeek / DeepSeek-V4.1-Flash (`deepseek-flash`; legacy `deepseek-v4-flash`, `deepseek-v4-flash-vision-exp`)
- Date: 2026-10-01 (UTC) — refreshed second pass (previous Signature 2026-09-18)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Reporting agent's own family model.** Vendor-reported figures are flagged throughout.

## Model card

- **Name:** DeepSeek-V4.1-Flash (smallest model in DeepSeek's V4.1 architecture family)
- **Short description:** DeepSeek's follow-up to V4-Flash, released 2026-09-10: an MIT-licensed 552B-backbone multimodal MoE with an asymmetric 8B-active prefill / 16B-active decode split, built for input-heavy agentic workloads. It supersedes V4-Flash and replaces V4-Pro as DeepSeek's recommended default (V4-Pro is being phased out; `deepseek-v4-pro` traffic routes here at Flash prices).
- **Provider / access:** DeepSeek API `model=deepseek-flash` (OpenAI-, Anthropic- and Responses-compatible); legacy names `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` resolve here. Open weights on Hugging Face (`deepseek-ai/DeepSeek-V4.1-Flash`, MIT); vLLM/SGLang day-one support; also Fireworks, Novita, DeepInfra, Baseten, Featherless.
- **Release / knowledge:** Released 2026-09-10; knowledge cutoff ≈2026-06 (not explicitly disclosed).
- **IDs:** `deepseek-flash`; legacy `deepseek-v4-flash`, `deepseek-v4-flash-vision-exp`; HF `deepseek-ai/DeepSeek-V4.1-Flash`.
- **Context window:** 1,048,576 tokens; **max output 384,000 tokens**.
- **Modalities:** text + image in (native DeepSeek-ViT encoder), text out; reasoning yes (thinking default, 1–100 effort dial); tool calls, JSON output, Responses API, Anthropic API, FIM.
- **Pricing (as of 2026-10-01):** off-peak $0.15 / 1M in, $0.003 cache hit, $0.60 / 1M out; peak (weekdays 01:00–04:00 & 06:00–10:00 UTC) doubles to $0.30/$1.20. Blended ≈$0.262/M. Concurrency limit 2,500.
- **Architecture:** MIT MoE, 552B backbone, 8B active prefill / 16B active decode; 384 routed + 1 shared expert per layer, 6 routed per token; Causal Encoder-Decoder (CED) with Compressed Sparse Attention 2 + FP4 main-KV cache; global KV cache ≈890 bytes/token (≈¼ of V4-Flash).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (vendor, 1M ctx; V4-Pro 87.9%, V4-Flash 82.7%); high-80s/low-90s across six harnesses
- DeepSWE v1.1: **74.2%** (vendor mini-swe-agent; edges Claude Opus 5's 74.0%)
- SEC-Bench Pro: **62.8%** (behind GPT-5.6 Sol's 74.3%)
- Tau3-Banking / GDPval-AA / Claw-Eval / MCP-Atlas: **no independently verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (rank 17 of 48 on HokAI); AA Intelligence Index: **40** (≈2× the median for similarly sized open-weight models)
- HLE: **39.1%** text-only / **63.9%** with tools (vendor)
- Codeforces: **3471** (vendor); MMLU-Pro 74.1 / HumanEval 79.4 (base checkpoint)
- PARSE-Bench: mean **56.57**, text 88.09, layout 28.61
- LCR / CritPt: **no verified public score found**

Coding:

- DeepSWE v1.1 74.2% (above); SWE-bench Verified / Pro / LiveCodeBench / SciCode: **no verified public score found**
- Output speed: **218.7 tok/s** median (Artificial Analysis)

Long context:

- no MRCR/RULER/GraphWalks value published; the 1M window is vendor-claimed, backed by 34T context-extension tokens and the KV-cache compression design.

### Normalized scores (1–100)

- **Tool use: 90/100.** 90.6% Terminal-Bench 2.1 across six harnesses and 74.2% DeepSWE v1.1; capped because the numbers are vendor-run and no independent Tau3/GDPval exists.
- **Reasoning: 88/100.** GPQA Diamond 90.9%, HLE 63.9% with tools and Codeforces 3471 are frontier-adjacent; text-only HLE 39.1% and weak document layout (28.61) cap it.
- **Context window: 95/100.** 1M tokens with 384K output and an ~890 bytes/token KV cache; no recall-at-depth benchmark caps it below maximum.
- **Multimodal: 88/100.** Native image input via a dedicated vision encoder with strong text-parsing sub-scores; text-only output and weak layout parsing.
- **Coding: 90/100.** DeepSWE 74.2% and 90.6% Terminal-Bench 2.1 are excellent; no SWE-bench Verified/Pro number, and SEC-Bench Pro 62.8% trails GPT-5.6 Sol.
- **Cost efficiency: 92/100.** Off-peak $0.15/$0.60 with $0.003 cache hits, MIT open weights and 2,500 concurrency; peak doubling and no free tier stop it at 92.
- **Overall Score: 90/100.** Mean of the five quality dims (90+88+95+88+90)/5 = 90.2 → 90. Best fit: high-throughput agentic coding and terminal workloads needing long context and cheap cache hits rather than maximum knowledge depth.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-01
- Method: public internet research (DeepSeek release notes and pricing page, Hugging Face model card, HokAI fact page, Artificial Analysis, Benchgen); second-pass refresh of the 2026-09-18 report. Vendor-reported figures flagged (own family model). Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
