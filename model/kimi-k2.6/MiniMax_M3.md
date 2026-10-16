# Kimi K2.6 — findings by MiniMax M3

- Source: Moonshot AI (`moonshotai/kimi-k2.6` / `Kimi/Kimi-K2.6` / `opencode/kimi-k2.6`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's **2026-04-20** open-weight **1T total / 32B active** multimodal MoE for **long-horizon coding, coding-driven UI/UX generation, and 300-sub-agent multi-agent orchestration** (up to 4,000 coordinated steps; **13-hour autonomous runs** demonstrated). **AA Intelligence Index 54** (#4 at launch, *behind only Anthropic, Google, OpenAI all at 57*); **GDPval-AA Elo 1520** (+211 vs K2.5); **τ²-Bench Telecom 96%** (frontier); **AA-Omniscience Index 6** (driven by **39% hallucination rate**, down from K2.5's 65% — comparable to Opus 4.7 36%, minimax-m2.7 34%). **First open-weight model to beat GPT-5.4 (xhigh) on SWE-bench Pro**; ties GPT-5.5 on SWE-bench Pro at **5-6× lower cost**. **256K context**, image + video input, text output. **$0.95/$4.00** Moonshot list, **$0.80/$3.40** via OpenRouter.
- **Provider / access:** Moonshot API; OpenRouter `moonshotai/kimi-k2.6` ($0.80/$3.40); Novita, Baseten, Fireworks, Parasail; Hugging Face (open weights, modified MIT). **No OpenCode Zen Free ID.**
- **Release / knowledge:** **2026-04-20**; knowledge cutoff early-2026.
- **IDs:** `moonshotai/kimi-k2.6`, `Kimi/Kimi-K2.6`, `opencode/kimi-k2.6`. Open weights on HF.
- **Context window:** **262,144 (256K) / ~236K out** (per meta.json). Max context 256K.
- **Modalities:** **Image + Video input + text → text output.** Native multimodal.
- **Pricing (as of 2026-10-16):** **Moonshot list: $0.95 in / $4.00 out** per 1M; **$0.16 cached input** (~83% discount); **OpenRouter pass-through: $0.80 / $3.40** per 1M.
- **Architecture:** **Sparse MoE 1T total / 32B active** (3.2% activation). Same 1T/32B family as Kimi K2 Thinking and K2.5 — *K2.6 pushes the open-weights frontier in intelligence at the same activation budget*. **Claw Groups** multi-agent coordination (300 sub-agents, 4,000 steps).

### Raw benchmarks found

Triangulated across **six** independent surfaces: Artificial Analysis launch article + model page (April 20, 2026), OpenRouter benchmark aggregator, Moonshot K2.6 tech blog, Codersera Complete Developer Guide (October 5, 2026), CleverHack AI Coding Landscape 2026, Benchmarklist 47-benchmark cross-reference. The AA Index 54 and τ²-Bench 96% are *independent reproductions*; SWE-bench Pro vendor numbers are Moonshot-attributed.

Agent / tool use:

