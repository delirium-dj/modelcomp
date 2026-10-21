# Ling 3.1 Flash — findings by MiniMax M3.1 Flash

- Source: inclusionAI (Ling 3.1 Flash), `inclusionAI/Ling-3.1-flash`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI's October 2026 open-weight (MIT) hybrid-reasoning MoE — 560B total / 25B active, Terminal-Bench 2.1 81.2%, Terminal-Bench 4.0 46.0%, CyberGym 87.9%, GDPval-AA 1618 and an AA Intelligence Index of 41 (#7 of 121), served from $0.075/$0.225 per 1M on OpenRouter.
- **Provider / access:** Hugging Face `inclusionAI/Ling-3.1-flash` (MIT; fp8, 54 shards), OpenRouter `inclusionai/ling-3.1-flash` ($0.075/$0.225 with a 75% provider discount; $0.30/$0.90 on InclusionAI's own API), nano-gpt, Kilo, Vercel, Novita. The OpenCode id `opencode/ling-3.1-flash` **does not exist** — only the free trial slot `opencode/ling-3.1-flash-free` did, and it is now deprecated.
- **Release / knowledge:** 2026-09-29 (models.dev) / 2026-10-01 (AA) / snapshot `ling-3.1-flash-20261002` (OpenRouter) / HF repo created 2026-10-13 — conflicting dates, all cited. Knowledge cutoff not published.
- **IDs:** `inclusionAI/Ling-3.1-flash` (HF), `inclusionai/ling-3.1-flash` (OpenRouter, models.dev).
- **Context window:** **262,144** tokens in the config (`max_position_embeddings`) and on every OpenRouter endpoint; the model card and Artificial Analysis advertise **1M** — conflict flagged.
- **Modalities:** text in / text out only (no image input in this checkpoint).
- **Pricing (as of 2026-10-20):** **$0.075/M in, $0.225/M out, $0.015/M cached** (OpenRouter, 75% off a $0.30/$0.90 list); $0.30/$0.90 via InclusionAI's own API. Self-host $0 (MIT).
- **Architecture:** hybrid-linear MoE, **560B total / 25B active**, 63 KDA + 9 Gated MLA layers (7:1), 4 dense layers, 512 routed experts (top-8) + 1 shared, 64 heads, hidden 4096, vocab 157,184.

### Raw benchmarks found

> Model-card evaluation chart and HF eval yamls (dated 2026-10-13), mirrored by BenchLM, with Artificial Analysis adding the composite row.

Agent / tool use:

- Terminal-Bench 2.1: **81.18%** (card + HF eval yaml) · Terminal-Bench 4.0: **46.03%** (card) / **33.3%** (AA)
- MCP-Atlas: **83.0%** · AutomationBench (public): **52.5%** (card) / **61.7%** (AA) · TAU3-Banking: **47.8%** · GDPval-AA v2.1: **1673** (card) / **1617.91** (AA)
- BrowseComp: **91.67%** · WideSearch: **83.32%** · DRACO: **85.49%** · SkillsBench: **68.70%** · FrontierSWE: **75.16%** · Bench Tool-Agent-User Evaluation: **47.8%** (BenchLM)

Reasoning / knowledge:

- HLE: **37.44%** (card) / **39.43%** (AA) · AA-LCR: **83.0%** (AA) · CritPt: **16.29%** (card) / **18.0%** (AA) · MLCR: **12.2%** (AA)
- Artificial Analysis Intelligence Index: **41** (v4.3.2, #7/121) · output speed **218.5 tok/s**, TTFT 1.93s · 220M output tokens on the index
- Omniscience Accuracy / Hallucination Rate: **29.08% / 37.88%** (AA) — one of the lowest hallucination rates in the dataset
- GPQA Diamond: no verified public score found (not on the card, not on AA)

Coding:

- SWE-bench Pro: **68.74%** · SWE-bench Multilingual: **88.50%** · SWE-Atlas Codebase QnA: **64.51%** (highest in the BenchLM ledger) · DeepSWE: **59.70%** · AA-SciCode: **54.1%** (AA)
- SWE-bench Verified: no verified public score found · LiveCodeBench: no verified public score found

Long context:

- No MRCR / RULER measurement published for Ling 3.1 Flash (the MRCR rows in the Ling 2.6 report belong to Ling 2.6, not this model).

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 81.2%, MCP-Atlas 83.0%, BrowseComp 91.7%, WideSearch 83.3%, DRACO 85.5%, AutomationBench 52.5–61.7% and GDPval-AA 1618–1673 are frontier-tier agentic numbers, capped by τ³-Banking 47.8% and Bench Tool-Agent-User 47.8%.
- **Reasoning: 78/100.** HLE 37.4–39.4%, AA-LCR 83.0%, CritPt 16.3–18.0% and an AA Intelligence Index of 41 are high-band, with a 37.9% hallucination rate; the cap is the absence of any published GPQA figure and a 46.0% TB4.0 that trails the 81.2% TB2.1.
- **Context window: 85/100.** 262,144 configured tokens (1M advertised on the card and by AA) with no published retrieval test — scored at the 1M tier minus the unverified extension.
- **Multimodal: 15/100.** Text-in/text-out only; the vision sibling is Ling 3.0 Flash VL.
- **Coding: 78/100.** SWE-bench Pro 68.7%, SWE-bench Multilingual 88.5%, SWE-Atlas 64.5%, DeepSWE 59.7% and SciCode 54.1% are strong mid-to-high band results, with no SWE-bench Verified or LiveCodeBench figure to add.
- **Cost efficiency: 96/100.** $0.075/M in and $0.225/M out on OpenRouter (a 75% running discount on a $0.30/$0.90 list) is one of the cheapest routes to a frontier-adjacent model, and MIT weights are free to self-host.
- **Overall Score: 68/100.** Mean of the five quality dims = (82 + 78 + 85 + 15 + 78) / 5 = 67.6 → **68**. Best fit: cheap, tool-heavy agentic work and long-horizon code exploration at frontier-adjacent quality.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (inclusionAI Hugging Face model card, config and eval yamls, Artificial Analysis, BenchLM, models.dev, OpenRouter API, OpenCode Zen live model endpoint); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ling_3.2_Flash.md`, using the same headings.
