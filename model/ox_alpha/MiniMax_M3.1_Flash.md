# ox_alpha — findings by MiniMax M3.1 Flash

- Source: Z.AI (`zhipuai/glm-5.3-flash` — the `ox-alpha` stealth canary route)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ox_alpha (stealth alias of **GLM-5.3-Flash**)
- **Short description:** Not a distinct model — a **pre-release stealth canary** of Z.AI's GLM-5.3-Flash. Z.AI's own launch blog states: "Before release, we tested GLM-5.3-Flash anonymously as `ox-alpha` on OpenCode and OpenRouter to gather user feedback. It quickly became the most popular model of the week — with all of this traffic served on Chinese AI chips." The route was priced at **$0 / $0** during the preview and has since been withdrawn; the underlying model is tracked separately in `model/glm-5.3-flash/`.
- **Provider / access:** OpenRouter `stealth/ox-alpha` (appeared 2026-08-20, **now 404** and absent from the OpenRouter model API); OpenCode Go listed it as **"Ox Alpha Free"** ("free for the next week", "100T tokens/day", id not published); models.dev id `ox-alpha` under the `aihubmix` provider with `canonical_model_id: "zhipuai/glm-5.3-flash"`. It is **not** in OpenCode's current inference or Zen model lists.
- **Release / knowledge:** the canary ran from roughly 2026-08-20; the underlying GLM-5.3-Flash launched **2026-08-26**. Knowledge cutoff: not published.
- **IDs:** `stealth/ox-alpha` (OpenRouter, retired), `ox-alpha` (models.dev), `zhipuai/glm-5.3-flash` (the canonical model id), `z-ai/glm-5.3-flash` (OpenRouter's current id for the released model).
- **Context window:** **1,048,576**; max output **131,072** (models.dev `limit {context: 1000000, output: 131072}`).
- **Modalities:** input text, image, video, PDF; output text. Reasoning: mandatory, effort low / high / max (default max). **Open weights: yes (MIT)** — the released `zai-org/GLM-5.3-Flash` checkpoint.
- **Pricing (as of 2026-10-19, per 1M tokens):** the canary was **$0 / $0** during the preview; the post-window price was not disclosed. The released GLM-5.3-Flash is $0.15 / $0.50 / $0.03 cached on Z.AI and OpenCode Zen, and $0.048 / $0.16 on OpenRouter.
- **Architecture:** 320B total / 18B activated sparse MoE, hybrid sparse + linear attention, mHC, 45 layers, 30T-token multimodal pre-training corpus — identical to the released GLM-5.3-Flash.

### Raw benchmarks found

> **No benchmark was ever published under the name `ox-alpha`.** Artificial Analysis "does not list the model" (checked 2026-08-22 by a third party), and no tracker, leaderboard or aggregator carries an ox-alpha row. The figures below are the released GLM-5.3-Flash's, which is the same model.

Community-reported, unverified (from a 2026-08-21 write-up, syntaxandsignal.tech): a DeepSWE 10-task subset at **80.0%** pass@1 (Fable 5 65.0, GLM-5.3 62.0, Grok 4.6 62.0, GPT-5.6 Sol 52.0) and Kingbench **87.5%** (GLM-5.3 91.25, Opus 4.8 84.10, Qwen 3.8 Max 83.50). These are a third party's own runs on a subset and are not treated as verified.

GLM-5.3-Flash (the same model, as published):

- Terminal-Bench 2.1 **84.3** (vendor) / **84.27%** (AA); Terminal-Bench 4.0 **32.83%** (AA) / **35.8% ± 3.5** (official tbench.ai board, Claude Code agent, 330 trials) / 37.37% (Vals, #14/50)
- DeepSWE v1.1 **63.4%**; NL2Repo 56.3%; Toolathlon-Verified **78.4%**; AutomationBench v1.0.6 **48.8%** (vendor) / 60.37% (AA); Agents' Last Exam 26.3%; GDPval-AA **1773 Elo** (vendor) / 1642.18 (AA); τ³-Banking 47.22%; OfficeQA Pro 62.4%
- GPQA Diamond **91.21%** (AA) / 86.36% (Vals); HLE 39.85% (AA) / 55.3% with tools; LCR 80.0%; CritPt 15.43%; MLCR-AA 51.11%; AA Intelligence Index **42** (#6/121 open-weight); Z.AI's blog claimed "57 at just $0.045 per task (discounted)" on the older index v4.1.1
- SWE-bench **92.00%** (Vals, #10/88); LiveCodeBench **80.51%** (Vals, #69/143); SciCode 51.62% (AA); FrontierCode 41.00% (AA); Terminal-Bench-Science 4.76%; FrontierSWE v2 mean@5 18.13%; Vibe Code 30.76%; ProgramBench 0.00%; SRE Bench 0.76%
- MVBench 77.8%, MMVU 80.5%, BabyVision 53.4%, CharXiv 89.4%, Chartography 78.0%, Vision2Web 77.8%, MMMU-Pro 86.01% (Vals); Z.ai Code Bench v1.0 "29.0 vs. 29.5" (Opus 4.8)
- No MRCR, RULER or GraphWalks measurement for the model

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). **Scoring basis note:** the `ox-alpha` route itself has no published benchmark; every capability score is the released GLM-5.3-Flash's measurement, since the two are the same weights. The cost score reflects the route's actual pricing history (a $0 preview that no longer exists).

- **Tool use: 80/100.** Terminal-Bench 2.1 84.27–84.3%, Toolathlon-Verified 78.4%, GDPval-AA 1642–1773, OfficeQA Pro 62.4%, τ³-Banking 47.22%, JobBench not published. Capped by the rubric's anchors (tau3 ~50%+ → 47.22% short; GDPval ~1750+ → 1642 on AA), by AutomationBench 48.8% in Z.AI's own run, and by Terminal-Bench 4.0 at 32.83–37.37%.
- **Reasoning: 76/100.** GPQA Diamond 86.36–91.21%, HLE 39.85% (AA) / 55.3% with tools, LCR 80.0%, MLCR-AA 51.11%, and an AA Intelligence Index of **42 (#6 among open-weight models)**. Capped by FrontierMath v2 55.789% / 17.073%, CritPt 15.43%, a 27.5% Omniscience accuracy, and the fact that no ox-alpha-specific reasoning measurement exists.
- **Context window: 95/100.** 1,048,576-token context with a 131,072 max output — the rubric's top tier (≥1M = 95–100) with the output cap above the 64K line. Not 100: no long-context retrieval measurement exists for the model, and AA-LCR 80.0% covers only the short band.
- **Multimodal: 90/100.** Text, image, video and PDF input with text output — the rubric's "+audio in = 90–100" band, with a 30T-token multimodal pre-training corpus, MVBench 77.8%, MMVU 80.5%, CharXiv 89.4%, Chartography 78.0%, Vision2Web 77.8% and MMMU-Pro 86.01% (Vals). Held at 90 because no ox-alpha-specific vision evaluation exists and AA lists only "text and image" for the evaluated configuration.
- **Coding: 78/100.** SWE-bench 92.00% (Vals, #10/88), Terminal-Bench 2.1 84.27%, LiveCodeBench 80.51%, DeepSWE 63.4%, NL2Repo 56.3%, Z.ai Code Bench 29.0 (vs Opus 4.8's 29.5). Capped by DeepSWE 63.4% (under the 74% anchor), SciCode 51.62%, Terminal-Bench 4.0 at 32.83–37.37%, Terminal-Bench-Science 4.76%, FrontierCode 41.00%, FrontierSWE v2 18.13%, ProgramBench 0.00% and SRE Bench 0.76%.
- **Cost efficiency: 94/100.** The evaluated route was priced at **$0 input / $0 output** during the preview — the rubric's "$0 = 100" anchor — but it was a *limited-time* promotion with a feedback purpose rather than a permanent free tier, and it has since been withdrawn; the durable price for the same weights is $0.15/$0.50 on Z.AI and OpenCode Zen (≈95) and $0.048/$0.16 on OpenRouter. The score therefore sits just below the free-tier ceiling: the route's real economic value was free access to frontier-adjacent open weights, and its "cost" was that the model name was a moving target.
- **Overall Score: 83.8/100.** (80 + 76 + 95 + 90 + 78) / 5 = 83.8 — best-fit: the same frontier-capable, MIT-licensed, 1M-context omni-modal model as GLM-5.3-Flash, briefly reachable for free under a name that could change at any time. The folder's real lesson is the canary pattern — Z.AI shipped a whole model's worth of free inference to a community and then removed the alias — which is worth remembering for any "stealth model" in this dataset.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **No ox-alpha score exists anywhere.** Artificial Analysis, BenchLM, Vals AI and every leaderboard were checked and none carries the name; the two community figures (DeepSWE 10-task subset 80.0%, Kingbench 87.5%) are a third party's own runs on a subset and are explicitly labelled unverified. The capability scores are the released model's.
2. **Index — 42 (AA today) vs 57 (Z.AI's blog, index v4.1.1).** Index-version change; the current 42 is used.
3. **Pricing — $0/$0 (preview) vs the released $0.15/$0.50 (Z.AI, Zen) vs $0.048/$0.16 (OpenRouter).** Three different price points for the same weights on three routes; the durable one anchors the cost score.
4. **The canary's own release claims are internally inconsistent in the community:** the third-party write-up's DeepSWE subset (80.0%) is far above the released model's 63.4% on the full 113-task set — a subset/effort difference, not a model difference, and a good illustration of why the pre-release numbers should not be scored.
5. **Identity is asserted by two independent sources** — Z.AI's own launch blog and models.dev's `canonical_model_id: "zhipuai/glm-5.3-flash"` — plus OpenCode Data's page title "GLM-5.3-Flash (formerly ox-alpha) Usage, Cost & Rank". That triple makes the alias mapping solid, and it is the basis for scoring this folder as GLM-5.3-Flash rather than as an unknown model.
6. **The route no longer exists** — `stealth/ox-alpha` 404s on OpenRouter and is absent from the model API, and ox-alpha is not in OpenCode's current inference or Zen lists. A stealth route can vanish without notice, which is the operational risk this folder documents.

### Notes on identity

- `ox_alpha` (project slug, underscore) is the **public alias of the retired `ox-alpha` (hyphen) stealth route**; the underlying model is `zhipuai/glm-5.3-flash` = `z-ai/glm-5.3-flash` = `model/glm-5.3-flash/`.
- This is the same class of object as Claude Fable 5.1 / Claude Mythos 5.1 (one model, two configurations) and Gemini 3.8 Flash / Flash Cyber — but unlike those, the ox-alpha configuration was a **temporary, unnamed, free-preview alias** rather than a durable product. Per the project's permanence rules nothing was merged or deleted; the folder keeps the alias's history and the canonical model's numbers.
- The dataset's `ox_alpha` entry therefore documents a **canary**, not a SKU: a useful precedent when a vendor wants unlabelled community feedback before launch.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Z.AI's GLM-5.3-Flash launch blog (the primary "ox-alpha" statement), models.dev's API JSON (canonical id, limits, modalities, cost), OpenCode Data's model pages, OpenRouter's catalogue and retired `stealth/ox-alpha` route, plus a negative-verification sweep across Artificial Analysis, BenchLM, Vals AI and the official Terminal-Bench board. Every capability score is inherited from the same-weights released model and labelled as such; the unverified community subset numbers are marked unverified. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.3_Flash_Ox_Alpha.md`, using the same headings.
