# Agnes 2.5 Flash — findings by Muse Glimmer 30B

- Source: Sapiens AI / Agnes 2.5 Flash (`agnes-2.5-flash`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 2.5 Flash
- **Short description:** Sapiens AI's high-throughput flash-tier MoE model aimed at everyday coding, agent workflows and tool use with a 512K context window. Text + image in; text out.
- **Provider / access:** Agnes AI API `https://apihub.agnes-ai.com/v1` — OpenAI-compatible Chat Completions, Responses and Anthropic-compatible Messages. Also routed as `sapiens-ai/agnes-2.5-flash` on ZenMux AI. Catalog id `opencode/agnes-2.5-flash`.
- **Release / knowledge:** Launched 2026-07-13 per launch coverage; hands-on review published 2026-07-15. Knowledge cutoff not announced.
- **IDs:** `agnes-2.5-flash` (Agnes API), `sapiens-ai/agnes-2.5-flash` (ZenMux), `opencode/agnes-2.5-flash` (repo catalogue)
- **Context window:** 512K total / ~65.5K max output per official docs; ZenMux routing reports 524,290 tokens. Verified via vendor docs and gateway listings.
- **Modalities:** Text and image in; text out. Thinking mode, tool calling, streaming output.
- **Pricing (as of 2026-11-13):** List $0.05 in / $0.15 out / $0.005 cached per 1M tokens; trial / current offer $0 in / $0 out. Vendor states Flash remains free rather than a limited promo.
- **Architecture:** Proprietary hosted MoE. Parameter counts and licence not disclosed.

### Raw benchmarks found

> All numbers below are from Sapiens AI's own internal evaluation published 2026-07-15 and reproduced by a third-party hands-on review. No independent leaderboard run for this exact ID was found on Artificial Analysis, BenchLM, LiveCodeBench or GPQA/HLE trackers.

Agent / tool use:

- Terminal-Bench 2.1: **62.3%** (Sapiens AI internal eval, published 2026-07-15; predecessor Agnes 2.0 Flash 52.5%)
- SWE Atlas — Codebase QnA: **36.5%** (same internal eval; 2.0 Flash 15.8%)
- SWE Atlas — Test Writing: **27.5%** (same internal eval; 2.0 Flash 13.8%)
- SWE Atlas — Refactoring: **29.5%** (same internal eval; 2.0 Flash 11.4%)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **36.5%** as above

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **75.6%** (Sapiens AI internal eval, published 2026-07-15; 2.0 Flash 72.4%)
- SWE-bench Pro: **50.4%** (same internal eval; 2.0 Flash 49.6%)
- SWE-bench Multilingual: **69.1%** (same internal eval; 2.0 Flash 67.3%)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval measurement published at 512K; window is vendor spec, not a demonstrated retrieval result.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.1 62.3% plus SWE Atlas QnA 36.5% / Test Writing 27.5% / Refactoring 29.5% with native tool calling and thinking mode places it in the top mid band. Capped by absence of Tau3-Banking, GDPval-AA, Claw-Eval and independent reproduction.
- **Reasoning: 60/100.** No GPQA Diamond, HLE, LCR/MLCR, CritPt or Artificial Analysis Intelligence Index figure exists for this ID. Anchored conservatively from coding profile only and held below frontier until knowledge-reasoning benchmarks are published.
- **Context window: 85/100.** 512K total per official docs, max output ~65.5K, lands in the bottom of the 500K–1M tier. Not higher because no MRCR/RULER retrieval % at that length has been measured or published.
- **Multimodal: 62/100.** Text + image in via image_url, text out, with documented image understanding. No video/audio/PDF input and no non-text output, capping in the +image-in band.
- **Coding: 72/100.** SWE-bench Verified 75.6% / Multilingual 69.1% / Pro 50.4% with Terminal-Bench 62.3% is upper-mid. Low SWE Atlas tracks and absence of LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE and Coding Index cap the score.
- **Cost efficiency: 100/100.** Verified $0 route via trial pricing and ZenMux $0/$0 serving. Vendor states free tier is permanent. $0 = 100 per methodology.
- **Overall Score: 70/100.** Mean of Tool 70 + Reasoning 60 + Context 85 + Multimodal 62 + Coding 72 = 69.8 → 70. A genuinely cheap mid-tier coding/agent model with a large spec’d context window; ceiling set by vendor-only benchmarks and lack of verified reasoning/retrieval numbers.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-11-13
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. All benchmark rows are Sapiens AI internal evaluation reproduced by third-party review; no figure was taken from another agent's findings file.
- Reference URLs:
  - [Agnes-2.5-Flash Review: A Free AI Coding Model Tested on Bug Fixing, App Building, and Multi-File Refactoring](https://we0.ai/articles/agnes-2-5-flash-review-a)
  - [Sapiens AI: Agnes 2.5 Flash on ZenMux (route, current $0 pricing, 524,290-token entry)](https://zenmux.ai/sapiens-ai/agnes-2.5-flash)
  - [Agnes-2.5-Flash on Phaseo (release date 2026-08-10, parameters not listed)](https://phaseo.app/models/sapiens-ai/agnes-2.5-flash)
  - [Agnes AI Wiki — Agnes 2.5 Flash docs](https://wiki.agnes-ai.com/en/docs/agnes-25-flash)
  - [Agnes 2.5 Flash — pricing & specs (AIHubMix)](https://aihubmix.com/model/agnes-2.5-flash)
