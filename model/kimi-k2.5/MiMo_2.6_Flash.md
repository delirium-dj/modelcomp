# Kimi K2.5 — findings by MiMo 2.6 Flash

- Source: Moonshot AI (`kimi-k2.5`)
- Date: 2026-11-10 (UTC) — second-pass enrichment re-research (previous 2026-10-13)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-10** (user-approved). Previous Signature
> 2026-10-13 (Overall 81). Fresh source this pass: BenchLM model page
> (snapshot 2026-11-10, overall 52.75, rank #90/1020, **85/804 rows** — the
> K2.5 HF model-card and AA rows are now fully indexed). Changes:
> **Tool use 72→73** (the previous cap "no BFCL figure found" is gone —
> **BFCL v4 68.3%**, plus **Claw-Eval 52.3%**, **τ³-bench 65.7%**,
> independent **AA τ²-bench 95.9%**, DeepSearchQA 77.1, WideResearch 72.7,
> MCP-Tasks 59.1 — the profile went from three thin rows to a real agentic
> set; offset by MCP Atlas **29.5%**, Toolathlon 27.8, GDPval-AA **936 Elo /
> 17%**, and OSWorld-Verified 63.3 recorded but **not credited** — BenchLM
> sources that row from the **K2.6** model card, a likely misattribution),
> **Reasoning 84→85** (the previous cap "no HLE figure for this exact model"
> is gone — **HLE 30.1%** (model card) / 30.7 (AA), below the 40 ref; the
> first math rows are elite: **AIME25 96.1, AIME26 95.8**, HMMT Feb-25
> 96.2 / Nov-25 93.7 / Feb-26 86.0, MMAnswerBench 81.8; offset by AA
> Intelligence Index **23.5**, CritPt **3.1%** and AA-Omniscience net
> **−7.3** [35.2 acc / 65.7 halluc]), Overall 81→**82** (mean 81.2 → 81.6).
> Held: Context 82 (new **AA-LCR 78.0** and re-confirmed LongBench v2 61 —
> decent reasoning-at-context but the window is still 262K and no
> retrieval-at-window figure exists; BenchLM's details table lists **256K** —
> listing conflict noted, HF/Requesty 262K wins), Multimodal 88 (new depth
> suite — OmniDocBench 1.5 **88.8**, MMMU **84.3**, AI2D 90.8, MLVU 85.0,
> independent **AA-MMMU-Pro 75.4** — confirms the profile; no-audio /
> text-only-out cap unchanged), Coding 80 (rows re-confirm; new AA Coding
> Index **46.8** is mid-weak, consistent with the cap; NL2Repo row excluded —
> BenchLM sources it from the **GLM-5.1** card), Cost 82 (pricing unchanged
> at $0.60/$3.00).

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's native multimodal open-weight model with state-of-the-art visual coding capability and a self-directed agent-swarm paradigm; built on Kimi K2 with continued pretraining over ~15T mixed visual and text tokens. Successor to Kimi K2, predecessor to K2.6/K2.7 Code/K3.
- **Provider / access:** Moonshot AI API (`moonshot/kimi-k2.5`); multi-provider (Requesty and aggregators). Chat Completions.
- **Release / knowledge:** January 2026 (Requesty listing date); knowledge cutoff not disclosed.
- **IDs:** `moonshot/kimi-k2.5`; open weights on Hugging Face (MoonshotAI).
- **Context window:** 262K tokens; max output 262K (Requesty); some trackers list 256K.
- **Modalities:** text + image (+ video via multimodal stack) in; text out; non-reasoning base (separate Kimi K2.5 Reasoning variant exists); tool calls; JSON schema; caching; web search.
- **Pricing (as of 2026-10-13):** $0.60 / 1M input, $3.00 / 1M output; cache read $0.10 / 1M (Requesty/Moonshot).
- **Architecture:** open-weight; parameter count not re-verified in this pass (Kimi K2 lineage is 1T-class MoE; K2.5 specific count not disclosed in reviewed sources). License: open (Apache-family per Moonshot releases).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **50.8%** (BenchLM)
- BrowseComp: **60.6%** (BenchLM)
- Toolathlon: **27.8%** (implied by K2.6 DeepInfra card upgrade note 27.8→50.0)
- **BFCL v4: 68.3%** (BenchLM 2026-11-10 — **new; the "no BFCL figure" cap is gone**)
- **Claw-Eval: 52.3%** (official leaderboard row via BenchLM — new); **τ³-bench: 65.7%** (new); **τ²-bench: 95.9%** (Artificial Analysis independent — new, strong)
- DeepSearchQA **77.1%**, WideResearch **72.7%**, MCP-Tasks **59.1%** (new rows)
- GDPval-AA: **936 Elo / 17% normalized** (new, mid-low); MCP Atlas: **29.5%** (new, weak)
- OSWorld-Verified: **63.3%** (BenchLM row — **flagged**: sourced from the **Kimi K2.6** model card, likely misattributed to K2.5; recorded, not credited)
- Agent Swarm paradigm: self-directed multi-agent orchestration (K2.5 baseline for K2.6's 300-sub-agent upgrade)

Reasoning / knowledge:

- GPQA Diamond: **87.6%** (BenchLM)
- MMLU-Pro: **87.1%** (BenchLM Reasoning variant row)
- SuperGPQA: **69.2%** (BenchLM)
- LongBench v2: **61%** (BenchLM)
- **HLE: 30.1%** (K2.5 model card) / **30.7%** (AA) — **new; the "no HLE figure" cap is gone**, but below the 40 reference (K2.6 reported 36.4% closed / 54.0% with tools)
- First math rows (BenchLM 2026-11-10 — new): **AIME 2025: 96.1%**, **AIME 2026: 95.8%**, HMMT Feb-25 **96.2%** / Nov-25 **93.7%** / Feb-26 **86.0%**, **MMAnswerBench 81.8%**
- **AA Intelligence Index: 23.5** (v5.0.1 — mid); **CritPt: 3.1%** (weak); **AA-Omniscience: net −7.3** (accuracy 35.2, hallucination 65.7) — negative-net factuality
- **AA-LCR: 78.0%** (Artificial Analysis — new; long-context reasoning, not retrieval-at-window)

Coding:

- SWE-bench Verified: **76.8%** (BenchLM; #34–35 on BenchLM SWE-V table)
- LiveCodeBench v6: **85.0%** (BenchLM; strong for open-weight class)
- SWE-bench Pro: **50.7%** (BenchLM)
- SWE Multilingual: **73%** (BenchLM)
- SWE-Rebench: **58.5%** (BenchLM)
- React Native Evals: **77.2%** (BenchLM)
- SciCode: **48.7%** (BenchLM)
- Vibe Code Bench: **17.54%** (BenchLM Reasoning row; weak spot)
- **AA Coding Index: 46.8** (Artificial Analysis, via BenchLM 2026-11-10 — new, mid-weak)
- BenchLM's NL2Repo row is sourced from the **GLM-5.1** model card — excluded as misattributed.

Multimodal:

- MMMU-Pro: **78.5%** (BenchLM)
- Video-MME: **87.4%** (BenchLM)
- MMVU: **80.4%** (BenchLM)
- VideoMMMU: **86.6%** (BenchLM)
- New depth rows (Qwen comparison tables via BenchLM 2026-11-10): **OmniDocBench 1.5: 88.8**, **MMMU: 84.3**, AI2D 90.8, MLVU (M-Avg) 85.0; **AA-MMMU-Pro: 75.4%** (Artificial Analysis independent — slightly under the vendor 78.5)

### Normalized scores (1–100)

- **Tool use: 73/100.** The previous cap "no BFCL figure" is gone — BFCL v4 **68.3%** — and the agentic profile is now genuinely populated: Claw-Eval **52.3%**, τ³-bench **65.7%**, independent AA τ²-bench **95.9%**, DeepSearchQA 77.1, WideResearch 72.7, MCP-Tasks 59.1, alongside the recorded Terminal-Bench 2.0 50.8 and BrowseComp 60.6 → 73 (was 72). Capped by Toolathlon 27.8, MCP Atlas 29.5, GDPval-AA 936 Elo / 17%, still no TB4/OSWorld-class row that can be credited (BenchLM's OSWorld-Verified 63.3 is sourced from the **K2.6** card — flagged as misattributed, not counted).
- **Reasoning: 85/100.** GPQA 87.6 and MMLU-Pro 87.1 now backed by the first math suite — **AIME25 96.1, AIME26 95.8**, HMMT trio 96.2/93.7/86.0, MMAnswerBench 81.8 — and the "no HLE figure" cap is filled (**30.1** card / 30.7 AA) → 85 (was 84). Held down by HLE under the 40 ref, AA Intelligence Index 23.5, CritPt 3.1% and AA-Omniscience net **−7.3** (65.7% hallucination).
- **Context window: 82/100.** 262K (HF/Requesty; BenchLM's table lists 256K — listing conflict noted) with LongBench v2 61 and the new **AA-LCR 78.0** — solid long-context reasoning, but still well below the 1M+ frontier class and with no retrieval-at-window figure to score higher.
- **Multimodal: 88/100.** Native text+image+video with Video-MME 87.4, VideoMMMU 86.6, MMVU 80.4 and now documented depth — OmniDocBench 1.5 88.8, MMMU 84.3, AI2D 90.8, MLVU 85.0, independent AA-MMMU-Pro 75.4 — exceptional for an open-weight model; capped only by no audio modality (and text-only output).
- **Coding: 80/100.** LiveCodeBench v6 85.0 is elite, SWE-V 76.8 strong, SWE-Pro 50.7 respectable — unchanged this pass (new AA Coding Index 46.8 is mid-weak and consistent with the cap; the NL2Repo row is excluded, BenchLM sources it from GLM-5.1). Capped by Vibe Code Bench 17.54% and still trailing the K2.6/K3 generation on agentic coding.
- **Cost efficiency: 82/100.** $0.60/$3.00 with open weights and $0.10 cache reads is excellent value for a multimodal agentic model; self-hostable. Capped by 397B+-class serving cost if self-hosted (Kimi lineage is large MoE). Pricing unchanged this pass.
- **Overall Score: 82/100.** Mean of (73 + 85 + 82 + 88 + 80) / 5 = 408/5 = 81.6 → **82**. Best-fit recommendation: open-weight multimodal workhorse with elite video understanding, now a measured math suite and a filled-in tool profile (BFCL, Claw-Eval, τ²/τ³) — ideal when you need vision+video+agentic tool use on a budget; upgrade to K2.6/K3 for harder agentic long-horizon work.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-11-10
- Method: second-pass enrichment re-research (public internet research: BenchLM model page snapshot 2026-11-10 with per-row provenance — Kimi K2.5 HF model card, Artificial Analysis rows on the v5.0.1 scale, official Claw-Eval leaderboard, Qwen comparison tables for the vision/math suites — checked against the 2026-10-13 sources: BenchLM comparison pages, Requesty provider listing, DeepInfra K2.6 API review, Vals AI K2.6 update note); scores are normalized 1–100 interpretations, not official vendor scores. Previous Signature 2026-10-13.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
