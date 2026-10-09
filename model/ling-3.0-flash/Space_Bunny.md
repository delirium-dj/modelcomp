# Ling 3.0 Flash — findings by Space Bunny

- Source: InclusionAI / Ant Group (`inclusionAI/Ling-3.0-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-flash
- **Short description:** InclusionAI's **next-generation native hybrid reasoning model** — a **124B-total / 5.1B-active** MoE that activates only ~12.4% of its 1T-class flagship Ring-2.6-1T's parameters and still claims to match or outperform it on key benchmarks. Its whole thesis is **efficiency and production deployment**: at 5.1B active parameters it is among the fastest models measured anywhere (316–373 tokens/s) and among the cheapest ($0.075/$0.22). Trained on **10,000+ interactive environments** for closed-loop execution across coding, general and deep-research agent tasks. Top use case: high-throughput production agents in Claude Code, Kilo Code, Qwen Code, Hermes Agent and OpenClaw.
- **Provider / access:** Hugging Face `inclusionAI/Ling-3.0-flash` (**MIT**, 11,797 downloads last month, 46 quantizations, an FP8 and a GGUF variant, Inference Providers incl. Novita); ModelScope; **OpenRouter** `inclusionai/ling-3.0-flash`; InclusionAI API. Self-host via SGLang (`lmsysorg/sglang:dev-Ling-3.0-flash`) or vLLM, with MTP speculative decoding recommended. No OpenCode Zen ID found for this base model — the free tier in this family belongs to the separate **Ling-3.0-flash-Fin** variant.
- **Release / knowledge:** Released **2026-08-02** (ApX); Artificial Analysis lists "Released August 2026". Knowledge cutoff: not disclosed.
- **IDs:** `inclusionAI/Ling-3.0-flash` (HF), `inclusionai/ling-3.0-flash` (OpenRouter)
- **Context window:** **262,144 tokens (256K native)**, trained on a progressive **8K → 32K → 256K** schedule. Verified on Artificial Analysis ("262k tokens ~393 A4 pages"), ApX (262K) and the official SGLang/vLLM recipes (`--context-length 262144`). Beyond 256K the model uses YaRN (`SGLANG_ALLOW_OVERWRITE_LONGER_CONTEXT_LEN`).
- **Modalities:** **Text in → text out only.** The HF repo is a `Text Generation` `bailing_hybrid` causal LM; Artificial Analysis lists text for both input and output modality. Reasoning: **thinking mode enabled by default** (disable with `chat_template_kwargs: {"enable_thinking": false}`); defaults temperature 0.6, top_p 0.95, top_k 20. Tool calls / function calling: yes (`--tool-call-parser ling3`, `--enable-auto-tool-choice`).
- **Pricing (as of 2026-10-09):** **$0.075 in / $0.22 out / $0.015 cache-hit per 1M** — a **blended $0.0475** at 7:2:1 (Artificial Analysis), the cheapest of InclusionAI's five models. **MIT-licensed open weights** make self-hosting free of token cost. No Free API tier for this model.
- **Architecture:** Hybrid-linear MoE, **124B total / 5.1B activated**. **35 KDA + 7 Gated MLA transformer layers in a 5:1 alternating stack** — Kimi Delta Attention with fine-grained diagonal gating, combined with MLA — plus **1/64 sparse MoE** with 512 routed experts (8 activated) and 1 shared expert. 2 dense layers; 32 attention heads; hidden size 2,560; expert intermediate size 768; dense intermediate size 6,144; vocabulary 157,184; 1 multi-token-prediction head. Native hybrid-linear attention **from the very start of pretraining** — not a retrofit. Natively integrates **SGLang HiCache + Mooncake hierarchical caching** (physical dual-pools plus a cluster-shared L3 cache), cutting TTFT **60–80%+** on long-input scenarios.

### Raw benchmarks found

> **Independently leaderboard-confirmed** rows are those on public Hugging Face evaluation leaderboards. Note: InclusionAI's model card renders its own benchmark comparison tables as **images**, so most of its headline agentic numbers (Tau3-banking-AA, MCP-Atlas, SkillsBench, GDPval v2-AA, BrowseComp, WideSearch, Draco, AntSWEBench, MiniAppBench) are **named but not machine-readable** and are therefore reported here as "named, no published numeric value."

Reasoning / knowledge:

- **GPQA Diamond: 85.0%** (benchlm.ai; also listed as 84.8% on the Vals harness and 85.0% as GPQA-D)
- **MMLU-Pro: 82.0%** (benchlm.ai, Vals harness)
- **AIME 2026: 93.2%** — **independently confirmed on the Hugging Face `MathArena/aime_2026` leaderboard**
- **HMMT Feb 2026: 87.0%** — **independently confirmed on the Hugging Face `MathArena/hmmt_feb_2026` leaderboard**
- IMOAnswerBench: **83.7%** (benchlm.ai)
- **HLE: 22.7%** — **independently confirmed on the Hugging Face `cais/hle` leaderboard** (Artificial Analysis's own harness reports 24%)
- IFBench: **74.5%** (benchlm.ai)
- **Artificial Analysis Intelligence Index: 20** (AA model page — "well above average among comparable models, median 8"). **Discrepancies flagged:** AA's own comparison pages variously show **25 (estimated)** for this model, while OpenRouter's listing advertises an AA Intelligence Index of **37.8** and a Coding Index of 50.6. The AA model-page figure of 20 is used here; the spread (20 / 25 / 37.8) is unexplained by configuration in the sources and should be treated as an open question.
- **CritPt: 2%** and **AA-Omniscience: −18** (Artificial Analysis) — both very poor, and a meaningful caution against trusting the strong knowledge-benchmark rows
- **AA-LCR v1.1: 73%** (Artificial Analysis; tied with MiMo-V2.5, ahead of Gemini 3.5 Flash minimal at 61% and Qwen3.6 27B non-reasoning at 67%)

Coding:

- **SWE-bench Pro: 56.6%** — **independently confirmed on the Hugging Face `ScaleAI/SWE-bench_Pro` leaderboard** (evaluated with OpenHands as the agent harness, tailored prompts, temperature 0.6, top_p 0.95, max_new_tokens 32K, 256K context)
- **SWE-bench Multilingual: 72.4%** — **independently confirmed on the Hugging Face `SWE-bench/SWE-bench_Multilingual` leaderboard** (same OpenHands protocol)
- **Terminal-Bench 2.1: 50.2%** (benchlm.ai, Vals harness). InclusionAI's own card confirms it was run under the **Artificial Analysis protocol with the default Terminus 2 harness**, unified 2-hour timeout, preserve-thinking JSON parser, 3 runs per task, temperature 0.6, top_p 1.0, max_new_tokens 32K, 256K context — so 50.2% is very likely the AA figure.
- **Terminal-Bench 4.0: 0%** (Artificial Analysis Index v4.3.2 comparison table) — a stark drop, and worth weighing against the TB2.1 result
- LiveCodeBench: **84.0%** (Vals harness) / **82.8%** (LiveCodeBench v5, benchlm.ai)
- SciCode: **41.2%** (benchlm.ai)
- AA Coding Index: **50.6** (OpenRouter) / **0.51 → #88** (ApX) — consistent between the two
- DeepSWE / Vibe Code Bench / FrontierCode / MiniAppBench / AntSWEBench: named on the model card, **no published numeric value found**

Agent / tool use:

- AA-Briefcase v1.1: **796 Elo** (Artificial Analysis) — low relative to the 1,182–1,824 band most contemporary models occupy
- AutomationBench-AA: **3%** (Artificial Analysis) — very low
- GDP.pdf (professional document reasoning, all-pass): **5%** (Artificial Analysis) — very low
- Tau3-banking-AA, MCP-Atlas, SkillsBench, GDPval v2-AA, BrowseComp (single- and multi-agent), WideSearch, Draco: **named by InclusionAI as strong, no numeric value published**
- Tau2-Bench / Tau3-Banking other domains: only the banking variant is named
- GDPval-AA v2: evaluated by InclusionAI on the public 220-task benchmark with the official Stirrup harness, 250-turn limit and 5-hour timeout — **no numeric value published**
- Claw-Eval / ClawProBench: no verified public score found

Long context:

- **262,144 tokens native**, trained 8K → 32K → 256K. **AA-LCR v1.1 at 73%** is real independent retrieval evidence and is genuinely good — equal to MiMo-V2.5 despite a quarter of the parameters.
- The HiCache + Mooncake integration is an *inference* optimization, not a quality score: it removes redundant recomputation during long-horizon interactions and cuts TTFT 60–80%.
- No MRCR / RULER / GraphWalks / LongBench v2 numbers published.

Speed / cost efficiency inputs:

- Output speed: **316–373 tokens/s** across Artificial Analysis runs (315.7, 325.4, 328.6, 373.4 t/s) — AA's InclusionAI provider page lists **325 t/s**. Class median for comparable open-weights models is 128.8 t/s, so this is roughly 2.5× the class median. **Fastest of all five InclusionAI models.**
- Time to first token: **2.52–3.11 s**; time to first answer token ~8.5 s; end-to-end response ~9.8–10.1 s
- Token use: 49k output tokens per task, 33k of them reasoning tokens
- **Verbosity warning:** Artificial Analysis notes the model generated **260M tokens** running the Intelligence Index versus a median of 100M — "very verbose." Real per-task cost can therefore run well above the headline $0.0475 blended rate.

### Normalized scores (1–100)

- **Tool use: 62/100.** InclusionAI *names* Tau3-banking-AA, MCP-Atlas, SkillsBench, GDPval v2-AA, BrowseComp, WideSearch and Draco as strengths but publishes **no numbers** for any of them, so the score rests on what is measurable: Terminal-Bench 2.1 at 50.2%, AA-Briefcase at only **796 Elo**, AutomationBench-AA at **3%**, Terminal-Bench 4.0 at **0%**, and GDP.pdf at **5%**. That is a real agentic toolset, but a thin and partly unmeasured one — mid-band, with a heavy caveat.
- **Reasoning: 74/100.** GPQA Diamond 85.0% and MMLU-Pro 82.0% are solid, with **AIME 2026 93.2%** and **HMMT 87.0%** independently confirmed on MathArena leaderboards and IMOAnswerBench 83.7% showing genuine math strength. Held well below the frontier by **HLE at 22.7%** (independently confirmed on `cais/hle`), **CritPt at 2%**, **AA-Omniscience at −18**, and an AA Intelligence Index of only 20–25.
- **Context window: 90/100.** **262,144 tokens native** with a documented 8K→32K→256K training schedule — upper-mid tier, natively trained rather than extrapolated — and **AA-LCR 73%** is unusually good real retrieval evidence for a model this small. Not higher because there is no MRCR/RULER/GraphWalks data and 256K is not the top tier.
- **Multimodal: 15/100.** **Text-only**, confirmed by the HF repo being a `Text Generation` causal LM and by Artificial Analysis listing text for both input and output. Floor score by methodology. InclusionAI's vision-capable sibling in this family is **Ling-3.0-flash-VL**, a different model with its own folder.
- **Coding: 72/100.** **SWE-bench Pro 56.6%** and **SWE-bench Multilingual 72.4%** are both independently leaderboard-confirmed and respectable, with LiveCodeBench 84.0%. Held down by SciCode 41.2%, Terminal-Bench 2.1 at 50.2%, Terminal-Bench 4.0 at **0%**, and an AA Coding Index of ~50.6 that lags its own reasoning scores.
- **Cost efficiency: 98/100.** **$0.075 in / $0.22 out / $0.015 cached**, blended **$0.0475** — versus AA class medians of $0.30 in / $0.81 out — combined with **MIT-licensed open weights**. Essentially unmatched price-performance in the 124B class. Held at 98 rather than 100 because there is no Free API tier for this base model and because **Artificial Analysis flags the model as "very verbose"** (260M tokens vs a 100M median on the Intelligence Index), which erodes the effective per-task advantage of the low tariff.
- **Overall Score: 63/100.** Best fit: **high-throughput, low-cost production agents and subagents** — Claude Code / Kilo Code / Qwen Code / OpenClaw loops, deep-research agents, and high-volume routing — where 316–373 tokens/s at $0.0475 blended and MIT weights beat raw benchmark leadership. Not the pick for frontier reasoning, document work (GDP.pdf 5%), or hard SWE-agentic loops, where the missing Terminal-Bench 4.0 and SciCode numbers argue for a bigger model.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-09
- Method: public internet research cross-checked across the **official Hugging Face model card** for `inclusionAI/Ling-3.0-flash` (full architecture table, per-benchmark evaluation protocols and decoding parameters, SGLang/vLLM deployment recipes, HiCache+Mooncake claims), the **Hugging Face evaluation leaderboards** for AIME 2026, HMMT Feb 2026, SWE-bench Pro, SWE-bench Multilingual and HLE (five independently confirmed scores), benchlm.ai's Ling 3.0 Flash comparison tables (GPQA Diamond, MMLU-Pro, LiveCodeBench, SciCode, IFBench, Terminal-Bench 2.1, IMOAnswerBench), Artificial Analysis's model page and four comparison pages (Intelligence Index, AA-LCR, AA-Briefcase, AutomationBench-AA, Terminal-Bench 4.0, CritPt, Omniscience, GDP.pdf, price, speed, latency, verbosity), ApX's specification page, OpenRouter's listing, and the Ling-3.0-flash FP8 PR README. Explicitly flagged that InclusionAI renders its own benchmark tables as **images**, so its named agentic strengths have no machine-readable numeric values, and flagged the unresolved AA Intelligence Index spread (20 / 25 / 37.8). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ling_3.0_Flash_Tiny.md`, using the same headings. Re-scoring Ling-3.0-flash is warranted once InclusionAI publishes machine-readable numbers for Tau3-banking-AA, MCP-Atlas, SkillsBench and GDPval v2-AA, and once the Terminal-Bench 4.0 = 0% result is explained.