# Grok 4.20 — findings by Claude Opus 5

- Source: xAI / SpaceXAI (`grok-4.20-0309-reasoning`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's multi-agent-architecture reasoning model: a query is routed to several specialised agents that think in parallel, compare outputs, and synthesise a single answer (4 agents at low/medium reasoning effort, 16 at high/xhigh). xAI positions it on "industry-leading speed and agentic tool calling" plus "the lowest hallucination rate on the market with strict prompt adherence" ([xAI docs](https://docs.x.ai/developers/models/grok-4.20)). The separately-billed **Grok 4.20 Multi-Agent** (`grok-4.20-multi-agent-0309`) is a sibling SKU aimed at deep-research orchestration, not this model, and has its own BenchLM entry.
- **Provider / access:** xAI API, model name `grok-4.20-0309-reasoning`, with an unusually long alias chain (`grok-4.20`, `grok-4.20-reasoning`, `grok-4.20-beta`, `grok-4.20-beta-latest`, `grok-4.20-experimental-beta-0304-reasoning`, `grok-4.20-reasoning-gv2`, and others) — worth knowing because several third-party trackers pin different aliases and then disagree about the specs. Also on OpenRouter (`x-ai/grok-4.20`) and third-party gateways. **Batch API supported** (20% discount). **Not listed on OpenCode Zen**, whose Grok line is 4.5 / 4.6 / 4.7 / Build 0.1; this repo records the local route `opencode/grok-4.20`.
- **Release / knowledge:** Public **beta 2026-02-17**; Beta 2 shipped **2026-03-03**; the `0309` snapshot (the one benchmarked) dates to **2026-03-09**, with the Multi-Agent variant following **2026-03-12** ([ai-tldr](https://ai-tldr.dev/releases/xai-grok-4-20/); [Grokipedia](https://grokipedia.com/page/Grok_420); [llm-stats](https://llm-stats.com/models/grok-4.20-multi-agent-beta-0309)). Knowledge cutoff: no verified public date found.
- **IDs:** `grok-4.20-0309-reasoning` (xAI, canonical), `x-ai/grok-4.20` (OpenRouter). **No free tier of any kind.**
- **Context window:** **1,000,000 tokens** per xAI's own model reference. **Direct conflict:** BenchLM records **2M** ([BenchLM](https://benchlm.ai/models/grok-4-20-beta)), and multiple third-party reviews repeat "2-million-token context window". I take the vendor's live docs page as authoritative and report the disagreement rather than splitting it. Max output: no verified public figure found.
- **Modalities:** **Text + image in → text out** (xAI docs, "text, image → text"). No audio, no video, no generated media. Reasoning: **yes**, with an effort parameter that also controls how many parallel agents spin up. Function calling: yes. Structured outputs: yes.
- **Pricing (as of 2026-10-08):** Tiered at the 200K-prompt boundary, per [xAI docs](https://docs.x.ai/developers/models/grok-4.20) — **input $1.25 / MTok below 200K, $2.50 at or above**; **cached input $0.20 / $0.40**; **output $2.50 / $5.00**. A request that reaches 200K tokens is billed at the higher rate for *all* tokens in that request, not just the overflow. Batch API requests get a **20%** discount (not the 50% that OpenAI and Anthropic offer). Rate limits are generous: **37 requests/second, 10,000,000 tokens/minute**. Regions: `us-east-1`, `us-west-2` only — no EU region, which matters for data-residency requirements.
- **Architecture:** Proprietary, closed weights. xAI publishes no parameter count; third-party reviews describe it as a 4-agent MoE, which I could not confirm from any xAI source and therefore do not treat as established. What *is* vendor-documented is the parallel multi-agent inference topology and its coupling to the reasoning-effort setting.

### Raw benchmarks found

> **Provenance warning, stated up front:** the majority of the figures below reach the aggregator via **Meta AI's Muse Spark launch comparison chart** — i.e. a competitor's published comparison table, not xAI's own reporting and not a neutral harness. A rival has an incentive to present a competitor conservatively, so these are treated as third-party-but-interested. Where Vals AI measured the same thing independently, both numbers are given.

Agent / tool use:

- Terminal-Bench 2.0: **47.1%** ([Meta AI Muse Spark comparison chart](https://ai.meta.com/blog/introducing-muse-spark-msl/))
- Terminal-Bench 2.1: **44.2%** ([Vals AI](https://www.vals.ai/models/grok_grok-4.20-0309-reasoning)) — independent, and consistent with the Meta figure
- DeepSearchQA: **62.8%** (Meta AI chart)
- Gert Labs rankings: **38.36%** ([Gert Labs](https://gertlabs.com/rankings))
- τ²-bench / τ³-bench, OSWorld, GDPval-AA, Toolathon, MCP-Atlas, Claw-Eval: no verified public score found
- Vendor claim, unquantified: "industry-leading speed and agentic tool calling capabilities" and "the lowest hallucination rate on the market" — **no number attached**, and I found no public hallucination measurement (no AA-Omniscience row exists for this model), so the central marketing claim is unverifiable

Reasoning / knowledge:

- **ARC-AGI-2: 53.3%** (Meta AI chart) — the standout result: 3.4× Grok 4's 15.9% on the same benchmark
- ARC-AGI-3: **0.1%** ([ARC Prize official leaderboard](https://arcprize.org/leaderboard)) — effectively zero on the next-generation set
- GPQA Diamond: **88.5%** (Meta AI chart) / **88.6%** ([Vals AI](https://www.vals.ai/models/grok_grok-4.20-0309-reasoning)) — two independent sources within 0.1 points
- MMLU-Pro: **86.3%** (Vals AI)
- HLE without tools: **31.6%** (Meta AI chart)
- MedXpertQA (text): **50.2%**; HealthBench Hard: **20.3%** (Meta AI chart)
- BenchLM overall: **57.38/100, rank #55 of 887** (24 of 623 benchmarks covered, flagged conservative)
- AA-LCR, CritPt, Artificial Analysis Intelligence Index, AA-Omniscience, AA-IFBench: **no verified public score found** — Artificial Analysis has no entry for this model, which is why the hallucination claim cannot be checked

Coding:

- SWE-bench Verified: **76.7%** (Meta AI chart); **72.2%** independently ([Vals AI](https://www.vals.ai/models/grok_grok-4.20-0309-reasoning)) — a 4.5-point spread
- SWE-bench Pro: **51.8%** (Meta AI chart)
- LiveCodeBench Pro: **74.2%** (Meta AI chart); LiveCodeBench: **84.3%** (Vals AI)
- **Vibe Code Bench: 4.06%** ([Vals AI Vibe Code Bench v1.1](https://www.vals.ai/benchmarks/vibe-code)) — an 80-point gap against its own LiveCodeBench score from the same lab. This is not plausibly a capability measurement; it reads as a harness/scaffold incompatibility, and I flag it as such rather than averaging it in as if it were comparable evidence.
- SciCode / FrontierCode / DeepSWE: no verified public score found

Multimodal:

- MMMU-Pro: **75.2%**; MedXpertQA (MM): **65.8%**; CharXiv: **60.9%**; SimpleVQA: **57.4%**; ERQA: **54.1%** (all Meta AI chart)
- Design Arena — Website: **1236 Elo** ([OpenRouter](https://openrouter.ai/x-ai/grok-4.20/benchmarks))
- No video, audio, OCR/document, or GUI-grounding number found

Long context:

- **No MRCR, RULER, LongBench, AA-LCR or needle-retrieval number at any depth.** The 1M window (2M by some accounts) is entirely unvalidated by public retrieval measurement, and the pricing structure actively discourages testing it: crossing 200K prompt tokens doubles the rate on the *whole* request.

### Normalized scores (1–100)

- **Tool use: 66/100.** Terminal-Bench 2.0 47.1% is corroborated almost exactly by an independent 44.2% on the harder 2.1 harness, which is a credible mid-tier agentic result, and DeepSearchQA 62.8% shows real search-agent competence; the parallel multi-agent topology is a genuine architectural asset. Capped in the mid-60s because xAI's loudest claim here — "industry-leading … agentic tool calling" — has **no benchmark behind it**, and because the modern battery (τ²/τ³-bench, OSWorld, GDPval, MCP, Toolathon) is entirely absent for this model.
- **Reasoning: 80/100.** ARC-AGI-2 at **53.3%** is the strongest abstraction-and-reasoning number of any model I have scored in this pass and a 3.4× jump over Grok 4, and GPQA Diamond lands at 88.5–88.6% from two independent sources — unusually tight agreement. Capped below the mid-80s by HLE 31.6% without tools, ARC-AGI-3 at 0.1%, HealthBench Hard 20.3%, and the complete absence of any hallucination measurement despite the vendor making low hallucination its central claim.
- **Context window: 86/100.** A vendor-documented 1M-token window on a fast, cheap reasoning model is top-tier on paper. Held below the 90s for three evidenced reasons: the public record is self-contradictory (xAI says 1M, BenchLM and several reviews say 2M), there is **zero** retrieval validation at any depth, and the 200K billing cliff — which reprices the entire request, not the overflow — makes the deep window economically awkward rather than freely usable.
- **Multimodal: 65/100.** Text and images in, text only out, so the structural ceiling applies. Within vision the *breadth* is better than most: MMMU-Pro 75.2%, MedXpertQA-MM 65.8%, CharXiv 60.9%, SimpleVQA 57.4%, ERQA 54.1% span general, medical, chart and embodied-reasoning tasks. Capped by the absolute levels sitting in the 54–75% band rather than the 80s, by no video or audio pathway at all, and by every one of those figures coming from a single competitor-published chart.
- **Coding: 72/100.** SWE-bench Verified 76.7% (72.2% independently) with SWE-bench Pro 51.8% and LiveCodeBench 84.3% is a solid, broadly-evidenced coding profile for the price. Capped by the 4.5-point vendor-vs-independent spread on SWE-bench, by the absence of FrontierCode or SciCode, and by the unresolved **Vibe Code Bench 4.06%** anomaly — whatever its cause, a model that collapses that completely in one agentic scaffold cannot be scored as reliably agentic in coding.
- **Cost efficiency: 86/100.** $1.25 in / $2.50 out per MTok, with $0.20 cached input, for a 1M-context reasoning model that posts ARC-AGI-2 53.3% is excellent value — half the input price and under half the output price of Grok 4.5/4.6/4.7 at a BenchLM score within 7 points of 4.5. Rate limits (37 rps, 10M TPM) are generous enough for real production fan-out. Docked for the 200K cliff that doubles the rate on the whole request, a batch discount of only 20% versus the 50% that is now standard elsewhere, no free tier, and US-only regions.
- **Overall Score: 73.8/100.** Mean of the five non-cost dims (66 + 80 + 86 + 65 + 72) / 5 = 73.8. Best fit: cheap, fast, high-throughput abstract reasoning and mid-weight coding over large-but-under-200K prompts — the ARC-AGI-2 result plus 10M TPM is a genuinely unusual combination. Avoid it where you need audited hallucination behaviour (the claim is unmeasured), validated million-token retrieval, or a coding agent that survives arbitrary scaffolds.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — xAI's own developer model reference for Grok 4.20 (modalities, 1M context, canonical name and alias list, tiered pricing, batch discount, rate limits, regions, capability flags), BenchLM's aggregated model page and Grok API pricing table, Vals AI's independent leaderboards for the `grok-4.20-0309-reasoning` snapshot, the ARC Prize leaderboard, OpenRouter benchmarks, and release-timeline reporting from ai-tldr, Grokipedia and llm-stats. `x.ai/news/grok-4-20` was requested and returned 404, so no first-party launch post was available. Benchmark figures sourced from Meta AI's competitor comparison chart are explicitly labelled as such, the Vibe Code Bench outlier is flagged rather than averaged, and the vendor's unquantified "lowest hallucination rate" claim is reported as unverifiable. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
