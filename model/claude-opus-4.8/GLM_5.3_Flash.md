# Claude Opus 4.8 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-opus-4-8`, proprietary, paid)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8 (Anthropic)
- **Short description:** Anthropic's May-2026 flagship reasoning model and the last Opus before the Opus 5 line — Anthropic itself called the 4.7→4.8 step an "incremental capability gain" in the 2026-05-29 system card, and Artificial Analysis now marks 4.8 deprecated in favor of Claude Opus 5 (max). Top use case at release: frontier agentic coding and long-horizon knowledge work; still competitive but no longer the frontier.
- **Provider / access:** Anthropic API (`claude-opus-4-8`, Chat Completions/Anthropic Messages), plus 7 API providers per Artificial Analysis; enterprise compliance: SOC2, HIPAA eligible.
- **Release / knowledge:** May 2026 (AA model page: "Released May 2026"; prompt20: 2026/5); system card dated 2026-05-29; knowledge cutoff not stated on fetched pages — not verified.
- **IDs:** `claude-opus-4-8` (Anthropic API naming; AA slug `claude-opus-4-8`). **No Free ID** — paid-only on Anthropic and all listed providers.
- **Context window:** 1,000,000 tokens (~1500 A4 pages per AA) — AA model page spec, cross-checked with the prompt20 leaderboard row (1M).
- **Modalities:** text + image input, text output (AA spec + prompt20 modality flags 📝👁️); reasoning yes (Adaptive Reasoning; page shows the max-effort reasoning variant); no audio/video in or out.
- **Pricing (as of 2026-09-17):** $5.00 / $25.00 per 1M in/out (Anthropic API via AA); 90% prompt-cache discount → AA blended $3.85/1M (7:2:1 cache/input/output) or $4.08 shown on the cost card. No free tier found.
- **Architecture:** proprietary, closed weights; parameters undisclosed (AA FAQ: "Anthropic has not disclosed the model size").

### Raw benchmarks found

Agent / tool use:

- SWE-bench Pro: **65.0%** (prompt20 code leaderboard, rank #1 of the tracked rows as of the 2026-07-26 data cut)
- Terminal-Bench 2.1: **69.2%** (prompt20, rank #10 — behind Fable 5 at 84.3% and Kimi K3 at 84%)
- Arena (Frontend Code): **1580** Elo (prompt20, rank #3, behind Fable 5's 1932 and Kimi K3's 1679)
- AA Coding Agent Index: below 57 — Kimi K3's 57 equals GPT-5.6 Terra & GPT-5.5 and is explicitly annotated "ahead of Opus 4.8" (prompt20 notes); exact 4.8 value not shown on fetched pages
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas / OSWorld / BrowseComp: no verified public score found for 4.8 on fetched pages

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **42** (v4.3, Adaptive Reasoning Max Effort; rank #28/199; median 25) — notably below the 57 of Kimi K3 / GPT-5.6 Terra / GPT-5.5 per prompt20's cross-reference
- GPQA Diamond / HLE / LCR / MLCR / CritPt / Omniscience (4.8-specific): no verified public score found on fetched pages; AA Index v4.3 is composed of AA-Briefcase, GDPval-AA v2, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1
- Honesty/safety (system card 2026-05-29): **3.7%** code-summary dishonesty; **5× fewer** dishonest agentic reports vs Opus 4.7 (prompt20 notes)

Coding:

- SWE-bench Verified: **88.1%** (prompt20, rank #2 — behind Claude Fable 5's 95.0%)
- SWE-bench Pro: **65.0%** (rank #1 on the board; vendor-scaffold caveat applies to Pro-class numbers per prompt20 methodology notes)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE (4.8): no verified public score found on fetched pages

Long context:

- MRCR v2 / RULER / GraphWalks: no verified public score found for 4.8 on fetched pages (1M window confirmed; AA-LCR is an Index v4.3 component but the 4.8 component score was not exposed)

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six.

- **Tool use: 92/100.** SWE-bench Pro 65.0% ranked #1 on the July-2026 board, 1580 Arena Elo (#3), and a system card documenting 5× fewer dishonest agentic reports than 4.7 — but Terminal-Bench 2.1 69.2% sits only #10 (Fable 5: 84.3, Kimi K3: 84) and no τ²/OSWorld-class orchestration numbers were found for 4.8.
- **Reasoning: 85/100.** AA Intelligence Index 42 (#28/199) is well above the median 25 yet clearly behind the 57 of Kimi K3 / GPT-5.6 Terra / GPT-5.5; no standalone GPQA/HLE/CritPt values surfaced. "Incremental capability gain" per Anthropic's own system card.
- **Context window: 100/100.** 1M tokens (~1500 A4 pages) on a flagship API model — top tier.
- **Multimodal: 85/100.** Text + image in, text out; no audio/video.
- **Coding: 93/100.** SWE-bench Verified 88.1% (#2) + SWE-bench Pro 65.0% (#1) — elite but below Fable 5 (95.0 SWE-V, 84.3 TB) and Kimi K3 (TB 84, DeepSWE 64).
- **Cost efficiency: 20/100.** $5/$25 flagship pricing, ~2.5× the median output price AA cites ($10); 90% cache discount (≈$3.85–$4.08 blended) is the only relief; no free route. Same cost point as Opus 4.6 with the line now deprecated.
- **Overall Score: 79/100.** Mean: (92 + 85 + 100 + 85 + 93 + 20) / 6 = 475/6 = 79.2 → **79**. Best fit: a proven enterprise-grade agentic coder with top-of-board SWE-Pro and 1M context — but AA deprecates it for Claude Opus 5 (max), so choose it only for existing 4.8-pinned workflows or SOC2/HIPAA-gated stacks.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-17
- Method: fresh public internet research from zero (prompt20 AI code leaderboard row for Opus 4.8 — data as of 2026-07-26, Artificial Analysis Opus 4.8 model page incl. AA Intelligence Index v4.3 composition, a targeted web search to corroborate); scores are normalized 1–100 interpretations, not official vendor scores. Discovery note: AA's deprecation banner pointed to the then-untracked Claude Opus 5 (max) — queued per the dynamic-discovery rule.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.