- Source: Anthropic/Claude Opus 4.6
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's 2026-02-06 flagship, strong in financial research, programming and office tasks. Introduced the "AI agent team" feature (splitting a large task across collaborating agents) and was the first Opus with a 1M-token window. Deep Excel / PowerPoint integration. A distinct model; Opus 4.7 is its successor.
- **Provider / access:** Claude API, claude.ai, and all major cloud platforms. Excel and PowerPoint integrations. Free-tier availability via claude.ai (the app hit #1 on the Apple App Store free chart in March 2026).
- **Release / knowledge:** 2026-02-06 (some sources 2026-02-05); knowledge cutoff: no verified public score found.
- **IDs:** `claude-opus-4-6` family ID as cited. No free Zen ID verified.
- **Context window:** **1,000,000 tokens** — the first Opus with 1M, able to handle large financial documents and codebases.
- **Modalities:** text and document/image in, text out; financial research, coding, office document creation (Excel/PowerPoint), long-running autonomous agent tasks with an "AI agent team" orchestration mode. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$5 / 1M input, $25 / 1M output** — the Baike article states Opus 4.7's pricing was "unchanged from Opus 4.6" at exactly these figures, so this is a derived-from-primary rate card (labelled as such).
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Adaptive thinking and multi-agent "agent team" coordination.

### Raw benchmarks found

Agent / tool use:

- Autonomous software engineering (Feb 2026, Anthropic safety researcher Nicholas Carlini): **16 Claude Opus 4.6 agents** wrote a **100,000-line Rust C compiler** from scratch with almost no human intervention; it compiled **Linux kernel 6.9** on **x86, ARM and RISC-V**, and built Doom and PostgreSQL; consumed ~**2 billion input tokens**
- Financial-analysis, tool-use and agentic-coding specialised tests: reported as leading at launch (no exact numbers in the retrieved page)
- FactSet shares fell **>8%** and Thomson Reuters **>7%** on the release day — market impact, not a benchmark
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Leaked pre-release claims for **Claude Sonnet 5** mentioned SWE-Bench >80.9% — a different model, not attributed here
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index: no verified public score found for this exact ID

Coding:

- The 16-agent / 100,000-line Rust C compiler result above is the strongest documented coding evidence
- A smart-contract audit found Opus 4.6-written Solidity code for the Moonwell DeFi protocol had an incorrectly configured oracle-price formula, leading to an exploit with ~**$1.78M** in losses — described as the first AI "vibe-coding" Solidity hack (a documented reliability counterexample)
- SWE-bench Verified / SWE-bench Pro / Terminal-Bench / LiveCodeBench / SciCode / DeepSWE: no verified public score found

Long context:

- 1M-token window with large financial-document / codebase handling; no MRCR / RULER / GraphWalks figure found — no verified public score found

Incidents (context, not scored): early March 2026 users reported increased error rates and degraded performance (acknowledged and being fixed); the same month the US administration ordered federal agencies to immediately stop using Anthropic technology and the Pentagon designated the company a "national security supply chain risk".

### Normalized scores (1–100)

- **Tool use: 89/100.** A remarkable 16-agent, 100K-line Rust compiler that built Linux 6.9 on three architectures, plus leading financial/tool-use results and deep office integration; capped by no scored agent harness and by the reported March degradation.
- **Reasoning: 87/100.** Frontier February-2026 professional reasoning with adaptive thinking and multi-agent decomposition; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 91/100.** A verified 1M-token window — the first in the Opus line — built for large financial files and codebases; capped by no long-context retrieval measurement.
- **Multimodal: 81/100.** Document/image input with Excel/PowerPoint artifact generation; capped by text-only output, no verified audio/video input, and no published multimodal benchmark score.
- **Coding: 88/100.** The 100K-line compiler feat is exceptional; capped by no SWE-bench/Terminal-Bench figure and by the documented $1.78M Moonwell vulnerability from its generated Solidity.
- **Cost efficiency: 68/100.** $5/$25 per 1M sits in the premium tier (and the 2-billion-token compiler experiment was expensive), partly offset by free claude.ai access; excluded from Overall.
- **Overall Score: 87/100.** Half-up mean of 89, 87, 91, 81, 88 = 87.2 → 87. Best fit: multi-agent long-horizon software engineering and financial/office professional work; note the documented reliability and security caveats.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Claude Opus 4.6 article (release, 1M context, agent-team feature, office integrations, 16-agent Rust compiler experiment, Moonwell exploit, March degradation and US government action), with the Baidu Baike Claude Opus 4.7 article used to confirm the $5/$25 rate card as "unchanged from Opus 4.6" — labelled as derived. The >80.9% SWE-Bench leak figure belongs to Claude Sonnet 5 and is explicitly NOT attributed here. Rows without a published figure are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Claude Opus 4.6 — 百度百科 (release, 1M context, agent team, compiler experiment, incidents)](https://baike.baidu.com/item/Claude%20Opus%204.6/67361521)
  - [Claude Opus 4.7 — 百度百科 (rate card unchanged from Opus 4.6)](https://baike.baidu.com/item/Claude%20Opus%204.7/67623873)
