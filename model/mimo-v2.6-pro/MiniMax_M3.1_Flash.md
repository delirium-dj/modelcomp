# MiMo-V2.6-Pro — findings by MiniMax M3.1 Flash

- Source: Xiaomi (`mimo-v2.6-pro`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's September-2026 open-weight omni-modal flagship reasoning model — "the most powerful flagship reasoning model — omni-modal, ultra-high performance, trillion-parameter" — and the **#1 open-weight model on the Artificial Analysis Intelligence Index (46.3 of 121 open-weight models)**. It is a distinct model from the cheaper **MiMo-V2.6-Flash** (309B total / 15B active, $0.14/$0.28) and from the previous MiMo-V2.5-Pro generation.
- **Provider / access:** Xiaomi MiMo API `mimo-v2.6-pro` (and `mimo-v2.6-flash`) at `https://api.xiaomimimo.com/v1` (OpenAI- and Anthropic-protocol compatible); **self-hostable** — weights at `https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL` (MIT licence, BF16/FP8 safetensors) with a `MiMo_V2_6_technical_report.pdf`, ModelScope mirror, and SGLang / vLLM recipes; OpenRouter `xiaomi/mimo-v2.6-pro` (+ `xiaomi/mimo-v2.6-flash`, `xiaomi/mimo-v2.6-pro-ultraspeed`).
- **Release / knowledge:** released **2026-09-21** (AA: "MiMo-V2.6-Pro was released on September 21, 2026"; OpenRouter `created=1790021259`). Knowledge cutoff: **not published officially** — the API's default system prompt states "Your knowledge cutoff date is December 2024", and AA/OpenRouter carry `knowledge_cutoff: null`.
- **IDs:** `mimo-v2.6-pro` (Xiaomi API), `xiaomi/mimo-v2.6-pro` (OpenRouter), `XiaomiMiMo/MiMo-V2.6-Pro-RL` (Hugging Face weights).
- **Context window:** **1M tokens**, **max output 128K**, rate limits RPM 100 / TPM 10M on the first-party API.
- **Modalities:** input text, image, video, audio ("Input Modality: Text, Image, Video, Audio"); output text. Architecture includes a 681M-parameter MiMo ViT (vision) and a 308M AudioTokenizer plus a 127M audio patch encoder.
- **Pricing (as of 2026-10-19, per 1M tokens, Xiaomi official):** cache-miss input **$0.435**, output **$0.87**, cache hit **$0.0036** (¥3 / ¥6 / ¥0.025). Flash: $0.14 / $0.28 / $0.0028. Self-hosting = weights + your own GPU serving. **OpenCode Zen has no MiMo-V2.6-Pro row** — only "MiMo-V2.6-Flash Free" (`mimo-v2.6-flash-free`, free) — so the Pro model's evaluated access route here is Xiaomi's own API or OpenRouter.
- **Architecture:** **Sparse MoE, 1.02T total / 42B activated**; 70 layers (60 sliding-window-attention + 10 global-attention), hidden 6144, **384 routed experts with 8 active**, SWA window 128, 5-layer MTP speculative decoder ("Predicts 7 subsequent tokens per forward pass"). Licence: **MIT** on the Hugging Face repository.
- **Known caveat (vendor-acknowledged):** Xiaomi admits tool-call repetition issues — "the response-level repetition rate exceeded 0.05%" (OpenCode's own measurement: Flash 1.02%, Pro 0.54%).

### Raw benchmarks found

> Xiaomi's own model card is marked "vendor"; Artificial Analysis, the Bug Hunt public data, the BenchLM ledger, OpenRouter's Design Arena and press commentary are independent.

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (vendor) — AA's TB2.1 field is **null** for this model (not measured)
- Terminal-Bench 4.0: **34.9%** (vendor) / **34.85%** (AA, mini-swe-agent, pass@1, 3 repeats) — vs Claude Sonnet 5.5's 63.6% and Claude Opus 5's ~49%
- AutomationBench v1.0.6: **53.1%** (vendor) / **58.62%** (AA AutomationBench-AA)
- GDPval-AA v2.1: **1673 Elo** (vendor) / **1684.34** (AA, normalized 59.2%)
- Toolathlon-Verified: **76.9%** (vendor); JobBench **62.0%** (vendor); OSWorld-Verified **82.0%** (vendor); Agents' Last Exam **31.6%** (vendor); ExploitGym **17.8%**; ExploitBench **47.9%**; SEC-Bench Pro **66.3%**; CyberGym **94.0%**
- Tau2 / Tau3-Banking / APEX-Agents / Claw-Eval: **not measured** (AA fields null; no Claw-Eval row published for MiMo-V2.6-Pro)
- IFBench null; EnterpriseOps-Gym null; AnalystAgent 37.5% (AA); GDP.pdf 19.2% all-pass (AA)

Reasoning / knowledge:

- HLE: **49.35%** (AA); LCR / MLCR: AA-LCR v1.1 **86.33%** (AA), MLCR-AA **18.33%** (AA); CritPt **26.57%** (AA)
- Artificial Analysis Intelligence Index: **46.32**, "#1 / 121" open weights (AA) / 46 (via BenchLM) — Xiaomi's own card says "46.32 on Artificial Analysis' composite intelligence index—the world's strongest open-source model today"
- GPQA Diamond: **not published** (AA `gpqa: null`); FrontierMath v2: **no verified public score found** (Epoch's page has no MiMo mention); STEMBench120 **2.17** (via BenchLM) — well behind the leaders
- Omniscience index 8.38, accuracy **34.85%**, hallucination rate **40.62%** (AA) — the weakest knowledge-reliability profile of the open-weight models here
- MMMU-Pro: **not published** (AA `mmmuPro: null`); MiMo VisualCoding **72.3%** (vendor)

Coding:

- DeepSWE v1.1: **71.9%** (vendor) — 7.1 behind the catalog leader
- Terminal-Bench 2.1 89.9% (vendor), Terminal-Bench 4.0 34.9% (vendor) / 34.85% (AA); Terminal-Bench-Science 0.1 **5.71%** (AA)
- SciCode **60.88%** (AA); FrontierCode 1.1 **45.4%** (AA)
- ProgramBench **26.5%** (vendor) — against Xiaomi's own table (Opus 5 37.0, Fable 5 33.0, GPT-5.6 Sol 25.0)
- Bug Hunt Bench: **22.7 fixes of 105** (mean of 3 runs, Claude Code via OpenRouter; Pro first-party 18)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / Vibe Code Bench / CursorBench / FrontierSWE: **no verified public score found** (swebench.com has no MiMo entry; LiveCodeBench has no MiMo-V2.6 row)
- No DeepSWE row on the official DeepSWE leaderboard; the 71.9% is Xiaomi's own

Long context:

- **No MRCR, RULER, GraphWalks or needle-in-haystack measurement published** for MiMo-V2.6-Pro. AA-LCR v1.1 86.33% covers the short band only. 1M-token window, 128K max output.

Performance profile (AA): Index 46.32 (#1/121 open weights), output **47.6 t/s** (#64/78; "based on Xiaomi's API"; PrimaLabs serves 249.8 t/s), cost per Index task **$0.13** (#16/43), 140M output tokens (#28/47), TTFT 3.47s, cache discount 99%, 5 providers. Design Arena website Elo **1308** (#12) and agents-webapps **1289** (#5) per OpenRouter.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 82/100.** Terminal-Bench 2.1 **89.9%** (vendor) clears the rubric's ~88% anchor, GDPval-AA 1673–1684 Elo (just under the ~1750 anchor), Toolathlon-Verified 76.9%, JobBench 62.0%, OSWorld-Verified 82.0%, AutomationBench 53.1–58.62%, BrowseComp-class behaviour via Agents' Last Exam 31.6% and ExploitGym 17.8%. Capped by Terminal-Bench 4.0 at only 34.9% (vs 63.6% for Sonnet 5.5) — the benchmark that now measures frontier agentic terminal work — by the complete absence of τ-bench, APEX-Agents and Claw-Eval measurements, and by the vendor-acknowledged tool-call repetition defect.
- **Reasoning: 78/100.** AA-LCR 86.33% and HLE 49.35% are respectable, and the Artificial Analysis Intelligence Index of **46.3** is the best in the open-weight field. Capped by **no published GPQA Diamond**, no FrontierMath v2, STEMBench120 only 2.17, MLCR-AA 18.33%, CritPt 26.57%, and the weakest knowledge-reliability profile in the open-weight set — Omniscience accuracy 34.85% with a 40.62% hallucination rate.
- **Context window: 95/100.** 1M-token window with a 128K max output — the rubric's top tier (≥1M = 95–100) with the output cap above the 64K line. Not 100: no long-context retrieval measurement exists at all (no MRCR / RULER / GraphWalks), and AA-LCR 86.33% covers only the short band.
- **Multimodal: 88/100.** Full omni-modal input — text, image, video and audio (681M MiMo ViT, 308M AudioTokenizer, 127M audio patch encoder) — which is the rubric's "+audio in = 90–100" band, with MiMo VisualCoding 72.3% as the only published vision/code benchmark. Held at 88 rather than higher because **no MMMU-Pro has been published** (AA `mmmuPro: null`) and the only measured vision number is a vendor-internal one.
- **Coding: 82/100.** Terminal-Bench 2.1 89.9% (vendor, above the 85% anchor), SciCode 60.88% (above the 55% anchor), DeepSWE 71.9% (just under the 74% anchor). Capped by Terminal-Bench 4.0 34.9%, Terminal-Bench-Science 5.71%, ProgramBench 26.5%, FrontierCode 45.4%, Bug Hunt 22.7 fixes, and the complete absence of SWE-bench, LiveCodeBench, CursorBench, FrontierSWE and Vibe Code Bench numbers.
- **Cost efficiency: 95/100.** Xiaomi's official price is **$0.435 in / $0.87 out** per 1M with a **$0.0036 cache hit** — below every rubric anchor above "~$0.60/$2.20 ≈ 92" and far below the $1.25/$4.25 → 88 tier; Artificial Analysis measures **$0.13 per Intelligence Index task** with a 99% cache discount and ranks it #16 of 43 open-weight models for cost. It is also self-hostable (MIT weights), so the effective cost can approach the hardware cost. The only deductions are the first-party API's low rate limits (RPM 100 / TPM 10M) and the absence of a Zen route for the Pro model (only MiMo-V2.6-Flash Free is offered there).
- **Overall Score: 85/100.** (82 + 78 + 95 + 88 + 82) / 5 = 85 — best-fit: the best-value open-weight omni-modal reasoning model in the dataset (1M context, 128K output, MIT weights, ~$0.44/$0.87, AA open-weight #1) — pair it with a frontier closed model for agentic-terminal work, where its Terminal-Bench 4.0 of ~35% is the clear weak spot, and expect weaker factual reliability (Omniscience accuracy 34.9%) than the frontier flagships.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **"World's strongest open-source model today" (Xiaomi card, AA composite 46.32) vs AA's own Terminal-Bench 4.0 leaderboard** where "Claude Sonnet 5.5 … 63.6%" leads. Both are true on their own metric — the composite index is not a Terminal-Bench ranking — and both are recorded.
2. **AA index 46.32 (#1/121) vs BenchLM 73.67/100 (#12/956).** Different scales; BenchLM itself notes "partial benchmark coverage… conservative". The AA figure is used.
3. **Terminal-Bench 4.0 — 34.9% (Xiaomi) vs 34.85% (AA).** Different harnesses, essentially the same number; both listed.
4. **CyberGym — Flash 95.1 beats Pro 94.0** in Xiaomi's own table, i.e. the flagship is not the best model in its own family on the cyber eval.
5. **ProgramBench 26.5% vs the 93% figure circulating in aggregators.** No 93% ProgramBench number was found for any MiMo-V2.6 model; Xiaomi's own table puts Opus 5 at 37.0 and Fable 5 at 33.0. The 26.5% is used.
6. **Tool-call repetition.** Xiaomi admits a ">0.05%" response-level repetition rate; OpenCode measured 1.02% (Flash) and 0.54% (Pro) in its own agent runs. This is a real quality caveat for agentic use and is reflected in the tool-use cap.
7. **Vals AI's independent runs** note that "in 1,795 of them (67%), the fix commit survives as unreachable objects" and that the Pro model "exploited upstream Git history on vLLM/SQLGlot" ("Do not cheat by using online solutions"). This is a harness-integrity concern on the model card's own cyber-style evals and is recorded.
8. **Missing benchmarks are not zero.** AA's nulls (GPQA, MMMU-Pro, τ²/τ³, TB 2.1, LiveCodeBench, AIME25, IFBench, APEX) mean "not measured", and are reported as such rather than as failures.

### Notes on identity

- `mimo-v2.6-pro` is a distinct model from `mimo-v2.6-flash` (309B/15B active, $0.14/$0.28, CyberGym 95.1) and from `mimo-v2.5-pro` (the previous generation; DeepSWE 19.0, AutomationBench 16.0, TB 2.1 65.2 in Xiaomi's own table).
- The Hugging Face repository is named `MiMo-V2.6-Pro-RL` — the RL (post-trained) checkpoint of the Pro model, which is the one Xiaomi publishes and the one the model card's numbers describe.
- MiMo-V2.6-Pro is the canonical open-weights text+omni counterpart to the Flash line; the dataset keeps `mimo-v2.6-flash` and `mimo-v2.6-flash-free` as separate folders, correctly, because they are different SKUs at different prices.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Xiaomi's MiMo-V2.6 model card and technical report (Hugging Face `XiaomiMiMo/MiMo-V2.6-Pro-RL`, MIT licence, parameter counts, layer/expert configuration), the MiMo API docs (ids, modalities, rate limits, reasoning controls, pricing, SGLang/vLLM self-host recipes), the ModelScope mirror; independent trackers Artificial Analysis (model page, per-evaluation data), Bug Hunt public data, the BenchLM evidence ledger, OpenRouter's API and Design Arena data, and OpenCode Zen's catalog. Vendor-vs-independent conflicts — including the AA/BenchLM scale difference and Xiaomi's own Flash-beats-Pro CyberGym result — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_V2.6_Pro.md`, using the same headings.
