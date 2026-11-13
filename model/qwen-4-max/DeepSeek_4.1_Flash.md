# Qwen4-Max Preview — findings by DeepSeek 4.1 Flash

- Source: Alibaba (Qwen) / Qwen4-Max Preview
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen4-Max Preview
- **Short description:** Alibaba's first publicly available Qwen4-generation flagship — a multimodal (text/image/video-in) model with a 1M-token context, released as a time-boxed preview. It is the successor-in-preview to Qwen3.8-Max; Qoder briefly served an anonymous build of the same generation under the name "Qoduck" before this preview replaced it.
- **Provider / access:** QwenCloud Token Plan API (`qwen4-max-preview`, alias `qwen4.0-max-preview`; OpenAI Chat Completions, Responses and Anthropic Messages protocols); free testing in Qwen Chat; Qoder IDE model picker. No OpenCode Zen route.
- **Release / knowledge:** preview live 2026-11-11 10:00 (Beijing) through 2026-11-25; knowledge cutoff not published.
- **IDs:** `qwen4-max-preview` / `qwen4.0-max-preview` (QwenCloud); no Free per-token ID (preview is Token-Plan-only for API use).
- **Context window:** 1,000,000 total; 393,216 max output shared between reasoning and the final answer (official docs).
- **Modalities:** text, image, video in; text out; reasoning effort low/medium/xhigh (default xhigh); web search; tool calls; structured output.
- **Pricing (as of 2026-11-12):** no pay-as-you-go token price. Token Plan subscription only — Lite $6/mo (promo $3 for new customers, 20K credits), Essential $10 ($5 promo, 45K), Standard $18 (80K), Pro $43 (200K); promotional credits rates up to 80% off, 88% off 22:00–08:00 Beijing; free in Qwen Chat.
- **Architecture:** not disclosed; weights unavailable during preview (the related Qwen3.8-Flash-Next open checkpoint is described by Qwen as the architecture preview behind Qwen4).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Independent GameFeel (GameFeel RE sub-score): **10.3** — below Qwen3.8-Max's 12.1 and below early Qwen4 builds (Qwen4-27B Early 14.9, Qwen4-Flash Early 19.9); the only independent launch-window measurement

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index / Arena Text / Arena WebDev: no entries as of 2026-11-11; official launch materials published no full benchmark set

Coding:

- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found
- Community hands-on (not benchmark scores): single-prompt interactive 3D lighthouse island with working controls (author reported fewer tokens than DeepSeek V4.1 Flash on the same task); SVG animation test with minor coordination errors; Crossy Road game judged a slight edge to Claude Opus 5.5 Medium in a side-by-side

Long context:

- no long-context retrieval reported; 1M-token window with 393K max output documented in the official model docs

### Normalized scores (1–100)

- **Tool use: 79/100.** Tool calling, web search and structured output are documented and Qoder integration is live, but no agentic benchmark exists yet; launch-window evidence is single-shot generation, not long-horizon tool use.
- **Reasoning: 73/100.** Default xhigh reasoning effort and multimodal reasoning are claimed, but zero published reasoning benchmarks and a weak independent GameFeel RE result (10.3) cap this preview conservatively.
- **Context window: 95/100.** 1M-token input tier with an exceptional 393K max output; no public retrieval-at-512K test to reach 100.
- **Multimodal: 88/100.** Native text, image and video input with text out, per official docs — strong input coverage, no audio input and no image generation.
- **Coding: 76/100.** Community demos (one-prompt 3D scene, small games near Claude Opus 5.5 quality) show solid frontend generation, but there are no SWE-style numbers and the GameFeel RE sub-score trails the predecessor.
- **Cost efficiency: 90/100.** No token price — Token Plan from $3–6/mo with promotional credit multipliers during preview and free Qwen Chat access is cheap for interactive use; API billing is subscription-bound and excluded for backend/automation use.
- **Overall Score: 82/100.** (79 + 73 + 95 + 88 + 76) / 5 = 82.2 — a promising but unmeasured Qwen4 flagship: strong context/multimodal specs, benchmark evidence still pending; evaluate before the 2026-11-25 preview retirement.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-12
- Method: public internet research (official QwenCloud docs, hands-on reviews, community test posts); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [QwenCloud — Qwen4-Max Preview official documentation](https://docs.qwencloud.com/developer-guides/getting-started/latest-model)
  - [Offloop — Qwen4-Max Preview review: Coding tests, GameFeel scores, pricing and setup](https://offloop.org/learn/qwen-4-max-preview-test)
  - [QwenCloud — Token Plan individual overview and pricing](https://docs.qwencloud.com/token-plan/personal/token-plan-personal-overview)
  - [TechTimes — Alibaba Qwen4-Max-Preview Retires November 25 With No Benchmarks](https://www.techtimes.com/articles/330536/20261112/alibaba-qwen4-max-preview-retires-november-25-no-benchmarks-model-card-price.htm)
  - [Qwen (X) — Qwen4-Max Preview launch announcement](https://x.com/Alibaba_Qwen/status/2120335993643684315)
  - [Qoder (X) — Qoduck / Qwen4-Max Preview in the model picker](https://x.com/qoder_ai_ide/status/2120343731673108936)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
