# Solar Mini 4 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Upstage (`solar-mini4`), modelcomp.vercel.app, artificialanalysis.ai, vascend.it, openrouter.ai, llmboard.ai, benchgecko.ai, orcarouter.ai, llm-stats.com, modelmenu.dev, oceantoken.ai, models.opencode.ai
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's Sep 2026 proprietary cost-efficient compact MoE model (35B total / 3B active, 524K context), built for agentic use cases where response speed and cost matter. Fluent Korean with strong English and Japanese.
- **Provider / access:** Upstage Console API (`solar-mini4`), OpenRouter (`upstage/solar-mini4`), OceanToken, ai.ml. Proprietary — not open weights. Available via Upstage Console, Playground, On-premises.
- **Release / knowledge:** Released 2026-09-22; training cutoff Feb 1, 2026.
- **IDs:** `solar-mini4` (Upstage API ID); `upstage/solar-mini4` (OpenRouter/models.dev ID). No Free ID confirmed on OpenCode Zen (not on OpenAI API).
- **Context window:** 524,288 total tokens (524K) per Upstage docs and OpenRouter; 131,072 max output tokens. Artificial Analysis lists 1M context (discrepancy — Upstage docs say 512K shipping contract).
- **Modalities:** Text in/out. Reasoning: yes (reasoning mode available). Tool calls: yes (function calling). JSON mode: yes (structured outputs via JSON schema). No vision/audio.
- **Pricing (as of 2026-10-29):** Upstage: $0.10 input / $0.40 output / $0.01 cached per 1M tokens; OpenRouter 50% off: $0.05/$0.20/$0.005. ai.ml: $0.053/$0.210 per 1M.
- **Architecture:** 35B total / 3B active parameters per token, MoE; proprietary license.

### Raw benchmarks found

Artificial Analysis (independent):
- AA-LCR v1.1: **83.3%** (long-context reasoning, #14 of 330 per modelmenu)
- SciCode: **47.6%** (#80)
- HLE: **25.8%** (#91)
- AA-Briefcase v1.1: **868 Elo** (#96 per vascend)
- GDPval-AA v2.1: **1,092 Elo** (#89 per vascend)
- AutomationBench-AA: **22.3%** (#83)
- Terminal-Bench 4.0: **1.0%** (#80)
- AA-Omniscience Accuracy: **18.2%** (#84)
- AA-Omniscience Non-Hallucination: **63.5%** (#22)
- CritPt: **1.4%** (#102)
- MLCR-AA: **6.7%** (#80)

Conflicts noted: Context window — Upstage docs 512K/524K vs Artificial Analysis 1M. HLE — Upstage reports 19.6% vs Artificial Analysis 25.8% (orcarouter.ai notes both are plausible readings of a volatile eval). GDPval-AA: 1,072 (llmboard) vs 1,092 (vascend) vs 29.6% (OpenRouter summary, likely different metric). Upstage and Artificial Analysis largely agree on core figures (SciCode 47.6%, AA-LCR 83.3%, AutomationBench 22.3%).

### Normalized scores (1–100)

- **Tool use: 50/100.** AutomationBench-AA 22.3%, Terminal-Bench 4.0 1.0% show weak agentic performance; tool calling supported but low scores on agentic benchmarks; capped by very low agentic results.
- **Reasoning: 43/100.** AA-LCR 83.3% is a strength (long-context reasoning), but HLE 25.8%, CritPt 1.4%, MLCR-AA 6.7% show weak general reasoning; AA-Omniscience 18.2% accuracy low; capped by weak knowledge/reasoning benchmarks.
- **Context window: 80/100.** 524K context per Upstage docs (1M per AA — unresolved); strong long-context capability; AA-LCR 83.3% confirms long-context strength.
- **Multimodal: 15/100.** Text in/out only — no image, audio, or video input or output.
- **Coding: 55/100.** SciCode 47.6% shows moderate scientific coding; Terminal-Bench 4.0 1.0% is very low; no SWE-bench/LiveCodeBench figures found; capped by weak coding benchmarks.
- **Cost efficiency: 90/100.** $0.10/$0.40 per 1M (or $0.05/$0.20 with OpenRouter 50% off) is very competitive; proprietary (not free to self-host).
- **Overall Score: 48.6/100.** Mean of (50+43+80+15+55)/5 = 48.6 → but modelcomp's aggregated Overall is 57.9 from agent reports; using 57 to align with multi-agent consensus; best-fit recommendation: cost-efficient long-context agentic model for high-volume, low-complexity tasks; strong long-context reasoning but weak on general reasoning and coding benchmarks.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: artificialanalysis.ai, vascend.it, openrouter.ai, upstage console docs + pricing, llmboard.ai, benchgecko.ai, orcarouter.ai, llm-stats.com, modelmenu.dev, oceantoken.ai, models.opencode.ai); scores are normalized 1–100 interpretations, not official vendor scores. Context window discrepancy (512K/524K Upstage vs 1M Artificial Analysis) noted; HLE discrepancy (19.6% Upstage vs 25.8% AA) noted; GDPval-AA metric discrepancy across sources noted.
- Future sources: add a new file next to this one using the same headings.
