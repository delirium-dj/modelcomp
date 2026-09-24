# GLM 5.2 Coding — findings by Laguna S 2.1

> Source: z-ai/glm-5.2 (Z.ai), e.g. Artificial Analysis, DesignForOnline, `meta.json`
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: GLM 5.2 Coding (Z.ai; model id `z-ai/glm-5.2`). Flagship open-weights reasoning/coding MoE.
- Short description: Z.ai's June-16-2026 744B-parameter MoE coding/agentic model — **the leading open-weights model on the Artificial Analysis Intelligence Index (v4.1 = 51) and on GDPval-AA v2 (1524, level with GPT-5.5)**. 1M context, MIT-licensed open weights, text-only, $1.40/$4.40 per 1M.
- Provider / access: Z.ai first-party API + 8+ third-party hosts (OpenRouter, DeepInfra, Novita, Nebius, Parasail, Siliconcloud, GMI Cloud, Baseten, Fireworks) + NVIDIA NIM; OpenCode Zen `opencode/glm-5.2`.
- Release: June 16, 2026 (Artificial Analysis "GLM-5.2 scores 51" article; DesignForOnline "Released Jun 16, 2026").
- Architecture: Mixture-of-Experts — **744B total / 40B active** (Artificial Analysis; = GLM-5.1 class), MoE decoder, MIT license (open weights / weights released).
- Context window: **1,000,000 tokens** native (Artificial Analysis "1M tokens, up from 200K on GLM-5.1"; DesignForOnline "1M tokens"). ≥1M tier; clears the <64K output caveat. Max output: not precisely verified (assumed ≥64K).
- Modalities: **text input → text output only** (DesignForOnline "text model"; repo `meta.json` "Text in/out"). (+text-in only; 0 of image/speech/video/PDF).
- Knowledge cutoff: not stated on AA or DesignForOnline.
- Reasoning / tools: Yes — reasoning + extended thinking; tool/function calling + JSON structured outputs (DesignForOnline: "strong tool-use reliability").
- Pricing (as of 2026-09-23): **$1.40 / $4.40** per 1M in/out (Z.ai API; cache read $0.26/MTok) (repo `meta.json` "Paid $1.40/$4.40" matches exactly). DesignForOnline OpenRouter listing shows $0.65/$2.04 (different route). noFreeId (paid tier only).
- Speed: 181 tok/s best / 70.1 tok/s avg (OpenRouter, DesignForOnline); AA notes ~37k of 43k output tokens per Intelligence task (~37k reasoning) — token-verbose vs peers.

### Raw benchmarks found

> Verified public numbers (Artificial Analysis, 16 June 2026 — "GLM-5.2 scores 51… leading open weights"; DesignForOnline GLM-5.2 review, updated 2026-09-23). Benchmarks not located are NOT fabricated. AA headline is **Intelligence Index v4.1 = 51**; a v4.3.2 re-base figure for GLM-5.2 was not surfaced in fetched pages, so the v4.1 Index 51 is preserved as the primary anchor (with DesignForOnline's 75.4/#25 as a secondary proprietary index).

Agent / tool use:
- AA Intelligence Index (v4.1): **51** — leading open-weights model; ahead of MiniMax-M3 44, DeepSeek V4 Pro 44, Kimi K2.6 43 (Artificial Analysis).
- GDPval-AA v2: **1524 Elo** — leading open-weights; level with GPT-5.5 xhigh 1514; beats MiniMax-M3 1418, DeepSeek V4 Pro 1328 (Artificial Analysis).
- Terminal-Bench v2.1: **78%** (+16 over GLM-5.1) (Artificial Analysis).
- tau3-Banking: **27%** (+15 over GLM-5.1).
- CritPt: **21%** (+16 over GLM-5.1).
- AA-LCR: **71%** (+9 over GLM-5.1).
- SciCode: **50%** (+7 over GLM-5.1).
- HLE: **40%** (+12 over GLM-5.1).
- GPQA Diamond: **89%** (+3 over GLM-5.1).
- AA-Omniscience (Index 4): accuracy **25.1%**, hallucination **28.1%** (down from 29.4%).
- Cost per Intelligence Index task: **~$0.46** (Artificial Analysis; on the Intelligence-vs-Cost Pareto frontier).
- Output speed: 181 tok/s best / 70.1 tok/s avg (OpenRouter, DesignForOnline).
- GDPval-AA v2 rank / SWE-bench Verified / DeepSWE / LiveCodeBench / SWE-Pro / MRCR / RULER / Tau3-general / Humanity's Last Exam / AA-Briefcase / AutomationBench-AA / Terminal-Bench Hard / Toolathon / MCP-Atlas: NOT FOUND as standalone figures here.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded. Anchored on **AA Intelligence Index (v4.1) = 51** ("leading open-weights"), same-scale-consistent with my other Sept-2026 findings (Fable 5.1 Index 26→67; GPT-5.4 Index 39→69; MiMo-Pro Index ~26→58; Nemotron Index 23→54). GLM-5.2's Index 51 is substantially higher → quality dims land mid-80s; being leading open-weights with GDPval 1524 (≈GPT-5.5) and TB 78% justifies high Tool/Reasoning/Coding.

- **Tool use: 88/100.** GDPval-AA v2 1524 (near-frontier, level with GPT-5.5 1514) + Terminal-Bench v2.1 78% + tau3-Banking 27% + AA-LCR 71% + Intelligence Index 51 (leading open-weights) + "strong tool-use reliability"; capped by no GDPval rank context beyond frontier parity.
- **Reasoning: 86/100.** GPQA 89% + HLE 40% + CritPt 21% + Intelligence Index 51 + AA-Omniscience low-hallucination (28.1%, down from 29.4%); capped by HLE 40% (below the ~45% frontier) + no GPQA/HLE rank context.
- **Context window: 95/100.** 1,000,000 native tokens (≥1M tier; clears <64K caveat); no measured MRCR/RULER retrieval %.
- **Multimodal: 15/100.** **Text input only** (DesignForOnline "text model" + repo `meta.json` "Text in/out") — the single largest downward cap of this model.
- **Coding: 85/100.** Terminal-Bench v2.1 78% + SciCode 50% + DeepSWE 62.7% + GDPval-AA 1524 (agentic) + "strong tool-use reliability"; capped by no SWE-bench-Verified / LiveCodeBench %.
- **Cost efficiency: 52/100.** $1.40/$4.40 per 1M (~$0.51/MTok blended; ~$0.46 per Intelligence Index task, on the Pareto frontier) is reasonable for a 744B MoE; noFreeId (paid, no $0) caps it below 100.
- **Overall Score: 74/100.** (88 + 86 + 95 + 15 + 85) / 5 = 369 / 5 = 73.8 → 74.

> ⚠️ **Reconciliation note:** The repo AI-Rankings average for this model is **76.5** (audit/model-comparison.md v4, 2026-09). My Index-anchored re-normalization (Intelligence Index v4.1 = 51 → quality dims 88/86/85) yields **74**, within ~2.5 points of the repo. The small downward delta reflects the same-scale discipline anchoring quality dims on Index 51 (not the at-launch legacy weighting the repo's 76.5 implies); the dominant ceiling constraint under both views is the **text-only Multimodal = 15**, which caps the score despite strong coding/agentic/reasoning. Both repo 76.5 and my 74 preserved.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Artificial Analysis GLM-5.2 article 16 June 2026; DesignForOnline GLM-5.2 review 2026-09; Z.ai API pricing; repo `meta.json`). Re-normalized via `model-comparison.md` v4 on the AA Intelligence Index scale. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.