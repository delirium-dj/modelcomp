# Claude Opus 4.6 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Opus 4.6 (`anthropic/claude-opus-4.6`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-11)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Official Anthropic launch news + **system card** confirm: release **2026-02-05**, first Opus-class **1M-token context** (beta), **128K output** (300K Batch beta), $5/$25. System-card table: **SWE-bench Verified 80.8%** (80.84% avg of 25 trials), SWE Multilingual 77.83%, **Terminal-Bench 2.0 65.4%**, τ²-bench Retail **91.9%** / Telecom **99.3%**, MCP-Atlas **59.5% max / 62.7% high**, **OSWorld-Verified 72.7%**, ARC-AGI-2 68.8%, **GPQA Diamond 91.3%**, **MMMU-Pro 73.9%**, Vending-Bench 2 100%, AIME 2025 99.8%, GraphWalks (>128k parents) 95.4%, **MRCR v2 8-needle (1M) 76%**. Independent: LLM-Stats score **44.5 (#44)**; BenchLM **61.13** (vs GLM-5.2) / 62.12 / 68.52 (blog) — version spread; Vals accuracy 64.19%; BrowseComp 83.7%.
> **Conflicts surfaced:** (1) **SWE-bench Pro** reads **53.4% (prior file)** vs **74% (BenchLM blog)** — the 74 is anomalous (the BenchLM SWE-bench Pro leaderboard omits Opus 4.6 from its top 16) and is treated as a mislabeled row. (2) **MMMU-Pro** — system card **73.9% (no tools)** vs prior file's **77.3%**. (3) **GPQA Diamond** — 91.3% (card) vs 89.2% (BenchLM) vs 84.0% (AA variant). (4) **AA Intelligence Index 26** is the *estimated non-reasoning* variant, so it understates the adaptive-thinking default. (5) **Aggregator outliers**: aiMLAPI lists 200K ctx / $6.5–$32.5; claude5.ai lists $15/$75 and GPQA 88.5% — both stale/wrong and excluded. (6) **>200K pricing** — launch premium $10/$37.50 was replaced by full-1M standard pricing in current docs.
> **No dimension change:** all five quality dims remain supported; Overall stays **89**.
> Sources: https://www.anthropic.com/news/claude-opus-4-6 · https://www-cdn.anthropic.com/0816a4f29610cb87da10f40c6f78b499a7bf722f.pdf · https://platform.claude.com/docs/en/models/opus-4-6/overview · https://benchlm.ai/models/claude-opus-4-6 · https://llm-stats.com/models/claude-opus-4-6 · https://www.vals.ai/models/anthropic_claude-opus-4-6

## Model card

