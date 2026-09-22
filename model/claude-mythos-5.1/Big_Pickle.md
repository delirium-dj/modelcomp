# Claude Mythos 5.1 — findings by Big Pickle

- Source: Anthropic (`claude-mythos-5-1`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 (restricted-access SKU of Claude Fable 5.1)
- **Short description:** Anthropic's most capable model, identical weights to the generally available Claude Fable 5.1 but with relaxed cyber/bio safeguards, gated behind vetted trusted-access programs. Top use case: defensive cybersecurity and life-sciences research, long-horizon agentic coding, and scientific tool use for approved organizations. Variant of the same weights as Fable 5.1 — not a distinct model.
- **Provider / access:** Anthropic Claude API `claude-mythos-5-1`; Amazon Bedrock `anthropic.claude-mythos-5-1`; Google Cloud Vertex `claude-mythos-5-1`; Microsoft Foundry. Invite-only via Project Glasswing / Cyber Verification Program (CVP, coming soon) / Life Sciences Verification Program (LSVP). Messages (Chat Completions-style) API.
- **Release / knowledge:** Released 2026-09-01; reliability knowledge cutoff Jun 2026.
- **IDs:** `claude-mythos-5-1` — not on OpenCode Zen; no Zen Free ID exists.
- **Context window:** 1M tokens total; max output 128K (per platform.claude.com model docs, checked 2026-09).
- **Modalities:** text + images → text; adaptive reasoning always on (default effort `high`); tool calls; no audio input per platform docs.
- **Pricing (as of 2026-09-23):** $10 in / $50 out per 1M; cache write 5m $12.50 / 1h $20; cache read $0.25 (75% cut vs Fable 5); batch API −50%. No free tier.
- **Architecture:** proprietary, weights undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Anthropic system card 2026-09-01; rank 1 of 10, 100th pct; Mythos safeguard setting; Fable 5.1 = 55.8%)
- Terminal-Bench 2.1: **91.4%** (Artificial Analysis, Terminus 2 harness in e2b sandbox; same-weights Fable 5.1, 2026-09-02; tbench.ai had no 5.1 row yet)
- CursorBench 3.2.0: **73.4%** (system card; rank 1 of 17)
- GDPval-AA v2: **1853** (system card; knowledge-work Elo)
- OSWorld 2.0: **77.9% partial / 41.7% strict** (system card; benchmark authors' Aug 2026 task release)
- AutomationBench: **31.4%** (system card; business workflows)
- ExploitBench v8 (cyber): **AutoNudge mean 12.61 flags; 83.0% capability; 222/410 full ACEs** (system card; rank 1 of 14)

Reasoning / knowledge:

- GPQA Diamond: **93.4%** (vals.ai leaderboard, 2026-09-01; 93.7% per AA harness — same-weights Fable 5.1, treated as saturated)
- Humanity's Last Exam: **60.9% no tools / 65.0% with tools** (system card; AA independently reports 59.1% no tools)
- ArxivMath: **93.9% with tools / 91.3% without** (system card; rank 1 of 23)
- Artificial Analysis Intelligence Index: **66 Max** (AA pre-release eval of Fable 5.1 config, ~4% fallback tokens)
- AA-Omniscience Net Score: **0.57 net / 0.77 correct** (system card; rank 2 of 7)
- CritPt-Corrected: no verified public score surfaced in this research (system card section exists, value not retrievable)

Coding:

- SWE-bench Pro: **81.2%** (system card; rank 1 of 49)
- SWE-bench Multilingual: **89.1% resolved** (system card; rank 3 of 46)
- SWE-bench Multimodal: **54.7% resolved** (system card; rank 3 of 15)
- DeepSWE 1.1: **67.4% Pass@1** (system card; rank 6 of 29; mini-SWE-agent harness by Datacurve)
- FrontierSWE v2: **0.57 mean score** (system card; rank 1 of 4)
- LiveCodeBench: **90.5%** (vals.ai; same-weights Fable 5.1)
- FrontierCode: **50.9% main / 63.6% extended** (system card; rank 6 of 27)

Long context:

- 1M window verified; **no long-context retrieval (MRCR / RULER / GraphWalks) value found** in this research, so no retrieval-at-length claim is made.

### Normalized scores (1–100)

- **Tool use: 92/100.** Frontier terminal/agentic results: TB4.0 60.9% rank 1, TB2.1 91.4% (AA), GDPval 1853; capped by AutomationBench 31.4% and strict OSWorld 41.7%.
- **Reasoning: 93/100.** GPQA 93.4% (saturated), HLE 65% with tools, ArxivMath 93.9%, AA Index 66 — capped only because several headline numbers are vendor-reported and not yet independently reproduced.
- **Context window: 96/100.** 1M window places it in the ≥1M band; no published 512K+ retrieval measurement yet, so not a perfect 100.
- **Multimodal: 68/100.** Text + image-in / text-out only (methodology caps image-only in at 60–70); strong OSWorld computer-use offsets, but no audio/PDF input.
- **Coding: 92/100.** SWE-bench Pro 81.2% rank 1, LiveCode 90.5%, TB4.0 rank 1, FrontierSWE v2 rank 1; DeepSWE 67.4% sits below the 74% frontier reference and tempers the score.
- **Cost efficiency: 30/100.** $10/$50 per 1M frontier premium; 75% cache-read cut helps agentic workloads but there is no free tier.
- **Overall Score: 88/100.** (92 + 93 + 96 + 68 + 92) / 5 = 88.2 → **88**. Best-fit: vetted cyber-defense and life-sciences research, long-horizon agentic coding — if you can get access; otherwise deploy the identical-weights Fable 5.1.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-23
- Method: public internet research (Anthropic system card + blog, platform docs, BenchmarkList, Artificial Analysis, vals.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.