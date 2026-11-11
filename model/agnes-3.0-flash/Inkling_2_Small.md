# Agnes 3.0 Flash — findings by Inkling 2 Small

- Source: Sapiens AI (Singapore) / Agnes AI (`agnes-3.0-flash`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 3.0 Flash (`agnes-3.0-flash`)
- **Short description:** Agnes AI's new-generation text model for agentic coding and tool-driven tasks — successor step in the Agnes Flash line (2.0 → 2.5 → 3.0), focused on stable execution, tool orchestration, and trustworthy delivery over long-running agent tasks. Distinct from the open-weights 33B preview checkpoint on Hugging Face; the API model is the production checkpoint.
- **Provider / access:** Agnes AI API — OpenAI-compatible `https://apihub.agnes-ai.com/v1` (Chat Completions, Responses, Anthropic Messages), model id `agnes-3.0-flash`. Open-weights preview (`Agnes-AI/Agnes-3.0-Flash`, Apache 2.0, 33B, ~262K ctx) exists on Hugging Face but is a different checkpoint from the production API model.
- **Release / knowledge:** 2026-09-11 (per Franklin AI catalogue, llm-releases, and Gradually AI — all retrieved 2026-11-11 contextually; official docs list it as available now). Knowledge cutoff not published.
- **IDs:** `agnes-3.0-flash` (production API); HF `Agnes-AI/Agnes-3.0-Flash` (Apache 2.0 preview weights, different checkpoint)
- **Context window:** **512K** tokens per current API docs ("Limits and Pricing"); the model card lists **1M** for the newer API checkpoint — the two official sources disagree (Gradually AI flags the same conflict). Maximum output **65,536 tokens** (both agree).
- **Modalities:** text + image URL in; text out; reasoning/thinking supported (`chat_template_kwargs.enable_thinking` / Anthropic `thinking` budget, suggested 2048 tokens); Function Calling yes; streaming yes; JSON outputs via API compatibility. No native audio/video.
- **Pricing (as of 2026-11-11):** cached input **$0.005/1M**, input **$0.05/1M**, output **$0.15/1M**; trial price **$0** across all three (promotion, no stated end date). Same current pricing table as Agnes 2.5 Flash docs.
- **Architecture:** undisclosed parameter count for the API checkpoint (Agnes AI does not state one); open preview checkpoint is a 33B model with a 262,144-token context, hybrid attention, Apache 2.0.

### Raw benchmarks found

Third-party-tracked numbers exist but are **mixed-provenance**: vendor-reported values (Agnes AI model card, HF `refs/pr/4`) vs Franklin AI's synced catalogue (which attributes to "independent third-party model evaluations") — the two disagree, and Artificial Analysis currently marks the Intelligence Index ~35–36 as an **estimate** with independent evaluation still ongoing. No completed, reproducible third-party run of the exact API ID could be found. Treat every number below as low-confidence until AA/BenchLM publish a verified row.

Agent / tool use:

- IFBench: **74.2** (vendor-reported, Agnes AI model card, HF refs/pr/4) — instruction-following, adjacent to tool reliability, not a tool benchmark
- no SWE-bench / Terminal-Bench / tool-orchestration row found for the exact API ID

Reasoning / knowledge:

- GPQA Diamond: **85.05** (vendor-reported, model card) / **92.4%** (Franklin AI catalogue — different measurement, conflict unresolved)
- HLE: **38.5%** (Franklin AI catalogue; model card does not publish HLE)
- AA-Omniscience Accuracy: **23** (vendor-reported, model card)
- AA Intelligence Index: **35.5** (Franklin AI) / **36** (AA v4.3, marked "estimate — independent evaluation ongoing" per Gradually AI note)
- No MMLU/GPQA independent reproduction found

Coding:

- SciCode: **38.08** (vendor-reported, model card) / **51.6%** (Franklin AI catalogue — conflict)
- no SWE-bench Verified / LiveCodeBench / Terminal-Bench rows found

Long context:

- AA-LCR: **68.33** (vendor-reported, model card) / **81.0%** (Franklin AI — conflict); 512K–1M window (sources disagree), no independent long-context retrieval row verified

Multimodal:

- Image URL input documented; no verified public multimodal benchmark found

### Normalized scores (1–100)

Scores are normalized 1–100 interpretations, not vendor scores; every row carries provenance. Cost efficiency excluded from Overall per project rules.

- **Tool use: 45/100.** No tool-use benchmark of any kind exists for this ID; closest signal is IFBench 74.2 (vendor-reported instruction-following). Absence of agentic rows caps this hard.
- **Reasoning: 62/100.** GPQA 85.05 (vendor) / 92.4 (Franklin) is strong on its face and HLE 38.5 (Franklin) is respectable, but AA-Omniscience 23 is weak, the AA Intelligence Index (~35.5) is explicitly an estimate with evaluation ongoing, and nothing is third-party reproduced — cap accordingly.
- **Context window: 72/100.** 512K per API docs (1M claimed by model card) with vendor AA-LCR 68.33 — real-world capability unverified, but the window itself is generous.
- **Multimodal: 25/100.** Accepts image URLs (text out only), above the 15 text-only floor, but zero image benchmarks exist and coverage is unverified.
- **Coding: 42/100.** SciCode 38.08 (vendor) / 51.6 (Franklin) vs no SWE-bench or LiveCodeBench rows anywhere — insufficient verified coding evidence; clearly behind dedicated coding models.
- **Cost efficiency: 95/100.** $0.05 / $0.15 per 1M with $0.005 cached reads and a $0 trial promotion — among the cheapest credible models tracked; unrestricted by price for typical agent workloads.
- **Overall Score: 49/100.** Mean of (45+62+72+25+42)/5 = 246/5 = 49.2 → half-up 49. Best fit: an extremely cheap, large-context text model for budget agent experiments — fine for trials, not yet for production trust; wait for Artificial Analysis' completed evaluation.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-11 UTC
- Method: public internet research (official Agnes AI docs `agnes-30-flash`, Hugging Face model card `refs/pr/4`, Franklin AI daily-synced catalogue, Gradually AI source-graded aggregation, llm-releases). Benchmarks are vendor-reported or third-party-aggregate, never independently reproduced for this exact ID — flagged throughout. Slug `agnes-3.0-flash` normalized per project slug rules; folder scaffolded fresh (no prior folder or alias-roster entry).
- Reference URLs:
  - [Agnes 3.0 Flash — Agnes AI docs](https://wiki.agnes-ai.com/en/docs/agnes-30-flash)
  - [Agnes-AI/Agnes-3.0-Flash — Hugging Face](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash)
  - [Agnes 3.0 Flash — Franklin AI catalogue](https://franklineh.com/ai-benchmark/agnes-3-0-flash)
  - [Agnes 3.0 Flash — Gradually AI (source-graded)](https://www.gradually.ai/en/ai-models/agnes-3.0-flash/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
