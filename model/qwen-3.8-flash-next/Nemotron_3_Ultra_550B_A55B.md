# Qwen 3.8 Flash Next — findings by Nemotron 3 Ultra 550B A55B

- Source: Alibaba (`qwen-3.8-flash-next`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba's open-weights efficiency flagship (125B total + 51B N-gram / 6B active params) previewing Qwen4 architecture with hybrid Gated DeltaNet + QSA attention, 262K native context (1M via YaRN), exceptional coding (LiveCodeBench 91.9%), at $0.15/$0.47 pricing under Apache 2.0.
- **Provider / access:** Hugging Face (`Qwen/Qwen3.8-Flash-Next`), ModelScope, QwenCloud Model Studio (`qwen3.8-flash`), OpenCode Zen (`opencode/qwen-3.8-flash`), OpenRouter. OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-08-26 release; knowledge cutoff not publicly disclosed.
- **IDs:** `Qwen/Qwen3.8-Flash-Next` (Hugging Face/ModelScope), `qwen3.8-flash` (production API on QwenCloud/Model Studio/OpenCode Zen/OpenRouter). Open weights available for self-hosting (Apache 2.0 license).
- **Context window:** 262,144 tokens native (262K); extensible to 1,000,000 via YaRN; production Flash serves 1M by default (991,808 max input, 131,072 max output).
- **Modalities:** Text, image, video in; text out; reasoning yes (thinking mode); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** Production Flash: $0.15/M in, $0.47/M out (international); China tier ¥0.8/¥2.7 ≈ $0.113/$0.382; cache read $0.016. Open weights free to self-host (Apache 2.0).
- **Architecture:** Ultra-sparse MoE, 125B main + 51B N-gram embedding params, 6B active/token (1 shared expert + large routed pool, global load balancing 8); hybrid Gated DeltaNet + QSA attention (7.6× prefill / 4.9× decode speedup at 1M); Gated Residual (4 parallel branches); Muon optimizer; 8.6× prefill throughput vs Qwen3.7-Plus at 90% prefix-cache hit.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **86.1%** (Artificial Analysis independent verification)
- Toolathlon Verified: **73.5%** (Qwen model card)
- CoWorkBench: **73.9%** (Qwen model card)
- JobBench: **55.7%** (Qwen model card, beats GPT-5.6 Sol 45.4%)
- Agents' Last Exam: **24.3%** pass@1 / **51.2** score (Qwen model card)
- Computer-use agents (long-horizon): **19.4%** (Qwen model card, 35th pct)
- IFBench: **81.3%** (Qwen model card, #9/170)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (Artificial Analysis independent) / **91.7%** (Qwen model card)
- HLE: **38.0%** (Artificial Analysis independent, no tools) / **35.9%** (Qwen vendor GPT-4o-judged)
- LiveBench overall: **76.2** (independent board row)
- AA Intelligence Index: **39.8** (#56/427, 87th pct) (Artificial Analysis)
- ERQA: **72.3%** (#3/20, field lead) (Artificial Analysis)
- RealWorldQA: **88.5%** (#1/31) (Artificial Analysis)
- AIME / MMLU-Pro / ARC-AGI: no additional verified public score found

Coding:

- SWE-bench Pro: **62.5%** (Qwen model card, #20/58, refined task set)
- SWE-bench Multilingual: **81.0%** (Qwen model card, #8/49, mini-swe-agent)
- LiveCodeBench v6: **91.9%** (Qwen model card, #3/50)
- NL2Repo-Bench: **48.1%** (#15/34)
- SciCode: **50.6%** (#50/296)
- Terminal-Bench 2.1: **86.1%** (Artificial Analysis independent)
- WebDev Arena: **1622 Elo** (#9/105)
- Vision2Web: **64.0%** (Qwen model card)

Long context:

- AA LCR: **79.7%** (#49/408, 88th pct) (Artificial Analysis independent)
- No MRCR/RULER number published for this checkpoint

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 76/100.** TB 2.1 86.1% (AA verified), Toolathlon 73.5%, CoWorkBench 73.9%, JobBench 55.7% (beats GPT-5.6 Sol 45.4%). Capped by Agents' Last Exam 24.3% pass@1, long-horizon computer-use 19.4%, Toolathlon/CoWorkBench on Alibaba's harnesses.
- **Reasoning: 82/100.** GPQA Diamond 92.3% (AA independent), HLE 38.0% (AA independent), IFBench 81.3%, LiveBench 76.2, AA Intelligence Index 39.8 (#56/427). Capped by HLE ~15 points behind Fable-5/GPT-6.1 tier, no AIME/ARC-AGI numbers.
- **Context window: 78/100.** 262K native (1M on production Flash via YaRN) in 200K-500K band; AA LCR 79.7% (#49/408) decent, but 100 tier needs verified 512K+ retrieval and no MRCR/RULER exists for this checkpoint — QSA hybrid attention's 7.6× prefill speedup is engineering evidence rather than measured long-range retrieval.
- **Multimodal: 78/100.** Multimodal MoE (production Flash adds image/video understanding) in image-input band, near top by Vision2Web 64.0% and WebDev Arena #9; no MMMU-Pro/CharXiv number published for Flash-Next, so cannot score higher.
- **Coding: 82/100.** SWE-bench Pro 62.5%, SWE Multilingual 81.0%, LiveCodeBench 91.9% (#3/50), TB 2.1 86.1% (AA verified) — frontier-adjacent at 6B active params. Capped by DeepSWE 58.7% (15-point gap to Opus 5.5 lead), NL2Repo 48.1%, SciCode 50.6%.
- **Cost efficiency: 94/100.** $0.15/$0.47 per MTok with $0.016 cache reads (production Flash) sits just above ~$0.10/$0.20 = 97-99 tier; Apache 2.0 weights, 8.6× prefill throughput, 50% off batch, self-hosting option.
- **Overall Score: 79/100.** Half-up mean of (76 + 82 + 78 + 78 + 82) / 5 = 79.2 → 79. Best-fit: open-weights efficiency pick — Qwen3.7-Plus-beating coding and office-agent performance at 6B active params and $0.15/$0.47; route science-heavy agent tasks (TB4.0, DeepSWE) to frontier-tier model.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official model card (Qwen Hugging Face, QwenCloud docs), independent benchmark aggregators (Artificial Analysis, BenchmarkList, BenchLM), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.