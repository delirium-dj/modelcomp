# DeepSeek V4.1 Flash — findings by GLM 5.3 Flash

- Source: DeepSeek (`deepseek-flash`)
- Date: 2026-09-19 (UTC)
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
- **Pricing (as of 2026-09-19):** $0.30 per 1M cache-miss input / $1.20 per 1M output (peak); off-peak half; cache hits $0.003 per 1M. No free tier.
- **Architecture:** Open weights, MIT. Causal Encoder-Decoder: 552B total MoE (763B with the ViT encoder), ~8B active on prefill / ~16B on decode, 40 layers split 20 encoder / 20 decoder.

### Raw benchmarks found

Agent / tool use:

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** — highest listed in DeepSeek's frontier table (vendor; DeepSeek Harness Minimal, 1M ctx, reasoning_effort=100). Effort 25 gives 82.4% at ~40% of the tokens
- Terminal-Bench 3.0: **30.0%** (Opus 5 43.3, GPT-5.6 Sol 34.4 — decisive loss on the harder variant)
- Terminal-Bench 4.0: **31.2%** (Opus 5 51.8, Sol 39.9)
- DeepSWE v1.1: **74.2%** (mini-SWE harness; above Opus 5 74.0 and Sol 73.0; vs V4-Pro 62.7, V4-Flash 54.4)
- CyberGym: **88.1%** (highest listed)
- AutomationBench: **54.8%** (highest listed in its table)
- Agent's Last Exam: **31.8%** (highest listed in its table)
- SEC-Bench Pro: **62.8%** (Claude Code harness; Sol 74.3)
- NL2Repo-Bench: **64.0%** (Opus 5 75.3); ProgramBench: **20.3%** (Opus 5 37.0)
- Codeforces rating: **3471** (highest listed)
- GDPval / Tau2 / Tau3 / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (vendor table at max effort; Opus 5 93.4, Sol 94.1, Kimi K3 92.9, GLM-5.3 88.1, V4-Pro 92.4)
- HLE: **36.8%** (Opus 5 56.3, Sol 44.5)
- MMLU-Pro (base): **74.1**; AGIEval 83.4; C-Eval 92.1; SimpleQA-Verified 42.3; MATH 61.1; GSM8K 93.0 (base model, internal framework)
- LongBench-V2 (base): **45.2**
- Artificial Analysis Intelligence Index: no verified public number found (AA published a cost/hallucination-boundary review Sept 11, 2026; itemized Index not surfaced)
- Vendor claim: V4.1-Flash beats V4-Pro on HumanEval, GSM8K, DeepSWE and Terminal-Bench

Coding:

- Terminal-Bench 2.1 (coding harness): **90.6%** (see above)
- DeepSWE v1.1: **74.2%** (see above)
- BigCodeBench (base): **60.6**; HumanEval (base): **79.4**
- Codeforces: **3471** rating
- SWE-bench Verified / Pro / SciCode / LiveCodeBench / SWE-Atlas / Vibe: no verified public score found
- Harness caveat: agentic rows are model+DeepSeek-Harness scores; a multi-scaffold table (Claude Code, Codex, OpenCode) exists in the card

Long context:

- 1M window; LongBench-V2 base 45.2; no MRCR/RULER retrieval number verified

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.1 90.6% is frontier-tier and CyberGym 88.1%/AutomationBench 54.8% lead its table, but the collapse to 30–31% on TB 3.0/4.0 (vs Opus 5's 43–52%) shows the strength is concentrated in established agentic tasks, and GDPval/Tau rows are absent.
- **Reasoning: 78/100.** GPQA 90.9% clears the 90% frontier ref, but HLE 36.8% sits under the 40% ref, LongBench-V2 base is 45.2, and no independent Index reading is published — all vendor-run at max effort.
- **Context window: 92/100.** 1M window (95–100 tier) with 384K output; no MRCR/RULER retrieval verification and a weak base LongBench-V2 (45.2) keep it out of the 95+ band.
- **Multimodal: 66/100.** Native image input trained from pretraining step zero (MMMU-Pro/CVBench/DocVQA/RefCOCO rows in the card), text-only output, no video/audio — top of the 60–70 image-in band.
- **Coding: 86/100.** DeepSWE 74.2% edges Opus 5 and Sol, TB2.1 90.6% and Codeforces 3471 are frontier, but TB 3.0/4.0 losses, ProgramBench 20.3% and SEC-Bench Pro 62.8% cap it below the 90s.
- **Cost efficiency: 91/100.** $0.30/$1.20 peak (the M2.7/M3 anchor price) with off-peak at half and $0.003/1M cache hits — exceptional for cached agent loops; effort tuning matters (effort 25 keeps most accuracy at ~40% of tokens). No free tier.
- **Overall Score: 80.8/100.** (82+78+92+66+86)/5 = 80.8. Best fit: cache-heavy, input-heavy agentic coding at commodity prices — deploy with effort 60–80, not max, and verify on your own scaffold before trusting the leaderboard rows.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-19
- Method: public internet research (fresh web search: DeepSeek API docs, Apidog spec guide, DeepSeek V4 Guide full-table page, Tabbit model-card curation, wan27 build-0731 coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


