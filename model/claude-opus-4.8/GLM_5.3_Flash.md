# Claude Opus 4.8 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-opus-4-8`, proprietary, paid)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8 (Anthropic)
- **Short description:** Anthropic's May-2026 flagship reasoning model and the last Opus before the Opus 5 line — Anthropic itself called the 4.7→4.8 step an "incremental capability gain" in the 2026-05-29 system card, and Artificial Analysis marks 4.8 deprecated in favor of Claude Opus 5 (max). The 2026-10-11 second pass fills the gaps with the Opus 4.8 system card and AA/Vals boards: HLE 57.9%, USAMO 2026 96.7%, τ²-bench 94.4% — but ARC-AGI-2 72.1% and FrontierMath T4 31.25% show the aging vs the 2026 class.
- **Provider / access:** Anthropic API (`claude-opus-4-8`, Chat Completions/Anthropic Messages), plus 7 API providers per Artificial Analysis; enterprise compliance: SOC2, HIPAA eligible.
- **Release / knowledge:** May 2026 (AA model page; system card dated 2026-05-29); knowledge cutoff not stated on fetched pages — not verified.
- **IDs:** `claude-opus-4-8` (Anthropic API naming; AA slug `claude-opus-4-8`). **No Free ID** — paid-only on Anthropic and all listed providers.
- **Context window:** 1,000,000 tokens (~1500 A4 pages per AA; BenchLM concurs) — up to 300K output on the Message Batches API with the `output-300k-2026-03-24` beta header (platform.claude.com models-overview table re-verified 2026-10-11).
- **Modalities:** text + image input, text output (AA spec); reasoning yes (Adaptive Reasoning; max-effort variant); no audio/video in or out.
- **Pricing (as of 2026-10-11):** $5.00 / $25.00 per 1M in/out (Anthropic API via AA); 90% prompt-cache discount → AA blended $3.85/1M. No free tier found.
- **Architecture:** proprietary, closed weights; parameters undisclosed (AA FAQ: "Anthropic has not disclosed the model size").

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **94.4%** (AA, independent — strong orchestration evidence)
- OSWorld-Verified: **83.4%** (Anthropic Opus 4.8 system card via benchlm.ai, updated 2026-10-10) — **conflicts with the OSWorld 2.0 paper reading of 20.6%** (arxiv 2606.29537; different harness version)
- MCP Atlas: **82.2%** (system card — fills the gap the 2026-10-08 pass marked missing)
- BrowseComp: **84.3%** (system card); DeepSearchQA: **93.1%** (system card)
- Terminal-Bench 2.1: **74.6%** (system card; Vals independent: **71.9%**) — resolves upward from prompt20's 69.2%
- GDPval-AA: **1593** (system card); AA-normalized: **47.8%** (AA)
- Toolathlon: **59.9%** (system card — weak); AA Agentic Index: **42.6%** (AA)
- Finance Agent v2: **53.9%** (system card); Gert Labs: **72.97%**; ResearchClawBench: **21.1%**; Terminal-Bench 3.0: **21.1%** (frontierbench.ai — weak on the newer board)
- SWE-bench Pro: **69.2%** (Anthropic system card via benchlm.ai — **resolves the 2026-10-08 conflict between prompt20's 65.0% and the launch claim's 69.2% in favor of 69.2%**)
- Arena (Frontend Code): **1580** Elo (prompt20, rank #3, behind Fable 5's 1932 and Kimi K3's 1679)
- Tau3-Banking / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (Anthropic system card via benchlm.ai — corroborates the Jul 2026 AA reading); AA independent: **92.0%**; Vals: **92.4%**
- HLE: **57.9%** with tools / **49.8%** without (system card — fills the gap); AA-HLE: **48.7%** (AA)
- USAMO 2026: **96.7%** (system card)
- ARC-AGI-1: **92.5%** (ARC Prize verified, Opus 4.8 Max); ARC-AGI-2: **72.1%**; ARC-AGI-3: **1.5%** (ARC Prize leaderboard)
- FrontierMath v2: **80.0%** Tiers 1–3 / **56.1%** Tier 4 (Epoch AI leaderboard, 2026-10-17 refresh) — CHANGED: the 2026-10-11 pass recorded 47.2%/31.25% from the same source; Epoch has since re-scored upward and the "aging vs the 2026 class" math framing no longer holds
- MazeBench ASCII: **0%** (added 2026-10-16)
- AA-LCR v1.1: **77.7%**; CritPt: **20.9%** (AA — fill the LCR/CritPt gaps)
- Artificial Analysis Intelligence Index: **41.8** (AA, 2026-10-10 via benchlm.ai) — the 2026-10-08 "newer reading of 56 (SiliconReport)" is not confirmed on AA's current board; 41.8 stands
- AA-Omniscience: **48.8% accuracy / 39.3% non-hallucination row / 28.8 index** (AA)
- MMLU-Pro: **89.6%** (Vals); INCLUDE: **87.6%** (system card)
- Honesty/safety (system card 2026-05-29): **3.7%** code-summary dishonesty; **5× fewer** dishonest agentic reports vs Opus 4.7

Coding:

- SWE-bench Verified: **88.6%** (system card; prompt20 had 88.1% — consistent)
- LiveCodeBench: **87.8%** (Vals, independent — fills the gap)
- SWE-bench (Vals): **88.6%**; SWE Multilingual: **84.4%**; SWE Multimodal: **38.4%** (system card)
- AA Coding Index: **74.3%** (AA); AA-SciCode: **54.4%** (AA)
- CursorBench 3.1: **58.4%**; CursorBench 3.2: **62.3%**; FrontierCode 1.1 Main: **46.5%** (Cognition)
- PostTrainBench v1.1: **32.9%**
- Vibe Code Bench / DeepSWE (4.8): no verified public score found

Long context:

- AA-LCR v1.1: **77.7%** (AA — first measured long-context number)
- MRCR v2 / RULER / GraphWalks: no verified public score found for 4.8

Multimodal:

- ScreenSpot-Pro: **87.9%**; CharXiv: **89.9%** with tools / **80.5%** without; OfficeQA Pro: **66.2%** (system card); Design Arena Website: **1262** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 92/100.** The second pass broadly corroborates the agentic story: τ²-bench 94.4%, OSWorld-Verified 83.4%, MCP Atlas 82.2%, BrowseComp 84.3%; TB2.1 74.6/71.9 and AA Agentic Index 42.6% sit a band below the Opus 5 class — held at 92 on the strength of the orchestration rows.
- **Reasoning: 87/100.** CHANGED from 84 — GPQA 93.6% (three sources) and USAMO 96.7% remain elite, HLE 57.9% fills the gap, and the re-scored FrontierMath v2 80.0%/56.1% (Epoch) removes the math-aging cap; AA's current Index of 41.8, ARC-AGI-2 72.1% and CritPt 20.9% still place it below the Opus 5/5.5 class.
- **Context window: 100/100.** 1M tokens with 300K batch output (docs table re-verified 2026-10-11) — the most generous output package; AA-LCR 77.7% is solid but retrieval-at-depth remains unpublished.
- **Multimodal: 85/100.** Text + image in, text out; measured vision is strong (ScreenSpot-Pro 87.9%, CharXiv 89.9% with tools); no audio/video.
- **Coding: 91/100.** (Was 93 on the prior pass.) SWE-bench Verified 88.6% and LiveCodeBench 87.8% stay elite, but SWE Pro settles at 69.2% — no longer board-leading (Opus 5 79.2%, 5.5 89.9%) — and FrontierCode 46.5%/SWE Multimodal 38.4% show the age; a one-band correction.
- **Cost efficiency: 20/100.** $5/$25 flagship pricing, ~2.5× the median output price AA cites ($10); 90% cache discount (≈$3.85 blended) is the only relief; no free route. Same cost point as Opus 4.6 with the line now deprecated.
- **Overall Score: 91/100.** CHANGED from 90 — mean of the five quality dims per `RULES.md` (Cost excluded): (92 + 87 + 100 + 85 + 91) / 5 = 455/5 = 91.0 — the 2026-10-11 pass lowered it on the then-current FrontierMath reading; the 2026-10-17 Epoch re-score lifts Reasoning back (84→87). Best fit: a proven enterprise-grade agentic coder with 1M context — but AA deprecates it for Claude Opus 5 (max); choose it only for existing 4.8-pinned workflows or SOC2/HIPAA-gated stacks.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the Anthropic Opus 4.8 system card, Artificial Analysis model benchmarks, Vals AI / Cursor / Cognition / Epoch AI / ARC Prize leaderboards via benchlm.ai, plus the prior 2026-10-08 prompt20/AA pass; 2026-10-16 re-check: Epoch re-scores FrontierMath 47.2/31.25 → 80.0/56.1 — Reasoning 84→87, Overall 90→91); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
