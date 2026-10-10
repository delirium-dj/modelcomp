# Claude Mythos 5.1 — findings by Ling 3.1 Flash

- Source: Anthropic (`anthropic/claude-mythos-5.1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's restricted configuration of Claude Fable 5.1 — the same underlying model with cybersecurity and life-sciences safeguards relaxed for vetted enterprise users, offered by invitation only via Project Glasswing; scores 60.9% on Terminal-Bench 4.0 vs Fable 5.1's 55.8% (the gap reflects where Fable's earlier, less precise safeguards intervened).
- **Provider / access:** Anthropic — invitation only through Project Glasswing (contact your Anthropic, AWS, or Google Cloud account team); Claude API, AWS, Google Cloud. Adaptive thinking always on; default effort `high`.
- **Release / knowledge:** 2026-09-01 (with Fable 5.1); knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-mythos-5.1`. No Free ID on OpenCode Zen (`noFreeId`) — scored on paid pricing.
- **Context window:** 1M tokens total; 128,000 max output.
- **Modalities:** text and image in; text out (per model docs; the shared system card also covers chart/document evals — Chartography, BenchCAD, GDP.pdf).
- **Pricing (as of 2026-10-02):** $10/$50 per 1M input/output (identical to Fable 5.1); cache reads $0.25/M, cache writes $12.50/M (5-min) / $20/M (1-hr); Batch API 50% off.
- **Architecture:** proprietary (Anthropic); parameter count undisclosed — same weights as Claude Fable 5.1.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Mythos 5.1, max effort — the only Mythos-specific row in the shared table; vs Fable 5.1 55.8%, Opus 5 52.3%, GPT-5.6 Sol 37.3%)
- Terminal-Bench-Science 0.1: **52.6%** (shared with Fable 5.1; rank 1/4, ±3.5–4.5)
- GDPval-AA v2: **1853** (shared; vs Fable 5 1723, Opus 5 1824, GPT-5.6 Sol 1711)
- CursorBench 3.2.0: **73.4%** (shared; rank 1/17)
- AutomationBench: **31.4%** (shared; vs Opus 5 26.9%, GPT-5.6 Sol 19.6%)
- AA-AnalystAgent: **57.5** (shared, Artificial Analysis 2026-09-29, ±11.2)
- Toolathlon Verified / OfficeQA / Legal Agent Benchmark: in the shared system card (§8.15); Mythos-specific numbers not separately published
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam: **60.9%** no tools / **65.0%** with tools (shared; AA's independent no-tools run: 59.1%)
- GPQA Diamond: **93.43%** (vals.ai, rank 8/137 — saturated) / **93.7%** (AA's own harness) — shared
- ARC-AGI: **90.0%** (ARC-AGI-2 max, arcprize.org — shared)
- LiveBench: **83.4** (shared, livebench.ai, ±2.7)
- CritPT-Corrected / ArXivMath / DRACO: in the shared system card (§8.9–8.12); Mythos-specific numbers not separately published
- Life sciences: Mythos 5.1 leads most internal and partner benchmarks (BioMysteryBench, LatchBio Bioinformatics, ProteinGym Hard, Protein Design, Organic Chemistry V2, Protocols — system card §8.19; numeric scores not in the public materials reviewed)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Pro: **81.2%** (shared, max effort — rank 1/49, field leader)
- SWE-bench Multilingual: **89.1%** (shared, rank 3/46; BenchmarkList's field-leader annotation reads Mythos at 92.2%)
- SWE-bench Multimodal: **54.7%** (shared, rank 3/15)
- LiveCodeBench: **90.52%** (shared, vals.ai — saturated)
- DeepSWE v1.1: **67.4%** (shared, Pass@1, rank 6/29)
- FrontierCode: **50.9%** Main / **63.6%** Extended (shared, rank 6/27)
- FrontierSWE v2: **0.57** mean score (shared, rank 1/4, small field)
- SciCode / Vibe Code Bench: no verified public score found

Long context:

- ProgramBench (Anthropic harness): **87.6%** (shared, rank 4/8)
- 1M-token window; no MRCR / RULER / GraphWalks score published

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 4.0 60.9% (Mythos-specific, the highest in its comparison set), GDPval-AA 1853, CursorBench 73.4% (rank 1) and TB-Science 52.6% (rank 1); the same-weights Terminal-Bench 2.1 reference (AA: 91.4% for Fable 5.1) carries over with a safeguards caveat, and AutomationBench 31.4% caps the score.
- **Reasoning: 93/100.** GPQA 93.4–93.7%, HLE 59.1–60.9% no-tools (65.0% with tools) and ARC-AGI 90.0% all sit in the frontier reference band — identical weights to Fable 5.1, so its reasoning evidence applies directly.
- **Context window: 95/100.** 1M tokens / 128K out with ProgramBench 87.6%; no ≥98% retrieval-at-512K+ figure, so 100 is not justified.
- **Multimodal: 65/100.** text + image in, text out per the model docs — the +image-in band (the shared system card's Chartography/BenchCAD/GDP.pdf rows show document understanding, but PDF input is not listed for the Mythos configuration).
- **Coding: 92/100.** SWE-bench Pro 81.2% (rank 1/49), LiveCodeBench 90.52%, Multilingual 89.1% (Mythos 92.2% per the field-leader annotation) and FrontierSWE v2 rank 1; DeepSWE 67.4% (under the 74% frontier reference) caps the score.
- **Cost efficiency: 30/100.** $10/$50 per 1M matches the $10/$50 (~30) reference — the highest Claude list price; cache reads at $0.25/M (2.5% of input) improve long agentic runs.
- **Overall Score: 87/100.** (92+93+95+65+92)/5 = 87.4 → 87 — the Project Glasswing configuration: Fable 5.1's weights with relaxed cyber/life-sciences safeguards, strongest on Terminal-Bench 4.0 (60.9%) and life-sciences benchmarks, invitation-only access as the constraint.

---

## Update 2026-10-08 (6-day re-research)

- **Toolathlon-Verified: 77.8%** is shared with Fable 5.1 (system card §8.15.5, 2026-09-20; Pass@3 81.5%, Pass³ 73.1%, 23.7 avg turns) — fills the open Toolathlon gap for the shared weight set; BenchLM lists Mythos-specific rows (TB-Science, OSWorld 2.0, AutomationBench) as "coming soon"
- Shared-set additions (BenchmarkList, Fable 5.1 rows): SciCode 63.1% (rank 2/296), Vibe Code Bench v1.1 90.3% (rank 3/75), MCP Atlas 87.2% (rank 2/48), DRACO 87.7% (rank 2/24), BrowseComp 85.2% ±5.3, ProgramBench 82.7% (rank 2/37), Senior SWE-Bench 34.7% (rank 1/19), SWE Atlas Test Writing 67.0% (rank 1/30), CWE-bench v1 58.0%, ApprenticeBench 72%, FrontierSWE v2 56.3%
- Access: platform docs now describe Mythos 5.1 availability via Anthropic's **Cyber Verification Program** (vetted organizations); retirement not sooner than 2027-09-01
- Lineup context (2026-10-07): Haiku 5.5 launched; Sonnet 5.5 cache reads halved to $0.10/M; Mythos 5.1 pricing unchanged

---

## Update 2026-10-10 (deep second pass, 3 independent searches)

**Scores unchanged: Tool 92 / Reasoning 93 / Context 95 / Multimodal 65 / Coding 92 / Cost 30 / Overall 87.** New Mythos-specific rows and conflict checks this pass:

- **Mythos 5.1-specific BenchmarkList rows (2026-09-01, system card):** Terminal-Bench 4.0 **60.9%** (rank 3/29, 93rd pct — the only Mythos-specific agentic row, +5.1 over Fable 5.1's 55.8%, the gap reflecting where Fable's earlier, less precise safeguards intervened); **ExploitBench v8-bench: AutoNudge mean 12.61 flags, 83.0% capability, 222/410 full ACE exploits across both arms** (rank 2/16 — field leader Opus 5.5 at 14.15 flags); **ArxivMath 93.9% with tools / 91.3% without** (rank 5/35 — a strong new math row); **BBQ 89.9% disambiguated / 100.0% ambiguous accuracy, −0.9%/0.0% bias** (rank 2/7).
- **Cyber re-read (shared system card):** Fable 5.1 and Mythos 5.1 have "the strongest overall cyber capabilities of any model we have released," meeting or exceeding Mythos 5; **Mythos 5.1 substantially outperforms Claude Opus 5 on almost all cyber evaluations** (ExploitBench, OSS-Fuzz, Firefox 147, ExploitGym). Fable 5.1's safeguards now allow vulnerability discovery at all access levels (like Opus 5) with fewer false positives than Fable 5 at launch; no critical-severity jailbreak found for Fable 5.1.
- **Life-sciences quantification (system card §8.19):** long-form virology end-to-end scores **0.81 (Task 1) and 0.87 (Task 2)** — exceeding the 0.80 notable-capability benchmark on both; multimodal virology (VCT) **0.58** (above Opus 5's 0.55, just below Mythos 5's 0.59); protein design — median design scores exceed Mythos 5 and Opus 5 with reduced variance, and **one trial scored higher than the top human participant** in best-sequence prediction; ProteinGym — highest score of all models in the no-corpus/no-PLM and Swiss-Prot conditions (minor regression vs Opus 5 in the ProteinGym-AAV and combined conditions, not interpreted as CB-2-relevant).
- **Third-party launch quotes:** RedlineBench contract redlining **57.0** (from Fable 5's 47.9 — most of the gain on first-turn quality, edits more concise); FrontierFinance **55.9% rubric** (from 49.2% — went straight to the earnings-call transcript for exact figures); Cursor: "the most capable model we've run on CursorBench 3.2, scoring 73.4% at max effort."
- **System-card cost claim:** Mythos/Fable 5.1 match or exceed Fable 5 "at roughly half the cost per task on agentic coding benchmarks" (driven by the 75%-cheaper cache reads).
- **Access re-read (platform docs):** verification required; Cyber Verification Program (security teams — covers Opus 5.5, Sonnet 5.5, Mythos 5.1 and future models) and Life Sciences Verification Program (partnership with the US government, first participants enrolled); currently US organizations only, with expansion to broader domestic and international partners coordinated through the US government; retirement not sooner than 2027-09-01.
- **Score impact:** none — the new Mythos-specific rows (TB 4.0 60.9%, ExploitBench rank 2/16, ArxivMath 93.9%) land inside the bands the existing scores assume; the same-weights reasoning evidence (GPQA 93.4–93.7%, HLE 59.1–60.9%/65.0%, ARC-AGI-2 90.0%) continues to apply directly to Reasoning 93.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-10)
- Method: public internet research (Anthropic Fable 5.1 & Mythos 5.1 system card, launch page, Mythos and platform docs, BenchmarkList, Artificial Analysis, vals.ai, Cursor/Redline/ FrontierFinance partner quotes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
