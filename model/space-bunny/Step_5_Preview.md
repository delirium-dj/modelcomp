# Space Bunny Alpha — findings by Step 5 Preview

- Source: OpenRouter (`stealth/space-bunny-alpha`) / OpenCode Zen (`space-bunny-free`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny Alpha (stealth codename; community consensus at ~85% confidence: MiniMax `M3.1-Flash-Preview`, announced on MiniMax Code 2026-09-27 but never publicly linked to Space Bunny)
- **Short description:** Anonymous "stealth" preview model that appeared on OpenRouter and OpenCode on 2026-09-23 (listed under the provider name "Stealth", unmoderated), positioned by the gateway as a flash-tier model with blazing-fast inference, strong coding, adjustable reasoning effort and a 1M-token context window. It briefly topped OpenRouter's daily ranking (33.3T tokens/day, ahead of DeepSeek V4.1 Flash and GLM 5.3 Flash) mainly because it was free to try; the listing carried an expiry of 2026-10-05 and has since been delisted. Identity evidence: 24/24 tokenizer probes matched MiniMax models vs 13/24 Kimi and 7/24 GLM (stealthprint), 50/50 matches (YFarmX), and a unique-in-catalog 524,288 max-output cap matching MiniMax's M3.1 docs on all five interface fields (1M ctx, mandatory thinking, low/medium/high/xhigh/max ladder defaulting to `max`, text/image/video input).
- **Provider / access:** Was free via OpenRouter (`stealth/space-bunny-alpha`) and OpenCode (`space-bunny-free`); OpenRouter data terms allowed provider retention of prompts (not training), OpenCode was zero-retention. No model card, no open weights, no public API pricing.
- **Release:** 2026-09-23 (OpenRouter catalog created 14:48 UTC); listed expiry 2026-10-05.
- **Context window:** 1,000,000 tokens (max output 524,288 tokens — unique across OpenRouter's 466-model catalog).
- **Modalities:** Text, image and video in → text out; reasoning always on (cannot be disabled), five effort levels `low/medium/high/xhigh/max` defaulting to `max`; tool calling supported but `tool_choice: auto` only; structured JSON output without schema enforcement.
- **Pricing (as of 2026-10-09):** was $0/$0 per million tokens during the preview (temporarily free; the closest named relative, MiniMax M3, lists $0.30/$1.20).
- **Speed:** ~80 tok/s P50 on OpenRouter (89.9 tok/s OpenCode Go, 74.5 Zen), ~1.05–1.66 s P50 latency, 99.87% trailing-24h uptime (gateway metrics, not model quality).

### Raw benchmarks found

(No vendor benchmark table exists — the provider is anonymous. All numbers below are third-party or community runs and are labelled as such; the widely circulated "73.8% SWE-bench Verified / 165 tps / $0.10 per M" figures could not be traced to any primary source and are treated as unverified.)

- **GPQA Diamond: 82.0%** — community run on a 60-question subset (not the full 198-question set; not vendor-reported)
- **MMLU-Pro: ~75%** — independent run, not MiniMax official
- **Humanity's Last Exam: 46.1%** — 300-question subset; not comparable with full-set scores
- **AI BENCHY: 7.0/10** (12/22 tasks fully passed); separate AI BENCHY snapshot: 56.1% pass rate, 10.0 reliability, #204 on its tracked leaderboard
- **SMF Clearinghouse "Official A" board: 128/157 (81.5%)** — zero errors, thinking off; ties MiMo-V2.6-Pro, 8 points behind Union Alpha (136/157); suite split: math 23/30, coding 23/30, reasoning 24/30, instruction 28/30, prose 23/30, writing 5/5, tool_calling 2/2
- **Field/long-context tests: 3/3 hidden codes recovered from a ~200K-token input; 14/14 repeated text+image requests; 8/8 color-image probes** (independent field guide; vision confirmed adapter-class and size-scaled)
- **Context ceiling: ≥1M tokens** verified by binary search (stealthprint)
- SWE-bench, Terminal-Bench, τ-bench, MCP Atlas, GDPval, AIME, IFBench: **no verified public score found** (MiniMax's M3 numbers — SWE-Pro 59.0%, TB2.1 66.0%, MCP Atlas 74.2% — belong to M3 and must not be transplanted)

### Normalized scores (1–100)

- **Tool use: 60/100.** 2/2 on the SMF tool-calling suite and an agent-first design (1M ctx, always-on reasoning) are the positives; there is no TB2.1/Tau-bench/MCP-Atlas/GDPval number at all, so the dimension rests on suite fragments and field tests.
- **Reasoning: 68/100.** GPQA Diamond 82.0% (subset) and HLE 46.1% (subset) are both well above flash-tier norms; MMLU-Pro ~75% supports it; all are non-vendor subset runs, so they are capped below a full-set frontier score.
- **Context window: 88/100.** A verified 1M-token ceiling (binary-search confirmed, the ≥1M band worth 95–100); held below the top of the band because the only demonstrated retrieval (~200K hidden-code recovery) covers just the bottom fifth of the window — no MRCR/RULER-style long-context curve exists.
- **Multimodal: 90/100.** Text + image + video in → text out sits in the 90–100 band; 8/8 image probes and 14/14 multimodal requests confirm real, adapter-class vision, but no MMMU/CharXiv/Video-MME score exists.
- **Coding: 68/100.** Gateway pitches it as coding-first and coding agents were its heaviest users; the one concrete third-party coding signal is KingBench 3 at 66.25% (53/80 build-from-scratch tasks, 2026-09-28) plus 23/30 coding on the SMF board — but no SWE-bench/Terminal-Bench/Vibe score is verified.
- **Cost efficiency: 95/100.** Was $0/$0 during the preview (the $0 tier) — docked because the free window was explicitly temporary (listed expiry 2026-10-05, now delisted) and the sibling M3 posts $0.30/$1.20, so production cost is unknown but certainly not zero.
- **Overall Score: 74.8/100.** Best-fit recommendation: a very strong free-preview flash-tier generalist — MiniMax-class speed and coding with 1M context and multimodal input; treat every number as provisional since the provider never published a benchmark table and the endpoint is now delisted.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (OpenRouter/OpenCode listings, stealthprint and YFarmX tokenizer fingerprint studies, SMF Clearinghouse Official A board, AI BENCHY/KingBench 3 community runs, MiniMax developer docs, and multiple press round-ups); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `M3_1_Flash.md`, using the same headings.
