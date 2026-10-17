# DeepSeek V4.1 Flash — findings by MiniMax M3

- Source: DeepSeek (`deepseek/deepseek-v4.1-flash`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's MIT-licensed 552B multimodal MoE update (Sept 10, 2026), engineered for KV-cache-efficient long-context agentic workloads. Uses Causal Encoder-Decoder architecture (16B active decode / 8B prefill), FP4 KV caching, and CSA2 cross-layer reuse — global KV footprint ~890 bytes/token in HBM. Beats GPT-5.6 Sol and Claude Opus 5 on several Terminal-Bench / DeepSWE rows at ~1/4 the V4-Pro price.
- **Provider / access:** DeepSeek native API; Hugging Face (weights); OpenCode Zen `opencode/deepseek-v4.1-flash`. Chat Completions-compatible.
- **Release / knowledge:** Released 2026-09-10; arXiv paper 2609.19969 (Sept 17). MIT license.
- **IDs:** `deepseek/deepseek-v4.1-flash` (vendor / Zen); HF: `deepseek-ai/DeepSeek-V4.1-Flash`. No Free ID.
- **Context window:** 1M tokens; 384K max output.
- **Modalities:** Text and image in; text out (native multimodal MoE; image input confirmed in arXiv abstract).
- **Pricing (as of 2026-10-13):** $0.15 input / $0.60 output per 1M (per ai-model-timeline.org). Cached input pricing per provider.
- **Architecture:** Causal Encoder-Decoder MoE — 552B total parameters, 16B active during decode / 8B during prefill. FP4 KV cache, CSA2 cross-layer reuse, DSpark speculative decoding, SWA Bounded Replay. Pretrained on 45T-token multimodal corpus.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Pass@1): **90.6%** (DeepSeek scoreboard via ashna.ai) — beats GPT-5.6 Sol 88.8 / Claude Opus 5 89.1.
- Terminal-Bench 2.1 (Vals AI independent): **74.53%** (benchgap.net / ai-model-timeline.org).
- Terminal-Bench 3.0: **30.0%** (vendor, self-reported).
- Terminal-Bench 4.0: **31.2%** (vendor, self-reported).
- DeepSWE v1.1 (Resolved): **74.2%** (DeepSeek harness) — beats GPT-5.6 Sol 73.0 / Opus 5 74.0.
- CyberGym (Pass@1): **88.1%** (ashna.ai) — beats Sol 84.5.
- AutomationBench (Pass@1): **54.8%** (ashna.ai) — beats Sol 45.8 / Opus 5 50.3.
- Agents' Last Exam (Pass@1): **31.8%** (ashna.ai) — beats Sol 26.7 / Opus 5 28.6.
- HLE with tools (Pass@1): **63.9%** (ashna.ai) — near Sol 63.6.
- Chartography / BabyVision / ZeroBench (visual agent, Claude Code harness, 512K): **no verified public score found** for this exact model/ID; reported as competitive in HF card.

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (DeepSeek / ashna.ai; benchgap.net) — vs GPT-5.6 Sol 94.1 (Sol still leads by 3.2).
- Humanity's Last Exam (no tools): **36.8%** (vendor) — vs Opus 5 44.5/56.3 (Opus 5 still leads).
- HLE full-set with tools: 63.9% (above; ashna.ai).
- AA Intelligence Index / CritPt / LCR: **no verified public score found** for this exact model/ID at standard harness.

Coding:

- DeepSWE v1.1 74.2% (above).
- SWE-bench Verified (estimated, medium confidence): **~82.2%** (benchgap.net estimate) — not vendor-reported.
- SWE-bench Pro (estimated, medium confidence): **~62.6%** (benchgap.net estimate) — not vendor-reported.
- ProgramBench / NL2Repo-Bench / FrontierCode: **no verified public score found** for this exact model/ID.
- FrontierSWE v2 (estimate): **~23.9%** (benchgap.net) — weak on this harder variant.

Multimodal / long context:

- MMMU-Pro: **no verified public score found** (vendor list notes despite native image input).
- Native multimodal (text + image) confirmed in arXiv paper.
- 1M context with KV-cache compression (890 bytes/token HBM footprint).
- AA-LCR / MRCR / RULER at 1M: **no verified public score found** for this exact model/ID.

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 2.1 90.6% (LEADS GPT-5.6 Sol 88.8 and Opus 5 89.1). DeepSWE v1.1 74.2% (LEADS Sol 73.0). CyberGym 88.1% (LEADS Sol 84.5). AutomationBench 54.8% (LEADS Sol 45.8). HLE with tools 63.9%. Capped at 92 because Toolathlon / MCP Atlas / Tau3 / Tau2 specific numbers for this exact model/ID are not published.
- **Reasoning: 80/100.** GPQA Diamond 90.9% (Sol still leads at 94.1). HLE no tools 36.8% (Opus 5 leads). FrontierSWE v2 ~23.9% weak. Capped at 80 because AA Intelligence Index / LCR / CritPt for this exact model/ID at standard harness are not published.
- **Context window: 92/100.** 1M context with FP4 KV cache, CSA2 cross-layer reuse — engineering emphasis on long-context efficiency. Capped at 92 because AA-LCR / MRCR / RULER at 1M for this exact model/ID are not published.
- **Multimodal: 70/100.** Text + image in (native, per arXiv paper). Capped at 70 because MMMU-Pro specific numbers for this exact model/ID are not published, and Chartography / BabyVision / ZeroBench numbers are not surfaced.
- **Coding: 84/100.** DeepSWE v1.1 74.2% (LEADS Sol 73.0). SWE-bench Verified ~82.2% estimated. SWE-bench Pro ~62.6% estimated. FrontierSWE v2 ~23.9% (weak). Capped at 84 because SWE-bench Verified / Pro / LiveCodeBench specific vendor numbers are not published for this exact model/ID.
- **Cost efficiency: 95/100.** $0.15 in / $0.60 out (~$0.30/$1.20 in meta.json reflects older figures; arxiv/ashna reports $0.15/$0.60). MIT-licensed weights. FP4 KV cache drives inference cost down. Cached pricing available. Capped at 95 because output at $0.60/MTok is still 2× V4-Flash's nominal input tier.
- **Overall Score: 84/100** Half-up mean of Tool 92, Reasoning 80, Context 92, Multimodal 70, Coding 84 = 418/5 = 83.6 → half-up 84. DeepSeek V4.1 Flash is the cost-leader open-weights frontier contender: leads Terminal-Bench 2.1 (90.6%), DeepSWE v1.1 (74.2%), CyberGym (88.1%), and AutomationBench (54.8%) against Sol and Opus 5 at ~1/4 the price, with Causal Encoder-Decoder architecture optimized for long-context KV efficiency. Trails on GPQA Diamond (90.9 vs Sol 94.1) and HLE no tools (36.8 vs Opus 5 44.5+).

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-13
- Method: public internet research (DeepSeek V4.1-Flash Hugging Face model card, arXiv paper 2609.19969, ashna.ai launch coverage, benchgap.net benchmark summary, ai-model-timeline.org technical summary, OpenRouter / DeepSeek API). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4.1_Flash_DeepSeek.md`, using the same headings.
