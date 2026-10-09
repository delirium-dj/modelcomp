# GPT-5.6 Terra — findings by Kimi K3

- Source: OpenAI / GPT-5.6 Terra (`gpt-5.6-terra`)
- Date: 2026-10-09 (UTC) — deep second pass (first pass 2026-09-24; pricing, release date, and output limit now verified)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's balanced mid-tier GPT-5.6 variant, positioned between the flagship Sol tier and the cost-efficient Luna tier (openrouter.ai; siblings Sol/Luna/Cyber). Reasoning model with strong tool use and coding at half of Sol's price.
- **Provider / access:** OpenAI API (`gpt-5.6-terra`, Chat/Responses API; developers.openai.com model docs); OpenRouter with 3 upstream providers (higher-uptime routing) + a half-price `gpt-5.6-terra:batch` variant; kilo.ai and opper.ai (EU hosting, zero data retention) also carry it.
- **Release / knowledge:** Released 2026-07-09 (opper.ai; llm-stats.com says "July 2026"); knowledge cutoff not verified in my sources.
- **IDs:** `openai/gpt-5.6-terra`; openrouter `openai/gpt-5.6-terra` (+`:batch`); no Free-tier ID verified on OpenCode Zen.
- **Context window:** 1,050,000 tokens (openrouter.ai, benchlm.ai; llm-stats.com header says 1.1M — minor listing conflict); max output **128K verified** (openrouter.ai — first pass could not verify).
- **Modalities:** text/image in (MMMU-Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-09):** **verified now** — $2.00/M input, $0.200/M cached, $12.00/M output (llm-stats.com, opper.ai, kilo.ai agree); batch variant $1/$6 (openrouter.ai). Prompts >272K input: 2x input / 1.5x output full-request; cache writes 1.25x uncached input (developers.openai.com docs).
- **Architecture:** proprietary (OpenAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (OpenAI GPT-5.6 page); independent: Vals 77.5%. Terminal-Bench 3.0: **20.8%** (frontierbench.ai)
- Tau2-Bench (τ²-bench): **86.3%** (artificialanalysis.ai); Tau3-Banking: no verified public score found
- GDPval-AA: **1583 Elo** (OpenAI) / **47.7%** normalized (artificialanalysis.ai — first pass cited 46.6%, drifted +1.1)
- BrowseComp: **87.5%**; OSWorld 2.0: **50.2%**; CyberGym: **81.8%**; ExploitGym: **23.2%** (new this pass); Toolathlon: **53.1%** (OpenAI GPT-5.6 page)
- AA ITBench: **51.0%**; APEX-Agents-AA: **38.9%** (new); AA Agentic Index: **43.7%** (artificialanalysis.ai)
- ApprenticeBench (GUI, NeoCognition): **16%** (neocognition.io)
- AA-IFBench (instruction following): **71.2%** (artificialanalysis.ai — new this pass)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (OpenAI); AA 92.5%; Vals 90.9%
- HLE-Verified: **51.1%** (Google DeepMind 3.8 Flash cross-card); AA-HLE 42.9% (artificialanalysis.ai)
- AA-LCR: **83.0%**; CritPt: **30.0%** (artificialanalysis.ai)
- ARC-AGI-1: **96.5%** (ARC Prize verified, Terra Max run); ARC-AGI-2: **83.9%**; ARC-AGI-3: **0.8%** (ARC Prize verified — stark A→A3 collapse)
- Artificial Analysis Intelligence Index: **55.0** (artificialanalysis.ai); BenchLM overall **72.3/100, #14 of 889** (benchlm.ai, 2026-10-09; first-pass snapshot 72.58 #9 of 507)
- AA-Omniscience Index: **0.1%** — Accuracy **46.8%** / Hallucination Rate **87.9%** (artificialanalysis.ai; worst-in-family grounding signal, unchanged)
- FrontierMath (legacy) **84.9%**; FrontierMath v2 Tiers 1–3: **84.9%**; Tier 4: **68.3%** (OpenAI)
- HealthBench Professional: **57.7%** (OpenAI); HealthBench Hard: **32.7%** (GPT-5.6 system card PDF, deploymentsafety.openai.com) — new this pass
- LABBench2: **81.2%** (Google DeepMind 3.8 Flash cross-card) — new this pass
- MMLU-Pro (Vals): **86.7%**

Coding:

- SWE-bench (Vals): **95.4%** (vals.ai); SWE-bench Pro: **63.4%** (OpenAI); SWE-bench Verified (native): no verified public score found
- LiveCodeBench (Vals): **85.9%** (vals.ai)
- CursorBench 3.2: **64.9%**; CursorBench 4.0: **41.3%** (cursor.com — new this pass; a major drop on the newer harness, conflict noted)
- DeepSWE: **69.6%** (OpenAI); FrontierCode 1.1 Extended: **55.8%** (Cognition Devin blog)
- AA-SciCode: **55.0%**; AA Coding Index: **76.7%** (artificialanalysis.ai); VulcanBench v3: **87.0%** (vulcanbench.com)

Long context:

- AA-LCR 83.0% at the 1.05M window (artificialanalysis.ai); no separate MRCR/RULER public score found.

Multimodal:

- MMMU-Pro: **80.7%** / w/ Python 82.0% (OpenAI); AA-MMMU-Pro 80.7% (artificialanalysis.ai). No audio/video/PDF rows found.

### Normalized scores (1–100)

- **Tool use: 84/100.** TB 2.1 87.4%, τ²-bench 86.3%, GDPval-AA 1583/47.7%, CyberGym 81.8%, IFBench 71.2%; capped by TB 3.0 20.8%, ApprenticeBench 16%, ExploitGym 23.2%.
- **Reasoning: 84/100.** GPQA 92.9%, ARC-AGI-1 96.5% / ARC-AGI-2 83.9% (ARC-verified), FrontierMath v2 84.9%/68.3%, LCR 83.0%; capped by catastrophic Omniscience Index (0.1%, hallucination 87.9%) and ARC-AGI-3 0.8%.
- **Context window: 88/100.** 1.05M window with LCR 83.0%; output limit now verified (128K); capped by missing max-window retrieval probes.
- **Multimodal: 74/100.** Vision input with MMMU-Pro ~81–82%; no audio/video/PDF rows and text-only output cap it.
- **Coding: 84/100.** SWE-bench (Vals) 95.4%, LCB (Vals) 85.9%, Coding Index 76.7%, VulcanBench 87.0%; capped by SWE-bench Pro 63.4%, SciCode 55% and the weak CursorBench 4.0 (41.3%).
- **Cost efficiency: 74/100.** Price now verified ($2/$12, $0.20 cached, batch $1/$6) — half of Sol's $4/$20; probability removed, scored on par with Sonnet 5.5's tier/economics. >272K long-prompt multiplier and 87.9% hallucination rate (re-runs cost money) cap it.
- **Overall Score: 83/100.** Half-up mean of the five quality dims (84+84+88+74+84)/5 = 82.8 → 83 (unchanged). Best fit: agentic coding at a below-Sol price where occasional grounding/hallucination risk is tolerable.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: deep second-pass public web research, 3+ independent sources (OpenAI GPT-5.6 launch page + developers.openai.com model docs via search, benchlm.ai 53-row scorecard aggregating Artificial Analysis / Vals AI / ARC Prize / Cognition-Devin / CursorBench / NeoCognition / VulcanBench, plus opper.ai / kilo.ai / openrouter.ai / llm-stats.com pricing listings). Drift/conflicts flagged: GDPval normalized 46.6→47.7%, CursorBench 4.0 41.3% vs 3.2 64.9%, contexts listed as 1.05M vs 1.1M. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
