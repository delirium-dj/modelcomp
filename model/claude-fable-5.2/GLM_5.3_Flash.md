# Claude Fable 5.2 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-fable-5-2`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's most demanding reasoning and long-horizon agentic model (released 2026-11-09), 1M context / 128K output, adaptive thinking always on. Same underlying model as Claude Mythos 5.2 — Mythos drops the cyber/biology safeguards and is restricted to verified organizations.
- **Provider / access:** Anthropic Claude API, Messages API, ID `claude-fable-5-2`; also Amazon Bedrock (`anthropic.claude-fable-5-2`), Google Cloud (managed both ways), Microsoft Foundry, and Claude Platform on AWS. Chat Completions-style Messages API (not Responses).
- **Release / knowledge:** 2026-11-09 release; reliable knowledge cutoff Jun 2026 (training data cutoff Jun 2026).
- **IDs:** `claude-fable-5-2` (pinned snapshot, dateless). No free tier on any gateway cited; requires 30-day data retention (no zero-data-retention unless expressly authorized).
- **Context window:** 1,000,000 (1M) total; 131,072-class 128K max output — verified from the official model page (platform.claude.com).
- **Modalities:** Text and image in; text out. Adaptive thinking always on (cannot be disabled; steered by `effort`, default `high`). Tool calls yes — but forced tool use (`tool_choice` `any`/`tool`) returns 400; web search + code execution server tools supported; vision (chart recognition) strong. No audio/video I/O.
- **Pricing (as of 2026-11-11):** $8 in / $40 out per 1M (base). Cache write 5m $10, 1h $16; cache read $0.20 (2.5% of base input). Batch API 50% off. Optional fast mode $16/$80 (up to 2.5x token speed). Outputs up to 30% faster than Fable 5.1 at the lower $8/$40 price (Fable 5.1 was priced above this).
- **Architecture:** proprietary, closed weights. Same checkpoint as Claude Mythos 5.2 (Fable adds cyber/biology safeguards with ~55% fewer false-positive blocks than Fable 5.1; fallback to Opus 4.8 on blocked cyber queries, Opus 5 on biology). Strongest-ever anti-distillation protections (90–99% reduction in harvested data). Positioned above Opus 5.5 as the advisor/orchestrator tier.

### Raw benchmarks found

Agent / tool use:

- FrontierCode 2.0 (agentic coding, merge-rate): **49.1%** at Xhigh effort — highest of any released model per Anthropic; ~45.3% at High effort ≈ Opus 5.5 Max (45.5%) at roughly half the cost per task (vs Fable 5.1 32.4%, GPT-6 Astra 42.8%, Gemini 4 Carbon 41.1%)
- FrontierSWE v2 (agentic coding): **69.9%** (vs Fable 5.1 56.3%, Opus 5.5 62.3%, GPT-6 Astra 65.5%, Gemini 4 Carbon 61.2%)
- AutomationBench (business workflows): **51.4%** (vs Fable 5.1 31.4%, Opus 5.5 42.5%, Gemini 4 Carbon 53.9%)
- Terminal-Bench-Science 0.1 (agentic scientific research): **74.6%** (Mythos 5.2 75.3%; vs Opus 5.5 58.7%, GPT-6 Astra 68.1%)
- WANDR (agentic search, relaxed score): **82.1%** (vs Fable 5.1 68.7%, Opus 5.5 72.3%)
- OSWorld 2.1 (computer use, offline set, partial): **89.3%** (vs Fable 5.1 83.5%, Opus 5.5 87.2%, GPT-6 Astra 79.5%, Gemini 4 Carbon 81.5%)
- RoboDojo Sim (robot control, Max effort, Anthropic-run): **64.9%** — more than double GPT-6 Astra (29.8%) and Gemini 4 Argon (34.2%)
- Remote Labor Index (RLI, High effort): **41.3%** (vs Fable 5.1 17.9%, Opus 5.5 21.3%, GPT-6 Astra 20.8%)
- AA-Briefcase v1.1 (knowledge work): **66.1%** rubric / **1785 Elo** (Opus 5.5 61.2% / 1800 Elo; GPT-6 Astra 52.0% / 1569 Elo)
- CyScenarioBench (cyber, Mythos 5.2 variant): **76.3%**; CVE Rediscovery (Mythos 5.2, Oct 2026 run, 1,829 CVEs): **89.6%** (Opus 5.5 without safeguards 81.3%)
- Tau3-Banking / Tau2-Bench, GDPval-AA, Claw-Eval / ClawProBench, Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **74.2%** (vs Fable 5.1 65.6%, Opus 5.5 67.7%, GPT-6 Astra 57.2%)
- Chartography (visual chart recognition, no tools): **73.4%** — best in its comparison set (Opus 5.5 64.4%, GPT-6 Astra 71.0%, Gemini 4 Carbon 72.5%)
- BenchCAD 2.1 (hardware engineering): charted in the announcement but the exact value is not printed — no verified public number found
- GPQA Diamond, HLE (no tools), LCR / MLCR, CritPt, Artificial Analysis Intelligence Index, Omniscience Accuracy / Hallucination Rate: no verified public score found
- Qualitative: solved two open black-hole physics problems (preprints on hexagonmath.org), fully formalized Fermat's Last Theorem in Lean in 30 hours with ~1,000 agents (Opus 5.5 completed only ~26% in 18h), designed three working electronic devices from scratch (BenchCAD-adjacent)

