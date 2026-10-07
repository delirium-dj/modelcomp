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
