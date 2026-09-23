# Claude Mythos 5.1 — findings by Muse Spark 1.2

- Source: Anthropic/claude-mythos-5.1 (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's restricted configuration of Claude Fable 5.1 with cybersecurity and life-sciences safeguards relaxed for vetted enterprise users; same weights as Fable 5.1.
- **Provider / access:** Anthropic API `claude-mythos-5-1` (restricted — Cyber Verification Program / Life Sciences Verification Program, US-only); Fable 5.1 generally available via Anthropic API, AWS, GCP, Azure
- **Release / knowledge:** 2026-09-01 release; knowledge cutoff 2026-06 (per Anthropic system card)
- **IDs:** `anthropic/claude-mythos-5.1` (curated), API `claude-mythos-5-1` (restricted)
- **Context window:** 1,000,000 total / 128,000 max output — verified via Anthropic system card and launch announcement
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking); tool calls yes; computer use yes; JSON mode yes
- **Pricing (as of 2026-09-23):** Paid $10/$50 per 1M input/output (no Zen Free ID; Fable 5.1 pricing identical, cache-read -75% per VentureBeat)
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Mythos 5.1) vs Fable 5.1 55.8% / Opus 5 52.3% / GPT-5.6 Sol 37.3% — Anthropic harness, gap reflects safeguard cost (source: Anthropic system card 2026-09-01, Anthropic blog, TheAIrankings, Shattered.io summary)
- Terminal-Bench-Science 0.1: **52.6%** (shared weights Fable 5.1) vs Fable 5 24.7% / Opus 5 29.0% ±3.5-4.5 SE (source: Anthropic launch table — Mythos/Fable same weights)
- GDPval-AA v2: **1853 Elo** (shared Fable 5.1) vs Opus 5 1824 / Fable 5 1723 (source: Anthropic)
- CursorBench 3.2.0: **73.4%** (shared) vs Fable 5 70.5% / Opus 5 70.0% (source: Anthropic)
- AutomationBench: **31.4%** (shared) vs Opus 5 26.9% / Fable 5 17.1% (source: Anthropic)
- Tau3-Banking / Tau2-Bench: **no verified public score found** (no isolated Mythos 5.1 Tau2 publication; restricted access prevents AA independent measurement)
- GDPval-AA: see 1853 above
- Claw-Eval / ClawProBench: **no verified public score found** (no isolated Mythos 5.1 Claw publication)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** (no isolated Toolathon for Mythos 5.1)

Reasoning / knowledge:

- GPQA Diamond: **no verified isolated Mythos 5.1 GPQA found** — proxy via Fable lineage HLE (see below); Fable 5 predecessor 91.3% via Frontierlog, not Mythos 5.1 isolated
- HLE: **60.9% no tools / 65.0% with tools** (Fable 5.1 shared weights — Mythos same weights, few-point uplift vs Fable 5 57.8%/63.8% and Opus 5 56.6%/63.6%) (source: Anthropic launch table, IntelligentLiving)
- LCR / MLCR: **no verified public score found** (no LCR for Mythos 5.1 published)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified independent score found — restricted access, AA notes "cannot score model it cannot access"** (source: TheAIrankings 2026-09-02: "Independent scoring None — Artificial Analysis cannot access it")
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (AA-Omniscience for Mythos 5.1 is 0.57 net in system card but not comparable to AA index methodology)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (Anthropic did not publish SWE-bench for Fable/Mythos 5.1; System card reports no SWE figure)
- LiveCodeBench: **no verified public score found** (no isolated LCB for Mythos 5.1)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified isolated DeepSWE for Mythos 5.1** — proxy via Terminal-Bench agentic coding above

Long context:

- 1M / 128K out — no MRCR/RULER at max window publicly disclosed for Mythos 5.1 beyond vendor long-context suite (ProgramBench); Artificial Analysis notes no independent MRCR disclosed

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 4.0 60.9% #1 in Anthropic table + TB-Science 52.6% (2× predecessor) + OSWorld 77.9% partial /41.7% strict + AutomationBench 31.4%; capped by restricted access blocking independent Tau2/Claw verification.
- **Reasoning: 88/100.** HLE 60.9%/65.0% strong scientific reasoning + GDPval 1853 frontier knowledge work; capped by missing independent GPQA Diamond / AA Intelligence Index due to gated access.
- **Context window: 96/100.** 1M total /128K out verified — tier 95-100 per methodology; capped below 100 without public MRCR 1M pointwise disclosure.
- **Multimodal: 62/100.** Text, image in; text out only (per meta); no video/audio/PDF in, so below full omni models (88 for Gemini full-stack).
- **Coding: 87/100.** Terminal-Bench 4.0 60.9% + CursorBench 73.4% + TB-Science 52.6% show frontier agentic coding; capped by missing isolated SWE-bench Verified / LiveCodeBench / DeepSWE public numbers.
- **Cost efficiency: 35/100.** Paid $10/$50 per 1M (no Zen Free ID, US-only verification) — flagship cost tier, cache discount helps but remains expensive.
- **Overall Score: 85/100.** Mean of five non-cost dims (92+88+96+62+87)/5=85.0 → 85; best-fit for vetted cyber/bio defensive work where permissive safeguards justify cost, otherwise Fable 5.1 for general use.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (Anthropic system card 2026-09-01, Anthropic blog, VentureBeat, BenchmarkList, TheAIrankings, Shattered.io); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