- **Name:** Claude Opus 4.6 (API id `claude-opus-4-6`; no "Free" tier exists)
- **Short description:** Anthropic's 2026-02-05 frontier Opus — a hybrid reasoning model tuned for agentic coding, computer use and professional knowledge work. First Opus-class model with a 1M-token context window (beta at launch), and the reference point for "Opus-class price, near-top coding".
- **Provider / access:** Anthropic — Claude Developer Platform API, Claude apps, AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Messages-style API.
- **Release / knowledge:** Released 2026-02-05. Knowledge cutoff 2025-05 (reliable) / 2025-08 (training data).
- **IDs:** `claude-opus-4-6`; Bedrock `anthropic.claude-opus-4-6-v1`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens; max output **128,000 tokens** (300,000 via Batch-API beta header).
- **Modalities:** text and vision (and document) in, text out; reasoning yes (adaptive thinking, four effort levels); tool calls and JSON/structured output yes.
- **Pricing (as of 2026-10-16):** $5.00 / 1M in, $25.00 / 1M out, $0.50 cached input (10%); 5m cache write $6.25, 1h $10.00; Batch −50%; US-only inference 1.1×; full 1M context now at standard pricing (the launch >200K premium is gone).
- **Architecture:** proprietary, closed, API-only; no open weights.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified (computer use): **72.7%** (system card, 5-run avg); Terminal-Bench 2.0: **65.4%**
- GDPval-AA: **1606–1619 Elo** (Anthropic/BenchmarkList); BrowseComp: **83.7%** (86.8% multi-agent harness)
- MCP Atlas **59.5% max / 62.7% high effort**; CyberGym 66.6%; DeepSearchQA 73.7%; τ²-bench Retail 91.9% / Telecom 99.3%; APEX-Agents 48.4%; Vending-Bench 2 100%
- BigLaw Bench (Harvey agentic legal): **90.2%**; Claw Bench 100 (rank 1/37)
- Tau3-Banking: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.3%** (system card) vs 89.2% (BenchLM GPQA-D) / 84.0% AA variant
- HLE: **53.0%** with tools (40% w/o tools); ARC-AGI-2 **68.8%**; FrontierMath v2 T1–3 40.7% (65.965% BenchLM variant) / Tier 4 22.9%; AIME 2025 99.8%
- BenchLM ECI: 137.91; BenchLM overall 61.13 (vs GLM-5.2) / 62.12 (#45/889) / 68.52 (blog); LLM-Stats score 44.5 (#44); Vals accuracy 64.19%
- AA Intelligence Index 26 (estimated, non-reasoning variant); AA-Omniscience accuracy 45.8% / hallucination 80.1% (weak)
- LCR / MLCR: **no verified public score found**

Coding:

- SWE-bench Verified: **80.8%** (system card; 81.42% with prompt mod); SWE Multilingual 77.83%; Terminal-Bench 2.0 65.4%
- SWE-bench Pro **53.4%** (prior) vs 74% (BenchLM blog — anomalous); LiveCodeBench Pro 70.7% / LiveCodeBench 76% (BenchLM); Vibe Code Bench v1.1 57.57%

Long context:

- MRCR v2 (8-needle, 1M): **76%** (Anthropic) — one of the few million-token claims with published full-depth recall; GraphWalks (>128k parents) **95.4%**; AA-LCR v1.1 67.0%.

Multimodal:

- MMMU-Pro **73.9% (system card, no tools)** vs 77.3% (prior file); AA-MMMU-Pro 72.5%; ScreenSpot Pro 83.1%.

### Normalized scores (1–100)

- **Tool use: 88/100.** Best-in-class agentic evidence (Claw Bench 100, τ² Retail 91.9% / Telecom 99.3%, GDPval-AA ~1610, OSWorld-Verified 72.7%, Vending-Bench 2 100%) plus 90.2% BigLaw; capped by the absent numeric Terminal-Bench 2.1 figure.
- **Reasoning: 90/100.** 53.0% HLE with tools, GPQA Diamond 91.3%, ARC-AGI-2 68.8%, AIME 99.8% and ECI 137.91 keep it near the frontier; the weak AA hallucination row (80.1%) and a low CritPt hold it below 92.
- **Context window: 95/100.** 1M-token window with 76% MRCR v2 8-needle recall and 95.4% GraphWalks at full depth — one of the few models whose million-token claim has public retrieval evidence.
- **Multimodal: 80/100.** Native text + vision (and document) input with 128K output and MMMU-Pro 73.9–77.3%; no audio/video input and no non-text output.
- **Coding: 90/100.** 80.8% SWE-bench Verified (81.42% prompt-modified) and rank-1 Claw Bench results at four tunable effort levels; capped by the contested SWE-bench Pro row and no LiveCodeBench-for-the-checkpoint.
- **Cost efficiency: 55/100.** $5/$25 per 1M with no free option; full-1M standard pricing, cached input and 50%-off Batch soften but do not change the premium position.
- **Overall Score: 89/100.** Mean of the five quality dims (88+90+95+80+90)/5 = 88.6 → 89. Best fit: teams that need maximum agentic-coding reliability and usable 1M-token context and will pay frontier prices.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-16
- Method: rewrite-pass public internet research (Anthropic Opus 4.6 news + system-card PDF + pricing, BenchLM model/blog/compare pages, LLM-Stats, Vals AI, Artificial Analysis, pricepertoken, GetDeploying). Independent and system-card rows were reconciled; the SWE-bench-Pro anomaly, the MMMU-Pro revision, the GPQA spreads, the non-reasoning-variant index caveat and two aggregator outliers are surfaced rather than hidden. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
