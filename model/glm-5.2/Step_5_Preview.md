# GLM-5.2 — findings by Step 5 Preview

- Source: Z.ai / Zhipu (`glm-5.2`, weights `zai-org/GLM-5.2`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2 (Z.ai, formerly Zhipu AI)
- **Short description:** Z.ai's June 2026 open-weight flagship built for long-horizon tasks — a ~753B-parameter MoE model (744B-A40B; 256 experts, 8 active → ~40B active/token) that pairs a genuinely usable 1M-token context with MIT licensing ("pure open", no regional limits) and two thinking-effort levels (`high`/`max`, default `max`). It is the strongest open-source model on long-horizon coding, trailing Claude Opus 4.8 by 1% on FrontierSWE while beating GPT-5.5, and is the first open-weights model to cross 80% on Terminal-Bench 2.1. New IndexShare architecture (one indexer reused across every four sparse-attention layers) cuts per-token FLOPs 2.9× at 1M context, with an improved MTP layer (+20% speculative-decoding acceptance). Available day-one in Claude Code, Cline, Kilo Code, OpenClaw, Crush, Factory and 20+ coding environments.
- **Provider / access:** Z.ai API, OpenRouter (25 providers), DeepInfra, Hugging Face/ModelScope open weights; GLM Coding Plan subscriptions (Lite $12.60/mo, Pro $50.40/mo, Max $112/mo).
- **Release:** 2026-06-16 (weights on HF 2026-06-13).
- **Context window:** 1,048,576 tokens (max output 131,072).
- **Modalities:** Text in → text out (no vision in this weights release); JSON output and function calling; English and Chinese.
- **Pricing (as of 2026-10-09):** Z.ai API $1.40/M input, $4.40/M output (cached input $0.26); OpenRouter market $0.95–$3.00 in / $3.00–$10.25 out (DeepInfra floor $0.95/$3.00, DataLLM $0.72/$2.27); MIT weights free to self-host.
- **Architecture:** MoE, DeepSeek Sparse Attention + IndexShare; DSA inherited from GLM-5.

### Raw benchmarks found

Vendor-reported (HF/technical report, all reasoning at default `max` effort where stated):

Reasoning:

- HLE: **40.5** (text-only subset; behind Opus 4.8 49.8 and Gemini 3.1 Pro 45.0, ahead of GPT-5.5 41.4 — note the *-marked rivals are full-set scores)
- HLE w/ tools: **54.7** (300K context; Opus 4.8 57.9*, GPT-5.5 52.2*)
- CritPt: **20.9** (ties Opus 4.8, behind GPT-5.5 27.1)
- AIME 2026: **99.2** (best in table; Opus 4.8 95.7, GPT-5.5 98.3, Gemini 3.1 Pro 98.2)
- HMMT Nov 2025: **94.4**; HMMT Feb 2026: **92.5** (behind GPT-5.5/Opus 4.8 96.7)
- IMOAnswerBench: **91.0** (best in table)
- GPQA-Diamond: **91.2** (frontier cluster: Opus 4.8 93.6, GPT-5.5 93.6, Gemini 3.1 Pro 94.3)

Coding / agentic:

- SWE-bench Pro: **62.1** (best in table; Opus 4.8 69.2, GPT-5.5 58.6, Qwen3.7-Max 60.6)
- Terminal-Bench 2.1 (Terminus-2): **81.0** (Opus 4.8 85.0, GPT-5.5 84.0, Gemini 3.1 Pro 74.0); best-harness run: **82.7** (Claude Code)
- DeepSWE: **46.2** (Opus 4.8 58.0, GPT-5.5 70.0); NL2Repo: **48.9**; ProgramBench: **63.7**
- FrontierSWE dominance: **74.4** (1M ctx, max effort — near-tie with Opus 4.8 75.1, beats GPT-5.5 72.6)
- PostTrainBench: **34.3** (second only to Opus 4.8 37.2); SWE-Marathon: **13.0** (second only to Opus series 26.0)
- MCP-Atlas public set: **76.8** (Opus 4.8 77.8, GPT-5.5 75.3); Tool-Decathlon: **48.2**
- Artificial Analysis Intelligence Index: **51**; OpenRouter: better than 88% of models on intelligence, 87% on coding, 90% on agentic

Third-party / independent:

- DataLLM Lab executed coding benchmark: **9/9 tasks** (clean sweep), ~560 reasoning tokens/task, 12.3 s avg, ~$1.99 per 1,000 tasks at July 2026 pricing (vendor scores not independently reproduced by them)
- Benchable: **97% reliability**, perfect hallucination handling (acknowledges uncertainty), instruction-following 82nd pct, reasoning 75th pct, general knowledge 28th pct, speed 16th pct
- Design Arena: **1st place, Elo 1360** (crowdsourced design tasks, beating Claude Fable 5)

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP-Atlas public set 76.8 and HLE-with-tools 54.7 are frontier-cluster tool-use results (above GPT-5.5 on both); Tool-Decathlon 48.2 trails the very top (Opus 4.8 59.9), keeping it just under the frontier band.
- **Reasoning: 86/100.** GPQA-Diamond 91.2%, AIME 2026 99.2%, IMOAnswerBench 91.0% and HLE 40.5% put it in the frontier band on knowledge/reasoning; HMMT Feb 92.5% and CritPt 20.9% lag Opus 4.8/GPT-5.5, and AA Intelligence Index 51 is above the open-weight median but not class-leading.
- **Context window: 95/100.** A verified, "solid" 1M-window — the three long-horizon benchmarks (FrontierSWE, PostTrainBench, SWE-Marathon) were all run at 1M context with 128K output and months of long-horizon training, which is exactly the ≥1M + retrieval-demonstrated-at-scale case worth 95–100; docked slightly because Z.ai publishes no MRCR/RULER curve and its own card concedes SWE-Marathon "has room to grow."
- **Multimodal: 12/100.** Text-only (text in → text out) in this weights release — the methodology's text-only band (10–20); no image/video/audio input at all.
- **Coding: 84/100.** The strongest open-source coding model: TB2.1 81.0–82.7 (first open model over 80%), SWE-bench Pro 62.1 (best in its comparison table), FrontierSWE 74.4 (near-tie with Opus 4.8), PostTrainBench 34.3, and an independent 9/9 executed-benchmark sweep; short of the frontier band on DeepSWE 46.2, NL2Repo 48.9 and SWE-Marathon 13.0.
- **Cost efficiency: 88/100.** MIT open weights with a real provider market ($0.95–$1.40 in / $3.00–$4.40 out, cached input as low as $0.18–$0.26) — roughly a seventh of Opus 4.8's input price; developer subscriptions from $12.60/mo; output-heavy reasoning styles and max-effort token burn (up to ~85K tokens/task) are the cost risk.
- **Overall Score: 71/100.** Best-fit recommendation: the best open-weights long-horizon coding/engineering model — project-scale 1M-context agentic coding at a fraction of frontier pricing, MIT-licensed and self-hostable; buy it for code and long documents, not for multimodal work.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Z.ai docs + Hugging Face model card + GitHub README + VentureBeat launch coverage, Artificial Analysis/OpenRouter, DeepInfra, DataLLM Lab independent benchmark, Benchable); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_6.md`, using the same headings.
