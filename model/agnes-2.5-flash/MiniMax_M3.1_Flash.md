# Agnes 2.5 Flash — findings by MiniMax M3.1 Flash

- Source: Sapiens AI (Agnes 2.5 Flash)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Agnes 2.5 Flash
- **Short description:** Sapiens AI's Singapore-built flash-tier MoE model for everyday coding, agent workflows and tool calling, released as a generally-available upgrade of Agnes 2.0 Flash on 2026-07-13. Text and image input, text output, 512K context, and the cheapest published list price in this comparison.
- **Provider / access:** Sapiens AI API hub at `https://apihub.agnes-ai.com/v1` with the model id `agnes-2.5-flash`; OpenAI-compatible Chat Completions (`POST /v1/chat/completions`), OpenAI Responses (`POST /v1/responses`) and Anthropic-compatible Messages (`POST /v1/messages`) are all documented. Also distributed through third-party resellers (OpenRouter-style aggregators list `sapiens-ai/agnes-2.5-flash`); not present in the public OpenCode Zen catalogue checked on 2026-11-12.
- **Release / knowledge:** 2026-07-13 (launch day for Agnes 2.5 Flash and the Agnes Code desktop client; internal evaluation table posted by Sapiens AI the same week). Knowledge cutoff not published.
- **IDs:** API model id `agnes-2.5-flash` (deprecated predecessor `agnes-2.0-flash`); repository catalogue id `opencode/agnes-2.5-flash`; open base checkpoint `Agnes-AI/Agnes-2.5-Flash-Base` on Hugging Face.
- **Context window:** 512K tokens total with a 65.5K maximum output, stated in the official model documentation under "Limits and Pricing". Launch coverage from 2026-07-25 states 256K / 65K instead; the current official documentation is taken as authoritative. No long-context retrieval measurement has been published for the served model.
- **Modalities:** text and image (publicly reachable image URLs) in; text out; thinking mode supported (`enable_thinking` in OpenAI-compatible requests, `thinking.budget_tokens` in Anthropic-compatible requests); tool calling / function calling supported; streaming supported; no audio input, no video input and no non-text output documented.
- **Pricing (as of 2026-11-12):** list price $0.05 input / $0.15 output / $0.005 cached input per 1M tokens, with a $0 trial price for all three categories; launch coverage reported the free tier as permanent and unlimited with a 30 requests-per-minute cap for free accounts (about 20 RPM achievable in practice). Cost is therefore near-floor but rate-limited and quota-bound; privacy and data-usage terms for the free allowance are not spelled out on the model page.
- **Architecture:** sparse Mixture-of-Experts. The released base checkpoint `Agnes-2.5-Flash-Base` is a 202B-total / roughly 16B-active decoder-only MoE (48 layers, 160 routed experts with 6 active plus 1 shared, Multi-head Latent Attention with KV compression, YaRN rotary scaling to 1,048,576 tokens, hyper-connections), released as an FP8 checkpoint of about 190 GB under Apache License 2.0. The served chat model is proprietary; the base weights are the only open artefact and are explicitly *not* the same checkpoint as the API model (no SFT or RLHF applied).

### Raw benchmarks found

Every number published for Agnes 2.5 Flash comes from **Sapiens AI's own internal evaluation** (an official vendor post on 2026-07-12 and a seven-row chart reproduced by we0.ai). No independent leaderboard run of `agnes-2.5-flash` exists: Artificial Analysis lists only two Sapiens AI models (Agnes 2.5 Pro Theta and Agnes 2.5 Pro Beta) and has no row for the Flash variant, and there is no BenchLM or LLM Stats entry either.

Agent / tool use:

- Terminal-Bench 2.1: **62.3** (vendor internal evaluation; Agnes 2.0 Flash scored 52.5 on the same internal run).
- Claw-Eval / ClawProBench: **no verified public score found for Agnes 2.5 Flash**. The only Claw-Eval number in the public record is **60.9 Pass@3, rank 9** for the predecessor **Agnes 2.0 Flash**; the vendor states that 2.5 Flash improves on 2.0 in every published benchmark but has not disclosed its own Claw-Eval score, so the 60.9 figure is recorded as predecessor evidence only and is not transferred to 2.5.
- Toolathon / MCP-Atlas / GDPval-AA / Tau3-Banking: **no verified public score found**.
- Agentic-workflow evidence is qualitative: Sapiens AI's own CodeAgents system (structured pseudocode instead of natural language for multi-agent hand-off) and its DSPO reinforcement-learning recipe (sequence-level policy optimisation with dynamic filtering of all-fail / all-pass trial groups) are the company's stated sources of agent reliability, and the independent review's three hands-on tasks all required multi-step tool use inside a desktop agent.

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**.
- HLE / LCR / MLCR / CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (no listing exists for the Flash variant).
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**.
- The published internal chart is entirely coding-oriented, so the only reasoning-adjacent evidence for this generation is the predecessor's Claw-Eval Pass@3 60.9 ranking and Sapiens AI's DSPO results (a 7B agent trained with DSPO reported a 34.1% improvement over a same-size GRPO baseline and a ~9% relative gain over a 14B baseline) — a method-level claim, not a score for this model.

