# MiMo-V2.6-Free — findings by MiniMax M3.1 Flash

- Source: OpenCode Zen (`mimo-v2.6-flash-free` — free route of **MiMo-V2.6-Flash**)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Free (the project slug `mimo-v2.6-free` is a **mis-slug**: the real route is `mimo-v2.6-flash-free`)
- **Short description:** The **free OpenCode Zen route for MiMo-V2.6-Flash** — not a distinct model. The free route is time-limited and feedback-oriented: "MiMo-V2.6-Flash Free is available on OpenCode for a limited time. The team is using this time to collect feedback and improve the model." Its one material difference from the paid model is a **halved context window and output cap**: **200,000 context / 32,000 max output** (models.dev) against the paid route's 1,050,000 / 131,072. The underlying model — 309B/15B-active omni-modal MoE, MIT weights — is scored in `model/mimo-v2.6-flash/` at Overall 82.2.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.6-flash-free` (`https://opencode.ai/inference/openai/v1/chat/completions`, `@ai-sdk/openai-compatible`); Xiaomi's own API `mimo-v2.6-flash` at `https://api.xiaomimimo.com/v1` (OpenAI- and Anthropic-protocol compatible); open weights `XiaomiMiMo/MiMo-V2.6-Flash-RL` (MIT) on Hugging Face and ModelScope; OpenRouter `xiaomi/mimo-v2.6-flash`.
- **Release / knowledge:** the underlying model was released **2026-09-21/22** (AA "released on September 21, 2026"; OpenRouter `created` 2026-09-21; OpenCode's data page 2026-09-22). Knowledge cutoff: **not published** — the API's default system prompt says "Your knowledge cutoff date is December 2024" (a placeholder); AA `knowledgeCutoffDate: null`.
- **IDs:** `mimo-v2.6-flash-free` (OpenCode Zen, the only `mimo-v2.6-*` free id in the 90-model inference list), `mimo-v2.6-flash` (Xiaomi API), `xiaomi/mimo-v2.6-flash` (OpenRouter), `XiaomiMiMo/MiMo-V2.6-Flash-RL` (HF). **There is no `mimo-v2.6-free` id** — the strings "mimo-v2.6-free" and "mimo-v2.6-pro-free" do not exist in OpenCode's inference list or in models.dev.
- **Context window:** **200,000** on the free route (models.dev) — versus **1,050,000** on the paid route (OpenRouter) and "1M" on Xiaomi's docs. Max output: **32,000** on the free route versus 131,072 paid.
- **Modalities:** text, image, video and audio in; text out.
- **Reasoning controls:** `extra_body={"thinking":{"type":"disabled"}}`; dedicated `--reasoning-parser mimo` and `--tool-call-parser mimo`; recommended `temperature=1.0, top_p=0.95`.
- **Pricing (as of 2026-10-19):** **Free / Free / Free** on OpenCode Zen. Paid first-party price for the same weights: **$0.14 in / $0.28 out, $0.0028 cache hit** (¥1 / ¥2 / ¥0.02).
- **Architecture:** Sparse MoE, **309B total / 15B activated**; 48 layers (39 SWA / 9 GA), hidden 4096, 256 routed experts with 8 active, sliding window 128, no shared experts, first block global attention + dense FFN, 681M MiMo ViT, 308M AudioTokenizer + 127M audio patch encoder, 5-layer SWA MTP drafter; **MIT licence**.
- **Data-use caveat (this is the one that distinguishes the free route):** "During its free period, collected data may be used to improve the model." The zero-retention sentence that OpenCode grants GLM-5.3-Flash Free, DeepSeek V4.1 Flash Free, MiniMax M3.1 Flash Free and LongCat free models is **not** applied to MiMo-V2.6-Flash Free.

### Raw benchmarks found

> **No benchmark was published for the free route itself** — not by Artificial Analysis (no `mimo-v2.6-flash-free` page), not by BenchLM, not by Vals AI, not by any leaderboard. The figures below are the underlying **MiMo-V2.6-Flash** measurements, which is what this route serves.

MiMo-V2.6-Flash (the underlying model):

- Terminal-Bench 2.1 **87.6%** (vendor) — AA's TB 2.1 field is null; Terminal-Bench 4.0 **28.8%** (vendor) / **22.73%** (AA); Terminal-Bench-Science 0.1 4.29% (AA)
- DeepSWE v1.1 **67.9%**; MiMo Code Bench 61.2%; ProgramBench 26.0%; SciCode 51.27% (AA); FrontierCode 1.1 42.07% (AA); FrontierSWE v2 mean@5 18.13%
- Toolathlon-Verified **73.6%**; AutomationBench v1.0.6 **52.3%** (vendor) / **64.05%** (AA objective-share); JobBench **61.2%**; Agents' Last Exam **27.6%**; MiMo Cyber Bench 77.2%; **CyberGym 95.1%** (best-verified in the catalogue); ExploitGym 6.0%; ExploitBench 25.3%; SEC-Bench Pro 47.5%
- HLE **35.08%** (AA); CritPt 12.0%; LCR 74.33%; AA Intelligence Index **38** (#12/121 open-weight models); Omniscience index **-12.68**, accuracy **27.0%**, hallucination 54.36%; GDPval-AA 1607.51
- SWE-bench (Vals): 92.0% for MiMo-V2.6-**Pro**; no SWE-bench or LiveCodeBench figure for the Flash build
- No MRCR, RULER, GraphWalks or needle-in-haystack measurement for the model

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). **Scoring basis note:** the free route is the same weights as `model/mimo-v2.6-flash/`, so the capability scores are that model's measurements; the two route-level differences — a **200K/32K window instead of 1.05M/131K** and a **data-use caveat instead of zero retention** — are applied to the Context and Cost dimensions respectively.

- **Tool use: 80/100.** Terminal-Bench 2.1 **87.6%**, Toolathlon-Verified 73.6%, JobBench 61.2%, AutomationBench 52.3–64.05%, MiMo Cyber Bench 77.2%, **CyberGym 95.1%**, GDPval-AA 1607.51. Capped by the rubric's anchors (tau3 ~50%+ → not measured; GDPval ~1750+ → 1607.51), by Terminal-Bench 4.0 at 22.73–28.8%, and by Agents' Last Exam 27.6%.
- **Reasoning: 70/100.** The AA Intelligence Index of **38 (#12 of 121 open-weight models)** and LCR 74.33% are respectable for a $0.28/M model, and the CyberGym 95.1% result shows real capability. Capped by the **Omniscience index of -12.68 with 27.0% accuracy** — the weakest knowledge profile in this batch — by HLE 35.08%, CritPt 12.0%, and by the absence of any published GPQA, FrontierMath or MMLU-Pro figure for the Flash build.
- **Context window: 72/100.** The rubric's tiering is about the *usable* window, and on this route it is **200,000 tokens with a 32,000 max output** (models.dev's free-route limits) — the 200K–500K band, i.e. 65–84 — despite the underlying model serving 1.05M/131K on the paid route. 72 reflects a genuine but sharply truncated window on the free tier, and the output cap falls just below the 64K line.
- **Multimodal: 88/100.** Text, image, video and audio in with text out — the rubric's "+audio in = 90–100" band — with the 681M MiMo ViT and 308M AudioTokenizer, MiMo VisualCoding 71.5% and MMMU-Pro 73.06% (AA). Held at 88 because the vision/audio evidence is thin and vendor-published, and because Artificial Analysis lists only "text and image" for the evaluated configuration.
- **Coding: 78/100.** Terminal-Bench 2.1 **87.6%** (above the rubric's 85% anchor) and MiMo Code Bench 61.2%, DeepSWE 67.9%, Toolathlon-Verified 73.6%, SciCode 51.27% (under the 55% anchor). Capped by DeepSWE 67.9% (under the 74% anchor), Terminal-Bench 4.0 at 22.73–28.8%, Terminal-Bench-Science 4.29%, ProgramBench 26.0%, FrontierCode 42.07%, FrontierSWE v2 18.13%, and the absence of any SWE-bench or LiveCodeBench figure.
- **Cost efficiency: 95/100.** The evaluated route is **Free / Free / Free**. The rubric's "$0 = 100" anchor is deliberately not credited in full: Zen states the promotion is "for a limited time", is "using this time to collect feedback and improve the model", and — uniquely among the free routes in this catalogue — **"collected data may be used to improve the model"** (no zero-retention guarantee, unlike GLM-5.3-Flash Free, DeepSeek V4.1 Flash Free or MiniMax M3.1 Flash Free). The durable paid price for the same weights is $0.14/$0.28 with a $0.0028 cache hit, and Artificial Analysis measures $0.06 per Index task — so 95 stands for the durable economics, with the free tier noted rather than scored as a permanent 100.
- **Overall Score: 77.6/100.** (80 + 70 + 72 + 88 + 78) / 5 = 77.6 — best-fit: **the cheapest full-omni-modal open-weight route in the dataset** ($0 or $0.14/$0.28, MIT weights, audio/video/image input, 232 t/s on the paid route) with a truncated 200K/32K window on the free tier and a data-use caveat; ideal for high-volume multimodal and light-agentic work where 200K of context and 32K of output are enough, and a poor fit for long-document or long-horizon agent work that needs the paid 1.05M/131K route.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Free-route context 200,000 / 32,000 (models.dev) vs 1,050,000 / 131,072 (paid route, OpenRouter, Xiaomi).** The free route's halved limits are the operative ones for this entry and drive the Context score; the paid limits are quoted for contrast.
2. **No benchmark exists for the free route** — AA, BenchLM, Vals AI and every leaderboard were checked, and all of them describe the underlying MiMo-V2.6-Flash. The capability scores are inherited and labelled as such.
3. **The slug is wrong.** There is no `mimo-v2.6-free` id anywhere: OpenCode's inference list contains `mimo-v2.6-flash-free`, `mimo-v2.5-free`, `mimo-v2-flash-free`, `mimo-v2-pro-free` and `mimo-v2-omni-free`, and models.dev has the same set. This folder is therefore a **mis-slug of the MiMo-V2.6-Flash free route**, not the Pro free route and not a distinct SKU.
4. **The data-use caveat is route-specific.** Zen's privacy section grants zero retention to several free models and explicitly excepts MiMo-V2.6-Flash Free: "During its free period, collected data may be used to improve the model." That is the reason the cost score is 95 rather than 100.
5. **Zen's paid MiMo table is missing.** Zen lists no paid `mimo-v2.6-flash` or `mimo-v2.6-pro` row (paid MiMo appears under `opencode-go` in models.dev), so the free route is the only MiMo-V2.6 row in the pay-as-you-go catalogue — worth knowing before routing long-context work through it.
6. **Tool-call repetition (vendor-acknowledged, 2026-09-27):** "the model would sometimes issue the same or highly similar tool calls repeatedly, consuming substantial time and context without making meaningful progress" — "the response-level repetition rate exceeded 0.05%" (OpenCode measurements: Flash 1.02%, Pro 0.54%; MiMo Desktop 0.19%, Claude Code 0.27%). Patched MOPD checkpoints have been on Xiaomi's API since 2026-09-25 with unchanged model names.
7. **BenchLM's OpenCode data page attributes the Pro figure (DeepSWE 71.9) to the Flash-RL card URL** — a source-attribution error on Xiaomi's side that this report does not propagate.
8. **Flash release date 2026-09-21 (AA) vs 2026-09-22 (OpenCode's data page, OpenRouter creation)** — one day apart; AA's date is used.

### Notes on identity

- `mimo-v2.6-free` → `mimo-v2.6-flash-free` → the **free route of MiMo-V2.6-Flash**. It is the same 309B/15B MIT-licensed omni-modal MoE as `model/mimo-v2.6-flash/`, differing only in the $0 price, the 200K/32K caps and the data-use terms; the Pro sibling (1.02T/42B, $0.435/$0.87) is a different SKU and is not what this route serves.
- The "Free" in the id is a **promotion, not a tier** — the same pattern as `glm-5.3-flash-free`, `mimo-v2.5-free`, `deepseek-v4.1-flash-free` and `minimax-m3.1-flash-free` on Zen.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — OpenCode Zen's model table, pricing table and privacy section (free-route terms, data-use caveat, the absence of paid MiMo rows), OpenCode's inference model list and its per-model data pages, models.dev's API JSON (the free route's 200K/32K limits and the absence of any `mimo-v2.6-free` id), Xiaomi's MiMo-V2.6 launch material and Hugging Face card, Xiaomi's tool-call-repetition disclosure, Artificial Analysis (both the free route's absence and the base model's per-evaluation payload), the BenchLM evidence ledger, Vals AI and OpenRouter. Every capability score is inherited from the underlying model and labelled as such. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_V2.6_Free.md`, using the same headings.
