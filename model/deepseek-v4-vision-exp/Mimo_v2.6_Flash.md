# DeepSeek V4 Vision Exp — findings by Mimo v2.6 Flash

- Source: DeepSeek/`deepseek-v4-flash-vision-exp`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp (DeepSeek-V4-Flash-Vision-Exp)
- **Short description:** DeepSeek's first experimental multimodal V4 model — V4-Flash MoE backbone plus a 32-layer vision encoder — aimed at multimodal code understanding, UI/layout reasoning, chart/document analysis, and image-to-code; free tier on OpenCode Zen.
- **Provider / access:** DeepSeek API Platform (Chat Completions, Messages, Responses); OpenCode Zen `opencode/deepseek-v4-vision-exp` free tier; third-party gateways (Vercel AI Gateway lists `deepseek/deepseek-v4-flash-vision-exp` via Fireworks/Novita/DeepInfra).
- **Release / knowledge:** 2026-08-21 (API); open weights published 2026-08-31 under MIT on Hugging Face; knowledge cutoff / active-param count not published.
- **IDs:** `deepseek-v4-flash-vision-exp` (DeepSeek); `opencode/deepseek-v4-vision-exp` (Zen).
- **Context window:** **1,048,576** native; max output **384K** (DeepSeek/AI-TLDR). Zen free tier per repo meta: **200K**. Images billed ≤384 tokens each (~800×800 resize).
- **Modalities:** text/image/PDF-class document input (charts, screenshots, photos); text out; tool calls yes; JSON/structured outputs; prompt caching; experimental status.
- **Pricing (as of 2026-09-22):** Free Zen tier (primary for this entry); DeepSeek API at V4-Flash text rates; Vercel gateway lists **$0.216 in / $0.647 out per 1M**.
- **Architecture:** V4-Flash base — **284B total / 13B active** MoE (43 layers, 256 routed experts, 6 active + 1 shared), +32-layer/1024-dim ViT + 2-layer aligner (~0.5B); FP4 experts + FP8 elsewhere, ~168GB checkpoint; DFlash attention, Hyper-Connections, DSpark draft; MIT license. (Some sources cite ~305B total — cellcog/vLLM favor 284B/13B.)

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Vendor-run = DeepSeek launch card (2026-08-21) unless noted.
> Text-agent rows: DeepSeek Harness minimal mode, max reasoning effort, temp 1.0 / top_p 0.95.

Agent / tool use:

- Terminal-Bench 2.1: **83.9%** (DeepSeek card; vs V4-Flash-0731 82.7, Opus-4.8 85.0)
- Toolathlon-Verified: **75.9%** (DeepSeek; vs 70.3, Opus-4.8 76.2 — rank 4/11 per LLMLearner)
- AutomationBench (Public): **25.7%** (DeepSeek; vs 25.1, Opus-4.8 27.2)
- ApexBench (Pass@1, multimodal agent): **36.5** (DeepSeek; vs V4-Flash ignoring images 26.2, Opus-4.8 39.4 — rank 1/1 on LLMLearner's set)
- Agents' Last Exam (multimodal): **27.3** (DeepSeek; **beats Opus-4.8 25.7**)
- GDPval-AA / Tau3 / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / AA Intelligence Index / CritPt for Vision-Exp: no verified public score found (text parity with V4-Flash claimed but absolute reasoning cards not re-published for Vision-Exp)
- DSBench-Hard (data analysis): **63.6%** (DeepSeek; rank 1/16 per LLMLearner; vs Opus-4.8 71.7)

Coding:

- DeepSWE: **59.3%** (DeepSeek; vs V4-Flash 54.4, **beats Opus-4.8 58.0** — rank 20/37)
- NL2Repo: **57.7%** (DeepSeek; vs 54.2, Opus-4.8 69.7 — rank 8/16)
- CyberGym: **75.3%** (DeepSeek; vs 76.7, Opus-4.8 78.3)
- SWE-bench Verified / LiveCodeBench: no verified public score found for Vision-Exp

Long context:

- 1M window advertised; vLLM recipe notes reference benchmark used 32K (`--max-model-len 32768`); MRCR/RULER retrieval scores: no verified public score found

Multimodal:

- OCRBench: **83.5%** (vLLM verified GB200 run, full 1000 samples; KIE 92.5, Doc-VQA 90.0, Scene-Text-VQA 89.5, handwriting weak 49–58)
- Chartography: **64.3** (DeepSeek; vs Opus-4.8 65.0)
- ZeroBench (Pass@5): **35.0** (DeepSeek; **beats Opus-4.8 34.0**)
- MMMU-Pro: no verified public score found

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.1 83.9 near Opus-4.8, Toolathlon-Verified 75.9 essentially tied with Opus (76.2), ApexBench 36.5 and Agents' Last Exam 27.3 show real multimodal agentic loops; capped by low AutomationBench absolute and no Tau/MCP/GDPval rows.
- **Reasoning: 68/100.** Strong data-analysis (DSBench-Hard 63.6 #1 in its tracker set) and text-agent parity with V4-Flash, but zero published GPQA/HLE/AA-Index for this exact Vision-Exp checkpoint — reasoning depth is inferred, not measured.
- **Context window: 82/100.** Native 1M/384K output is top-tier tier mapping; Zen free cap is 200K and no long-context retrieval curve is published (vLLM notes only 32K measured) — practical confidence window lower than the sticker.
- **Multimodal: 84/100.** Text+image native with OCRBench 83.5, Chartography 64.3, ZeroBench 35 (beats Opus-4.8), ApexBench jump 26→36 when actually looking at images; experimental flag and no audio/video cap below 90.
- **Coding: 82/100.** DeepSWE 59.3 beats Opus-4.8, NL2Repo 57.7, CyberGym 75.3, TB2.1 83.9 — excellent agentic coding for a free/open Flash-class model; no SWE-Verified/LiveCodeBench rows.
- **Cost efficiency: 100/100.** Free Zen tier with 1M-capable multimodal MoE; even paid gateway rates (~$0.22/$0.65) are bargain-bin — free-tier anchor = 100.
- **Overall Score: 79/100.** Mean of five quality dims (80+68+82+84+82)/5 = 79.2 → 79. Best-fit: free multimodal coding agents (UI-to-code, chart/screenshot-driven loops) and OCR-heavy document pipelines; verify long-context retrieval yourself before trusting the 1M sticker on needle tasks.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (DeepSeek HF README/model card, AI/TLDR, LLMLearner, CellCog, vLLM recipes, LLM Reference, Vercel AI Gateway); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
