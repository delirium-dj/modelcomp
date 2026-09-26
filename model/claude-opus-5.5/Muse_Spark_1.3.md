# Claude Opus 5.5 — findings by Muse Spark 1.3

- Source: Anthropic/Claude Opus 5.5 (`anthropic/claude-opus-5-5`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** First model of Anthropic's Claude 5.5 family; enterprise Opus workhorse positioned at Claude Fable 5.1 level performance for most work at 40% lower run cost than Opus 5, with adaptive thinking and 1M context. Top use case: long-horizon agentic coding and professional knowledge work.
- **Provider / access:** Anthropic API (`claude-opus-5-5`); also on Amazon Bedrock, Google Cloud, Microsoft Azure. Chat Completions-style Messages API.
- **Release / knowledge:** 2026-09-22 release (Anthropic announcement; AWS Bedrock model card launch date 2026-09-22); knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-opus-5-5` (no Free ID exists on Zen — paid only).
- **Context window:** 1M tokens total, 128K max output (AWS Bedrock model card — verified). No public MRCR/RULER retrieval-at-length numbers found.
- **Modalities:** Text + image in; text out; reasoning yes (adaptive thinking always on, cannot be disabled per Bedrock card); tool calls yes; JSON mode supported.
- **Pricing (as of 2026-09-22):** Paid only: output $20/1M (vs $25/1M for Opus 5); Anthropic/Reuters report ~40% lower run cost than Opus 5 (TechCrunch, Reuters, 2026-09-22). No training-data-free-tier caveat applies (paid tier).
- **Architecture:** Proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- FrontierCode (**agentic coding, default effort**): beats GPT-6 Astra at roughly 20% of the cost per task (Anthropic official announcement via anthropic.com, 2026-09-22 — relative claim, no absolute pass rate published)
- GDPval-AA v2.1: **1846 Elo** at max effort (Anthropic official; vs Fable 5.1 1735, Opus 5 1708 — anthropic.com announcement + VentureBeat 2026-09-22)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (closest proxy, provisional: Fable-5.1-level positioning per Anthropic; Opus 5 generation scored GPQA ~93%+ class per third-party tables)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (Anthropic reports an internal research-eval where 16/18 Opus 5.5 reports cleared a no-invented-figure quality bar — VentureBeat 2026-09-22; not a public hallucination-rate number)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** for 5.5 (closest proxy, provisional: Opus 5 scored 79.2% SWE-bench Pro per Codersera/Anthropic Aug 2026; Anthropic positions 5.5 at Fable-5.1 level on most work)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported (no public MRCR/RULER/GraphWalks number for Opus 5.5; 1M window verified via Bedrock card only)

### Normalized scores (1–100)

- **Tool use: 90/100.** GDPval-AA v2.1 1846 Elo at max effort (above Fable 5.1's 1735) plus FrontierCode default-effort win over GPT-6 Astra at ~20% task cost evidence frontier agentic capability; capped at 90 by absence of any public Terminal-Bench 2.1 / Tau3 / OSWorld number.
- **Reasoning: 90/100.** Provisional on Anthropic's Fable-5.1-level positioning and Opus-generation knowledge-work strength (GDPval 1846); capped at 90 with no public GPQA Diamond, HLE, or Intelligence Index score for this exact ID.
- **Context window: 97/100.** Verified 1M total / 128K out (Bedrock card) puts it in the ≥1M tier (95–100); held below 100 for lack of any published ≥512K retrieval-fidelity measurement.
- **Multimodal: 65/100.** Text + image in, text-only out (no video/audio in, no non-text out) — mid-band of the 60–70 image-in tier.
- **Coding: 93/100.** FrontierCode leadership claim at default effort and Fable-level positioning, consistent with the Opus 5 generation's 79.2% SWE-bench Pro class; capped below 95 with no 5.5-specific SWE-bench Verified/Pro, Terminal-Bench, or DeepSWE number.
- **Cost efficiency: 62/100.** Paid-only at ~$3/$20-class pricing (~40% cheaper to run than Opus 5's $5/$25); near the $3/$15 ≈ 60 reference point, +2 for the generational price cut.
- **Overall Score: 87/100.** Mean of the five non-cost dims (90 + 90 + 97 + 65 + 93) / 5 = 87.0; best fit as the price-cut enterprise Opus for agentic coding/knowledge work once third-party benches confirm the launch claims.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (Anthropic announcement, AWS Bedrock model card, Reuters/TechCrunch/VentureBeat launch coverage, Vals AI model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
