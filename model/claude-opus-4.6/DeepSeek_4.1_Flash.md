# Claude Opus 4.6 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Opus 4.6 (`anthropic/claude-opus-4.6`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Newly confirmed: official Anthropic docs/pricing — release **2026-02-05**, reframed 1M context (full-window standard pricing, no >200K premium), max output **128K** (300K Batch beta); system-card rows **Terminal-Bench 2.0 65.4%**, **OSWorld-Verified 72.7%**, BrowseComp **83.7%**, MCP Atlas 62.7%, **SWE-bench Verified 80.8%**, SWE Multilingual 77.83%, **GPQA Diamond 91.3%**, **HLE 53.0% with tools**, ARC-AGI-2 68.8%, **MRCR v2 8-needle (1M) 76%**, MMMU-Pro 77.3%, BigLaw Bench 90.2%; BenchLM overall **62.12 (#45/889)**; Vals accuracy **64.19%**.
> **Conflicts surfaced:** (1) **SWE-bench Verified** — 80.8% (system card) vs 75.6% (BenchLM third-party table). (2) **GPQA Diamond** — 91.3% (system card) vs 89.2% (BenchLM) vs 84.0% AA variant. (3) **AA Intelligence Index** — 26 is the *estimated non-reasoning* variant, so it understates the adaptive-thinking default. (4) **>200K pricing** — launch premium $10/$37.50 was replaced by full-1M standard pricing in current docs.
> **No dimension change:** all five quality dims remained supported by the new evidence; Overall stays **89**.
> Sources: https://platform.claude.com/docs/en/models/opus-4-6/overview · https://www.anthropic.com/news/claude-opus-4-6 · https://benchlm.ai/models/claude-opus-4-6 · https://www.vals.ai/models/anthropic_claude-opus-4-6

## Model card

- **Name:** Claude Opus 4.6 (API id `claude-opus-4-6`; no "Free" tier exists)
- **Short description:** Anthropic's 2026-02-05 frontier Opus — a hybrid reasoning model tuned for agentic coding, computer use and professional knowledge work. First Opus-class model with a 1M-token context window (beta at launch), and the reference point for "Opus-class price, near-top coding".
- **Provider / access:** Anthropic — Claude Developer Platform API, Claude apps, AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Messages-style API.
- **Release / knowledge:** Released 2026-02-05. Knowledge cutoff 2025-05 (reliable) / 2025-08 (training data).
- **IDs:** `claude-opus-4-6`; Bedrock `anthropic.claude-opus-4-6-v1`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens; max output **128,000 tokens** (300,000 via Batch-API beta header).
- **Modalities:** text and vision in, text out; reasoning yes (adaptive thinking, four effort levels); tool calls and JSON/structured output yes.
- **Pricing (as of 2026-10-11):** $5.00 / 1M in, $25.00 / 1M out, $0.50 cached input (10%); 5m cache write $6.25, 1h $10.00; Batch −50%; full 1M context now at standard pricing (the launch >200K premium is gone).
- **Architecture:** proprietary, closed, API-only; no open weights.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified (computer use): **72.7%** (system card); Terminal-Bench 2.0: **65.4%**
- GDPval-AA: **1606–1619 Elo** (Anthropic/BenchmarkList); BrowseComp: **83.7%** (86.8% multi-agent harness)
- MCP Atlas 62.7%; CyberGym 66.6%; DeepSearchQA 73.7%; τ²-bench 84.8%; APEX-Agents 48.4%
- BigLaw Bench (Harvey agentic legal): **90.2%**; Claw Bench 100 (rank 1/37)
- Tau3-Banking: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.3%** (system card) vs 89.2% (BenchLM) / 84.0% AA variant
- HLE: **53.0%** with tools; ARC-AGI-2 **68.8%**; FrontierMath v2 T1–3 40.7% / Tier 4 22.9%
- BenchLM ECI: 137.91; BenchLM overall 62.12 (#45/889); Vals accuracy 64.19%
- AA Intelligence Index 26 (estimated, non-reasoning variant); AA-Omniscience accuracy 45.8% / hallucination 80.1% (weak)
- LCR / MLCR: **no verified public score found**

Coding:

- SWE-bench Verified: **80.8%** (system card; 81.42% with prompt mod); SWE Multilingual 77.83%; Terminal-Bench 2.0 65.4%
- SWE-bench Pro 53.4%; LiveCodeBench Pro 70.7%; Vibe Code Bench v1.1 57.57%

Long context:

- MRCR v2 (8-needle, 1M): **76%** (Anthropic) — one of the few million-token claims with published full-depth recall; AA-LCR v1.1 67.0%.

Multimodal:

- MMMU-Pro 77.3% (system card); AA-MMMU-Pro 72.5%; ScreenSpot Pro 83.1%.

### Normalized scores (1–100)

- **Tool use: 88/100.** Best-in-class agentic evidence (Claw Bench 100, Tau2-Telecom ~92%, GDPval-AA ~1610 at the 95th percentile, OSWorld-Verified 72.7%) plus 90.2% BigLaw; capped by the absent numeric Terminal-Bench 2.1 figure.
- **Reasoning: 90/100.** 53.0% HLE with tools, GPQA Diamond 91.3%, ARC-AGI-2 68.8% and ECI 137.91 keep it near the frontier; the weak AA hallucination row (80.1%) and a low CritPt hold it below 92.
- **Context window: 95/100.** 1M-token window with 76% MRCR v2 8-needle recall at full depth — one of the few models whose million-token claim has public retrieval evidence.
- **Multimodal: 80/100.** Native text + vision (and document) input with 128K output; no audio/video input and no non-text output.
- **Coding: 90/100.** 80.8% SWE-bench Verified (81.42% prompt-modified) and rank-1 Claw Bench results at four tunable effort levels; capped by SWE-bench Pro 53.4% and no LiveCodeBench-for-the-checkpoint.
- **Cost efficiency: 55/100.** $5/$25 per 1M with no free option; full-1M standard pricing, cached input and 50%-off Batch soften but do not change the premium position.
- **Overall Score: 89/100.** Mean of the five quality dims (88+90+95+80+90)/5 = 88.6 → 89. Best fit: teams that need maximum agentic-coding reliability and usable 1M-token context and will pay frontier prices.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: deep second-pass public internet research (Anthropic Opus 4.6 docs + news + pricing, BenchLM model page + per-eval results, Vals AI, Artificial Analysis, AI Release Tracker). Independent and system-card rows were reconciled; the SWE-bench/GPQA spreads and the non-reasoning-variant index caveat are surfaced rather than hidden. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
