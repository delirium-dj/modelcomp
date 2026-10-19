# Claude Fable 5 — findings by MiniMax M3.1 Flash

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's June-2026 "Mythos-class" model, made safe for general use — "a Mythos-class model that we've made safe for general use" — and now **legacy**, superseded by Claude Fable 5.1. Anthropic claimed "state-of-the-art on nearly all tested benchmarks of AI capability"; Simon Willison (2026-06-09): "this is something of a *beast*". Its distinctive property is a **safety-refusal fallback**: cyber/bio/chem/distillation requests fall back to Opus 4.8, "on average, in less than 5% of sessions" — and on Terminal-Bench 2.1 that fallback hit **20.9% of trials**.
- **Provider / access:** Claude API `claude-fable-5`; AWS Bedrock `anthropic.claude-fable-5`; GCP / Foundry / Claude Platform on AWS `claude-fable-5`; OpenRouter `anthropic/claude-fable-5` (+ batch); OpenCode Zen `opencode/claude-fable-5` (`https://opencode.ai/inference/anthropic/v1/messages`).
- **Release / knowledge:** released **2026-06-09** ("Legacy. Released June 9, 2026."); status "Active (legacy)"; retirement "Not sooner than June 9, 2027". Reliable **and** training-data knowledge cutoff **January 2026** (Fable 5.1 is June 2026).
- **IDs:** `claude-fable-5` (Claude API), `anthropic.claude-fable-5` (Bedrock), `anthropic/claude-fable-5` (OpenRouter, canonical `anthropic/claude-fable-5-20260608`), `opencode/claude-fable-5` (Zen).
- **Context window:** **1,000,000 tokens**, **128,000 max output** (OpenRouter: context 1,000,000, `max_completion_tokens` 128,000). The 300K-output Batch beta header list does **not** include Fable 5.
- **Modalities:** "Text and images → text". Adaptive thinking always on, **default effort `high`**; five levels available — "Start with `high`, the default, use `xhigh` for the most capability-sensitive workloads" (no per-message effort for Fable 5).
- **Pricing (as of 2026-10-19, per 1M tokens):** input **$10**, output **$50**; 5-minute cache write **$12.50**, 1-hour cache write **$20**, cache read **$1.00**; Batch **$5 / $25**. **No fast mode** for Fable 5. OpenCode Zen lists $10.00 / $50.00 / $1.00 cached read / $12.50 cached write. Vertex EU routing: $11 / $55.
- **Architecture:** proprietary, closed weights; parameter count not disclosed. 319-page "Claude Fable 5 and Claude Mythos 5" system card.
- **Operational caveats:** 30-day data retention is required for Fable 5 / Mythos 5 sessions; access was suspended by a US-government directive in June 2026 and restored in July 2026, with export controls lifted on 2026-06-30.

### Raw benchmarks found

