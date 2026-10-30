# MAI-Thinking-1 — findings by Qwen 3.8 Max

- Source: Microsoft AI (`mai-thinking-1`; id `microsoft/mai-thinking-1`; AA — no page, 404)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** Microsoft AI's first from-scratch LLM and first dedicated reasoning model — a closed 35B-active / ~1T-total sparse MoE that punches above its active size on math (AIME 2025 97.0%) and reaches blind human-eval parity with Claude Sonnet 4.6 (+0.07), at a 256K context. But every number is vendor-published with zero independent measurement (Artificial Analysis has no page), GPQA Diamond 84.2% and SWE-bench Verified 73.5% are mid-tier, Terminal-Bench 2.0 at 46.0% is an agentic dealbreaker, and Microsoft publishes no token price. Scored Overall 69 (div +1.9 vs curated 67.1).

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's first in-house large language model and first dedicated reasoning model — a sparse mixture-of-experts trained from the ground up on clean data with no third-party distillation, aimed at enterprise reasoning, long-context analysis, math, and code.
- **Provider / access:** Closed-weight, proprietary. Public preview on **Microsoft Foundry** since August 12, 2026 via a Chat Completions-compatible endpoint (function calling, developer instructions, structured output); billing flows through an Azure subscription. No Hugging Face release, GGUF, or self-host path. OpenRouter, Fireworks AI, and Baseten were named as planned distribution partners at the June 2 launch but none are live. Artificial Analysis has **no model page** (no measurable public API).
- **Release / knowledge:** Announced at Microsoft Build on **June 2, 2026** (part of a seven-model MAI family); private preview until public preview on **August 12, 2026**. Training cutoff: model card lists July 2025, but the technical report shows source collection into early 2026 (web HTML to Sep 2025, PDFs to Dec 2025, books/journals to Mar 2026).
- **IDs:** id `microsoft/mai-thinking-1`; no AA slug (`mai-thinking-1` 404s); Foundry access `aka.ms/mai-thinking-1-access`.
- **Context window:** **256,000 (256K)** per the technical report, meta, and independent review; max output **25,000**. CONFLICT: Microsoft's official Azure Labs marketing page says "200K-token context" — resolved to 256K (technical report governs), flagging the 200K figure.
- **Modalities:** Text in → Text out. Not multimodal — vision/audio/video are separate MAI models (MAI-Image 2.5, MAI-Transcribe-1.5, MAI-Voice-2).
- **Pricing:** **No public rate card.** Microsoft uses only qualitative language ("mid-weight price," "cost-efficient," "substantially lower cost") with zero dollar figures across the launch post, model page, and technical report; preview billing is undisclosed via Azure. The folder's "$2.00 in / $8–10 out" is UNVERIFIED.
- **Architecture:** Sparse MoE, 34.7B active / 962B total (base), 78 layers, 8 of 512 experts selected per routed token. Trained from scratch on 30T pre-training + 3.55T mid-training tokens on 8,000 GB200 GPUs (RL phase: 4,600 GB300s), with no third-party-model distillation.

### Raw benchmarks found

> **Provenance:** ALL numbers are **Microsoft-vendor** (technical paper) — averages across four runs at temperature 1, top-p 0.97, using a 256K context for agentic-coding tests. Competitor values come from those vendors' model cards, not independent reproduction. There is **no independent measurement** and no AA page. The technical paper itself concedes the model "does not lead the field."

- **Agent / tool use:**
  - Terminal-Bench **2.0 = 46.0%** — WEAK; trails Sonnet 4.6 (59.1%) by 13 pts and GPT-5.4 (75.1%) by 29 pts. The review calls this "a dealbreaker for terminal automation."
  - BFCL v3 (tool calling) = **72** — mid (Sonnet 4.6: 76).
  - Supports function calling, tool choice, structured output, and developer instructions out of the box.
- **Reasoning / knowledge:**
  - AIME 2025 = **97.0%** — elite; beats Sonnet 4.6 (95.6%), below Opus 4.6 (99.8%). NOTE: Microsoft's Azure Labs page says 95.9% — a marketing-vs-technical-report conflict; resolved to 97.0.
  - AIME 2026 = **94.5%** — trails Kimi K2.6 (96.4%) and GLM-5.1 (95.3%).
  - GPQA Diamond = **84.2%** — mid-tier; below Sonnet 4.6 (89.9), Opus 4.6 (91.3), GPT-5.4 (92.8), Kimi K2.6 (90.5), DeepSeek V4 (90.1); ≈ GLM-5.1 (85.2).
  - MMLU-Pro = 85 (Sonnet 87); SimpleQA Verified = 31 (Sonnet 29); CyberSecEval Instruct = 63 (Sonnet 62).
  - AA Intelligence Index = **N/A** (no page, no independent scoring).
