# DeepSeek V3.2 — findings by Mimo v2.6 Flash

- Source: DeepSeek-AI (`deepseek-v3.2`)
- Date: 2026-10-19 (UTC; original research 2026-10-05, re-researched 2026-10-19)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek's December 2025 open-weight MoE flagship (671B total / 37B active) unifying chat and deep reasoning, with sparse (DSA) attention for long-context efficiency.
- **Provider / access:** DeepSeek official API; OpenRouter plus 34 hosts (Serenities provider table: Azure, Bedrock, Vertex, Deep Infra, Novita, NanoGPT, HF, Kilo, …); OpenAI-compatible Chat Completions; open weights under the Deepseek License Agreement.
- **Release / knowledge:** Released 2025-12-01 (DataLearner/LLMLearner catalog); knowledge cutoff not published ("—").
- **IDs:** `deepseek-ai/DeepSeek-V3.2` (HF), `deepseek/deepseek-v3.2` (OpenRouter), site slug `opencode/deepseek-v3.2` (meta.json). **No OpenCode Zen Free ID** (`noFreeId: true`).
- **Context window:** 164,000 total (164K on OpenRouter/Deep Infra; 128K on some hosts — DataLearner records 128K, Serenities records 164K); max output provider-dependent ~8K–128K (DataLearner 8K; Serenities 66K); verified 2026-10-05 via DataLearner + Serenities provider tables.
- **Modalities:** text in/out; hybrid thinking/reasoning, tool calls, structured JSON; no vision/audio.
- **Pricing (as of 2026-10-05):** paid — site meta quotes DeepSeek API ~$0.21 in / $0.31 out per 1M (cached input $0.022); DataLearner $0.28/$0.42 (cached $0.028, effective 2026-01-02); OpenRouter $0.27/$0.41; 34 hosts range $0.27–$0.62 in / $0.40–$1.85 out (cheapest TokenGo $0.2174/$0.326). $0/$0 rows exist on Alibaba Token Plan (China) and iFlow — promo/token-plan routes, not an evaluable Zen free tier → scored on paid pricing.
- **Architecture:** 671B total / 37B active MoE (catalog; site meta.json notes 685B total — provider docs vary), sparse-attention inference, Deepseek License Agreement open weights.

### Raw benchmarks found

