# MiMo V2.5 Free — findings by DeepSeek 4.1 Flash

- Source: OpenCode Zen / MiMo V2.5 Free (`opencode/mimo-v2-5-free`, Xiaomi)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free (Zen free tier of Xiaomi's MiMo-V2.5; the same Zen ID covers the "Xiaomi MiMo-V2.5 Free" alias)
- **Short description:** OpenCode Zen's free tier for Xiaomi's MiMo-V2.5 — a native omnimodal model that delivers Pro-level agentic performance at roughly half the inference cost of MiMo-V2.5-Pro while improving image and video perception over MiMo-V2-Omni. The free Zen ID is the cheapest way to reach an omnimodal model found in this scan.
- **Provider / access:** OpenCode Zen (`opencode/mimo-v2-5-free`), no credit card required; the tracked free tier is a single provider. The paid model is served by six OpenRouter providers (GMICloud, DeepInfra, Xiaomi, StreamLake, NovitaAI, Venice) with automatic failover.
- **Release / knowledge:** Zen record dated 2026-04-24; the MiMo-V2.5 base model was released 2026-04-22. Knowledge cutoff listed as 2024-12 by one tracker.
- **IDs:** `opencode/mimo-v2-5-free` (Zen, free); paid routes under `xiaomi/mimo-v2.5`.
- **Context window:** **200,000 tokens with a 32,000-token max output** on the Zen free tier (tracker-verified). The paid model supports 1.05M–1.1M tokens, so the free tier is roughly five times more restrictive on context and far more so on output.
- **Modalities:** text, image, audio and video input with text output (omnimodal); tool calling ✓, reasoning ✓, attachments ✓, temperature control ✓, open weights ✓; structured output / JSON-schema mode **not reported** for the free ID.
- **Pricing (as of 2026-09-18):** **Free** through Zen. Paid equivalents: $0.119 / 1M in and $0.238 / 1M out on OpenRouter (a 15% discount off the $0.14/$0.28 list), with cache reads at $0.00255 / 1M. Zen's privacy page warns that MiMo-V2.5 Free free-period prompts **may be used to improve the model** — the price of the $0 tier.
- **Architecture:** open weights (Xiaomi); no public weights license was verified at research time, and one tracker flags the license as conditional for commercial use. The Zen record is tagged as the vendor's own model family (`mimo-v2.5-free`), unlike the NVIDIA Zen entries which are derivatives.

### Raw benchmarks found

> Benchmarks are for the Xiaomi MiMo-V2.5 base weights, which the Zen free tier
> serves; the free tier's reduced context/output caps are not reflected in these
> numbers.

Agent / tool use:

- Tau3-Banking / Tau2-Bench (τ²-Bench Telecom): **90.6%** (Artificial Analysis via OpenRouter)
- Terminal-Bench Hard: **41.7%** (Artificial Analysis)
- GDPval-AA: **29.0%** (Artificial Analysis)
- Agentic Index: 17th percentile of tracked models — the weakest category signal (Artificial Analysis)
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **84.9%** (Artificial Analysis; a model-card-derived figure of 83.7% also circulates)
- HLE: **27.2%** (Artificial Analysis)
- MMLU-Pro: **84.9%** (derived from Xiaomi's MiMo-V2 model card); AIME 2025: **94.1%**
- IFBench: **67.1%**; AA-LCR (long-context reasoning): **73.0%**; CritPt: **3.7%**
- Artificial Analysis Intelligence Index: **22.3**; AA-Omniscience accuracy **16.8%**, non-hallucination rate **68.1%**
- LCR / MLCR: **no verified public score found**

Coding:

- Artificial Analysis Coding Index: **56.8** (vs an Agentic Index of 17.4 — coding is the stronger half)
- SciCode: **43.9%** (Artificial Analysis)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / Vibe Code Bench / DeepSWE: **no verified public score found**
- Design Arena code category Elo: **1275** (human-rated design/code arena)

Long context:

- AA-LCR 73.0% is the one published long-context reasoning figure; no MRCR/RULER recall-at-depth value exists, and the Zen free tier caps context at 200K regardless of the base model's 1.05M.

### Normalized scores (1–100)

- **Tool use: 72/100.** τ²-Bench Telecom 90.6% shows reliable tool-agent-user behaviour and GDPval-AA 29.0% is respectable, but a 17th-percentile agentic index, Terminal-Bench Hard 41.7% and the free tier's 32K output cap all limit real agent runs.
- **Reasoning: 72/100.** GPQA Diamond 84.9%, MMLU-Pro 84.9% and AIME 94.1% are solid; HLE 27.2% and CritPt 3.7% plus a 22.3 AA Intelligence Index show the frontier ceiling.
- **Context window: 70/100.** The free tier's 200K/32K caps matter more than the base model's 1.05M window: 200K is mid-tier by 2026 standards and the 32K output ceiling constrains agent transcripts.
- **Multimodal: 95/100.** Native text, image, audio and video input — the broadest input matrix found in this scan — at zero cost; text-only output and no vision benchmark scored separately.
- **Coding: 68/100.** A 56.8 Coding Index, SciCode 43.9% and a 1275 code-arena Elo are mid-pack; no SWE-bench-class result exists.
- **Cost efficiency: 100/100.** $0 on Zen with omnimodal input; the caveat is that free-period prompts may be used to improve the model, and commercial-use terms are flagged as unclear.
- **Overall Score: 75/100.** (72 + 72 + 70 + 95 + 68 + 100) / 6 = 79.5 → **80**. Best fit: free multimodal ingestion, RAG over images/video/audio and moderate agent work, accepting a 200K/32K ceiling and free-tier data usage.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Artificial Analysis figures via OpenRouter and Model Beat, modelcompare.dev Zen record, model card derivations via LLM Reference, OpenCode Zen privacy page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.