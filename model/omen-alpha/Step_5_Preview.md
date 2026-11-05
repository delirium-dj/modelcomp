# Omen Alpha — findings by Step 5 Preview

- Source: OpenCode (undisclosed provider) (`omen-alpha`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha. An **OpenCode stealth model** — no lab credit, no model card, no parameter count, no architecture, no knowledge cutoff.
- **Short description:** A coding-focused reasoning model shipped into OpenCode Go on 2026-09-04 with no vendor attribution at all. OpenCode's announcement was one line: "Omen Alpha (new stealth model) — Exclusively for OpenCode Go subscribers — $100 usage for $10." It is the second anonymous model OpenCode shipped in under two weeks, following Ox Alpha (confirmed 2026-08-26 as Zhipu's GLM-5.3-Flash).
- **Provider / access:** **OpenCode Go only** — $10/month for $100 of bundled usage, capped at $12 per 5 hours, $30 per week and $60 per month. **Not sold standalone and not on OpenRouter**, which makes independent third-party benchmarking structurally hard. Reachable through OpenCode's own client via an OpenAI-compatible chat-completions endpoint, model ID `omen-alpha`.
- **Release / knowledge:** released **2026-09-04**. Knowledge cutoff **not disclosed**.
- **IDs:** `omen-alpha` (OpenCode Go / `opencode-go/omen-alpha`); OpenCode's usage-data page files it under the path **`zhipu/omen-alpha`**. No Free ID.
- **Context window:** **500,000 tokens** with **128,000 max output** (OpenCode docs, models.dev and BuildFastWithAI all agree). One outlier: TokenRa advertises "1M context" and $0.13/M input — contradicted by three corroborating sources on both figures, so TokenRa is treated as unreliable here.
- **Modalities:** text and image input; text output. Reasoning supported with low/high thinking levels; tool calling supported and coding-agent focused. No image or audio *generation*.
- **Pricing (as of 2026-11-05):** reference **$0.20 input / $0.66 output / $0.04 cached read per 1M** — corroborated by omenalpha.io and explainx.ai. Critically, this is **the rate OpenCode uses to size the $10/month bundle, not a rate you are billed against directly**; usage is capped in dollar terms rather than metered. Measured economics from the OpenCode snapshot: **$0.03 average cost per prompt**, ~$0.27 average session cost across 7,518 sessions.
- **Architecture:** undisclosed. **Zero data retention and no training use is OpenCode's claim about its own layer** — explainx.ai correctly notes this "says nothing about what an unconfirmed upstream provider does with the same traffic underneath", which matters enormously for a stealth model.

### Raw benchmarks found

**This is the thinnest evidence base in the entire research series.** Exactly one dated benchmark snapshot exists, it is proprietary to OpenCode rather than a named public suite, and it covers four coding projects. Every standard benchmark row below reads "no verified public score found", and the scores in the normalised block are conservative evidence-poor floors rather than measurements.

The one verified result — OpenCode leaderboard snapshot, "Omen Alpha (High)", evaluated **2026-09-04**, environment OpenCode, methodology v1, **rank #15**:

- **Overall coding score: 23.14 / 40**
- Component project scores (five-point rubric each): CSV import (PHP) **4/5** · Offline sync (PHP) **3.5/5** · Bank feed (Dart/Flutter) **2.75/5** · Shipping quotes (Go) **3/5** · Code quality (expanded 20-point component) **9.94/20**
- Average cost per prompt: **$0.03**; average time per prompt: **01:51**; reported throughput ~**189 tokens/second** (community-measured, no official benchmark)
- omenalpha.io is careful that "the displayed component scales are not summed together as a new score", and the four project rows sum to 13.25/20 (66.25%) while the transcribed leaderboard total is 23.14/40 (57.85%) — **these two renderings do not reconcile, and the page does not explain the discrepancy**. Both are reported here.

Benchmarks with **no verified public score found** for this model ID:

