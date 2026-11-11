# Mercury Edit 2 — findings by GLM 5.3 Flash

- Source: Inception Labs (`mercury-edit-2` — Inception Platform next-edit endpoint)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Edit 2
- **Short description:** Inception Labs' purpose-built diffusion LLM (dLLM) for next-edit prediction (2026): given your recent edits and codebase context it predicts the edit you'll make next, generating tokens in parallel for Tab-to-accept latency. A specialist editor endpoint that complements (not replaces) a chat/coding agent; part of the Mercury dLLM family (Mercury 2 was named to TIME's Best Inventions of 2026; Mercury 3 shipped 2026-10-19).
- **Provider / access:** Inception Platform API (next-edit capability, docs.inceptionlabs.ai); integrated in Zed (edit prediction provider), Kilo (Next-Edit default for new users), and ProxyAI. OpenAI-style API surface; not a chat/agentic endpoint.
- **Release / knowledge:** launched 2026-03-30 (blog index dating; Kilo integration 2026-06-22; blog page carries a 2026-09-09 update stamp, published page dated 2026-10-29); knowledge cutoff not stated.
- **IDs:** `mercury-edit-2` (Inception Platform); Zed integration id `mercury-coder`.
- **Context window:** Not announced — Inception publishes no context window for the edit model; trackers note it is inherited from the Mercury 2 family (Mercury 2.5 lists 260,000 total / 65,536 output on models.dev — unverified for this SKU).
- **Modalities:** Text (code) in, text out; no tool calling, no image/audio, no structured outputs documented — it returns targeted next-edit suggestions.
- **Pricing (as of 2026-11-11):** $0.25 in / $0.75 out per 1M tokens; cached input $0.025. Every new Inception account gets 10M free tokens; Zed users unlock 1 free month; Kilo's free Next-Edit month ended 2026-07-23.
- **Architecture:** diffusion LLM (dLLM) — parallel token refinement rather than left-to-right decoding; trained on a curated multi-language edit dataset, then aligned with KTO (unpaired RL) on recorded accept/reject feedback from real usage.

### Raw benchmarks found

From Inception's announcement (quality = average of four next-edit benchmarks: open-sourced Instinct, Fill-in-the-Middle (human-eval-infilling, test-case-validated), Next-Edit Prediction (LLM-judged), plus one internal; speed = end-to-end latency on representative requests):

- Overall next-edit quality: **75.6%** at **221 ms** end-to-end latency — beats Zeta 2 (64.4%), Claude 4.5 Haiku (71.4%), GPT-5.4 Nano (73.5%)
- Accept-rate lift: **+48%** more accepted edits vs Inception's previous next-edit model (KTO alignment)
- Selectivity: **-27%** shown rate — 27% fewer, more targeted suggestions
- Per-benchmark Instinct/FIM/NEP values are published only as a chart image — no verified numeric rows
- SWE-bench Verified, LiveCodeBench, Terminal-Bench, GPQA, BFCL: no verified public score found (not applicable — not a chat/agentic model)

Long context:

- no long-context retrieval reported (context length unpublished for this SKU)

### Normalized scores (1–100)

- **Tool use: 15/100.** No tool-calling, no agentic loop, no function interface — a single-purpose edit-suggestion endpoint; scored on the text-only-specialist floor.
- **Reasoning: 25/100.** Next-edit prediction with edit-history interpretation is genuine code reasoning within its scope (75.6% judged quality), but no general reasoning benchmark exists and the task is deliberately narrow.
- **Context window: 45/100.** Unpublished for this SKU ("Not announced"); family members list 256K–260K total, and the edit workload is inherently local-history sized — scored conservatively on the unverified-family-inheritance midpoint.
- **Multimodal: 15/100.** Text (code) only — no image/file input, no non-text output.
- **Coding: 72/100.** Best-in-class at its measured task: 75.6% next-edit quality at 221 ms, ahead of GPT-5.4 Nano (73.5%), Claude 4.5 Haiku (71.4%) and Zeta 2 (64.4%), with +48% accept and -27% shown-rate alignment wins; capped hard because no general coding harness (SWE-bench, LiveCodeBench, agentic loops) has been run and its scope is edits, not project-scale engineering.
- **Cost efficiency: 95/100.** $0.25/$0.75 per 1M with $0.025 cached reads — near the ~$0.10/$0.20=97–99 anchor; 10M free tokens per new account and free editor-integration months sweeten it.
- **Overall Score: 34/100.** Mean of the five non-cost dims (15+25+45+15+72)/5 = 34.4. Best-fit recommendation: excellent at exactly one thing — sub-250ms next-edit suggestions inside Zed/Kilo/ProxyAI — and structurally incomparable to general chat/agent models on the five quality dims; wire it in as an editor speedup, not an agent.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-11
- Method: public internet research (official Inception Labs announcement, Kilo integration post, Inception/X headline figures); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inception Labs — Introducing Mercury Edit 2 (official announcement, pricing)](https://www.inceptionlabs.ai/blog/introducing-mercury-edit-2)
  - [Inception on X — Mercury Edit 2 headline benchmark figures (75.6% @ 221ms vs Zeta 2 / Claude 4.5 Haiku / GPT-5.4 Nano)](https://x.com/_inception_ai/status/2039025542167695803)
  - [Kilo Blog — Announcing Next-Edit in Kilo, Powered by Inception](https://blog.kilo.ai/p/announcing-next-edit-in-kilo-powered-by-inception)
  - [BenchLM — Mercury Edit 2 pricing, specs & sources](https://benchlm.ai/models/mercury-edit-2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
