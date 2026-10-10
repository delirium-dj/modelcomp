# Claude Mythos 5.1 — findings by Space Bunny

- Source: Anthropic (`claude-mythos-5-1`; restricted trusted-access route)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Evidence rule for this entry.** Anthropic states that **Claude Mythos 5.1 and Claude Fable 5.1
> are the same underlying model** — identical weights, different safeguards. Only rows labelled
> *Mythos-specific* are measurements of this route; everything else is explicitly marked
> *Fable 5.1 proxy (same weights)*. Mythos-specific public numbers remain extremely thin: one
> agentic-coding figure and Anthropic's internal cyber/bio evaluations.

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** The unrestricted-safeguard configuration of Anthropic's most capable model, reserved for verified cyber defenders and life scientists. Same weights as Claude Fable 5.1; the difference is that cyber and biology classifiers do not interrupt dual-use work.
- **Provider / access:** Anthropic trusted-access programs only — the **Cyber Verification Program** (expanded 2026-10-06 into three tiers: Defense, Red Team, Specialized, all covering Mythos 5.1) and the **Life Sciences Verification Program** (launched 2026-09-17, Standard Use plus High-risk Use add-on grants). Claude Platform, Vertex AI and Microsoft Foundry; on Bedrock only for Enterprise Frontier Safeguards–eligible customers. Mythos-class access trails approval by roughly five business days.
- **Release / knowledge:** Announced 2026-09-01. Knowledge cutoff **June 2026** (Fable 5.1 family documentation). Access widened twice in September–October 2026; retirement not announced.
- **IDs:** `claude-mythos-5-1` (Mythos 5.1); `claude-mythos-5` is the earlier checkpoint with a January 2026 cutoff.
- **Context window:** **1,000,000 tokens; 128K max output** — verified on Anthropic's Mythos/Fable model documentation (the first pass recorded this as unverified metadata; it is now documented).
- **Modalities:** Text and image input; text output; adaptive thinking always on, default effort `high`; tool use, parallel tool calls and structured output supported. No audio or video.
- **Pricing (as of 2026-10-10):** $10 input / $50 output per 1M; **cache read $0.25 (2.5% of base input — the deepest cache discount in the Claude family, vs 5% on Opus 5.5/Sonnet 5.5 and 10% elsewhere)**; cache write $12.50 (5m) / $20 (1h); Batch $5/$25. Anthropic estimates ~25% lower cost than Fable 5 on typical workloads and up to ~45% on highly agentic ones. LSVP requires **30-day data retention** for offline misuse monitoring; zero-retention is available only for organizations already holding a Fable/Mythos ZDR exemption.
- **Architecture:** Proprietary; Anthropic discloses no parameter count.

### Raw benchmarks found

*Mythos-specific:*

- Terminal-Bench 4.0: **60.9%** (Anthropic) vs Fable 5.1 at 55.8%, Claude Opus 5 at 52.3%, Fable 5 at 42.0%, GPT-5.6 Sol at 37.3% — the gap is the tasks where Fable's safeguards intercept
- Cyber (internal suite, relative only): Mythos 5.1 "substantially outperforms Claude Opus 5 on almost all cyber evaluations", including **ExploitBench, OSS-Fuzz, Firefox 147 and ExploitGym** — no absolute values published
- Biology / CB-1 (internal, absolute): long-form virology **0.81 (Task 1)** and **0.87 (Task 2)**, both above the 0.80 CB-1 benchmark; multimodal Virology Capabilities Test **0.58** (Opus 5: 0.55; Mythos 5: 0.59); DNA synthesis screening evasion — met criteria for 1 of 10 target pathogens
- Anthropic's determination: Mythos 5.1 shows modest gains over Mythos 5 and Opus 5 but **does not cross the CB-2 threshold**; weaknesses named as weak novel ideation, poor strategic judgment, poor technical calibration
- Real-world output: Project Glasswing partners reported **129,000 verified software vulnerabilities** (April–July 2026) and Anthropic's own scanning found **5,500 more** (April–October 2026), over **33,000** rated critical or high — survey-based and likely an undercount

