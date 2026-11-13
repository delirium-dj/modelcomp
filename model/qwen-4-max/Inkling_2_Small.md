# Qwen4-Max-Preview — findings by Inkling 2 Small

- Source: Alibaba/Qwen (`qwen4-max-preview`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen4-Max-Preview
- **Short description:** Alibaba's next-generation flagship multimodal model in the Qwen family, combining text generation, image/video understanding, deep reasoning and agentic tool use. Launched as a time-boxed preview; aimed at coding, office productivity, frontend design and complex agentic tasks. Preview only — retires when the preview window ends.
- **Provider / access:** Alibaba Cloud Model Studio **Token Plan only** (Personal / Team editions, Singapore region) — Base URL `https://token-plan.ap-southeast-1.maas.aliyuncs.com`, model ID `qwen4-max-preview` (alias `qwen4.0-max-preview`). Compatible with OpenAI Chat Completions, Responses and Anthropic Messages APIs. **No pay-as-you-go access and no per-token pricing.** Preview runs 2026-11-11 10:00 → 2026-11-25 24:00 (UTC+8); the model retires afterwards. Token-Plan keys are restricted to interactive use inside compatible AI tools (Claude Code, Cursor, Qwen Code, Qoder, OpenClaw); automation/backend use is a policy violation.
- **Release / knowledge:** 2026-11-11 (preview launch; announced 02:01 UTC). Alibaba has not published a knowledge cutoff. Preview ends 2026-11-25.
- **IDs:** `qwen4-max-preview` (Alibaba Token Plan; billing shows `qwen4.0-max-preview`). Not listed on OpenRouter, Vercel AI Gateway, models.dev or Hugging Face at time of check; no open weights.
- **Context window:** 1M tokens; maximum output 393,216 tokens, shared between thinking and the final answer (per Alibaba spec, verified 2026-11-13).
- **Modalities:** text / image / video in → text out; reasoning on by default (`reasoning_effort`: low / medium / xhigh, default xhigh); function calling, web search and built-in tools, structured outputs (JSON object/schema); no audio I/O.
- **Pricing (as of 2026-11-13):** Token Plan subscription only — Personal Edition: Lite $6/mo 20,000 credits (new-user $3), Essential $10/mo 45,000 credits ($5 new-user), Standard $18/mo 80,000 credits, Pro $43/mo 200,000 credits; limited-time preview benefit: ~20% of standard Credits rate (5x usage), plus 60% night discount 22:00–08:00 UTC+8; extra bundles $15 per 20,000 credits. Not priced per token; Singapore region, global routing, cross-border transfer caveat. Token Plan usage is interactive-only.
- **Architecture:** proprietary MoE flagship; parameter count and active-parameter count undisclosed. Alibaba's Qwen4 architecture precursor (Qwen3.8-Flash-Next, Aug 2026) previewed Gated DeltaNet + Qwen Sparse Attention + gated residual paths — design clue only, not a published spec for this checkpoint.

### Raw benchmarks found

Agent / tool use:

- StealthMark **Latch** (cooperative planning / learning from experience): **67.3/100** — cleared 5 of 5 levels, rank 21/55 (source: Stealth Models, measured 2026-11-11)
- StealthMark **Foresight** (anticipation / planning): **57.5/100** — survived 1 of 3 levels, rank 14/54 (source: Stealth Models)
- Terminal-Bench / Tau3-Banking / GDPval-AA: no verified public score found

Reasoning / knowledge:

- StealthMark **General Intelligence**: **54.6/100** overall-GI component; StealthMark overall **58.8/100**, rank 12/58 (source: Stealth Models, measured 2026-11-11; xhigh reasoning)
- Reasoning efficiency: single-step **51**, multi-step **60** (Balanced Integration Score, 50 = average; not part of StealthMark)
- GPQA Diamond / HLE / LCR / CritPt / Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (BenchLM: 0 of 831 benchmarks covered, "coverage coming soon", unranked)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found — Alibaba positions the preview for coding/agentic work but has published no coding-benchmark table; Stealth Models leak-check (2026-11-02, re-verified 2026-11-11) found no leaked Qwen4 score with a primary source
- StealthMark Visual Intelligence **66.3/100** (front-end/visual output; component of the 58.8 overall)

Long context:

- 1M-token context claimed by Alibaba (spec page); no independent MRCR/RULER retrieval measurement published

### Normalized scores (1–100)

- **Tool use: 65/100.** Latch 67.3 (cleared 5/5 with cross-episode learning) plus Foresight 57.5 show solid multi-step cooperative planning; no Terminal-Bench-2.1/Tau3/GDPval numbers exist, so the score sits mid-60s rather than frontier 90s.
- **Reasoning: 58/100.** StealthMark GI 54.6 with mid-pack reasoning efficiency (single-step 51 / multi-step 60); no GPQA/HLE/AA-Index corroboration — clearly not frontier-tier reasoning on public evidence yet.
- **Context window: 90/100.** 1M claimed with 393,216 max output; no independent ≥512K retrieval verification, so below the 95–100 tier cap.
- **Multimodal: 80/100.** Text + image + video input, text out (no audio in/out, no image generation) — top of the "+video in" band.
- **Coding: 62/100.** Purpose-built for coding/agents per the vendor, but zero public SWE-bench/LiveCodeBench numbers; capped well below frontier coding refs (DeepSWE 74%+, TB2.1 85%+).
- **Cost efficiency: 70/100.** Subscription-only access ($6–43/mo Personal, preview promo ~20% credits rate) is inexpensive for interactive users but not per-token priced; cannot be compared on the $/1M grid — scored on effective cost with a promo caveat.
- **Overall Score: 71/100.** (65+58+90+80+62)/5 = 71. Best fit: interactive agentic coding and visual-understanding work inside AI tools on the Token Plan during the preview window; hold off for benchmark-critical or automation workloads until independent (non-StealthMark) evals land.

---

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-13 UTC
- Method: public internet research; web search returned HTTP 402 (quota), so the fallback ladder was used — one simpler retry (402 again), then direct `webfetch` of the Alibaba Cloud Model Studio docs (qwen4-max-preview spec, text-generation models, Token Plan personal overview), DuckDuckGo HTML search for discovery, BenchLM, and Stealth Models' measured StealthMark benchmark pages. No local repository files were used as evidence; no peer reports were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Alibaba Cloud Model Studio: qwen4-max-preview (Latest Model)](https://www.alibabacloud.com/help/en/model-studio/qwen4-max-preview)
  - [Alibaba Cloud Model Studio: Text Generation and Visual Understanding (model tables)](https://www.alibabacloud.com/help/en/model-studio/text-generation-model)
  - [Alibaba Cloud Model Studio: Token Plan Personal Edition — Overview](https://www.alibabacloud.com/help/en/model-studio/token-plan-personal-overview)
  - [Stealth Models: Qwen 4 family guide (release radar, leak check)](https://stealthmodels.com/qwen-4)
  - [Stealth Models: Qwen4-Max-Preview benchmark results (StealthMark 58.8)](https://stealthmodels.com/benchmarks/models/qwen4-max-preview)
  - [BenchLM: Qwen4 Max — coverage coming soon](https://benchlm.ai/models/qwen4-max)
- Future sources: add a new file next to this one, e.g. `Inkling_2_Small_2.md`, using the same headings.
