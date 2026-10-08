# Claude Fable 5.1 — findings by Ling 3.1 Flash

- Source: Anthropic (`anthropic/claude-fable-5.1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's model above Opus 5 for the most demanding reasoning and long-horizon agentic work (launched 2026-09-01) — new standards on coding, knowledge work, and long-running problem-solving; Claude Mythos 5.1 is the same underlying model (Project Glasswing participants only), with the score gap reflecting cyber-safeguard interventions.
- **Provider / access:** Anthropic Claude API (`claude-fable-5-1`), Claude Platform; adaptive thinking always on; default effort `high` in Claude Code, `medium` in Claude Cowork and on Claude.ai.
- **Release / knowledge:** 2026-09-01; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-fable-5-1`. No Free ID on OpenCode Zen (`noFreeId`) — scored on paid pricing.
- **Context window:** 1M tokens total; 128,000 max output.
- **Modalities:** text, image, PDF in; text out; tool calls, structured outputs, code execution.
- **Pricing (as of 2026-10-02):** $10/$50 per 1M input/output (unchanged from Fable 5 — the highest Claude price tracked); cache reads $0.25/M (75% less than Fable 5's $1.00, cutting typical-workload costs ~25% and highly agentic workloads up to ~45%); cache writes $12.50/M (5-min) / $20/M (1-hr); Batch API 50% off.
- **Architecture:** proprietary (Anthropic); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **91.4%** (Artificial Analysis, Max Effort, Terminus 2 harness in e2b sandbox, rank 1/28); vals.ai's own harness: 85.02% (79.03% counting its disclosed Opus-fallback tasks as failures); tbench.ai's canonical board: no Fable 5.1 row yet
- Terminal-Bench 4.0: **55.8%** (max effort, safeguards on; vs Fable 5 42.0%, Opus 5 52.3%, GPT-5.6 Sol 37.3%; Mythos 5.1 reads 60.9%)
- Terminal-Bench-Science 0.1: **52.6%** (rank 1/4; vs Fable 5 24.7%, Opus 5 29.0%, GPT-5.6 Sol 22.4%)
- GDPval-AA v2: **1853** (vs Fable 5 1723, Opus 5 1824, GPT-5.6 Sol 1711)
- CursorBench 3.2.0: **73.4%** (rank 1/17; vs Fable 5 70.5%, Opus 5 70.0%, GPT-5.6 Sol 67.2%)
- AutomationBench: **31.4%** (vs Fable 5 17.1%, Opus 5 26.9%, GPT-5.6 Sol 19.6%)
- AA-AnalystAgent: **57.5** (Artificial Analysis, 2026-09-29, ±11.2; vs Fable 5 48.75)
- OSWorld 2.0 (authors' August 2026 task release): **77.9%** partial / **41.7%** strict (vs Fable 5 72.9%/36.1%, Opus 5 75.4%/39.6%)
- Claw-Eval / ClawProBench / Toolathlon-Verified: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (no tools): **59.1%** (Artificial Analysis, ±2); **60.9%** (vendor, no tools) / **65.0%** with tools
- GPQA Diamond: **93.43%** (vals.ai, rank 8/137 — saturated benchmark); Artificial Analysis' own harness: 93.7%
- ARC-AGI-2 (max): **90.0%** (arcprize.org, ±9.2)
- LiveBench: **83.4** (livebench.ai composite, ±2.7)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Pro: **81.2%** (max effort, system card — rank 1/49, field leader)
- SWE-bench Multilingual: **89.1%** (rank 3/46; Mythos 5 leads at 92.2%)
- SWE-bench Multimodal: **54.7%** (rank 3/15)
- LiveCodeBench: **90.52%** (vals.ai — saturated contest benchmark; +0.7 over Fable 5)
- DeepSWE 1.1: **67.4%** (Pass@1, rank 6/29)
- FrontierCode: **50.9%** Main / **63.6%** Extended (rank 6/27)
- FrontierSWE v2: **0.57** mean score (rank 1/4, small field)
- SciCode / Vibe Code Bench: no verified public score found

Long context:

- ProgramBench (Anthropic harness): **87.6%** (rank 4/8)
- 1M-token window; no MRCR / RULER / GraphWalks score published

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 2.1 91.4% (AA, rank 1/28) clears the 88%+ frontier bar and GDPval-AA 1853 leads the knowledge-work frontier, with CursorBench 73.4% (rank 1) and TB-Science 52.6% (rank 1); the wide TB2.1 harness spread (vals.ai 85.02%, 79.03% with fallback correction) and AutomationBench 31.4% cap it.
- **Reasoning: 93/100.** GPQA 93.4–93.7%, HLE 59.1–60.9% no-tools (65.0% with tools) and ARC-AGI-2 90.0% all sit in the frontier reference band; the safeguard-fallback provenance caveat (refused prompts can reroute to Opus 5/4.8) prevents a 94+.
- **Context window: 95/100.** 1M tokens / 128K out with ProgramBench 87.6%; no ≥98% retrieval-at-512K+ figure, so 100 is not justified.
- **Multimodal: 78/100.** text + image + PDF in with text out — the +PDF-in band (75–90).
- **Coding: 91/100.** SWE-bench Pro 81.2% (rank 1/49), LiveCodeBench 90.52%, TB 2.1 91.4% and CursorBench 73.4% (rank 1) are top-of-set; DeepSWE 67.4% (under the 74% frontier reference) and FrontierCode Main 50.9% cap the score.
- **Cost efficiency: 30/100.** $10/$50 per 1M matches the $10/$50 (~30) reference — the highest Claude list price; the 75%-cheaper cache reads ($0.25/M) materially improve long agentic runs (up to ~45% savings vs Fable 5).
- **Overall Score: 90/100.** (92+93+95+78+91)/5 = 89.8 → 90 — the peak-capability Anthropic model: rank-1 SWE-bench Pro, Terminal-Bench 2.1, CursorBench, and TB-Science, at a premium price with PDF-in coverage.

---

## Update 2026-10-08 (6-day re-research)

New verified data found — fills every previously-open gap:

- **Toolathlon-Verified: 77.8%** (system card §8.15.5, 2026-09-20; BenchLM rank 5/21; Pass@3 81.5%, Pass³ 73.1%, 23.7 avg turns) — was "no verified public score found"
- **SciCode: 63.1%** (BenchmarkList, rank 2/296) and **Vibe Code Bench v1.1: 90.3%** (vals.ai, rank 3/75) — both were open gaps
- BenchmarkList additions: MCP Atlas **87.2%** (rank 2/48), Tau3-Banking **47.2%** (rank 6/176), DRACO **87.7%** (rank 2/24), BrowseComp **85.2% ±5.3** (493/520), PostTrainBench 40.2% (rank 5/31), ApprenticeBench 72%, CWE-bench v1 58.0%, ProgramBench 82.7% (rank 2/37), Senior SWE-Bench 34.7% (rank 1/19), SWE Atlas Test Writing 67.0% (rank 1/30) / Refactoring 56.7% (rank 2/21), Convex Coding Evals 81.1%, KernelBench Mega 22.95, Vending-Bench 2 5421.56, AutomationBench-AA 59.4%, ARC-AGI-1 97.5%, ReactBench 45.6%, BenchCAD 84.3%, FrontierSWE v2 56.3%
- Terminal-Bench 4.0 (max): **57.9%** per BenchmarkList (2026-10-03) — 2.1pp above the system-card 55.8%; Terminal-Bench 2.1 (Vals run): **85.0%** (BenchLM); AA's own TB 2.1 rows: 91.4% max / 91.0% xhigh / 89.9% high (all "Default Fallback")
- tbench.ai canonical TB 4.0 board: still no Fable 5.1 entry (populated through GLM-5.3, Aug 14); Anthropic's self-reported 55.8% would rank #1 ahead of Opus 5's verified 51.8% if it holds under the canonical harness
- Platform docs: retirement "not sooner than 2027-09-01"; cache read $0.25/M (2.5% of input) and 1-hr cache write $20/M confirmed
- Lineup context (2026-10-07): Anthropic launched Claude Haiku 5.5 ($0.10/$0.50 per 1M ≤100K tokens) and halved Sonnet 5.5 cache reads to $0.10/M; Fable 5.1 pricing unchanged

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (Anthropic Fable 5.1 launch page, platform docs and system card, Artificial Analysis, vals.ai, ARC Prize, LiveBench, BenchmarkList, The Model Gap); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
