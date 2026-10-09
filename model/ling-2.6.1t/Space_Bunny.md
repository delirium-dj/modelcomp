# Ling 2.6 1T — findings by Space Bunny

- Source: InclusionAI / Ant Group (`inclusionAI/Ling-2.6-1T`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Slug note:** the upstream ID is `Ling-2.6-1T` (hyphen before `1T`, the parameter count, not a version). This repo's on-disk folder is `ling-2.6.1t`; the canonical hyphen form `ling-2.6-1t` does **not** exist on disk, and `ling-2.6.1t` contains no digit-hyphen-digit join, so nothing here violates `RULES.md` slug identity. Research stayed in this folder.
>
> **Lifecycle warning — DEPRECATED.** CloudPrice records a **deprecation date of 2026-08-24**; OpenRouter serves it only as a `:free` variant. Adoption is minimal (**393 downloads in 30 days**, 74 Hugging Face likes). Prefer `ling-3.0-flash` (its own folder) for anything new.

## Model card

- **Name:** Ling-2.6-1T
- **Short description:** InclusionAI's (Ant Group) **trillion-parameter instant/instruct model**, released **2026-04-23** — the *fast-thinking* half of the 2.6 family, whose sibling **Ring-2.6-1T** is the deep-reasoning half with controllable effort. Its entire thesis is **token efficiency**: a "fast thinking" approach and a fast-thinking reward strategy that suppresses verbose chain-of-thought while holding capability, cutting token cost to **roughly a quarter of comparable models**. Rather than retraining a trillion-parameter model from scratch, it upgrades the Ling-2.0 base through architectural retrofit, continued pre-training and large-scale post-training, preserving the **20T-token** investment already made in Ling-2.0-1T. Top use case: high-volume production agents where fast execution and low token cost matter more than frontier reasoning depth.
- **Provider / access:** Hugging Face `inclusionAI/Ling-2.6-1T`; OpenRouter `inclusionai/ling-2.6-1t` **and a free `:free` variant** `inclusionai/ling-2.6-1t:free`; Novita AI (`novita:inclusionai/ling-2.6-1t`). Self-host via vLLM or SGLang. OpenAI-compatible. No OpenCode Zen ID found.
- **Release / knowledge:** Released **2026-04-23**. Technical report **arXiv:2606.15079, "Ling and Ring 2.6 Technical Report: Efficient and Instant Agentic Intelligence at Trillion-Parameter Scale," June 2026** (shared with Ring-2.6-1T). **Deprecated 2026-08-24.** Knowledge cutoff: not disclosed.
- **IDs:** `inclusionAI/Ling-2.6-1T` (HF), `inclusionai/ling-2.6-1t` (OpenRouter), `inclusionai/ling-2.6-1t:free` (free variant)
- **Context window:** **262K tokens (262,144)**, max output **33K** — consistent across CloudPrice, llmreference, OpenRouter and Opper. Verified on all four.
- **Modalities:** **Text in → text out only.** The HF repo is a `Text Generation` / `AutoModelForCausalLM` checkpoint (`bailing_hybrid`); CloudPrice lists text as the sole input and output modality (1 of 5 each). **Instant/instruct model — not a reasoning model** in the extended-thinking sense: llmreference flags reasoning as "Yes" for it, but the family report is explicit that Ling-2.6 is optimized for **instant response** with fast thinking rather than Ring-2.6's controllable reasoning effort. Tool calls / function calling: yes. Structured outputs: yes (llmreference lists structured outputs across the family; CloudPrice lists Function Calling and Structured Outputs).
- **Pricing (as of 2026-10-09):** **Free tier: $0** via OpenRouter's `inclusionai/ling-2.6-1t:free` variant. Paid: **OpenRouter $0.075 in / $0.625 out**, cache read $0.015 — among the cheapest routes for any trillion-parameter model; **Novita AI $0.30 / $2.50**. Open-weight licensing means self-hosting has no token cost. Note the OpenRouter description frames the free tier as standard access to a model whose design already targets "roughly a quarter of comparable" token cost.
- **Architecture:** proprietary weights released under an **open license** (Hugging Face tags the repo `License: mit`; llmreference records **Apache 2.0**, OSI-approved, commercial use permitted — the two differ and the LICENSE file was not read line-by-line here). **~1.03T total / ~63B active** sparse MoE. Hybrid linear attention combining **MLA with Lightning Linear components** to speed inference and shrink long-context memory. Base: **Ling-2.6-1T-base**, retrofit from Ling-2.0-1T-base with three architectural innovations that preserve that model's pre-trained capabilities.

### Raw benchmarks found

> Independent figures are from Artificial Analysis via CloudPrice, Opper and the AA model page. Vendor claims are from InclusionAI's OpenRouter description, Opper's summary and the family technical report.

Agent / tool use:

- **τ²-Bench (Telecom): 90%** (Artificial Analysis via Opper); CloudPrice lists **TAU2 0.9 → ~90%, #67** — this is the model's standout independent agentic number, well up from Ring-2.6-1T's own τ²-Bench position
- **Terminal-Bench Hard: 31%** (Artificial Analysis via Opper/CloudPrice, ~0.3, #101)
- BFCL-V4: named by Opper as a strong result — **no numeric value published**
- PinchBench: named by Opper as a strong result — **no numeric value published**. (For calibration, sibling Ring-2.6-1T posts **87.60** here.)
- GAIA-2 Search: the technical report attributes strong results to **Ring-2.6-1T**, and no Ling-2.6-1T figure is published
- Tau3-Banking / Tau2-Bench other domains, GDPval-AA, OSWorld, AutomationBench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- **GPQA Diamond: 75%** (Artificial Analysis via Opper; CloudPrice ~0.8, #219)
- **Humanity's Last Exam: 9%** (Artificial Analysis via Opper; CloudPrice ~0.1, **#262** — near the bottom of the field)
- **IFBench: 57%** (Artificial Analysis via Opper; CloudPrice ~0.6, #137)
- **Long-context reasoning (LCR): 42%** (Artificial Analysis via Opper; CloudPrice ~0.4, **#265**)
- **Artificial Analysis Intelligence Index: 17.0** — #189 of 686+ on CloudPrice's ranking, and **#251 of 676** globally on Opper's LLM leaderboard
- **Important discrepancy flagged:** the technical report states that *"On the Artificial Analysis Intelligence Index, **Ling-2.6-1T attains a score of 34 using only about 16M output tokens**, comparable to GPT-5.4 in the non-reasoning setting."* The **current** measured AA score for this model is **17**. The 34 figure is either an earlier checkpoint, a different configuration, or a stale claim; the measured 17 is used for scoring, and the token-efficiency framing (~4× higher than the 2.0 generation, ~16M output tokens) is retained as a design claim rather than a capability claim.
- AIME 2026: InclusionAI's OpenRouter description claims **state-of-the-art results on AIME26 and SWE-bench Verified** — **no numeric value is published**, and Artificial Analysis's current rows do not corroborate an SOTA AIME score. Not credited.
- CritPt / Omniscience / hallucination rate / MMLU-Pro: no verified public score found

Coding:

- **SWE-bench Verified: ~72%** (Opper, describing InclusionAI's result). No Artificial Analysis row for this model.
- **SciCode: ~40%** (Artificial Analysis via CloudPrice, ~0.4, #219)
- Terminal-Bench Hard: **31%** (see above)
- SWE-bench Pro / SWE-bench Multilingual / DeepSWE / LiveCodeBench / Vibe Code Bench: no verified public score found
- Coding Index: no verified public score found for this model

Multimodal:

- **Text-only.** No image, audio, video or PDF input; no non-text output. No multimodal benchmark exists.

Long context:

- **262,144 tokens**, verified on four sources. Retrieval evidence is **poor: LCR at only 42% (#265)** — among the weakest long-context results in the AA set, despite the hybrid linear attention stack being explicitly designed for long-context memory efficiency.
- No MRCR / RULER / GraphWalks / LongBench v2 numbers.
- The family-level claim of **~4× higher token efficiency on reasoning workloads than the 2.0 generation** and ~16M output tokens on the Intelligence Index is an efficiency metric, not a quality metric.

### Normalized scores (1–100)

- **Tool use: 78/100.** **τ²-Bench Telecom at ~90% (#67)** is a genuinely strong agentic-tool number for a 1T model and the clearest evidence for this model's "real-world agents" positioning, with Terminal-Bench Hard at 31% providing a second, weaker data point. Held to 78 by the absence of any published BFCL-V4, PinchBench, GDPval-AA, Tau3, Claw-Eval or MCP-Atlas value, and by the fact that the sibling Ring-2.6-1T — optimized for agentic depth — posts PinchBench 87.60 and ClawEval 63.82, numbers this instant model has not matched on any published row.
- **Reasoning: 58/100.** **GPQA Diamond 75%** is competent, but **HLE at 9% (#262)** and **LCR at 42% (#265)** are near the bottom of their fields, IFBench is only 57%, and the **AA Intelligence Index is just 17 (#251 of 676)**. The technical report's claimed Index of 34 is not reflected in any current measurement. Scored on measurement, not on the SOTA-AIME26 claim, which has no published number.
- **Context window: 78/100.** **262,144 tokens** — upper-mid tier, consistent across four sources. Held to 78 rather than higher because the one measured retrieval benchmark (**LCR 42%, #265**) is very weak, directly contradicting the long-context efficiency story the architecture is marketed on, and there is no MRCR/RULER/GraphWalks data.
- **Multimodal: 15/100.** **Text-only**, confirmed by the HF `Text Generation` causal-LM checkpoint and CloudPrice's 1-of-5 modality listing. Floor score by methodology. InclusionAI's vision-capable members are separate models (`Ling-3.0-flash-VL`) with their own folders.
- **Coding: 70/100.** **SWE-bench Verified ~72%** is respectable, but it is a vendor number with no Artificial Analysis corroboration, **SciCode at ~40% (#219)** is weak, **Terminal-Bench Hard 31%** is modest for this scale, and there is **no SWE-bench Pro, SWE-bench Multilingual, DeepSWE or LiveCodeBench figure at all**. For a 1T model, the coding evidence base is thin.
- **Cost efficiency: 98/100.** A genuine **$0 free tier** on OpenRouter, plus **$0.075 in / $0.625 out with $0.015 cache reads** — among the cheapest paid routes available for any trillion-parameter model — plus open weights for free self-hosting. The model's fast-thinking design (~16M output tokens, ~quarter of comparable cost) means effective per-task cost is likely well below even that. Held at 98 rather than 100 only because the model is **deprecated**, so pricing and availability are not durable, and Novita's route is 4–5× dearer.
- **Overall Score: 60/100.** Best fit: **very high-volume, cost-sensitive production agent and routing workloads on OpenRouter's free tier**, where ~90% τ²-Bench Telecom, a 262K window and ~quarter-cost token economics are genuinely attractive. Do **not** adopt it new: it was **deprecated on 2026-08-24**, its HLE of 9% and LCR of 42% are weak, and `ling-3.0-flash` in this same repo offers 316–373 tokens/s, a 262K native window, AA-LCR 73% and a far better $0.075/$0.22 tariff for the same ecosystem. Treat this folder as a legacy entry.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-09
- Method: public internet research cross-checked against the **shared family technical report** `arXiv:2606.15079` ("Ling and Ring 2.6 Technical Report"), the **Hugging Face model card** for `inclusionAI/Ling-2.6-1T`, **Artificial Analysis**'s Ling-2.6-1T model page and benchmark rows (as surfaced by CloudPrice's specification API and Opper's model record, both of which cite AA), CloudPrice's pricing and capability APIs including the **2026-08-24 deprecation date**, llmreference's family and model records (licensing, 262K context, 33K output, provider ladder), OpenRouter's model and **`:free` variant** pages, and InclusionAI's own model-family framing distinguishing Ling-2.6 (instant, token-efficient) from Ring-2.6 (deeper reasoning, controllable effort). Explicitly flagged the **unresolved conflict between the technical report's claimed AA Intelligence Index of 34 and the currently measured 17**, kept Ring-2.6-1T's PinchBench/ClawEval/GAIA-2 numbers out of this report, and declined to credit the uncorroborated "SOTA on AIME26 and SWE-bench Verified" claim where no number exists. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: this checkpoint is **deprecated (2026-08-24)** and serves only a free OpenRouter tier, so no successor report is warranted under this name. `ling-3.0-flash` is the live successor in this family and has its own folder.