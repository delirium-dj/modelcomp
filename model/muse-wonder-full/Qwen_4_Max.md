# Muse Wonder Full — findings by Qwen 4 Max

- Source: Meta/muse-wonder-full
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** The larger of Meta Superintelligence Labs' two Muse Wonder frontier models (Oct 12, 2026; internal codename Watermelon, trained at the gigawatt-scale Prometheus cluster). Built for hours-long personal/professional agentic work via trained "Active Memory" and "Active Focus" behaviors. Leads Meta's chart on long-horizon coding (SWE-Marathon, DeepSWE), legal agents (Harvey LAB-AA) and business automation; trails Opus 5.5 on clean-room coding (ProgramBench), computer use and the independent AA index. **Not on any API** — reachable only inside Muse Code on the $50 Power / $200 Maximum plans; the smaller Muse Wonder (`muse-wonder-1.0`) is the API model.
- **Provider / access:** Meta Muse Code subscribers only (Power Usage $50/mo, Maximum Usage $200/mo, ~80x the Everyday plan's limit). No per-token price, no public model ID, no OpenRouter listing. Closed weights (the open Muse Spark Open 816B/42B-active shipped separately Oct 15).
- **Release / knowledge:** Released 2026-10-12. Knowledge cutoff not stated in the sources read.
- **IDs:** Not exposed for Full. The API sibling is `muse-wonder-1.0` (OpenRouter `meta/muse-wonder`, base `https://api.meta.ai/v1`) — do not conflate the two.
- **Context window:** 1M tokens (1,048,576 documented for the family). Max output not disclosed. Active Memory is a trained in-context behavior, not a documented cross-session store; MemoryBench tests 64K–100K-token recall with conflicting/updated facts, not persistence beyond the window.
- **Modalities:** Text, image, video, audio (PDF documented for the API sibling) in; text out. Known limitation: visual/spatial reasoning, especially 3D. Reasoning effort minimal→max (no "none"); tool calling, structured output, search grounding, computer use documented for the family.
- **Pricing (as of 2026-11-11):** Subscription-only: Muse Code $50/mo (Power) or $200/mo (Maximum). No API rate exists for Full. For reference, the smaller Wonder API is $4 in / $20 out / $0.20 cached per 1M — identical to Opus 5.5 — and AA measured it at $4.52/task (token-hungry: 130M output tokens on the index vs an 85M median).
- **Architecture:** Proprietary; parameter count, architecture, training data and the Active Memory mechanism all undisclosed. Meta's scaling-framework card: cannot rule out the unmitigated model reaching its high-risk CBRN threshold; with safety post-training + classifiers, residual risk "moderate or lower" in every tracked domain. "Most aligned model to date" (0% agentic-misalignment harmful actions, MASK honesty 87.3%); not intended for under-18s.

### Raw benchmarks found

Agent / tool use (Meta's 14-row chart, max effort, transcribed by FelloAI/miraflow; competitor runs "best-effort"):

- Harvey LAB-AA (legal agents, all-criteria pass): **13.1%** — leads all (Wonder 10.0, Astra 8.6, Fable 5.1 6.4, Opus 5.5 4.2); >3x Opus 5.5
- Vals Finance Agent V2: **59.1%** — narrow lead (Fable 5.1 58.9, Opus 5.5 58.6)
- AutomationBench-AA: **45.4%** — leads Meta's chart (Astra 41.6, Opus 5.5 41.2); AA's own independent run ranks Full **#3** on this eval — different source, both cited
- Personal Superintelligence Index (Meta internal composite of 7 evals): **59.1** — leads (Opus 5.5 55.2, Astra 54.5, Fable 5.1 49.9); weights unpublished
- JobBench: **75.3** ≈ Opus 5.5 75.4; OSWorld V2.1 (partial): **78.4%** — trails Opus 5.5 81.8 and Fable 5.1 80.7
- AA independent ranks: **#2 GDPval-AA**, **#3 AA-Briefcase**; Gray Swan-style robustness not published for Full

Reasoning / knowledge:

- AA Intelligence Index v4.3.2: **56** (55.8 unrounded) — #3 behind Opus 5.5 (58), effectively tied with Sonnet 5.5 (56.0); ahead of Fable 5.1 / Astra / Argon (53). Never compare to v4.1.1 or v5.x snapshots
- AA eval ranks: **#1 CritPt (physics reasoning)** and **#1 GDP.pdf** (AA's own run; Meta's chart instead shows Astra 34.2 > Full 33.2 on GDP.pdf — highest-of-3 score selection vs independent run, both labelled), **#3 SciCode**
- AA-Omniscience (general knowledge): **30** — well behind Opus 5.5 (46) and Astra (43); offset by a very low hallucination rate (says "don't know" rather than confabulating)
- HealthBench Pro: **62.3%** (Opus 5.5 65.6, Astra 65.3 lead); MemoryBench (Meta internal): **85.5** (Wonder 85.6 tops the row; Opus 5.5 81.5)
- Cyber (safety card): CyberGym **88.4%**, ExploitBench **58.9%**; ExploitGym 92 raw flags but only **21** used the intended vulnerability (the comparable figure); CyberBench ASR 0.8%, BioTIER refusal 98.7%

Coding:

- DeepSWE v1.1: **79.0%** — leads (Wonder 78.8, Opus 5.5 74.2, Astra 74.1); Datacurve third-party results for Muse + Opus, so one of the cleaner rows
- SWE-Marathon (ultra-long projects, pass@1, Abundant AI): **57.5 at xhigh** — largest margin on the chart (Wonder 53.1, Opus 5.5 46.3, Fable 5.1 45.6, Astra 42.5); Meta itself flags the row as **not a controlled common-harness comparison** (Astra/Fable ran via Codex/Claude Code)
- ProgramBench (clean-room, common mini-swe-agent harness): **59.0%** — trails Opus 5.5 70.5 by 11.5 pts, the widest common-harness gap; Fable 5.1 55.5, Astra 52.5
- Terminal-Bench 4.0-AA: **57.1%** (Opus 5.5 59.6, Astra 59.1) — AA harness; not comparable to Anthropic's vendor TB 4.0 numbers (66.4/70.6)

Long context:

- 1M window; MemoryBench 85.5 (internal, 64K–100K recall with updates/interference) — no independent MRCR/GraphWalks-style retrieval number published
- No documented max-output or cross-session persistence guarantee for Full

### Normalized scores (1–100)

- **Tool use: 93/100.** Harvey LAB-AA 13.1 (>3x Opus 5.5), Vals Finance 59.1 and AutomationBench-AA 45.4 leads, PSI 59.1, AA #2 GDPval; capped by OSWorld 78.4 and TB 4.0-AA 57.1 trailing Opus 5.5/Fable, and best-effort competitor-run caveats.
- **Reasoning: 90/100.** AA v4.3.2 56 (#3), CritPt #1, GDP.pdf #1 on AA's run, very low hallucination; capped by AA-Omniscience 30 (weak general knowledge vs Opus 46) and HealthBench Pro 62.3 trailing the leaders.
- **Context window: 93/100.** 1M tokens with class-leading internal memory recall (MemoryBench 85.5); capped by no independent long-context retrieval evidence, undisclosed output ceiling, and Active Memory's mechanism being un-auditable.
- **Multimodal: 84/100.** Text/image/video/audio in, text out; capped by Meta's own 3D/spatial-reasoning limitation disclosure and no published video/audio benchmark or native generation.
- **Coding: 93/100.** DeepSWE 79.0 (third-party) and SWE-Marathon 57.5 leads on long-horizon repo work, SciCode #3; capped by ProgramBench 59.0 vs Opus 70.5 on the common clean-room harness and TB 4.0-AA 57.1, plus SWE-Marathon's mixed-harness caveat.
- **Cost efficiency: 60/100.** No API at any price — $50/$200 Muse Code plans only; $200/mo ≈ 79 Wonder-API-task equivalents, so heavy daily coding sessions can beat per-token billing, but programmatic pipelines cannot use it at all, and the API sibling is token-hungry ($4.52/AA task).
- **Overall Score: 90.6/100.** Mean of the five quality dims (93+90+93+84+93)/5 = 90.6. Best-fit: long autonomous coding projects and legal/finance document agent work inside Muse Code; for API deployment or the smartest general model, Opus 5.5 / Sonnet 5.5 remain ahead, and the smaller Wonder (AA 52) is what developers can actually call.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (three independent full analyses — FelloAI, miraflow, AgentOne — transcribing Meta's launch chart/model card and Artificial Analysis's independent v4.3.2 results, plus OpenRouter pricing); scores are normalized 1–100 interpretations, not official vendor scores. Full-vs-Wonder kept strictly separate (Full = Muse Code-only, no API; $4/$20 and $4.52/task belong to the API sibling). Conflicts labelled, not averaged: GDP.pdf Astra 34.2 (Meta chart) vs Full #1 (AA run); AutomationBench-AA 45.4 lead (Meta) vs #3 (AA); TB 4.0-AA 57.1 vs Anthropic vendor harness numbers; AA v4.3.2 never compared to v4.1.1/v5.x. Meta's highest-of-3 score selection, best-effort rival runs and SWE-Marathon mixed harness explicitly discounted; internal PSI/MemoryBench/FocusBench treated as directional only.
- Reference URLs:
  - [Meta Muse Wonder: Benchmarks, Price and the Catch — FelloAI](https://felloai.com/muse-wonder/)
  - [Meta Muse Wonder Explained: Benchmarks, Pricing and Active Memory — miraflow](https://miraflow.ai/blog/meta-muse-wonder-explained-benchmarks-pricing-active-memory-2026)
  - [Meta Muse Wonder: Benchmarks, Pricing, API, and How to Use It — AgentOne](https://www.agent-one.dev/blog/muse-wonder)
  - [Muse Wonder — OpenRouter](https://openrouter.ai/meta/muse-wonder)
  - [Muse Wonder — Meta AI Research (official launch post)](https://research.meta.ai/blog/muse-wonder)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.