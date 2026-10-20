# GLM-5.3-FlashX — findings by MiniMax M3.1 Flash

- Source: Z.AI (`glm-5.3-flashx`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** Z.AI's **high-speed serving line** of GLM-5.3-Flash — "GLM-5.3-FlashX is now live, delivering inference speeds of **200 tokens/s** for faster responses and a smoother experience". It is **not a separate checkpoint**: the `zai-org/` Hugging Face org publishes only `GLM-5.3`, `GLM-5.3-Flash`, `GLM-5.3-BF16` and `GLM-5.3-Flash-BF16` (all MIT) — there is **no `GLM-5.3-FlashX` weights repository**, and Z.AI documents FlashX under one architecture page ("GLM-5.3-Flash/FlashX"). The trade is explicit: FlashX costs **2.5× the base Flash's price** and is **not available on the GLM Coding Plan** ("(GLM-5.3-FlashX is not yet available on the plan)"), while the base Flash "is now fully available… with 3× the available quota compared with GLM-5.3".
- **Provider / access:** Z.AI API `glm-5.3-flashx` (`https://api.z.ai`, OpenAI- and Anthropic-protocol compatible); OpenRouter `z-ai/glm-5.3-flashx` (created 2026-09-18). **Not on OpenCode Zen** and **not tracked by Artificial Analysis or BenchLM** (404 on both, and no "flashx" entry in AA's 706-model index).
- **Release / knowledge:** the FlashX serving line went live **2026-09-18** (OpenRouter creation date; Hacker News thread "GLM-5.3-FlashX: Delivering inference speeds of 200 tokens/s" 2026-09-18, linking Z.AI's docs). Knowledge cutoff: **not published**.
- **IDs:** `glm-5.3-flashx` (Z.AI), `z-ai/glm-5.3-flashx` (OpenRouter). There is no OpenCode Zen id.
- **Context window:** **1M** tokens, **128K max output** (`max_tokens` max 131072).
- **Modalities:** input video, image, text, file; output text.
- **Reasoning controls:** `reasoning_effort` ∈ {max, high, low}, **default max**; `thinking.type` only `enabled`; temperature 1.0, top_p 0.95.
- **Pricing (as of 2026-10-19, per 1M tokens):** **$0.37 in / $1.25 out**, cached input $0.075 — versus the base Flash's $0.15 / $0.50 / $0.03. OpenRouter lists the same $0.37/$1.25 (and the base Flash at $0.048/$0.16, well below Z.AI's list).
- **Architecture:** the same 320B total / 18B activated sparse MoE as the base Flash — "GLM-5.3-Flash has 320B total parameters with 18B activated", hybrid sparse + linear attention, mHC, 45 layers, 30T-token multimodal pre-training corpus, 3.0×/4.4× less attention compute and KV cache than GLM-5.3. Z.AI publishes **no** FlashX-specific serving description (speculative decoding or otherwise) and no quality-vs-speed trade-off statement.

### Raw benchmarks found

> **No benchmark under the name "GLM-5.3-FlashX" was found on any tracker.** Artificial Analysis has no FlashX page (and its model index contains no "flashx" slug at all); BenchLM 404s; Vals AI has no FlashX model page; the official Terminal-Bench 4.0 board renders client-side with no FlashX row. The numbers below are the **base GLM-5.3-Flash** measurements, used as the closest available proxy for the same weights.

Agent / tool use (base GLM-5.3-Flash):

- Terminal-Bench 2.1: **84.3%** (Z.AI blog) / **84.27%** (AA)
- Terminal-Bench 4.0: **32.83%** (AA) / **35.8% ± 3.5** (official tbench.ai board, Claude Code agent, 330 trials, ~$2.9k) / 37.37% (Vals AI, #14/50)
- Toolathlon-Verified: **78.4%** (Z.AI); AutomationBench v1.0.6 **48.8%** (Z.AI) / **60.37%** (AA objective-share); Agents' Last Exam **26.3%** (Z.AI); GDPval-AA 1642.18 (AA) / 1773 (Z.AI); τ³-Banking 47.22% (AA); OfficeQA Pro 62.4% (Z.AI)
- Base-model reference rows in Z.AI's table: MMLU 88.1, BBH 86.6, HellaSwag 87.1, LiveCodeBench-Base 37.6, SimpleQA 33.5
- No τ-bench, Claw-Eval or MCP-Atlas figure for the Flash line; the OmniDocBench figure circulating for MiMo models does not apply here

Reasoning / knowledge (base GLM-5.3-Flash):

- GPQA Diamond: **91.21%** (AA) / **86.36%** (Vals AI, #43/138) / 86.4% (via BenchLM)
- HLE: **39.85%** (AA) / 55.3% with tools (Z.AI); LCR **80.0%** (AA); MLCR-AA 51.11% (AA); CritPt **15.43%** (AA)
- Artificial Analysis Intelligence Index: **42** (#6 of 121 open-weight models) — Z.AI's blog claimed "57" on the older index v4.1.1
- Omniscience: index 7.47, accuracy **27.5%**, hallucination rate 27.63% (AA) — a low-accuracy profile despite a low hallucination rate
- FrontierMath v2: Tiers 1–3 **55.789%**, Tier 4 **17.073%** (Epoch AI, via BenchLM)

Coding (base GLM-5.3-Flash):

- DeepSWE v1.1 **63.4%** (Z.AI) / 63.4 (HF eval export); Terminal-Bench 2.1 84.27% (AA); SWE-bench **92.00%** (Vals AI, #10/88); LiveCodeBench **80.51%** (Vals, #69/143)
- SciCode **51.62%** (AA); FrontierCode 1.1 **41.00%** (AA); Terminal-Bench-Science 0.1 **4.76%** (AA); FrontierSWE v2 mean@5 **18.13%**
- Vibe Code Bench **30.76%**, ProgramBench **0.00%**, SRE Bench **0.76%** (Vals AI); NL2Repo 56.3% (Z.AI); MiMo Code Bench not applicable

Long context:

- **No MRCR, RULER, GraphWalks or needle-in-haystack measurement** for the GLM-5.3-Flash line. 1M context, 128K max output; AA-LCR 80.0% (short band only).

FlashX-specific performance claims (no independent measurement):

- Z.AI: "delivering inference speeds of **200 tokens/s**"; OpenRouter: "delivering inference speeds of up to 200 tokens/s"
- The only third-party datapoint is a Hacker News comment: "**5x the price of 5.3 flash and the measured speed is only 75tk/s, whereas 5.3 flash measures 40tk/s**" — i.e. a 3× speed-up at 2.5× the price, against a 5× advertised
- AA measures the **base** Flash at 78.0 t/s (not 77.0 as the earlier reading suggested) with TTFT 2.52s

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). **Scoring basis note:** no tracker measures GLM-5.3-FlashX, so every capability score is anchored on the base GLM-5.3-Flash measurements of the same documented architecture, with FlashX's speed/price profile applied to cost and its coverage gaps noted in each line.

- **Tool use: 80/100.** Base-model evidence: Terminal-Bench 2.1 84.27–84.3%, Toolathlon-Verified 78.4%, GDPval-AA 1642–1773, OfficeQA Pro 62.4%, τ³-Banking 47.22%, Agents' Last Exam 26.3%. Capped by the rubric's anchors (tau3 ~50%+ → 47.22% is just short; GDPval ~1750+ → 1642 on AA), by AutomationBench at 48.8% in Z.AI's own run, and by Terminal-Bench 4.0 at 32.83–37.37%.
- **Reasoning: 76/100.** GPQA Diamond 86.36–91.21%, LCR 80.0%, HLE 39.85% (AA) / 55.3% with tools, MLCR-AA 51.11%, and an AA Intelligence Index of **42 (#6 among open-weight models)**. Capped by FrontierMath v2 55.789% / 17.073%, CritPt 15.43%, the low 27.5% Omniscience accuracy, and the absence of any FlashX-specific reasoning measurement.
- **Context window: 95/100.** 1M context with a 128K max output — the rubric's top tier (≥1M = 95–100), with the output cap above the 64K line. Not 100: no long-context retrieval measurement exists for the Flash line, and AA-LCR 80.0% covers only the short band.
- **Multimodal: 90/100.** Video, image, text and file input with text output — the rubric's "+audio in = 90–100" band, with the 30T-token multimodal pre-training corpus, MVBench 77.8%, MMVU 80.5%, BabyVision 53.4%, CharXiv 89.4%, Chartography 78.0%, Vision2Web 77.8% and MMMU-Pro 86.01% (Vals). Held at 90 because no FlashX-specific vision evaluation exists and AA lists only "text and image" for the evaluated configuration.
- **Coding: 78/100.** Terminal-Bench 2.1 84.27% (above the rubric's 85% anchor is not met but it is close), SWE-bench 92.00% (Vals, #10/88), LiveCodeBench 80.51%, DeepSWE 63.4%, NL2Repo 56.3%. Capped by DeepSWE 63.4% (under the 74% anchor), SciCode 51.62% (under 55%), Terminal-Bench 4.0 at 32.83–37.37%, Terminal-Bench-Science 4.76%, FrontierCode 41.00%, FrontierSWE v2 18.13%, ProgramBench 0.00% and SRE Bench 0.76% on Vals' harness.
- **Cost efficiency: 84/100.** The evaluated route is Z.AI's own API at **$0.37 in / $1.25 out** per 1M with a $0.075 cached read — 2.5× the base Flash's price but still far below the rubric's "~$1.25/$4.25 ≈ 88" tier on input, and comfortably inside the "~$0.60/$2.20 ≈ 92" band on the blended rate. The deductions are the 2.5× premium over the same weights at $0.15/$0.50, the absence of Coding-Plan access ("not yet available on the plan"), and the absence of an OpenCode Zen route; the 200 t/s claim is unverified by any independent tracker, and the one third-party datapoint measured 75 t/s.
- **Overall Score: 83.8/100.** (80 + 76 + 95 + 90 + 78) / 5 = 83.8 — best-fit: the same frontier-capable open-weight model as GLM-5.3-Flash, served for latency at 2.5× the price and outside the Coding Plan — buy FlashX only when token latency is the binding constraint (interactive agents, autocomplete), and take the base Flash or the free Zen route otherwise.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Speed — 200 t/s (Z.AI, OpenRouter) vs 75 t/s measured vs 78.0 t/s for the base Flash (AA).** The only independent datapoint is a single Hacker News comment, which is consistent with each other but far below the vendor's 5× claim. No tracker measures FlashX, so the score does not credit the advertised speed.
2. **Price — $0.37/$1.25 (Z.AI docs and OpenRouter) vs the $0.15/$0.50 assumption.** The official figure is used; OpenRouter's own base-Flash price ($0.048/$0.16) is a third, different number and is recorded.
3. **Index — 42 (AA today) vs 57 (Z.AI's blog, index v4.1.1).** Index-version change on the base model; the current 42 is used.
4. **Checkpoint vs serving profile.** Z.AI never states whether FlashX is the same weights with a different serving configuration (e.g. speculative decoding), and publishes no FlashX architecture note; the report therefore scores the shared architecture and says so rather than claiming a separate model.
5. **No FlashX rows anywhere** — AA's 706-model index contains zero "flashx" entries, BenchLM 404s, Vals AI has no page, the official Terminal-Bench 4.0 board has no row. Every capability number in this report is inherited from the base model, and that inheritance is flagged in each score line.
6. **TTFT measured by AA for the base Flash is 2.52s**, and the FlashX vendor claim is about steady-state decode speed — the two are not interchangeable, which is part of why the HN measurement is hard to adjudicate.

### Notes on identity

- `glm-5.3-flashx` is a **serving line of the same GLM-5.3-Flash weights**, on the vendor's own "GLM-5.3-Flash/FlashX" documentation page, with no separate checkpoint in the `zai-org/` Hugging Face org and no separate AA/BenchLM/Vals entry.
- It is **not** a tier in the pricing-alias sense (the price difference is real), but it is a **configuration** of `model/glm-5.3-flash/` in the weights sense — the same relationship the Fable 5.1 / Mythos 5.1 pair has. Both folders are kept, and the underlying capability is therefore reported identically apart from cost and speed.
- The base Flash's own tier note — "GLM-5.3-Flash is now fully available… with 3× the available quota compared with GLM-5.3" on the Coding Plan, and FlashX excluded from it — is a quota/policy decision, not a capability one.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Z.AI's first-party docs (the GLM-5.3-Flash/FlashX model page, chat-completion API reference, pricing page), the `zai-org/` Hugging Face org (to establish that no FlashX checkpoint exists), the GLM-5.3-Flash launch blog, OpenRouter's model catalog and description, and the negative-verification sweep across Artificial Analysis (models index, 706 slugs, no FlashX entry), BenchLM, Vals AI and the official Terminal-Bench 4.0 board. Every capability score is inherited from the same-architecture base model and labelled as such; the one third-party speed datapoint is quoted verbatim. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.3_FlashX.md`, using the same headings.
