# Kimi K3.1 Pro — findings by Solar Mini 4

> Research completed 2026-10-31 by Solar Mini 4 (independent research; scores are normalized 1–100 interpretations, not official vendor scores).

- **Source:** Moonshot AI / Kimi K3.1 Pro
- **Date:** 2026-10-31 (UTC)
- **Overview & methodology:** `../../model-comparison.md` · **Log:** `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro — Moonshot AI's flagship 3T-class model; first K3.1-series release
- **Short description:** Post-trained successor to Kimi K3 with much larger post-training compute. Best-in-class long-horizon coding (Kimi Code Bench 3.0 Long-horizon 61.2%), 3D creation, financial research and agentic work. Kimi also ships a `Kimi K3.1 Pro Highspeed` tier (2–3x speed).
- **Provider / access:** Moonshot AI (Kimi.ai, Kimi Work, Kimi Code, Kimi API); `Kimi K3.1 Pro Highspeed` on Kimi.ai/API. OpenRouter route: `moonshotai/kimi-k3.1-pro`.
- **Release / knowledge:** Released Oct 23, 2026. Kimi says full weights ship by Nov 4, 2026 (not yet as of Oct 31). Knowledge cutoff: not published.
- **IDs:** `moonshotai/kimi-k3.1-pro`; OpenRouter `moonshotai/kimi-k3.1-pro`.
- **Context window:** 1M total. Max output: LLMBenchmark lists 944K; AA lists 1M window only.
- **Modalities:** Text + image input; video input (LLMBenchmark); text output. Tool calls, structured output, JSON mode supported; reasoning on by default; web search supported (no list price).
- **Pricing (2026-10-31):** $2.00 per 1M input, $10.00 per 1M output; cached input $0.20 (90% discount, AA); no cache-write price published. Kimi index subscribers: monthly index $15.00 out.
- **Architecture:** Proprietary. Kimi calls it a "3T-class open-weight model" (weights shipping Nov 4, 2026); AA lists proprietary, no public weights. AA: 2.8T total parameters.

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench 2.1: **87.4–87.5%** estimated (BenchGap/Vals AI, low-confidence) — near frontier (~88%+ → 90–100).
- Terminal-Bench 4.0: **67.2%** measured (AA max-effort; vendor: 65.7% vs GPT-6 Astra 58.2%, Claude Opus 5.5 66.4%).
- SWE-bench Verified: **94.4%** estimated (medium); Vals SWE-bench 92.6% estimated.
- SWE-bench Pro: **76.1%** estimated; DeepSWE: **75.5%** measured.
- Kimi Code Bench 3.0 Long-horizon (internal): **61.2%** (K3 was 55.95%) — vendor-reported.
- Coding Agent Index: **77.9%** estimated; Agentic Index: **68.0%** estimated; CyberGym: **96.3%** estimated (low conf.).
- τ²-bench: **98.9%** estimated (medium); OSWorld-Verified 86.7% estimated; OSWorld 2.0/2.1 **79.6%** measured.
- Toolathlon-Verified: **80.2%** estimated (low).

**Reasoning / knowledge:**
- AA Intelligence Index (v5.0): **46** measured (#21/58, above median 37) — moderate, not frontier.
- GPQA Diamond: **94.2%** measured (AA) / 92.4% estimated (AA-GPQA); Vals GPQA Diamond 93.6% estimated.
- HLE (no tools): **52.5%** measured; HLE with tools: **70.0%** measured.
- CritPt: **24.6%** measured — severe weakness.
- MMLU: **95.0%** estimated; MMLU-Pro: **85.9%**; MMLU-Redux **97.1%**; AA-MMMU-Pro **83.9%** measured; MMMU-Pro **84.1%** measured.
- SciCode: **60.8%** measured (AA-SciCode).
- LongBench v2: **63.3%** estimated; LRCR: **86.3%** estimated; Hermes Bench **73.3%**; Hermes Index **44.9%** estimated.
- Video-MME (with subs): **92.0%** estimated (high); VideoMMMU **88.1%**; MLVU (M-Avg): **90.1%** estimated (high); CharXiv **93.4%** measured.
- ZeroBench: **39.0%** measured — weak factual retention.

**Coding:**
- SWE-bench Verified 94.4% estimated; DeepSWE 75.5% measured; SWE-Marathon **51.7%** measured.

**Long context / cost / speed:**
- 1M context; max output 944K (LLMBenchmark).
- Speed: 28 t/s (LLMBenchmark/OpenRouter) — slow; TTFT 2.7–5.8s.
- Cost: $2.00/$10.00 per 1M; $3.68 per AA-index task; 90% cached-input discount → $0.20/M.

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 87.4–87.5% estimated (near frontier ~88%+ → 90–100); SWE-bench Verified 94.4% estimated; DeepSWE 75.5% measured; OSWorld 79.6–86.7%. Capped by CritPt 24.6% and AnalystAgent 38.8%.
- **Reasoning: 84/100.** GPQA Diamond 94.2% measured and HLE 52.5% measured meet the frontier bar (GPQA 90%+, HLE 40%+ → 90–100); AA index 46 and CritPt 24.6% keep it out of the top band.
- **Context window: 96/100.** 1M input — ≥1M tier (95–100); 100 only with ≥98% retrieval at 512K+ (not verified).
- **Multimodal: 82/100.** Text + image + video input; text output — +video tier (75–90).
- **Coding: 89/100.** SWE-bench Verified 94.4% estimated (frontier); TB2.1 87.4% estimated; TB4.0 67.2% measured (harder newer benchmark); Kimi Code Bench 3.0 Long-horizon 61.2% (internal).
- **Cost efficiency: 76/100.** $2.00/$10.00 per 1M — between $2/$6 (84) and $3/$15 (60); AA-index-task cost $3.68.
- **Overall Score: 88/100.** (88+84+96+82+89)/5 = 439/5 = 87.8 → half-up 88. Best fit: frontier open-weight (announced) agentic coding model; strong on SWE-bench/agentic boards, mid on AA intelligence index.

## Signature

- Provided by: **Solar Mini 4 (Solar_Mini_4)** — 2026-10-31
- Method: independent public web research (2026-10-31); normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Kimi blog — Introducing Kimi K3.1 Pro](https://www.kimi.ai/blog/kimi-k3-1-pro)
  - [Artificial Analysis — Kimi K3.1 Pro](https://artificialanalysis.ai/models/kimi-k3-1-pro)
  - [BenchGap — Kimi K3.1 Pro benchmark scores](https://benchgap.net/model/kimi-3-1-pro)
  - [LLMBenchmark.ai — Kimi K3.1 Pro](https://llmbenchmark.ai/models/kimi-k3-1-pro)
  - [Kimi pricing](https://moonshot.ai/pricing)

## Changelog

- 2026-10-31: created by Solar Mini 4 via independent research; spans all five quality dims; estimate-vs-measured distinctions noted; Kimi "open-weight" claim vs AA "proprietary" conflict documented.
