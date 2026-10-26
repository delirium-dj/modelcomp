# GPT-5.2 Codex — findings by Qwen 3.8 Max

- Source: OpenAI (`gpt-5.2-codex`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Codex
- **Short description:** OpenAI's December-2025 **agentic coding** model — the code-tuned sibling of GPT-5.2, locked to the exclusive **xhigh** reasoning effort with **native context compaction** for long-horizon autonomous work. Fast decode (130 tok/s) but a punishing "thinking" latency (TTFT ~124s); a launch SOTA on **SWE-Bench Pro (55.6%)**, now **deprecated for GPT-5.3-Codex**.
- **Provider / access:** OpenAI, served via the **Responses API**; on OpenCode Zen as `opencode/gpt-5.2-codex`; **paid only, no free lane**. Proprietary / closed weights, parameters undisclosed. AA tracks it as "GPT-5.2 Codex (Xhigh)."
- **Release / knowledge:** Released **December 11, 2025** (same day as the GPT-5.2 family); knowledge cutoff **August 31, 2025**.
- **IDs:** `opencode/gpt-5.2-codex`; AA `gpt-5-2-codex` (xhigh reasoning variant).
- **Context window:** **400K total** (272K max input, **128K max output**) — extended for long-horizon sessions by **native context compaction** (history summarization).
- **Modalities:** AA independently confirms **text + image in → text out**; reasoning (xhigh). No video/audio; text-only output.
- **Pricing (as of 2026-10-26):** **$1.75 / $14.00** per 1M in/out; **$0.175 cached read**, **90% cache discount**; blended ~$1.87/1M. AA: input "better than average" (median $2.00), output "somewhat expensive" (median $10.00).
- **Architecture:** Closed weights; parameters undisclosed. A code-tuned GPT-5.2 variant fixed at the **xhigh** reasoning effort (extended chain-of-thought) plus native compaction for agentic coding.

### Raw benchmarks found

> Independent anchors: Artificial Analysis (deprecation-flagged, 3/4-unit estimate) plus the Terminal-Bench and swebench.com community harnesses. SWE-bench Verified / SWE-Bench Pro figures are OpenAI launch claims. GPT-5.2-Codex is deprecated (AA suggests GPT-5.3-Codex), so AA runs only the default 10k workload.

Independent (current, rebased):

- **AA Intelligence Index v4.3.2: 29 (Estimated), #106/221** — **above the comparable median of 28** ("above average in intelligence"); **3 of 4** units, a moderate-signal estimate. AA speed **129.5 tok/s** (#37/188, "**notably fast**" vs 83; **4/4** units). **TTFT 123.82s** — extremely high (median 3.75s), reflecting the xhigh "thinking" budget.
- **Terminal-Bench 2.0 (Deep Agents harness): 66.5% ± 3.1** (Jan 14, 2026) — an independent agentic-terminal anchor.
- **swebench.com mini-SWE-agent leaderboard** lists GPT-5.2 Codex in the top 10, alongside GPT-5.2 high at **72.80** — a standardized community harness.

Vendor (OpenAI, at launch):

- **SWE-bench Verified 74.5%** ("a significant improvement over GPT-5"); **SWE-Bench Pro 55.6%** — the **highest publicly claimed score at launch** (four-language, contamination-resistant); code-refactoring **51.3%**.
- **Native context compaction** for long-horizon agentic coding. For scale, the successor GPT-5.3-Codex (Feb 5, 2026) now leads SWE-Bench Pro / Terminal-Bench, and current SWE-Verified leaders reach ~95.6%.

> Provenance: AA (29, 3/4-unit est., above median 28), Terminal-Bench 2.0 (66.5%) and the swebench mini-SWE-agent listing are independent; SWE-bench Verified 74.5% / SWE-Bench Pro 55.6% / refactor 51.3% are vendor launch claims. The model is deprecated (superseded by GPT-5.3-Codex ~8 weeks later), so AA runs only the 10k workload and the Index is an estimate.
> Meta verification: accurate — `opencode/gpt-5.2-codex` on Zen ✓, 400K/128K (272K in) ✓ (AA confirms 400K total), $1.75/$14 + $0.175 cached / no free lane ✓ (AA confirms), native context compaction ✓, Responses API / paid only ✓, text+image in → text out ✓ (AA confirms). Enriched from AA: Index **29 (est, #106/221, above median 28)**, **129.5 tok/s (4/4)**, **TTFT 123.82s**, knowledge cutoff **Aug 31 2025**, released **Dec 11 2025**, **deprecated → GPT-5.3-Codex**.

### Normalized scores (1–100)

- **Tool use: 81/100.** Purpose-built agentic coder: **native context compaction** for long-horizon autonomous sessions, the Responses API, and an independent **Terminal-Bench 2.0 66.5%** (Deep Agents). Held below the elite-agentic band (82–85) by deprecation and the punishing **~124s TTFT** (xhigh thinking) that makes interactive tool-loops slow — though it is designed for autonomous rather than interactive work.
- **Reasoning: 78/100.** An xhigh reasoning model, but **coding-narrowed** — the general **AA Index 29 is only just above the median 28** (and a 3/4-unit estimate). Deep extended thinking suits hard code problems, but general reasoning is modest next to the GPT-5.2-Pro sibling's FrontierMath record, and the line is deprecated.
- **Context window: 82/100.** **400K total** (272K in / **128K out**) — the 400K band — materially extended for long-horizon work by **native compaction**, but still below the 500K–1M tiers and not independently long-context-retrieval-validated.
- **Multimodal: 78/100.** AA verifies **text + image** in → text out (useful for reading screenshots, diagrams, and UI in coding workflows). No video/audio, text-only output — the image-input tier.
- **Coding: 82/100.** The model's raison d'être: launch **SWE-bench Verified 74.5%** and a then-record **SWE-Bench Pro 55.6%** (vendor), corroborated by independent **Terminal-Bench 2.0 66.5%** and a top-10 swebench mini-SWE-agent listing, with an above-median AA Index. Docked because it is **deprecated** — the successor GPT-5.3-Codex and current leaders (SWE-Verified ~95.6%) now far exceed it.
- **Cost efficiency: 68/100.** **$1.75/$14** with a **90% cache discount** and fast 130 tok/s decode; but the $14 output is "somewhat expensive" (median $10) and the **xhigh reasoning budget burns large output-token volumes** (~124s TTFT), so real cost-per-task is high. Deprecated. Not counted toward Overall.
- **Overall Score: 80/100.** Mean of Tool 81 + Reasoning 78 + Context 82 + Multimodal 78 + Coding 82 = 401 / 5 = 80.2 → 80. Best fit: a **deep-thinking agentic coding specialist** — native compaction, launch-SOTA SWE-Bench Pro, fast decode — for autonomous long-horizon code tasks where a ~2-minute thinking latency is acceptable; but it is **deprecated**, so adopt **GPT-5.3-Codex** (or a current leader) for new work. **Divergence note:** curated queue 79.7 vs my 80 → **+0.3** (essentially aligned). The strong coding/tool profile (82/81) and 400K+compaction context balance the coding-narrowed reasoning (78), image-only multimodal (78), and deprecation — landing right on the curated score.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-26
- Method: public internet research (Artificial Analysis `gpt-5-2-codex` xhigh page, deprecation-flagged with estimated Index; tbench.ai Terminal-Bench 2.0 leaderboard; swebench.com mini-SWE-agent leaderboard; OpenAI / aiweekly / llm-stats launch coverage for SWE-bench Verified 74.5% and SWE-Bench Pro 55.6%; OpenCode Zen listing for pricing/context/compaction); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
