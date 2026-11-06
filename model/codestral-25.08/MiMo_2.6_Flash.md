# Codestral 25.08 — findings by MiMo 2.6 Flash

- Source: Mistral AI (`codestral-2508`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral 25.08
- **Short description:** Mistral's code-specialized 22B-class model for low-latency fill-in-the-middle (FIM) completion, code correction and test generation — the current GA "Premier" Codestral that the deprecated `codestral-2405` and `codestral-2501` API IDs now redirect to. Not an alias of another entry; it is the live successor in Mistral's Codestral line.
- **Provider / access:** Mistral La Plateforme (`api.mistral.ai` and the `codestral.mistral.ai` endpoint; Chat Completions + `/v1/fim/completions`, also `/v1/conversations`). Third-party hosts: OpenRouter `mistralai/codestral-2508`, AI/ML API, Eden AI, Kilo, NanoGPT, Google Vertex (`codestral-2`) — models.dev lists 12 providers. No OpenCode Zen Free ID exists (`noFreeId: true` in this folder's `meta.json`; absent from Zen's model list).
- **Release / knowledge:** 2025-07-30 (Mistral announcement + models.dev release date; Benchable shows Aug 01, 2025). Knowledge cutoff not published (models.dev: "-").
- **IDs:** `codestral-2508` (Mistral API, alias `codestral-latest`), `mistralai/codestral-2508`, `mistral/codestral-2508`.
- **Context window:** 128k per Mistral's own model card (how verified: `docs.mistral.ai/models/codestral-25-08`, fetched 2026-11-06); max output 8,192 (models.dev Mistral provider row, CorX Labs). **Discrepancy:** Benchable, OpenRouter, AI/ML API, Eden and CorX Labs all advertise 256,000–262,144 for the same model, and models.dev's provider rows say 256,000 while its canonical row says 128,000 — no long-context retrieval test exists either way, so the vendor's 128k is scored.
- **Modalities:** text + code in; text + code out. Tool/function calling (GA), structured outputs/JSON, predicted outputs, Document QnA, prefix/continuation, batching, FIM. No vision, no audio (Artificial Analysis catalog: vision "No"; Benchable: text input/text output only). No reasoning mode.
- **Pricing (as of 2026-11-06):** $0.30 in / $0.90 out per 1M tokens (Mistral docs), input cache read $0.03 (Benchable); batch processing −50% and cached input up to −90% per Mistral's pricing FAQ. Paid; some hosts slightly higher (AI/ML API $0.3174/$0.9522). No free tier.
- **Architecture:** ~22B dense (CorX Labs; consistent with the Codestral 22B lineage — Benchable's "~2.5B (Rumoured)" contradicts every other source and is treated as unreliable). Weights: closed (models.dev "Weights: Closed"; no public Hugging Face repo found); CorX Labs lists the license as "Mistral AI Non-Production". Exact parameter count is not published by the vendor.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Tool/function calling: supported and GA on `/v1/chat/completions` and `/v1/conversations` (Mistral docs feature list; models.dev capability flag "tools"; Artificial Analysis catalog: tool call "Yes") — capability verified, but no agentic benchmark number exists.

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found** (no independent AA row for this model)
- Benchable General Knowledge: **49.5%** (Benchable, 15th percentile)
- Benchable Mathematics: **3.0%** (Benchable, 8th percentile)
- Benchable Instruction Following: **57.0%** (Benchable, 54th percentile)
- Benchable Ethics: **97.0%** (Benchable, 30th percentile)
- Vendor IF eval v8: **+5% relative** vs prior Codestral; MultiplE average **+5% relative** (Mistral announcement, 2025-07-30 — relative deltas only, no absolute baseline published).

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench (25.08): **no verified public score found with confident attribution** — a 30.3% figure circulates via testingcatalog but the same sources attribute 31.5% to Codestral-2405 and 37.9% to 25.01 (Mistral's own table), so it is not used here.
- HumanEval: **86.6%** (CorX Labs, rank 19/46) — **disputed**: this is byte-identical to Codestral 25.01's official HumanEval in Mistral's benchmark table, so the CorX row is likely a mis-attribution; do not treat as verified for 25.08.
- Benchable Coding: **48.0%** (Benchable, 20th percentile) — Benchable's general coding battery, not FIM.
- Vendor IDE telemetry vs prior Codestral (Mistral announcement, production codebases): **+30% accepted completions**, **+10% retained code**, **50% fewer runaway generations**; "improved performance on academic benchmarks for short and long-context FIM completion" (no absolutes published).
- FIM: dedicated `/v1/fim/completions` endpoint, "SOTA for FIM use cases across the board" claimed for the family (vendor, qualitative).

Long context:

- No long-context retrieval (MRCR/RULER/GraphWalks) reported for 25.08; window is 128k per vendor docs with hosts advertising 256K (see model card).

### Normalized scores (1–100)

- **Tool use: 56/100.** Function calling, structured outputs, predicted outputs and Document QnA are GA features on the API (Mistral docs), but there is zero agentic benchmark evidence — Terminal-Bench, Tau3, GDPval-AA and Claw-Eval all return "no verified public score found", which caps the score in the low 50s.
- **Reasoning: 50/100.** Benchable puts it at GK 49.5% (15th percentile) and Math 3.0% (8th percentile) with only middling instruction-following (57.0%), and there is no GPQA/HLE/AA-Index row at all; a code-completion specialist with no reasoning mode.
- **Context window: 56/100.** Scored on the vendor's documented 128k (100K–200K tier = 50–64); hosts advertising 256K would move it to the 65–84 tier, but the official model card is authoritative and no long-context retrieval number exists to confirm either figure.
- **Multimodal: 15/100.** Text/code in, text/code out only (Artificial Analysis: vision "No") — text-only tier per methodology.
- **Coding: 66/100.** Strong FIM/completion story (vendor IDE telemetry +30% accepted completions, dedicated FIM endpoint, family FIM claims) but weak independent numbers: Benchable Coding 48.0% is only the 20th percentile, no SWE-bench/LiveCodeBench score can be confidently attributed to 25.08, and the lone HumanEval 86.6% is a probable mis-attribution from 25.01 — mid-60s with no agentic-coding evidence to go higher.
- **Cost efficiency: 95/100.** $0.30/$0.90 per 1M with $0.03 cache reads sits between the ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (~92) reference points; no free tier, but the price/performance point for a 22B-class coder is excellent.
- **Overall Score: 49/100.** Mean of Tool 56 + Reasoning 50 + Context 56 + Multimodal 15 + Coding 66 = 243/5 = 48.6 → 49. Best fit: a cheap, low-latency FIM/autocomplete engine for IDE completions and lightweight code fixes — not an agentic or reasoning coder.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-11-06
- Method: public internet research (vendor announcement + vendor docs + independent benchmark sites + model catalogs); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral — Announcing Codestral 25.08 (2025-07-30)](https://mistral.ai/news/codestral-25-08/)
  - [Mistral docs — Codestral model card (`codestral-2508`, 128k, $0.30/$0.90, features)](https://docs.mistral.ai/models/codestral-25-08)
  - [Benchable — Mistral: Codestral 2508 (IF 57.0 / GK 49.5 / Math 3.0 / Coding 48.0, pricing)](https://benchable.ai/models/mistralai/codestral-2508)
  - [Models.dev — Codestral 25.08 (12 providers, context/output limits, release date)](https://models.dev/models/mistral/codestral-2508)
  - [Mistral — Codestral 25.01 announcement (official benchmark table; source of the disputed 86.6% HumanEval and the Codestral-2405 comparison row)](https://mistral.ai/news/codestral-2501/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
