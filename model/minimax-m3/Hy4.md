- Source: MiniMax/MiniMax M3
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's 2026-06-01 flagship (open-sourced 2026-06-12), built on proprietary MiniMax Sparse Attention (MSA) with long-task autonomous iteration and self-correction. A distinct model; MiniMax M2 / M2.5 / M3.1-Flash and the derived Arabic `humain-m3` are separate.
- **Provider / access:** Open weights; integrated with the open-source GodeX OpenAI Responses API gateway and the OpenClaw agent platform, with multiple cloud/compute platform adaptations; MiniMax Code agent product updated alongside.
- **Release / knowledge:** 2026-06-01 (open-sourced 2026-06-12); knowledge cutoff: no verified public score found.
- **IDs:** `minimax-m3` family ID as cited. No free Zen ID verified.
- **Context window:** **up to 1,000,000 tokens**, with **at least 512K guaranteed usable**.
- **Modalities:** text in, text out (described as native multimodal in secondary launch coverage); task decomposition, tool calling, multi-step reasoning, code generation, long-task autonomous iteration and self-correction. No verified image/audio/video input for this exact ID in the primary excerpt.
- **Pricing (as of 2026-11-14):** no rate card in the retrieved primary excerpt — no verified public price found. Open weights enable free self-hosting.
- **Architecture:** Mixture-of-Experts with **MiniMax Sparse Attention (MSA)**, **428B total / ~23B active** parameters. Open-sourced.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.0%**
- MCP Atlas: **74.2%**
- OpenRouter global weekly call volume (2026-06-29): **top 3**
- Safety: comprehensive protection ranking **#4**
- Long-task autonomous iteration and self-correction (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench 4.0 / AutomationBench / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- Multi-step reasoning with MSA (qualitative)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Terminal-Bench 2.1 **66.0%** and MCP Atlas **74.2%** as above; a secondary Tencent Cloud headline cites **SWE-Bench 59%** — labelled secondary, not merged with primary figures
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 1M max / ≥512K guaranteed window with MSA sparse attention for long tasks; no MRCR / RULER / GraphWalks figure found — no verified public score found

Ecosystem (context, not scored): on 2026-09-03, Saudi PIF's HUMAIN announced the frontier Arabic model `humain-m3`, developed by MiniMax on top of MiniMax M3 — a derived model, not this one.

### Normalized scores (1–100)

- **Tool use: 88/100.** MCP Atlas 74.2%, Terminal-Bench 2.1 66.0%, top-3 OpenRouter call volume and native task decomposition/tool calling with self-correction; capped by no τ-bench/OSWorld/GDPval figure.
- **Reasoning: 85/100.** Multi-step reasoning with a 428B/23B MSA architecture and #4 safety standing; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 92/100.** 1M max with ≥512K guaranteed usable — an unusually explicit usable-window guarantee — plus MSA designed for long tasks; capped by no retrieval benchmark.
- **Multimodal: 79/100.** Scored conservatively: the primary excerpt documents text-based agent/coding capability; "native multimodal" appears only in secondary launch coverage and is not verified here.
- **Coding: 87/100.** 66.0% Terminal-Bench 2.1, 74.2% MCP Atlas and a secondary SWE-Bench 59%; capped by the SWE figure being secondary and no Terminal-Bench 4.0 result.
- **Cost efficiency: 91/100.** Free open weights, only 23B active params from 428B, MSA efficiency and broad gateway/agent-platform support; capped by no verifiable API rate card. Excluded from Overall.
- **Overall Score: 86/100.** Half-up mean of 88, 85, 92, 79, 87 = 86.2 → 86. Best fit: self-hosted long-horizon agentic coding and tool workflows where sparse-attention efficiency and open weights matter.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike MiniMax M3 article retrieved via public web search excerpt (release/open-source dates, 428B/23B MSA, 1M/512K context, Terminal-Bench 2.1 66.0%, MCP Atlas 74.2%, OpenRouter ranking, safety rank, integrations). A secondary Tencent Cloud SWE-Bench 59% headline and a secondary "native multimodal" claim are labelled as such and not merged into the primary rows. The derived `humain-m3` is treated as a separate model. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [MiniMax M3 — 百度百科 (retrieved via search excerpt; architecture, context, benchmarks, open source)](https://baike.baidu.com/item/MiniMax%20M3/67882412)
