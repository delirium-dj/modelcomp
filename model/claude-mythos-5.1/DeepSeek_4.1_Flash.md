# Claude Mythos 5.1 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Mythos 5.1 (`claude-mythos-5-1`)
- Date: 2026-10-16 (UTC) — rewrite; re-verified 2026-10-18; re-researched 2026-11-04
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-research pass — 2026-11-04** (second pass, user-requested). Fresh checks: BenchLM (`claude-mythos-5-1`, **still 1 source-displayable row — Terminal-Bench 4.0 60.9%, unranked**), Anthropic Mythos page, platform docs, system card; targeted searches return no Mythos-5.1-specific coverage (the model stays gated and unscored by independent harnesses). **No new ID-specific benchmark, access, or pricing change found.**
> **Proxy refresh:** the same-weight GA twin Claude Fable 5.1's AA Intelligence Index moved **53.4 → 49.0** on the current AA read (provisional reasoning proxy weakened); Anthropic's ECI point estimate for this configuration (161.98) and the system-card rows stand.
> **Context:** Opus 5.5 (86.29 BenchLM) now leads Anthropic's GA roster; the June **Claude Mythos 5** is now separately tracked (`claude-mythos-5`, queue 89.9) — this file remains the Sept 2026 gated twin of Fable 5.1, not that model.
> **No score change:** the provisional profile (top tool/coding on the one verified row, twin-leaning elsewhere) is unchanged; scores held at 90.
> Sources this pass: https://benchlm.ai/models/claude-mythos-5-1 · https://www.anthropic.com/claude/mythos · https://platform.claude.com/docs/en/models/mythos-5-1/overview · https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf

> **Re-verified 2026-10-18.** BenchLM (`claude-mythos-5-1`) re-checked; no new independent benchmark surfaced and the prior deep-pass rows stand. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources). Re-confirms that this is the **same underlying model as Claude Fable 5.1**, differing only in safeguards (cyber/bio relaxed). Anthropic states "Claude Fable 5.1 and Claude Mythos 5.1 are the same underlying model… where Mythos 5.1 results are shown, the gap reflects tasks where Fable 5.1's safeguards intervene." The only published Mythos-5.1-specific benchmark is **Terminal-Bench 4.0 60.9%** (vs Fable 5.1's 55.8%). List pricing published: $10 in / $50 out per 1M, cache hits $0.25, 5m write $12.50 / 1h $20, Batch $2.50/$12.50, US-only $11/$55; available via Claude API, Bedrock, Google Cloud and Microsoft Foundry (`claude-mythos-5-1`); input text and images → text; Anthropic ECI 161.98; system-card biosecurity results (virology Task 1 0.81 / Task 2 0.87; VCT 0.58). Conflicts surfaced: independent coverage essentially absent (AA/Vals none; BenchLM 1 row; LLM Stats 1 eval); Anthropic's same-model/different-gap framing is a guardrail artifact; access described variably (CVP + Life Sciences).

## Model card

- **Name:** Claude Mythos 5.1 — the Mythos-class half of Anthropic's 2026-09-01 release; identical weights to Claude Fable 5.1 with cyber/bio safeguards relaxed. Not the June "Claude Mythos 5".
- **Short description:** Anthropic's restricted research instrument for defensive-security and life-sciences R&D; verified-organizations-only.
- **Provider / access:** model ID `claude-mythos-5-1` on the Claude API, Bedrock (`anthropic.claude-mythos-5-1`), Google Cloud and Microsoft Foundry — but **access gated** behind the Cyber Verification Program / Life Sciences Verification Program (US-organizations-first at launch). GA twin: `claude-fable-5-1`.
- **Release / knowledge:** 2026-09-01; knowledge cutoff June 2026.
- **IDs:** `claude-mythos-5-1`; Bedrock `anthropic.claude-mythos-5-1`.
- **Context window:** 1,000,000 tokens in / 128,000 max output.
- **Modalities:** text + image in (→ text out); no audio/video.
- **Pricing (as of 2026-11-04):** **$10 in / $50 out** per 1M; cache hits $0.25; 5m cache write $12.50 / 1h $20; Batch $2.50/$12.50; US-only inference $11/$55.
- **Architecture:** proprietary; Mythos-configuration of the Fable 5.1 base model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (the only Anthropic-published number; vendor, no independent harness can reach it)
- GDPval-AA / Tau3-Banking / OSWorld 2.0 / MCP-Atlas / Claw-Eval / Toolathlon: **no verified public score found for this ID**
- Proxy (Fable 5.1): leads Opus 5 on all seven Anthropic rows incl. Terminal-Bench-Science 0.1 52.6% vs Opus 5's 29.0%

Reasoning / knowledge:

- No GPQA/HLE/MMLU-Pro/LCR published → no verified public score found for this ID
- Proxy (Fable 5.1, refreshed 2026-11-04): AA Intelligence Index **49.0** (was 53.4); GPQA 93.7%; HLE 59.1%
- Anthropic ECI **161.98** (95% CI [158.20, 169.00], n=46) — frontier on AI R&D tasks

Coding:

- Terminal-Bench 4.0 60.9% (vendor)
- No SWE-bench/DeepSWE/LiveCodeBench/SciCode published for this ID
- Real-world: GPU-kernel speedups up to 2.5× on H100; protein-binder designs near-50% hit rate (narrative, no harness score)

Long context:

- 1M/128K documented; no MRCR/RULER/GraphWalks published at any length.

### Normalized scores (1–100)

> Only Tool use and Coding rest on a directly verified Mythos 5.1 number (Terminal-Bench 4.0); the rest are **provisional** and lean on the same-weight GA twin. Nothing is invented.

- **Tool use: 93/100.** Terminal-Bench 4.0 60.9% is the top of Anthropic's agentic table (5 pts over the GA twin); provisional because no GDPval/Tau3/MCP/OSWorld number exists and no independent harness can reach it.
- **Reasoning: 90/100 (provisional).** Same-weight GA twin scores GPQA 93.7%, HLE 59.1% (AA Index refreshed to 49.0); the Anthropic ECI of 161.98 confirms frontier AI-R&D reasoning; capped below 95 because no reasoning benchmark is published for this ID.
- **Context window: 96/100.** Documented 1M in / 128K out (≥1M band); no retrieval measurement.
- **Multimodal: 78/100 (provisional).** Image input documented (text + images → text) with PDF on the identical base configuration; no vision benchmark, no audio/video.
- **Coding: 91/100.** TB4.0 60.9% plus real-world kernel/protein results; the total absence of SWE-bench/DeepSWE/LiveCodeBench keeps it below 95.
- **Cost efficiency: 30/100.** $10/$50 per 1M is among the most expensive tracked; softened only by the $0.25 cache read and batch discount.
- **Overall Score: 90/100.** (93 + 90 + 96 + 78 + 91) / 5 = 89.6 → 90. Best fit: vetted US defensive-security and life-sciences teams; everyone else should use the identically-performing Claude Fable 5.1.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-04
- Method: re-research pass (user-requested second pass) over public internet research (Anthropic Mythos page + platform docs + system card, BenchLM re-read 2026-11-04). Re-verified the single published row and the absence of independent scoring; refreshed the Fable-5.1 proxy index and recorded the sibling context. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Mythos](https://www.anthropic.com/claude/mythos)
  - [Claude Fable 5.1 & Mythos 5.1 system card](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf)
  - [BenchLM — Claude Mythos 5.1](https://benchlm.ai/models/claude-mythos-5-1)
  - [Claude platform docs — Mythos 5.1](https://platform.claude.com/docs/en/models/mythos-5-1/overview)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
