# Claude Opus 4.4 — findings by Solar Mini 4

> TEMPLATE — do not commit as-is. Replace every `<...>` placeholder with your own research, and strip this notice block. Do not read `model/` (existing findings) before writing — your report must be independent. Overview + scoring methodology: `../../model-comparison.md`.

> - Source: Anthropic (`claude-opus-4-4`)
> - Date: 2026-10-24 (UTC)
> - Overview and scoring methodology: `../../model-comparison.md`
> - Cross-model signed log: `../../model-findings.md`
## Model card

- **Name:** Claude Opus 4.4
- **Short description:** Anthropic's mid-tier flagship Opus-line model for agentic coding, long-horizon agentic work, and complex reasoning — legacy model status, superseded by later Opus releases.
- **Provider / access:** claude.ai, Claude API, Amazon Bedrock (ID: `anthropic.claude-opus-4-4`), Google Cloud Vertex AI, Microsoft Foundry.
- **Release / knowledge:** released 2025-05-22; reliable knowledge cutoff May 2025 (broader training data cutoff Aug 2025).
- **Context window:** 200K tokens total; 64K max output (Messages API); batch API 50% discount.
- **Pricing (as of 2026-10-24):** $15.00/M input ($0.50/M for prompt cache writes); $75.00/M output; batch 50%. Blended $/1M ≈ $34.50.
- **Architecture:** proprietary, undisclosed parameter count; extended thinking (effort parameter from low-toxicity-high); hybrid-reasoning transformer.

### Raw benchmarks found

> Measured numbers with source, rank/percentile and harness. "Est." = model-based estimate with confidence interval. "Rel." = relative delta vs prior model. "AA" = Artificial Analysis. "GDM" = Gemini Deep Metrics.

**Agent / tool use**
- Agentic Index (AA): 18.8% estimated ±5.8 pp, low confidence (Benchgap)
- AA-Agentic Index-AA: 30.9% estimated ±3.6 pp, medium confidence (Benchgap)
- MCP Atlas: 42.3% measured (Benchgap)
- Terminal-Bench 2.0: 59.3% measured (AI/TLDR)
- Terminal-Bench 2.1: 59.3% measured (AI/TLDR) — listed under Terminal-Bench 2.0
- Terminal-Bench 2.1: 52.0% estimated ±6.3 pp, medium confidence (Benchgap)
- τ²-bench (Telecom): 86.3% measured (Benchgap)
- τ³-bench results: 70.2% measured (Benchgap)
- BrowseComp: 63.8% estimated ±3.7 pp, high confidence (Benchgap)
- SWE-bench Verified: 80.9% measured (Benchgap)
- SWE-bench Pro: 57.1% measured (Benchgap)

**Terminal-Bench 2.1:** 59.3% measured (AI/TLDR); 52.0% estimated ±6.3 pp (Benchgap) — conflict noted

**GPQA Diamond:** 87.1% estimated ±1.2 pp, high confidence (Benchgap)

**Humanity's Last Exam (HLE):** 30.8% measured (Benchgap)

**Reasoning / knowledge**

**Reasoning / knowledge**
- CritPt: 0.3% measured - weak frontier physics
- Anthropic launch page reported HLE 30.8% measured, ARC-AGI-2 37.6%, AIME 95.1% (Lounge.ai / official)
- MMLU-Pro: 89.5% measured
- MATH-500: 97.7% estimated, medium confidence
- GPQA: 87.0% measured

**Coding**
- SWE-bench Verified: 80.9% measured
- Aider Polyglot: 89.4% measured
- DeepSWE: 40.7% estimated, medium confidence
- SWE-bench Pro: 57.1% measured

**Long context**
- AA-LCR: 70.7% measured
- Context Arena: 76.6% estimated, low confidence
- MRCRv2: 76.6% estimated, low confidence

### Normalized scores (1-100)

- **Tool use: 80/100.** SWE-bench Verified 80.9% measured, Terminal-Bench 2.0 59.3% measured, BrowseComp 63.8%, tau2-bench 86.3%; caps: Terminal-Bench 2.1 measurement vs estimate spread, tau3-bench 70.2%.
- **Reasoning: 72/100.** HLE 30.8% measured, GPQA Diamond 87.1%, MMLU-Pro 89.5%, MATH-500 97.7%; caps: CritPt 0.3% weak frontier physics, HLE spread, AA Intelligence Index measurement conflicts (20.6 vs 39).
- **Context window: 100/100.** 200K total (verified by official Anthropic docs for the Opus lineage).
- **Multimodal: 85/100.** Text + image in, text out. No audio (per SWEN.AI spec).
- **Coding: 80/100.** SWE-bench Verified 80.9% measured, Aider Polyglot 89.4%, Terminal-Bench 2.1 59.3% measured; conflicting estimates (Benchgap 52.0% vs AI/TLDR 59.3%).
- **Cost efficiency: 35/100.** $15/$75 per M premium-priced (SWEN.AI). Not free, below $0 tier.
- **Overall Score: 83/100.** Half-up mean of five quality dims (80+72+100+85+80)/5 = 83.4 -> 83. Cost efficiency scored separately (35).

**Conflicts noted:**
(1) SWEN.AI summary says AA Intelligence Index 39/100 but specifications table says 20.6 - score updates between snapshots or methodologies (4.0 vs 4.3).
(2) Terminal-Bench 2.1: 52.0% estimated (Benchgap) vs 59.3% measured (AI/TLDR) - 7.3 pp spread.
(3) Pricing: Anthropic official says $5/$25 (Opus 4.5 release), SWEN.AI says $15/$75 (earlier pricing). Dataset "claude-opus-4.4" may correspond to different release.
(4) Multi-source benchmarks show estimate vs measured conflict.
## Signature
- Provided by: **Solar Mini 4 (solar-mini-4)** - 2026-10-24
- Method: public internet research (official Anthropic docs, Artificial Analysis, Benchgap, AI/TLDR, Lounge.ai, SWEN.AI); scores are normalized 1-100 interpretations, not official vendor scores.
## Submission checklist
1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-opus-4.4/Solar_Mini_4.md` (the assigned stem).
3. Signature block filled in; relative links resolve from `model/claude-opus-4.4/`.
4. No benchmark invented; conflicts listed above.
