# Ling 3.2 Flash — findings by Qwen 3.8 Flash

- Source: Ant Ling / inclusionAI (`Ling-3.2-flash`, curated id `opencode/ling-3.2-flash`), cross-checked against Ant's official changelog + model/API docs, the vendor launch evaluation table, and independent tracker/arena coverage
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Identity note:** this is the **4th-generation Ling "flash" body** — same **560B-total / 25B-active** MoE as `ling-3.1-flash` (panel 69.7), but the **first Ling with native image *and* video input folded into the same model** that writes code and plans agent steps (previously you had to drop to the smaller `ling-3.0-flash-VL`, 124B/5.5B). Two curation corrections to the `meta.json`: the serving platform is **Ant Ling's own developer platform** (`api.ant-ling.com`, OpenAI **and** Anthropic protocol), not "Ant Bailian"; and the **$0.30/$0.90 figure is tracker-estimated, not official** — Ant's price page still has no `Ling-3.2-flash` USD row as of 2026-11-09. Also material: **weights are not published** (API-only), whereas `ling-3.1-flash` shipped MIT open weights.

## Model card

- **Name:** Ling 3.2 Flash (`Ling-3.2-flash`, case-sensitive API id)
- **Short description:** Ant Group's Ant Ling team released (changelog **v2.0.6, 2026-11-05**) a native-multimodal 560B/25B-active MoE with a **1M** window, aimed at four declared focus areas: **complex visual understanding, multimodal long-horizon agents, 3D understanding & interaction, and medical multimodal**. Marketed as an affordable frontier-adjacent vision-worker, **free for the first two weeks** after launch.
- **Provider / access:** Ant Ling platform — chat UI at `chat.ant-ling.com`; API `https://api.ant-ling.com/v1` (OpenAI chat-completions) and `https://api.ant-ling.com/anthropic` (Claude Code; OPUS/SONNET/HAIKU tier vars must be mapped). Keys from `developer.ant-ling.com`. Multimodal via `image_url` / `video_url` blocks (**Base64 only**, JPEG/PNG, 32 MiB body cap).
- **Release / knowledge:** released **2026-11-05**; knowledge cutoff not published.
- **IDs:** `Ling-3.2-flash` (Ant Ling API). Not on Hugging Face — **no open-weight release as of 2026-11-07** (inclusionAI page), so no self-host ID exists.
- **Context window:** **1,000,000 tokens** (official; family docs claim position-independent retrieval "without noticeable degradation"). **No MRCR/RULER absolute** published for this exact ID.
- **Modalities:** **text + image + video in; text out.** Video is capped in practice: fixed **2 fps, 32-frame cap, one ~30-second clip per request**. **Thinking mode on by default**, disableable (`thinking.type: disabled`) for latency. No audio in/out; no image generation from this model (that is the separate Ming-Image line).
- **Pricing (as of 2026-11-09):** **free for the first two weeks** (≈ until **2026-11-19**, exact end time not posted), then "original prices resume" — **no official USD row exists yet**. Trackers (Sumus, AIbase) quote **~$0.30 / $0.90 per 1M in/out**, consistent with `ling-3.1-flash`'s list level (¥2.00/¥6.00 ≈ $0.28/$0.84; currently 75%-off at ¥0.50/¥1.50) — treat as **estimate**. Billing runs daily at midnight, so idle scripts start costing money the morning after the promo.
- **Architecture:** 560B-total / 25B-active sparse MoE (hybrid attention lineage from 3.1), native multimodal encoder fused into the LM, Apache/MIT-style licence **not** applied here — the API model has **no published weights or licence**.
- **Operational limits:** documented **global cap of 2 requests/second** (HTTP 429 beyond), **90-second** non-streaming timeout (use `stream=True`), prompts and files processed on **Ant's servers in China**.

### Raw benchmarks found

> Provenance: nearly every capability number below is **vendor-reported from Ant's own launch evaluation** (official X post + release docs), and Ant picked the suites where it wins — including head-to-heads against **Claude Opus 5 (max)**. **As of 2026-11-09 there is no Artificial Analysis row and no LMArena entry for this model** (both pages 404 for `ling-3-2-flash`), so **no independent composite Intelligence Index exists**. The one genuinely third-party signal is crowd-voted **DesignArena**. `AntBench-Medical` is Ant's **self-built** benchmark and carries promotional weight only.

Multimodal / vision (vendor, incl. head-to-heads vs Opus 5 max):

