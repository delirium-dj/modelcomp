# Qwen 3.8 Flash — findings by DeepSeek 4.1 Flash

- Source: Alibaba Qwen/Qwen3.8 Flash (`qwen3.8-flash`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-09-23); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Newly confirmed: Hugging Face **Qwen3.8-Flash-Next** card rows — SWE-bench Pro **62.5%**, SWE Multilingual 81.0%, DeepSWE 1.1 **58.7%**, NL2Repo 48.1%, **LiveCodeBench v6 91.9%**, **Toolathlon-Verified 73.5%**, JobBench 55.7%, CoWorkBench 73.9%, Agents' Last Exam 51.2%, AndroidWorld 84.5%, OSWorld 2.0 19.4%, GPQA Diamond **91.7%**, HLE 35.9%, IFBench 81.3%, CharXiv 90.6%/84.6%, MathVision 90.6%/95.7%, RealWorldQA 88.5%, LVBench 76.6%; Artificial Analysis **Intelligence Index 39.8 (#7/118 open-weights)**, GDPval-AA **1648 Elo / 56.6%**, AA-SciCode 50.6%, AA Coding Index 73.0%, AA-MMMU-Pro 79.8%, AA-LCR 79.7%, CritPt 11.1%, AA-HLE 38.0%; BenchLM overall **64.23 (#37/889)**.
> **Conflicts surfaced:** (1) **AA Intelligence Index** — the prior file's **55.8** is a **v4.1.1-era** number; the current **v4.3.2 rebase reads 39.8**, and the "Qwen is 2× faster" claim also died (55.2 vs GLM's 51.4 tok/s). (2) **Context** — 262,144 native (open checkpoint) vs 1M on the hosted route. (3) **Licence** — the weights are public under **Qwen Community License 1.0** (not OSI open source); the 27B sibling is Apache-2.0. (4) **Hosted vs open** — `qwen3.8-flash` is the managed tier **based on** the Flash-Next checkpoint; benchmark rows are the checkpoint's.
> **No dimension change:** all five quality dims remain supported; Overall stays **88**.
> Sources: https://huggingface.co/Qwen/Qwen3.8-Flash-Next · https://benchlm.ai/models/qwen3-8-flash-next · https://llm-stats.com/models/qwen3.8-flash · https://codersera.com/blog/qwen-3-8-flash-complete-guide-2026/

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's cheap high-volume Qwen 3.8 tier, released 2026-08-26. `qwen3.8-flash` is the managed QwenCloud/OpenRouter endpoint; Hugging Face describes it as the official production version **based on the open-weight Qwen3.8-Flash-Next checkpoint**, which previews the Qwen 4 architecture (Gated DeltaNet + Qwen Sparse Attention hybrid, gated residuals, n-gram embeddings, Muon optimizer). Not an alias of Qwen3.8-Max — the backbone is roughly 20× smaller.
- **Provider / access:** Alibaba Cloud / Qwen API (`qwen3.8-flash`; also via Novita) and open weights `Qwen/Qwen3.8-Flash-Next` on Hugging Face. Chat Completions compatible; `reasoning_effort` low/medium/xhigh.
- **Release / knowledge:** 2026-08-26 (hosted Flash + Flash-Next); weights pushed 2026-08-24. Knowledge cutoff not published.
- **IDs:** `qwen3.8-flash` (hosted, proprietary terms); open checkpoint `Qwen/Qwen3.8-Flash-Next` (Qwen Community License 1.0); Zen route `opencode/qwen-3.8-flash`. No Free ID verified → cost scored on paid pricing.
- **Context window:** 1,000,000 tokens on the hosted route (max output 131,072 / measured 131.1K); the open checkpoint is 262,144 native, extensible (~1M with context extension).
- **Modalities:** text + image + video in → text out (AA, OpenRouter and the card agree); no audio, no non-text output. Reasoning yes; tool calls.
- **Pricing (as of 2026-10-11):** $0.15 in / $0.47 out per 1M tokens, cached input $0.016 per 1M (Novita listing; 89% cache discount) — an order of magnitude under the Max tier.
- **Architecture:** sparse MoE — 125B main network + 51B n-gram embeddings + 4B MTP head (≈180B on disk), **6B active per token** (512 experts, 10 routed + 1 shared; 48 layers); Qwen Community License 1.0.

