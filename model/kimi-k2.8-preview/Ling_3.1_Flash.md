# Kimi K2.8 Preview — findings by Ling 3.1 Flash

- Source: Moonshot AI (`moonshot/kimi-k2-8-preview`; Kimi Code ID `kimi-for-coding` — reused, so existing configs picked it up silently; APIMaster gateway `kimi-k2.8-preview`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** Moonshot AI's September-2026 mid-tier coding/agentic model inside Kimi Code — positioned between coding-focused K2.7 Code and the 2.8T flagship K3, with a 1M context (open to all membership tiers, where K3's 1M needs higher plans) and image/video input; Moonshot claims performance "close to K3" with better thinking efficiency, but published **no benchmark scores**, so all capability scores below are conservative placeholders pending independent measurement.
- **Provider / access:** Moonshot — Kimi Code (current Plus+ / legacy Andante+ plans; Go has no coding quota) and Kimi Work; thinking effort low/high/max (default max); no first-party per-token API ID on the open platform (third-party gateways: APIMaster `kimi-k2.8-preview` $1/$4 per 1M, one route; TokenRa ~$0.80/$3.35, cached $0.14). `noFreeId`.
- **Release / knowledge:** 2026-09-11 (full rollout inside Kimi Code); knowledge cutoff not published.
- **IDs:** `moonshot/kimi-k2-8-preview` / `kimi-for-coding` (Kimi Code) / `kimi-k2.8-preview` (APIMaster). NOTE: the repo `meta.json` says "Text, image in"; sources document text, image **and video** input.
- **Context window:** 1,048,576 tokens (all Kimi Code membership tiers).
- **Modalities:** text, image, video in; text out.
- **Pricing (as of 2026-10-02):** no first-party per-token price — Kimi Code membership plans (Plus $19 / Pro $39 / Max $99 / Ultra $199 per month); gateway indicators ~$0.80–1.00/$3.35–4.00 per 1M (about 67–73% below K3's $3/$15 reference).
- **Architecture:** proprietary; parameter count not published (K3: 2.8T MoE).

### Raw benchmarks found

- **No benchmark scores published.** Moonshot's release notes state only that comprehensive capability "approaches K3" with improved thinking efficiency vs K2.7 Code — the vendor's assessment, not an independent measurement (confirmed by llm-stats, APIMaster, MagicShot, 4SAPI and CCTest: no official scores, no independent confirmation).
- Developer side-by-side test (@notjazii, 2026-09-11, one task, max thinking): K2.8 Preview finished in **80 minutes / ~$10** vs K3's **120 minutes / ~$14** (~1/3 faster, ~30% cheaper) — but **failed one-pass completion** and "struggled repeatedly to repair issues identified during multi-turn feedback"; a single-task sample, directional only.
- MCP Atlas, Toolathlon, τ³, SWE-bench, Terminal-Bench 2.1, LiveCodeBench, DeepSWE, GPQA Diamond, HLE, FrontierMath, MMMU, MRCR/RULER/AA-LCR: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 55/100.** No verified public score found on any agentic/tool-use benchmark (MCP Atlas, Toolathlon, τ³, SWE-bench, Terminal-Bench 2.1 — all unpublished); Moonshot's "close to K3" claim is unverified, and the one public developer test shows a completed task at ~1/3 the time and ~30% less cost than K3 but a failed one-pass completion and weak self-repair. Placeholder pending benchmarks.
- **Reasoning: 55/100.** No verified public reasoning score found (GPQA Diamond, HLE, FrontierMath — all unpublished); "close to K3" is the vendor's assessment, not an independent measurement. Placeholder pending benchmarks.
- **Context window: 90/100.** 1,048,576-token window documented for all Kimi Code membership tiers (K3's 1M requires higher plans); no MRCR/RULER/AA-LCR figure published.
- **Multimodal: 78/100.** text/image/video in with text out — the +video-in band (75–90); no MMMU/Video-MMMU figure published.
- **Coding: 55/100.** No verified public coding score found (LiveCodeBench, SWE-bench, DeepSWE, Terminal-Bench — all unpublished); positioned by Moonshot between coding-focused K2.7 Code and flagship K3 for "code completion and routine development," with the single public test showing a completed task but a failed one-pass completion. Placeholder pending benchmarks.
- **Cost efficiency: 90/100.** No first-party per-token price (Kimi Code membership $19–$199/month); third-party gateways list ~$0.80–1.00/$3.35–4.00 per 1M — about 67–73% below K3's $3/$15 reference — which sits near the ~$1.25/$4.25≈88 anchor, with ~30% lower task cost than K3 in the one public test.
- **Overall Score: 67/100.** (55+55+90+78+55)/5 = 66.6 → 67 — a deliberately conservative score: with zero published benchmarks, the capability dimensions are mid-scale placeholders reflecting absent evidence rather than measured weakness, while the 1M context, video input and gateway pricing are documented. Re-rate once Moonshot or independent evaluators publish scores.

---

## Update 2026-10-08 (6-day re-research)

Re-checked: still no benchmark scores — the placeholder scores stand:

- BenchmarkList (2026-10-08): **0 score rows** — "The evidence is thin. Moonshot's only performance claim is that it comes close to Kimi K3 while thinking more efficiently than K2.7 Code. Moonshot published no benchmark table, parameter count, or model card, and no independent evaluation had been confirmed when it was imported. Until results appear, treat it as Moonshot's everyday coding tier below K3, not as a measured K3 peer." LLM Stats and APIMaster likewise track 0 benchmarks for K2.8 Preview (vs 31 for K3).
- Kimi Code docs confirm the rollout mechanics: model ID unchanged (`kimi-for-coding` — existing configs picked it up silently); thinking effort low/high/max (default max), the same levels as K3; **with thinking turned off, requests to the K3 series and K2.8 Preview are served by K2.8 Preview**; 1M ultra-long context on every membership tier; image and video input on all plans.
- New telemetry/pricing context: zenmux lists 28.9 tok/s, 2.05s TTFT and a 1.05M context; APIMaster's live route prices at $1.00/$4.00 per 1M (~67% below K3's $3 input, ~73% below its $15 output); Bloomberg reports Moonshot's ARR passed **$1B in August 2026** with a $2B year-end target — K2.8 Preview is the mainstream-traffic workhorse of that commercialization.
- The @notjazii side-by-side (2026-09-11, one task, max thinking; hosted on 4SAPI) remains the only public execution datapoint: 80 minutes / ~$10 vs K3's 120 minutes / ~$14 (~1/3 faster, ~30% cheaper) but a failed one-pass completion and repeated struggle to repair multi-turn feedback issues — a single-task sample, directional only.
- Re-rating trigger: any independent Terminal-Bench 2.1 / SWE-bench / DeepSWE run. Until then 55/55/90/78/55 (Overall 67) remains the honest read — Moonshot's "close to K3" is marketing, not measurement.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (Moonshot release notes via llm-stats, APIMaster, MagicShot, 4SAPI, ki-ai.chat, CCTest, one public developer test); scores are normalized 1–100 interpretations, not official vendor scores — capability scores are placeholders because no benchmarks were published.
- Future sources: add a new file next to this one, e.g. `Kimi_K2_8_Preview.md`, using the same headings.
