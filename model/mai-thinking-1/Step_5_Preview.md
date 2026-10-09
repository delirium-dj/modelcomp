# MAI-Thinking-1 — findings by Step 5 Preview

- Source: Microsoft AI (`MAI-Thinking-1`, public preview 2026-08-12)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1 (Microsoft AI's first reasoning model)
- **Short description:** The first fruit of Microsoft's **"hill-climbing machine"** — a development loop that treats model building as a system-level optimization problem. MAI-Thinking-1 is a 35B-active / ~1T-total sparse MoE (base: MAI-Base-1) trained from scratch on 8,000 GB200 GPUs in Microsoft's own Azure cluster on 30T tokens of in-house, commercially licensed, distillation-free data, then post-trained with SFT plus RL across 8M+ environments (verifiable reasoning, software engineering, tool use, instruction following). Microsoft's claim is that its 35B-active footprint matches Claude Opus 4.6 on SWE-Bench Pro (52.8%) while costing less to serve, with AIME 2025 97.0%, AIME 2026 94.5%, LiveCodeBench v6 87.7% and GPQA 84.2% — and in Surge's 1,276-task blind side-by-side, professional raters preferred it over Claude Sonnet 4.6 (though not Opus 4.6).
- **Provider / access:** Microsoft Foundry / Azure AI Foundry (private preview from June, public preview 2026-08-12); Chat Completions API.
- **Release:** 2026-06-02 (announced), 2026-08-12 (public preview).
- **Context window:** 200K tokens (some catalogs list 256K).
- **Modalities:** Text in → text out; function calling, developer instructions, adaptive reasoning effort.
- **Pricing:** "best price-to-performance ratio in its weight class" per Foundry — no per-token rate card published in the launch materials.
- **Architecture:** sparse MoE, 35B active / 1T total; scaling-focused pre-training framework; log-linear RL improvement over thousands of steps.

### Raw benchmarks found

Vendor (technical report / launch; post-trained model):

- SWE-bench Pro (public): **52.8%** (positioned as matching Claude Opus 4.6)
- SWE-bench Verified: **73.5%**; Terminal-Bench 2.0: **46.0%**
- AIME 2025: **97.0%** (Foundry Labs page cites 95.9%); AIME 2026: **94.5%**
- LiveCodeBench v6: **87.7%**; HMMT February 2026: **84.9%**
- GPQA Diamond: **84.2%**; MMLU-Pro: **85.0%**; Multi-Challenge: **53.0%**

Third-party:

- Surge blind human evaluation (1,276 tasks, single + multi-turn): preferred over **Claude Sonnet 4.6**, trailing Claude Opus 4.6
- No Artificial Analysis / Epoch AI independent run surfaced yet (Foundry private/public preview only); no HLE, ARC-AGI, MCP Atlas, GDPval or SWE-Pro reproduction by an independent lab

### Normalized scores (1–100)

- **Tool use: 56/100.** Terminal-Bench 2.0 46.0% and Multi-Challenge 53.0% are the only agentic numbers; the 8M+ RL environments targeted tool use specifically, but no τ³, MCP Atlas or GDPval figure exists — mid-band on evidence.
- **Reasoning: 70/100.** AIME 94.5–97.0%, GPQA 84.2%, MMLU-Pro 85.0% and HMMT 84.9% are solid upper-mid-band; no HLE or ARC-AGI number and no independent lab run keep it out of the frontier tier.
- **Context window: 72/100.** 200K (256K in some catalogs) is the 200K–500K band (65–84) with no published retrieval curve (no MRCR/RULER/AA-LCR).
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20).
- **Coding: 64/100.** SWE-bench Verified 73.5%, SWE-Pro 52.8% (Opus-4.6-matching claim) and LiveCodeBench 87.7% are respectable mid-upper; Terminal-Bench 2.0 46.0% is the weak row.
- **Cost efficiency: 85/100.** A 35B-active inference footprint with a claimed "best price-to-performance ratio in its weight class" — the methodology's ~$1.25/$4.25 ≈ 88 range by inference; docked because no per-token rate card is actually published.
- **Overall Score: 55/100.** Best-fit recommendation: Microsoft's clean-data reasoning model — Opus-4.6-class SWE-Pro at 35B active, SOTA-in-class math, and a Surge preference win over Sonnet 4.6; a Microsoft-Foundry-only release whose independent eval record is still empty.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Microsoft AI launch post + technical report + model card, Microsoft Foundry/Azure catalog, Surge evaluation writeup, LLM Reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MAI_Thinking_2.md`, using the same headings.
