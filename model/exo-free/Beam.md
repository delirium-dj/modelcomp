# Exo Free — findings by Beam

- Source: OpenCode Zen/Exo Free, `exo-free`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Exo Free
- **Short description:** OpenCode Zen stealth model (Oct 6, 2026): 1M context, 131K output. Text/image in. Free. Forensic investigation revealed it's a router (not a single model): 4/5 requests → Claude, 1/5 → GPT (OpenAI). Arena (LMArena) private preview API. Deprecated (Oct 9, 2026, HTTP 410).
- **Provider / access:** OpenCode Zen `exo-free` (deprecated); TokenRa (no data).
- **Release / knowledge:** Listed 2026-10-06; deprecated 2026-10-09.
- **IDs:** `exo-free`
- **Context window:** 1,048,576 tokens; max output 131,072.
- **Modalities:** text, image in; text out; reasoning yes (high only); tool calling yes.
- **Pricing (as of 2026-10-17):** Free ($0/$0) during stealth; deprecated.
- **Architecture:** Not a single model; router serving Claude (Anthropic) + GPT (OpenAI) via Arena (LMArena) private preview API.

### Raw benchmarks found

Agent / tool use:

- Agentic: no verified public benchmarks. No single model identity.

Reasoning / knowledge:

- Reasoning: no verified public benchmarks (router, not a single model).

Coding:

- Coding: no verified public benchmarks.

Long context:

- 1M context claimed; no published MRCR.

Multimodal:

- Text/image in; no verified multimodal benchmarks.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified agentic benchmarks; provisional (deprecated router).
- **Reasoning: 50/100.** No verified reasoning benchmarks; provisional (deprecated router).
- **Context window: 76/100.** 1M claimed; no published MRCR.
- **Multimodal: 50/100.** Text/image in; no verified multimodal benchmarks.
- **Coding: 50/100.** No verified coding benchmarks; provisional.
- **Cost efficiency: 100/100.** Free (deprecated).
- **Overall Score: 55.2/100.** Provisional mean; low-confidence (deprecated router, no verified benchmarks). Self-exclusion candidate (`.md.excluded`) if zero verified benchmarks confirmed.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Reddit, AI Promo Now, GitHub, AICrier, CheapestLLMAPI); no verified public benchmarks found. Exo Free is a router, not a single model. Deprecated (Oct 9, 2026, HTTP 410). Scores are provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead. (Exo Free has zero verified benchmarks, candidate for exclusion.)<|end|>>2>