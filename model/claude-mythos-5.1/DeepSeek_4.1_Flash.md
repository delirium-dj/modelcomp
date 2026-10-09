# Claude Mythos 5.1 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Mythos 5.1 (`claude-mythos-5-1`)
- Date: 2026-10-09 (UTC) — deep second pass (previous Signature 2026-10-06)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass re-verification — 2026-10-09** (≥3 independent sources).
> The second pass re-confirms that this is the **same underlying model as Claude Fable 5.1**, differing only in safeguards (cyber/bio relaxed). The **only** benchmark Anthropic publishes is **Terminal-Bench 4.0 60.9%** (vendor; higher than Fable 5.1's 55.8% purely because fewer safeguard intercepts). Everything else inherits Fable 5.1's profile.
> **Conflicts surfaced:** (1) Independent coverage is essentially absent — Artificial Analysis and Vals have no page (404), LLM Stats shows "score pending", BenchLM shows one row and "no public overall score". (2) Anthropic's own framing is self-conflicting by design: "same model as Fable 5.1" yet TB4.0 differs — a guardrail artifact, not capability. (3) Access described variably ("trusted access programs" vs "US organizations only, expanding" vs three Cyber Verification Program tiers).
> Sources: https://www.anthropic.com/claude/mythos · https://platform.claude.com/docs/en/models/mythos-5-1/overview · https://www.anthropic.com/claude-fable-and-mythos-5-1 · https://benchlm.ai/models/claude-mythos-5-1 · https://llm-stats.com/models/claude-mythos-5-1

## Model card

- **Name:** Claude Mythos 5.1 — the Mythos-class half of Anthropic's 2026-09-01 release; **identical weights to Claude Fable 5.1** with cyber/bio safeguards relaxed. Not the June "Claude Mythos 5".
- **Short description:** Anthropic's restricted research instrument for defensive-security and life-sciences R&D; not generally sold.
- **Provider / access:** model ID `claude-mythos-5-1`, **not on the public API** — only the Cyber Verification Program and Life Sciences Verification Program (US-organizations-first at launch). GA twin: `claude-fable-5-1`.
- **Release / knowledge:** 2026-09-01; knowledge cutoff June 2026.
- **IDs:** `claude-mythos-5-1`; no public API ID.
- **Context window:** 1,000,000 tokens in / 128,000 max output.
- **Modalities:** text + image in (PDF documented only for the June Mythos 5 configuration), text out; no audio/video.
- **Pricing (as of 2026-10-09):** not published (programme-gated); the identical GA base prices at $10 in / $50 out per 1M with $0.25 cache read.
- **Architecture:** proprietary; Mythos-configuration of the Fable 5.1 base model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (the only Anthropic-published number; vendor, no independent harness can reach it)
- GDPval-AA / Tau3-Banking / OSWorld 2.0 / MCP-Atlas / Claw-Eval / Toolathlon: **no verified public score found for this ID**
- Proxy (Fable 5.1): leads Opus 5 on all seven Anthropic rows incl. Terminal-Bench-Science 0.1 52.6% vs Opus 5's 29.0%

Reasoning / knowledge:

- No GPQA/HLE/MMLU-Pro/LCR published → no verified public score found for this ID
- Proxy (Fable 5.1): AA Intelligence Index **53**; GPQA 93.7%; HLE 59.1%

Coding:

- Terminal-Bench 4.0 60.9% (vendor)
- No SWE-bench/DeepSWE/LiveCodeBench/SciCode published for this ID
- Real-world: GPU-kernel speedups up to 2.5× on H100; protein-binder designs near-50% hit rate (narrative, no harness score)

Long context:

- 1M/128K documented; no MRCR/RULER/GraphWalks published at any length.

### Normalized scores (1–100)

> Only Tool use and Coding rest on a directly verified Mythos 5.1 number (Terminal-Bench 4.0); the rest are **provisional** and lean on the same-weight GA twin. Nothing is invented.

- **Tool use: 93/100.** Terminal-Bench 4.0 60.9% is the top of Anthropic's agentic table (5 pts over the GA twin); provisional because no GDPval/Tau3/MCP/OSWorld number exists and no independent harness can reach it.
- **Reasoning: 90/100 (provisional).** Same-weight GA twin (Fable 5.1) scores GPQA 93.7%, HLE 59.1%, AA Index 53; capped below 95 because no reasoning benchmark is published for this ID.
- **Context window: 96/100.** Documented 1M in / 128K out (≥1M band); no retrieval measurement.
- **Multimodal: 72/100 (provisional).** Image input, text output (top of the image band, nudged up for documented PDF on the identical base configuration); no vision benchmark, no audio/video.
- **Coding: 91/100.** TB4.0 60.9% plus real-world kernel/protein results; the total absence of SWE-bench/DeepSWE/LiveCodeBench keeps it below 95.
- **Cost efficiency: 30/100 (proxy).** No published price — scored on the identical GA base at $10/$50 per 1M (≈30), softened by the $0.25 cache read; practically, cost is unattainability.
- **Overall Score: 88/100.** (93 + 90 + 96 + 72 + 91) / 5 = 88.4 → 88. Best fit: vetted US defensive-security and life-sciences teams; everyone else should use the identically-performing Claude Fable 5.1.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: deep second-pass public internet research (Anthropic Mythos page + platform docs, Anthropic Fable/Mythos 5.1 announcement, BenchLM, LLM Stats). Re-confirmed the same-weight Fable 5.1 relationship and the absence of independent scoring; dimensions without a direct number are flagged provisional proxies. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
