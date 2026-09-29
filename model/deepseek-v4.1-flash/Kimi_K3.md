# DeepSeek V4.1 Flash — findings by Kimi K3

- Source: DeepSeek / DeepSeek V4.1 Flash (production API ID `deepseek-flash`; open weights `deepseek-ai/DeepSeek-V4.1-Flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's fast open-weight reasoning model of the V4.1 line — first Causal Encoder–Decoder (CED) MoE in the family, with native image understanding and a punchy agentic/coding profile (Terminal-Bench 2.1 90.6%, DeepSWE v1.1 74.2%, Codeforces 3471) at Flash pricing. Model card: huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash.
- **Provider / access:** DeepSeek API + open weights on Hugging Face (MIT), third-party hosts; OpenAI-compatible. Community inference support in progress per DeepSeek.
- **Release / knowledge:** GA 2026-09-09 (release notes); new price schedule effective 2026-09-10 04:00 UTC. Cutoff not verified.
- **IDs:** `deepseek-flash` (production). Retired aliases `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` still resolve but are served by V4.1-Flash at Flash rates; beta ID `deepseek-v4.1-flash-expires-on-0910` is dead. Weights: `deepseek-ai/DeepSeek-V4.1-Flash` (MIT).
- **Context window:** 1M (1,048,576) tokens; max output 384K (official pricing page).
- **Modalities:** text + image in (JPEG/PNG/GIF/WebP per official vision guide); text out; thinking mode on by default (responses expose `reasoning_content`), reasoning effort tiers low/high/max; tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** per 1M tokens, two tiers — off-peak: $0.15 input (miss) / $0.003 cache hit / $0.60 output; peak: $0.30 / $0.006 / $1.20. Peak = 01:00–04:00 and 06:00–10:00 UTC Mon–Fri (excl. Chinese public holidays); all other hours off-peak. Source: api-docs.deepseek.com (verified 2026-09-29).
- **Architecture:** open weights (MIT); 552B-parameter MoE CED backbone — 20 encoder + 20 decoder layers, ~8B active on input, ~16B active on output — plus 196B Engram conditional-memory parameters (tech report §2.1). Global KV cache ~890 bytes/token (~3.9× smaller than V4 Flash).

### Raw benchmarks found

Agent / tool use (vendor-reported at Max effort unless noted; digitalapplied.com reproduction of the DeepSeek launch table):

- Terminal-Bench 2.1: **90.6%** (benchlm.ai; Vals 74.5%); Terminal-Bench 3.0: **30.0%**; Terminal-Bench 4.0: **31.2%**
- CyberGym: **88.1%**; ExploitGym: **15.3%**; SEC-Bench Pro: **62.8%** (benchlm.ai)
- GDPval-AA: **1600 Elo** (55.0% normalized) (benchlm.ai)
- HLE w/ tools: **63.9%**; AA AutomationBench: **68.9%**; Agents' Last Exam: **31.8%** (benchlm.ai)
- Framework spread on the same checkpoint (DeepSeek tech report Table 4): DeepSWE 65.5–74.2% / TB 2.1 84.1–90.6% across Claude Code, Codex, OpenCode, Pi, mini-SWE, DeepSeek Harness variants — harness choice moves scores by up to 8.7 pts.
- Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (GPQA-D) (benchlm.ai)
- HLE: **36.8%** (39.1% text-only subset); AA-HLE: **39.2%** (benchlm.ai)
- AA-LCR: **84.0%**; MLCR-AA: **22.8%**; CritPt: **14.3%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **39.5**; BenchLM overall unranked (partial coverage). Note: digitalapplied.com found no independent AA Index for the released V4.1 checkpoint — treat 39.5 as benchlm-reported, not AA-official.
- AA-Omniscience Index: **−5.3%** — Accuracy **46.4%** / Hallucination Rate **96.5%** (benchlm.ai; worst grounding signal in this cohort)
- Apex (math, MathArena Apex): **65.6%** (benchlm.ai)

Coding:

- Codeforces: **3471** — highest competitive-programming rating in the surveyed cohort (benchlm.ai)
- DeepSWE v1.1: **74.2%** (benchlm.ai)
- NL2Repo: **65.4%**; AA-SciCode: **51.9%**; ProgramBench: **20.3%** (benchlm.ai)
- Terminal-Bench 2.1: **90.6%** (benchlm.ai)
- SWE-bench (Vals/Verified) / LiveCodeBench: no verified public score found

Long context:

- AA-LCR 84.0% at the 1M window (benchlm.ai); no MRCR/RULER public score found.

Multimodal (native vision — the separate vision-exp variant is retired because the capability moved into this model):

- Chartography (tools): **78.9%**; BabyVision w/ Python: **89.6%**; ZeroBench w/ Python (Pass@5): **49.0%**; AA-MMMU-Pro: **77.0%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 84/100.** TB 2.1 90.6%, CyberGym 88.1%, GDPval-AA 1600, AutomationBench 68.9%; capped by TB 4.0 31.2% and ExploitGym 15.3%.
- **Reasoning: 78/100.** GPQA 90.9%, HLE w/ tools 63.9%, LCR 84.0%; benchlm AA Index 39.5 (39–43 band → 78–84, low end taken for hallucination 96.5% and HLE no-tools 36.8%).
- **Context window: 96/100.** Verified 1M window (official docs) with 384K max output and LCR 84.0%; 1M band (95–100), capped by missing MRCR/RULER probes.
- **Multimodal: 70/100.** Native image input (official vision guide) with solid chart/vision-with-tools rows (Chartography 78.9%, BabyVision+Py 89.6%, MMMU-Pro 77.0%); text-only output caps it at the top of the vision-with-image band.
- **Coding: 82/100.** Codeforces 3471 and DeepSWE 74.2% are elite signals; capped by ProgramBench 20.3%, SciCode 51.9% and missing SWE-bench rows.
- **Cost efficiency: 93/100.** Open weights (MIT) plus verified API rates ($0.30/$1.20 peak band → 93); off-peak halves the bill ($0.15/$0.60, cache hit $0.003) — cheapest open frontier-adjacent agentic model verified.
- **Overall Score: 82/100.** Mean of the five quality dims (84+78+96+70+82)/5 = 82.0. Best fit: cheap open-weight agentic terminal coding with native vision and strong competitive-programming chops; watch grounding on open-domain QA.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (api-docs.deepseek.com pricing/vision docs, DeepSeek GA announcement, digitalapplied.com launch-table reproduction, benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: added GA date (2026-09-09/10), production ID `deepseek-flash`, retirement of `deepseek-v4-flash`/`deepseek-v4-flash-vision-exp` aliases, verified peak/off-peak pricing ($0.30/$1.20 peak, $0.15/$0.60 off-peak), 384K max output, 552B CED architecture and MIT open weights; cost 85→93, context 86→96 (1M band rule), multimodal 62→70 (native vision confirmed), reasoning 76→78 (AA-band rule), overall 78→82.
- Future sources: add a new file next to this one using the same headings.
