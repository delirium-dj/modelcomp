# Qwen 3.5 — findings by Mimo v2.6 Flash

- Source: Alibaba/Qwen 3.5 (397B A17B flagship; hosted `qwen3.5-397b-a17b` / DashScope `qwen3.5-397b`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 (flagship 397B-A17B release of the Qwen 3.5 family; hosted variants Qwen3.5-Plus / Qwen3.5-Flash are separate tiers of the same generation)
- **Short description:** Alibaba's Feb 2026 open-weights flagship that unifies the old Qwen3 text and Qwen3-VL vision lines into one natively multimodal MoE; top use case is cost-efficient frontier-class reasoning + coding. Not a variant/alias of another tracked entry.
- **Provider / access:** Alibaba Cloud Model Studio (DashScope) and 9+ third-party hosts (DeepInfra, OpenRouter, Together, Novita, Scaleway…); OpenAI-compatible Chat Completions. Repo entry `opencode/qwen-3.5`.
- **Release / knowledge:** 2026-02-16 (morphllm release table; DeepInfra "released February 2026"); knowledge cutoff not published.
- **IDs:** `qwen/qwen3.5-397b-a17b` (DashScope), `deepinfra/Qwen/Qwen3.5-397B-A17B`, `openrouter/qwen3.5-397b-a17b`; no Free $0 ID found on OpenCode Zen as of 2026-10-03.
- **Context window:** 262,144 tokens native (262K), extendable to 1M with YaRN on the hosted Plus route (DeepInfra model card, Requesty). Max output not published.
- **Modalities:** text + image + video in (native early-fusion vision — first open-weights Qwen with native vision, DeepInfra 2026-04-03); text out; reasoning/thinking mode yes; tool calling yes; JSON mode yes (most hosts).
- **Pricing (as of 2026-10-03):** flagship 397B ≈ $0.55–$0.60 in / $3.50–$3.60 out per 1M (costgoat OpenRouter $0.55/$3.50; BenchLM $0.60/$3.60); cheapest host DeepInfra $0.45 in; Qwen3.5-Plus $0.40/$2.40, Qwen3.5-Flash $0.10/$0.40 (BenchLM). Paid — no $0 tier found; standard pay-as-you-go.
- **Architecture:** 397B total / 17B active MoE, 512 experts (8 routed + 1 shared), open weights (DeepInfra).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2: **52.5%** (morphllm GLM-5 vs Qwen 3.5 comparison, 2026)
- BFCL v4 (tool use): **72.9** (same comparison)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (morphllm; corroborated by DeepInfra "88.4 on GPQA Diamond")
- MMLU-Pro: **87.8%** (DeepInfra 2026-04-03, "87.8% on MMLU-Pro")
- MMLU: **88.5%** (morphllm)
- AIME 2026 I: **91.3** (morphllm)
- MathVista: **90.3** (morphllm)
- HLE: no verified public score found
- LCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **45 / #3 among open-weights models** (DeepInfra 2026-04-03)

Coding:

- SWE-bench Verified: **76.4%** (morphllm; DeepInfra "76.4% on SWE-Bench Verified")
- LiveCodeBench v6: **83.6** (morphllm)
- HumanEval: ~85–90% (morphllm, approximate "~85%" claim — treated as proxy only)
- SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks figure published for the 262K window (no long-context retrieval reported)

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 2 52.5% lands in the documented mid band (TB 45–60 → 50–70) and BFCL v4 72.9 is solid, but no Tau3/GDPval/Claw-Eval numbers exist, which caps the score at 65.
- **Reasoning: 80/100.** GPQA Diamond 88.4% is near-frontier (ref 90%+ → 90–100) and AIME 2026 91.3 / MMLU-Pro 87.8 confirm it, but HLE is unreported and the AA Intelligence Index sits at 45 vs the 60+ frontier ref, capping it at 80.
- **Context window: 72/100.** 262K native falls in the 200K–500K tier (65–84; 200K = 70); the 1M extension exists only on the hosted Plus route and no retrieval score at that length is published, so 72.
- **Multimodal: 80/100.** Native image + video input via early-fusion (DeepInfra), text-only output — the +video-in band is 75–90; no audio in and no non-text out keeps it at 80.
- **Coding: 85/100.** SWE-bench Verified 76.4% (top-20 class, near Claude Sonnet 4.6's 79.6) plus LiveCodeBench v6 83.6; missing SciCode/DeepSWE/Vibe rows cap it at 85.
- **Cost efficiency: 90/100.** ~$0.55–$0.60/$3.50–3.60 flagship pricing sits just above the ~$0.60/$2.20 ≈ 92 anchor with a heavier output leg; Flash tier at $0.10/$0.40 would score ~97 if that tier were evaluated.
- **Overall Score: 76/100.** (65 + 80 + 72 + 80 + 85) / 5 = 76.4 → 76 — best-fit as a low-cost open-weights frontier-class workhorse for multimodal reasoning and coding when 262K context suffices.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-03
- Method: public internet research (morphllm comparison, DeepInfra launch/benchmark posts, BenchLM pricing, costgoat/cloudprice/computeprices rate tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
