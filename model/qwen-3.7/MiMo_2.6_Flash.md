# Qwen 3.7 — findings by MiMo 2.6 Flash

- Source: Alibaba/Qwen `qwen-3.7` (generation umbrella — see Identity)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 (`qwen-3.7`) — **identity caveat:** the bare string "Qwen3.7" was never released as a standalone model. The 3.7 generation consists of Qwen3.7-Max (text flagship, launch post 2026-05-16, summit announcement 2026-05-20), Qwen3.7-Plus (multimodal agent, GA 2026-06-01) and Qwen3.7-Flash (2026-07-27, separate queue slug). Scores here are anchored on **Qwen3.7-Max**, the measurable generation flagship; multimodal notes cover the generation (Plus/Flash).
- **Short description:** Alibaba's closed, agent-first flagship generation — built for long multi-step coding/office-agent tasks (hundreds-to-thousands of steps), cross-harness consistency (Claude Code / OpenClaw / Qwen Code), and extended thinking on by default.
- **Provider / access:** Alibaba Cloud Model Studio (QwenCloud, API `qwen3.7-max`), OpenRouter `qwen/qwen3.7-max`, third-party AI gateways (Yotta). Anthropic-protocol-compatible endpoint — usable as a drop-in for Anthropic-compatible harnesses (FelloAI).
- **Release / knowledge:** launch post 2026-05-16 (BenchLM official snapshot), quiet LM Arena appearance 2026-05-14, Cloud Summit (Hangzhou) announcement 2026-05-20 — **conflict:** Yotta Labs FAQ says "announced May 19"; all four dates reported. Knowledge cutoff not published.
- **IDs:** `qwen3.7-max` (QwenCloud), `qwen/qwen3.7-max` (OpenRouter). Plus is `qwen3.7-plus` / `qwen/qwen3.7-plus`; Flash is `qwen3.7-flash` (queued separately).
- **Context window:** 1,000,000 tokens (Qwen launch post via BenchLM, Vals AI, OpenRouter — all agree); 65,536 max output (Vals run config, FelloAI); thinking enabled by default, 256K thinking budget documented for Flash (QwenCloud via BenchLM).
- **Modalities (flagship Max):** text in / text out; explicit reasoning mode; function calling, structured output, prompt caching (OpenRouter, BenchLM). **Generation multimodal:** Qwen3.7-Plus adds image + video input, screen reading and GUI-agent element grounding (OpenRouter model card, mysummit.school); Qwen3.7-Flash also documents text/image/video input (QwenCloud via BenchLM).
- **Pricing (as of 2026-10-26):** Max first-party $2.50 in / $7.50 out per 1M, cached input $0.25 (90% discount) (FelloAI, launch); OpenRouter reseller route $1.475 / $4.425; Artificial Analysis' blended cache-adjusted ratio lists Max at $1.60/M vs Plus $0.30/M (7:2:1 cache:input:output). Plus first-party $0.40 / $1.60 (VentureBeat via Wikipedia). Paid only; no free tier found.
- **Architecture:** proprietary — weights private (Vals AI); **no open weights were ever released for the entire 3.7 generation** (Wikipedia, taskade history, VentureBeat 2026-06-02, mysummit.school; Reddit thread r/Qwen_AI 2026-06-29 still asking "where are our new open weight models?"). A lineage break: Qwen3.5 (Feb), Qwen3.6 (Apr), Qwen3.8-2.4T-A95B (Aug 13) are open-weight; 3.7 is not. No parameter count disclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom (AA): **94.7%**
- Terminal-Bench 2.0 (Vals AI): **59.2%**; Terminal-Bench 2.1 (Vals AI): **61.0%** — **conflict:** DataCamp's launch-comparison table lists Qwen 3.7 Max TB-2.1 at **74.5** (vs Qwen3.8-Max 86.6, Opus 4.8 84.6); different harness/effort, unreconciled, both reported.
- Vals TaxEval v2: **75.3%**; Tax Agent Bench 15.8%; Legal Research Bench 25.5% (OpenRouter/Vals rows)
- Artificial Analysis Agentic Index (current scale): **22.5** (Plus 17.5)
- BenchLM agentic category: **#114** — the model's weakest BenchLM position
- GDPval / Tau3-Bench / Toolathon / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (AA): **92.3%**; HLE (AA): **40.5%**; MMLU-Pro (Vals): **89.3%**; IFBench (AA): 80.5% (BenchLM 79.1); AA-LCR: 79.0%
- Artificial Analysis Intelligence Index: **56.6 at launch** (top-10 globally, highest placement ever for a Chinese model; between Gemini 3.5 Flash and Claude Opus 4.7; GPT-5.5 led at 60.2 — FelloAI) — **conflict:** current AA/OpenRouter pages show **29.5** (Plus 25.2) on a rescaled index; both reported.
- BenchLM overall: **#16 of 224** (71.36/100 public; #13/104 source-verified); **Multilingual #1**; MMLU-ProX 87%; IMO/IOI-tier math not published for Max (HMMT 97.1% belongs to Qwen3.7-Max per BenchLM — verified row)
- Vals Index: **57.29%** (#5) per Vals' own model page — **conflict:** OpenRouter's Vals-sourced row lists 44.8% (different Vals subset/version); both reported.
- LiveCodeBench (Vals): **87.1%**; IOI v1 (Vals): 46.8%; ProofBench v1: 26.0%

Coding:

- SWE-bench Verified (Vals): **68.8%** (Vals subset 66.7%)
- SWE-Bench Pro (launch): **60.6%** — beat GPT-5.5's 58.6% at launch, highest proprietary score at the time (FelloAI, ofox)
- AA Coding Index (current): **66.0** (Plus 55.9); Vibe Code Bench v1.1 (Vals): 47.7%; VCB 1-100: 52.9%
- PaperBench 64.8, FrontierSWE 40.7 (DataCamp launch table); BenchLM coding category: **#44 of 141** (54.7/100)

Long context:

- 1M window declared with thinking enabled; Alibaba positions Max for agent tasks running hundreds-to-thousands of steps (taskade, Yotta). **No long-context retrieval figure (MRCR / RULER / GraphWalks) found.** Plus supports verified multi-hour unvalidated runs up to a claimed 35-hour autonomous ceiling (ofox — validated only to 4h unattended).

Performance / speed:

- AA measurement: 199.2 tok/s output, TTFT 2.18s, end-to-end 16.78s (first-party API) — **conflict:** OpenRouter current p50: 71.0 tok/s, latency 1.14s; both reported (different routes/snapshots).

### Normalized scores (1–100)

- **Tool use: 84/100.** τ²-Bench Telecom 94.7, TB-2.0/2.1 at 59.2–74.5 (conflict) and TaxEval 75.3 sit in the strong band, but BenchLM's agentic rank (#114, its worst category) and AA Agentic Index 22.5 cap it below frontier-agentic leaders; no GDPval/Tau3 evidence.
- **Reasoning: 91/100.** GPQA 92.3, HLE 40.5, MMLU-Pro 89.3, AA-LCR 79, launch-era top-10 global AA placement (56.6-era) and BenchLM #16/224 overall with Multilingual #1; held below 95 by the rescaled-index ambiguity (29.5 today) and ProofBench 26.0.
- **Context window: 95/100.** 1,000,000 tokens clears the ≥1M tier (95–100); held at 95 because no ≥512K retrieval measurement (MRCR/RULER) exists to justify 100.
- **Multimodal: 62/100.** The generation ships real multimodal-agent capability — Plus/Flash accept image + video input with GUI grounding/screen reading (OpenRouter, QwenCloud docs) — but the measurable flagship Max is text-only input and no MMMU/MMMU-Pro figure was found for it; mid-band with a documented flagship caveat.
- **Coding: 91/100.** SWE-bench Verified 68.8, SWE-Bench Pro 60.6 (launch record among proprietary models, > GPT-5.5), LiveCodeBench 87.1, AA Coding Index 66.0; capped by BenchLM coding rank #44/141, Vibe Code Bench v1.1 47.7 and IOI 46.8 — a tier below the open Qwen3.8-Max successor (SWE-Pro 67.7, TB-2.1 86.6).
- **Cost efficiency: 62/100.** $2.50/$7.50 first-party undercuts the Opus/GPT-5.5 rate cards (methodology maps $3/$15 ≈ 60), cached input at $0.25 is a 90% discount, and the OpenRouter route drops to $1.475/$4.425; the generation's Plus sibling at $0.40/$1.60 covers volume workloads, but the flagship's own per-token price stays mid-band.
- **Overall Score: 85/100.** (84 + 91 + 95 + 62 + 91) / 5 = 84.6 → 85 — best fit: high-stakes agentic coding and long-horizon reasoning through Alibaba/OpenRouter/Anthropic-protocol harnesses at flagship quality with mid-frontier pricing; not the pick for multimodal pipelines (use Qwen3.7-Plus or Qwen3.8-Max) or self-hosting (no weights ever shipped for 3.7).

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-10-26
- Method: public internet research — official Qwen sources first (launch post snapshot via BenchLM, QwenCloud docs, qwen.ai blog), then independent benchmark/review sources (Artificial Analysis, Vals AI, BenchLM, OpenRouter, FelloAI, DataCamp, ofox, Yotta Labs, taskade, Wikipedia/VentureBeat, Reddit); conflicting harness numbers are reported side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