Coding:

- SWE-bench Verified: **75.6** (vendor internal evaluation; Agnes 2.0 Flash 72.4, Agnes 2.5 Pro 82.7 on the same internal chart).
- SWE-bench Pro: **50.4** (vendor internal evaluation; Agnes 2.0 Flash 49.6).
- SWE-bench Multilingual: **69.1** (vendor internal evaluation; Agnes 2.0 Flash 67.3).
- SWE Atlas — Codebase QnA: **36.5** (vendor internal evaluation; Agnes 2.0 Flash 15.8 — the largest single generation-over-generation gain in the chart).
- SWE Atlas — Refactoring: **29.5** (vendor internal evaluation; Agnes 2.0 Flash 11.4).
- SWE Atlas — Test Writing: **27.5** (vendor internal evaluation; Agnes 2.0 Flash 13.8).
- LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench / Terminal-Bench 4.0: **no verified public score found**.
- Independent hands-on (we0.ai, 2026-07-15, three practical tasks): the model located a manually inserted gravity bug in an unfamiliar MelonJS repository from the visible symptom only (about three minutes to diagnose, roughly 12 seconds to apply the repair), built a working single-file HTML "AI Frontend Arena" that the reviewer then reused to compare other models, and completed a multi-file two-player racing-mode modification across an existing game project in roughly ten to twenty minutes. The reviewer notes the model still needs test execution, patch review and human oversight on production repositories.

Long context:

- MRCR / RULER / GraphWalks at 512K or beyond: **no long-context retrieval measurement published** for the served `agnes-2.5-flash`.
- Long-context evidence is therefore specification-level only: a documented 512K context with a 65.5K output ceiling, and — for the underlying base checkpoint only — a 1,048,576-token YaRN-scaled window with a sparse top-512 token indexer and per-layer KV compression ratios alternating between 4 and 128. The base checkpoint's long-context ability is not a measurement of the served chat model.

### Notes on identity

Agnes 2.5 Flash is a served chat model of Sapiens Technology Pte. Ltd. (Singapore), the model brand of the company founded in 2024–2025 and led by CEO Bruce Yang. It launched on 2026-07-13 together with the Agnes Code desktop agent, replacing the now-deprecated `agnes-2.0-flash` on the same OpenAI-compatible endpoint path. The open `Agnes-AI/Agnes-2.5-Flash-Base` checkpoint on Hugging Face is the pre-training stage of the same generation — its own card states it has had no instruction tuning or RLHF — so its 202B/16B shape and 1M-token window describe the foundation, not the API model the documentation serves at 512K. The companion model `agnes-2.5-pro` (internal benchmark table: SWE-bench Verified 82.7) is a different, higher-priced tier and is not this entry.

Identity cautions: the context figure differs between sources (512K in the official documentation versus 256K in 2026-07-25 launch coverage), and the served model id (`agnes-2.5-flash`) differs from the open checkpoint name (`Agnes-2.5-Flash-Base`); the repository catalogue id `opencode/agnes-2.5-flash` does not correspond to any entry in the public OpenCode Zen model list checked on 2026-11-12, so the model was not independently reachable through that catalogue on that date.

### Conflicting evidence (vendor vs independent) and how it was resolved

Vendor: Sapiens AI publishes a seven-row internal coding comparison in which Agnes 2.5 Flash beats its own 2.0 Flash on every benchmark (Terminal-Bench 2.1 62.3 vs 52.5, SWE-bench Verified 75.6 vs 72.4, SWE Atlas QnA 36.5 vs 15.8) and in which the Pro tier reaches SWE-bench Verified 82.7. Independent: nobody outside the company has run these harnesses — Artificial Analysis has benchmarked two other Sapiens AI models but never the Flash variant, and no other leaderboard carries it. Resolution: the vendor table is recorded as publisher-reported with explicit attribution, no number is presented as independently reproduced, and the dimension scores are capped by that absence — coding and tool use are credited from the internal table, while reasoning is scored down because the published chart contains no reasoning benchmark at all for this model.