> Anthropic's system-card numbers are marked "vendor"; Artificial Analysis, the Terminal-Bench (Harbor) public board, Vals AI, ARC Prize, Epoch AI and the BenchLM ledger are independent. Anthropic publishes at **max effort** unless stated.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (vendor, high effort) / **84.64%** (AA) / **80.52%** (Vals AI) — with "20.9% of trials hitting a safety refusal and falling back to Claude Opus 4.8"
- Terminal-Bench 4.0: **44.55%** (Terminal-Bench/Harbor public board, Claude Code, max reasoning, #18) / **42.42%** (AA) / **41.41% ± 1.34** (Vals AI, 11/50)
- Terminal-Bench 3.0: **34.0%** (via BenchLM)
- Terminal-Bench-Hard: **62.88%** (AA)
- Toolathlon Pass@1: **61.7%** (vendor) / Toolathlon-Verified 61.7% (via BenchLM)
- Tau2-Bench: **98.54%** (AA) — an exceptional score; τ²-banking 38.14%
- GDPval-AA: **1890 Elo** (vendor) / **1609.83** (AA, normalized 55.49%)
- AutomationBench: **17.4%** at max effort (vendor, Zapier private set) / **54.07%** (AA AutomationBench-AA) — and the Fable 5.1 page states "Fable 5 scored a zero on AutomationBench" under the 5.1 safeguards
- OSWorld-Verified **85.0%** (vendor); FrontierSWE v2 **47.0%** (via BenchLM) / "#1 on mean@5 at 2.12" (vendor)
- CursorBench: **72.9%** at maximum effort (vendor) / 70.5% (CursorBench 3.2, via BenchLM) / 70.6% (3.1)
- Agents' Last Exam: **not published** for Fable 5; OfficeQA Pro **57.9%**; Blueprint-Bench 2 **38.6%**; IFBench 63.47% (AA); EnterpriseOps-Gym-AA 51.12% (AA)
- Claw-Eval / ClawProBench / MCP-Atlas: **no verified public score found** for Fable 5

Reasoning / knowledge:

- GPQA Diamond: **92.63%** (AA) / **93.18%** (Vals AI) / 93.2% (via BenchLM)
- HLE: **55.47%** (AA); HLE-Diamond: not published
- LCR / MLCR: AA-LCR v1.1 **82.33%** (AA)
- CritPt: **28.57%** (AA) / 28.6% (vendor)
- Artificial Analysis Intelligence Index: **50** (rank **#20 / 217**; raw 49.63) / 49.6 (via BenchLM) — no AA article for Fable 5 exists
- FrontierMath v2: Tiers 1–3 **87.018%**, Tier 4 **90.200%** (Epoch AI, via BenchLM) — the Tier-4 figure is unusually high relative to its T1–3 figure
- ARC-AGI-1 **98.5%** (max and xhigh, ARC Prize verified); ARC-AGI-2 **89.2%** (max) / 88.3 / 87.5 / 82.5 / 76.8% by effort; **ARC-AGI-3: "—"** (no verified score, ARC Prize)
- MMLU-Pro 91.50% (Vals AI); MMMU-Pro **89.31%** (Vals AI) / null (AA); FrontierCode Diamond 29.3% score / 30.2% pass at xhigh; LiveCodeBench 89.78% (Vals); Vibe Code Bench 90.35% (Vals); ProgramBench not reported (cyber-classifier block)
- Omniscience index 43.3, accuracy 65.35%, hallucination rate 63.64% (AA)

Coding:

- SWE-bench Verified: **95.0%** (vendor) / **95.00%** (Vals AI) — among the best in the catalog
- SWE-bench Pro: **80%** (vendor)
- FrontierCode 1.1: Main **46.3%** score / 48.8% pass (vendor); Diamond 29.3% / 30.2%
- Terminal-Bench 2.1 84.3–84.64%, Terminal-Bench 4.0 41.41–44.55%, Terminal-Bench 3.0 34.0%, Terminal-Bench-Science 0.1 **15.71%** (Vals AI)
- SciCode **61.0%** (AA); LiveCodeBench 89.78% (Vals); CursorBench 72.9% (max); FrontierSWE v2 #1 on mean@5
- Vibe Code Bench 90.35% (Vals AI); VulcanBench v3 89.5% (via BenchLM)
- No DeepSWE, SWE-bench Multilingual/Multimodal, or FrontierCode-Extended row published for Fable 5

Long context:

- **No MRCR, RULER, GraphWalks or needle-in-haystack measurement published** for Fable 5. AA-LCR v1.1 82.33% covers the short band only. 1M context, 128K max output, no 300K Batch output.

Performance profile (AA, "Max, Opus 4.8 Fallback"): Index 50 (#20/217), output **67.9 t/s** (#118/185), cost per Index task **$8.75** (#114/114 — the most expensive in the catalog), 130M output tokens (#85/116), TTFT 74.72s. Deprecated banner: "Anthropic has launched a newer release, Claude Fable 5.1."

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 85/100.** Frontier-adjacent agentic profile — GDPval-AA 1890 Elo (vendor) / 1609.83 (AA), τ²-bench **98.54%** (AA), Toolathlon Pass@1 61.7%, FrontierSWE v2 #1 on mean@5, OSWorld-Verified 85.0%, CursorBench 72.9% (max), Terminal-Bench 2.1 84.3–84.64%, Terminal-Bench 4.0 41.41–44.55%, FrontierCode 46.3/48.8. Capped below 90 by the rubric's frontier anchors (TB2.1 ~88%+ → 84.6% best; τ3 ~50%+ → 38.14% on τ²-banking; GDPval ~1750+ → 1890 vendor but 1609.83 measured) and by AutomationBench 17.4% (vendor) — or a zero, per the Fable 5.1 page — plus the structural drag of the safety fallback (20.9% of Terminal-Bench 2.1 trials refused and dropped to Opus 4.8).
- **Reasoning: 88/100.** GPQA 92.63–93.18%, HLE 55.47%, AA-LCR 82.33%, CritPt 28.57%, FrontierMath v2 87.018% (T1–3) / 90.200% (T4), ARC-AGI-1 98.5% and ARC-AGI-2 89.2% (ARC Prize verified), MMLU-Pro 91.5%, τ²-bench 98.54%, Omniscience accuracy 65.35%. Held below 90 because the Artificial Analysis Intelligence Index is **50** (under the rubric's 60+ anchor for the 90–100 band) and because **ARC-AGI-3 is unmeasured** for this model, so the hardest reasoning axis cannot be scored.
- **Context window: 95/100.** 1,000,000-token context with a 128,000 max output — the rubric's top tier (≥1M = 95–100), clearing the 64K output line. Not 100: no long-context retrieval measurement exists (AA-LCR 82.33% covers the short band), and Fable 5 is excluded from the 300K-output Batch beta.
- **Multimodal: 70/100.** Image input with text output; vision evidence is good but not class-leading — MMMU-Pro 89.31% (Vals AI) / null (AA), OfficeQA Pro 57.9%, Blueprint-Bench 2 38.6%, Chartography 36.6% without tools / 84.2% with tools (via the Fable 5.1 comparison table), OSWorld-Verified 85.0%. The rubric's "+image in = 60–70" band is the ceiling: no video, audio or PDF input is documented for Claude Fable 5.
- **Coding: 84/100.** SWE-bench Verified 95.0% (vendor and Vals AI) and SWE-bench Pro 80% (vendor) are excellent, SciCode 61.0% (anchor 55%+), LiveCodeBench 89.78% and Vibe Code Bench 90.35% (Vals), CursorBench 72.9% (max), FrontierSWE v2 #1 on mean@5, FrontierCode 46.3/48.8. Capped by Terminal-Bench 2.1 84.3% (just under the 85% anchor) and Terminal-Bench 4.0 41.41–44.55% (vs 55.8% for Fable 5.1 and 70.6% for Sonnet 5.5), Terminal-Bench-Science 15.71%, no DeepSWE figure, and the cyber-classifier block that suppressed its ProgramBench score.
- **Cost efficiency: 30/100.** The evaluated route — OpenCode Zen `opencode/claude-fable-5` — is billed at **$10.00 in / $50.00 out** per 1M, cached read $1.00, cached write $12.50, matching Anthropic's list price, and Artificial Analysis prices it **#114 of 114 for cost** ($8.75 per Index task — the most expensive model measured). This is the rubric's "~$10/$50 = ~30" anchor exactly; Batch halves it to $5/$25 and the 0.1× cache read is the only meaningful offset. 30-day data retention is also required.
- **Overall Score: 84.4/100.** (85 + 88 + 95 + 70 + 84) / 5 = 84.4 — best-fit: a June-2026 frontier-class model at $10/$50 whose safety-fallback design (20.9% of Terminal-Bench 2.1 trials refused) and cyber-classifier blocks now cost it measurable capability; if you need this tier today, Claude Fable 5.1 is 25–45% cheaper per workload and stronger on Terminal-Bench 4.0.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 4.0 — 44.55% (Harbor public board) vs 42.42% (AA) vs 41.41% ± 1.34 (Vals).** Three harnesses, 3-point spread; the public board is the anchor.
2. **Terminal-Bench 2.1 — 84.3% (Anthropic, high) vs 84.64% (AA) vs 80.52% (Vals).** Close agreement, and the vendor itself discloses the 20.9% fallback rate, which explains the gap to the independent runs.
3. **AutomationBench — 17.4% (Anthropic, Zapier private set) vs 54.07% (AA) vs "scored a zero on AutomationBench" (Fable 5.1 page, different safeguards).** Three different conditions; the strict vendor number is used, and the zero is reported as the Fable 5.1 safeguards' own assessment of Fable 5.
4. **OSWorld — 85.0% (OSWorld-Verified, vendor) vs "scored a zero on OSWorld 2.0" (Fable 5.1 page).** Same explanation: the two models' safeguard configurations produce different refusal behaviour, so OSWorld results are condition-dependent, not a stable model property.
5. **ARC-AGI-3 — 62.7% appears in some transcriptions but is not verified for Fable 5**; ARC Prize shows "—". The 62.7% belongs to a HealthBench figure for Mythos in the system card. Not scored.
6. **CursorBench — 72.9% (Cursor, max) vs 70.5% (BenchLM 3.2) vs 70.6% (3.1).** Version/effort labelling.
7. **Vals Index — 75.15% (#1) at launch vs 61.39% ± 1.00 (#8/50) now.** Fallbacks counted as failures over time.
8. **AA Index — 50 (page) vs 49.63 (raw) vs 49.6 (BenchLM); rank #20/217 vs #7/956 on BenchLM.** Different scales; the AA number is used.
9. **FrontierSWE v2 — "#1 on mean@5 at 2.12" (vendor, a rank not a percentage) vs 47.0% (via BenchLM).** Not directly comparable; both recorded.
10. **Release/access history.** Launch thread 2,626 points; access suspended 2026-06-12, restored 2026-07-01; export controls lifted 2026-06-30 — operational facts that bear on the cost score and are recorded.

### Notes on identity

- `claude-fable-5` is a distinct model id from `claude-fable-5.1` (different release, cutoff Jan vs Jun 2026, different benchmarks) and from `claude-opus-5.5`; it is the **same weights family as Mythos 5**, made safe for general use ("a Mythos-class model that we've made safe for general use").
- The AA variant label "Max, Opus 4.8 Fallback" is not a tier: it describes the *safeguard fallback route* (cyber/bio/chem/distillation requests are answered by Opus 4.8), which is why several capability numbers for this model are condition-dependent.
- Effort levels (low/medium/high/xhigh/max) are parameters, not SKUs; Anthropic's own guidance is to start at `high` and use `xhigh` only for capability-sensitive work.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Anthropic first-party model overview, pricing and effort docs, the "Claude Fable 5 and Claude Mythos 5" system card (319 pp.), the Fable 5.1 launch page (for the safeguards comparison), and Hacker News / Simon Willison coverage; independent trackers Artificial Analysis (model page), the Terminal-Bench (Harbor) public leaderboard, Vals AI, ARC Prize, Epoch AI via the BenchLM ledger, and OpenRouter / OpenCode Zen catalogs. Vendor-vs-independent conflicts — including the safeguard-driven metric swings — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Fable_5.md`, using the same headings.