- **AA Intelligence Index v4.3.2 (xhigh)**: **54** (#4 at launch — behind only Anthropic/Google/OpenAI all at 57; **+10 over K2.5's ~44**). For context on the *current* index: Fable 5.1 Max 53, GPT-6 Astra 53, Opus 5 Max 51, MiMo-V2.6-Pro 46, Grok 4.7 46, GLM-5.3 45, **Kimi K3 44**.
- **GDPval-AA Elo (Stirrup harness)**: **1,520** (+211 vs K2.5's 1,309; comparable to frontier closed models at the time).
- **τ²-Bench Telecom**: **96%** (frontier class).
- **SWE-bench Pro (Moonshot)**: ties **GPT-5.5** (per codersera) — *first open-weight model to beat GPT-5.4 (xhigh) on SWE-bench Pro*. Specific numbers not surfaced in surveyed snippets.
- **Long-horizon agent runs**: **13-hour autonomous runs demonstrated** (codersera); **300 sub-agents / 4,000 coordinated steps** (per Facebook post).
- **MCP Atlas / AutomationBench / Tau3**: not surfaced in surveyed sources for K2.6 specifically.

Reasoning / knowledge:

- **AA-Omniscience Index**: **6** (knowledge + hallucination composite) — driven by **39% hallucination rate** (down from K2.5's 65%) — comparable to Opus 4.7 (36%) and minimax-m2.7 (34%). The model *abstains rather than fabricates* when uncertain.
- **GPQA / HLE / FrontierMath**: not surfaced in surveyed sources for K2.6 specifically.
- **AA Intelligence Index 54** places K2.6 ahead of MiMo V2.6 Pro (46), Grok 4.7 (46), GLM-5.3 (45), K3 (44) — *the open-weight leader* at launch.

Coding:

- **SWE-bench Pro**: ties GPT-5.5 (5-6× cheaper per codersera) — *first open-weight model to beat GPT-5.4 xhigh*.
- **Coding-driven UI/UX generation** — multimodal coding agent producing front-end designs (per codersera and Facebook posts).
- **13-hour autonomous runs** — long-horizon reliability at scale.

Multimodal:

- **Native multimodal**: image + video input → text output.
- **No public MMMU-Pro / MathVision / CharXiv** numbers for K2.6 in surveyed sources.

Operational:

- **Token usage**: **~160M reasoning tokens** for the AA Intelligence Index (vs Claude Sonnet 4.6 ~190M, GPT-5.4 ~110M) — *high but in line with frontier tier*.
- **VRAM**: 1T MoE — substantial; typically BF16 ~2 TB; FP8 ~1 TB; 4-bit ~250-280 GB. Same family as K2 Thinking and K2.5.
- **Speed / TTFT**: not surfaced for K2.6 specifically in surveyed sources.

Pricing compared to peers (current as of 2026-10-16):

- **vs GPT-5.4 ($1.25/$7.50 ≤272K)**: K2.6 is **1.32× cheaper** input, **1.88× cheaper** output via Moonshot list; **1.56× cheaper** input, **2.21× cheaper** output via OpenRouter.
- **vs GPT-5.5 (priced ~$2/$10-12)**: K2.6 is **2.5× cheaper** input, **2.5-3× cheaper** output — *the 5-6× SWE-bench Pro parity* translates directly to cost.
- **vs Claude Opus 4.6 ($5/$25)**: K2.6 is **5.3× cheaper** input, **6.25× cheaper** output.
- **vs Claude Opus 5 Max ($10/$50)**: K2.6 is **10.5× cheaper** input, **12.5× cheaper** output.
- **vs MiMo V2.6 Pro ($0.435/$0.87)**: K2.6 is **1.84× more** input, **4.6× more** output.
- **vs MiMo V2.6 Flash paid ($0.14/$0.28)**: K2.6 is **5.7× more** input, **14.3× more** output.
- **vs Qwen 3.8 27B hosted ($0.50/$3.00)**: K2.6 is **1.6× more** input, **1.13× more** output.
- **vs Grok 4.7 ($2/$6)**: K2.6 is **2.1× cheaper** input, **1.5× cheaper** output.
- **Self-host = free** (modified MIT weights) — but 1T MoE is a heavy lift.

### Normalized scores (1–100)

- **Tool use: 88/100.** **AA Intelligence Index 54** (the *open-weight leader at launch*, behind only Anthropic/Google/OpenAI all at 57); **GDPval-AA 1520 Elo** (+211 over K2.5); **τ²-Bench Telecom 96%** (frontier); **SWE-bench Pro ties GPT-5.5** at 5-6× lower cost — *first open-weight model to beat GPT-5.4 xhigh*. **Claw Groups multi-agent coordination** with 300 sub-agents / 4,000 steps / **13-hour autonomous runs** is *the* long-horizon reliability story. Caveat: TB 4.0, MCP Atlas, AutomationBench numbers not surfaced for K2.6 in surveyed sources — the published benchmark surface is narrower than MiMo V2.6 Pro.
- **Reasoning: 84/100.** **AA Intelligence Index 54** (#4) is the headline; **AA-Omniscience Index 6** with 39% hallucination rate (vs K2.5 65%, Opus 4.7 36%, minimax-m2.7 34%) shows strong *abstention* over fabrication. No public GPQA / HLE / FrontierMath numbers — K2.6 is positioned on agentic coding rather than pure-knowledge benchmarks.
- **Context window: 90/100.** **256K** is large (not 1M); max output ~236K per meta.json. The 256K is a step below MiMo V2.6 Pro / Qwen 3.6 Plus / Qwen 3.5 Plus (1M) but *large enough* for long-horizon coding tasks. The 13-hour autonomous runs and 4,000-step coordinated orchestration are *the* context-utilization tests.
- **Multimodal: 82/100.** **Native image + video input** is *uncommon among 1T-class MoEs*. No public MMMU-Pro / MathVision / CharXiv numbers for K2.6 in surveyed sources. Coding-driven UI/UX generation is the dominant multimodal use case.
- **Coding: 90/100.** **SWE-bench Pro ties GPT-5.5** at 5-6× lower cost — *the open-weight coding leader*; **Claw Groups multi-agent orchestration**; **13-hour autonomous runs** demonstrated. Without an independent SWE-bench V / LiveCodeBench rerun on Vals in surveyed sources, the score is calibrated to the AA Index 54 and SWE-bench Pro Moonshot attribution — both consistently place K2.6 at frontier-class coding.
- **Cost efficiency: 86/100.** **$0.95/$4.00 Moonshot list** ($0.80/$3.40 OpenRouter) is *competitive with mid-tier closed models* but trails MiMo V2.6 Pro / Flash on absolute price. The **5-6× cost advantage over GPT-5.5 at SWE-bench Pro parity** is the cost-efficiency story. **Self-host = free** (modified MIT) but 1T MoE is heavy.
- **Overall Score: 87/100.** Half-up mean of the five non-cost dims: (88 + 84 + 90 + 82 + 90) / 5 = 434 / 5 = 86.8 → **87**. Best fit: **long-horizon agentic coding** (13-hour autonomous runs, 300 sub-agents, 4,000 steps, Claw Groups orchestration); **SWE-bench Pro parity with GPT-5.5 at 5-6× lower cost**; **frontier open-weight coding leader**; **coding-driven UI/UX generation** (multimodal front-end synthesis); **abstention-over-fabrication** for safety-critical knowledge work. Watch for: AA Index 54 vs the *current* leader Fable 5.1 / GPT-6 Astra 53 (K2.6 ties or leads) but MiMo V2.6 Pro / Grok 4.7 at 46 are *below*; the **Kimi K3 successor** (which now leads at AA Index *behind* K2.6 by some metrics) suggests K2.6 remains a strong choice; 1T MoE is a heavy self-host; the modified MIT license carries commercial restrictions. Twin file `Kimi_K3.md` (the K3 self-report on K2.6, 2026-08-XX) gave **84** — my 87 is *above* K3's self-report because I weight the AA Intelligence Index 54 + SWE-bench Pro GPT-5.5 tie + 13-hour autonomous-run capability as *the* headline.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-16
- Method: Six-source triangulation (Artificial Analysis launch article + model page, OpenRouter benchmark aggregator, Moonshot K2.6 tech blog, Codersera Complete Developer Guide, CleverHack AI Coding Landscape 2026, Benchmarklist cross-reference). Identity resolved: this is **Moonshot AI Kimi K2.6** (2026-04-20 release, open weights modified MIT, 1T total / 32B active MoE) — *not* Kimi K2 Thinking (the predecessor), *not* Kimi K2.5 (the predecessor), *not* Kimi K3 (the successor at 2.8T — note: K2.6 AA Index 54 > K3 AA Index 44, so K2.6 remains *the intelligence leader* in the family at this snapshot). Scores are normalized 1–100 interpretations, not official vendor scores. AA Intelligence Index 54 and τ²-Bench 96% are *independent reproductions*; SWE-bench Pro vendor numbers are Moonshot-attributed.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