- OmniDocBench 1.5 (complex document layout/tables/formulas): **92.21** vs Opus 5 **90.56** (+1.65)
- Vision2Web (design screenshot → working web page): **85.86** vs Opus 5 **80.20** (+5.66)
- ZEROBench / ZEROBench(Sub) (abstract visual reasoning): **18.00 / 43.71** vs Opus 5 Sub **39.52**
- MathVision (w/ CI): **96.80**
- CharXiv_RQ: **85.15** · BabyVision: **69.85** · HLE-MM (multimodal subset): **30.12**
- MedXpertQA-MM: **79.93** · AntBench-Medical: **99.22%** correctness / **89.52%** comprehensiveness (self-built)

Agent / tool use:

- AndroidWorld (GUI device agent): **85.63** (vendor)
- BlenderBench (3D tool interaction): **67.77** (vendor)
- GDP.pdf (professional document deliverables): **22.25** (vendor — low in absolute terms; the expert-task suite where stealth/frontier models also score modestly)
- **No text-side agentic absolutes published for 3.2** (no Terminal-Bench, τ²-bench, GDPval, MCP-Atlas row for this exact ID)

Coding:

- **None published for this exact ID.** Ant did not restate text-coding scores for 3.2; its own docs keep **`ling-3.1-flash`** as the coding reference (Terminal-Bench 2.1 **81.18**, SWE-bench Pro **68.74**, SWE-bench Multilingual **88.5**, HLE **37.44**, SkillsBench **68.7**) and Ant "has not said whether 3.2 keeps, gains or loses on these" — **lineage proxies, not imported into my scores**
- Generative code-adjacent: Vision2Web **85.86** (screenshot→code) is the only coding-flavoured measured row for 3.2

Reasoning / knowledge:

- HLE-MM **30.12**, ZEROBench **18.00**, MathVision **96.80** — all multimodal-flavoured; **no GPQA Diamond / text HLE / MMLU-Pro / AA Index absolute** for this ID

Long context:

- **1M** window (official) with vendor retrieval-stability claim; **no MRCR/RULER/§-recall absolute** published

Independent / arena:

- **DesignArena** Image-to-Frontend: **~#10**, Elo **1238** (crowd-voted; reported by AIbase/AICoder) — mid-table, not a win over frontier incumbents
- ~560B-class model is **not locally runnable** by design (4-bit estimate ≈ 300–330 GB RAM+VRAM), so community reproduction is effectively impossible while weights stay closed

### Normalized scores (1–100)

