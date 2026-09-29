# MiMo V2.6 Flash — findings by Space Bunny Alpha

- Source: Xiaomi (`mimo-v2.6-flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked on 2026-09-29. **MATERIAL change.** An Artificial Analysis model page **now exists** (it 404'd on 2026-09-22) and carries an independent **Index v4.3.2 score of 38**, class rank **#8/116** among open-weight models of similar size. That is the first independent composite for this model and it retires the "no verified AA score" caveat, lifting **Reasoning 58 → 72**, **Tool use 70 → 72**, and **Context window 88 → 90**, moving Overall **73.8 → 77.4**. The DeepSWE 65.7-vs-67.9 vendor conflict is **still unresolved** and stays flagged.

## Model card

- **Name:** MiMo-V2.6-Flash (open weights, MIT; no OpenCode Zen Free ID for this slug)
- **Short description:** Xiaomi's cost-optimised half of the September 2026 MiMo-V2.6 release — a 309B-total / 15B-active sparse MoE that keeps the flagship Pro's 1M context and vendor-claimed full text/image/video/audio input at roughly one third of the token price. Xiaomi positions it as the balance point for high-frequency calls and large-scale professional workflows, and it is the variant a small team can realistically self-host. It now carries an independent Artificial Analysis composite of 38 (v4.3.2), making it the strongest-scoring cheap open-weight model at this size tier.
- **Provider / access:** Xiaomi MiMo API platform and Xiaomi AI Studio (`mimo-v2.6-flash`); MiMo Code, MiMo Desktop; also served via OpenRouter, DeepInfra, and other aggregators at the same list price. Artificial Analysis currently benchmarks exactly **1 provider (Xiaomi's own API)**. Weights on Hugging Face as `XiaomiMiMo/MiMo-V2.6-Flash-RL` (MIT, ungated, uploaded 2026-09-21, 172.9 GB of FP8 weights across 65 shards).
- **Release / knowledge:** released 2026-09-21 (Xiaomi's model page update time reads 2026-09-22); knowledge cutoff not disclosed by Xiaomi and not listed by Artificial Analysis.
- **IDs:** `mimo-v2.6-flash` on the Xiaomi platform. No Free ID exists on OpenCode Zen for this slug — the Zen free tier lives in the separate `mimo-v2.6-free` entry.
- **Context window:** 1,048,576 tokens (1M) with a 131,072-token maximum output per request, listed identically on the Xiaomi model page, RouterPlex's public catalog, DeepInfra, and ModelIndex; HuggingFace card states 1M context / 128K max output. Artificial Analysis independently lists 1M.
- **Modalities:** **vendor claim** — text, image, video, and audio in; text out, with full-modality understanding, deep thinking/reasoning, tool calling, streaming, web search, structured output, and prompt caching per the Xiaomi model page. **Conflict, new 2026-09-29:** Artificial Analysis lists input modality as "Supports: text and image" only, not video or audio. Xiaomi documents 48 layers (39 sliding-window, 9 full attention), hidden size 4096, 256 routed experts with 8 active and no shared experts, plus a 681M vision transformer, a 308M audio tokenizer, and a 127M audio patch encoder.
- **Pricing (verified 2026-09-29, unchanged):** $0.14 per 1M uncached input, $0.28 per 1M output, $0.0028 per 1M cached input (¥1 / ¥2 / ¥0.02 CNY per 1M). One flat rate — no length threshold, time-of-day discount, or promotion — and Xiaomi states V2.6 pricing matches the V2.5 series. Paid, no free hosted tier; prepaid token plans and monthly/annual subscriptions are available. Rate limits 100 RPM / 10M TPM on the first-party endpoint. Artificial Analysis adds a **98% cache discount**, **$0.06 blended per 1M**, and **$0.06 cost per Intelligence Index task** (rank #6/116 in class) — so the independent cost measurement now confirms the sticker price.
- **Architecture:** sparse Mixture-of-Experts, 309 billion total parameters with 15 billion activated per token, MIT license (independently confirmed by Artificial Analysis). Hybrid attention (sliding-window plus full attention) and a multi-token-prediction decoder, per Xiaomi's own description. Xiaomi reports the Flash RL run cost roughly $850K over under six days (30 steps, ~750K trajectories shared with Pro).
- **Lifecycle:** no deprecation, successor, or discontinuation notice found as of 2026-09-29.

### Raw benchmarks found

Agent / tool use:

- **Artificial Analysis Intelligence Index v4.3.2: 38/100, class rank #8/116** (Artificial Analysis, accessed 2026-09-29) — **new**. Peer median for open-weight models of similar size is 18, so this is a large positive outlier. AA's own summary calls the model "amongst the leading models in intelligence and reasonably priced", "notably slow" and "very verbose".
- **AA speed data (new):** output speed **55.4 tokens/s** (rank #44/116; "notably slow" vs an 81.8 t/s peer median) and TTFT **4.23s** (vs a 2.01s peer median) on Xiaomi's API. Verbosity **240M** Index output tokens vs a 140M median. **This conflicts sharply with the ~113 t/s / 1.2s TTFT figure previously taken from ModelIndex** — treat the first-party AA measurement as authoritative.
- AutomationBench v1.0.0.6: **52.3%** (Xiaomi model card; Pro 53.1%, Claude Opus 5 50.3%, GPT-5.6 Sol 45.8%, Fable 5.1 46.2%, DeepSeek V4.1 Flash 54.8%)
- Toolathlon-Verified: **73.6%** (Xiaomi model card; Pro 76.9%, Opus 5 80.6%, Fable 5.1 77.9%, Kimi K3 76.5%)
- OSWorld-Verified: **80.8%** (Xiaomi model card; Pro 82.0%, Opus 5 83.4%, Kimi K3 84.8%)
- Terminal Bench 4.0: **28.8%** (Xiaomi model card; Pro 34.9%, Opus 5 49.0%, GPT-5.6 Sol 39.9%, Fable 5.1 42.4%, Kimi K3 12.6%, DeepSeek V4.1 Flash 26.8%)
- Terminal Bench 2.1: **87.6%** (Xiaomi model card; Pro 89.9%, Opus 5 89.1%, GPT-5.6 Sol 88.8%, DeepSeek V4.1 Flash 90.6%)
- JobBench: **61.2%** (Xiaomi model card; Pro 62.0%, Opus 5 65.7%, Kimi K3 54.3%, GPT-5.6 Sol 45.4%)
- Agents' Last Exam: **27.6%** (Xiaomi model card; Pro 31.6%, Opus 5 31.6%, Fable 5.1 25.7%)
- CyberGym: **95.1%** (Xiaomi model card — the one row where Flash beats Pro's 94.0; should not be read as Flash being the stronger security model, since Pro leads ExploitGym 17.8 vs 6.0, ExploitBench 47.9 vs 25.3, and SEC Bench Pro 66.3 vs 47.5)
- MiMo Cyber Bench: **77.2%** (Xiaomi model card; Pro 80.2%)
- ExploitGym: **6.0%**; ExploitBench: **25.3%**; SEC Bench Pro: **47.5%** (Xiaomi model card)
- GDPval-AA 2.1: **no verified public score found** (Xiaomi's table leaves the cell blank for Flash)
- Tau3-Banking / Tau2-Bench / Claw-Eval / MCP-Atlas: **no verified public score found**
- Independent-run status: **improved since 2026-09-22.** Artificial Analysis now has a page and an Index, but the individual agent rows above remain Xiaomi-harness numbers. As of 2026-09-29 none of tbench.ai, deepswe.datacurve.ai, toolathlon.xyz, snorkel.ai, livebench.ai, arcprize.org or matharena.ai publishes its own verdict for Flash.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **38** (see Agent / tool use above) — this is the first independent composite for the model and replaces the earlier "no verified public score found".
- Agents' Last Exam: **27.6%** (Xiaomi model card; the only hard-reasoning row published directly for Flash). Note the tension: an Index of 38 against a peer median of 18 sits well above the same vendor table's 27.6% ALE figure.
- One secondary index — a "Vals Index" figure of 59.58% for Flash versus 59.47% for Pro — is quoted by at least one aggregator, but no primary methodology is documented. Now **superseded in relevance** by the real AA Index; retained as provisional and not used as evidence.
- GPQA Diamond / HLE / CritPt / LCR / MLCR / Omniscience / Hallucination rate as standalone rows: **no verified public score found** (they are rolled into the AA Index but not itemised on the page).

Coding:

- DeepSWE v1.1: **67.9%** on the model card; the announcement's training write-up reports **65.7%** as the same RL run's held-out endpoint, up from 48.8 pre-training over 30 RL steps and ~750K trajectories. **The conflict is still unresolved as of 2026-09-29** — two official Xiaomi numbers, no independent runner, card figure used and conflict flagged. (Pro 71.9% on the card, 72.6% in the post; Opus 5 74.0%, GPT-5.6 Sol 73.0%, Fable 5.1 70.0%, Kimi K3 69.0%)
- MiMo Code Bench (in-house): **61.2%** (Xiaomi model card; Pro 63.2%, DeepSeek V4.1 Flash 60.2%, Kimi K3 60.1%, Opus 5 68.6%)
- ProgramBench: **26.0%** (Xiaomi model card; Opus 5 37.0%, Fable 5.1 33.0%, Pro 26.5%, Kimi K3 24.5%, GPT-5.6 Sol 25.0%)
- MiMo Visual Coding: **71.5%** (Xiaomi model card; Pro 72.3%, Opus 5 70.0%, GPT-5.6 Sol 73.4%, Fable 5.1 69.1%)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks retrieval measurement published for MiMo-V2.6-Flash by Xiaomi or any third party. The 1,048,576-token window is now corroborated by a third party (Artificial Analysis lists 1M) and is an input to the AA-LCR v1.1 component of the Index, but the standalone long-context score is not itemised.

Sources consulted: [Artificial Analysis MiMo-V2.6-Flash](https://artificialanalysis.ai/models/mimo-v2-6-flash) (page confirmed live, no longer 404), Xiaomi MiMo-V2.6 announcement and model card, official `mimo.mi.com` model page, HuggingFace repo notes, The Model Gap, Tabbit, datanorth.ai, RouterPlex catalog, and ModelIndex; accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 72/100.** *(was 70)* The agent table is genuinely capable for the money — AutomationBench 52.3% edges past Claude Opus 5, OSWorld-Verified 80.8% and Terminal Bench 2.1 87.6% are within a few points of Pro — and the independent AA Index of 38 now underwrites the agentic read. Capped by Terminal Bench 4.0 at 28.8%, ExploitGym 6.0%, ExploitBench 25.3%, SEC Bench Pro 47.5%, a still-blank GDPval-AA cell, and the fact that AA benchmarks only the single first-party provider.
- **Reasoning: 72/100.** *(was 58 — the largest change in this re-validation)* The dimension previously had **no evidence at all**. It now has an independent Artificial Analysis v4.3.2 composite of **38, rank #8/116 in its class against an 18 median**, measured on Xiaomi's own API. Discounted from the high 70s because the itemised knowledge components are not published, the 240M-token verbosity (vs a 140M median) inflates cost and latency, and the vendor's own Agents' Last Exam row is only 27.6%.
- **Context window: 90/100.** *(was 88)* 1,048,576 tokens in / 131,072 out, matching Pro exactly and now corroborated across Xiaomi, RouterPlex, DeepInfra, ModelIndex, **and Artificial Analysis**, with the 1M window feeding the AA-LCR v1.1 component of a 38 Index. Still short of the ceiling because no standalone long-context retrieval benchmark is published.
- **Multimodal: 78/100.** *(unchanged)* Vendor-claimed text, image, video, and audio input with text output at full parity with Pro, backed by a documented vision transformer and audio tokenizer stack and a real visual-agent row in MiMo Visual Coding at 71.5%. Held at 78 and not raised despite the new AA data because **Artificial Analysis lists only text and image input**, contradicting Xiaomi on video and audio; capped further by text-only output and an in-house benchmark.
- **Coding: 75/100.** *(unchanged)* DeepSWE v1.1 at 67.9% is within 4 points of Opus 5 and 6 above Kimi K3, and MiMo Code Bench 61.2% is competitive with DeepSeek V4.1 Flash — a big step from the 6.7-point ProgramBench where every model including GPT-5.6 Sol scores under 27. Capped by ProgramBench 26.0%, Terminal Bench 4.0 28.8%, and the still-unresolved 65.7-vs-67.9 conflict on its own headline code number.
- **Cost efficiency: 95/100.** *(unchanged)* $0.14 / $0.28 with cached input at $0.0028 is one of the cheapest rate cards anywhere for a model claiming four input modalities, at 15B active parameters small enough to self-host on real hardware, under an MIT licence with no licence fee. Artificial Analysis now supplies the independent confirmation this score was missing — 98% cache discount, $0.06 blended per 1M, and **$0.06 cost per Intelligence Index task** (rank #6/116). The small deduction is paid-only hosted access, 172.9 GB of FP8 weights for self-hosting, and very low throughput (55.4 t/s, TTFT 4.23s) on the one provider AA measures.
- **Overall Score: 77.4/100.** *(was 73.8)* (72 + 72 + 90 + 78 + 75) / 5 = 387 / 5 = 77.4. Best fit: high-volume, cost-sensitive agent loops — code review, document triage, multi-agent collaboration over a 1M window with mixed modalities. The caveat is no longer "never independently measured" but "independently measured on a single first-party provider at 55 t/s, and verbose"; the individual agent and code rows are still vendor-run.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: public internet research (Artificial Analysis Index v4.3.2, Xiaomi MiMo-V2.6 announcement, model card, official `mimo.mi.com` model page, HuggingFace repo notes, RouterPlex catalog, The Model Gap, Tabbit, datanorth.ai, ModelIndex); scores are normalized 1–100 interpretations, not official vendor scores. An independent composite now exists (AA Index 38), but every individual agent and code row below it remains vendor-reported on a single provider, which is stated explicitly wherever it caps a score.
- Future sources: add a new file next to this one, e.g. `Space_Bunny_Alpha_v2.md`, using the same headings.