- **Agent / tool use:** Terminal-Bench 2.1 and 4.0, τ³-Banking, τ²-bench, GDPval-AA, OSWorld, MCP-Atlas, Claw-Eval, BrowseComp, AutomationBench, Harvey LAB-AA — none published.
- **Reasoning / knowledge:** GPQA Diamond, HLE, CritPt, AA-LCR, MLCR, Artificial Analysis Intelligence Index, Vals Index, LiveBench, AA-Omniscience — none published. Artificial Analysis does not list this model at all.
- **Coding:** SWE-bench Verified, SWE-bench Pro, DeepSWE, LiveCodeBench, SciCode, Vibe Code Bench, FrontierCode, Code Migration — none published.
- **Long context:** MRCR, RULER, GraphWalks, AA-LCR — none published, so the 500K window has **no retrieval measurement of any kind**.
- **Multimodal:** MMMU-Pro, BabyVision, CharXiv, ZeroBench — none published, so image input is metadata-confirmed but entirely unmeasured.

Conflicting community reports (both recorded, neither resolvable):

- A Reddit user reported the model "struggled to recall information from earlier turns and repeatedly asked for clarification" — a long-context/agentic-continuity failure.
- Other users described it as "fast and competent for coding", capable of planning and executing complex coding work.
- Community researcher zephel01 reported that Omen Alpha **fails on the exact same line of a coding test where both Ox Alpha and GLM-5.3-Flash failed** — a behavioural coincidence pointing at GLM lineage, but explicitly not serving-layer proof.

Identity — **unconfirmed, with two live and mutually incompatible theories**:

- **Theory 1, Zhipu:** OpenCode's usage-data path reads `zhipu/omen-alpha`, the same operator namespace Zhipu (Z.AI) uses. If accurate it would be Zhipu's second anonymous release in nine days.
- **Theory 2, Xiaomi:** OrcaRouter argues Omen Alpha's visible reasoning trace resembles DeepSeek-lineage patterns and speculates an operator is serving a MiMo-V3-Flash checkpoint. OrcaRouter itself states the weakness: "a chain-of-thought resemblance is the weakest class of model fingerprint, because it is style rather than structure."
- Precedent cuts both ways: Ox Alpha was confirmed via serving-layer stack traces and 30/30 tokenizer matches, while Hunter Alpha and Healer Alpha were both later confirmed as Xiaomi MiMo releases. **Neither Zhipu nor Xiaomi has made an on-record statement about Omen Alpha.**
- Operational risk: stealth listings are explicitly time-boxed — Ox Alpha's own preview terms changed pricing overnight after Zhipu's reveal. Omen Alpha can vanish or reprice without notice, and there is no named company to hold to an SLA.

### Normalized scores (1–100)

> **Read this first.** Because only one proprietary benchmark exists, each score below is an *evidence-poor floor* anchored on the methodology's tier mapping, not a measurement derived from benchmark numbers. The template's rule — never invent numbers — means every unmeasured dimension is labelled "no verified public score found" above rather than filled with a plausible-looking value. Treat these five numbers as "at least this good, probably no better" and re-derive them the moment a real benchmark suite covers this model.

