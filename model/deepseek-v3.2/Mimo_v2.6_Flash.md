# DeepSeek V3.2 — findings by Mimo v2.6 Flash

- Source: DeepSeek-AI (`deepseek-v3.2`)
- Date: 2026-10-05 (UTC)
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
- Claw-Eval / ClawProBench: no verified public score found
- GDPval-AA: no verified public score found
- MCP Atlas / SWE Atlas: no verified public score found
- Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.4%** <(No Tools, LLMLearner #83/189; Serenities 78.9%)>
- HLE: **25.1%** <(No Tools, LLMLearner #77/131)>
- MMLU-Pro: **85.0%** <(#26/150; Serenities 82.0%)>
- AIME 2025: **93.1%** · AIME 2024: 92.7 <(LLMLearner)>
- ARC-AGI-1 / ARC-AGI-2: **57.0% / 4.0%** <(LLMLearner #45/69, #56/63; Serenities ARC-AGI 42.0%)>
- CritPt: 2.9% <(LLMLearner #72/124)> · FrontierMath Tier 4: 2.1% <(#31/50)>
- ECI: 146 <(#67/167)> · LiveBench: 62.2% <(#72/102)> · BrowseComp: 51.4% <(#38/51)>
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **73.1%** <(with tools, LLMLearner #44/104; Serenities 73.0%, #13/67)>
- SWE-Bench Pro (public): **40.9%** <(No Tools, #54/60)>
- LiveCodeBench: **83.3%** <(No Tools, LLMLearner #31/120; Serenities HF-protocol 55.0%)>
- Codeforces: 2386 <(LLMLearner #9/16)> · HumanEval+: 87.0% · Aider Polyglot: 74.2% <(#4/8, Serenities)> · AA Coding Index: 44.2 <(Serenities)>
- Vibe Code Bench: no verified public score found

Long context:

- 164K window; MRCR / AA-LCR / ∞-Bench retrieval: no verified public score found (DSA sparse attention is the design-side long-context claim per site meta).

### Normalized scores (1–100)

- **Agent/tool use: 80/100.** τ²-Bench 80.3% beats the ≥50% frontier reference and TB 2.0 46.4% sits at the ≈44%→85 anchor, with Claw Bench 79% and Pinch 84.3% alongside — but no GDPval/MCP/Claw-Eval rows and TB Hard 35.6% (mid-field) cap the composite at 80.
- **Reasoning: 75/100.** GPQA 82.4%, MMLU-Pro 85.0 and AIME 93.1 are solid, yet HLE 25.1% sits below the ≥30 frontier band, ARC-AGI-2 4.0% and CritPt 2.9% are weak, and no AA Intelligence Index exists for this model.
- **Context window: 55/100.** 164K sits mid-band (131K–262K → 40–79); with no MRCR/AA-LCR retrieval evidence and only a design-side sparse-attention claim, the conservative midpoint 55 applies.
- **Multimodal: 25/100.** Text-only input and output — the 1–29 tier; no vision, audio, or video paths exist on V3.2.
- **Coding: 82/100.** LiveCodeBench 83.3% clears the ≥65% frontier-mid reference, Codeforces 2386 and Aider Polyglot 74.2% are strong, but SWE-bench Verified 73.1% trails the 80+ frontier band and SWE-Pro 40.9% (#54/60) is low → 82.
- **Cost efficiency: 92/100.** No Zen Free ID → paid scoring: $0.27–$0.28 in / $0.40–$0.42 out across 34 hosts (~4× cheaper than the $1.25/$4.25 benchmark) with cached input at $0.028 — agent-friendly; $0/$0 Alibaba-Plan-CN/iFlow promo rows are not an evaluable free tier, so 92 not 95+.
- **Overall Score: 63/100.** (80+75+55+25+82)/5 = 63.4 → 63 — best fit: cheap text-only reasoning-and-coding API workhorse (τ² 80.3, LCB 83.3) for budget agent batches; not for multimodal tasks or 1M-window work.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-05
- Method: public internet research (DataLearner/LLMLearner 22-benchmark catalog, Serenities AI provider/benchmark table, site meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.