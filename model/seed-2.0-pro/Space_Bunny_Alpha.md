# ByteDance Seed 2.0 Pro — findings by Space Bunny Alpha

- Source: ByteDance Seed 2.0 Pro (`ByteDance/Seed-2.0-pro`; Volcengine Ark `doubao-seed-2-0-pro-260215`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro
- **Short description:** ByteDance Seed's flagship proprietary, multimodal reasoning and agent model, positioned for long-horizon workflows, search, coding, and visual reasoning. It is distinct from Seed 2.0 Lite, Mini, and the code-focused Seed 2.0 Code. **Change since 2026-09-25:** Seed has since shipped a newer **Lite** checkpoint (`Seed2.0 Lite 0428`) with SOTA video and audio understanding results, but **Pro remains on the 0215 checkpoint** and is still the capability leader of the family. No deprecation or successor for Pro was found on the BytePlus ModelArk deprecations page (last updated 2026-09-28).
- **Provider / access:** ByteDance Volcengine / Ark ModelArk (`doubao-seed-2-0-pro-260215`, also on Doubao App and TRAE); BytePlus international ModelArk; DeepInfra as `deepinfra/ByteDance/Seed-2.0-pro` (OpenAI-compatible). **New routes found 2026-09-29:** EmpirioLabs AI (`empiriolabs/seed-2-0-pro`, $0.63/$3.79), Ofox (`ofox/volcengine/doubao-seed-2.0-pro`, $0.67/$3.36) and Requesty (`requesty/seed-2-0-pro`, $0.50/$3.00, 256K output cap). AtlasCloud also lists $0.50/$3.00. The model card does not publish a single universal public API URL.
- **Release / knowledge:** 2026-02-14 (official launch; models.dev record; the official card cites a 2026-02-16 leaderboard snapshot). LLM Stats reports January 2024 as its knowledge cutoff; no official cutoff was found in the model card, so this remains third-party metadata.
- **IDs:** `ByteDance/Seed-2.0-pro` (models.dev); `bytedance-seed/seed-2.0-pro` (models.dev canonical); `volcengine/doubao-seed-2-0-pro-260215` (Volcengine Ark dated snapshot); `deepinfra/ByteDance/Seed-2.0-pro` (DeepInfra route).
- **Context window:** 256,000 total tokens with a 128,000-token output limit on the models.dev/Volcengine record. LLM Stats lists 256K input / 131,072 output for the same hosted route; the discrepancy is preserved rather than treated as a measured limit. Requesty is the outlier route, advertising a 256,000-token output limit.
- **Modalities:** Text and image input on the DeepInfra API record; the official card also reports extensive video understanding. Text output; mandatory internal reasoning; tool calling and structured output are supported by the models.dev record (Requesty is the exception, recording no structured-output support). PDF/file and audio support were not verified for Pro.
- **Pricing (as of 2026-09-29, unchanged):** Volcengine Ark **$0.47/M input, $2.37/M output**; DeepInfra, BytePlus and AtlasCloud list $0.50/M input, $0.10/M cached input and $3/M output; prompts above 128K rise to $1/M input and $6/M output on the DeepInfra route. The official card's Table 1 gives $0.47 (¥3.41) input and $2.37 (¥17.04) output against GPT-5.2 High at $1.75/$14.00 and Claude Opus 4.5 thinking at $5.00/$25.00 — roughly an order of magnitude cheaper. Paid model; account limits and route terms apply.
- **Architecture:** Proprietary; parameter count and checkpoint details were not published. The official card positions Pro as the largest/highest-capability member of the Seed 2.0 family, but does not publish a parameter total or MoE configuration.

### Raw benchmarks found

All primary scores below are from ByteDance's official [Seed 2.0 Model Card](https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf), which says evaluations use each benchmark's official protocol unless stated. Unless tools are named, evaluations are without external tools. The card says Terminal-Bench 2.0 excludes three environment-incompatible cases and adapts the remaining tasks to ByteDance's internal agent framework. These are vendor-reported model results, not independent reruns.

Agent / tool use:

- Terminal-Bench 2.0 / Terminus2: **3.0%** (official card, Table 11).
- SWE-Lancer: **55.8%**; Multi-SWE-Bench: **76.5%**; SWE-Bench Pro: **45.2%**; SWE Multilingual: **46.9%** (official card, Table 11).
- Scicode: **71.7%**; SWE-Evo: **48.5%**; Aider Polyglot: **8.5%**; ArtifactsBench: **80.0%**; SpreadsheetBench Verified: **58.0%** (official card, Table 11).
- Search agents: BrowseComp **94.2%**; BrowseComp-zh **79.1%**; HLE-text **58.4%**; HLE-Verified **77.3%**; WideSearch **70.8%**; FinSearchComp **82.4%**; DeepSearchQA **54.2%**; Seal-0 **73.6%** (official card, Table 11).
- Tool/function calling: 2-Bench retail **46.9%**, telecom **74.7%**; MCP-Mark **70.2%**; BFCL-v4 **52.7%** (official card, Table 11).
- GDPval-AA: **no verified public score found.** The official card instead reports an internal GDPVal-Diamond score. **Artificial Analysis carries no Intelligence Index v4.3.2 entry for Seed 2.0 Pro**, so no independent v4.3.2 re-base applies — confirmed by re-checking the AA model directory on 2026-09-29.

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (official card, Table 3).
- HLE, no tools and text only: **87.0%** (official card, Table 3).
- LCR / MLCR / CritPt: **no verified public score found.**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** — still not indexed on AA as of 2026-09-29.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found.**

Coding:

- SWE-bench Verified: **76.5%** (official card, Table 11). Benchgen also lists 76.5%, but its draft card has conflicting 2025 release and text-only metadata, so the exact official model card is the controlling source.
- SWE-Pro: **45.2%**; Multi-SWE-Bench: **76.5%**; SWE Multilingual: **46.9%** (official card, Table 11).
- LiveCodeBench v6: **86.5%**; Codeforces no-tool Elo: **3020**; AetherCode: **82.1%** (official card, Table 3).
- Competitive programming Pass@8: **73.02%**, ahead of GPT-5.2 at 65.08% and Gemini 3.0 Pro at 63.49% in the card's comparison (Figure 7).
- Putnam-200, Pass@8 with Lean/Python/Lean-search tools: **35.5%** (official card, Table 5).
- Claw-Eval / ClawProBench: **no verified public score found.**

Long context:

- MRCR v2, 8-needle: **25.0%**.
- Graphwalks BFS below 128K: **73.0%**; Graphwalks Parents below 128K: **74.0%**; LongBench v2 at 128K: **85.4%** (official card, Table 3). Note the card's own caveat that Graphwalks was tokenized with ByteDance's in-house pipeline, which mismatches the official OpenAI tokenization/scoring setup.
- Frames: **37.5%**; DeR2 Bench: **77.5%** (official card, Table 3).
- The card explicitly notes that MRCR/Graphwalks leave headroom, although Frames places Seed 2.0 Pro first on that leaderboard. A successful 1M-class request is not reported, so the 256K API limit is not a measured retrieval limit.

Multimodal evidence:

- Vision Arena snapshot: 3rd overall as of 2026-02-16; Text Arena: 6th (official model-card footnote).
- MMU-Pro **85.4%**; MathVista **88.8%**; BLINK **79.5%**; DA-2K **92.3%** (official card, Table 8).
- HLE-VL **94.2%**, Minedojo-Verified **90.4%**, and MM-BrowseComp **53.9%** in the official agent evaluation (Table 11).
- The card includes public image and video suites such as DUDE, MMLongBench, LongDocURL, CGBench, LVBench, and ZeroVideo, confirming video evaluation but not proving production support on every API route. The newer Lite 0428 checkpoint claims SOTA on several video **and audio** benchmarks; Pro is not credited with those.

Sources consulted: [ByteDance Seed 2.0 Model Card](https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf), [Seed 2.0 official launch](https://seed.bytedance.com/en/blog/seed-2-0-official-launch), [Seed2.0 product page (Pro 0215 / Lite 0428 checkpoints)](https://seed.bytedance.com/en/seed2), [BytePlus ModelArk model deprecations](https://docs.byteplus.com/en/docs/ModelArk/1350667) (last updated 2026-09-28), [models.dev Seed 2.0 Pro](https://models.dev/models/bytedance-seed/seed-2.0-pro/), [LLMReference Volcengine route](https://www.llmreference.com/model/bytedance-doubao-seed-2-0-pro/volcengine), [Phaseo pricing aggregator](https://phaseo.app/models/bytedance/seed-2.0-pro), accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong search, research, and software-agent results (BrowseComp 94.2, WideSearch 70.8, Multi-SWE-Bench 76.5) are balanced by much weaker Terminal-Bench 2.0 (3.0), SWE-Bench Pro (45.2), BFCL-v4 (52.7), and 2-Bench retail (46.9).
- **Reasoning: 91/100.** GPQA Diamond 88.9, HLE 87.0, HLE-Verified 77.3, BrowseComp 94.2, and a 3020 no-tool Codeforces Elo justify a frontier-tier score; vendor-only reporting, the absence of any independent AA Intelligence Index value, and weaker long-context probes keep it below the scale ceiling.
- **Context window: 82/100.** The 256K advertised limit and measured 128K LongBench v2 score of 85.4 support strong long-context performance, but MRCR v2 at 25.0 and no published successful run at the full API ceiling cap the score.
- **Multimodal: 95/100.** Image and video inputs are explicitly evaluated, with frontier results across visual reasoning, spatial tasks, documents, and video agents; the DeepInfra API record only verifies text/image, so a point is withheld for route-dependent video exposure.
- **Coding: 87/100.** SWE-bench Verified 76.5, Multi-SWE-Bench 76.5, LiveCodeBench v6 86.5, and Codeforces Elo 3020 are excellent, offset by SWE-Bench Pro 45.2, Terminal-Bench 3.0, and Aider Polyglot 8.5.
- **Cost efficiency: 83/100.** $0.47/M input and $2.37/M output on Volcengine — versus $1.75/$14.00 for GPT-5.2 High and $5.00/$25.00 for Claude Opus 4.5 thinking in the card's own table — is inexpensive for a frontier multimodal model, with cached input at $0.10/M on the DeepInfra/BytePlus routes; long prompts above 128K rise to $1/$6, so it is not in the top free/ultra-low-cost tier.
- **Overall Score: 86.6/100.** Half-up mean of the five non-cost dims: (78 + 91 + 82 + 95 + 87) / 5 = 433 / 5 = 86.6. Best fit as a strong paid multimodal reasoning and long-horizon agent, especially for search, visual analysis, and competition-style coding; the very low terminal and broad SWE-Pro results make it less reliable for unattended coding agents than the headline scores suggest.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Independent public-web research using ByteDance's official model card, the Seed 2.0 launch post and product page, the BytePlus ModelArk deprecations page, models.dev, LLM Reference, and corroborating benchmark catalogs; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Changes vs the 2026-09-25 revision of this file: **newer family checkpoint noted** (Seed2.0 Lite 0428 with SOTA video/audio results; Pro unchanged on 0215); **no deprecation or successor found** for `Doubao-Seed-2.0-pro` on the ModelArk deprecations page (checked 2026-09-28 vintage); **new API routes added** (EmpirioLabs $0.63/$3.79, Ofox $0.67/$3.36, Requesty $0.50/$3.00 with a 256K output cap and no structured-output support, AtlasCloud $0.50/$3.00); Volcengine dated snapshot ID `doubao-seed-2-0-pro-260215` and the card's headline price table (Seed2.0 Pro $0.47/$2.37 vs GPT-5.2 High $1.75/$14.00, Claude Opus 4.5 thinking $5.00/$25.00) recorded; **Artificial Analysis still carries no v4.3.2 index entry for this model**, confirmed 2026-09-29; the card's Graphwalks tokenization caveat added. Overall restated as **86.6** (the previous revision showed "86.6 → 87"; the rule is a half-up mean to one decimal, so 86.6 is the score). No dimension score changed.
- Future sources: add a new file next to this one, e.g. `Seed_2.0_Pro_Code.md`, using the same headings.
