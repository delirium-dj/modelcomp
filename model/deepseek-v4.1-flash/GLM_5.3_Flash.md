# DeepSeek V4.1 Flash — findings by GLM 5.3 Flash

- Source: DeepSeek (`deepseek-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash (open-weight flagship-flash; no Free-tier wording)
- **Short description:** DeepSeek's Causal Encoder-Decoder MoE that absorbed the whole V4 line — from Sept 14, 2026 `deepseek-v4-pro` requests reroute to V4.1-Flash at Flash prices. Input-heavy agentic workload specialist: 8B active prefill / 16B active decode, FP4 KV cache, native vision, 1M context, MIT weights.
- **Provider / access:** DeepSeek API `https://api.deepseek.com` (OpenAI format) and `https://api.deepseek.com/anthropic` (Anthropic format); Responses API supported. Model ID `deepseek-flash`; legacy `deepseek-v4-flash` / `deepseek-v4-flash-vision-exp` resolve to it. Weights: HF `deepseek-ai/DeepSeek-V4.1-Flash`. Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** GA September 10, 2026 (two-day beta from Sept 8); lineage: V4-Flash-Preview (Apr 2026) → build 0731 public beta (July 31) → V4.1-Flash GA. V4-Pro retirement/reroute Sept 14, 2026. Knowledge cutoff not verified in reviewed sources.
- **IDs:** `deepseek-flash` (current), legacy aliases as above.
- **Context window:** 1M tokens; max output 384K (model card recommends max_tokens ≥ 256K and top_p 0.95–1.0); FP4 KV cache at 890 bytes/token; 2,500 concurrent sessions per account.
- **Modalities:** Text + image in (DeepSeek-ViT, vision from first pretraining step); text out. Reasoning: yes — continuous effort 1–100 on local weights, string tiers low/high/max on the API. Tool calls, JSON mode, vision agent via Claude Code harness.
- **Pricing (as of 2026-10-09):** $0.30 per 1M cache-miss input / $1.20 per 1M output (peak); off-peak half; cache hits $0.003 per 1M. No free tier.
- **Architecture:** Open weights, MIT. Causal Encoder-Decoder: 552B total MoE (763B with the ViT encoder), ~8B active on prefill / ~16B on decode, 40 layers split 20 encoder / 20 decoder.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (HF model card, DeepSeek Harness Minimal, 1M ctx, effort=100 — highest listed in DeepSeek's frontier table); Vals independent harness: **74.5%** (benchlm.ai); effort 25 gives 82.4% at ~40% of the tokens
- Terminal-Bench 3.0: **30.0%** (model card; Opus 5 43.3, GPT-5.6 Sol 34.4 — decisive loss); Terminal-Bench 4.0: **31.2%** (model card) / **26.8%** (AA board)
- GDPval-AA: **1600 Elo** (AA board via benchlm.ai — fills the previously-missing GDPval row; 55.0% AA-normalized; at Opus 4.8's 1600)
- AA AutomationBench: **68.9%** (AA board via benchlm.ai — vs vendor AutomationBench 54.8%, also highest listed in its table)
- AA Briefcase: **1420 Elo** (AA board via benchlm.ai)
- AA ITBench: **46.9%**; GDP.pdf: **12.8%** (AA boards)
- CyberGym: **88.1%** (model card, highest listed); ExploitGym: **15.3%** (model card)
- Agent's Last Exam: **31.8%** (model card, highest listed)
- CWE-bench v1: **55.0%** (Collinear leaderboard via benchlm.ai)
- NL2Repo-Bench: **65.4%** (tech report); ProgramBench: **20.3%** (model card; Opus 5 37.0)
- Codeforces rating: **3471** (model card, highest listed)
- Tau2 / Tau3 / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (HF model card at max effort; Opus 5 93.4, Sol 94.1, Kimi K3 92.9, GLM-5.3 88.1, V4-Pro 92.4)
- HLE: **36.8%** (model card; Opus 5 56.3, Sol 44.5); AA-HLE: **39.2%** (AA board)
- Artificial Analysis Intelligence Index: **39.5** (AA v4.3.2 board via benchlm.ai — fills the previously-missing Index; deepinfra cites 40)
- AA-LCR: **84.0%** (AA long-context-reasoning board via benchlm.ai — fills the previously-missing LCR)
- CritPt: **14.3%**; MLCR-AA: **22.8%** (AA boards via benchlm.ai)
- AA-Omniscience: Index -5.3, accuracy **46.4%**, hallucination rate **96.5%** (benchlm.ai — severe hallucination)
- MMLU-Pro (base): **74.1**; AGIEval 83.4; C-Eval 92.1; SimpleQA-Verified 42.3; MATH 61.1; GSM8K 93.0 (base model, internal framework)
- LongBench-V2 (base): **45.2**
- Vendor claim: V4.1-Flash beats V4-Pro on HumanEval, GSM8K, DeepSWE and Terminal-Bench

Coding:

- Terminal-Bench 2.1 (coding harness): **90.6%** (see above)
- DeepSWE v1.1: **74.2%** (mini-SWE harness; above Opus 5 74.0 and Sol 73.0; vs V4-Pro 62.7, V4-Flash 54.4)
- Codeforces: **3471** rating; BigCodeBench (base): **60.6**; HumanEval (base): **79.4**
- NL2Repo: **65.4%**; OpenHarmony Bench: **60.3%** (official leaderboard via benchlm.ai); CWE-bench v1: **55.0%**
- Apex (math): **65.6%** (model card)
- Bug Hunt Bench: **21.7 fixes** (benchlm.ai); ProgramBench: **20.3%**
- SWE-bench Verified / Pro / SciCode / LiveCodeBench / SWE-Atlas / Vibe: no verified public score found
- Harness caveat: agentic rows are model+DeepSeek-Harness scores; a multi-scaffold table (Claude Code, Codex, OpenCode) exists in the card

Long context:

- 1M window; AA-LCR **84.0%** measured (benchlm.ai); LongBench-V2 base 45.2; no MRCR/RULER retrieval number verified

Multimodal / vision:

- AA-MMMU-Pro: **77.0%** (AA board via benchlm.ai — fills the previously-missing vision measurement); Chartography (tools): **78.9%**, BabyVision w/ Python: **89.6%**, ZeroBench w/ Python: **49.0%** (model card rows)

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 90.6% (vendor; Vals 74.5%) is frontier-tier, and the filled GDPval-AA 1600 Elo (at Opus 4.8) plus AA AutomationBench 68.9% clear the mid-band anchors; CyberGym 88.1% leads — but the collapse to 30–31% on TB 3.0/4.0 (vs Opus 5's 43–52%) and ExploitGym 15.3% show strength concentrated in established agentic tasks.
- **Reasoning: 80/100.** GPQA 90.9% clears the 90% frontier ref and the filled AA Intelligence Index 39.5 + AA-LCR 84.0% fill the old draft's missing independent rows; HLE 36.8%/39.2% sits under the 40% ref, CritPt 14.3% is weak, and the 96.5% hallucination rate is severe.
- **Context window: 94/100.** 1M window (95–100 tier) with 384K output; measured AA-LCR 84.0% is strong; no MRCR/RULER ≥98% verification and a weak base LongBench-V2 (45.2) keep it just under 95.
- **Multimodal: 75/100.** Native image input with measured vision (AA-MMMU-Pro 77.0%, Chartography 78.9%, BabyVision 89.6%); text-only output, no video/audio — into the 75–90 band's floor.
- **Coding: 86/100.** DeepSWE 74.2% edges Opus 5 and Sol, TB2.1 90.6% and Codeforces 3471 are frontier, but TB 3.0/4.0 losses, ProgramBench 20.3% and CWE-bench 55.0% cap it below the 90s.
- **Cost efficiency: 91/100.** $0.30/$1.20 peak (the M2.7/M3 anchor price) with off-peak at half and $0.003/1M cache hits — exceptional for cached agent loops; effort tuning matters (effort 25 keeps most accuracy at ~40% of tokens). No free tier.
- **Overall Score: 84/100.** Mean of the five quality dims (86 + 80 + 94 + 75 + 86) / 5 = 84.2 → 84. Best fit: cache-heavy, input-heavy agentic coding at commodity prices — deploy with effort 60–80, not max, and verify on your own scaffold before trusting the leaderboard rows; the 96.5% hallucination rate argues against unsupervised knowledge work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (benchlm.ai tables updated 2026-10-09 citing the HF model card and AA boards, Vals AI, deepinfra, DuckDuckGo search cross-checked); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: adds measured GDPval-AA 1600, AA Intelligence Index 39.5, AA-LCR 84.0%, AA AutomationBench 68.9%, AA-MMMU-Pro 77.0%, Vals TB2.1 74.5% — Tool 82→86, Reasoning 78→80, Context 92→94, Multimodal 66→75, Overall 81→84.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