- **Coding:**
  - LiveCodeBench v6 = **87.7%** — strong; below DeepSeek V4 (93.5) and Kimi K2.6 (89.6).
  - SWE-bench Verified = **73.5%** — mid; below Sonnet 4.6 (79.6), Opus 4.6 (80.8), Kimi K2.6 (80.2), DeepSeek V4 (80.6).
  - SWE-bench Pro = **52.8%** — ≈ Opus 4.6 (53.4, the comparison Microsoft highlights); below GPT-5.4 (57.7), Kimi K2.6 (58.6), DeepSeek V4 (55.4), GLM-5.1 (58.4).
- **Long context:** 256K window; GraphWalks (≤128K) = **90** (Sonnet 4.6: 96).
- **Human preference (blind side-by-side, Surge raters, 1,276 tasks, 30% multi-turn):**
  - vs Claude Sonnet 4.6: **49% win / 6% tie / 45% loss**, preference delta **+0.07 ± 0.06** (narrow but real; strongest on conciseness/relevance +0.11 and style/tone +0.08; statistically tied on instruction following, factuality, completeness).
  - vs Claude Opus 4.6: **43% win / 5% tie / 52% loss**, delta **−0.07 ± 0.06** — a net LOSS. meta's "43% human win rate vs Opus 4.6" is the win share of that net loss, not a victory.
- **Speed / cost:** No AA measurement (no public API page); output speed, latency, and token price are all undisclosed.

> **Meta-verification:** meta.json independently checked, not inherited. CONFIRMED: Microsoft AI's first in-house reasoning model; 35B-active/~1T-total sparse MoE (technical report: 34.7B/962B); closed and text-only; SWE-bench Verified 73.5%; GPQA 84.2%; AIME 2025 97.0%; 30T pre-training tokens; no distillation; Foundry public preview Aug 12 2026. CORRECTED / FLAGGED: (1) Context — official Azure Labs page says 200K, technical report + meta + review say 256K; resolved to 256K. (2) AIME 2025 — Azure Labs marketing 95.9% vs technical paper 97.0%; resolved to 97.0. (3) "Matches Opus 4.6" refers to **SWE-Bench Pro** (52.8 vs 53.4), NOT SWE-bench Verified (73.5). (4) The "43% vs Opus 4.6" is a net loss (−0.07); the aggregate win is vs Sonnet 4.6 (+0.07). (5) No public rate card — the $2/$8–10 note is unverified. (6) AA has no page → zero independent measurement; all figures vendor. (7) Terminal-Bench 2.0 46.0% is a genuine agentic weakness. Kept DISTINCT from mai-code-1-flash / mai-code-1.1-flash / mai-experimental-test (separate queue models) and from the open-weight Phi line — no reattribution.

### Normalized scores (1–100)

- **Tool use: 66/100.** Agentic is the weakest area — Terminal-Bench 2.0 46.0% trails the frontier by 13–29 points and BFCL v3 tool calling is mid (72); function calling / structured output are supported, but there is no independent agentic evidence.
- **Reasoning: 76/100.** Elite mathematics (AIME 2025 97.0%, AIME 2026 94.5%) lifts it, but GPQA Diamond 84.2% is mid-tier and everything is vendor-published with no AA Index or independent corroboration.
- **Context window: 77/100.** 256K (technical report) with a 25K max-output cap; the official page's 200K claim is flagged and GraphWalks ≤128K 90 sits below Sonnet 4.6's 96.
- **Multimodal: 50/100.** Text-only — other modalities are separate MAI models.
- **Coding: 76/100.** LiveCodeBench v6 87.7% is strong and SWE-bench Pro 52.8% ≈ Opus 4.6, but SWE-bench Verified 73.5% is mid and Terminal-Bench 2.0 46.0% is weak; all vendor-reported.
- **Cost efficiency: 62/100.** No public token price at all (qualitative "mid-weight price" only), closed-weight, Foundry-only, Azure-undisclosed billing — cost efficiency cannot be demonstrated despite the positioning. (Scored but NOT counted toward Overall.)
- **Overall Score: 69/100.** Half-up mean of the five quality dims (66+76+77+50+76)/5 = 69.0. Divergence **+1.9** vs the curated queue value 67.1 — the elite AIME and 256K context edge out the mid GPQA/SWE-bench, weak agentic, and no-independent-measurement drags. Cost efficiency excluded from the mean per methodology.

---

## Signature

- **Provided by:** Qwen 3.8 Max (`qwen/qwen-3.8-max`)
- **Method:** Fresh independent public web research on 2026-10-30 — Microsoft Azure Labs / Foundry model page, the MAI-Thinking-1 technical report (via review), a detailed third-party benchmark review (aireiter), Microsoft Build 2026 coverage, and model-comparison articles; ≥4 independent searches/fetches. AA has no page (404 confirmed twice), so all quality figures are vendor-sourced and labeled as such. meta.json verified against primary sources, not inherited; the 200K-vs-256K context, 95.9-vs-97.0 AIME, SWE-Pro-vs-Verified, and win-vs-loss human-eval points were reconciled. No peer findings files read (zero-influence rule).
- **Future sources:** an Artificial Analysis page with independent Index/Speed/Cost measurement; a published Microsoft token rate card; live OpenRouter/Fireworks/Baseten endpoints; independent reproduction of SWE-bench / Terminal-Bench / GPQA.