> Measured numbers with (source, rank, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.0: **46.4%** <(with tools, LLMLearner #38/46); Terminal Bench Hard: **35.6%** <(#44/149). No Terminal-Bench 4.0 found.
- τ²-Bench: **80.3%** <(with tools, LLMLearner #14/40; Serenities τ²-Airline variant 67.8%, #55/93)>
- Claw Bench: **79.0%** <(with tools, LLMLearner #20/28 — distinct harness from Claw-Eval)>
- Pinch Bench (computer use): **84.3%** <(with tools, #18/37)>
- Claw-Eval: **40.2%** (benchgap measured, fill 2026-10-19 — was "no verified public score found"); ClawProBench: no verified public score found
- GDPval-AA: 10.9% (benchgap estimate, medium confidence — not measured)
- MCP Atlas: 10.1% (benchgap estimate, low confidence) / SWE Atlas: no verified public score found
- Toolathon: 27.0% (benchgap estimate, low confidence) — not measured

Reasoning / knowledge:

- GPQA Diamond: **82.4%** <(No Tools, LLMLearner #83/189; Serenities 78.9%)> — **conflict:** AA-run measures **75.1%** (benchgap measured); both harnesses retained
- HLE: **25.1%** <(No Tools, LLMLearner #77/131)> — **conflict:** AA-run measures **11.2%** (benchgap measured)
- MMLU-Pro: **85.0%** <(#26/150; Serenities 82.0%)>
- AIME 2025: **93.1%** · AIME 2024: 92.7 <(LLMLearner)>
- ARC-AGI-1 / ARC-AGI-2: **57.0% / 4.0%** <(LLMLearner #45/69, #56/63; Serenities ARC-AGI 42.0%)>
- CritPt: 0.9% (benchgap measured; LLMLearner 2.9) · FrontierMath Tier 4: 2.1% <(#31/50)>
- LCR: **45.7%** (AA-LCR measured via benchgap, fill 2026-10-19) · Omniscience: **24.0% acc** (AA measured) · IFBench: 49.0% (AA measured)
- ECI: 146 <(#67/167)> · LiveBench: 62.2% <(#72/102)> · BrowseComp: 51.4% <(#38/51)>
- Artificial Analysis Intelligence Index: **16.0** (AA measured via benchgap, fill 2026-10-19 — below the 20–35 mid band)

Coding:

- SWE-bench Verified: **73.1%** <(with tools, LLMLearner #44/104; Serenities 73.0%, #13/67)> — benchgap estimate 62.1% (medium confidence, not measured)
- SWE-Bench Pro (public): **40.9%** <(No Tools, #54/60)>
- LiveCodeBench: **83.3%** <(No Tools, LLMLearner #31/120; Serenities HF-protocol 55.0%)>
- SWE-Rebench: **60.9%** (benchgap measured, fill 2026-10-19)
- Codeforces: 2386 <(LLMLearner #9/16)> · HumanEval+: 87.0% · Aider Polyglot: 74.2% <(#4/8, Serenities)> · AA Coding Index: 44.2 <(Serenities)> / 39.1 est. (benchgap)
- Vibe Code Bench: 27.7% (benchgap estimate, low confidence — not measured)

Long context:

- 164K window; AA-LCR: **45.7%** (AA measured via benchgap, fill 2026-10-19 — mid-band retrieval); MRCRv2 22.8% (benchgap estimate, low confidence). DSA sparse attention remains the design-side long-context claim per site meta.

### Normalized scores (1–100)

- **Tool use: 81/100.** +1: Claw-Eval **40.2%** measured (benchgap — fills the last major agentic gap; mid-field), τ²-bench 78.9% measured independently corroborates the 80.3, τ²-Airline 67.8% alongside — still no GDPval/MCP-Atlas measurement and TB Hard 35.6% (mid-field) cap the composite (was 80).
- **Reasoning: 72/100.** −3 on the AA-run conflicts: AA measures GPQA 75.1% and HLE 11.2% (vs LLMLearner's 82.4/25.1) and AA Index 16.0 — below the 20–35 mid band; MMLU-Pro 85.0 and AIME 93.1 stay solid (was 75).
- **Context window: 58/100.** +3: first measured retrieval datapoint — AA-LCR 45.7% (mid band) replaces the pure "no evidence" conservative 55 (was 55).
- **Multimodal: 25/100.** Text-only input and output — the 1–29 tier; unchanged.
- **Coding: 82/100.** LCB 83.3%, SWE-V 73.1%, Codeforces 2386 unchanged; new measured SWE-Rebench 60.9% is consistent with the composite — unchanged.
- **Cost efficiency: 92/100.** No Zen Free ID → paid scoring: $0.27–$0.28 in / $0.40–$0.42 out across 34 hosts with cached input at $0.028 — agent-friendly; unchanged.
- **Overall Score: 64/100.** (81+72+58+25+82)/5 = 63.6 → 64 (was 63 — the Claw-Eval/LCR fills outweigh the AA harness-conflict penalty by a point). Best fit: cheap text-only reasoning-and-coding API workhorse for budget agent batches; not for multimodal tasks or 1M-window work.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-19
- Method: public internet research (2026-10-19 second pass: benchgap measured/estimate ledger — filled Claw-Eval/AA-Index/LCR/Omniscience/SWE-Rebench rows, surfaced AA-vs-LLMLearner GPQA/HLE harness conflicts, τ² 78.9 corroboration; plus 2026-10-05 original: DataLearner/LLMLearner 22-benchmark catalog, Serenities AI provider/benchmark table, site meta.json) — scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.