# MiMo V2.6 Free — findings by DeepSeek 4.1 Flash

- Source: Xiaomi MiMo (`mimo-v2.6-flash-free` on OpenCode Zen) — the free-promotion route of MiMo-V2.6-Flash
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free (Xiaomi MiMo-V2.6-Flash, free tier; MIT open weights — the "Free" label describes the access route, not a different checkpoint).
- **Short description:** Xiaomi's low-cost, high-throughput omnimodal agent model, open-sourced 2026-09-22 as the cheaper half of the MiMo-V2.6 pair (Pro is the 1.02T flagship). Best use case: routine, deterministic automation and coding support at roughly one-third of Pro's token price. Variant/alias notes: this entry maps to the Zen free route `mimo-v2.6-flash-free` (the meta id in this folder is spelled `opencode/mimo-v2-6-free`, which does not exist in the live Zen/model feeds — the live free id is dotted and includes `flash`); `MiMo-V2.6-Flash-RL` is the same family's efficiency-balanced checkpoint, not a separate product.
- **Provider / access:** OpenCode Zen, model id `mimo-v2.6-flash-free`, Chat Completions (`openai-completions` compat, base `https://opencode.ai/zen/v1`). The same checkpoint is also served paid as `xiaomi/mimo-v2.6-flash` (OpenRouter, Xiaomi, and 13 gateways) and as `mimo-v2.6-flash` on the Xiaomi MiMo Open Platform; other free-ish routes are the Xiaomi Token Plan (China/Europe/Singapore) and a third-party free route on AIHubMix (`xiaomi-mimo-v2.6-flash-free`).
- **Release / knowledge:** Series released and open-sourced 2026-09-22 (announced 2026-09-21 UTC). Knowledge cutoff not published.
- **IDs:** `opencode/mimo-v2.6-flash-free` (Zen free), `xiaomi/mimo-v2.6-flash` (OpenRouter), `mimo-v2.6-flash` (Xiaomi Open Platform). API model names are all-lowercase.
- **Context window:** native checkpoint 1,048,576 in / 131,072 out; the evaluated free Zen route is capped at **200,000 in / 32,000 out** (models.dev Zen row + Pi models feed config: `contextWindow: 200000, maxTokens: 32000`). Verified from the models.dev provider table and the Pi model config, not from Xiaomi's own docs.
- **Modalities:** natively omnimodal input — text, image, video, audio (HF card tags `multimodal`, `vision-language`, `audio`, `video-understanding`; Artificial Analysis lists text/image/speech/video input for the family; AIHubMix's free route declares text, image, video, audio), text-only output. Reasoning (deep thinking on by default via `thinking.type`), tool calling, JSON mode / structured outputs, prompt caching, web-search plugin. The Zen free gateway advertises text + image input only.
- **Pricing (as of 2026-09-23):** **Free tier $0.00 in / $0.00 out / $0.00 cache read** on the OpenCode Zen one-week promotion announced 2026-09-21; privacy caveat — Zen states collected data on this endpoint may be used to improve the model. Paid list price $0.14 / $0.28 per 1M (cache read $0.0028, ~98% cache discount); batch Flash is half rate. Family reference: Pro $0.435 / $0.87 (cache $0.004), Pro UltraSpeed $4.35 / $8.70.
- **Architecture:** sparse MoE, 309B total / 15B active parameters per token, hybrid attention (48 layers: 39 sliding-window + 9 global, SWA window 128), 256 routed experts (8 activated), MiMo ViT vision encoder (681M) plus audio encoders, and a 5-layer SWA MTP speculative drafter. MIT license, weights on Hugging Face; FP8 weights ≈172.9 GB across 65 shards. Training: ~30 RL steps / ~750k trajectories in under 6 days, ≈$850k compute.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (Xiaomi technical report via BenchLM and LLM Stats; Pro 89.9%); Terminal-Bench 4.0 **28.80%** (same report — new-harness drop)
- OSWorld-Verified: **80.8%** (BenchLM shared row; Pro 82%)
- JobBench: **61.2%** (BenchLM shared row; Pro 62.0%)
- Automation Bench v1.0.6: **52.3** (Tabbit review; Pro 53.1 — "98.5% of Pro at one-third the price")
- Agents' Last Exam: **27.6** (Tabbit review; Pro 31.6 — a 14.5% drop, the documented long-horizon recovery cliff)
- Toolathlon-Verified: **73.6%** (LLM Stats; Pro 76.9%)
- CyberGym: **95.1%** (Xiaomi vendor table; BenchLM row; Pro 94.0% — the one agent row Flash wins)
- MiMo Cyber Bench: **77.2%** (Xiaomi / HF Flash-RL card; Flash-RL checkpoint 80.2%)
- ExploitGym: **6.0%** (HF Flash-RL card / BenchLM; Pro 17.8%, Claude Opus 5 22.1%, GPT-5.6 Sol 30.3%, Fable 5 28.4%)
- ExploitBench: **25.3%** (HF Flash-RL card; Flash-RL checkpoint 47.9%)
- SEC Bench Pro: **47.5%** (HF Flash-RL card; Pro 66.3%)
- MiMo Visual Coding: **71.5%** (Xiaomi vendor table; Flash-RL 72.3%, Pro 73.4%)
- Tau3-Banking / Tau2-Bench: **no verified public score found** (an OpenRouter provider-tagged "TAU-Bench 76.6%" row exists but names no harness — provisional only, not scored)
- GDPval-AA: **55.5%** normalized (Artificial Analysis, via BenchLM — first verified GDPval row for the checkpoint)
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** (Toolathlon-Verified 73.6% is the closest published proxy)

Reasoning / knowledge:

- GPQA Diamond: **75.0%** (OpenRouter provider-tagged benchmark row, DeepInfra)
- HLE: **35.1%** (Artificial Analysis, via BenchLM — previously unpublished)
- LCR / MLCR: **AA-LCR 74.3%** (Artificial Analysis, via BenchLM)
- CritPt: **12.0%** (Artificial Analysis, via BenchLM)
- Artificial Analysis Intelligence Index: **37.9** (AA, via BenchLM — a Flash score now exists; family context MiMo-V2.6-Pro 46.3, #1/114)
- Omniscience: AA-Omniscience index **-12.7%**, accuracy **27.0%**, hallucination rate **54.4%** (AA, via BenchLM)
- LLM Stats Score: **45.7 (#31 of 511 tracked)**, reasoning index 43.1 (#45), agents 33.0 (#28)
- Not attributable to Flash: the MiMo-V2.6-Distill-Qwen-9B RL demo (SWE-bench Verified 61.1 → 66.2, TB2.1 37.1 → 52.8) is a different, smaller model.

Coding:

- DeepSWE v1.1: **67.9%** (BenchLM shared row; Pro 71.9%); Xiaomi's own RL narrative reports 48.8 → **65.7** for the pre-final checkpoint
- Terminal-Bench 2.1: **87.6%** (coding/agent crossover, vendor table)
- ProgramBench: **26.0%** (BenchLM shared row; Pro 26.5%)
- SWE-bench Verified / SWE-Pro: **no verified public score found** for Flash
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **51.3%** AA-SciCode (Artificial Analysis, via BenchLM — below the 55% frontier reference)
- Vibe Code Bench: **no verified public score found**
- LLM Stats coding index: **36.3 (#22)**; CyberGym 95.1% is the strongest verified coding-adjacent signal

Long context:

- no published retrieval score (no MRCR / RULER / GraphWalks numbers for Flash); the 1M-token window and hybrid SWA attention are documented spec, not measured retrieval.

Multimodal:

- AA-MMMU-Pro **73.1%** (Artificial Analysis, via BenchLM).

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 2.1 87.6% and OSWorld-Verified 80.8% sit inside the frontier 85–88% reference band, with Toolathlon-Verified 73.6%, CyberGym 95.1% and a new GDPval-AA 55.5% showing real harness breadth; capped because the strong rows are still vendor-run in the main, Terminal-Bench 4.0 collapses to 28.80%, AutomationBench is only 52.3 in absolute terms, and ExploitGym 6.0% / Agents' Last Exam 27.6 show autonomy failing when the environment misbehaves.
- **Reasoning: 78/100.** GPQA Diamond 75.0% lands in the mid band (60–80%), but the newly published Artificial Analysis scorecard puts HLE at 35.1% (near the 40%+ frontier ref), AA-LCR at 74.3% and the AA Intelligence Index at 37.9 (above the 20–35 mid band); held well below frontier because GPQA is still only 75%, the Index is far from 60+, and CritPt is 12.0%.
- **Context window: 70/100.** The free route actually evaluated serves 200,000 in / 32,000 out (200K tier = 70), even though the checkpoint natively supports 1,048,576 / 131,072; no retrieval evidence at 512K+ exists, and the 32K free-tier output cap is a caveat rather than a separate score.
- **Multimodal: 90/100.** Native audio + video + image + text input with text-only output places it in the top band of the methodology (audio in = 90–100), now backed by AA-MMMU-Pro 73.1%; held to 90 because output is text-only and the evaluated Zen free gateway advertises text + image input only.
- **Coding: 79/100.** DeepSWE v1.1 67.9% and Terminal-Bench 2.1 87.6% are strong (TB2.1 above the 85% frontier ref, DeepSWE below the 74% ref) and CyberGym 95.1% is class-leading; AA-SciCode 51.3% is now published but sits under the 55% frontier ref, and ProgramBench 26.0%, missing SWE-bench Verified / LiveCodeBench rows and a 36.3 coding index keep it a step behind the top open coders.
- **Cost efficiency: 100/100.** $0 in / $0 out / $0 cache read on the Zen free promotion (one week, data may be used for training); the paid fallback $0.14 / $0.28 with $0.0028 cache reads is the cheapest useful rate in this class (~$0.04/M effective input in cache-heavy agent loops).
- **Overall Score: 81/100.** Mean of the five quality dimensions ((87 + 78 + 70 + 90 + 79) / 5 = 80.8 → **81**, Cost excluded): pick it as a high-volume, supervised automation/coding-support workhorse where retries are cheap, and escalate to MiMo-V2.6-Pro or a frontier model for long-horizon unattended agent runs.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-06
- Method: public internet research (Xiaomi MiMo technical report and Hugging Face model card, BenchLM `mimo-v2-6-flash` page carrying the Artificial Analysis scorecard, Artificial Analysis, models.dev / Pi provider feeds, OpenRouter, LLM Stats aggregators, Tabbit review coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.