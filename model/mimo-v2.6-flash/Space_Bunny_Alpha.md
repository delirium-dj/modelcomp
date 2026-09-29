# MiMo V2.6 Flash — findings by Space Bunny Alpha

- Source: Xiaomi (`mimo-v2.6-flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash (open weights, MIT; no OpenCode Zen Free ID for this slug)
- **Short description:** Xiaomi's cost-optimised half of the September 2026 MiMo-V2.6 release — a 309B-total / 15B-active sparse MoE that keeps the flagship Pro's 1M context and full text/image/video/audio input at roughly one third of the token price. Xiaomi positions it as the balance point for high-frequency calls and large-scale professional workflows, and it is the variant a small team can realistically self-host. Not an alias, but it shares the V2.6 codebase and the same Xiaomi-run benchmark table as MiMo-V2.6-Pro, which it trails by only a few points on most agent rows.
- **Provider / access:** Xiaomi MiMo API platform and Xiaomi AI Studio (`mimo-v2.6-flash`); MiMo Code, MiMo Desktop; also served via OpenRouter, DeepInfra, and other aggregators at the same list price. Weights on Hugging Face as `XiaomiMiMo/MiMo-V2.6-Flash-RL` (MIT, ungated, uploaded 2026-09-21, 172.9 GB of FP8 weights across 65 shards).
- **Release / knowledge:** released 2026-09-21 (Xiaomi's model page update time reads 2026-09-22); knowledge cutoff not disclosed.
- **IDs:** `mimo-v2.6-flash` on the Xiaomi platform. No Free ID exists on OpenCode Zen for this slug — the Zen free tier lives in the separate `mimo-v2.6-free` entry.
- **Context window:** 1,048,576 tokens (1M) with a 131,072-token maximum output per request, listed identically on the Xiaomi model page, RouterPlex's public catalog (checked 2026-09-22), DeepInfra, and ModelIndex; HuggingFace card states 1M context / 128K max output.
- **Modalities:** text, image, video, and audio in; text out. Full-modality understanding, deep thinking/reasoning, tool calling, streaming, web search, structured output, and prompt caching all supported per the Xiaomi model page. Xiaomi documents 48 layers (39 sliding-window, 9 full attention), hidden size 4096, 256 routed experts with 8 active and no shared experts, plus a 681M vision transformer, a 308M audio tokenizer, and a 127M audio patch encoder.
- **Pricing (as of 2026-09-29):** $0.14 per 1M uncached input, $0.28 per 1M output, $0.0028 per 1M cached input (¥1 / ¥2 / ¥0.02 CNY per 1M). One flat rate — no length threshold, time-of-day discount, or promotion — and Xiaomi states V2.6 pricing matches the V2.5 series. Paid, no free hosted tier; prepaid token plans and monthly/annual subscriptions are available. Rate limits 100 RPM / 10M TPM on the first-party endpoint.
- **Architecture:** sparse Mixture-of-Experts, 309 billion total parameters with 15 billion activated per token, MIT license. Hybrid attention (sliding-window plus full attention) and a multi-token-prediction decoder, per Xiaomi's own description. Xiaomi reports the Flash RL run cost roughly $854K over under six days.

### Raw benchmarks found

Agent / tool use:

- AutomationBench v1.0.0.6: **52.3%** (Xiaomi model card; Pro 53.1%, Claude Opus 5 50.3%, GPT-5.6 Sol 45.8%, Fable 5.1 46.2%, DeepSeek V4.1 Flash 54.8%)
- Toolathlon-Verified: **73.6%** (Xiaomi model card; Pro 76.9%, Opus 5 80.6%, Fable 5.1 77.9%, Kimi K3 76.5%)
- OSWorld-Verified: **80.8%** (Xiaomi model card; Pro 82.0%, Opus 5 83.4%, Kimi K3 84.8%)
- Terminal Bench 4.0: **28.8%** (Xiaomi model card; Pro 34.9%, Opus 5 49.0%, GPT-5.6 Sol 39.9%, Fable 5.1 42.4%, Kimi K3 12.6%, DeepSeek V4.1 Flash 26.8%)
- Terminal Bench 2.1: **87.6%** (Xiaomi model card; Pro 89.9%, Opus 5 89.1%, GPT-5.6 Sol 88.8%, DeepSeek V4.1 Flash 90.6%)
- JobBench: **61.2%** (Xiaomi model card; Pro 62.0%, Opus 5 65.7%, Kimi K3 54.3%, GPT-5.6 Sol 45.4%)
- Agents' Last Exam: **27.6%** (Xiaomi model card; Pro 31.6%, Opus 5 31.6%, Fable 5.1 25.7%)
- CyberGym: **95.1%** (Xiaomi model card — the one row where Flash beats Pro's 94.0; should not be read as Flash being the stronger security model, since Pro leads ExploitGym 17.8 vs 6.0, ExploitBench 47.9 vs 25.3, and SEC Bench Pro 66.3 vs 47.5)
- ExploitGym: **6.0%**; ExploitBench: **25.3%**; SEC Bench Pro: **47.5%** (Xiaomi model card)
- GDPval-AA 2.1: **no verified public score found** (Xiaomi's table leaves the cell blank for Flash)
- Tau3-Banking / Tau2-Bench / Claw-Eval / MCP-Atlas: **no verified public score found**
- Independent-run status: as of 2026-09-22 Artificial Analysis had no model page for Flash (404), and none of tbench.ai, deepswe.datacurve.ai, toolathlon.xyz, snorkel.ai, livebench.ai, arcprize.org or matharena.ai listed it. Every figure above is Xiaomi's own model-card number from a Xiaomi harness and grader.
- Throughput proxy (ModelIndex, first-party endpoint): ~113 output tokens/s, 1.2s TTFT, 99.6% uptime — not a benchmark, but the practical reason this tier exists.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **no verified public score found** (no AA model page for Flash as of 2026-09-22; the 46 in Xiaomi's launch chart belongs to Pro, not Flash)
- Agents' Last Exam: **27.6%** (Xiaomi model card; the only hard-reasoning row published for Flash)
- One secondary index — a "Vals Index" figure of 59.58% for Flash versus 59.47% for Pro — is quoted by at least one aggregator, but no primary methodology or harness is documented and it conflicts with the absence of any independent composite for the model. Treated as **provisional and unverified**; not used as evidence for the Reasoning score.
- GPQA Diamond / HLE / CritPt / LCR / MLCR / Omniscience / Hallucination rate: **no verified public score found**

Coding:

- DeepSWE v1.1: **67.9%** on the model card; the announcement's training write-up reports **65.7%** as the same RL run's held-out endpoint, up from 48.8 pre-training. Card figure used, conflict flagged. (Pro 71.9% on the card, 72.6% in the post; Opus 5 74.0%, GPT-5.6 Sol 73.0%, Fable 5.1 70.0%, Kimi K3 69.0%)
- MiMo Code Bench (in-house): **61.2%** (Xiaomi model card; Pro 63.2%, DeepSeek V4.1 Flash 60.2%, Kimi K3 60.1%, Opus 5 68.6%)
- ProgramBench: **26.0%** (Xiaomi model card; Opus 5 37.0%, Fable 5.1 33.0%, Pro 26.5%, Kimi K3 24.5%, GPT-5.6 Sol 25.0%)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks retrieval measurement published for MiMo-V2.6-Flash by Xiaomi or any third party. The 1,048,576-token window is a capacity spec corroborated across four provider catalogs, not a measured retrieval result.

### Normalized scores (1–100)

- **Tool use: 70/100.** A genuinely capable automation tier for the money — AutomationBench 52.3% edges past Claude Opus 5, OSWorld-Verified 80.8% and Terminal Bench 2.1 87.6% are within a few points of Pro, and CyberGym 95.1% even tops Pro. Capped by Terminal Bench 4.0 at 28.8%, ExploitGym 6.0%, ExploitBench 25.3% and SEC Bench Pro 47.5%, a missing GDPval-AA cell, and the fact that none of these has an independent runner.
- **Reasoning: 58/100.** This is the dimension with no evidence behind it: no Artificial Analysis page, no GPQA, HLE, or hallucination-rate row, and the single hard-reasoning datapoint published — Agents' Last Exam 27.6% — is 4 points below both Pro and Opus 5. The one third-party index quoted for the model is undocumented and treated as provisional, so the score is anchored on the Xiaomi row and a discount for total absence of independent composite verification.
- **Context window: 88/100.** 1,048,576 tokens in / 131,072 out, matching Pro exactly and corroborated across Xiaomi's model page, RouterPlex, DeepInfra, and ModelIndex, with 128K max output on the HuggingFace card. Held below the ceiling because no long-context retrieval benchmark has been run.
- **Multimodal: 78/100.** Text, image, video, and audio input with text output at full parity with Pro, backed by a documented vision transformer and audio tokenizer stack, plus a real visual-agent row in MiMo Visual Coding at 71.5%. Capped by text-only output and by that benchmark being Xiaomi's in-house one.
- **Coding: 75/100.** DeepSWE v1.1 at 67.9% is within 4 points of Opus 5 and 6 above Kimi K3, and MiMo Code Bench 61.2% is competitive with DeepSeek V4.1 Flash — a big step from the 6.7-point ProgramBench where every model including GPT-5.6 Sol scores under 27. Capped by ProgramBench 26.0% and Terminal Bench 4.0 28.8%, and by the 65.7-vs-67.9 conflict on its own headline code number.
- **Cost efficiency: 95/100.** $0.14 / $0.28 with cached input at $0.0028 is one of the cheapest rate cards anywhere for a model accepting all four input modalities, at 15B active parameters small enough to self-host on real hardware, under an MIT licence with no licence fee. The small deduction is that hosted access is paid-only, self-hosting still needs capable GPUs at 172.9 GB of FP8 weights, and there is no independent cost-per-task measurement to confirm the sticker.
- **Overall Score: 73.8/100.** Five quality dims mean out at 73.8; the best fit is high-volume, cost-sensitive agent loops — code review, document triage, multi-agent collaboration over a 1M window with mixed modalities — where the absence of any independent benchmark run is the real caveat, not the capability.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: public internet research (Xiaomi MiMo-V2.6 announcement, model card, official `mimo.mi.com` model page, HuggingFace repo notes, RouterPlex catalog, The Model Gap, TensorFeed, OrcaRouter, ModelIndex); scores are normalized 1–100 interpretations, not official vendor scores. Every benchmark number for this model is vendor-reported — no independent runner has evaluated MiMo-V2.6-Flash — which is stated explicitly wherever it caps a score.
- Future sources: add a new file next to this one, e.g. `Space_Bunny_Alpha_v2.md`, using the same headings.
