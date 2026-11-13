# Agnes 2.5 Flash — findings by Inkling 2 Small

- Source: Agnes AI (`agnes-2.5-flash`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 2.5 Flash (base weights `Agnes-AI/Agnes-2.5-Flash-Base`)
- **Short description:** Agnes AI's efficient sparse-MoE text/coding model — successor to Agnes 2.0 Flash, aimed at everyday coding, agent workflows, tool calling and image understanding; served free and also published as open weights (Apache-2.0 base).
- **Provider / access:** Agnes AI API (`https://apihub.agnes-ai.com/v1`) — OpenAI-compatible Chat Completions / Responses and Anthropic-compatible Messages; also self-hostable from Hugging Face (`Agnes-AI/Agnes-2.5-Flash-Base`, FP8, Apache-2.0) and relayed by third-party gateways (AIHubMix $0.03/M in via reseller, FreeLLMAPI). Official API list price $0.05 in / $0.15 out per 1M; cached input $0.005.
- **Release / knowledge:** GA 2026 (successor to 2.0 Flash; review coverage from 2026-07-15); base weights published 2026. Knowledge cutoff not published.
- **IDs:** `agnes-2.5-flash` (Agnes API); open-weights base `Agnes-AI/Agnes-2.5-Flash-Base` (FP8, ~190 GB, not instruction-tuned).
- **Context window:** official API docs: **512K** context, **65.5K** max output. HF base card: 1,048,576 tokens (YaRN ×16 over 64K base). FreeLLMAPI lists up to 262K served context. Discrepancy noted — scored on the official API figure.
- **Modalities:** text / image (image_url) in → text out; reasoning optional via thinking mode (`chat_template_kwargs.enable_thinking` / Anthropic `thinking` budget); tool calling yes; streaming; no audio/video output.
- **Pricing (as of 2026-11-13):** $0.05 in / $0.15 out per 1M, cached $0.005 (official list). Agnes states Flash remains free on its platform (quotas/rate limits apply; verified only via docs — "Angel User" trial price $0). Not a full free-for-all: plan-level limits apply.
- **Architecture:** open-weights base: sparse MoE — 202B total / ~16B active per token, 48 layers, 6 of 160 routed experts + 1 shared, MLA with KV compression, hyper-connections, hash routing on first 3 layers, FP8 e4m3 (~190 GB, 8×H100-class), vocab 129,292. Instruct line (`agnes-2.5-flash`) is the served, API-aligned descendant.

### Raw benchmarks found

Vendor-reported internal suite (Agnes AI; not independently reproduced; directional only):

- Terminal-Bench 2.1: **62.3** (2.0 Flash: 52.5; 2.5 Pro: 77.3) — internal
- SWE-bench Verified: **75.6** (2.5 Pro: 82.7) — internal
- SWE-bench Pro: **50.4** — internal
- SWE-bench Multilingual: **69.1** — internal
- SWE Atlas QnA: **36.5** (2.0: 15.8) — internal
- SWE Atlas Refactoring: **29.5** (2.0: 11.4) — internal
- SWE Atlas Test Writing: **27.5** (2.0: 13.8) — internal

Agent / tool use:

- Internal TB2.1 62.3 (above); no Terminal-Bench/Tau3/GDPval numbers from independent harnesses found
- GPQA Diamond / HLE / CritPt / Artificial Analysis Intelligence Index: no verified public score found

Coding:

- Internal suite above (SWE-Verified 75.6, SWE-Pro 50.4, TB 62.3)
- LiveCodeBench / SciCode: no verified public score found; internal numbers unreproduced by third parties

Long context:

- 512K (API) / 1M (base weights, YaRN); no verified public long-context retrieval (MRCR/RULER) score found

### Normalized scores (1–100)

- **Tool use: 62/100.** Vendor-internal TB2.1 62.3 is the only agentic terminal figure; SWE-Atlas QnA/Refactor/Test 36.5/29.5/27.5 show mid-tier agentic workflow ability — unreproduced, so capped below frontier.
- **Reasoning: 55/100.** No GPQA/HLE/AA-Index published; enabling thinking helps coding/decomposition per docs, but there is no measured reasoning benchmark for this exact ID — provisional, weakest evidence dim.
- **Context window: 85/100.** 512K served context (65.5K max output) is in the 500K–1M band, but below the 1M claim for the base weights and with zero measured retrieval verification.
- **Multimodal: 65/100.** Image-in (screenshots, docs, VQA) only — no audio/video input and no non-text output; bottom-to-middle of the "image in" band.
- **Coding: 66/100.** Solid internal coding suite (SWE-Verified 75.6, TB 62.3, SWE-Pro 50.4) with a free price point, but every number is vendor-internal and unreproduced; capped mid-60s.
- **Cost efficiency: 98/100.** $0.05/$0.15 per 1M (cached $0.005) is cheaper than nearly everything else on the board; official free-access tier noted (quotas apply).
- **Overall Score: 67/100.** (62+55+85+65+66)/5 = 66.6 → 67. Best fit: budget high-volume coding/agent scaffolding and image-understanding chores, especially via the free API or the open weights; validate on your own harness before production use — public evidence is vendor-internal.

---

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-13 UTC
- Method: public internet research; web search returned HTTP 402 (quota), so the fallback ladder was used — one simpler retry (402 again), then direct `webfetch` of DuckDuckGo HTML results, the official Agnes AI docs (`wiki.agnes-ai.com`), the Hugging Face model card, and a third-party review (we0.ai) summarizing Agnes AI's internal benchmark table. No local repository files were used as evidence; no peer reports were read. All Agnes benchmark numbers are vendor-internal and unreproduced — treat as directional. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Agnes AI Docs: Agnes 2.5 Flash (specs, limits, pricing)](https://wiki.agnes-ai.com/en/docs/agnes-25-flash)
  - [Hugging Face: Agnes-AI/Agnes-2.5-Flash-Base (open weights, Apache-2.0)](https://huggingface.co/Agnes-AI/Agnes-2.5-Flash-Base)
  - [we0.ai review: Agnes-2.5-Flash internal benchmark table (TB2.1 62.3, SWE-Verified 75.6)](https://we0.ai/articles/agnes-2-5-flash-review-a)
  - [GitHub: AgnesAI-Labs/Agnes-2.5-Flash-Base](https://github.com/AgnesAI-Labs/Agnes-2.5-Flash-Base)
- Future sources: add a new file next to this one, e.g. `Inkling_2_Small_2.md`, using the same headings.
