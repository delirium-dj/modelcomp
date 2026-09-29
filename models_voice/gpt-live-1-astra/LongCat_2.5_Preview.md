# GPT-Live-1 (Astra, medium) — findings by LongCat 2.5 Preview

- Source: OpenAI (`openai/gpt-live-1-astra`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Live-1 (Astra, medium)
- **Short description:** OpenAI's full-duplex speech-to-speech voice model (GPT-Live 1 frontend) configured with GPT-6 Astra (medium) as the delegated reasoning backend, for natural spoken conversations with tool use.
- **Provider / access:** OpenAI Live API `v1/live/sessions` (WebRTC, WebSocket, or SIP); OpenCode Zen `openai/gpt-live-1-astra`. Not available via Chat Completions / Responses / Realtime APIs.
- **Release / knowledge:** GPT-Live 1 GA 2026-09-10; knowledge cutoff Jul 31, 2025.
- **IDs:** `openai/gpt-live-1-astra` (Zen); base voice model ID `gpt-live-1`
- **Context window:** 128K tokens per Live session (backend context; voice session does not report frontend token counts)
- **Modalities:** audio + text in; audio + text out; image and video unsupported on the voice frontend (vision-capable backend can accept images via delegation); tool calls via delegation; reasoning delegated to backend
- **Pricing (as of 2026-09-29):** $0.05 per minute of voice session ($3.00/hour), billed per second; GPT-6 Astra backend billed separately at $10/$50 per 1M tokens. No free tier.
- **Architecture:** proprietary; two-tier architecture — GPT-Live 1 voice frontend manages the spoken conversation and delegation decisions; GPT-6 Astra (medium) backend handles reasoning and tool use

### Raw benchmarks found

Agent / tool use:

- Delegation accuracy: **100%** (OpenAI cookbook recorded example, single run — not a performance benchmark)
- Tool accuracy: **50%** (1 of 2 expected tool calls, same recorded example)
- Task completion: **Passed** (restaurant-booking scenario, same recorded example)
- Terminal-Bench / Tau3 / GDPval / Claw-Eval: no verified public score found (voice model; text benchmarks not applicable)

Reasoning / knowledge:

- Semantic quality: **90%** (LLM-judged, same recorded example)
- GPQA / HLE / AIME / Intelligence Index: no verified public score found for the voice model; reasoning is delegated to GPT-6 Astra (medium), which has its own separate scores
- τ-Voice benchmark (arXiv 2603.13686): full-duplex voice agents generally score 31–51% task completion — but this paper (Mar 2026) predates GPT-Live 1 and does not evaluate it; not attributable

Coding:

- No verified public score found for the voice model; coding tasks would be delegated to the GPT-6 Astra backend

Long context:

- 128K tokens per Live session; no long-context retrieval benchmark reported

Voice-specific (OpenAI cookbook recorded example, 2026-09-09):

- Response latency: **1.513 s** (mean, end of caller speech to first assistant audio)
- Response rate: **75%** (3 of 4 scored opportunities; includes a scoring artifact)
- Interruption rate: **0%**
- Floor-hold silence: **4.62 s cumulative / 1.7 s max**
- Frontend audio usage: **42 s**; backend: gpt-5.6-terra, 2374 input / 105 output tokens

### Normalized scores (1–100)

- **Tool use: 58/100.** Delegation accuracy 100% and task completion Passed in the single recorded example, but tool accuracy was only 50% and no standard tool benchmarks exist for the voice frontend; tool execution depends on the Astra backend.
- **Reasoning: 68/100.** Reasoning is fully delegated to GPT-6 Astra (medium), a frontier backend; semantic quality 90% in the recorded example supports strong conversational understanding, but no direct reasoning benchmarks exist for this configuration.
- **Context window: 58/100.** 128K tokens per Live session lands in the 100K–200K tier (50–64); no long-context retrieval score reported.
- **Multimodal: 90/100.** Audio + text in and audio + text out fits the 90–100 tier (audio in / non-text out); image and video unsupported on the voice frontend.
- **Coding: 50/100.** No verified public coding numbers for the voice model; coding is possible only via delegation to the GPT-6 Astra backend, with no voice-specific evidence.
- **Cost efficiency: 55/100.** $0.05/min voice layer is inexpensive, but the GPT-6 Astra backend at $10/$50 per 1M makes the combined system expensive for tool-heavy workloads.
- **Overall Score: 65/100.** Mean of (58 + 68 + 58 + 90 + 50) / 5 = 64.8 → 65. Best fit: natural full-duplex voice interface for spoken customer support and voice agents where turn-taking quality matters; pair with a cheaper backend for cost-sensitive deployments.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-09-29
- Method: public internet research (OpenAI official docs, model catalog, OpenAI cookbook recorded evaluation, τ-Voice paper); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
