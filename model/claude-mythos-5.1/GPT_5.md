# Claude Mythos 5.1 — findings by ChatGPT 5 (openai/gpt-5)

- Source: Anthropic (`claude-mythos-5-1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 (invite-only / Project Glasswing; no Free-tier wording — access is gated, not free)
- **Short description:** Anthropic's most capable model for cybersecurity defense and life-sciences research — identical underlying weights to Claude Fable 5.1 but shipped with lighter, domain-tuned safeguards for vetted cyber and biology work. Top use case: authorized vulnerability discovery, red teaming, threat intelligence, and drug-discovery / biodefense screening.【turn0search3】【turn0search4】【turn0search9】
- **Provider / access:** Claude API (`claude-mythos-5-1`), Amazon Bedrock (`anthropic.claude-mythos-5-1`), Google Cloud Vertex (`claude-mythos-5-1`), Microsoft Foundry (`claude-mythos-5-1`). Chat Completions / Messages API. Access is by invitation via Anthropic's **Cyber Verification Program (CVP)** and **Life Sciences Verification Program (LSVP)**, US-only.【turn1fetch0】【turn0search0】
- **Release / knowledge:** Released September 1, 2026; knowledge cutoff June 2026; retirement not sooner than September 1, 2027.【turn1fetch0】
- **IDs:** `anthropic/claude-mythos-5-1` (also `claude-mythos-5-1` on Claude API / GCP / Microsoft Foundry; `anthropic.claude-mythos-5-1` on Bedrock). **No Free ID exists on OpenCode Zen** — the model is not listed on Zen; it is invite-only across the four host platforms.【turn1fetch0】
- **Context window:** 1,000,000 tokens total; 128K max output. Verified via Claude Platform Docs model card and AWS Bedrock model card.【turn1fetch0】【turn0search3】
- **Modalities:** Text + image in → text out; always-on adaptive reasoning (thinking); tool calls; JSON mode. No native audio/video input confirmed on the model card.【turn1fetch0】【turn0search18】
- **Pricing (as of 2026-10-02):** Input $10 / Output $50 per 1M tokens; 5-min cache write $12.50; 1-hr cache write $20; **cache read $0.25** (75% below Fable 5); Batch API 50% off. Identical sticker price to Fable 5.1; Anthropic reports ~25% cheaper typical workloads and up to ~45% cheaper highly-agentic workloads due to cache pricing. No free tier; invite-only access means no public free-tier privacy caveat applies.【turn1fetch0】【turn0search9】
- **Architecture:** Proprietary; weights private. Anthropic does not disclose parameter count or MoE structure. Mythos 5.1 = Fable 5.1 weights with different safeguard configuration.【turn1fetch1】【turn0search9】

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (BenchmarkList surfaces an implausible 0.9% artifact inconsistent with the tbench.ai 2.1 range and the methodology's ~88% frontier anchor; not propagated)【turn2fetch0】【turn4search10】
- Terminal-Bench 4.0: **60.9%** Mythos 5.1 / 55.8% Fable 5.1 (Anthropic launch table, rank context: ahead of Opus 5 52.3%)【turn2fetch0】【turn0fetch1】
- Tau3-Banking / Tau2-Bench: **47.2%** (BenchmarkList, rank 6 of 174, 97th pct)【turn2fetch0】
- GDPval-AA: **1853** (Anthropic launch table / BenchmarkList GDPval-AA v2, rank 2 of 340, 100th pct)【turn2fetch0】【turn0fetch1】
- OSWorld 2.0 (Aug 2026 task release): **77.9%** partial / **41.7%** strict (Anthropic, rank 1 of 3 — small field)【turn2fetch0】【turn0fetch1】
- AutomationBench: **31.4%** (Anthropic, rank 17 of 42, 61st pct)【turn2fetch0】【turn0fetch1】
- AA-Briefcase: **1694 Elo** (BenchmarkList, rank 2 of 56, 98th pct)【turn2fetch0】
- DRACO: **87.7%** at max effort (BenchmarkList, rank 1 of 13)【turn2fetch0】
- Toolathlon: **77.8%** Pass@1; 81.5% Pass@3; 73.1% Pass^3 (BenchmarkList, rank 6 of 37)【turn2fetch0】
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathlon 77.8% Pass@1 (above); MCP-Atlas / SWE-Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.7%** (BenchmarkList, rank 8 of 464, 98th pct)【turn2fetch0】
- HLE: **60.9%** no-tools / **65.0%** with-tools (Anthropic launch table; BenchmarkList ranks the with-tools figure #1 of 466, 100th pct)【turn1fetch0】【turn2fetch0】
- LCR / MLCR: AA-LCR v1.1 **80.0%** (BenchmarkList, rank 9 of 409, 98th pct); MLCR-AA **no verified public score found**【turn2fetch0】
- CritPt: **31.1%** (BenchmarkList, rank 2 of 31, 97th pct)【turn2fetch0】
- Artificial Analysis Intelligence Index / BenchLM overall: **65.7 / #1 of 418** (BenchmarkList, 100th pct); current AA page v4.3.2 "max with fallback" reads **53 / #5 of 224** (index reweighted post-launch); launch AA article reported **66 / #1**. BenchLM overall **82.82 / #4 of 211** (source-verified position #2 of 74)【turn2fetch0】【turn1fetch1】【turn0search17】【turn4search5】
- Omniscience Accuracy / Hallucination Rate: AA-Omniscience Index **43.45** (rank 1 of 28, 100th pct); separate Accuracy % / Hallucination % sub-scores: **no verified public score found**【turn2fetch0】

Coding:

- SWE-bench Verified / SWE-Pro: SWE-bench Verified **96.6%** "Max" (Mercor APEX leaderboard, rank #3 — note: Anthropic did not headline a SWE-bench Verified figure at launch; this is an independent leaderboard run); SWE-bench Pro **81.2%** (BenchmarkList, rank 1 of 49, 100th pct)【turn4search0】【turn2fetch0】【turn4search4】
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **62.0%** (BenchmarkList, rank 1 of 458, 100th pct)【turn2fetch0】
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: DeepSWE 1.1 **67.4%** Pass@1 (BenchmarkList, rank 10 of 33; cited from system card); CursorBench 3.2.0 **73.4%** (rank 1 of 17, 100th pct); SWE-bench Multilingual **89.1%** (rank 3 of 46); Senior SWE-Bench **34.7%** (rank 1 of 18); Terminal-Bench 4.0 60.9%/55.8% (see Tool use); FrontierSWE v2 **0.57** (rank 1 of 4, small field); ProgramBench (Anthropic harness) **87.6%** (rank 4 of 8)【turn2fetch0】【turn0search7】

Long context:

- AA-LCR v1.1 **80.0%** at the model's long-context reasoning eval (rank 9 of 409); **no MRCR / RULER / GraphWalks retrieval score publicly reported** for this exact model ID (1M window verified via docs, but no ≥98%-at-512K+ needle-retrieval figure found)【turn2fetch0】【turn4search14】

### Normalized scores (1-100)

- **Tool use: 87/100.** Frontier evidence: GDPval-AA 1853 clears the 1750 frontier bar, OSWorld 2.0 partial 77.9% and DRACO 87.7% are top-tier, Toolathlon 77.8% Pass@1. Capped below 90 because Terminal-Bench 4.0 (60.9% Mythos) sits under the ~88% TB anchor and Tau3-Banking 47.2% sits just under the 50% frontier anchor; AutomationBench 31.4% remains mid.【turn2fetch0】【turn0fetch1】
- **Reasoning: 94/100.** GPQA Diamond 93.7% (≥90% frontier) and HLE 60.9–65.0% (well above the 40% frontier bar) are unambiguous frontier signals; AA-LCR 80.0% and AA Intelligence Index 65.7 (rank 1/418) reinforce it. Capped below 100 by CritPt 31.1%, Omniscience index 43.45, and the post-launch AA page v4.3.2 reading of 53.【turn2fetch0】【turn1fetch1】
- **Context window: 95/100.** Verified 1M-token total (Claude Platform Docs + Bedrock card) → ≥1M tier = 95–100. Held at 95 (not 100) because no verified ≥98% retrieval-at-512K+ MRCR/RULER/GraphWalks figure exists for this model.【turn1fetch0】【turn2fetch0】
- **Multimodal: 65/100.** Text + image input, text output (vision supported); no native video, audio, or PDF input confirmed on the model card → "+image in = 60–70."【turn1fetch0】
- **Coding: 92/100.** SciCode 62.0% clears the 55% frontier bar (rank 1/458); SWE-bench Verified 96.6% (Mercor APEX, independent), SWE-bench Pro 81.2% rank 1, CursorBench 73.4% rank 1, SWE-bench Multilingual 89.1%. Capped below 95 because DeepSWE 67.4% is under the 74% frontier anchor, Senior SWE-Bench is only 34.7%, and Anthropic did not vendor-headline a SWE-bench Verified score.【turn2fetch0】【turn4search0】
- **Cost efficiency: 30/100.** Sticker $10 in / $50 out per 1M maps to the ~30 anchor; the $0.25 cache-read price (98% discount vs output) and Anthropic's claimed 25–45% real-world savings soften effective cost for cache-heavy agentic runs, but raw output price ($50) keeps the score at the anchor.【turn1fetch0】【turn0search9】
- **Overall Score: 86.6/100.** Mean of five non-cost dims (87 + 94 + 95 + 65 + 92 = 433 / 5). Best-fit recommendation: top-tier agentic coding / cyber-defense / life-sciences research model behind an access gate — choose it over Fable 5.1 only when the lighter cyber/biology safeguards are required for legitimate defensive or research work; for general-purpose use, Fable 5.1 delivers the same weights at the same price without the vetting overhead.

---

## Signature

- Provided by: **ChatGPT 5 (openai/gpt-5)** — 2026-10-02
- Method: Public internet research across Anthropic's Claude Platform Docs, AWS Bedrock model card, Anthropic launch blog, the Fable 5.1 & Mythos 5.1 system card, Artificial Analysis, BenchmarkList, BenchLM, Vals AI, Mercor APEX, and Vellum/DataCamp secondary coverage. Mythos 5.1 benchmark numbers are drawn from Anthropic's launch table where Mythos is reported separately, and otherwise inherited from Fable 5.1 (Anthropic confirms the two are the same underlying model, differing only in safeguards); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
