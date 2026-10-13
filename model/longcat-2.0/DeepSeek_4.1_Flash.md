# LongCat 2.0 — findings by DeepSeek 4.1 Flash

- Source: Meituan / LongCat-2.0 (`meituan/longcat-2.0`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Re-fetched the official Meituan model card (Hugging Face) and four independent
> trackers: BenchmarkList, Artificial Analysis, LLMPodium, ApX — plus the
> publisher-score mirror long-cat.org. The official card confirms the launch
> benchmark table (Terminal-Bench 2.1 70.8, SWE-bench Pro 59.5, SWE-bench
> Multilingual 77.3, BrowseComp 79.9) and adds FORTE 73.2, RWSearch 78.8,
> IFEval 90.0, WritingBench 83.8, IMO-AnswerBench 81.8 and **GPQA-diamond
> 88.9**. The first real independent score for Tau3-Banking (13.2%) is now
> available; OSWorld / AutomationBench / Claw-Eval / Toolathon / MCP-Atlas are
> still absent. Four conflicts surfaced: (1) GPQA-diamond 88.9% (official card
> and BenchmarkList) vs **78.0%** previously cited from Artificial Analysis vs
> a mis-mapped 36% on LLMPodium; (2) GDPval-AA **1,032 Elo** (BenchmarkList) vs
> the previously cited "17.8%" figure; (3) pricing $0.30/$1.20
> (OpenRouter/BenchmarkList) vs $0.75/$2.95 (Artificial Analysis / first-party)
> vs $0.20/$0.80 (ApX); (4) max output 16,384 (LLMPodium) vs the previously
> cited 128K–256K range. Independent AA composite numbers (Intelligence Index
> 19.1, HLE 33.7%, SciCode 36.3%, AA-LCR 65.0%) are unchanged. No dimension
> score moved; Overall stays 62.

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's MIT-licensed, open-weights 1.6T-total / ~48B-active sparse MoE for coding, repository-level edits, long-horizon problem solving and agentic workflows; the training run and large-scale deployment are built on AI-ASIC superpods. Marks the start of the LongCat 2.x line — 2.5 Preview is the multimodal successor.
- **Provider / access:** Open weights on Hugging Face (`meituan-longcat/LongCat-2.0`) and ModelScope, self-hostable via Transformers / vLLM / SGLang; hosted via OpenRouter (`meituan/longcat-2.0`, OpenAI-compatible Chat Completions) and the first-party LongCat API Platform (OpenAI- and Anthropic-compatible). **No OpenCode Zen Free ID.**
- **Release / knowledge:** Weights announced late June 2026 (official card chart dated 2026-06-29; AA lists release 2026-06-29) and pushed live under MIT in early July 2026; OpenRouter lists the model from 2026-07-20. Knowledge cutoff not disclosed.
- **IDs:** `meituan/longcat-2.0` (OpenRouter), `longcat-2.0` (LongCat API Platform); HF repo `meituan-longcat/LongCat-2.0`. Distinct from `longcat-2.5-preview`.
- **Context window:** 1,048,756 tokens in (AA and ApX: "1M"). Completion cap in dispute: LLMPodium reports max output 16,384; the 2026-10-01 pass reported 128,000 (LLM Reference) and 262,144 (OpenRouter). Treat the ~16K–256K output range as unconfirmed and 1M as the settled input window.
- **Modalities:** text in / text out; a reasoning model (AA confirms chain-of-thought), thinking mode toggleable (`enable_thinking`), tool calling (`tools` / `tool_choice`) and prompt caching supported; `response_format` not enforced (no JSON enforcement). Not multimodal — no image/audio/video input.
- **Pricing (as of 2026-10-11):** OpenRouter **$0.30 / $1.20 per 1M** (BenchmarkList "at a glance": $0.30 in / $1.20 out / $0.006 cached; prior report noted a 60% promo); first-party / Artificial Analysis **$0.75 / $2.95** (blended $1.3 per LLMPodium, AA blended $0.46 at 7:2:1). ApX lists $0.20/$0.80 — conflicting, treat as an outlier. No free tier, no Zen Free ID.
- **Architecture:** sparse MoE, **1.6T total parameters / ~48B activated per token** (~3% active), MIT licence, LongCat Sparse Attention (LSA) + N-gram Embedding (135B N-gram params); 38 layers, 768 experts / 12 active, hidden 8,192, vocab 163,840, 3 MTP heads (per official card + ApX).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.8%** (Meituan official model card, in-house unified harness — https://huggingface.co/meituan-longcat/LongCat-2.0; BenchmarkList rank 50/194, 75th percentile — https://benchmarklist.com/models/meituan-longcat-2.0/)
- BrowseComp: **79.9%** (official card; BenchmarkList rank 35/60, 42nd percentile)
- FORTE: **73.2**; RWSearch: **78.8** (official card / long-cat.org publisher-score mirror — https://long-cat.org/benchmarks/longcat-2-0-publisher-scores)
- Tau3-Banking: **13.2%** (Artificial Analysis via BenchmarkList, rank 80/176, 55th percentile) — first independent agentic number found this pass
- GDPval-AA: **1,032 Elo** (Artificial Analysis via BenchmarkList, rank 108/352, 70th percentile); AA-Briefcase: **739 Elo** (rubric 16.9%, rank 77/145); AA Agentic Index: **14.0** (0.14, https://apxml.com/models/longcat-2-0)
- OSWorld / AutomationBench / Claw-Eval / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (Meituan official card; BenchmarkList rank 49/468, 90th percentile) — **conflicts** with the 78.0% cited from Artificial Analysis on 2026-10-01 and with a mis-mapped 36% figure on LLMPodium (https://www.llmpodium.com/models/longcat-2-0)
- HLE: **33.7%** (Artificial Analysis via BenchmarkList, rank 65/478, 87th percentile)
- AA-LCR: **65.0%** (Artificial Analysis via BenchmarkList, rank 146/408, 64th percentile)
- IMO-AnswerBench: **81.8%** (official card; BenchmarkList rank 2/5); IFEval: **90.0**; WritingBench: **83.8** (official card; BenchmarkList rank 2/55, 98th percentile)
- Artificial Analysis Intelligence Index: **19.1** (BenchmarkList rank 176/427; AA page rounds to 19); CritPt: **2.6%** (prior 2026-10-01 figure — AA now lists CritPt "Under review", not re-verified); AA-Omniscience Accuracy **29.6%** / Non-Hallucination Rate **24.6%** (prior, not re-verified)

Coding:

- SWE-bench Pro: **59.5%** (Meituan official card; BenchmarkList rank 26/58, 56th percentile)
- SWE-bench Multilingual: **77.3%** (official card; BenchmarkList rank 16/49, 69th percentile)
- SciCode: **36.3%** (Artificial Analysis via BenchmarkList, rank 148/296, 50th percentile); AA Coding Index: **45.3** (0.45, https://apxml.com/models/longcat-2-0)
- KernelBench Hard: **10.4%**; KernelBench Mega: **0** (BenchmarkList) — weak GPU-kernel agent evidence
- LiveCodeBench / DeepSWE / SWE-Atlas: **no verified public score found**

Long context:

- Native 1M-token input window is vendor/aggregator documented (AA, ApX). AA-LCR 65.0% (rank 146/408) is the only long-context figure: a long-context reasoning composite, not retrieval accuracy. No MRCR/RULER/GraphWalks retrieval number: **no verified public score found**.

Multimodal:

- Text-in / text-out only; AA explicitly states "LongCat 2.0 is not multimodal. It only supports text input." No image, audio or video input documented.

### Normalized scores (1–100)

- **Tool use: 64/100.** Terminal-Bench 2.1 70.8% and BrowseComp 79.9% are solid, and Tau3-Banking 13.2% (55th pct) and GDPval-AA 1,032 Elo (70th pct) now land squarely in the methodology's mid band (Tau3 10–25%, GDPval 900–1200 → 50–70). But the AA Agentic Index (14.0) is low and there is still no OSWorld/AutomationBench/Claw-Eval number, so it stays mid-tier — unchanged at 64.
- **Reasoning: 68/100.** Official GPQA Diamond 88.9% is near the 90% frontier mark, AA-LCR 65.0% and IMO-AnswerBench 81.8% are strong, but HLE 33.7% is under the 40% frontier line and the Intelligence Index (19.1) and CritPt (2.6%) stay weak. GPQA 88.9% (in-house) conflicts with the prior 78.0% AA reading, so the dimension is held at 68 rather than pushed into the frontier band.
- **Context window: 95/100.** Native 1M-token input window (≥1M band = 95–100), confirmed by AA and ApX. Held at 95, not 100, because no ≥98%-at-512K retrieval benchmark is published; output cap remains disputed (16K on LLMPodium vs 128K–256K previously).
- **Multimodal: 15/100.** Text-in / text-out only; AA confirms no image, audio or video input. Unchanged.
- **Coding: 66/100.** SWE-bench Pro 59.5% (#26/58) and SWE-bench Multilingual 77.3% (#16/49) are solid mid-tier and TB2.1 70.8% supports it, but SciCode 36.3% is under the 40% mark and the AA Coding Index (45.3) is far below the 70+ frontier reference, with KernelBench Hard 10.4% / Mega 0. Unchanged at 66.
- **Cost efficiency: 94/100.** $0.30/$1.20 per 1M (OpenRouter, cache read $0.006) is budget pricing for a 1.6T MoE; the first-party route is higher at $0.75/$2.95 and ApX's $0.20/$0.80 is an unverified outlier. Unchanged at 94.
- **Overall Score: 62/100.** (64 + 68 + 95 + 15 + 66) / 5 = 61.6 → 62. Best fit: self-hosted or budget-API coding/agentic model where the 1M window matters and text-only output is acceptable.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: public internet research (Meituan official Hugging Face model card, BenchmarkList, Artificial Analysis, LLMPodium, ApX, long-cat.org publisher-score mirror); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
