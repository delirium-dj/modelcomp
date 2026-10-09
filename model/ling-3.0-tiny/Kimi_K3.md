# Ling-3.0-Tiny — findings by Kimi K3

- Source: inclusionAI / Ant Group (`ling-3.0-tiny`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-Tiny
- **Short description:** Smallest member of inclusionAI's Ling 3.0 family (open-weighted 2026-08-06): a 7.9B-total / 1.3B-active hybrid-linear MoE aimed at edge/local agent loops — switchable Thinking and Instant modes, native function calling, 256K context. Siblings: Ling-3.0-Flash (124B/5.1B), Ring-2.6-1T.
- **Provider / access:** OpenRouter `inclusionai/ling-3.0-tiny` (+ launch-time `:free` variant); Vercel AI Gateway; OpenRouter/OrcaRouter gateways; **open weights on HF `inclusionAI/Ling-3.0-tiny` (+ `Ling-3.0-tiny-base`), MIT license** (bailing_hybrid arch; GGUF quants by community). Runs on a single DGX Spark / M4 Pro at FP8.
- **Release / knowledge:** 2026-08-06 (HF/OR); knowledge cutoff not published.
- **IDs:** `inclusionai/ling-3.0-tiny` (OpenRouter), `inclusionAI/Ling-3.0-tiny` (HF). Zen Free listing not verified.
- **Context window:** 256K (262,144 on gateways); ~32K max output.
- **Modalities:** text in → text out; Thinking/Instant switch (default reasoning on); native function calling; prompt caching.
- **Pricing (as of 2026-10-09):** gateway list **$0.06 / $0.18 ($0.01 cached)** per 1M; launch free windows on OpenRouter/Vercel; MIT weights = free self-host.
- **Architecture:** sparse MoE: 7.9B total / 1.3B active per token; 3:1 KDA(linear)/MLA hybrid stack (same family recipe as Ling-3.0-Flash); 128 routed experts, top-8 + 1 shared.
- **Speed:** ~168 tok/s observed on consumer-grade hardware (kinonn research vault); AA speed N/A.
- **Measured verbosity:** ~210M output tokens across AA's Intelligence Index (vs 63M median) — watch output-token spend.

### Raw benchmarks found

(Independent: Artificial Analysis via OpenRouter/orcarouter/kinonn vault; vendor published no benchmark table)

- Artificial Analysis Intelligence Index (v4.1.1): **23–25** (23 per OrcaRouter launch coverage, 25 per kinonn vault; ~6 pts above Qwen3.6-35B-A3B-class peers; for scale comparison Ling-3.0-Flash = 37, Ling-2.6-1T = 26 — 3 pts above the prior 1T flagship with 48x fewer active params)
- AA Agentic Index: **~16** (kinonn vault)
- Component evals in the index: GDPval-AA v2, τ³-Banking, Terminal-Bench 2.1, SciCode, HLE, GPQA Diamond, CritPt, AA-Omniscience, AA-LCR — per-row public numbers not surfaced in my sources
- SWE-bench / LiveCodeBench / GPQA standalone: no verified public score found

Long context: 256K window claimed; no independent MRCR/RULER/AA-LCR row found.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 55/100.** Native function calling + prompt caching + agent-first marketing with AA Agentic Index ~16; no public Tau/BFCL numbers; capped by unmeasured multi-step reliability.
- **Reasoning: 58/100.** AA Index 23–25 at 1.3B active is exceptional per-parameter (above the prior 1T flagship); absolutely still a small model — capped below host-scale reasoners.
- **Context window: 66/100.** 256K window designed for long agent loops; no independent retrieval measurement surfaced — unverified-capped.
- **Multimodal: 15/100.** Text-only (all listings agree) — methodology floor.
- **Coding: 45/100.** Built for tool-using agents but no public coding benchmark exists; Terminal-Bench 2.1 and SciCode sit inside its AA index without published values — unverified-capped.
- **Cost efficiency: 95/100.** $0.06/$0.18 list, launch free windows, MIT weights that fit on consumer silicon — the efficiency floor of the family.
- **Overall Score: 48/100.** Mean of 55/58/66/15/45 = 47.8 → 48. Best fit: edge/high-volume agent plumbing (classification, extraction, tool-calling chains) where per-token cost and local hosting dominate over raw depth.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (orcarouter.ai launch analysis with AA figures, OpenRouter listing, HF repo/cards (`Ling-3.0-tiny`, `-base`, `-singprobe`), aitoolsreview.co.uk review, llm-releases.com architecture note, kinonn research vault, developer.ant-ling.com docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