Coding:

- FrontierCode 2.0: **49.1%** (Xhigh) — see above; FrontierSWE v2: **69.9%**
- SWE-bench Verified / SWE-Pro, LiveCodeBench, SciCode / AA-SciCode, Vibe Code Bench, DeepSWE / Coding Index: no verified public score found

Long context:

- no long-context retrieval reported (no MRCR / RULER / GraphWalks value published in the announcement or model docs); 1M window and 128K output are officially specified

### Normalized scores (1–100)

- **Tool use: 98/100.** Best-in-class on every agentic axis in the launch set: OSWorld 2.1 89.3% (computer use), WANDR 82.1% (agentic search), RLI 41.3% (nearly double Opus 5.5), AutomationBench 51.4%, RoboDojo 64.9% (2x the next frontier model). Capped short of 100 only by the forced-tool-use 400 limitation and missing third-party harness confirmation.
- **Reasoning: 97/100.** HLE with tools 74.2% and Terminal-Bench-Science 74.6% both best-in-comparison; solved two open physics problems and formalized FLT in 30h (Opus 5.5 managed ~26% in 18h). No-tool reasoning benchmarks unpublished, which caps the score below 100.
- **Context window: 95/100.** 1M total / 128K max output — the top published tier (95–100 band); no public ≥98%-retrieval-at-512K measurement, so not 100.
- **Multimodal: 68/100.** Text + image in, text out (60–70 band for image-in); best-in-set Chartography 73.4% chart recognition and strong computer-use vision push it to the top of the band; no audio/video I/O and no non-text output keeps it out of the 75+ tiers.
- **Coding: 97/100.** FrontierCode 2.0 49.1% is the highest released-model score Anthropic has tested; FrontierSWE v2 69.9% leads Opus 5.5/GPT-6 Astra/Gemini 4 Carbon; >90% of Anthropic's core codebase merges are Claude-written. Classic single-shot benchmarks (SWE-bench Verified, LiveCodeBench) unpublished — that, plus safeguard fallback on some coding-adjacent cyber topics, caps it below 100.
- **Cost efficiency: 38/100.** $8/$40 per 1M is premium pricing (~2x Opus 5.5's $4/$20, 80x Haiku 5.5 input); between the $3/$15≈60 and $10/$50≈30 anchors. Batch 50% off and $0.20 cache reads soften it; fast mode doubles the price. No free tier; 30-day retention requirement.
- **Overall Score: 91/100.** Mean of the five non-cost dims (98+97+95+68+97)/5 = 91.0. Best-fit recommendation: the top pick for long-horizon agentic work, deep research and frontier coding where budget is secondary; for cost-sensitive daily coding, Opus 5.5 or Sonnet 5.5 remain the value plays.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-11
- Method: public internet research (official Anthropic launch announcement, model documentation pages and system card reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Fable 5.2 and Mythos 5.2 (launch announcement + benchmarks table)](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Claude Fable 5.2 — model overview (official docs)](https://platform.claude.com/docs/en/models/fable-5-2/overview)
  - [Anthropic models overview — compare models, pricing, IDs](https://platform.claude.com/docs/en/models/overview)
  - [Claude Fable 5.2 and Claude Mythos 5.2 System Card](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
