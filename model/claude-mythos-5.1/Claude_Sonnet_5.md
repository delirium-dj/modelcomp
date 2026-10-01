# Claude Mythos 5.1 — findings by Claude Sonnet 5

- Source: Anthropic/Claude Mythos 5.1 (`claude-mythos-5-1`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 (invite-only / Project Glasswing; no free tier)
- **Short description:** Anthropic's restricted-access "Mythos-class" frontier model, released September 1, 2026. It is the same underlying weights as the generally-available Claude Fable 5.1, but shipped without Fable's cybersecurity and biology safety classifiers, and is gated behind a verification program run with the US government. Top use case: controlled-access agentic/terminal and life-sciences research work under supervision.
- **Provider / access:** Anthropic Claude Platform, `claude-mythos-5-1`; also offered via AWS and Google Cloud through Project Glasswing invitation only (contact Anthropic/AWS/Google Cloud account team). Uses Anthropic's Messages API (not OpenAI-style Chat Completions/Responses API).
- **Release / knowledge:** Released 2026-09-01; reliable knowledge/training cutoff June 2026.
- **IDs:** `anthropic/claude-mythos-5-1` (no Free-tier ID exists; invite-only, not available on OpenCode Zen).
- **Context window:** 1,000,000 tokens total; 128K max output. Figure is the vendor-stated window (Anthropic docs); no independently verified long-context retrieval score (e.g., MRCR/RULER/GraphWalks) was found for this specific model.
- **Modalities:** Text and image input → text output. Reasoning: yes (adaptive thinking, always on, default effort "high"). Tool calls: yes (agentic/terminal use). JSON mode: not separately confirmed in sources reviewed.
- **Pricing (as of 2026-10-01):** $10 / $50 per MTok input/output; 5-minute cache write $12.50/MTok; 1-hour cache write $20/MTok; cache read $0.25/MTok (a 75% cut from the prior generation); Batch API 50% discount on input and output. Not a free tier; access itself requires Glasswing program approval (no separate "free privacy" caveat disclosed).
- **Architecture:** Proprietary; parameter count/active params and training details not disclosed. Shares base weights with Claude Fable 5.1 ("one set of weights, two products"), differing only in which safety classifiers are applied.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found (sources report Terminal-Bench **4.0**, not 2.1, for this model — see below; one secondary aggregator mislabels the 4.0 figure as 2.1, so it is not used here)
- Terminal-Bench 4.0 (non-standard harness, reported directly by Anthropic/press): **60.9%** (Anthropic Fable 5.1 & Mythos 5.1 launch coverage — Vellum, VentureBeat, MarkTechPost)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for Mythos 5.1 specifically (Fable 5.1, the sibling GA model, scored 93.4% per Vals AI — not used here since it is a distinct product/safeguard configuration)
- HLE (Humanity's Last Exam): **65%** (Vellum LLM Leaderboard, "Best Overall (HLE)" table)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: BenchLM lists Mythos 5.1 as "Not ranked" / "Not eligible for a public rank" (insufficient non-generated benchmark coverage) — no verified overall index score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found for Mythos 5.1 (Vellum leaderboard explicitly shows a blank/dash for Mythos 5.1 under "Best in Agentic Coding (SWE-Bench)")
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- no long-context retrieval reported for Mythos 5.1 (MRCR/RULER/GraphWalks figures found in sources are attributed to the earlier Claude Mythos Preview model, not 5.1, and are not reused here)

### Normalized scores (1-100)

- **Tool use: 72/100.** Based on the one verified agentic figure available — 60.9% on Terminal-Bench 4.0, a harder/newer harness than the Terminal-Bench 2.1 referenced in the methodology, so no direct tier mapping applies. Treated as a mid-to-upper estimate since 60.9% on a harder successor benchmark plausibly implies stronger capability than the same number on TB2.1, but this is an approximation flagged by the mismatch in harness version; no Tau3-Banking or GDPval-AA data exists to corroborate.
- **Reasoning: 93/100.** Driven by a verified HLE score of 65%, which is well above the "frontier" HLE 40%+ threshold in the rubric. However, no GPQA Diamond, LCR, or CritPt score could be verified for this exact model, so confidence is moderate rather than high despite the strong single data point.
- **Context window: 95/100.** Vendor-confirmed 1M-token window (Anthropic Claude Platform docs) places it in the ≥1M tier (95-100), but the 100 ceiling is withheld because no independently verified retrieval benchmark (MRCR/RULER) at 512K+ exists specifically for Mythos 5.1.
- **Multimodal: 65/100.** Text and image input, text-only output, per Anthropic's own model page — matches the "+image in" tier (60-70).
- **Coding: 60/100.** No SWE-bench Verified, LiveCodeBench, or SciCode score could be verified for Mythos 5.1 itself. This figure is a low-confidence estimate inferred only from the Terminal-Bench 4.0 agentic/terminal proxy score, since Vellum's leaderboard explicitly shows no SWE-bench entry for this model; treat with caution.
- **Cost efficiency: 30/100.** $10/$50 per MTok input/output (Anthropic Claude Platform docs) maps directly to the rubric's "$10/$50 = ~30" tier. Note access itself is additionally gated by invitation (Project Glasswing), which is not reflected in the price-only score.
- **Overall Score: 77.0/100.** Mean of Tool use (72), Reasoning (93), Context window (95), Multimodal (65), Coding (60) = 385/5 = 77.0. Best fit: supervised, high-context agentic/terminal and research workloads inside Anthropic's Glasswing verification program, where its unusually strong HLE result and 1M-token window are assets — but it is not a general-purpose or cost-efficient pick, is not publicly purchasable, and lacks independently verified coding/retrieval benchmarks at this time.

---

## Signature

- Provided by: **Claude Sonnet 5 (anthropic/claude-sonnet-5)** — 2026-10-01
- Method: Public web research via web search against vendor documentation (Anthropic Claude Platform docs, Anthropic system card for Claude Fable 5.1 & Claude Mythos 5.1), press coverage (VentureBeat, MarkTechPost), and third-party benchmark aggregators (Vellum LLM Leaderboard, BenchLM, BenchmarkList, Wikipedia); scores are normalized 1-100 interpretations, not official vendor scores. Several standard methodology benchmarks (GPQA Diamond, SWE-bench Verified, LiveCodeBench, long-context retrieval) had no verified public score specifically attributed to Mythos 5.1 at the time of research and are marked accordingly rather than inferred from sibling models.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
