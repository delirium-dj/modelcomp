# Claude Mythos 5.1 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-mythos-5-1`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's Mythos-class trusted-access configuration (released 2026-09-01) — **identical weights to Claude Fable 5.1**, shipped with permissive cyber and life-sciences safeguards for vetted organizations (Cyber Verification Program / Life Sciences Verification Program, currently US-only). A separate API ID and product (also powers Claude Security), so tracked as its own entry; same-weights relationship to `claude-fable-5-1` flagged, not an alias to merge.
- **Provider / access:** Claude API (`claude-mythos-5-1`, verification required), Amazon Bedrock, Google Cloud, Microsoft Foundry — access gated behind Anthropic's verification programs; no self-serve sign-up.
- **Release / knowledge:** released 2026-09-01; reliable knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-mythos-5-1` (gateway routes) / `claude-mythos-5-1` (native; verification-gated).
- **Context window:** 1,000,000 tokens; max output 128,000 tokens (300K batch beta).
- **Modalities:** text + images in; text out; reasoning yes (adaptive thinking always on; efforts low/medium/high/xhigh/max, default `high`); tool calls yes (computer use, code execution, web tools).
- **Pricing (as of 2026-10-07):** $10 in / $50 out per 1M; cache read $0.25/M (2.5% of input), 5m cache write $12.50, 1h $20; Batch API 50% off. Paid; access requires program approval.
- **Architecture:** proprietary — same checkpoint as Fable 5.1 (Anthropic system card: "sharing identical model weights").

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Anthropic system card, max effort; rank 3/29, 93rd percentile, BenchmarkList — field leader Claude Opus 5.5 66.4%). This is the Mythos-specific figure; Fable 5.1's same-weights score under active cyber safeguards is 55.8% — the gap is safeguard interventions, not capability.
- GDPval-AA v2, AutomationBench, CursorBench: Anthropic reports these for the pair's Fable 5.1 configuration (1853 Elo, 31.4%, 73.4%); no separate Mythos-column number published.
- ExploitBench v8-bench (cyber): **83.0% capability**, 222/410 full ACEs, mean 12.61 AutoNudge flags — rank 2/16 (field leader Claude Opus 5.5 14.15 flags / slightly higher).
- Tau3/Tau2 / Claw-Eval / Toolathon / OSWorld (Mythos column): no verified public score found.

Reasoning / knowledge:

- ArXivMath: **93.9%** with tools / **91.3%** without (rank 5/35, BenchmarkList).
- HLE / GPQA / AA Intelligence Index: no Mythos-column figure published (Anthropic reports these for Fable 5.1 unless noted). BBQ language understanding: 89.9% disambiguated accuracy (rank 2/7).
- System card: Mythos 5.1 leads most internal/partner life-sciences benchmarks (BioMysteryBench, LatchBio bioinformatics, ProteinGym Hard, protein design, organic chemistry) — values not public.

Coding:

- System card §8 covers SWE-bench Pro/Multilingual/Multimodal, DeepSWE v1.1, FrontierCode, FrontierSWE v2, Terminal-Bench-Science 0.1, CursorBench 3.2.0 for the Fable/Mythos pair — the published capability tables cite Fable 5.1 unless noted; no Mythos-only SWE-bench/DeepSWE/LiveCodeBench number found.
- Cybersecurity coding: strongest cyber capabilities of any released Anthropic model (ExploitBench/OSS-Fuzz/Firefox 147/ExploitGym meet-or-exceed Claude Mythos 5; substantially ahead of Opus 5).

Long context:

- ProgramBench long-context section exists in the system card for this pair; no public Mythos-specific retrieval percentage found — "no long-context retrieval reported" for Mythos 5.1 itself beyond the 1M window spec.

### Normalized scores (1–100)

- **Tool use: 91/100.** TB4.0 60.9% at rank 3/29 plus the field-leading cyber agent suite (ExploitBench 83%, rank 2/16) and the pair's GDPval-AA 1853 level (above the 1750+ ref, reported under the same-weights Fable configuration); capped below 94 by no Tau3/Claw-Eval row and GDPval being published for the Fable column only.
- **Reasoning: 94/100.** Same-weights configuration as Fable 5.1, whose HLE 60.9 no-tools and AA Index 66 both clear the frontier refs; Mythos-specific ArXivMath 93.9/91.3 corroborates. No Mythos-column GPQA/MRCR holds the absolute ceiling.
- **Context window: 95/100.** 1M window at the ≥1M tier floor; no public needle-retrieval score for this configuration.
- **Multimodal: 68/100.** Text + image in, text out = the 60–70 band; no video/audio input, no non-text output.
- **Coding: 93/100.** Same weights as Fable 5.1 (SWE-bench Verified 95.0%, LiveCodeBench 90.52%, ProofBench 100% under that column) plus Mythos's own TB4.0 60.9%; capped at 93 by DeepSWE ~67% level for the pair (below the 74% ref) and no Mythos-column SWE-bench row.
- **Cost efficiency: 36/100.** $10/$50 is the 30 anchor; the $0.25 cache reads (75% cut, up to ~45% agentic savings) and 50% batch discount add the same +6 as the Fable-class rate card — still a top-tier price, and access requires program approval.
- **Overall Score: 88/100.** (91+94+95+68+93)/5 = 88.2 → 88 — same-weights ceiling as Fable 5.1 with relaxed cyber/bio safeguards; only relevant to vetted security and life-sciences teams, everyone else should use Fable 5.1.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Anthropic announcement, platform docs, Fable/Mythos system card, BenchmarkList, S5 Labs, thekb.eu); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Claude Mythos 5.1 — findings by Mimo V2.6 Flash

- Source: Anthropic/`claude-mythos-5.1`
- Date: 2026-10-06 (UTC) — re-run of the 2026-09-23 research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's restricted-safeguard configuration of the Claude Fable 5.1 weights (same model, lighter cyber/life-science guardrails) for vetted enterprise users; powers Claude Security. Flagship-class coding/knowledge model, invite-only.
- **Provider / access:** Claude API / Anthropic, AWS Bedrock, Google Cloud, Microsoft Foundry — **invite only** (Cyber Verification Program + Life Sciences Verification Program / Project Glasswing); no standard self-serve API key, no OpenCode Zen Free ID (`noFreeId: true`).
- **Release / knowledge:** 2026-09-01 (system card / announcement); knowledge cutoff Jan 2026 (shared with Fable 5.1).
- **IDs:** `claude-mythos-5-1` (logical; API docs show generation IDs like `claude-mythos-5` for the prior Mythos 5 — confirm exact 5.1 ID with Anthropic account team). Not available as a free ID.
- **Context window:** 1M tokens input / 128K max output (Fable 5.1 / Mythos spec tables).
- **Modalities:** text, image in; text out; adaptive thinking always on (default effort high); tool calls; no audio/video out.
- **Pricing (as of 2026-10-06):** $10.00 / $50.00 per 1M in/out (Fable-5.1 sibling list rate); cache reads **$0.25**/1M (75% cut vs Fable 5); batch 50% off — list rate for approved orgs only. BenchmarkList (2026-10-06) shows **"Price not published"** for Mythos 5.1 itself (8 tracked benchmarks, all first-party) — invite-gated, so sibling pricing is the anchor.
- **Architecture:** proprietary; identical weights to Fable 5.1 — difference is safeguard configuration only.

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = no verified public score found.
> Note: several agentic rows are Anthropic-published for Mythos 5.1 or its identical-weight sibling Fable 5.1; sibling rows are marked.

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Anthropic, Mythos 5.1; Fable 5.1 sibling 55.8%)
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic, Fable 5.1 sibling; Mythos track inherits capability class)
- CursorBench 3.2.0: **73.4%** (Anthropic, Fable 5.1)
- AutomationBench: **31.4%** (Anthropic, Fable 5.1)
- GDPval-AA v2: **1853** (Anthropic, Fable 5.1; Opus 5 1824, GPT-5.6 Sol 1711)
- OSWorld 2.0: **41.7%** strict / **77.9%** partial cited in secondary coverage (Anthropic; harness-sensitive)
- MCP Atlas / Toolathlon / Tau3: **no verified public score found** for Mythos 5.1 specifically
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- HLE with tools: **65.0%** (Anthropic, Fable 5.1 sibling — same weights)
- GPQA Diamond: **no verified public score found** in the 5.1 announcement rows reviewed (prior Mythos/Fable-class scores exist but not republished here — not inventing a value)
- LCR / MLCR / CritPt: **no verified public score found**
- AA Intelligence Index / BenchLM overall: **no verified public score found** for Mythos 5.1 (invite-only limits third-party indexing; BenchmarkList 2026-10-06 tracks only 8 first-party rows — no AA Index)
- AA-Omniscience net score: **0.56 / 0.57 net** (0.77 correct / 0.20 incorrect / 0.02 abstained) — rank **3 of 11**, behind only O-5.5's 0.58 (Anthropic system card via BenchmarkList, 2026-10-06 — fills the former Omniscience gap)
- Omniscience: **no verified public score found**

Coding:

- Terminal-Bench 4.0 (agentic coding): **60.9%** (Mythos 5.1)
- CursorBench 3.2.0: **73.4%** (Fable 5.1 sibling)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe: **no verified public score found** in the sources reviewed for this exact 5.1 release (system card has fuller tables behind Anthropic's PDF; numbers not in the public snippets used here)
- Domain demos: protein binder design ~50% hit rate across 12 targets; Venus map; 2.5× GPU-kernel speedups (Anthropic) — qualitative/scientific, not standard coding benches
- Terminal-Bench 4.0 (BenchmarkList, 2026-10-06): **60.9%, rank 3 of 29** — confirmed as the same system-card row; BenchmarkList notes it "mainly shows the effect of fewer cyber-safeguard interventions vs Fable 5.1" (Fable sibling 55.8%)
- ExploitBench v8-bench: **83.0% capability, 222/410 full ACEs** (rank 2/16 — Anthropic system card; the cyber-safeguard differentiation in numbers)
- ArxivMath: **93.9% with tools / 91.3% without** (rank 5/35); ProteinGym Hard: **49.3% rank correlation (rank 1/10)**; BioMysteryBench 90.3% solvable / 44.1% difficult; LatchBio SpatialBench Verified 77.6% / SingleCellBench 61.8% (rank 2/7); BBQ 89.9% disambiguated (BenchmarkList 2026-10-06)

Long context:

- 1M window documented; MRCR / RULER retrieval: **no verified public score found** in public announcement (system card discusses long-context evals; specific % not extracted here)

Multimodal:

- Text + image in, text out (spec tables); MMMU / CharXiv / Video-MME: **no verified public score found** for 5.1 in the rows reviewed

### Normalized scores (1–100)

- **Tool use: 93/100.** TB4.0 60.9, CursorBench 73.4, GDPval-AA v2 1853 (above Opus 5 / Sol), AutomationBench 31.4 — elite agentic/tool profile; capped by missing public Tau/MCP/Claw rows and invite-only third-party verification.
- **Reasoning: 93/100.** HLE-with-tools 65.0% on identical weights is frontier; AA-Omniscience net 0.56 (rank 3/11) now measured; still missing public GPQA/Index rows for Mythos specifically, which prevents a 95+.
- **Context window: 95/100.** 1M input / 128K output hits the ≥1M tier (95–100); no public MRCR % to justify higher.
- **Multimodal: 68/100.** Image + text in only (no audio/video/PDF called out, text out) → +image-in band 60–70.
- **Coding: 93/100.** TB4 60.9 (Mythos), CursorBench 73.4, science-terminal 52.6, GPU-kernel demos — top agentic coding; capped slightly by no public SWE-V/LCB row for this exact ID.
- **Cost efficiency: 30/100.** $10/$50 matches the ~$10/$50≈30 anchor; $0.25 cache reads help agentic loops but list price stays premium; no free tier.
- **Overall Score: 88/100.** Mean of Tool 93 + Reasoning 93 + Context 95 + Multimodal 68 + Coding 93 = 442/5 = 88.4 → **88** (best-fit: highest-end invite-only pick for cyber/life-science and long-horizon agentic coding when program access exists; otherwise use GA Fable/Opus siblings).

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-10-06
- Method: public internet research (Anthropic announcement, system card PDF snippets, AI/TLDR, Coursiv, OrcaRouter); re-run 2026-10-06 (user-approved enrichment): BenchmarkList model page (8 first-party rows, price not published) — filled AA-Omniscience (0.56, rank 3/11), ExploitBench v8 (83.0%), ArxivMath, ProteinGym Hard (rank 1), LatchBio, BioMysteryBench, BBQ rows; TB4.0 60.9% rank 3/29 confirmed; GPQA/LCR/Index/SWE-V/LCB gaps re-confirmed. Scores unchanged: 93+93+95+68+93 = 442/5 = 88.4 → 88. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

