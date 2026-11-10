- Source: Anthropic (`claude-mythos-5.2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic's restricted, security-vetted configuration of Claude Fable 5.2 — the **same underlying weights** (released 2026-11-09) with the cybersecurity and biology safeguards lifted, offered only to organizations verified through the Cyber Verification Program (CVP) and Project Glasswing. A distinct roster entry from `claude-fable-5.2`, not a separate checkpoint.
- **Provider / access:** Anthropic Claude API `claude-mythos-5-2`, gated behind the Cyber Verification Program / Life Sciences Verification Program / Project Glasswing (and Claude Enterprise via Claude Security). **Not accessible to general API consumers.** Adaptive thinking always on; forced tool use returns 400; omit temperature/top_p/top_k. Mythos fast mode is restricted to Verification-Program organizations.
- **Release / knowledge:** Released 2026-11-09; reliable-knowledge and training-data cutoff Jun 2026; shares Fable 5.2's lifecycle.
- **IDs:** `anthropic/claude-mythos-5.2` (dataset id); API `claude-mythos-5-2`. No free tier (`noFreeId`); verification-gated access.
- **Context window:** 1M tokens input / 128K max output — identical to Fable 5.2 (official docs: Mythos "shares Claude Fable 5.2's specifications and pricing").
- **Modalities:** Text + image in → text out; vision yes; reasoning yes (adaptive thinking, always on; default effort `high`, scalable to Xhigh/Max); tool calls yes; multilingual.
- **Pricing (as of 2026-11-10):** $8 / 1M input, $40 / 1M output (shares Fable 5.2's pricing per official docs); cache read $0.20/MTok; Batch 50% off; optional fast mode $16/$80 (Verification-Program orgs only). **DISCREPANCY:** `meta.json` claims $10/$50 — official docs and independent trackers (llm-stats) confirm $8/$40; the official figure is used here.
- **Architecture:** Proprietary (closed-weight); same model as Claude Fable 5.2 with dual-use cyber/bio refusals removed for authorized defensive-security and biosecurity research.

### Raw benchmarks found

> Official joint Anthropic announcement (2026-11-09). Mythos-specific rows (cyber/bio, only measurable with safeguards lifted) are marked; all other rows are the shared Fable 5.2 weights.

Agent / tool use:

- CVE Rediscovery (cybersecurity, **Mythos-specific**): **89.6%** advisories found (Oct 2026 run vs 1,829 CVEs) — +10.2% over Claude Opus 5.5 (81.3%, safeguards off) and +14.4% over Mythos 5.1 (78.3%)
- CyScenarioBench (cybersecurity, **Mythos-specific**): **76.3%** (Opus 5.5 67.6% without safeguards, GPT-6 Cyber 61%)
- Terminal-Bench-Science 0.1 (agentic scientific research, **Mythos-specific**): **75.3%** (vs Fable 5.2's safeguarded 74.6%; GPT-6 Astra 68.1%, Opus 5.5 58.7%)
- OSWorld 2.1 (computer use, shared weights): **89.3%**
- WANDR (agentic search, relaxed, shared weights): **82.1%**
- RoboDojo Sim (robotics, Max effort, shared weights): **64.9%**
- Remote Labor Index (High effort, shared weights): **41.3%**; AA-Briefcase v1.1: **66.1% rubric** (adjacent Elo row 1785, label ambiguous in the rendered table — not relied on)
- De novo binder design (protein design, 24 hr, **Mythos-specific**): **85.1%** (Opus 5.5 82.6% safeguards off, Mythos 5.1 79.1%); accurately modeled 28 of 34 AAV capsids attempted

Reasoning / knowledge:

- Humanity's Last Exam (with tools, shared weights): **74.2%** (Opus 5.5 67.7%, GPT-6 Astra 57.2%)
- Chartography (visual chart recognition, no tools, shared weights): **73.4%** at highest effort
- Automated behavioral audit (misalignment, lower better, tested as Mythos): **2.67** (Mythos 5.1 3.28, Opus 5.5 2.79, Sonnet 5.5 3.10); ~1,900 scenarios
- GPQA Diamond / Artificial Analysis Intelligence Index / Omniscience: no verified public score found (BenchLM lists 12 displayable rows but "no public overall score"); qualitative: 1,000-agent Fermat's Last Theorem formalization in 30 h and two solved open black-hole physics problems are shared-weight results
- Independent trackers (llm-stats, eigent.ai, cometapi) confirm Mythos 5.2 = the Fable 5.2 model at $8/$40 with looser cyber/bio safeguards for verified orgs

Coding:

- FrontierCode 2.0 (agentic coding, shared weights): **49.1%** at Xhigh — highest of any released model Anthropic has tested (Opus 5.5 45.5%, GPT-6 Astra 42.8%)
- FrontierSWE v2 (shared weights): **69.9%** (GPT-6 Astra 65.5%, Opus 5.5 62.3%)
- BenchCAD 2.1 (hardware engineering, Max effort, shared weights): **83.5** (Opus 5.5 65.3)
- SWE-bench Verified / LiveCodeBench / SciCode: no Mythos-5.2-specific verified public score found; shared-weight qualitative evidence (>90% of Anthropic core-codebase merges are Claude-written) applies

Long context:

- 1M-token window / 128K max output (official docs, shared with Fable 5.2); no MRCR / RULER retrieval figure published

### Normalized scores (1–100)

> Derived from the raw numbers above via `model-comparison.md`. Overall = half-up mean of the five quality dims; Cost efficiency scored independently, never counted.

- **Tool use: 95/100.** Same base weights as Fable 5.2 (OSWorld 89.3%, WANDR 82.1%, RoboDojo 64.9%) plus the unlocked, best-in-class dual-use agentic benchmarks Fable is safeguard-blocked from — CVE Rediscovery 89.6% (leads every model tested), CyScenarioBench 76.3%, De novo binder design 85.1%, Terminal-Bench-Science 75.3%; scored a point above Fable 5.2 for that measured cyber/bio edge, but held under the ceiling because verification-gated access (CVP/Glasswing) means most consumers cannot actually invoke these tools.
- **Reasoning: 94/100.** Shared-weight frontier reasoning — HLE (with tools) 74.2%, Chartography 73.4%, the 30-hour Fermat's Last Theorem formalization, and the lowest automated behavioral-audit misalignment score in the lineup (2.67); capped only by the absence of a verified public GPQA Diamond / Intelligence Index number.
- **Context window: 97/100.** 1M-token window (top tier, ≥1M) with 128K max output, identical to Fable 5.2; a few points off the ceiling as it is not the absolute maximum advertised and no long-context retrieval score is published.
- **Multimodal: 68/100.** Text + image input → text output; strong vision (Chartography 73.4%) puts it atop the image-input band, but no native video/audio/PDF ingestion and text-only output cap it below the 75–90 multi-format tier.
- **Coding: 94/100.** Shared-weight FrontierCode 2.0 49.1% (highest released model tested), FrontierSWE v2 69.9%, BenchCAD 2.1 83.5; the cyber/bio unlock does not change general software coding, so this matches Fable 5.2 — capped by the lack of a Mythos-specific SWE-bench Verified / SciCode number.
- **Cost efficiency: 74/100.** Shares Fable 5.2's premium $8/$40 per MTok (fast mode $16/$80); value is further constrained by verification-gated access (CVP/Glasswing only, no general API), though per-task efficiency and the 50% batch discount match Fable. Excluded from Overall.
- **Overall Score: 89.6/100.** Mean of the five quality dims (95+94+97+68+94)/5 = 89.6. Divergence note: my independent read places Mythos marginally ABOVE Fable 5.2 (89.6 vs 89.4) on its unlocked cyber/bio agentic leadership, whereas the peer cohort ranks Fable slightly higher (90.9 vs 90.0), likely weighting Mythos's restricted availability against it — they are the same weights, so the two are effectively tied. Best fit: verified defensive-security, vulnerability-research, and biosecurity organizations that need frontier agentic capability without dual-use refusals; general users should use Fable 5.2.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-10
- Method: public internet research (official joint Anthropic announcement + Claude Platform docs + independent trackers llm-stats/BenchLM/eigent.ai); scores are normalized 1–100 interpretations, not official vendor scores. Researched independently of the peer findings in this folder.
- Reference URLs:
  - [Introducing Claude Fable 5.2 and Claude Mythos 5.2 (Anthropic announcement + benchmark table)](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Claude Mythos 5.2 model page (Claude Platform docs — shares Fable 5.2 specs/pricing)](https://platform.claude.com/docs/en/models/mythos-5-2/overview)
  - [Expanding the Cyber Verification Program / Project Glasswing (Anthropic)](https://www.anthropic.com/news/cyber-verification-program)
  - [Claude Mythos 5.2: Same Model as Fable, Different Guardrails (llm-stats)](https://llm-stats.com/blog/research/claude-mythos-5-2-launch)
  - [Claude Mythos 5.2 Benchmarks & Pricing (BenchLM)](https://benchlm.ai/models/claude-mythos-5-2)
