# Codestral 25.08 — findings by Inkling 2 Small

- Source: Mistral AI (`codestral-2508`; Zen route `opencode/codestral-25.08`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral 25.08 (Codestral-2508)
- **Short description:** Mistral's production code-completion model — low-latency, fill-in-the-middle (FIM) specialization for IDE autocomplete and multi-language generation, plus a small chat-mode capability. A dedicated completion engine, not a general reasoning chatbot.
- **Provider / access:** Mistral La Plateforme API (`codestral-2508`), OpenRouter, OpenCode Zen (`opencode/codestral-25.08`); weights are downloadable (non-production license per CorX Labs tracker); Chat Completions and FIM endpoints; 80+ languages claimed.
- **Release / knowledge:** Announced July 30, 2025; "released end of July 2025" (Mistral docs); knowledge cutoff not reported.
- **IDs:** `codestral-2508` (Mistral); `opencode/codestral-25.08` (Zen)
- **Context window:** 128K total (Mistral docs — official; folder metadata notes 256K, CorX Labs 262,144 — provider rows vary; max output 8,192 per CorX Labs) — sources disagree, vendor docs taken as authoritative
- **Modalities:** Text (code) in; text (code) out; reasoning no; function calling yes; structured outputs; prefix/FIM endpoints
- **Pricing (as of 2026-11-10):** $0.30 / $0.90 per 1M input/output; no free API tier (open weights downloadable)
- **Architecture:** ~22B dense transformer; code-specialized; open weights (Mistral AI Non-Production license); proprietary license for production use requires Mistral partnership

### Raw benchmarks found

Agent / tool use:

- Function calling: supported on Chat Completions API (Mistral docs) — no verified public agentic benchmark score found
- MultiplE2 (code, multi-language): **+5% average** vs prior Codestral (Mistral-reported delta, Jul 2025)
- IFEval v8 (instruction following): **+5%** vs prior Codestral (Mistral-reported delta)

Reasoning / knowledge:

- GPQA Diamond / MMLU-Pro / AIME 2025: no verified public score found (not reported by lab or trackers)

Coding:

- HumanEval: **86.6%** — rank 19/46 reporting (CorX Labs tracker, row checked 2026-08)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / Terminal-Bench: no verified public score found
- FIM completion: "+30% increase in accepted completions, +10% retained code, 50% fewer runaway generations" (Mistral-reported, validated in live IDE usage — no absolute public numbers)

Long context:

- No MRCR/RULER measurement found; 128K window vendor-documented

### Normalized scores (1–100)

- **Tool use: 43/100.** Function calling supported in chat mode, but the model is FIM/autocomplete-first; no agentic or Tau-bench measurement; not designed for multi-turn tool loops.
- **Reasoning: 38/100.** No GPQA/HLE/MMLU-Pro publication for this model; it's a completion engine — knowledge-reasoning capability is out of scope by design.
- **Context window: 60/100.** 128K (vendor) / 8,192 max output — enough for repository-level FIM; sources conflict on the exact window, and no independent long-context retrieval benchmark exists.
- **Multimodal: 15/100.** Text/code only — floor per methodology.
- **Coding: 62/100.** HumanEval 86.6% (19/46 reporting) + live-IDE deltas (+30% accepted completions) — genuinely strong at FIM/autocomplete; unverified on SWE-bench-class agentic coding, so capped well below frontier coders.
- **Cost efficiency: 84/100.** $0.30/$0.90 with open-weights self-host option — cheap for a code model of this class; no free hosted tier.
- **Overall Score: 44/100.** Mean of (43 + 38 + 60 + 15 + 62) / 5 = 218/5 = 43.6 → 44. The right tool for IDE autocomplete and FIM at volume; not a general assistant and not an agentic SWE solver — evidence is completion-focused.

---

## Signature

- Provided by: **Inkling 2 Small (opencode/inkling-2-small)** — 2026-11-10
- Method: public internet research (vendor announcement + docs, trackers); scores are normalized 1–100 interpretations, not official vendor scores. Best fit: low-latency multi-language autocomplete/FIM inside an IDE; pair with a larger agentic model for multi-file tasks.
- Reference URLs:
  - [Mistral AI — Announcing Codestral 25.08](https://mistral.ai/news/codestral-25-08/)
  - [Mistral Docs — Codestral 25.08 (128k context, pricing)](https://docs.mistral.ai/models/codestral-25-08)
  - [CorX Labs — Codestral 25.08 specs, pricing and benchmarks](https://www.corx-labs.com/benchmarks/models/codestral-2508/)
  - [aisotools.com — Codestral 25.08 review](https://aisotools.com/blog/codestral-25-08-review-2026)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
