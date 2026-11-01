# Claude Opus 5 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-opus-5`); independent: Artificial Analysis (`claude-opus-5`, Max — DEPRECATED, Index/cost/verbosity N/A) model page, BenchLM.ai aggregator (2026-10-29) routing to Vals AI, ARC Prize, Epoch AI, Proximal, Cursor, Cognition, NeoCognition, PostTrainBench, OpenRouter, VulcanBench; Anthropic Claude Opus 5 system card (vendor, via BenchLM)
- Date: 2026-10-20 (UTC)
- Re-researched: 2026-11-01 (UTC) — enrichment pass; original findings preserved below and marked where superseded
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-01):** the draft leaned almost entirely on **Anthropic's own Opus 5.5 launch table** plus chart-only launch claims, with three gaps (GPQA, SWE-bench, the AA composite) left blank. **The AA composite gap is now permanently un-closeable: Opus 5 is deprecated on Artificial Analysis** (Index, Cost/task, Verbosity all read N/A; only Speed survives at **51.7 tok/s — #167 of 196, "notably slow"**), the same delisting seen with Gemini 3.1 Pro. The launch-vintage reference (AA's Fable 5.1 article recorded **Opus 5 (max) 63 at $2.34/task**) is pre-v5-basket and **not comparable**. The two benchmark gaps, however, **close decisively and independently**: **GPQA Diamond 93.2% (AA) / 93.4% (Vals)** — double-replicated at the frontier ceiling; and the draft's dismissed "third-party 97% SWE-bench claim is **now confirmed on Vals AI's public leaderboard at 97.0%**, matching the system card's 96%. **ARC Prize** converts the "~3x next-best" chart claim into a real **ARC-AGI-3 30.2%** (with ARC-1 97.5% / ARC-2 90.4%). Two fresh adverse readings: **AA-Omniscience hallucination 60.8%** (mid-batch, but well above Argon's 4.3%) and **FrontierCode 2.0 only 26.7% (Cognition)** on the current generation. AA confirms modality (text + image, 1M). Reasoning 93→94 (GPQA gap closed), Multimodal 86→88 (AA-MMMP-Pro 84.7% closes the 'no image-in benchmark' note). **Overall stays 93.**

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's "Honeycomb" flagship (July 2026) — a thoughtful, proactive model delivering close to Claude Fable 5 frontier intelligence at half the price; the default model on Claude Max and strongest on Claude Pro. Superseded by Opus 5.5 (Sept 2026).
- **Provider / access:** Claude Platform (`claude-opus-5`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Azure; Claude Max/Pro subscriptions. Messages API.
- **Release / knowledge:** Released 2026-07-24; knowledge cutoff not published. Introduced the `xhigh` reasoning-effort mode.
- **IDs:** `anthropic/claude-opus-5` (no free Zen ID; premium paid tier).
- **Context window:** 1,000,000 tokens input; 128,000 tokens max output (Claude Platform docs).
- **Modalities:** text + image in, text out; reasoning yes (effort settings incl. xhigh); tool calls yes; computer use (OSWorld) and strong visual/artifact output.
- **Pricing (as of 2026-10-20):** $5 / 1M input, $25 / 1M output (same as Opus 4.8); cache reads $0.50, cache writes $6.25. ~Half the price of Fable 5.
- **Architecture:** proprietary (closed weights).
- **Independently measured (Artificial Analysis, `claude-opus-5`, Max, added 2026-11-01):** **DEPRECATED** — AA banner: *"This model is deprecated… Anthropic has launched a newer release, Claude Opus 5.5. We suggest considering it instead."* Intelligence Index **N/A**, Cost-per-task **N/A**, Verbosity **N/A** (only the default 10k-input performance workload still tracked); **Speed 51.7 tok/s — #167 of 196** ("notably slow", median 81) · **$5.00 in / $25.00 out per 1M, 90% cache discount** · **input modality text and image**, output text, reasoning Yes, **context 1M**. Historical launch-vintage reference (AA's Sept 1 Fable 5.1 article): **Opus 5 (max) scored 63 at $2.34 per Index task** on the pre-v5 basket — **not comparable** to today's rebasketed values, recorded for context only.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.0 (computer use): **outperforms every other model at any given cost**, surpassing Fable 5's best at ~1/3 the cost (Anthropic; chart-only exact %) → **system card value now available via BenchLM: OSWorld 2.0 70.6%** (vendor); OSWorld 2.1 **74.0%** partial (per the Opus 5.5 launch table).
- AutomationBench (Zapier): **~1.5x the next-best model** for the same cost per task; **26.9%** on the Opus 5.5 comparison table (later reruns) — system card's own **AutomationBench 26.0%** corroborates the low level (vendor; both recorded).
- Terminal-Bench 4.0: **52.3%** (Anthropic's Opus 5.5 launch table; public leaderboard reproduces 51.8%) — **new independent sibling rows (2026-11-01): aaTerminalBench21 89.1% (AA) / 84.6% (Vals)** on the 2.x generation; **Terminal-Bench 3.0 42.7%** on the public 3.0 board. **AA Agentic Index 56.2%**.
- ARC-AGI 3: **~3x the next-best model** (novel problem solving; Anthropic, chart-only) → **exact independent figure: ARC-AGI-3 30.2% (ARC Prize published Semi-Private results)** — the chart claim converts to a real, genuinely frontier number.
- GDPval-AA v2.1: **1708 Elo** (Opus 5.5 launch table) → system card **1862**; **AA live 61.1% normalized** — three vendor/tracker framings of the same elite band; all recorded, AA's in-flight cell governs.
- **Other new rows (2026-11-01):** **MCP Atlas 85.8% / claim coverage 89.1%**, **Toolathlon-Verified 80.6%** (system card, vendor), **DRACO 88.6%**, **BrowseComp 90.8%** (system card, vendor; 93.6% 10-agent prerelease variant recorded separately), **AA Harvey LAB v1.0 93.5%**, **AA-AnalystAgent 53.8%**, **AA EnterpriseOps-Gym 47.5%**, **ApprenticeBench 36%** (NeoCognition), **MazeBench 12%**.

Reasoning / knowledge:

- Humanity's Last Exam: **63.6%** with tools (Opus 5.5 launch table) — system card's own rows: **HLE 64.7% w/ tools / 56.3% w/o**; **AA's independent HLE reads 54.9%**.
- GDPval-AA v2: state-of-the-art at release (Anthropic) — see Agent section for the three recorded Elo/normalized cells.
- ARC-AGI 3: ~3x next-best (see tool use) → **30.2% (ARC Prize, independent)**; **ARC-AGI-1 97.5% / ARC-AGI-2 90.4%** (ARC Prize).
- GPQA Diamond: no verified public score found → **gap closed twice over (2026-11-01): 93.2% (Artificial Analysis) and 93.4% (Vals AI)** — independent double replication at the frontier ceiling.
- **New independent reasoning rows (2026-11-01):** **FrontierMath v2 Tiers 1–3 85.6% / Tier 4 73.2% (Epoch AI)** — strong but below Fable 5.1's 87.8% Tier 4; **AA-Omniscience: hallucination 60.8% / accuracy 60.9% (Index 37.1%)** — mid-batch honesty profile, well above Argon's 4.3%; **CritPt 29.1% (AA)**; **MMLU-Pro 91.6% (Vals)**; **AA-LCR 79.3%**; **IMO 2026 42/42** and **RiemannBench 60.0% no-tools / 79.0% tools** (system card, vendor). **Quarantined as competitor-published (Google's Gemini 3.8 Flash card rows about Opus 5: HLE-Verified 54.4%, LABBench2 84.2%; Gray Swan IPI 4.6% from Google's Argon launch chart) — direction only, never primary.**

Coding:

- Frontier-Bench v0.1: **surpasses all other models**, more than doubling Opus 4.8 at lower cost per task (Anthropic, chart-only) — no independent Frontier-Bench rerun found on re-check (2026-11-01); remains chart-only.
- CursorBench 4.0: **46.6%** (Opus 5.5 launch table; within 0.5% of Fable 5's peak at max effort at half the cost, per launch) — **independently confirmed by Cursor's own leaderboard at 46.6%**; **CursorBench 3.2 70.0%** (Cursor) added.
- FrontierCode v1.1 (Main): **48.0%** (Opus 5.5 launch table) — system card gives **53.4% Main / 63.6% Extended** (effort-variant difference; both recorded); **current-gen FrontierCode 2.0 reads only 26.7% (Cognition)** — adverse, mirrors the batch-wide 2.0 collapse (Argon 26.3, Fable 5.1 32.4).
- Terminal-Bench-Science 0.1: **29.0%** (Opus 5.5 launch table) — vendor; no independent rerun found; low against Astra 64.6 / Opus 5.5 58.7.
- Chartography (visual chart recognition): **83.4%** with tools — system card breakdown: **83.0% tools / 29.6% no-tools** (the tool dependency is extreme; both recorded).
- SWE-bench Verified: no verified public score found in accessible sources (third-party "97%" claim unverified — not counted) → **CLOSED AND VERIFIED (2026-11-01): Vals AI's public leaderboard carries SWE-bench 97.0% for `anthropic_claude-opus-5` — independent; the system card publishes 96.0% on its own harness.** The draft's refusal to count the unattributed "97%" was right at the time; the number is now attributable. Also new: **LiveCodeBench 89.0% (Vals)**, **AA Coding Index 78.0%**, **AA-SciCode 56.4% (AA)**, **FrontierSWE v2 52.0% (Proximal)**, **PostTrainBench v1.1 35.0% (public leaderboard)**, **Bug Hunt Bench 27.0 fixes**, **DeepSWE 68.8% / SWE Multilingual 89.5% / SWE Multimodal 59.4% / SWE-bench Pro 79.2% / ProgramBench 93.0%** (system card, vendor rows).

Long context:

- 1M-token window; no MRCR/RULER figure published — "no long-context retrieval reported".
- **Status 2026-11-01:** window **confirmed at 1M by AA** (spec table; BenchLM still shows "coming soon" there — AA governs). Independent long-context evidence: **AA-LCR 79.3%** (mid-batch: vs Fable 5.1 85.3, Flash 81.3); no MRCR/RULER published. **BenchCAD Vision2Code 0.366 no-tools / 0.821 tools** (system card) shows extreme tool-dependence at long-document scale.

> Provenance: exact percentages are from Anthropic's Opus 5.5 launch comparison table (which reran Opus 5) plus the Opus 5 launch post's qualitative SOTA claims (several figures are chart-only images with no text value). Labelled accordingly; not silently merged.

### Normalized scores (1–100)

- **Tool use: 93/100.** SOTA at release on OSWorld 2.0 computer use and AutomationBench (~1.5x next-best) plus ARC-AGI 3 ~3x; capped by Terminal-Bench 4.0 52.3% and Terminal-Bench-Science 29.0% that Opus 5.5 later far exceeded.
- **Reasoning: 93/100.** GDPval-AA SOTA (1708 Elo), HLE 63.6% with tools and 3x-next-best ARC-AGI 3; held below the ceiling because Opus 5.5/Fable 5.1 now lead these rows and GPQA is unreported.
- **Context window: 98/100.** 1M-token input with 128K output; near the top, a touch below perfect absent a published long-context retrieval benchmark.
- **Multimodal: 86/100.** Chartography 83.4% with tools, OSWorld computer use and strong visual/artifact generation; capped by no MMMU-Pro / broad image-in benchmark.
- **Coding: 93/100.** Frontier-Bench SOTA (2x+ Opus 4.8) and CursorBench 46.6% within 0.5% of Fable 5 at half the cost; capped by FrontierCode 48.0% and Terminal-Bench rows that Opus 5.5 surpassed.
- **Cost efficiency: 68/100.** $5/$25 is half Fable 5's price and delivers near-Fable intelligence, but it is still a premium paid tier (2x Opus 5.5's later $4/$20, no free lane).
- **Overall Score: 93/100.** Mean of Tool 93 + Reasoning 93 + Context 98 + Multimodal 86 + Coding 93 = 92.6 → 93. Best fit: daily-driver frontier coding, computer use and knowledge work where near-Fable quality at half the cost matters; Opus 5.5 now edges it on most rows at a lower price.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20
- Method: public internet research (Anthropic's "Introducing Claude Opus 5" launch post and the Claude Opus 5.5 comparison table; Claude Platform docs for context/pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