- **Tool use: 70/100.** AndroidWorld 85.63 and BlenderBench 67.77 are real, disclosed agent-environment numbers (GUI control and 3D tool manipulation are genuinely hard), and "multimodal long-horizon agent" is the model's stated centerpiece. Held back by the missing text-side agentic absolutes (no Terminal-Bench/τ²/GDPval for this ID) and by **GDP.pdf 22.25**, which shows expert deliverable work is not frontier-level. All vendor-run.
- **Reasoning: 63/100.** Structured visual math is superb (MathVision 96.80) and documents/charts parse well, but the *hard* abstract suites are ordinary: ZEROBench 18.00 and HLE-MM 30.12. With no AA Intelligence Index row, no GPQA and no text HLE for this exact ID, there is no independent composite to anchor a higher claim — so this stays mid-60s rather than inheriting `ling-3.1-flash`'s text-reasoning reputation.
- **Context window: 82/100.** **Native 1M** on a 560B/25B MoE at (estimated) sub-dollar pricing is a genuine strength, and the Ling docs make an explicit position-independence claim. Docked because no MRCR/RULER absolute exists to verify it, and the practical video/media caps (32 MiB, 30 s, 2 fps) constrain how much multimodal content you can actually pack into that 1M.
- **Multimodal: 82/100.** The headline dimension: **native text+image+video in one model**, beating Claude Opus 5 (max) on OmniDocBench 1.5 (92.21) and Vision2Web (85.86) with strong CharXiv_RQ (85.15) and MedXpertQA-MM (79.93). Not higher because those are **vendor-selected suites**, abstract visual reasoning is weak (ZEROBench 18.0), and the only independent board has it around **#10**. Text-only output; no audio; video sampling is coarse.
- **Coding: 62/100.** Vision2Web proves strong *visual-to-code* generation, but there is **no SWE-bench Verified/Pro, LiveCodeBench or Terminal-Bench number for this exact ID**, and Ant itself leaves 3.1 as the coding reference. Scoring repo-level coding on a sibling's results would be a lineage proxy, so this reflects measured generative-UI coding plus a large evidence gap.
- **Cost efficiency: 88/100.** **Free through ~2026-11-19**, then tracker-estimated **$0.30/$0.90** for a 1M-context 560B multimodal model — among the most aggressive price/performance bands available if it holds. Docked for the **unpublished official list price**, the **hard 2 req/s global cap**, and **closed weights** (no free self-host escape hatch, unlike MIT-licensed 3.1).
- **Overall Score: 71.8/100.** Half-up mean of the five quality dims (70+63+82+82+62)/5 = 71.8 (Cost excluded). Best fit: teams wanting a **cheap, high-context native vision-video worker** for document/chart/screenshot-to-code/GUI-agent pipelines. It is *not* a text-reasoning or software-engineering flagship on published evidence — and with **no AA or LMArena row and no open weights**, essentially the whole score rests on evaluations Ant chose and ran itself. Treat the Opus 5 head-to-heads as marketing until an independent harness repeats them.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-09
- Method: public internet research — Ant Ling official changelog **v2.0.6 (2026-11-05)** and Ling model/API/price docs (560B/25B, 1M ctx, native image+text+video, four declared focus areas, OpenAI + Anthropic protocol endpoints, thinking-on-by-default, 2 fps/32-frame/30 s video caps, Base64-only 32 MiB media, **2 req/s** global rate cap, 90 s timeout, **free for first 2 weeks**, no weights on Hugging Face), Ant's launch evaluation table as relayed by independent trackers (OmniDocBench 1.5 92.21 vs Opus 5 90.56; Vision2Web 85.86 vs 80.20; ZEROBench 18.00 / Sub 43.71 vs 39.52; MathVision 96.80 w/ CI; CharXiv_RQ 85.15; GDP.pdf 22.25; AndroidWorld 85.63; BlenderBench 67.77; BabyVision 69.85; MedXpertQA-MM 79.93; AntBench-Medical 99.22/89.52 **self-built**; DesignArena Image-to-Frontend ~#10 Elo 1238 **the only third-party signal**). Verified that **`artificialanalysis.ai/models/ling-3-2-flash` and `benchlm.ai/models/ling-3-2-flash` both 404** and that trackers state AA/LMArena had no 3.2 entry — so **no independent composite Index is asserted** (a circulating "AA v4.3.2 = 44" figure could not be traced to AA or to any official Ant page and is deliberately excluded). `ling-3.1-flash`'s coding row (Terminal-Bench 2.1 81.18, SWE-bench Pro 68.74, SWE-bench Multilingual 88.5, HLE 37.44, SkillsBench 68.7) is cited as **family context only and not imported**, per the lineage-proxy rule. Corrected the curated `meta.json` on platform naming ("Ant Bailian" → Ant Ling / `api.ant-ling.com`) and on price status (official USD row still absent). Scores are normalized 1–100 interpretations, not official scores.
- Reference URLs:
  - [Ant Ling — Changelog v2.0.6 (Ling-3.2-flash, 2026-11-05)](https://developer.ant-ling.com/en/docs/getting-started/changelog)
  - [Ant Ling — Ling model family docs (specs, 1M context, multimodal)](https://developer.ant-ling.com/en/docs/models/ling/)
  - [Ant Ling (@AntLingAGI) — Ling-3.2-flash launch post](https://x.com/AntLingAGI/all)
  - [FreakyJolly — Ling-3.2-flash: Free 560B Multimodal Model, API and Specs (verified-number audit)](https://freakyjolly.com/ling-3-2-flash-guide/)
  - [Grafy News — Ant Ling releases Ling-3.2-flash multimodal MoE model (benchmark table)](https://grafy.ai/news/ant-ling-releases-ling-3-2-flash-multimodal-moe-model)
  - [AICoder — Ant Ling Launches Ling-3.2-flash (560B/25B, 1M, free 2 weeks)](https://aicoder.com/news/news-20261105-ant-ling-ling-3-2-flash-560b-a25b-native-multimodal-1m-free-2-weeks)
- Revisit trigger: Ant publishing an **official USD price row** and/or **open weights**; **Artificial Analysis or LMArena adding a `ling-3.2-flash` entry** (Index / GPQA / text HLE / SWE-bench / Terminal-Bench absolutes); or Ant re-running its 3.1 coding suite on 3.2 so the text-engineering gap can be measured rather than inherited. Re-score promptly when the free promo ends (~2026-11-19), since Cost efficiency depends on the resuming list price.
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
