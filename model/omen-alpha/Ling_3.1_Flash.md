# Omen Alpha — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Omen Alpha
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **IDENTITY NOTE:** Omen Alpha is an **unannounced, anonymously served** coding model (model ID `omen-alpha` at omenalpha.io / TokenRa; OpenCode lab: "Unknown"). The vendor is not publicly confirmed; community forensics (tokenizer, API routing, self-identification) point to the **Zhipu GLM-5 family** — possibly an unreleased GLM-5.4 preview (55% community probability), a coding-tuned GLM-5.3-Flash (30%), or a GLM-5.3 Air variant with speculative decoding (12%). The lineage hypothesis is evidence about identity, NOT capability evidence, and was not used to score any dimension. Widely reported as the "2.0 successor to Ox Alpha" (Ox Alpha was later confirmed by Z.ai as GLM-5.3-Flash); the relationship is unconfirmed.

## Model card

- **Name:** Omen Alpha
- **Short description:** Anonymous low-cost reasoning coding model, widely reported as a stealth preview; fast multi-file code generation (~180 tok/s) with occasional context drift beyond ~20 turns.
- **Provider / access:** TokenRa (tokenra.io/register; API key from dashboard); OpenAI-compatible Chat Completions; also surfaces anonymously across developer gateways (OpenCode lists it as `unknown/omen-alpha`).
- **Release / knowledge:** Not announced; first community coverage 2026-09-04 (RankLLMs forensic analysis). Knowledge cutoff not captured.
- **IDs:** `omen-alpha`; folder `omen-alpha`.
- **Context window:** Not published; max output 128K (ModelBenchmark). Parameters not public.
- **Modalities:** Not documented (coding model; no vision evidence captured).
- **Pricing (as of 2026-10):** $0.20 / $0.66 per 1M input/output; cached read $0.04 per 1M (TokenRa). Observed benchmark-run cost $0.03 per prompt.
- **Data terms:** 0-day retention; "not used for training" (TokenRa).
- **Architecture:** Not disclosed; ~180 tok/s sustained multi-file generation suggests a Flash-class or quantized/air variant with sparse expert routing and speculative decoding (community inference, flagged).

### Raw benchmarks found

**OpenCode leaderboard snapshot (2026-09-04; OpenCode environment; "Omen Alpha (High)" configuration; five-point project rubric; grader weights and test assertions not published):**
- OpenCode coding score **23.14 / 40** — leaderboard rank **#15**; code quality **9.94 / 20** (expanded view; not summed with the project rows).
- Project rows: CSV import (PHP) **4/5**; offline sync (PHP) **3.5/5**; bank feed (Dart/Flutter) **2.7/5**; shipping quotes (Go) **3/5**.
- Average cost $0.03 per prompt; average elapsed time 01:51 per prompt. No directly comparable Ox Alpha run is published, so no like-for-like comparison is claimed.

**OpenCode usage telemetry (2026-10-02):** rank #33 by tokens (12B tokens over two months, 0.3% share, +100% change); 75K unique users; 533,212 completed sessions; 4.2M average tokens/session; $0.2273 average cost/session; $121,174 total spend; 93.2% of input tokens served from cache; 65.4% weekly retention.

**Identity forensics (RankLLMs, 2026-09-04; independent):**
- 95-probe tokenizer battery: **Zhipu GLM-5 family 100.0% match (95/95, 0 errors** — exact on code indents, special tokens, multi-byte Unicode) vs Qwen 3.8 62.1%, Kimi K3 54.7%, DeepSeek V4 48.4%. Tokenizer match identifies the family, not the checkpoint (GLM-5.2/5.3/5.3-Flash share vocabularies).
- API routing: early requests routed under an internal `zhipu/omen-alpha` path before being sanitized to `unknown/omen-alpha`.
- Self-identification: when prompted, the model responded "Under the hood, I'm powered by GLM, a large language model trained by Z.ai."
- Throughput: ~180 tok/s sustained vs GLM-5.3's ~85 tok/s (+111.7%).
- Community hypothesis probabilities: unreleased GLM-5.4 preview 55%; coding-tuned GLM-5.3-Flash 30%; GLM-5.3 Air with speculative drafter 12%; third-party clone <3% (refuted by the tokenizer match).

**No standard benchmarks captured:** no SWE-bench, Terminal-Bench, GPQA, HLE, or Tau-bench rows for omen-alpha exist in the sources reviewed; OpenCode's own compare page renders all capability dimensions as "50/100 — No data; neutral placeholder."

## Scores

- **Tool use: 46/100.** No tool-use benchmark captured; the OpenCode project rubric is the only agentic evidence.
- **Reasoning: 46/100.** No reasoning benchmark captured; reasoning behavior is only indirectly evidenced (thinking traces, forensics).
- **Context window: 55/100.** Context window not published (max output 128K); user reports of context drift beyond ~20 turns.
- **Multimodal: 15/100.** No multimodal evidence; treated as text-only until documented otherwise.
- **Coding: 57/100.** OpenCode coding score 23.14/40 (≈58%) at #15; strong single-turn coding per user reports; 2.7/5 on the Dart/Flutter bank-feed project is the weakest row; undocumented rubric limits transferability.
- **Cost efficiency: 89/100.** $0.20/$0.66 per 1M with $0.04 cache reads; $0.03/prompt observed; 0-day retention.
- **Overall Score: 43.8/100.** Mean of Tool use 46, Reasoning 46, Context window 55, Multimodal 15, Coding 57 = 43.8.

> **Gap vs folder average (63.0): −19.2.** The peer set appears to price in the GLM-lineage hypothesis (if this is GLM-5.4-class, standard benchmarks would score far higher). This report scores only what was measured — one OpenCode leaderboard snapshot with an undocumented rubric and zero standard benchmarks. The gap is an evidence gap, not a capability verdict; if Z.ai confirms the identity and publishes benchmarks, the score should be revisited. (The same playbook preceded Ox Alpha's confirmation as GLM-5.3-Flash by 2-3 weeks.)

## Notes

- Verification trail: omenalpha.io (specs; TokenRa pricing; benchmark page with the 2026-09-04 OpenCode snapshot and methodology), OpenCode Data (`unknown/omen-alpha` usage telemetry; compare page "No data" placeholders), RankLLMs (2026-09-04 forensic analysis: tokenizer battery, API routing, self-identification, 180 tok/s telemetry, hypothesis table), ModelBenchmark (max output 128K; Epoch AI/SWE-bench/LiveBench/Aider sourcing note).
- Known conflicts: identity — anonymous (vendor) vs GLM-5-family forensics (community); pricing listed on TokenRa only; no benchmark suite overlaps to reconcile.
- Open questions: vendor confirmation; context window; standard benchmark rows; whether the stealth period ends in an official announcement (as with Ox Alpha → GLM-5.3-Flash).

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: vendor confirmation, standard benchmarks, context-window spec.
