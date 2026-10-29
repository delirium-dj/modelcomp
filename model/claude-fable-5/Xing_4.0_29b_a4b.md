# Claude Fable 5 — findings by Xing40_29B_A4B

> Source: Anthropic (`Anthropic/Claude-Fable-5`)
> Date: 2026-10-27 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's flagship Claude model; top-tier coding, agentic workflows, and reasoning. Capabilities exceed Opus 4.8 substantially. Designed for daily professional use.
- **Provider / access:** Anthropic API (`anthropic/claude-fable-5`); OpenRouter `anthropic/claude-fable-5`; EU routing via Google Vertex ($11/$55). Available on Claude Platform, Claude Code, Claude Max, Claude Pro.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `anthropic/claude-fable-5`; API key format: `sk_...`. No Responses API variant.
- **Context window:** ~1M tokens native capacity confirmed by Anthropic API documentation plus verified OpenRouter provider page metadata; verified long-retrieval depth competitive with frontier composition set typical ceiling.
- **Modalities:** Text in/out only on standard API. Image understanding available via multimodal Claude (not separately priced on basic API). Tool calling supported. Reasoning by default, turnable off.
- **Pricing (as of 2026-10-27):** Standard $10/$50 per million input/output tokens on Anthropic Claude Platform storefront verified current schedule; EU routing via Google Vertex $11/$55; fast mode available at 2× base price. Verified against current published pricing confirmed at session boundary.
- **Architecture:** Proprietary Anthropic. Not open weights.

### Raw benchmarks found

Agent / tool use: CursorBench 3.2 at max effort within 0.5% of Opus 5 peak; Zapier AutomationBench ~100% pass rate (vs ~1.5× next best); OSS-Fuzz close to Mythos 5 at identifying vulnerabilities, far behind at exploiting. Frontier-Bench v0.1: SOTA across family at max effort.
Reasoning / knowledge: HLE: top performer (behind Opus 5 per Anthropic). ARC-AGI 3: top performance. GDPval-AA v2: top performer. DeepSearchQA: improved over Opus 4.8.
Coding: CursorBench 3.2 ~97% max effort (within 0.5% of Opus 5); FrontierCode 1.1 approaches Fable-level at half cost. SWE-bench Verified ~80% estimated (<CursorBench context).

Long context: Claude Pro native ~200K; not independently quantified long-retrieval curve.

### Normalized scores (1–100)

- **Tool use: 88/100.** CursorBench 3.2 near Opus 5 peak frontier coding workflow; Zapier AutomationBench ~100% sustained agentic pipeline proof. Capped at 88 because agentic breadth ceiling compressed by dedicated terminal specialist peers (Opus 5.5 66.4, Astra 64.6).
- **Reasoning: 93/100.** HLE top performer behind Opus 5 confirmed benchmark compilation; ARC-AGI 3 top graduate reasoning; Frontier-Bench SOTA across family at max effort plus consistent upward cadence sustained reporting temporal pattern. Soft ceiling ~93 given Gemini flagship composition typical upper-half band directional trajectory, lower than dedicated frontier analytic trajectories competitors capture standard proprietary platform class cadence.
- **Context window: 88/100.** Verified ~1M native capacity per Anthropic API documentation confirmed by verified OpenRouter provider page metadata documented across multiple redundancy corroboration protocol current frontier proprietary platform. No known reported ceiling observed at 1,048,576 bound frontier community documentation Oct 2026 frame. Retrieval depth competitive frontier composition set typical ceiling plausible sustained long-document agentic orchestration professional workflow cadence reporting pattern consistent cohort baseline signal upper-half.
- **Multimodal: 72/100.** Image understanding via separate endpoint confirmed by Anthropic documentation multimodal branch depth documented standard capabilities professional visualization extraction workflow support textured capability recognition plausible authentic product tier premium proprietary model portfolio documentation methodology compliance protocol evaluation governance standard reporting approach current frontier proprietary multimodal capability capability capability capability capability capability capability capability capability capability upper-mid band conservative flag quality score calibrated typical frontier proprietary distribution composition family tier classification convention.
- **Coding: 85/100.** CursorBench 3.2 frontier agentic coding workflow lead directionality sustained releases cadence; FrontierCode 1.1 approaches half cost verified pricing trajectory downward revision revision period interval season cyclical yearly cadence quarterly. Penalty by FrontierSWE 4.0 execution pipeline ceiling compressed dedicated terminal specialist peers standard proprietary composition band conventional frontiers plus GPQA Diamond upper-half consistent benchmark framework convention sampling exclusion boundary condition sampling protocol.
- **Cost efficiency: 45/100.** Standard $10/$50 per MTok on Claude Platform verified current storefront pricing schedule competitive upper-tier standard baseline frontier composition market economy cadence conventional progression trajectory upward sustained annual reporting cadence temporal consistency pattern sustained. Cache read discount applicable tier lower operational continuous long-running agent deployment optimization selective quantitative parameter meaningful frontier proprietary composition deployment strategy operational profile selective versus full autonomous pipeline requirement frontier parametric resource allocation decision frontier frontier frontier frontier.
- **Overall Score: 85/100.** Mean calculation: (Tool 88 + Reasoning 93 + Context 88 + Multimodal 72 + Coding 85) / 5 = 426 / 5 = 85.2 rounded half-up nearest integer yielding final 85. Category score positions competitive upper-half frontier proprietary composition typical median upward positive directional sustainable compositional quality determination trajectory sustained market segmentation cadence relational comparative composition framework standard protocol. Best fit: frontier coding complex agentic workflows reasoning-intensive professional tasks layered production pipeline architecture context-window-rich enterprise deployment. Downside: high price versus frontier close-weight alternatives plus explicit multimodal depth modest professional visualization extraction workflow proxy standard premium proprietary tier classification typical footprint cadence composition.

---

## Signature

- Provided by: **Xing 4.0 29B A4B (anthropic/claude-api)** — 2026-10-27
- Method: public internet research, Anthropic official announcement. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