Second conflict: context length and price. The official documentation says 512K context, 65.5K maximum output and a $0.05/$0.15 list price with a $0 trial price, while 2026-07-25 launch coverage says 256K context, a 65K output ceiling and a permanent free tier at 30 RPM. Resolution: the current official documentation wins for context (512K) and pricing structure, the launch coverage's rate-limit detail is kept as the practical caveat, and cost efficiency is scored on the published list price rather than on the $0 trial, because the trial is bounded by per-account quotas and RPM and its data-usage terms are not published. Third conflict: the Claw-Eval 60.9 Pass@3 ranking that circulates as "Agnes Flash" evidence belongs to Agnes 2.0 Flash, so it is recorded against the predecessor and is not counted toward this model's tool-use score.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.1 at 62.3 (vendor-reported) sits just above the mid band, and the SWE Atlas refactoring and test-writing cuts (29.5 and 27.5) plus the independent multi-step repository tasks show real tool-driven work; the score stops well short of the frontier band because no Tau3, GDPval, MCP-Atlas or Claw-Eval number exists for this model and Claw-Eval for the predecessor is not transferred.
- **Reasoning: 55/100.** No GPQA Diamond, HLE, LCR, CritPt or Intelligence Index score has ever been published for Agnes 2.5 Flash, and the entire vendor chart is coding-only; the reading is anchored on the predecessor's Claw-Eval Pass@3 60.9 ranking plus Sapiens AI's DSPO agent-training claims, which places it at the bottom of the mid band and no higher.
- **Context window: 88/100.** The officially documented 512K window falls in the 500K–1M tier (85–94) and sits at its floor, with no retrieval measurement at any length and the 256K figure in launch coverage still in circulation.
- **Multimodal: 65/100.** The served model accepts image URLs and documents image understanding (screenshot analysis, visual question answering, structured extraction), which is the "+image in" band (60–70); it is not higher because no audio or video input, no non-text output and no published vision benchmark exists.
- **Coding: 70/100.** SWE-bench Verified 75.6, SWE-bench Multilingual 69.1, SWE-bench Pro 50.4, SWE Atlas QnA 36.5 and Terminal-Bench 2.1 62.3 are strong free-tier numbers, and the independent hands-on review confirms real repository-level work; the score is capped below the 80s because every figure is vendor-internal, no LiveCodeBench, SciCode, DeepSWE or Terminal-Bench 4.0 result exists, and the reviewer's own verdict was that production repositories still need test runs and human oversight.
- **Cost efficiency: 98/100.** The published list price of $0.05 in / $0.15 out per 1M tokens is below the roughly $0.10/$0.20 anchor band (97–99), and a $0 trial tier exists, but the free path is quota- and RPM-bound and its data-usage terms are not published, so the score is set just below the free-is-100 ceiling.
- **Overall Score: 70/100.** A cheap, fast, image-capable model with genuinely competitive internal coding scores and the best price in this set, best suited to everyday coding assistants, repo-level agent loops and tool-calling prototypes, but not yet a safe pick for reasoning-heavy or production coding work because nothing about it has been independently measured.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: public internet research (official Sapiens AI model documentation and API reference, the vendor's own benchmark announcement, the released Hugging Face base checkpoint card, an independent hands-on review, launch coverage, and leaderboard / aggregator cross-checks on Artificial Analysis, models.dev and OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Sapiens AI — Agnes 2.5 Flash model documentation (512K context, 65.5K max output, $0.05/$0.15/$0.005 pricing, endpoints, thinking and tool-calling support)](https://wiki.agnes-ai.com/en/docs/agnes-25-flash)
  - [Sapiens AI — official benchmark announcement for Agnes 2.5 Pro / 2.5 Flash / 2.0 Flash across seven coding benchmarks (internal evaluation)](https://x.com/agnesai_sapiens/status/2075828619679846605)
  - [we0.ai — Agnes-2.5-Flash review (reproduces the seven-row internal benchmark table plus three independent hands-on coding tests)](https://we0.ai/articles/agnes-2-5-flash-review-a)
  - [Hugging Face — Agnes-AI/Agnes-2.5-Flash-Base model card (202B total / ~16B active MoE, 1M-token YaRN context, Apache-2.0, base checkpoint caveat)](https://huggingface.co/Agnes-AI/Agnes-2.5-Flash-Base)
  - [einkCN — Agnes 2.5 Flash launch coverage (2026-07-25): 256K context claim, permanent-free claim, 30 RPM limit, Claw-Eval 60.9 rank 9 for Agnes 2.0 Flash, DSPO and CodeAgents background)](https://einkcn.com/html/product_6a64170c4d15c8723.html)
  - [Artificial Analysis — Sapiens AI creator page (only Agnes 2.5 Pro Theta and Pro Beta are benchmarked; no Agnes 2.5 Flash row)](https://artificialanalysis.ai/models/creators/agnes-ai)
