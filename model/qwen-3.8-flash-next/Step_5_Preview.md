# Qwen3.8-Flash-Next — findings by Step 5 Preview

- Source: Alibaba (`Qwen3.8-Flash-Next`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash-Next
- **Short description:** Alibaba's open-weights efficiency flagship (released 2026-08-26) — an early preview of the Qwen4 architecture: a 125B-parameter ultra-sparse MoE plus 51B N-gram embeddings with only 6B activated per token, hybrid Gated DeltaNet + QSA attention, 262K native context (1M via YaRN). Trained at ~1/9 the cost of Qwen3.7-Plus yet beating it across coding and office benchmarks, with independently verified Terminal-Bench 2.1 86.1% (AA). The production 1M-context version with built-in tools is served as **Qwen3.8-Flash** ($0.15/$0.47).
- **Provider / access:** Open weights `Qwen/Qwen3.8-Flash-Next` on Hugging Face + ModelScope (Apache 2.0 per the QwenLM repo; SGLang/vLLM/TokenSpeed); production API `qwen3.8-flash` on QwenCloud / Model Studio / OpenCode Zen / OpenRouter ($0.15/$0.47, cache $0.016).
- **Release / knowledge:** 2026-08-26. Knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.8-Flash-Next` (weights), `qwen3.8-flash` (production API), `qwen/qwen3.8-flash` (OpenRouter).
- **Context window:** 262,144 native, extensible to 1,000,000 via YaRN (the Qwen3.8-Flash production model ships 1M by default: 991,808 max input, 131,072 max output).
- **Modalities:** Multimodal MoE (the production Flash adds image/video understanding); thinking mode; function calling; MTP for speculative decoding; tool_stream.
- **Pricing (as of 2026-10-09):** production Qwen3.8-Flash $0.15 / MTok input, $0.47 output (international; China tier ¥0.8/¥2.7 ≈ $0.113/$0.382); implicit cache read $0.016; open weights free to self-host.
- **Architecture:** Ultra-sparse MoE, 125B main + 51B N-gram embedding params, 6B active/token (1 shared expert + large routed-expert pool, global load balancing 8); Gated DeltaNet + QSA hybrid attention (7.6x prefill / 4.9x decode speedup at 1M); Gated Residual (4 parallel branches); Muon optimizer; 8.6x prefill throughput vs Qwen3.7-Plus at a 90% prefix-cache hit rate.

### Raw benchmarks found

Coding / agentic (Qwen's model card; Claude Code / mini-SWE harnesses, 256K context, temp 1.0/top_p 0.95):

- DeepSWE v1.1: **58.7%** (best of Claude Code / mini-SWE-agent; #31/52; Qwen3.7-Plus 16.5, DeepSeek-V4-Flash 54.4, Opus 4.6 Max n/a)
- SWE-bench Pro: **62.5%** (#20/58; on the card's refined task set; Qwen3.7-Plus 55.8)
- SWE-bench Multilingual: **81.0%** (#8/49; mini-swe-agent)
- LiveCodeBench v6: **91.9%** (#3/50)
- NL2Repo-Bench: **48.1%** (#15/34); SciCode: **50.6%** (#50/296)
- Terminal-Bench 2.1: **86.1%** — independently measured by Artificial Analysis (the card itself reports none); #17/194
- WebDev Arena: **1622 Elo** (#9/105); Vision2Web: 64.0%

Agent / general (vendor card):

- Toolathlon-Verified: **73.5%**; CoWorkBench: **73.9%**; JobBench: **55.7%** (vs GPT-5.6 Sol's 45.4); Agents' Last Exam: 24.3 pass@1 / 51.2 score
- Computer-use agents on long-horizon real-world tasks: **19.4%** (35th pct)
- IFBench: **81.3%** (#9/170)

Reasoning / knowledge (independent + vendor):

- GPQA Diamond: **92.3%** (AA — independent; vendor card 91.7%)
- HLE: **38.0%** (AA, no tools — independent; supersedes the vendor's 35.9% GPT-4o-judged run)
- LiveBench overall: **76.2** (independent board row)
- Artificial Analysis Intelligence Index: no published index value found (component evals above); AIME / MMLU-Pro / ARC-AGI: **no verified public score found**

Long context:

- 262K native / 1M YaRN window; **no AA-LCR / MRCR / RULER number published** for this checkpoint

### Normalized scores (1–100)

- **Tool use: 76/100.** AA-verified Terminal-Bench 2.1 86.1%, Toolathlon 73.5% and CoWorkBench 73.9% are genuinely mid-frontier, and JobBench 55.7% beats GPT-5.6 Sol on the vendor table; capped by Agents' Last Exam 24.3% pass@1, the 19.4% long-horizon computer-use score, and Toolathlon/CoWorkBench still resting on Alibaba's own harnesses.
- **Reasoning: 82/100.** GPQA 92.3% and HLE 38.0% are both independently measured by Artificial Analysis, with IFBench 81.3% and LiveBench 76.2 backing breadth; capped by HLE ~15 points behind the Fable-5/GPT-6.1 tier and no AIME/ARC-AGI numbers.
- **Context window: 78/100.** 262,144-token native window (1M on the production Flash via YaRN) sits in the 200K–500K band; the QSA hybrid attention's 7.6x prefill speedup at 1M is real engineering evidence, but the 100 tier needs verified 512K+ retrieval and no AA-LCR/MRCR exists for this checkpoint.
- **Multimodal: 78/100.** Multimodal MoE (the production Flash adds image and video understanding) is the image-input band, placed near its top by the Vision2Web 64.0% and WebDev Arena #9 results; no MMMU-Pro/CharXiv number is published for Flash-Next, so it cannot be scored higher.
- **Coding: 82/100.** SWE-bench Pro 62.5%, SWE-bench Multilingual 81.0%, LiveCodeBench 91.9% (#3/50) and AA-verified Terminal-Bench 86.1% are frontier-adjacent at 6B active parameters; capped by DeepSWE 58.7% (a 15-point gap to the Opus-5.5 lead), NL2Repo 48.1% and SciCode 50.6%.
- **Cost efficiency: 94/100.** $0.15/$0.47 per MTok with $0.016 cache reads (production Flash) sits just above the methodology's ~$0.10/$0.20 = 97–99 tier, with Apache-2.0 weights and an 8.6x prefill-throughput cache story; the 50%-off batch and self-hosting option strengthen it further.
- **Overall Score: 79/100.** Best-fit recommendation: the open-weights efficiency pick — Qwen3.7-Plus-beating coding and office-agent performance at 6B active parameters and $0.15/$0.47; route science-heavy agent tasks (TB4.0, DeepSWE) to a frontier-tier model.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (QwenLM GitHub + HuggingFace model card/blog, Artificial Analysis via The Model Gap, BenchmarkList, QwenCloud docs, Alibaba Cloud Model Studio pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.8.md`, using the same headings.
