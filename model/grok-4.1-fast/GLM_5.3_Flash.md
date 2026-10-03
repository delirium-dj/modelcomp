# Grok 4.1 Fast — findings by GLM 5.3 Flash

- Source: xAI (`grok-4.1-fast`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's best agentic tool-calling model (launched 2025-11-19 with the Agent Tools API), built for high-volume real-world tasks like customer support and deep research rather than frontier "brain" work. Tuned from the Grok 4.1 base with heavy RL across simulated tool-use environments.
- **Provider / access:** xAI API `grok-4-1-fast-reasoning` / `grok-4-1-fast-non-reasoning` (one model, two modes via the reasoning parameter, same price); OpenRouter `x-ai/grok-4.1-fast`; Oracle Cloud OCI Generative AI `xai.grok-4-1-fast-*`. Chat Completions API. Not listed on OpenCode Zen as of 2026-10-03 (no Zen Free ID exists).
- **Release / knowledge:** Released 2025-11-19; free (model + Agent Tools API) through 2025-12-03 at launch via partners including OpenRouter. Knowledge cutoff not published.
- **IDs:** `x-ai/grok-4.1-fast` (OpenRouter); no Free ID on Zen — explicitly stated.
- **Context window:** 2M total tokens (xAI launch post; measured long-context retrieval 67% on the 2M window per HostZealot coverage of the launch benchmarks). Max output not published.
- **Modalities:** text and image in (JPG/PNG for vision-assisted agent steps); text out; reasoning yes (reasoning mode emitting thinking tokens; non-reasoning low-latency mode also available); tool calls yes (plus the bundled Agent Tools API — web/code/file tools); JSON mode not verified.
- **Pricing (as of 2026-10-03):** $0.20 in / $0.50 out / $0.05 cached per 1M (same price for both modes); Agent Tools API billed separately at no more than $5 per 1,000 successful tool calls; free through 2025-12-03 at launch.
- **Architecture:** proprietary transformer, API-only weights, trained with large-scale RL on tool use; roughly half the hallucination rate of Grok 4 Fast at similar task accuracy per xAI (no published rate).

### Raw benchmarks found

Agent / tool use:

- τ²-bench Telecom: **100%** (xAI launch post; beats Claude Sonnet 4.5, GPT-5.1, and Grok 4)
- Berkeley Function Calling Leaderboard v4 (BFCL-V4): **72%** (xAI launch post)
- Reka Research-Eval: **63.9%** score at **$0.046** avg cost/query (xAI launch post, with Agent Tools API; vs GPT-5 45.5%/$0.107, Claude Sonnet 4.5 41.2%/$0.065, Gemini 3 Pro 55.9%)
- X Browse: **56.3%** score at **$0.091** avg cost/query (vs GPT-5 24.2%/$0.198, Claude Sonnet 4.5 14.6%/$0.126, Gemini 3 Pro 26.5%/$0.126)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- FRAMES: **87.6%** (xAI launch post; vs GPT-5 86%, Claude Sonnet 4.5 85%, Gemini 3 Pro 90.9%)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (BenchmarkList ECI 125.4, #101/397 — a capability index, not the AA Intelligence Index)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index: no verified public score found

Long context:

- Long-context (2M window) retrieval: **67%** (HostZealot coverage of launch benchmarks; far above Grok 4's 22% on the same measure)

### Normalized scores (1–100)

- **Tool use: 92/100.** τ²-bench Telecom 100% is a frontier-tier agentic result and BFCL v4 72% plus the cheapest per-query agent costs on Reka Research-Eval/X Browse confirm it; no Terminal-Bench/Tau3/GDPval verification keeps it out of the top band.
- **Reasoning: 62/100.** FRAMES 87.6% is a strong retrieval/knowledge result but no GPQA Diamond, HLE, or AA Intelligence Index verification exists for the exact model; the Flash-class positioning (agent executor, not frontier reasoner) caps it in the mid band.
- **Context window: 94/100.** 2M tokens lands in the ≥1M tier (95–100); measured 67% retrieval at the full 2M window is far above Grok 4 but below the 98%-at-512K+ perfect-retrieval mark, and the unpublished max output is a noted caveat.
- **Multimodal: 65/100.** Image input (JPG/PNG screenshots, charts, scanned pages) with text-only output; no video/PDF/audio input verified.
- **Coding: 58/100.** No verified SWE-bench, LiveCodeBench, SciCode, or Terminal-Bench numbers exist — its tool-calling strength does not translate into verified coding benchmarks, so this is a provisional low-mid score capped entirely by missing coding data.
- **Cost efficiency: 95/100.** $0.20/$0.50 per 1M with $0.05 cached input is near the ~$0.10/$0.20 → 97–99 band, and the $0.046–$0.091 per-query agent costs beat GPT-5 and Sonnet 4.5 by 2–3×; no Zen Free ID (scored on paid pricing; free promo ended 2025-12-03).
- **Overall Score: 74/100.** Mean of the five non-cost dims (92 + 62 + 94 + 65 + 58) / 5 = 74.2; best fit: the default cheap workhorse for tool-chaining support agents and 2M-context deep research — not a primary coder (no verified coding benchmarks) or frontier reasoner.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-03
- Method: public internet research (xAI launch post via AI/TLDR and HostZealot coverage, OpenRouter, Oracle OCI docs, BenchmarkList); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
