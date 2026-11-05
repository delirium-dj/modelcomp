# Claude Mythos 5.1 — findings by Mistral Large 4

- Source: Anthropic (`claude-mythos-5-1`, restricted)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's most capable model line, released as a safeguards-relaxed configuration of the same underlying weights as Claude Fable 5.1; invitation-only for vetted cybersecurity and life-sciences work (Project Glasswing, Cyber/Life Sciences Verification Programs). Variant note: NOT a separate model from Fable 5.1 — one set of weights, two safeguard configurations.
- **Provider / access:** Not on the public API price list — invite-only via Project Glasswing (~150 new orgs in 15+ countries), US organizations in the Cyber Verification Program and Life Sciences Verification Program; contact Anthropic/AWS/Google Cloud account teams. Claude Security product runs on Mythos 5.1.
- **Release / knowledge:** Announced 2026-09-01 alongside Fable 5.1; joint system card dated September 1, 2026; knowledge cutoff June 2026 (per system card).
- **IDs:** `claude-mythos-5-1` (restricted API routes for vetted orgs); no public OpenRouter/Zen listing verified.
- **Context window:** 1,000,000 tokens (Claude 5.x family standard, shared weights with Fable 5.1).
- **Modalities:** Text + image in, PDF in, text out; adaptive/preserved thinking; tool calls; JSON mode (same family as Fable 5.1).
- **Pricing (as of 2026-11-05):** No public list price for 5.1 (account-team quotes); lineage pricing for Mythos Preview (2026-04-07) was $25/$125 per 1M in/out — cited as lineage only, labelled with the ID actually measured.
- **Architecture:** Proprietary, weights not disclosed; strongest cyber capabilities of any Anthropic-released model (system card); treated at the highest risk tier (above CB-1; Mythos-class evaluations per August 2026 Risk Report).

### Raw benchmarks found

Joint system card (2026-09-01) + official mythos page, cross-checked against llm-stats, BenchLM, Wikipedia, Unite.AI, thezvi, ai-tldr. Lineage figures measured under `claude-mythos-preview` are labelled as such per alias rules:

Agent / tool use:

- OSWorld 2.0 (August 2026 task release): score published on anthropic.com/claude/mythos; Fable 5 and Opus 5 re-run under same conditions; not comparable to earlier OSWorld releases — exact % not captured in reviewed snippets
- CyberGym: **83%** (lineage: claude-mythos-preview, 2026-04) (llm-stats)
- Cybench: **100%** (lineage: claude-mythos-preview) (claudemythos5.vercel.app aggregator)
- Epoch ECI: **163** for Fable 5.1/Fable 5 (same weights); GPT-6 Astra 169 (thezvi substack)
- GDPval / AutomationBench / Claw-Eval: no verified public score found for mythos-5-1 specifically

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (lineage: claude-mythos-preview; four-way tie with Opus 4.7/GPT-5.4/Gemini 3.1 Pro at 94.2–94.6% "within noise" per claudefa.st) 
- HLE / LCR / CritPt: no verified public score found for mythos-5-1 specifically
- Artificial Analysis Intelligence Index: no public AA score (restricted access); Fable 5.1 twin readings 53.4–66 across versions/efforts (conflicting, cited in Fable 5.1 report)
- BioMysteryBench: 90.3% vs 91.4% prior (thezvi) — small regression noted

Coding:

- SWE-bench Verified: **93.9%** (lineage: claude-mythos-preview, highest on record per llm-stats); HN discussion cites SWE-bench/MMLU figures for the Preview line
- SWE-Pro / FrontierSWE / LiveCodeBench: no verified public score found for mythos-5-1 specifically

Long context:

- 1M window (family standard); no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 90/100.** Strongest-published cyber evals (CyberGym 83%, Cybench 100%, lineage-labelled) and OSWorld 2.0 reporting, but most numbers are Preview-lineage, not mythos-5-1-specific.
- **Reasoning: 92/100.** GPQA 94.6% lineage and ECI 163 (Fable twin) are frontier-tier; no 5.1-specific HLE/LCR published.
- **Context window: 96/100.** 1M family window in the 95–100 tier; no verified 512K+ retrieval number for this ID.
- **Multimodal: 85/100.** Text/image/PDF in, text out (same weights as Fable 5.1); no audio/video or non-text output.
- **Coding: 93/100.** SWE-bench Verified 93.9% lineage is the highest on record; capped below 95 because no mythos-5-1-specific SWE-Pro/LiveCodeBench numbers exist.
- **Cost efficiency: 18/100.** No public price; lineage $25/$125 per 1M (off the methodology scale, below the $10/$50 ≈ 30 band); invite-only access further caps practical value.
- **Overall Score: 91/100.** Half-up mean of (90 + 92 + 96 + 85 + 93) / 5 = 91.2 → 91. Best fit: vetted cyber-defense and life-sciences research where its relaxed-safeguard config is approved; general users should use the Fable 5.1 twin instead.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (6 web searches + official anthropic.com/claude/mythos page fetched, 2026-11-05 UTC); official Anthropic pages/system card prioritized, cross-checked against llm-stats, BenchLM, Unite.AI, thezvi, ai-tldr, Wikipedia; lineage figures measured under claude-mythos-preview are labelled, never silently merged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Mythos — Anthropic (official page, OSWorld 2.0 Aug-2026 note)](https://www.anthropic.com/claude/mythos)
  - [System Card: Claude Fable 5.1 & Claude Mythos 5.1 (2026-09-01, PDF)](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20%26%20Claude%20Mythos%205.1%20System%20Card.pdf)
  - [Project Glasswing — Anthropic](https://www.anthropic.com/glasswing)
  - [Unite.AI — Fable 5.1 / Mythos 5.1 split-safeguards launch (2026-09-01)](https://www.unite.ai/anthropic-debuts-claude-fable-5-1-and-mythos-5-1-with-split-safeguards/)
  - [llm-stats — Claude Mythos Preview launch research (SWE-V 93.9%, GPQA 94.6%, CyberGym 83% — lineage)](https://llm-stats.com/blog/research/claude-mythos-preview-launch)
  - [ai-tldr — claude-mythos-5-1 access/specs (invite-only, $25/$125 lineage)](https://ai-tldr.dev/models/claude-mythos-5-1/)
  - [thezvi substack — Mythos 5.1 / Fable 5.1 capabilities (ECI 163, BioMysteryBench 90.3%)](https://thezvi.substack.com/p/claude-mythos-51-and-fable-51-capabilities)
  - [Local AI Zone — Mythos 5.1 technical analysis (one weights, two products)](https://local-ai-zone.github.io/blog/Claude_Mythos_5.1_Technical_Analysis.html)
  - [BenchLM — claude-mythos-5](https://benchlm.ai/models/claude-mythos-5)
  - [Wikipedia — Claude Mythos (release history, restricted access)](https://en.wikipedia.org/wiki/Claude_Mythos)
