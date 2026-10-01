# Qwen 3.5 Plus — findings by Muse Spark 1.3

- Source: Alibaba/Qwen 3.5 Plus (`qwen3.5-plus`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba's hosted flagship of the Qwen3.5 native vision-language series (Feb 2026; open-weights sibling 397B-A17B): hybrid linear-attention + sparse-MoE (397B total / 17B active) with 1M context, official built-in tools and adaptive tool use; on par with SOTA on reasoning, coding, agents, and multimodal.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.5-plus`, snapshots 2026-02-15 / 2026-04-20 with better agentic coding); OpenCode Zen `opencode/qwen-3.5-plus` ($0.20/$1.20, 262K cap); OpenRouter; Vercel AI Gateway; QwenChat/Qwen App. Chat + Responses-style API with reasoning, web search, Code Interpreter params.
- **Release / knowledge:** Released 2026-02-15/16 (Model Studio snapshot; alibabacloud blog 2026-02-17; modelbenchmark 2026-02-16). Knowledge cutoff Apr 2025 (modelbenchmark.io).
- **IDs:** `qwen3.5-plus` (Model Studio); `opencode/qwen-3.5-plus` (Zen catalogue / meta.json); open weights `Qwen/Qwen3.5-397B-A17B` (same-family base; Plus scores reference it per qwen35.com)
- **Context window:** 1,000,000 total (max input 991,808 / max output 65,536; thinking mode 983,616 in, 81,920 CoT) — verified via Model Studio docs page and qwencloud spec row
- **Modalities:** Text, image, and video in (native vision-language; llmdir + qwencloud rows); text out; reasoning yes (thinking mode, 8.6x/19.0x decode throughput vs Qwen3-Max per blog); tool calls yes (official built-in tools, adaptive use)
- **Pricing (as of 2026-10-01):** OpenCode Zen $0.20 per 1M input / $1.20 per 1M output (262K cap; modelbenchmark host table) — scored on this evaluated tier. Alibaba list $0.40/$2.40 (≤256K) and $0.50/$3.00 (256K-1M); cache read $0.04-$0.05; batch ~half rate.
- **Architecture:** Hybrid Gated-DeltaNet linear attention + sparse MoE, 397B total / 17B active; 201 languages/dialects; open-weights base under open license (Plus is the hosted product)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **52.5%** task success, Verified status (evals.report Qwen3.5-397B row, Feb 2026 — alias list includes qwen3.5-plus)
- TAU2-Bench: **86.7** (HuggingFace README vendor table, Qwen3.5-397B column; vs GPT-5.2 87.1, Claude 4.5 Opus 91.6)
- BFCL-V4: **72.9** (same README table; vs 63.1 / 77.5 / 72.5 / 67.7 / 68.3)
- GDPval-AA Elo: **1221** (artificialanalysis.ai article 2026-02-17; +361 over Qwen3-235B 860)
- Tool Decathlon: **38.3** (same README table); MCP-Mark: **46.1**; VITA-Bench: **49.7**; DeepPlanning: **34.3**
- Tau3-Banking: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (evals.report + qwen35.com + llmreference, base-model scores referenced by Plus; Epoch AI independent 84.8% alongside — same band)
- HLE: **28.7%** (evals.report base row; AA notes +12pp over Qwen3-235B)
- MMLU-Pro: **87.8%** (qwen35.com base-model row)
- AIME 2024-25 (OTIS mock): **86.7%** (modelbenchmark.io, Epoch AI 2026-08-07)
- HMMT Feb 2026: **87.88%** Official (evals.report)
- FrontierMath-v1: **35.5%** (modelbenchmark.io, Epoch AI 2-run); Tier-4 2025-07-01: **2.1%**
- Artificial Analysis Intelligence Index: **45** (AA article 2026-02-17; #3 open-weights behind GLM-5 50 and K2.5 47; +16 over Qwen3-235B 29)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **76.4%** resolved (evals.report + qwen35.com + llmreference rank 38/81 — base-model scores referenced by Plus)
- LiveCodeBench v6: **83.6%** (qwen35.com base-model row)
- SciCode: **42.0%** (evals.report base row)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No verified MRCR / RULER / GraphWalks score found; 1M window (991K in / 65K out, 81.9K CoT) with 256K-context agent recipes (Search Agent context-folding, WideSearch no-management) is deployment evidence only

### Normalized scores (1–100)

- **Tool use: 80/100.** TAU2 86.7 plus BFCL-V4 72.9, TB2.0 52.5% (Verified), and GDPval Elo 1221 show broad SOTA-adjacent agency; capped by Tool Decathlon 38.3 / MCP-Mark 46.1 and missing Tau3/Claw.
- **Reasoning: 86/100.** GPQA 88.4% near-frontier with HLE 28.7%, MMLU-Pro 87.8%, AIME 86.7%, HMMT 87.9%, and AA Index 45 (#3 open); capped by FrontierMath-T4 2.1% and missing LCR/CritPt/Omniscience.
- **Context window: 93/100.** 1M ceiling (991K in / 65K out, 81.9K CoT) in the ≥1M band lower third; capped by zero verified at-limit retrieval (agent recipes manage rather than measure the window).
- **Multimodal: 85/100.** MMMU 85.0 plus MathVision 88.6, MathVista-mini 90.3, and MMMU-Pro 79.0 (vendor) / 52.7% (AA vision-only) with text+image+video in show strong native vision-language; capped below audio/output-modality tiers.
- **Coding: 84/100.** SWE-Verified 76.4% plus LiveCodeBench v6 83.6% and SciCode 42.0% show strong real-world and contest coding; capped by missing Vibe/DeepSWE and the Apr-20 snapshot's unpublished delta.
- **Cost efficiency: 96/100.** OpenCode $0.20/$1.20 per 1M interpolates inside the ~$0.10/$0.20 97-99 band lower edge (Alibaba list $0.40/$2.40 would score ~93); batch halves further — near-free flagship-class pricing.
- **Overall Score: 86/100.** Mean of the five quality dims (80+86+93+85+84)/5 = 85.6; best fit as low-cost 1M-context multimodal agent default; escalate to 3.6-Plus for newer agentic coding.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-01
- Method: public internet research (Alibaba Cloud Model Studio qwen3.5-plus docs + pricing pages, alibabacloud.com launch blog 2026-02-17, qwencloud.com + llmdir.com spec rows, modelbenchmark.io 7-benchmark Epoch-AI table + 23-host price table, evals.report 22-score base table with Plus alias, HuggingFace README vendor comparison table, artificialanalysis.ai 2026-02-17 article, qwen35.com + llmreference.com compilations, benchlm.ai MMMU-Pro board); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
