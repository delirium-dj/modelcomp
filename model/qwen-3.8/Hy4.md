- Source: Alibaba/Qwen3.8 (base model)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8
- **Short description:** Alibaba's 2026-08-03 2.4T-parameter multimodal base model, open-sourced on 2026-08-14. The generation that produced Qwen3.8-Max, 27B, Flash, Omni-Flash and LiveTranslate. A distinct base entry; the `qwen-3.8-2400b-a95b` open-weight checkpoint name is a merged duplicate of `qwen-3.8-max` per the project identity roster, never a separate folder.
- **Provider / access:** 千问 AI 平台 API, 阿里云百炼 / ModelScope (weights `Qwen3.8-2.4T-A95B` freely downloadable from 2026-08-14), 千问 PC/Web clients, 千问办公 enterprise agent (DingTalk IM integration). Also served on Alibaba's 真武 M890 supernode.
- **Release / knowledge:** preview 2026-07-19 (WAIC), official 2026-08-03, open-sourced 2026-08-14; knowledge cutoff: no verified public score found.
- **IDs:** `qwen3.8` family ID; open-weight checkpoint `Qwen/Qwen3.8-2.4T-A95B`. No free Zen ID verified.
- **Context window:** **128K standard**, extendable to **1,000,000 tokens**.
- **Modalities:** text, image, video and document in, text out (native multimodal); autonomous programming, full-stack development, data analysis, Office workflows, 3D animation/CAD, long-horizon multi-agent tasks. No verified audio input or non-text output.
- **Pricing (as of 2026-11-14):** no rate card in the retrieved page — no verified public price found. Open weights allow free self-hosting.
- **Architecture:** **2.4 trillion total parameters**, sparse MoE with **dynamic sparse adaptive gating** and a hybrid attention mechanism; the second open model to exceed 2T parameters. Active parameter count not stated on this base page (the Max variant is 95B active — lineage, not merged).

### Raw benchmarks found

Agent / tool use:

- Arena overall ranking: Qwen ranked just behind Anthropic's Claude series (directional, no number)
- CodeArena: **#4 globally** for Qwen3.8
- Preview testing: from-scratch delivery of a full web + mobile fitness-planning app (product-manager-style requirement analysis, design-skill invocation, domestic-network data-sync redesign); 3D projector demo, browser workflows, game development, 3D CAD modelling; 3D voxel football animation at significantly lower cost than Claude Fable 5
- Leaked benchmarks: collaborative-agent tasks **better than Claude Opus 4.8 Max**; coding ability within **12.6 points** of Claude Fable 5 (leaked, labelled as such)
- Internal evaluation: improved over Qwen3.7-Max on full-stack development, data analysis, Office workflows, complex multi-agent long-horizon tasks
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- CodeArena **#4 globally** as above; strong autonomous programming demonstrated in the preview tests
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 128K native / 1M extended; no MRCR / RULER / GraphWalks figure found — no verified public score found. The derived Qwen3.8-Omni-Flash supports 1M with text/image/audio/video input — a separate model.

### Normalized scores (1–100)

- **Tool use: 89/100.** #4 CodeArena, from-scratch full web+mobile app delivery, better-than-Opus-4.8-Max collaborative-agent results (leaked) and a real enterprise agent product; capped by the leak provenance and no scored agent harness.
- **Reasoning: 87/100.** 2.4T MoE with Arena placing Qwen just behind Claude and improved long-horizon multi-agent performance; capped by no numeric reasoning benchmark for this exact ID.
- **Context window: 89/100.** 128K standard extendable to 1M with long-document/Office/multi-agent workflows; capped by 128K being native rather than 1M and no retrieval benchmark.
- **Multimodal: 89/100.** Native text/image/video/document input with 3D animation, Schwarzschild black-hole simulation, poster and CAD generation; capped by text-only output and no verified audio input.
- **Coding: 89/100.** #4 CodeArena, autonomous full-stack delivery and a within-12.6-point gap to Fable 5 (leaked); capped by no SWE-bench / Terminal-Bench figure and the leak provenance.
- **Cost efficiency: 90/100.** Free open weights for self-hosting, significantly cheaper than Fable 5 on 3D animation tasks, and domestic-supernode serving; capped by no public API rate card. Excluded from Overall.
- **Overall Score: 89/100.** Half-up mean of 89, 87, 89, 89, 89 = 88.6 → 89. Best fit: self-hosted open-weight multimodal agent and full-stack coding workloads with long-document inputs.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Qwen3.8 article (2.4T MoE, 128K→1M context, modalities, CodeArena #4, Arena ranking, open-source timeline, preview case studies), plus the Baidu Baike Qwen3.8-Max article for the separate Max/Omni-Flash identities. Leaked benchmark claims are explicitly labelled as leaks, not verified scores. Identity handling follows the project's generated roster: `qwen-3.8-2400b-a95b` is a merged duplicate of `qwen-3.8-max`, and the parked bare `qwen-3.7` / `qwen-3.5` family names are never scaffolded. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Qwen3.8 — 百度百科 (2.4T architecture, context, modalities, CodeArena, open source)](https://baike.baidu.com/item/Qwen3.8/68311983)
  - [Qwen3.8-Max — 百度百科 (separate Max / Omni-Flash identities)](https://baike.baidu.com/item/Qwen3.8-Max/68312211)