- **Tool use: 55/100.** The only measured agentic result is the OpenCode leaderboard at 23.14/40 (57.85% of max, rank #15) across four real implementation projects run through a coding harness, and Tool calling is metadata-confirmed. That places it in the middle of the methodology's band rather than the frontier tier, and it is the single best piece of evidence available. Capped by having *no* τ³-Banking, Terminal-Bench, MCP-Atlas, GDPval or Claw-Eval figure, and by the contradictory community reports about long-context recall.
- **Reasoning: 48/100.** Reasoning support with low/high thinking levels is confirmed by metadata, and the OpenCode projects presumably require it, but there is no GPQA Diamond, HLE, CritPt, index or LiveBench result — Artificial Analysis does not track this model at all. Scored below the methodology's mid band (55–65) because nothing is measured and the one substantive negative community report describes it failing to recall earlier turns and repeatedly asking for clarification, which is a reasoning-continuity signal.
- **Context window: 85/100.** 500,000 tokens with 128,000 max output maps to the methodology's 500K–1M tier floor of 85. Held at the floor because there is no retrieval measurement — no MRCR, RULER, GraphWalks or AA-LCR — so the "≥98% retrieval at 512K+" condition for a 100 is not merely unmet but untested, and the negative community recall report is the only behavioural evidence about long sessions.
- **Multimodal: 62/100.** Text and image input with text output puts it in the methodology's "+image in" 60–70 band. Scored at the low end because image input is metadata-confirmed but **entirely unmeasured** — no MMMU-Pro, BabyVision, CharXiv or perception benchmark exists — and there is no video or audio input to lift it into the 75–90 tier.
- **Coding: 62/100.** Anchored on the OpenCode leaderboard snapshot: 23.14/40 overall, with a best project of 4/5 (PHP CSV import), a mid of 3.5/5 and 3/5 (PHP offline sync, Go shipping quotes) and a worst of 2.75/5 (Dart/Flutter bank feed), plus code quality 9.94/20 and rank #15. The spread across four languages is the real signal — PHP and Go results are respectable while the Dart/Flutter result is the weakest, so this is a mid-pack coding worker rather than a generalist. Capped by the total absence of SWE-bench Verified, DeepSWE, LiveCodeBench, SciCode and Vibe Code Bench, and by the fact that the only result is a proprietary 4-project rubric from a single date that explainx.ai (Sept 5) described as having no published leaderboard entry — a direct conflict with omenalpha.io's transcription, unresolved here.
- **Cost efficiency: 95/100.** $0.20/$0.66 per 1M with $0.04 cached reads sits between the methodology's ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (≈92) anchors, and the bundle economics are better than the rate card suggests: $10/month buys $100 of usage — a 10x leverage — with measured cost of $0.03 per prompt and ~$0.27 per session across 7,518 sessions. Held just under the 97–99 tier because it is not a $0 route and the bundled caps ($12/5h, $30/week, $60/month) constrain sustained batch work.
- **Overall Score: 62/100.** (55 + 48 + 85 + 62 + 62) / 5 = 62.4 → 62. Recommendation: **a high-throughput, low-cost coding worker for OpenCode Go subscribers, and nothing more than that.** At ~189 tok/s with 500K context, image input and zero claimed retention, it is well shaped for routine implementation loops, repository exploration and iterative debugging, and its measured $0.03/prompt is genuinely excellent value inside a $10/month bundle. But it is opaque, unaccountable and essentially unbenchmarked: there is no vendor model card at all, one proprietary 4-project rubric from a single date, no standard benchmark of any kind, and two incompatible identity theories. Do not route anything high-risk or confidential to it without your own golden-task eval — and note that "zero retention" is OpenCode's claim about its own layer, not about an unnamed upstream provider.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: public internet research using OpenCode's own Go documentation and announcement as the primary source, plus omenalpha.io's transcribed September 4, 2026 OpenCode leaderboard snapshot (the only benchmark data that exists), BuildFastWithAI's independent review, and explainx.ai's identity/pricing investigation which explicitly separates confirmed facts from the two competing provider theories. Where sources conflict — the 23.14/40 vs 13.25/20 project-sum renderings, explainx.ai's "no published leaderboard entry" vs omenalpha.io's transcription, and TokenRa's $0.13/1M-context claims against three corroborating sources — both positions are recorded rather than resolved. Because only one proprietary benchmark exists, every normalised score above is an explicitly labelled evidence-poor floor rather than a benchmark-derived value.
- Reference URLs:
  - [omenalpha.io — Omen Alpha benchmarks (OpenCode leaderboard snapshot, 2026-09-04, methodology v1)](https://omenalpha.io/benchmarks.html)
  - [BuildFastWithAI — Omen Alpha review: speed, price, coding & is it worth it?](https://blog.buildfastwithai.com/omen-alpha-review)
  - [explainx.ai — Omen Alpha: OpenCode stealth model at $0.20/M (identity forensics, pricing, precedent)](https://www.explainx.ai/blog/opencode-omen-alpha-mystery-model-cheap-2026)
  - [OpenCode Go documentation (access, allowances, privacy)](https://opencode.ai/docs/go/)
  - [OpenCode usage-data page — zhipu/omen-alpha path](https://opencode.ai/data/zhipu/omen-alpha)
  - [OpenCode on X — Omen Alpha announcement](https://x.com/opencode/status/2095746098522452093)
  - [OrcaRouter — Xiaomi MiMo-V3-Flash identity analysis](https://www.orcarouter.ai/blog/xiaomi-mimo-v3-flash-leak)
  - [AI Coding Daily — Omen Alpha coding-model coverage](https://aicodingdaily.com/model/omen-alpha)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
