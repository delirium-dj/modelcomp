# Qwen 4 Max (Preview) — findings by GLM 5.3 Flash

- Source: Alibaba (`qwen4-max-preview` — QwenCloud Token Plan preview)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 4 Max (Preview) — API ID `qwen4-max-preview`
- **Short description:** Alibaba's next-generation flagship multimodal model, launched in public preview 2026-11-11 (preview runs to 2026-11-25 24:00 UTC+8, retired after): 1M context, 393,216-token output budget shared by thinking and answer, text + image + video input, deep reasoning aimed at coding, office productivity, frontend design and complex agentic tasks. First member of the four-tier Qwen4 family (Max, Plus, Flash, 27B) named at Apsara 2026-09-22; the other three are unreleased. First measured third-party score: ModelDial 78.80 (published 2026-11-13).
- **Provider / access:** Alibaba QwenCloud Token Plan ONLY (Individual or Team subscription; no pay-as-you-go; Singapore region; interactive use inside coding/agent tools such as Claude Code, Cursor, Qwen Code, Qoder and OpenClaw — scripts and app backends disallowed). Token-Plan base URL `https://token-plan.ap-southeast-1.maas.aliyuncs.com`. Compatible with OpenAI Chat Completions, OpenAI Responses, and Anthropic Messages APIs. Not listed on OpenRouter; no Hugging Face weights or model card (the Qwen org ships zero Qwen4 repos).
- **Release / knowledge:** preview live 2026-11-11 10:00 → 2026-11-25 24:00 (UTC+8); "no changes will be made during this period" and the model will be retired after the preview ends. Knowledge cutoff not stated.
- **IDs:** `qwen4-max-preview` (alias `qwen4.0-max-preview`; both work, bills show the latter). No GA identifier yet.
- **Context window:** 1,048,576 (1M) tokens; maximum output 393,216 tokens (thinking + final answer share one budget; from this model on `max_tokens` ≡ `max_completion_tokens`) — verified from Alibaba's official spec page.
- **Modalities:** Text, image and video in (screenshot analysis, document understanding, video analysis; up to 16M px/image, 2-hour video, 2 GB, 2,048 images / 64 videos); text out. Thinking enabled by default with `reasoning_effort` low/medium/xhigh (xhigh default); `preserve_thinking` on by default in multi-turn Chat Completions; Function Calling + web search + built-in tools (`web_search`, `code_interpreter`, and more); structured outputs (JSON Object and JSON Schema). No audio input in the official spec.
- **Pricing (as of 2026-11-13):** no per-token price — Token Plan subscription only during preview ($6–$43/month tiers, 20K–200K Credits; Lite/Essential new-user promos $3/$5 through 2026-11-30). Preview promotion: Credits consumption as low as 20% of the standard rate (5× usage); calls 22:00–08:00 UTC+8 get an additional 60% off (8% of standard). No free-standing public tier.
- **Architecture:** unverified. No parameter count, MoE structure or weights published; the architectural direction is documented only via the Qwen4-Exp Transformers integration previewed through Qwen3.8-Flash-Next (gated residual paths, Qwen Sparse Attention, learned n-gram memory, Gated DeltaNet). Alibaba's changelog positions it as "the next-generation flagship multimodal model in the Qwen family".

### Raw benchmarks found

Agent / tool use:

- ModelDial private coding harness (agentic, default effort): **Backend engineering 80/100** — sub-scores Contracts & boundaries 12/20, Retries & failures 19/20, CI & adversarial review 14/20, Transactions & consistency 18/20, Caching & regression 17/20 (ModelDial, backend tested 2026-11-11, data snapshot published 2026-11-13; total eval time 45m38s)
- Terminal-Bench / Tau3-Banking / GDPval-AA / OSWorld: no verified public score found

Reasoning / knowledge:

- ModelDial private coding harness (default): **Knowledge & reasoning 90/100** (ModelDial data snapshot 2026-11-13)
- GPQA Diamond / HLE / AA Intelligence Index: no verified public score found (the circulating "AA 53" chart failed primary-source tracing in the 2026-11-02/11 leak checks — AA has no entry)