### Raw benchmarks found

Agent / tool use:

- Toolathlon-Verified **73.5%**; JobBench **55.7%**; CoWorkBench 73.9%; Agents' Last Exam 51.2%; AndroidWorld 84.5%; OSWorld 2.0 **19.4%**
- GDPval-AA **1648 Elo / 56.6% normalized** (AA); Tau3-Banking 45.4% (prior BenchmarkList)
- Terminal-Bench 2.1: **no verified public score found** for this checkpoint
- MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (card) / 92.3% (AA); HLE **35.9%** (card) / 38.0% (AA); IFBench 81.3%
- Artificial Analysis Intelligence Index **39.8 (#7/118 open-weights, v4.3.2)**; AA-Omniscience index −9.7 (hallucination 45.3%)
- AA-LCR 79.7%; CritPt 11.1%; AA-SciCode 50.6%
- MathVision 90.6% (95.7% w/ Python); ERQA 72.3%; LVBench 76.6%; CharXiv 90.6% (84.6% no tools); RealWorldQA 88.5%

Coding:

- SWE-bench Pro **62.5%** (card); SWE Multilingual 81.0%; DeepSWE 1.1 **58.7%**; NL2Repo 48.1%
- LiveCodeBench v6 **91.9%** (card); AA Coding Index 73.0%; AA-SciCode 50.6%
- SWE-bench Verified: **no verified public score found** for this checkpoint; WebDev Arena 1622 (prior)

Long context:

- AA-LCR 79.7% is the strongest long-context figure; no MRCR/RULER retention at 512K+ published; AA flags the model "very verbose" (240M output tokens vs 140M median).

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval-AA 1648 Elo is near the 1750+ frontier reference and Toolathlon 73.5% / AndroidWorld 84.5% confirm breadth; capped by the missing Terminal-Bench 2.1 row and a weak OSWorld 2.0 (19.4%).
- **Reasoning: 88/100.** GPQA Diamond 91.7–92.3% clears the 90%+ reference and AA index 39.8 is top-7 open-weights; HLE 35.9–38.0% sits under the 40% marker and CritPt 11.1% is mid — the floor of the top band.
- **Context window: 95/100.** 1M hosted input (262K native) is the ≥1M tier; held at the floor for missing 512K retention evidence, and the 131K output cap is the practical constraint on long agent runs.
- **Multimodal: 85/100.** Text + image + video in → text out is the `+video/PDF in = 75–90` band, backed by MathVision 90.6%, CharXiv 90.6% and RealWorldQA 88.5%; below 90 for no audio input or non-text output.
- **Coding: 85/100.** LiveCodeBench v6 91.9%, SWE Multilingual 81.0%, SWE-bench Pro 62.5% and DeepSWE 58.7% are strong for a Flash tier; capped by SciCode 50.6% (under 55%), no SWE-bench Verified row, and no independent agentic-coding leaderboard entry.
- **Cost efficiency: 96/100.** $0.15 in / $0.47 out with $0.016 cached input lands in the ~$0.10/$0.20 ≈ 97–99 zone (a hair above on output); paid-only, no $0 route verified.
- **Overall Score: 88/100.** (88 + 88 + 95 + 85 + 85) / 5 = 88.2 → **88**. Best fit: outstanding price-per-capability for high-volume agentic and coding work at 1M context when per-token spend matters more than the last few benchmark points.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: deep second-pass public internet research (Hugging Face Qwen3.8-Flash-Next card, BenchLM model page + per-eval results, Artificial Analysis, LLM-Stats, Codersera). Independent AA rows were promoted over prior BenchmarkList-only rows; the index rebase, context and licence facts are surfaced rather than hidden. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