*Fable 5.1 proxy (same weights, safeguards enabled — Anthropic's own framing):*

- Artificial Analysis Intelligence Index: **53** on v4.3.2 (66 on the pre-rebasing scale at launch, then the highest measured)
- Terminal-Bench 4.0, independent: **58.08%** (Vals AI, rank 4 of 42, $17.18/test) and **52.02%** (Artificial Analysis, rank 6 of 40) — against Anthropic's 55.8%
- Vals Index composite: **65.83%**, rank 4 of 33; LiveCodeBench **90.52%**; GPQA Diamond **93.43%**; MMLU-Pro **92.38%**; MMMU-Pro **90.64%**; Vibe Code Bench v1.1 **90.26%**; Terminal-Bench-Science 0.1 **43.33%**; ProgramBench **7.00%**
- Vendor: Terminal-Bench 2.1 **91.4%** (narrowly highest AA has seen), SciCode **62.0%**, HLE **59.1%**, GDPval-AA v2 **1,853 Elo**, OSWorld 2.0 **77.9% partial / 41.7% strict**, AutomationBench **31.4%**, CursorBench 3.2 **73.4%**
- Anthropic expects the Fable/Mythos Terminal-Bench gap to shrink further as the cyber classifiers improve

### Normalized scores (1–100)

- **Tool use: 96/100.** The **60.9% Mythos-specific Terminal-Bench 4.0** is the highest number this route has on the frontier terminal suite, and the Fable proxy corroborates it (Vals 58.08%, GDPval-AA 1,853 Elo, AutomationBench 31.4%). The distinguishing addition is cyber: ExploitBench, OSS-Fuzz, Firefox 147 and ExploitGym are all above Opus 5 — relative internal figures, but on the axis Mythos exists for. Capped only by the absence of published absolute cyber scores.
- **Reasoning: 94/100.** Fable-proxy GPQA Diamond 93.43% and MMLU-Pro 92.38% are frontier-grade, HLE 59.1% leads the field on its measurement, and Anthropic reports Mythos 5.1 leading its internal and partner life-sciences benchmarks in bioinformatics, protein design and organic chemistry. Anthropic's own CB-2 assessment — weak ideation, poor calibration — is the honest cap.
- **Context window: 92/100.** 1M in / 128K out is now verified on Anthropic's documentation rather than assumed. Held well below the ceiling by **ProgramBench at 7.00%**, the full-window multi-episode program benchmark where Opus 5 manages only 3.00% — the 1M window is real but long-horizon program execution inside it is a weakness.
- **Multimodal: 88/100.** Image input with Chartography, BenchCAD, GDP.pdf and OSWorld 2.0 computer use, plus an Fable-proxy MMMU-Pro of 90.64%. Audio and video remain absent, which keeps this below the natively multimodal frontier.
- **Coding: 94/100.** Terminal-Bench 4.0 at 60.9% (Mythos-specific) / 58.08% (Vals proxy), Terminal-Bench 2.1 at 91.4%, LiveCodeBench 90.52%, Vibe Code Bench 90.26% and CursorBench 3.2 at 73.4% place it at the top of the field on agentic coding. ProgramBench at 7.00% is the outlier that keeps this from the ceiling.
- **Cost efficiency: 38/100.** $10/$50 is the most expensive list price in the Claude family, but the $0.25 cache read (2.5% of base input) is its deepest discount and drives Anthropic's ~45% agentic-work saving versus Fable 5. Against that, access is gated behind verification with a ~5-business-day provisioning lag, and the default LSVP posture requires 30-day data retention.
- **Overall Score: 93/100.** The strongest model available for verified cyber defense and life-sciences research, where its 60.9% Terminal-Bench 4.0 and internal ExploitBench/OSS-Fuzz/ExploitGym leadership justify the price and the verification friction; for general work Claude Opus 5.5 offers most of the capability at a third of the price.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: second-pass public internet research across Anthropic's Mythos page, the Fable 5.1 & Mythos 5.1 announcement and system card, the Mythos 5 model documentation, the Cyber Verification Program help article and expansion post (2026-10-06), the Life Sciences Verification Program post (2026-09-17), Artificial Analysis's Fable 5.1 article and index data, Vals AI's Vals Index and Terminal-Bench 4.0 leaderboards, and AIEvals' independent-vs-publisher tables; Mythos-specific and same-weights Fable 5.1 proxy figures are separated on every line; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Sources

- Anthropic — Introducing Claude Fable 5.1 and Claude Mythos 5.1 (Terminal-Bench 4.0 60.9% for Mythos 5.1): https://www.anthropic.com/claude-fable-and-mythos-5-1
- Claude Fable 5.1 & Claude Mythos 5.1 System Card (shared weights, CB-1/CB-2 findings, cyber evals): https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf
- Anthropic — Claude Mythos page (safeguard model, programs): https://www.anthropic.com/claude/mythos
- Anthropic — Expanding the Cyber Verification Program (2026-10-06, three tiers incl. Mythos 5.1; 129,000 verified vulns): https://www.anthropic.com/news/cyber-verification-program
- Anthropic — Introducing the Life Sciences Verification Program (2026-09-17, 30-day retention): https://www.anthropic.com/news/life-sciences-verification-program
- Claude Help Center — Cyber Verification Program (updated October 2026; Mythos access timing, ZDR, Bedrock limits): https://support.claude.com/en/articles/14604842-cyber-verification-program
- Claude Platform — Mythos 5 model overview (1M / 128K, $10/$50, effort levels, cutoffs): https://platform.claude.com/docs/en/models/mythos-5/overview
- Artificial Analysis — Claude Fable 5.1 tops the Intelligence Index (index 53 on v4.3.2; 66 pre-rebasing; $0.25 cache reads): https://artificialanalysis.ai/articles/claude-fable-5-1
- Vals AI — Vals Index leaderboard (Fable 5.1 65.83%): https://vals.ai/benchmarks/vals_index
- Vals AI — Terminal-Bench 4.0 leaderboard (Fable 5.1 58.08%): https://vals-ai.com/benchmarks/terminal-bench-4
- AIEvals — Claude Fable 5.1 independent results (read 2026-10-08): https://aievals.app/models/claude-fable-5-1
- Explainx — Fable 5.1 / Mythos 5.1 launch breakdown and pricing detail: https://explainx.ai/blog/claude-fable-5-1-mythos-5-1-launch-benchmarks-pricing-2026