Coding:

- ModelDial private coding harness (default): **Overall 78.80 — rank 16 of 57 models**, **Frontend interaction 78/100**, **Maintainability 59/100** (ModelDial data snapshot 2026-11-13; +14.50 vs predecessor Qwen3.8-Max's 64.30 on the same harness)
- SWE-bench Verified / LiveCodeBench / DeepSWE / Terminal-Bench: no verified public score found (the circulating "Qwen4-Coder 82% SWE-bench" figure is labelled illustrative by its own publisher)

Long context:

- No long-context retrieval reported (1M window official; no MRCR / RULER / GraphWalks value published)

### Normalized scores (1–100)

- **Tool use: 74/100.** ModelDial's agentic backend shows strong execution robustness (Retries & failures 19/20, Transactions & consistency 18/20, Caching & regression 17/20) and the vendor stack adds native web search + built-in tools, but there is no Terminal-Bench/Tau3-class measurement — capped mid-70s on the single agentic harness.
- **Reasoning: 82/100.** Knowledge & reasoning 90 is the strongest measured dimension on ModelDial's scale (rank 16/57 overall); mapped conservatively onto the 1–100 reasoning scale with no GPQA/HLE/AA-Index anchor yet — preview-era only-child evidence.
- **Context window: 95/100.** 1,048,576-token window verified on the official spec page (≥1M tier = 95–100) with a notably generous 393,216-token shared output budget; no ≥98% retrieval measurement at 512K+ exists, so not 100.
- **Multimodal: 80/100.** Verified text + image + video input with document understanding on the official spec page — the +video tier (75–90); no audio input and no measured visual benchmark of its own (ModelDial's Visual aesthetics 59 is UI-output quality), so held mid-tier.
- **Coding: 76/100.** ModelDial overall 78.80 (rank 16/57) with Backend 80 / Frontend 78 / Maintainability 59 — a solid mid-frontier agentic coder, +14.5 over Qwen3.8-Max on the same harness; capped by the single-harness evidence base.
- **Cost efficiency: 55/100.** No per-token price exists: access is a Token Plan subscription ($6–$43/month) restricted to interactive coding/agent tools, with preview promo pricing (20% of standard credit rate, 8% overnight) that expires with the preview on 2026-11-25 — unpriced subscription access scores mid-band pending a real rate card.
- **Overall Score: 81.4/100.** Mean of the five quality dims (74+82+95+80+76)/5 — a strong 1M-context multimodal flagship preview whose first measured third-party evidence (ModelDial 78.80) supports near-frontier agentic coding; best fit for long-horizon coding-agent work inside the Token Plan window (the SKU retires after 2026-11-25).

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-13
- Method: public internet research (ModelDial's published private-harness evaluation, Alibaba Cloud Model Studio official spec/changelog/Token Plan pages, Hugging Face registry check, OpenRouter catalog check, DuckDuckGo-indexed trackers); scores are normalized 1–100 interpretations, not official vendor scores. The earlier circulating "AA 53" and "Qwen4-Coder 82% SWE-bench" figures remain untraced and are excluded.
- Reference URLs:
  - [ModelDial — Qwen4-Max-Preview model results (measured: overall 78.80 default, rank 16/57; snapshot 2026-11-13)](https://modeldial.com/en/models/qwen4-max-preview)
  - [Alibaba Cloud Model Studio — qwen4-max-preview official spec page (1M ctx, 393,216 output, Token Plan only)](https://www.alibabacloud.com/help/en/model-studio/qwen4-max-preview)
  - [Alibaba Cloud Model Studio — Token Plan Personal Edition overview (plans, Credits, preview promotion)](https://www.alibabacloud.com/help/en/model-studio/token-plan-personal-overview)
  - [Alibaba Cloud Model Studio — Model releases and updates (qwen4-max-preview entry, 2026-11-11)](https://www.alibabacloud.com/help/en/model-studio/newly-released-models)
  - [ModelDial — Coding rankings methodology (dimension weights)](https://modeldial.com/en/method)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
