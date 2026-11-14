- Source: Meta/Muse Wonder 1.0 (Muse Wonder API SKU)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0 (marketed as "Muse Wonder")
- **Short description:** Meta Superintelligence Labs' second-generation frontier model (internal codename **Watermelon**), released 2026-10-12 as the lighter API SKU alongside the subscription-only **Muse Wonder Full**. Per the project's generated identity roster, the bare `muse-wonder` vendor product name is a merged duplicate of the canonical `muse-wonder-1.0` API SKU (same 1M window, same $4/$20) — this canonical folder is where that research belongs. Muse Wonder Full is a **distinct** product, not an alias.
- **Provider / access:** Meta Model API for developers; the Muse personal-agent app (paid subscription); Meta AI app / web. Muse Wonder Full is restricted to Muse Code subscribers. All-paid strategy with safeguards bundled only into paid models. No free Zen ID verified.
- **Release / knowledge:** 2026-10-12 (pretraining was paused in July 2026, delaying the release); knowledge cutoff: no verified public score found.
- **IDs:** `muse-wonder-1.0` (canonical API SKU), OpenRouter `meta/muse-wonder`; family codename Watermelon. No free Zen ID verified.
- **Context window:** **1,000,000 tokens** (confirmed by Baidu Baike, the Muse series article and a third-party evaluation page); max output not published.
- **Modalities:** **text, image, video, audio and PDF in; text out** (Muse series article + Baike). Active Memory (cross-session key context with on-demand detail retrieval) and Active Focus (staying on target as tasks get harder); long-horizon planning, sub-agent delegation, parallel tool calls, error recovery, and direct browser/desktop/mobile-app operation. Runs in an isolated secure VM with its own browser; sensitive actions (email, purchases) require user confirmation, and a separate **Sentinel** monitor agent reviews all outbound network requests.
- **Pricing (as of 2026-11-14):** **$4.00 / 1M input, $20.00 / 1M output** (third-party evaluation page; 3:1 blended ~$8.00), with no cache-hit pricing listed. Baidu Baike reports the base Muse Wonder tier as low as **$0.20 / 1M tokens** and Muse Wonder Full via a subscription up to **$200/month** — different access models, reported separately. All-paid, no free tier.
- **Architecture:** Proprietary, closed weights; second-generation model with an order of magnitude more compute than the preceding Avocado-codenamed generation. Parameter count not disclosed. Training emphasised frustration tolerance, Active Focus and Active Memory; used model distillation techniques and third-party open models in the wider series.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v5: **44.0**, global **#12** (third-party evaluation page; AA 11-04 reread +0.7)
- Output speed: **113 tok/s** (vs Claude Sonnet 5.5's 146 tok/s)
- SWE-Marathon: **57.5** is published for the **Full** version (Baike Muse Wonder article) — lineage measured under the Full ID, not this SKU
- Meta self-testing claims some benchmarks above Claude Opus 5.5, Fable 5.1 and GPT-6 Astra, but the Muse series article explicitly notes **no third-party replication** — labelled as a vendor claim, not a verified score
- Long-horizon planning, sub-agent delegation, browser/desktop/mobile operation, error recovery (qualitative)
- GPQA Diamond / Terminal-Bench 4.0 / LiveBench Design / Vals Index / AA v4.3.2: **not recorded** for this model on the evaluation page — no verified public score found
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index v5 **44.0 (#12)** as above — 10.5 points below Claude Sonnet 5.5 (54.5) and 15.1 below Claude Opus 5.5 (59.1) on the same page's comparison
- HLE / GPQA Diamond / LCR / CritPt / Omniscience: no verified public score found

Coding:

- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found (SWE-Marathon 57.5 belongs to the distinct Full product)

Long context:

- 1M-token window with Active Memory for cross-session context; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 88/100.** Genuine long-horizon agent architecture (planning, sub-agent delegation, parallel tools, error recovery, direct browser/desktop/mobile control) with a strong safety VM + Sentinel monitor; capped by a low AA v5 44.0 and no scored agent benchmark.
- **Reasoning: 84/100.** Active Focus/Active Memory with second-generation MSL training; capped by AA v5 44.0 (#12), trailing Sonnet 5.5 by 10.5 points, and unreplicated vendor claims.
- **Context window: 93/100.** A verified 1M-token window plus unique Active Memory retrieval across sessions; capped by no published max output and no long-context retrieval benchmark.
- **Multimodal: 94/100.** Text, image, video, audio and PDF input — one of the broadest input sets here — plus native browser/GUI operation; capped by text-only output and no published multimodal benchmark score.
- **Coding: 84/100.** Long-horizon agentic task design and the series' coding emphasis; capped by no published coding benchmark for this SKU (the 57.5 SWE-Marathon belongs to Muse Wonder Full).
- **Cost efficiency: 58/100.** $4/$20 per 1M is 2x Claude Sonnet 5.5's price for 10.5 fewer AA points and slower output (113 vs 146 tok/s), with every safeguard gated behind paid plans; excluded from Overall.
- **Overall Score: 89/100.** Half-up mean of 88, 84, 93, 94, 84 = 88.6 → 89. Best fit: personal-assistant and long-horizon multimodal agent workflows inside Meta's ecosystem where Active Memory and the secure-VM safety architecture matter more than raw intelligence-per-dollar.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Muse Wonder article, the Baidu Baike Muse series article (Watermelon, modalities, Active Focus/Active Memory, safety VM, all-paid strategy) and a third-party evaluation page for the AA v5 44.0 / #12 rank, $4/$20 pricing and 113 tok/s speed. Identity handling follows the project's generated roster: the bare `muse-wonder` product name is a merged duplicate resolved to this canonical `muse-wonder-1.0` API SKU, while Muse Wonder Full is a distinct product whose SWE-Marathon 57.5 is cited only as lineage. Meta's self-reported benchmark wins are labelled as unreplicated vendor claims. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Muse Wonder — 百度百科 (release, series lineup, modalities, pricing tiers)](https://baike.baidu.com/item/Muse%20Wonder/69364182)
  - [Muse系列 — 百度百科 (Watermelon, Active Focus/Memory, 1M context, safety VM, Sentinel)](https://baike.baidu.com/item/Muse系列/67601348)
  - [Muse Wonder 评测 · 分数 / 价格 / 速度 — 皮皮 AI 评测榜 (AA v5 44.0, $4/$20, 113 tok/s)](https://www.ppv9.com/model/muse-wonder/)
