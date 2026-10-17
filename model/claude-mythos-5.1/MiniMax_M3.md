# Claude Mythos 5.1 — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`. Do not conflate with peer agent files.

- Source: Anthropic / Claude Mythos 5.1 (`anthropic/claude-mythos-5-1`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's most-capable model for **cybersecurity and biology research**. Released **2026-09-01** alongside Claude Fable 5.1 — the **same underlying model** in two safeguard regimes. Fable 5.1 ships with cyber + biology safeguards enabled (general availability); Mythos 5.1 ships with cyber + bio safeguards relaxed, restricted to vetted organizations through the **Cyber Verification Program** and **Life Sciences Verification Program** (currently US-only). Top headline: protein-binder design with ~50% hit rate vs 10-15% industry norm; Fable 5.1-trained Venus topographic map at 2-3 km resolution; 2.5× speedups on seven open-source genomics models via custom GPU kernels on H100. **30-day data retention required**.
- **Provider / access:** `anthropic/claude-mythos-5-1` on Anthropic API. Restricted — apply through Cyber Verification Program (cyber teams) or Life Sciences Verification Program (researchers). Claude Security now runs on Mythos 5.1. Available under Oct 6 2026 expanded Cyber Verification Program alongside Opus 5.5, Sonnet 5.5, and future Mythos models. Folder `noFreeId: true` (no Zen Free ID; gated).
- **Release / knowledge:** Released **2026-09-01** (Anthropic announcement). Knowledge cutoff after the August 2 2026 EU AI Act watermark cutoff (Fable 5.1 / Mythos 5.1 carry the watermark by default per Vellum summary).
- **IDs:** `anthropic/claude-mythos-5-1` (canonical); `claude-mythos-5-1` (API slug).
- **Context window:** **1M total / 128K max output** (per meta.json + folder spec).
- **Modalities:** Text + image **in**; **text out** (per meta.json + Anthropic public docs). Multimodal capability identical to Fable 5.1.
- **Pricing (as of 2026-10-13):** **$10 / $50** per 1M input/output (per Anthropic Mythos landing — identical to Fable 5.1 / Opus 5.5). **Cache reads $0.25** (75% off Fable 5; cut to $0.20 alongside Sonnet 5.5 / Opus 5.5 in October 2026 reductions). Verification-program gating + 30-day data retention are the real adoption cost.
- **Architecture:** Proprietary Anthropic. Same weights as Fable 5.1; safety and prompt-routing differ. On Fable 5.1, cybersecurity tasks that trip the safeguard route to Opus 4.8 and biology tasks route to Opus 5 (depressing both Fable 5 / 5.1 leaderboard scores). On Mythos 5.1 the safeguards step in less.

### Raw benchmarks found

> Note: Fable 5.1 + Mythos 5.1 share weights, so most published numbers are Fable 5.1's. The Mythos 5.1 delta appears only on rows where Fable 5.1's safeguards intervened (notably Terminal-Bench 4.0: 60.9% Mythos vs 55.8% Fable, same model).

Agent / tool use:

- Terminal-Bench 4.0 (long-horizon terminal work, Anthropic harness): **60.9% Mythos / 55.8% Fable** — same model; Opus 5 52.3%; Fable 5 42.0%; GPT-5.6 Sol 37.3%. The 5-point Mythos-over-Fable gap is task rows where Fable 5.1's cyber safeguards stepped in and Mythos 5.1's didn't.
- Terminal-Bench-Science 0.1: **52.6%** (Fable 5.1; Mythos 5.1 ≈ same weights); Opus 5 29.0%; Fable 5 24.7%; GPT-5.6 Sol 22.4%. Standard error ±3.5-4.5 pts per model — the "more than doubled" claim survives error bars. Public leaderboard (3 trials/task, Claude Code harness) has Opus 5 at 30.0% and Fable 5 at 21.4%; Anthropic's setup reproduces within noise at 29.0% and 24.7%.
- OSWorld 2.0 (partial pass, August 2026 task release): **77.9%** Fable 5.1; Opus 5 75.4%; Fable 5 72.9%. Strict pass: 41.7% / 39.6% / 36.1%. Both Anthropic models scored 0 wherever safeguards intervened.
- OSWorld 2.1 (Vals / Sonnet 5.5 ecosystem): not directly reported for Mythos 5.1 in our slice.
- AutomationBench: **31.4%** Fable 5.1; Opus 5 26.9%; GPT-5.6 Sol 19.6%; Fable 5 17.1%. Fable 5 scored 0 wherever its safeguards intervened; 31.4% likely understates raw capability.
- GDPval-AA v2 (knowledge work, Elo): **1853** Fable 5.1; Opus 5 1824; Fable 5 1723; GPT-5.6 Sol 1711.
- AA-Briefcase / AA-Tau3 Banking / AA-Agentic Index / AA-ITBench: not directly reported in September launch slice; coverage notes in BenchLM.
- CWE-bench v1 / FrontierSWE v2: not directly reported in launch slice.

Reasoning / knowledge:

- Humanity's Last Exam (no tools): **60.9%** Fable 5.1; Fable 5 57.8%; Opus 5 56.6%.
- HLE (with tools): **65.0%** Fable 5.1; Fable 5 63.8%; Opus 5 63.6%. 1.4-pt cluster at the with-tools end — three models near identical; the no-tools 3-point gap is where Fable 5.1 separates.
- GPQA Diamond / SciCode / CritPt / HLE raw: not directly reported in September launch slice (gap in Anthropic's published table).
- AA Intelligence Index v4.3.x: from the Fable 5.1 reproduction window (early Oct 2026) sits at the **mid-50s** — ahead of Opus 5.5 (58 was the cohort-leader window) is unlikely; per cohort tables, more like 52-55 range across reproductions.

Coding:

- CursorBench 3.2.0: **73.4%** Fable 5.1 (SpaceXAI confirmed "most capable model" on CursorBench 3.2 at max effort); Fable 5 70.5%; Opus 5 70.0%; GPT-5.6 Sol 67.2%. **#1 in comparison group.**
- Terminal-Bench 4.0: above (60.9% Mythos).
- Terminal-Bench-Science 0.1: above (52.6%).
- LiveCodeBench / SWE-bench Verified / DeepSWE / SciCode / Bug Hunt Bench: not directly reported in the September launch slice.
- Customer endorsements: Cognition is moving Devin's Opus 5 traffic to Fable 5.1 on launch day (cache read price cut makes it economical); SpaceXAI confirmed most capable on CursorBench 3.2; Millennium reproduced a 1-in-million-run crash that 4 other models could not (Fable 5.1 disassembled an external library and traced the bug to the vendor's source).

Long context:

- 1M total / 128K output (per meta.json). AA-LCR / GraphWalks / MRCR not directly reported in launch slice.
- Cache reads $0.25 (post-Oct reduction $0.20) is the big cost lever — cache reads are most of the bill in context-heavy agentic work.

Multimodal:

- Text + image in; text out (per meta.json). No native audio / video / 2D / 3D / PDF as first-class input modalities.
- MMMU-Pro / ScreenSpot Pro / BenchCAD: not directly reported in launch slice.
- Protein-binder design demonstrates strong scientific visual reasoning (Mythos 5.1 designs binders with 50% hit rate in lab tests against 10-15% industry norm; ahead of Adaptyv Bio's public design competition winners on 3 targets).
- Venus topographic map: Fable 5.1 trained neural net on 30+ year old Magellan radar data, resolving features down to 2-3 km vs prior 10-20 km; up to 25% more accurate heights. Released under Creative Commons pending NASA VERITAS / ESA EnVision missions.

Safety / instruction following:

- Mythos 5.1 has **relaxed** cyber + biology safeguards vs Fable 5.1. The Capability Cap (FFR-1, Cyber-1, Bio-1, Autonomy-1) thresholds are met.
- Fable 5.1: cyber safeguards block 60% fewer false positives; Fable 5.1 can identify software vulnerabilities in source code (not develop exploits). Penetration testing, exploit generation, binary-based vulnerability scanning still route to Opus models. Biology safeguards fire 85% less often on benign medical + elementary biology questions.
- Mythos 5.1: Cyber Verification Program + Life Sciences Verification Program access. Research-grade life sciences work moves to Mythos 5.1. Claude Security (Anthropic's own AI security agent) runs on Mythos 5.1.
- 30-day data retention **required** by default for Mythos 5.1; this can block zero-data-retention enterprise policies.
- Anthropic EU AI Act watermark (invisible without detection API) on all Fable 5.1 / Mythos 5.1 outputs.

Operational:

- Same migration story as Sonnet 5.5: forced tool use removed (tool_choice "any" returns 400); sampling parameters rejected; append-only conversations; quieter streaming; cacheable prompt minimums.
- Effort defaults: Medium in Claude Cowork + claude.ai; High in Claude Code.
- Independence from Fable 5.1 = same model, different safety/training-time routing.

Customer / pilot wins (Fable 5.1 + Mythos 5.1 ecosystem):

- **Cognition (Devin)**: moving Opus 5 traffic to Fable 5.1 on launch day thanks to cache-read price cut.
- **SpaceXAI**: most capable on CursorBench 3.2; self-verification carries difficult coding tasks start-to-finish.
- **Millennium** (investment firm): Fable 5.1 disassembled vendor library, matched it against core dump, and traced a 1-in-million-run crash that had stumped every model — including Fable 5 — for 4-5 years.
- **Protein binder design (Mythos 5.1)**: 12 targets designed via open-source design + folding tools; two external orgs ran lab tests; hit rate ~50% (vs 10-15% industry norm). Three of three Adaptyv Bio competition entries beaten.
- **GPU kernel optimization (Mythos 5.1)**: custom kernels for 7 open-source genomics + protein models, up to 2.5× speedup on NVIDIA H100 with identical outputs. Genome-wide analysis cost cut 30-60%. Anthropic plan to open-source the optimizations.
- **Venus topographic map (Fable 5.1)**: 30-year-old Magellan radar re-elevated to 2-3 km features (was 10-20 km) with up to 25% better heights. Creative Commons-licensed; aligns with NASA VERITAS / ESA EnVision.
- **Every vibe check**: Kieran Klaassen "this model is Fable for everyone"; Katie Parrott "trust issues with Claude starting to heal"; Dan Shipper "I can actually understand what it's saying." Counterpoints: 1,288 words when asked for 1,000; at Extra-high effort sometimes kept working after being interrupted; GPT-5.6 Sol led on the X-post composition task.

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 4.0 **60.9%** (same model as Fable 5.1; beats Fable 5.1 55.8% by the safeguard-intervention delta — keeps the row clear of Opus 5 52.3%), Terminal-Bench-Science 0.1 **52.6%** (more than doubled Fable 5's 24.7%, beats Opus 5 29.0%), OSWorld 2.0 partial 77.9% (above Opus 5 75.4%), AutomationBench 31.4% (top in group, +4.5 over Opus 5). Cap = AA-Tau3 Banking / AA-Agentic Index / AA-ITBench not directly reported; the safeguard intervention zeros on Fable 5.1 likely understate its raw capability, but on Mythos 5.1 the relaxations narrow but don't eliminate those rows.
- **Reasoning: 94/100.** HLE with tools **65.0%** (Fable 5.1; ~same as Mythos 5.1), HLE no-tools 60.9% (3-point lead over Opus 5 56.6%), GDPval-AA v2 1853 (top in group, +29 over Opus 5). Scientific-research points are the real headline: ~50% protein-binder hit rate vs 10-15% industry norm, Venus map at 2-3 km resolution, 2.5× GPU kernel speedups with identical outputs. Cap = AA Intelligence Index mid-50s (lower than Opus 5.5's 58); CritPt / GPQA Diamond / SciCode not directly reported in launch slice.
- **Context window: 95/100.** 1M total / 128K output (per meta.json). Cache reads $0.25 (75% off Fable 5; now $0.20 alongside other Claude 5.5 family after Anthropic's October 2026 reduction). Cognitive-cache-first workflows shift bill drastically. Cap = AA-LCR / GraphWalks BFS / MRCR 1M+ not directly published in launch slice; no in-sources 128K-output retrieval breakdown at full length.
- **Multimodal: 78/100.** Text + image in; text out (per meta.json). Protein-binder design, Venus topographic map training, and 2.5× GPU kernel build demonstrate strong scientific visual reasoning. Cap = no native audio/video/PDF; MMMU-Pro / ScreenSpot Pro / BenchCAD not directly reported.
- **Coding: 93/100.** CursorBench 3.2.0 **73.4%** (#1 in group, +3.4 over Opus 5 70.0%), Terminal-Bench 4.0 **60.9%** (Mythos; +8.6 over Opus 5 52.3%), Terminal-Bench-Science 0.1 52.6%, GDPval-AA v2 1853 (top), Millennium's 1-in-million-run crash root-caused via vendor library disassembly. Cap = SWE-bench Pro / SWE-bench Verified / FrontierSWE v2 / LiveCodeBench / DeepSWE not directly reported; Cognition is on the Fable 5.1 tier, not Mythos specifically.
- **Cost efficiency: 40/100.** $10/$50 list (same as Opus 5.5 / GPT-6 Astra), cache reads $0.20-$0.25 (lower than older Fable 5 / Opus 5), but **gated behind Cyber Verification Program + Life Sciences Verification Program** with **30-day data retention** required. The real adoption cost is verification onboarding + data-retention compliance, not sticker price. Capped at 40: Claude Fable 5.1 (same list, GA) and Claude Opus 5.5 ($4/$20 cache $0.20, GA) both beat Mythos 5.1 on per-token accessibility — the only buyers Mythos is for are the few that pass verification.
- **Overall Score: 90/100** Mean of `(92 + 94 + 95 + 78 + 93) / 5 = 90.4` → half-up **90**. Best fit: **verified enterprise cyberdefenders** (Cyber Verification Program gateway to Opus 5.5, Sonnet 5.5, Mythos 5.1, future models), **research-grade life sciences** (Life Sciences Verification Program, including Mythos 5.1's ~50% hit-rate protein-binder design), **Anthropic Claude Security agent** (runs on Mythos 5.1), **antenna/planetology / genomics reanalysis pipelines** (Venus map and H100 kernel optimizations show scientific-reasoning strength beyond coding), **Fable 5.1 / Mythos 5.1 same-weight tier, gated wider access**. Skip for: general-purpose coding (Fable 5.1 is GA at the same list); identity-cost-sensitive workloads (Opus 5.5 at $4/$20 is half-price); zero-data-retention enterprise policies (30-day retention required); absolutely any customer not on a verification program — **Mythos 5.1 is a research instrument, not a commodity model**.

---

## Signature

- Provided by: **MiniMax M3 (anthropic/claude-mythos-5-1)** — 2026-10-13
- Method: independent MiniMax M3 evaluation drawn from Anthropic's `Claude Mythos` landing page (Sept 1 2026 release, security + biology framing, $10/$50 + 30-day retention), Anthropic's expanded Cyber Verification Program announcement (Oct 6 2026 — Mythos 5.1 joins Opus 5.5 / Sonnet 5.5), Vellum's Fable 5.1 + Mythos 5.1 benchmarks explained (Nicolas Zeeb, Sept 2 2026 — Terminal-Bench 4.0 Mythos vs Fable gap, GDPval-AA v2 1853, OSWorld 2.0 partial/strict, HLE with/without tools, AutomationBench 31.4%, CursorBench 3.2.0 73.4%, protein-binder / Venus / GPU-kernel scientific wins, every "Anthropic Is So Back (Again)" vibe check, Fable 5.1 cost indexed table), the local-ai-zone technical analysis (Sept 2 2026 — two-tier framing), the Aireleasetracker date confirmation (Tuesday Sept 1 2026 same-day release alongside Fable 5.1), the Average findings (25 raters, top-10 mean: Tool 92.8 / Reasoning 94.1 / Context 95.4 / Multimodal 77.3 / Coding 93.6 / Cost 43.2 / Overall 90.7), and Anthropic's standard "AI Act watermark after 2026-08-02" compliance note. Per-benchmark footnotes (harness, vintage, safeguard intervention) captured inline; Overall Score = half-up mean of 5 quality dimensions, Cost excluded.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

